import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Buffer } from "buffer";
import { AttributionEventPayload } from "./types";
import { COMMISSION_DEFAULT, getYearMonthKey } from "./config";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

// --- 1) HTTPS endpoint for logging events from frontend ----------------------

export const logEvent = functions.https.onRequest(async (req, res) => {
  // Allow CORS for local dev / web app
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = req.body as AttributionEventPayload;

    if (!body || !body.type || !body.caseStudyId || !body.studioId) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const event: AttributionEventPayload & {
      createdAt: admin.firestore.FieldValue;
      userAgent?: string;
      referrer?: string;
    } = {
      ...body,
      userAgent: body.userAgent || req.get("User-Agent") || undefined,
      referrer: body.referrer || req.get("Referer") || undefined,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection("attributionEvents").add(event);

    res.status(201).json({ id: docRef.id, status: "ok" });
  } catch (err: any) {
    console.error("logEvent error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// --- 2) Tracking pixel endpoint (for embeds / PDFs / static pages) ----------

export const pixel = functions.https.onRequest(async (req, res) => {
  try {
    const studioId = (req.query.studio as string) || "unknown";
    const caseStudyId = (req.query.cs as string) || "unknown";
    const source = (req.query.src as string) || "pixel";

    const event: AttributionEventPayload & {
      createdAt: admin.firestore.FieldValue;
      userAgent?: string;
      referrer?: string;
    } = {
      type: "view",
      studioId,
      caseStudyId,
      source,
      userAgent: req.get("User-Agent") || undefined,
      referrer: req.get("Referer") || undefined,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection("attributionEvents").add(event);
  } catch (err) {
    console.error("pixel error:", err);
    // Do not break the pixel on error
  }

  // Return a 1x1 transparent GIF
  const img = Buffer.from(
    "R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    "base64",
  );
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Content-Length", img.length.toString());
  res.status(200).send(img);
});

// --- 3) Firestore trigger: maintain monthly studio reports ------------------

export const aggregateAttribution = functions.firestore
  .document("attributionEvents/{eventId}")
  .onCreate(async (snap, context) => {
    const data = snap.data() as AttributionEventPayload & {
      createdAt?: admin.firestore.Timestamp;
      value?: number;
      studioId: string;
      type: string;
    };

    const studioId = data.studioId;
    if (!studioId) return;

    const eventDate = data.createdAt?.toDate() ?? new Date();
    const yearMonth = getYearMonthKey(eventDate);

    const reportRef = db
      .collection("studios")
      .doc(studioId)
      .collection("monthlyReports")
      .doc(yearMonth);

    await db.runTransaction(async (tx) => {
      const reportSnap = await tx.get(reportRef);

      const base = reportSnap.exists
        ? (reportSnap.data() as any)
        : {
            views: 0,
            clicks: 0,
            bookingRequests: 0,
            convertedBookings: 0,
            downloads: 0,
            attributedRevenue: 0,
            commissionDue: 0,
            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
          };

      const report = { ...base };

      // Increment counters based on event type
      switch (data.type) {
        case "view":
          report.views += 1;
          break;
        case "click_studio":
          report.clicks += 1;
          break;
        case "booking_request":
          report.bookingRequests += 1;
          break;
        case "converted_booking":
          report.convertedBookings += 1;
          if (typeof data.value === "number") {
            report.attributedRevenue += data.value;
          }
          break;
        case "download_pdf":
          report.downloads += 1;
          break;
        default:
          break;
      }

      // Fetch commission rate from studio doc (or default)
      const studioRef = db.collection("studios").doc(studioId);
      const studioSnap = await tx.get(studioRef);
      const studioData = studioSnap.data() as any | undefined;
      const commissionRate =
        studioData?.commissionRate ?? COMMISSION_DEFAULT;

      report.commissionDue = report.attributedRevenue * commissionRate;
      report.lastUpdated = admin.firestore.FieldValue.serverTimestamp();

      tx.set(reportRef, report, { merge: true });
    });
  });

// --- 4) Callable: fetch partner monthly reports for dashboard ----------------

export const getPartnerReports = functions.https.onCall(
  async (
    data: { studioId: string; limit?: number },
    context,
  ): Promise<{ reports: any[] }> => {
    const { studioId, limit = 12 } = data;
    if (!studioId) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "studioId is required",
      );
    }

    const reportsSnap = await db
      .collection("studios")
      .doc(studioId)
      .collection("monthlyReports")
      .orderBy("lastUpdated", "desc")
      .limit(limit)
      .get();

    const reports = reportsSnap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));

    return { reports };
  },
);

// --- 5) Callable: Register a manual conversion (revenue) --------------------

export const registerConversion = functions.https.onCall(
  async (
    data: {
      studioId: string;
      caseStudyId: string;
      value: number;
      source?: string;
      meta?: Record<string, any>;
    },
    context,
  ) => {
    // Note: In production, enable auth checks:
    // if (!context.auth) {
    //   throw new functions.https.HttpsError("unauthenticated", "Authentication required");
    // }

    const { studioId, caseStudyId, value, source, meta } = data;

    if (!studioId || !caseStudyId || typeof value !== "number") {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "studioId, caseStudyId, and numeric value are required",
      );
    }

    const event = {
      type: "converted_booking" as const,
      studioId,
      caseStudyId,
      value,
      source: source ?? "manual",
      meta: meta ?? {},
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection("attributionEvents").add(event);
    console.log("Registered conversion", docRef.id, event);

    return { id: docRef.id, status: "ok" };
  },
);

// --- 6) HTTPS: Seed Script to backfill fake data ----------------------------

export const seedStudioReports = functions.https.onRequest(
  async (req, res) => {
    // Simple shared secret guard
    const token = req.query.token as string;
    if (!token || token !== "STUDIOC_SEED_2025") {
      res.status(403).json({ error: "Forbidden" });
      return;
    }

    try {
      const studios = [
        {
          id: "ardent",
          name: "Ardent Studios",
          commissionRate: 0.07,
        },
        {
          id: "utopia",
          name: "Utopia Studios",
          commissionRate: 0.07,
        },
        {
          id: "clubhouse",
          name: "The Clubhouse",
          commissionRate: 0.07,
        },
      ];

      for (const s of studios) {
        const studioRef = db.collection("studios").doc(s.id);
        await studioRef.set(
          {
            name: s.name,
            commissionRate: s.commissionRate,
            isActive: true,
          },
          { merge: true },
        );

        // Seed 3 months of soft data
        const months = ["2025-10", "2025-11", "2025-12"];

        for (const ym of months) {
          const reportRef = studioRef.collection("monthlyReports").doc(ym);
          const baseViews =
            s.id === "ardent"
              ? 10000
              : s.id === "utopia"
              ? 6000
              : 4000;

          const convertedBookings =
            s.id === "ardent" ? 8 : s.id === "utopia" ? 5 : 3;

          const attributedRevenue =
            s.id === "ardent"
              ? 80000
              : s.id === "utopia"
              ? 45000
              : 30000;

          await reportRef.set({
            views: baseViews,
            clicks: Math.round(baseViews * 0.08),
            bookingRequests: convertedBookings * 2,
            convertedBookings,
            downloads: Math.round(baseViews * 0.02),
            attributedRevenue,
            commissionDue:
              attributedRevenue * (s.commissionRate ?? COMMISSION_DEFAULT),
            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
          });
        }
      }

      res.status(200).json({ status: "ok" });
    } catch (err: any) {
      console.error("seedStudioReports error", err);
      res.status(500).json({ error: "Internal error" });
    }
  },
);

// --- 7) Callable: Get Studio Summary ----------------------------------------

export const getStudioSummary = functions.https.onCall(
  async (data: { studioId: string }) => {
    const { studioId } = data;
    if (!studioId) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "studioId required",
      );
    }

    const studioRef = db.collection("studios").doc(studioId);
    const studioSnap = await studioRef.get();
    if (!studioSnap.exists) {
      throw new functions.https.HttpsError(
        "not-found",
        "Studio not found",
      );
    }

    const studio = studioSnap.data() as any;

    const reportsSnap = await studioRef
      .collection("monthlyReports")
      .orderBy("lastUpdated", "desc")
      .limit(6)
      .get();

    const reports = reportsSnap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));

    const totals = reports.reduce(
      (acc: any, r: any) => {
        acc.views += r.views ?? 0;
        acc.bookingRequests += r.bookingRequests ?? 0;
        acc.convertedBookings += r.convertedBookings ?? 0;
        acc.attributedRevenue += r.attributedRevenue ?? 0;
        acc.commissionDue += r.commissionDue ?? 0;
        return acc;
      },
      {
        views: 0,
        bookingRequests: 0,
        convertedBookings: 0,
        attributedRevenue: 0,
        commissionDue: 0,
      },
    );

    return {
      studio: {
        id: studioId,
        ...studio,
      },
      reports,
      totals,
    };
  },
);

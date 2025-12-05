
import { env } from "../env";

export type AttributionEventType =
  | "view"
  | "click_studio"
  | "booking_request"
  | "converted_booking"
  | "download_pdf";

export interface AttributionEventPayload {
  type: AttributionEventType;
  caseStudyId: string;
  studioId: string;
  source?: string;
  value?: number;
  sessionId?: string;
  meta?: Record<string, any>;
}

export async function logAttribution(
  payload: AttributionEventPayload,
): Promise<void> {
  // If we are in mock mode (no keys), log to console and exit to prevent 404s
  if (env.isMock) {
    console.log('[Mock Attribution] Logged:', payload);
    return;
  }

  try {
    const body = {
      ...payload,
      sessionId:
        payload.sessionId ||
        (typeof window !== "undefined"
          ? window.localStorage.getItem("sc_session") ??
            generateSessionId()
          : undefined),
      userAgent:
        typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      referrer:
        typeof document !== "undefined" ? document.referrer : undefined,
    };

    if (
      typeof window !== "undefined" &&
      body.sessionId &&
      !window.localStorage.getItem("sc_session")
    ) {
      window.localStorage.setItem("sc_session", body.sessionId);
    }

    const res = await fetch(`${env.functionsBaseUrl}/logEvent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.warn("logAttribution failed", await res.text());
    }
  } catch (err) {
    console.error("logAttribution error", err);
  }
}

function generateSessionId(): string {
  return (
    "sc_" +
    Math.random().toString(36).slice(2) +
    Date.now().toString(36)
  );
}

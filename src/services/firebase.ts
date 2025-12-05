
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  type Firestore,
} from "firebase/firestore";
import {
  getFunctions,
  httpsCallable,
  type Functions,
} from "firebase/functions";
import { env } from "../env";

// Initialize Firebase with universal config
// This uses the safe env loader to prevent crashes if keys are missing
const app = initializeApp(env.firebase);

export const db: Firestore = getFirestore(app);
export const functions: Functions = getFunctions(app);

// Helper for callable function
export const getPartnerReportsFn = httpsCallable<
  { studioId: string; limit?: number },
  { reports: any[] }
>(functions, "getPartnerReports");

export const registerConversionFn = httpsCallable<
  { studioId: string; caseStudyId: string; value: number; source?: string; meta?: Record<string, any> },
  { id: string; status: string }
>(functions, "registerConversion");

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

const firebaseConfig = {
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY,
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(app);
export const functions: Functions = getFunctions(app);

// Helper for callable function
export const getPartnerReportsFn = httpsCallable<
  { studioId: string; limit?: number },
  { reports: any[] }
>(functions, "getPartnerReports");
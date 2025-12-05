import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

interface RegisterConversionInput {
  studioId: string;
  caseStudyId: string;
  value: number;
  source?: string;
  meta?: Record<string, any>;
}

const registerConversionFn = httpsCallable<
  RegisterConversionInput,
  { id: string; status: string }
>(functions, "registerConversion");

export async function registerConversion(input: RegisterConversionInput) {
  const value = Number(input.value);
  if (isNaN(value) || value <= 0) {
    throw new Error("Value must be a positive number.");
  }

  const res = await registerConversionFn({
    ...input,
    value,
  });

  return res.data;
}
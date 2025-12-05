import { getPartnerReportsFn } from "./firebase";

export interface MonthlyReport {
  id: string; // "YYYY-MM"
  views: number;
  clicks: number;
  bookingRequests: number;
  convertedBookings: number;
  downloads: number;
  attributedRevenue: number;
  commissionDue: number;
  lastUpdated?: string;
}

export async function fetchPartnerReports(
  studioId: string,
  limit = 12,
): Promise<MonthlyReport[]> {
  const res = await getPartnerReportsFn({ studioId, limit });
  const { reports } = res.data;
  return (reports as any[]).map((r) => ({
    id: r.id,
    views: r.views ?? 0,
    clicks: r.clicks ?? 0,
    bookingRequests: r.bookingRequests ?? 0,
    convertedBookings: r.convertedBookings ?? 0,
    downloads: r.downloads ?? 0,
    attributedRevenue: r.attributedRevenue ?? 0,
    commissionDue: r.commissionDue ?? 0,
    lastUpdated: r.lastUpdated?.toDate?.()?.toISOString?.() ?? undefined,
  }));
}
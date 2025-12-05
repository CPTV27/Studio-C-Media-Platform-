export type SponsorTier = "title" | "segment" | "supporting" | "in-kind";

export interface SponsorPlacement {
  id: string;
  label: string;             // "Title card", "Segment bumper", etc.
  type: "visual" | "verbal" | "link" | "product-demo";
  description: string;
  exampleScript?: string;    // optional microcopy
}

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  categories: string[];      // ["microphones", "monitoring"]
  url?: string;

  // Where they can appear
  allowedPlacements: SponsorPlacement[];

  // Which studios / series they are aligned with
  alignedStudios: string[];  // ["ardent", "utopia"]
  alignedSeriesIds: string[];

  // Basic commercial terms
  commercial: {
    cash?: number;
    inKind?: string[];
    campaignWindow?: {
      start: string;
      end: string;
    };
    requiresApproval: boolean;
  };

  notes?: string;
}
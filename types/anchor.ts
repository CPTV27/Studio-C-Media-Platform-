export type PartnershipLevel = "anchor" | "preferred" | "episodic" | "one-off";

export type StudioArchetype =
  | "heritage"     // Ardent
  | "boutique"     // Clubhouse
  | "retreat"      // Utopia
  | "session"
  | "identity";

export interface SeriesDefinition {
  id: string;
  title: string;
  archetype: StudioArchetype;
  logline: string;
  description: string;
  suggestedFormats: string[]; // ["feature", "shorts", "stills", "podcast"]
  cadence?: string;           // "quarterly", "monthly", "campaign-based"
}

export interface ProjectReference {
  id: string;
  title: string;
  year: number;
  type: string;               // "doc", "session", "site", "campaign"
  url?: string;
}

export interface StudioProfile {
  ownership: string;
  signatureGear: string[];
  sonicTraits: string[];
  architecturalTraits: string[];
  localContext: string;
}

export interface BrandOpportunity {
  crossPromo: boolean;
  gearSponsorships: boolean;
  artistPipeline: boolean;
  revenueShareEligible: boolean;
  notes?: string;
}

export interface PartnerStudio {
  id: string;
  name: string;
  location: string;
  archetype: StudioArchetype;
  partnershipLevel: PartnershipLevel;
  overview: string;

  studioProfile: StudioProfile;
  recurringProjects: ProjectReference[];
  suggestedSeries: SeriesDefinition[];
  brandOpportunities: BrandOpportunity;

  primaryContact?: {
    name: string;
    role: string;
    email?: string;
  };

  // Link into your existing CaseStudy / Catalog system
  linkedCaseStudyIds: string[];

  // Basic analytics hook (can be extended)
  metrics?: {
    catalogItems: number;
    totalViewsEstimate: number;
    attributedBookingsEstimate?: number;
  };
}
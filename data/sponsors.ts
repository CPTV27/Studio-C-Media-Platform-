import { Sponsor } from "../types/sponsor";

export const SENNHEISER_SPONSOR: Sponsor = {
  id: "sennheiser",
  name: "Sennheiser",
  tier: "segment",
  categories: ["microphones", "monitoring"],

  url: "https://www.sennheiser.com/",

  allowedPlacements: [
    {
      id: "doc_open_title",
      label: "Documentary Opening Title",
      type: "visual",
      description:
        "Subtle 'Presented in partnership with Sennheiser' card at the beginning of the Ardent documentary.",
      exampleScript: "Presented in partnership with Sennheiser.",
    },
    {
      id: "session_lwr_third",
      label: "Session Lower Third",
      type: "visual",
      description:
        "Discreet Sennheiser logo lower third when a Sennheiser mic is featured in the shot.",
    },
    {
      id: "gear_segment",
      label: "Mic Feature Segment",
      type: "product-demo",
      description:
        "Short segment highlighting how a Sennheiser mic is used in the room, framed as documentation rather than ad copy.",
      exampleScript:
        "For this vocal take, we’re on a Sennheiser [model], which fits the room tone and the artist’s dynamic range.",
    },
  ],

  alignedStudios: ["ardent", "utopia"],
  alignedSeriesIds: ["ardent-heritage", "utopia-retreat"],

  commercial: {
    cash: 1, // placeholder, negotiate actual number
    inKind: ["microphones for studio use", "loaner units for sessions"],
    campaignWindow: {
      start: "2025-02-01T00:00:00.000Z",
      end: "2025-08-01T00:00:00.000Z",
    },
    requiresApproval: true,
  },

  notes:
    "Initial sponsor win for Studio C; prioritize tasteful integrations in Ardent documentary and Utopia sessions.",
};
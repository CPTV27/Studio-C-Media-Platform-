import { PartnerStudio } from "../types/anchor";

export const ARDENT_ANCHOR: PartnerStudio = {
  id: "ardent",
  name: "Ardent Studios",
  location: "Memphis, TN",
  archetype: "heritage",
  partnershipLevel: "anchor",
  overview:
    "A historic Memphis studio with a 50+ year lineage, newly upgraded Studio B with a 48-channel SSL Duality Fuse console, and ongoing documentary and editorial work with Studio C.",

  studioProfile: {
    ownership: "Jody Stephens & partners",
    signatureGear: [
      "SSL Duality Fuse 48-channel (Studio B)",
      "Classic outboard: LA-2A, 1176, Pultec",
      "Historic tape machines",
    ],
    sonicTraits: [
      "Deep low-end translation",
      "Classic Memphis warmth",
      "Rooms tuned for rock, soul, and modern pop",
    ],
    architecturalTraits: [
      "Multi-room complex",
      "Legacy live rooms",
      "Modernized control rooms",
    ],
    localContext:
      "Located in Memphis, a critical node in American music history, with a catalog spanning rock, soul, and modern independent records.",
  },

  recurringProjects: [
    {
      id: "ardent-mix-cover",
      title: "Mix Magazine Cover Story – SSL Duality Fuse Install",
      year: 2025,
      type: "editorial-photo",
      url: "https://www.mixonline.com/recording/facilities/ardent-studios-unveils-studio-b-upgrades",
    },
    {
      id: "ardent-doc",
      title: "Ardent × Sennheiser Documentary",
      year: 2025,
      type: "documentary",
    },
    {
      id: "ardent-site",
      title: "New Ardent Website – Design & Photography",
      year: 2025,
      type: "site-build",
    },
  ],

  suggestedSeries: [
    {
      id: "ardent-heritage",
      title: "The Doors at Ardent",
      archetype: "heritage",
      logline:
        "Short films and stills about the rooms, gear, and sessions that built Ardent’s legacy.",
      description:
        "A recurring series that treats Ardent as a living archive, connecting past records to present-day work while highlighting the SSL Duality Fuse upgrade.",
      suggestedFormats: ["feature", "shorts", "stills", "podcast"],
      cadence: "quarterly",
    },
    {
      id: "ardent-upgrade",
      title: "Studio B Rebuilt",
      archetype: "heritage",
      logline:
        "How a historic Memphis studio rebuilt a room around a modern SSL console.",
      description:
        "Focused on the renovation, technical decisions, and sonic outcomes of Studio B’s upgrade.",
      suggestedFormats: ["feature", "shorts", "stills"],
    },
  ],

  brandOpportunities: {
    crossPromo: true,
    gearSponsorships: true,
    artistPipeline: true,
    revenueShareEligible: true,
    notes:
      "Ardent is actively introducing Studio C to other studios and brand partners. Strong candidate for referral-based commission and co-produced series.",
  },

  primaryContact: {
    name: "Jody Stephens",
    role: "Owner / Partner",
  },

  linkedCaseStudyIds: ["ardent-studios"],
  metrics: {
    catalogItems: 3,
    totalViewsEstimate: 50000,
    attributedBookingsEstimate: 3,
  },
};

export const CLUBHOUSE_ANCHOR: PartnerStudio = {
  id: "clubhouse",
  name: "The Clubhouse",
  location: "Rhinebeck, NY",
  archetype: "boutique",
  partnershipLevel: "anchor",
  overview:
    "A precision boutique studio in upstate New York with high-end consoles and a quiet, focused aesthetic, documented by Studio C for Mix Magazine and multiple in-house projects.",

  studioProfile: {
    ownership: "Paul Antonell",
    signatureGear: [
      "High-end analogue console",
      "Extensive mic locker",
      "Mastering-grade monitoring",
    ],
    sonicTraits: [
      "Hyper-detailed translation",
      "Tight low-end control",
      "Ideal for rock, indie, and singer-songwriter work",
    ],
    architecturalTraits: [
      "Rural location",
      "Carefully tuned control room",
      "Live room with flexible acoustics",
    ],
    localContext:
      "Located in the Hudson Valley, serving New York artists who want big-city quality outside the city.",
  },

  recurringProjects: [
    {
      id: "clubhouse-mix-feature",
      title: "Mix Magazine – Inside the Clubhouse",
      year: 2024,
      type: "editorial-photo",
      url: "https://www.mixonline.com/recording/facilities/inside-the-clubhouse",
    },
    {
      id: "clubhouse-sessions",
      title: "Studio C Sessions @ The Clubhouse",
      year: 2024,
      type: "session-series",
    },
  ],

  suggestedSeries: [
    {
      id: "clubhouse-precision",
      title: "Precision in the Woods",
      archetype: "boutique",
      logline:
        "Short films pairing rural stillness with high-end studio precision.",
      description:
        "Visual contrasts between the quiet exterior world and the detailed control of the Clubhouse’s rooms and gear.",
      suggestedFormats: ["shorts", "stills", "feature"],
      cadence: "campaign-based",
    },
  ],

  brandOpportunities: {
    crossPromo: true,
    gearSponsorships: true,
    artistPipeline: true,
    revenueShareEligible: true,
    notes:
      "Multiple Studio C projects already in-flight. Strong base for recurring documentation and brand integrations.",
  },

  primaryContact: {
    name: "Paul Antonell",
    role: "Owner",
  },

  linkedCaseStudyIds: ["the-clubhouse"],
  metrics: {
    catalogItems: 2,
    totalViewsEstimate: 25000,
  },
};

export const UTOPIA_ANCHOR: PartnerStudio = {
  id: "utopia",
  name: "Utopia Studios Bearsville",
  location: "Bearsville / Woodstock, NY",
  archetype: "retreat",
  partnershipLevel: "anchor",
  overview:
    "A retreat-style studio in the woods of upstate New York, documented and branded end-to-end by Studio C across web, photography, and sessions.",

  studioProfile: {
    ownership: "Utopia / Bearsville partners",
    signatureGear: [
      "Hybrid analogue/digital setup",
      "Vintage instruments and amps",
      "Character outboard",
    ],
    sonicTraits: [
      "Lush ambience",
      "Natural room tone",
      "Ideal for bands, songwriters, and live-in-the-room sessions",
    ],
    architecturalTraits: [
      "Cabin aesthetic",
      "Large windows / nature views",
      "Integrated living + recording spaces",
    ],
    localContext:
      "Situated in the Bearsville / Woodstock orbit, connected to decades of musician traffic and creative energy.",
  },

  recurringProjects: [
    {
      id: "utopia-site",
      title: "Utopia Website – Design & Photography",
      year: 2024,
      type: "site-build",
      url: "https://www.utopiabearsville.com/",
    },
    {
      id: "utopia-sessions",
      title: "Sessions at Utopia – Matt Pond, Felice Brothers, others",
      year: 2024,
      type: "session-series",
    },
  ],

  suggestedSeries: [
    {
      id: "utopia-retreat",
      title: "The Cabin Sessions",
      archetype: "retreat",
      logline: "Bands and artists making records in the woods.",
      description:
        "A recurring series that leans into the retreat aspect: arrival, settling in, tracking, reflection.",
      suggestedFormats: ["feature", "shorts", "stills", "podcast"],
      cadence: "campaign-based",
    },
  ],

  brandOpportunities: {
    crossPromo: true,
    gearSponsorships: true,
    artistPipeline: true,
    revenueShareEligible: true,
    notes:
      "Ideal for brand hospitality content (gear makers bringing artists to Utopia to create sessions and features).",
  },

  primaryContact: undefined,
  linkedCaseStudyIds: ["utopia-studios"],
  metrics: {
    catalogItems: 2,
    totalViewsEstimate: 18000,
  },
};

export const ANCHOR_PARTNERS: PartnerStudio[] = [
  ARDENT_ANCHOR,
  CLUBHOUSE_ANCHOR,
  UTOPIA_ANCHOR,
];
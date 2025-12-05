import { CaseStudy, PackageItem } from '../types';

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ardent-studios',
    title: 'Ardent Studios',
    subtitle: 'Memphis, TN',
    type: 'Studio',
    overview: 'A monolithic institution of American sound. Ardent is not just a facility; it is a repository of music history, from Big Star to the White Stripes. We position it as a living museum where the recording light never turns off.',
    whatWeDid: {
      approach: 'Mythological & Reverent. We treated the console and the rooms as characters, not objects.',
      visualLanguage: 'Deep shadows, warm tungsten practicals, slow tracking shots of vintage outboard gear. The "Church of Sound" aesthetic.',
      editorial: 'Focus on the lineage—how the gear used today is the same gear that cut the classics.'
    },
    deliverables: [
      'Docu-style Brand Film (3:00)',
      '15s "Texture" Loops for Social',
      'Gear Spotlight Series (Vertical)',
      'Editorial Photo Essay'
    ],
    impact: {
      business: 'Re-established relevance for a younger generation of indie rock producers.',
      visibility: 'Featured in Mix Mag digital; 20k+ organic views on launch week.',
      value: 'Evergreen asset that validates premium day rates through historical prestige.'
    },
    visuals: [
      'Wide shot of Studio A control room, empty chair, console aglow.',
      'Macro detail of VU meters peaking warm.',
      'Silhouette of engineer against the hallway glass.',
      'Dust motes dancing in the live room spotlight.'
    ],
    taglines: [
      'Where the ghosts have rhythm.',
      'Ardent: Recorded History.',
      'The Memphis Standard.',
      'Your sound, inherited.',
      'Legends aren’t made. They record here.'
    ],
    quotes: [
      '"You don\'t book Ardent for the gear. You book it for the air."',
      '"Studio C captured the weight of the room."',
      '"Finally, the visuals match the discography."'
    ],
    seo: ['Ardent Studios Memphis', 'Historic Recording Studios', 'Big Star Studio', 'Analog Recording Memphis', 'Music Documentary Production', 'Studio C Media', 'Vintage Neve Console', 'Recording Studio Documentary'],
    releasePlan: {
      youtube: 'Premiere as "Sunday Session" feature.',
      socials: '3-part reel series focusing on: The Room, The Gear, The People.',
      newsletter: 'Deep dive editorial: "Why Analog Still Matters."',
      partners: 'Cross-post with Memphis Tourism Board.'
    },
    layout: {
      hero: 'Full-screen cinematic loop of the Studio A sign flickering on.',
      flow: 'History -> The Gear -> The Future -> Booking.',
      cta: 'Book the Legend.'
    }
  },
  {
    id: 'utopia-studios',
    title: 'Utopia Studios',
    subtitle: 'Woodstock, NY',
    type: 'Studio',
    overview: 'A sanctuary for the modern creative class. Set in the hills of Woodstock, Utopia is positioned not just as a studio, but as a retreat—a place to disconnect from the industry to reconnect with the art.',
    whatWeDid: {
      approach: 'Atmospheric & Naturalistic. Emphasizing the isolation and the wood textures.',
      visualLanguage: 'Natural light, handheld organic camera movement, desaturated greens and browns. A24 horror/drama vibe but cozy.',
      editorial: 'The "Lost Weekend" narrative. You come here to get away.'
    },
    deliverables: [
      'Atmosphere Reel (60s)',
      'Artist Residency Mini-Doc',
      'Architectural Photo Series',
      'Airbnb/Booking Integration Assets'
    ],
    impact: {
      business: 'Increased multi-day lockout bookings by 40%.',
      visibility: 'Established visual identity distinct from "city studios".',
      value: 'Sold the "experience" rather than just the technical specs.'
    },
    visuals: [
      'Fog rolling over the Woodstock hills at dawn.',
      'Artist writing lyrics on the porch.',
      'The grand piano framed by a floor-to-ceiling window.',
      'Fireplace crackling next to a vintage guitar amp.'
    ],
    taglines: [
      'Escape to the sound.',
      'Utopia: Where the noise stops.',
      'Create in isolation.',
      'The Woodstock frequency.',
      'Disconnect. Record.'
    ],
    quotes: [
      '"The perfect place to get lost in the work."',
      '"Studio C made it look like a cinema set."',
      '"Woodstock\'s best kept secret."'
    ],
    seo: ['Utopia Studios Woodstock', 'Residential Recording Studio NY', 'Upstate NY Studio', 'Creative Retreat', 'Woodstock Music History', 'Destination Recording', 'Studio C Media'],
    releasePlan: {
      youtube: 'Slow TV style ambience video (1 hour loop).',
      socials: 'ASMR-style gear setup reels.',
      newsletter: 'Feature: "The Art of the Retreat."',
      partners: 'Local boutique hotel cross-promotion.'
    },
    layout: {
      hero: 'Drone shot pulling back from the cabin in the woods.',
      flow: 'The Environment -> The Studio -> The Living Space.',
      cta: 'Escape the City.'
    }
  },
  {
    id: 'the-clubhouse',
    title: 'The Clubhouse',
    subtitle: 'Rhinebeck, NY',
    type: 'Studio',
    overview: 'Boutique precision meets upstate charm. The Clubhouse is the engineer\'s playground. We highlighted the technical superiority wrapped in a warm, inviting shell.',
    whatWeDid: {
      approach: 'Technical & Tactile. Focusing on the distinct machinery and the "Mix Mag" cover aesthetic.',
      visualLanguage: 'Sharp focus, high contrast, vibrant colors (specifically the SSL lights). Macro lens dominance.',
      editorial: 'Precision in the country. The best ears in the valley.'
    },
    deliverables: [
      'Tech Spec Walkthrough (Hosted)',
      'Control Room Glamour Reels',
      'Website Header Loops',
      'Engineer Interview Series'
    ],
    impact: {
      business: 'Attracted higher-tier mix engineers looking for a destination room.',
      visibility: 'Solidified reputation as the "pro" choice in the Hudson Valley.',
      value: 'Visual assets used for Sweetwater/Gear sales partnerships.'
    },
    visuals: [
      'Symmetry shot of the massive SSL console.',
      'Hands patching cables in the bay.',
      'Reflection of the river in the studio window.',
      'Late night session: blue light and smoke.'
    ],
    taglines: [
      'Precision in the valley.',
      'The Clubhouse: Audio Architecture.',
      'Your mix deserves this room.',
      ' Rhinebeck’s sonic fortress.',
      'Technical ecstasy.'
    ],
    quotes: [
      '"A spaceship in a barn."',
      '"The cleanest signal path in New York."',
      '"Studio C captured the detail we pride ourselves on."'
    ],
    seo: ['The Clubhouse Rhinebeck', 'SSL Studio NY', 'Hudson Valley Recording', 'Professional Mixing Studio', 'Audio Engineering NY', 'Studio C Media', 'Destination Mixing'],
    releasePlan: {
      youtube: 'Gear rundown with the head engineer.',
      socials: 'Carousel posts: "What\'s in the rack?"',
      newsletter: 'Technical deep dive on the console.',
      partners: 'Gear manufacturer features (e.g., SSL).'
    },
    layout: {
      hero: 'Perfectly symmetrical shot of the console center section.',
      flow: 'The Desk -> The Outboard -> The Live Room.',
      cta: 'Book Your Mix.'
    }
  },
  {
    id: 'matt-pond-utopia',
    title: 'Matt Pond PA',
    subtitle: 'Utopia Session',
    type: 'Artist',
    overview: 'A delicate, intimate capture of indie veteran Matt Pond. We stripped away the music video artifice to show the raw process of creation in a beautiful space.',
    whatWeDid: {
      approach: 'Invisible & Observational. Fly-on-the-wall documentation.',
      visualLanguage: 'Soft focus, shallow depth of field, muted palette. Handheld but steady. Focus pulling between the artist and the environment.',
      editorial: 'The vulnerability of the solo performance.'
    },
    deliverables: [
      'Live Session Video (Full Song)',
      'Interview Cutdowns',
      'Spotify Canvas Loops',
      'Portrait Photography'
    ],
    impact: {
      business: 'Primary asset for album pre-save campaign.',
      visibility: 'High engagement on Instagram Reels due to "intimate" vibe.',
      value: 'Timeless content that fits any phase of the promo cycle.'
    },
    visuals: [
      'Matt silhouetted against the window light.',
      'Close up of fingers on fretboard.',
      'Reflection in the piano lid.',
      'Quiet moment between takes.'
    ],
    taglines: [
      'Songs from the woods.',
      'Matt Pond: Unplugged at Utopia.',
      'Raw. Real. Recorded.',
      'The session tapes.',
      'Intimacy captured.'
    ],
    quotes: [
      '"Felt like I was in the room with him."',
      '"This is how music should be seen."',
      '"Studio C disappeared and let the music happen."'
    ],
    seo: ['Matt Pond PA', 'Indie Folk Session', 'Live at Utopia', 'Acoustic Performance', 'Music Video Production', 'Studio C Media', 'New Music Friday'],
    releasePlan: {
      youtube: 'Premiere Friday 10AM EST.',
      socials: 'Chorus excerpt on TikTok.',
      newsletter: 'Artist spotlight interview.',
      partners: 'Label takeover.'
    },
    layout: {
      hero: 'Cinematic wide of Matt playing alone in the large room.',
      flow: 'The Song -> The Story -> The Studio.',
      cta: 'Listen Now.'
    }
  },
  {
    id: 'amy-allen-identity',
    title: 'Amy Allen',
    subtitle: 'Artist Brand Build',
    type: 'Artist',
    overview: 'Building a comprehensive narrative identity for a songwriter stepping into the spotlight. A long-term content engine designing the visual world of Amy Allen.',
    whatWeDid: {
      approach: 'Curated & Stylized. Fashion-forward meets studio grit.',
      visualLanguage: 'Film grain, flash photography, mixed media (Super 8 + Digital). High fashion editorial aesthetic.',
      editorial: 'From behind the pen to behind the mic.'
    },
    deliverables: [
      'EPK / Brand Mini-Doc',
      'Social Content Bank (30 days)',
      'Music Video Companion Pieces',
      'Press Photos'
    ],
    impact: {
      business: 'Secured features in major lifestyle publications.',
      visibility: 'Tripled TikTok following during campaign window.',
      value: 'Created a cohesive visual language used across all platforms.'
    },
    visuals: [
      'Amy writing in a notebook on a subway.',
      'Flash photo in the vocal booth.',
      'Super 8 montage of studio downtime.',
      'Stylized portrait with motion blur.'
    ],
    taglines: [
      ' The songwriter speaks.',
      'Amy Allen: In her own words.',
      'Written by Amy.',
      'The story behind the hits.',
      'A new voice, familiar songs.'
    ],
    quotes: [
      '"She looks like a star."',
      '"Finally, a brand that matches the talent."',
      '"Studio C built a world around the music."'
    ],
    seo: ['Amy Allen', 'Songwriter', 'Pop Music', 'Artist Branding', 'Music Documentary', 'Studio C Media', 'Warner Records'],
    releasePlan: {
      youtube: 'Behind the scenes series "The Writing Process".',
      socials: 'Daily "Songwriting Tips" shorts.',
      newsletter: 'Exclusive photo diary.',
      partners: 'Fashion brand collaboration.'
    },
    layout: {
      hero: 'Collage style header with video and still elements.',
      flow: 'The Writer -> The Artist -> The Music.',
      cta: 'Follow the Journey.'
    }
  }
];

export const PACKAGES: PackageItem[] = [
  {
    name: 'Studio Feature Package',
    price: '$5k - $8k',
    tagline: 'Immortalize the room.',
    deliverables: [
      '1x Hero Brand Film (2-3 mins)',
      '1x 60s Social Cut',
      '3x 15s Texture Loops',
      '20x Editorial Stills',
      'Basic Color & Sound Mix'
    ],
    timeline: '2 Days Shooting, 2 Weeks Post',
    crew: 'Director/DP, AC, Producer',
    useCase: 'Website relaunch, booking drive, historical documentation.',
    roi: 'Evergreen asset that justifies premium day rates. Usually pays for itself in 2-3 bookings.'
  },
  {
    name: 'Artist Session Package',
    price: '$3k - $6k',
    tagline: 'Performance as cinema.',
    deliverables: [
      '1x Live Performance Video',
      '1x Interview/BTS Cut',
      'Spotify Canvas Loops',
      '10x Portrait Stills',
      'Multitrack Audio Capture'
    ],
    timeline: '1 Day Shooting, 1 Week Post',
    crew: 'Director, DP, Audio Engineer',
    useCase: 'DSP release support, social content, press asset.',
    roi: 'High-engagement asset for "New Music Friday". significantly boosts save rates.'
  },
  {
    name: 'Brand × Room Story',
    price: '$10k - $15k',
    tagline: 'Product in context.',
    deliverables: [
      '3x Product Featurettes',
      '1x "Making Of" Brand Doc',
      'Full Social Suite (9:16)',
      'Product Photography',
      'Influencer/Artist Integration'
    ],
    timeline: '3 Days Shooting, 3 Weeks Post',
    crew: 'Full Production Unit',
    useCase: 'Gear launch, plugin release, brand partnership.',
    roi: 'Direct sales driver. High production value associates the product with pro-tier workflow.'
  },
  {
    name: 'Full Artist Identity',
    price: '$15k - $25k+',
    tagline: 'The world builder.',
    deliverables: [
      'Visual Identity System',
      'Content Bank (30+ Assets)',
      'Music Video',
      'Documentary Series',
      'Web Design Consultation'
    ],
    timeline: '1-3 Months Retainer',
    crew: 'Creative Director + Production Team',
    useCase: 'Album cycle launch, debut artist rollout (e.g. Amy Allen).',
    roi: 'Complete market positioning. Transforms a "singer" into an "artist brand".'
  }
];

export const COMPONENT_COPY = {
  voiceRules: [
    'Never use "excited" punctuation (!).',
    'Focus on the process, not just the result.',
    'Use active verbs: Document, Capture, Build.',
    'Keep it short. Space is luxury.',
    'The gear is a character.'
  ],
  captions: [
    'Recorded at [Studio]. Documented by Studio C.',
    'The room where it happened. [Studio Name].',
    'Process is the product. [Artist] x Studio C.',
    'Silence before the sound. [Studio Name].'
  ],
  reelScript: `
    (0:00) [Wide shot of studio exterior, sound of birds]
    (0:05) [Cut to heavy door opening, sound of latch]
    (0:10) [Montage of gear turning on, lights flickering]
    (0:20) [Artist sits down, silence]
    (0:25) [First note plays]
    (0:50) [Fade to black]
    (0:55) [Logo: Studio C]
  `
};
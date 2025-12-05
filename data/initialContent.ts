import { CaseStudy, PackageItem } from '../types';

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ardent-studios',
    title: 'Ardent Studios',
    subtitle: 'Memphis, TN',
    type: 'Studio',
    year: 2024,
    tags: ['heritage', 'memphis', 'documentary', 'analog', 'sennheiser'],
    overview: 'Ardent is a room with decades in the walls—rock, soul, and engineering craft held together by people who understand the difference between signal and noise. The feature focuses on the spaces that built records, the hands that keep them running, and the quiet confidence of a studio that was never chasing relevance. It simply stayed relevant.',
    whatWeDid: {
      approach: 'Restrained & Observational. Coverage, not promotion.',
      visualLanguage: 'Low-key tungsten, hand details on faders, rack close-ups, tape machines in shallow DOF.',
      editorial: 'Focus on lineage—how the gear used today is the same gear that cut the classics. A portrait of a place still doing the work.'
    },
    featureOutline: [
      {
        title: 'Opening: The Hallway',
        items: ['Slow pan of the corridor', 'Still frames of tape machines', 'The quiet hum of the facility']
      },
      {
        title: 'Chapter 1: The Rooms',
        items: ['Control Room A', 'The Tracking Room', 'The piano with history baked in']
      },
      {
        title: 'Chapter 2: The People',
        items: ['Engineers as storytellers', 'Notes about lineage (Big Star, etc.)']
      },
      {
        title: 'Chapter 3: The Work',
        items: ['Modern acts recording', 'Detail shots: mics, consoles, patch bays', 'The moment where craft meets instinct']
      },
      {
        title: 'Chapter 4: Heritage Without Nostalgia',
        items: ['The place isn’t a museum', 'It’s a working studio, still evolving']
      },
      {
        title: 'Closing: The Light in the Booth',
        items: ['The session ends', 'The story doesn’t']
      }
    ],
    deliverables: [
      '12:47 Documentary Feature',
      '3x Cinematic Reels (Control Room, Gear, Engineer)',
      'Podcast: "The Quiet Room" (15m)',
      'Sennheiser Micro-piece'
    ],
    impact: {
      business: 'Demonstrates the full Studio C model: Feature -> Coverage -> Archive.',
      visibility: 'Positions Ardent as the "heritage studio" archetype for the platform.',
      value: 'The product is not the video. The product is the visibility.'
    },
    visuals: [
      'Hero: Low-key tungsten-lit board shots',
      'Detail: Hand details on faders, rack close-ups (Neve, compressors)',
      'Atmosphere: Dust motes dancing in the live room spotlight',
      'Portrait: Engineer silhouettes against the hallway glass',
      'Texture: Tape machines in shallow DOF'
    ],
    taglines: [
      'Where the catalog lives on.',
      'A Memphis story in every channel.',
      'Legacy, recorded.',
      'The room that shaped the room.',
      'Ardent: Still in session.'
    ],
    quotes: [
      '"You don\'t just record here — you join the story."',
      '"Every piece of gear carries a memory."',
      '"Memphis runs through the wiring."'
    ],
    seo: ['Ardent Studios Memphis', 'Historic Recording Studios', 'Big Star Studio', 'Analog Recording Memphis', 'Music Documentary Production', 'Studio C Media', 'Vintage Neve Console', 'Recording Studio Documentary'],
    assets: {
      hero: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
      stills: [
        'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519508234439-4f23643125c1?q=80&w=2098&auto=format&fit=crop'
      ]
    },
    distribution: {
      youtubeUrl: 'https://youtube.com/studioc/ardent',
      instagramHandle: '@studioc.ardent',
      tiktokHandle: '@studioc',
      duration: '12:47'
    },
    releasePlan: {
      youtube: 'Feature: "Inside Ardent Studios — Memphis\' Recording Landmark" (12:47).',
      socials: 'Reels: Control room cinematic, Gear detail, Engineer quote.',
      newsletter: 'Deep dive editorial: "Why Analog Still Matters."',
      partners: 'Cross-post with Sennheiser and Memphis Tourism.'
    },
    layout: {
      hero: 'Full-screen cinematic loop of the Studio A sign flickering on.',
      flow: 'The Hallway -> The Gear -> The Lineage -> The Session.',
      cta: 'Book the Legend.'
    }
  },
  {
    id: 'utopia-studios',
    title: 'Utopia Studios',
    subtitle: 'Woodstock, NY',
    type: 'Studio',
    year: 2024,
    tags: ['woodstock', 'indie', 'nature', 'retreat', 'creative-hub'],
    overview: 'A sanctuary for the modern creative class. Set in the hills of Woodstock, Utopia is positioned not just as a studio, but as a retreat—a place to disconnect from the industry to reconnect with the art. Studio C documented its role as both a refuge and a launching pad.',
    whatWeDid: {
      approach: 'Atmospheric & Naturalistic. Emphasizing the isolation and the wood textures.',
      visualLanguage: 'Natural light, handheld organic camera movement, desaturated greens and browns. A24 horror/drama vibe but cozy.',
      editorial: 'The "Lost Weekend" narrative. You come here to get away. The studio as a living organism.'
    },
    featureOutline: [
      {
        title: 'Opening: The Drive Up',
        items: ['Winding roads', 'Mist in the trees', 'Arrival at the cabin']
      },
      {
        title: 'Chapter 1: The Cabin',
        items: ['Living spaces', 'The kitchen table', 'Communal living']
      },
      {
        title: 'Chapter 2: The Live Room',
        items: ['Wood textures', 'Natural light pouring in', 'Instruments waiting']
      },
      {
        title: 'Chapter 3: The Process',
        items: ['Band interaction', 'Writing on the porch', 'Late night sessions']
      },
      {
        title: 'Closing: Nightfall',
        items: ['Fireplace crackling', 'Silence outside', 'The light in the window']
      }
    ],
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
    assets: {
      hero: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2074&auto=format&fit=crop',
      stills: [
        'https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=2074&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    distribution: {
      youtubeUrl: 'https://youtube.com/studioc/utopia',
      instagramHandle: '@utopiasound',
      duration: '08:15'
    },
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
    year: 2024,
    tags: ['boutique', 'ssl', 'technical', 'mix-magazine', 'precision'],
    overview: 'Boutique precision meets upstate charm. The Clubhouse is the engineer\'s playground. We highlighted the technical superiority wrapped in a warm, inviting shell. A mix-centric facility where the signal path is sacred.',
    whatWeDid: {
      approach: 'Technical & Tactile. Focusing on the distinct machinery and the "Mix Mag" cover aesthetic.',
      visualLanguage: 'Sharp focus, high contrast, vibrant colors (specifically the SSL lights). Macro lens dominance.',
      editorial: 'Precision in the country. The best ears in the valley. The engineer as the hero.'
    },
    featureOutline: [
      {
        title: 'Opening: The Facade',
        items: ['Exterior of the barn', 'Contrast with the high-tech interior']
      },
      {
        title: 'Chapter 1: The SSL',
        items: ['Symmetry shots', 'Lights flickering', 'The heart of the room']
      },
      {
        title: 'Chapter 2: The Outboard',
        items: ['Walls of gear', 'Patch cables', 'Precision tools']
      },
      {
        title: 'Chapter 3: The Engineer',
        items: ['Interview at the desk', 'Listening intently', 'The philosophy of sound']
      },
      {
        title: 'Closing: The River',
        items: ['Sunset over the Hudson', 'Peace of mind']
      }
    ],
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
      'Rhinebeck’s sonic fortress.',
      'Technical ecstasy.'
    ],
    quotes: [
      '"A spaceship in a barn."',
      '"The cleanest signal path in New York."',
      '"Studio C captured the detail we pride ourselves on."'
    ],
    seo: ['The Clubhouse Rhinebeck', 'SSL Studio NY', 'Hudson Valley Recording', 'Professional Mixing Studio', 'Audio Engineering NY', 'Studio C Media', 'Destination Mixing'],
    assets: {
      hero: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop',
      stills: [
        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1589154904791-7f41503c62ba?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    distribution: {
      youtubeUrl: 'https://youtube.com/studioc/clubhouse',
      instagramHandle: '@theclubhouse',
      duration: '06:30'
    },
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
    year: 2024,
    tags: ['session', 'indie-folk', 'acoustic', 'intimate', 'performance'],
    overview: 'A delicate, intimate capture of indie veteran Matt Pond. We stripped away the music video artifice to show the raw process of creation in a beautiful space. A single-take style performance captured at Utopia.',
    whatWeDid: {
      approach: 'Invisible & Observational. Fly-on-the-wall documentation.',
      visualLanguage: 'Soft focus, shallow depth of field, muted palette. Handheld but steady. Focus pulling between the artist and the environment.',
      editorial: 'The vulnerability of the solo performance. Music as it happens.'
    },
    featureOutline: [
      {
        title: 'Opening: Tuning Up',
        items: ['Ambient room noise', 'Checking the guitar', 'Silence']
      },
      {
        title: 'The Performance',
        items: ['Single continuous take', 'Slow push in', 'Focus on emotional delivery']
      },
      {
        title: 'Interlude: The Room',
        items: ['Cutaways to window light', 'Dust motes', 'The empty chair']
      },
      {
        title: 'Closing: The Exhale',
        items: ['Song ends', 'Natural reaction', 'Fade to black']
      }
    ],
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
    assets: {
      hero: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop',
      stills: [
        'https://images.unsplash.com/photo-1453093282216-5668dc0436d6?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=2031&auto=format&fit=crop'
      ]
    },
    distribution: {
      youtubeUrl: 'https://youtube.com/studioc/mattpond',
      instagramHandle: '@mattpondpa',
      duration: '04:12'
    },
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
    year: 2024,
    tags: ['brand-build', 'pop', 'fashion', 'editorial', 'identity'],
    overview: 'Building a comprehensive narrative identity for a songwriter stepping into the spotlight. A long-term content engine designing the visual world of Amy Allen. From "behind the pen" to "behind the mic".',
    whatWeDid: {
      approach: 'Curated & Stylized. Fashion-forward meets studio grit.',
      visualLanguage: 'Film grain, flash photography, mixed media (Super 8 + Digital). High fashion editorial aesthetic.',
      editorial: 'From behind the pen to behind the mic. The songwriter becomes the star.'
    },
    featureOutline: [
      {
        title: 'Opening: The City',
        items: ['Subway noise', 'Motion blur', 'Walking to the session']
      },
      {
        title: 'Chapter 1: The Notebook',
        items: ['Writing process', 'Close ups of lyrics', 'The origin of the song']
      },
      {
        title: 'Chapter 2: The Booth',
        items: ['Vocal performance', 'Emotional release', 'The studio as a stage']
      },
      {
        title: 'Chapter 3: The Image',
        items: ['Photo shoot', 'Styling', 'Creating the persona']
      },
      {
        title: 'Closing: The Artist',
        items: ['Direct to camera stare', 'Confidence', 'The new chapter']
      }
    ],
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
      'The songwriter speaks.',
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
    assets: {
      hero: 'https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=2070&auto=format&fit=crop',
      stills: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    distribution: {
      youtubeUrl: 'https://youtube.com/studioc/amyallen',
      instagramHandle: '@amyallen',
      tiktokHandle: '@amyallen',
      duration: 'Series'
    },
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
import {
  AgentContext,
  GeneratedContentBundle,
  ProductionPlan,
  ResearchSummary,
  StoryboardFrame,
  GeneratedAssets,
  DistributionPlan,
} from '../types';

// Replace later with real fetch calls to your AI endpoints.
const FAKE_LATENCY_MS = 800;

export async function callResearchModel(
  ctx: AgentContext
): Promise<ResearchSummary> {
  await new Promise((r) => setTimeout(r, FAKE_LATENCY_MS));
  const { caseStudy } = ctx;

  return {
    originStory: `High-level origin story for ${caseStudy.title}. Established in ${caseStudy.year || 'the past'}, it has become a beacon for specific sound.`,
    context: `Context for ${caseStudy.title} within the recording world. It stands as a ${caseStudy.templateType || 'unique'} example of its kind.`,
    gearHighlights: ['Console', 'Tape machine', 'Outboard chain', 'Vintage Microphones'],
    notableCredits: ['Artist A', 'Artist B', 'The Local Legends'],
    audienceNotes: 'Audience is recording-obsessed, values craft and lineage.',
    brandNotes: 'Position as heritage + living studio, not a museum.',
    sources: ['https://example.com', 'Internal notes', 'Client Brief'],
  };
}

export async function callProductionModel(
  ctx: AgentContext
): Promise<ProductionPlan> {
  await new Promise((r) => setTimeout(r, FAKE_LATENCY_MS));
  const { caseStudy } = ctx;

  return {
    logline: `A feature exploring ${caseStudy.title} as a living archive of records.`,
    themes: ['Lineage', 'Craft', 'Quiet excellence', 'Sonic Purity'],
    scenes: ['Opening hallway', 'Control room session', 'Engineer interview', 'Late night mix'],
    locations: ['Control room', 'Live room', 'Hallway', 'Lounge'],
    gearList: ['Camera package A (Alexa Mini)', 'Mic kit (Sennheiser)', 'Aputure Lights'],
    interviewSubjects: ['Lead engineer', 'Owner', 'Visiting Artist'],
    interviewQuestions: [
      'What does this room sound like to you?',
      'What has stayed the same and what has changed?',
      'Tell us about the ghost in the machine.'
    ],
    brollChecklist: [
      'Hands on faders',
      'Mics being placed',
      'Empty room atmosphere',
      'Tape spinning',
      'VU meters dancing'
    ],
    scheduleNotes: '1–2 day shoot, minimal disruption to active sessions.',
  };
}

export async function callStoryboardModel(
  ctx: AgentContext
): Promise<StoryboardFrame[]> {
  await new Promise((r) => setTimeout(r, FAKE_LATENCY_MS));
  const { caseStudy } = ctx;

  return [
    {
      id: 'frame-1',
      scene: 'Opening',
      visualDescription: `Slow move down ${caseStudy.title} hallway. Dust motes in the air.`,
      cameraMovement: 'Slow dolly / gimbal forward',
      audioNotes: 'Room tone + distant gear hum',
      mood: 'Quiet, anticipatory',
      referencePrompt: 'Dim studio hallway, warm tungsten, grainy, cinematic',
    },
    {
      id: 'frame-2',
      scene: 'The Gear',
      visualDescription: `Macro shot of the main console. Focus rack from blurry to sharp on a specific knob.`,
      cameraMovement: 'Static tripod, focus pull',
      audioNotes: 'Click of a switch',
      mood: 'Tactile, precise',
      referencePrompt: 'Macro lens, mixing console, shallow depth of field, amber light',
    }
  ];
}

export async function callAssetModel(
  ctx: AgentContext
): Promise<GeneratedAssets> {
  await new Promise((r) => setTimeout(r, FAKE_LATENCY_MS));
  const { caseStudy } = ctx;

  return {
    thumbnails: [`${caseStudy.id}-thumb-v1.jpg`, `${caseStudy.id}-thumb-v2.jpg`],
    titleIdeas: [
      `Inside ${caseStudy.title}`,
      'The Rooms That Built Records',
      `${caseStudy.title}: Sound & Fury`
    ],
    lowerThirds: ['Name · Role', 'Room · Location', 'Gear Specification'],
    posterConcepts: ['Console-led key art', 'Hallway silhouette', 'Artist Portrait'],
    lutIdeas: ['Warm film emulation', 'Soft contrast, halation', 'Kodak 2383 Print Film'],
  };
}

export async function callDistributionModel(
  ctx: AgentContext
): Promise<{
  plan: DistributionPlan;
  content: GeneratedContentBundle;
}> {
  await new Promise((r) => setTimeout(r, FAKE_LATENCY_MS));
  const { caseStudy } = ctx;

  const ytTitle = `Inside ${caseStudy.title} | Studio C Documentary`;
  const ytDescription = `A Studio C feature on ${caseStudy.title}. Documenting the rooms, people, and records that shaped its sound.\n\n${caseStudy.overview}`;

  return {
    plan: {
      primaryPlatform: 'youtube',
      youtubeTitle: ytTitle,
      youtubeDescription: ytDescription,
      youtubeTags: ['studio c', caseStudy.title, 'documentary', 'recording studio', 'music production'],
      instagramCaptions: [
        `Inside ${caseStudy.title}. Coverage, not content. #studioc`,
        `The walls at ${caseStudy.title} can talk. We just listened.`
      ],
      tiktokHooks: [
        `This studio helped shape entire records.`,
        `You won't believe what happened in this room.`
      ],
      postingSchedule: ['YouTube drop (Friday)', 'IG reel next day', 'TT later in week'],
      crossPostNotes: 'Coordinate with studio accounts for reposts.',
    },
    content: {
      summary: `Documentary coverage of ${caseStudy.title}, focused on the rooms and work.`,
      narrative: `Studio C documents ${caseStudy.title} as a living space where records are still being made, not as nostalgia.`,
      captions: [
        `Rooms that quietly changed music.`,
        `The work behind the records.`,
      ],
      ytDescription,
      suggestedTags: ['studio', 'recording', 'documentary'],
    },
  };
}
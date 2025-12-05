export interface ReleasePlan {
  youtube: string;
  socials: string;
  newsletter: string;
  partners: string;
}

export interface OnSiteLayout {
  hero: string;
  flow: string;
  cta: string;
}

export interface FeatureChapter {
  title: string;
  items: string[];
}

export interface AssetCollection {
  hero: string;
  stills: string[];
  logo?: string;
}

export interface DistributionMeta {
  youtubeUrl?: string;
  instagramHandle?: string;
  tiktokHandle?: string;
  duration?: string;
}

export interface Analytics {
  views: string;
  conversion: string;
  engagement: string;
}

export interface SocialAssets {
  reels: string[];
  stories: string[];
  posts: string[];
}

export type TemplateType = 'Heritage' | 'Retreat' | 'Boutique' | 'Session' | 'Identity';
export type CaseStudyStatus = 'Draft' | 'In Production' | 'Published' | 'Archived';

// --- AGENT & PIPELINE TYPES ---

export type AgentName =
  | 'RESEARCH_ANALYST'
  | 'PRODUCTION_PLANNER'
  | 'SCENE_GENERATOR'
  | 'ASSET_DESIGNER'
  | 'DISTRIBUTION_STRATEGIST';

export interface AgentContext {
  caseStudy: CaseStudy;
  allCaseStudies: CaseStudy[];
}

export interface AgentResult<T = unknown> {
  agent: AgentName;
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  startedAt: string;
  finishedAt: string;
}

export interface PipelineState {
  caseStudyId: string;
  status: 'idle' | 'running' | 'complete' | 'error';
  currentAgent?: AgentName;
  results: AgentResult[];
  updatedCaseStudy?: CaseStudy;
}

// Agent Output Structures
export interface ResearchSummary {
  originStory: string;
  context: string;
  gearHighlights: string[];
  notableCredits: string[];
  audienceNotes: string;
  brandNotes: string;
  sources: string[];
}

export interface ProductionPlan {
  logline: string;
  themes: string[];
  scenes: string[];
  locations: string[];
  gearList: string[];
  interviewSubjects: string[];
  interviewQuestions: string[];
  brollChecklist: string[];
  scheduleNotes: string;
}

export interface StoryboardFrame {
  id: string;
  scene: string;
  visualDescription: string;
  cameraMovement?: string;
  audioNotes?: string;
  mood?: string;
  referencePrompt?: string; 
}

export interface GeneratedAssets {
  thumbnails: string[];
  titleIdeas: string[];
  lowerThirds: string[];
  posterConcepts: string[];
  lutIdeas: string[];
}

export type Platform = 'youtube' | 'instagram' | 'tiktok' | 'other';

export interface DistributionPlan {
  primaryPlatform: Platform;
  youtubeTitle: string;
  youtubeDescription: string;
  youtubeTags: string[];
  instagramCaptions: string[];
  tiktokHooks: string[];
  postingSchedule: string[];
  crossPostNotes: string;
}

export interface GeneratedContentBundle {
  summary: string;
  narrative: string;
  captions: string[];
  ytDescription: string;
  suggestedTags: string[];
}

// Extended CaseStudy
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  type: 'Studio' | 'Artist' | 'Brand';
  templateType?: TemplateType;
  status?: CaseStudyStatus;
  year?: number;
  overview: string;
  whatWeDid: {
    approach: string;
    visualLanguage: string;
    editorial: string;
  };
  featureOutline?: FeatureChapter[];
  deliverables: string[];
  impact: {
    business: string;
    visibility: string;
    value: string;
  };
  visuals: string[]; 
  taglines: string[];
  quotes: string[];
  seo: string[];
  tags?: string[];
  assets?: AssetCollection;
  distribution?: DistributionMeta;
  releasePlan: ReleasePlan;
  layout: OnSiteLayout;
  analytics?: Analytics;
  socialAssets?: SocialAssets;

  // Agent Pipeline Fields
  research?: ResearchSummary;
  productionPlan?: ProductionPlan;
  storyboards?: StoryboardFrame[];
  generatedAssets?: GeneratedAssets;
  distributionPlan?: DistributionPlan;
  generatedContent?: GeneratedContentBundle;
}

export interface PackageItem {
  name: string;
  price: string;
  tagline: string;
  deliverables: string[];
  timeline: string;
  crew: string;
  useCase: string;
  roi: string;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  GENERATOR = 'GENERATOR',
  PACKAGES = 'PACKAGES',
  LIBRARY = 'LIBRARY',
  DETAIL = 'DETAIL',
  PLAYBOOK = 'PLAYBOOK',
  PARTNERS = 'PARTNERS'
}
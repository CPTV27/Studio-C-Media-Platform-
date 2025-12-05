import {
  AgentContext,
  AgentResult,
  AgentName,
  CaseStudy,
  PipelineState,
  ResearchSummary,
  ProductionPlan,
  StoryboardFrame,
  GeneratedAssets,
  DistributionPlan,
  GeneratedContentBundle,
} from '../types';

import { runResearchAgent } from './agents/researchAgent';
import { runProductionAgent } from './agents/productionAgent';
import { runStoryboardAgent } from './agents/storyboardAgent';
import { runAssetAgent } from './agents/assetAgent';
import { runDistributionAgent } from './agents/distributionAgent';

export const PIPELINE_ORDER: AgentName[] = [
  'RESEARCH_ANALYST',
  'PRODUCTION_PLANNER',
  'SCENE_GENERATOR',
  'ASSET_DESIGNER',
  'DISTRIBUTION_STRATEGIST',
];

export async function runPipelineForCaseStudy(
  caseStudy: CaseStudy,
  allCaseStudies: CaseStudy[],
  onUpdate?: (state: PipelineState) => void
): Promise<PipelineState> {
  let current = { ...caseStudy };
  const results: AgentResult[] = [];

  let state: PipelineState = {
    caseStudyId: caseStudy.id,
    status: 'running',
    currentAgent: undefined,
    results: [],
    updatedCaseStudy: current,
  };

  const emit = () => {
    if (onUpdate) onUpdate(state);
  };

  emit();

  for (const agent of PIPELINE_ORDER) {
    state.currentAgent = agent;
    emit();

    const ctx: AgentContext = {
      caseStudy: current,
      allCaseStudies,
    };

    let result: AgentResult;

    switch (agent) {
      case 'RESEARCH_ANALYST':
        result = await runResearchAgent(ctx);
        if (result.success && result.data) {
          current = {
            ...current,
            research: result.data as ResearchSummary,
          };
        }
        break;

      case 'PRODUCTION_PLANNER':
        result = await runProductionAgent(ctx);
        if (result.success && result.data) {
          current = {
            ...current,
            productionPlan: result.data as ProductionPlan,
          };
        }
        break;

      case 'SCENE_GENERATOR':
        result = await runStoryboardAgent(ctx);
        if (result.success && result.data) {
          current = {
            ...current,
            storyboards: result.data as StoryboardFrame[],
          };
        }
        break;

      case 'ASSET_DESIGNER':
        result = await runAssetAgent(ctx);
        if (result.success && result.data) {
          current = {
            ...current,
            generatedAssets: result.data as GeneratedAssets,
          };
        }
        break;

      case 'DISTRIBUTION_STRATEGIST':
        result = await runDistributionAgent(ctx);
        if (result.success && result.data) {
          const { plan, content } = result.data as {
            plan: DistributionPlan;
            content: GeneratedContentBundle;
          };
          current = {
            ...current,
            distributionPlan: plan,
            generatedContent: content,
          };
        }
        break;

      default:
        result = {
          agent,
          success: false,
          message: 'Unknown agent.',
          startedAt: new Date().toISOString(),
          finishedAt: new Date().toISOString(),
        };
    }

    results.push(result);
    state = {
      ...state,
      results: [...results],
      updatedCaseStudy: current,
    };
    emit();

    if (!result.success) {
      state = {
        ...state,
        status: 'error',
        currentAgent: agent,
      };
      emit();
      return state;
    }
  }

  state = {
    ...state,
    status: 'complete',
    currentAgent: undefined,
    updatedCaseStudy: current,
  };
  emit();
  return state;
}
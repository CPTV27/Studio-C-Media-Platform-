import {
  AgentContext,
  AgentResult,
  AgentName,
} from '../../types';
import { callResearchModel } from '../aiClient';

const NAME: AgentName = 'RESEARCH_ANALYST';

export async function runResearchAgent(
  ctx: AgentContext
): Promise<AgentResult> {
  const startedAt = new Date().toISOString();

  try {
    const research = await callResearchModel(ctx);

    return {
      agent: NAME,
      success: true,
      message: 'Research summary generated.',
      data: research,
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  } catch (error: any) {
    return {
      agent: NAME,
      success: false,
      message: 'Research agent failed.',
      error: error?.message ?? 'Unknown error',
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  }
}
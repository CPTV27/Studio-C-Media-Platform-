import {
  AgentContext,
  AgentResult,
  AgentName,
} from '../../types';
import { callDistributionModel } from '../aiClient';

const NAME: AgentName = 'DISTRIBUTION_STRATEGIST';

export async function runDistributionAgent(
  ctx: AgentContext
): Promise<AgentResult> {
  const startedAt = new Date().toISOString();

  try {
    const { plan, content } = await callDistributionModel(ctx);

    return {
      agent: NAME,
      success: true,
      message: 'Distribution plan + generated content bundle created.',
      data: { plan, content },
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  } catch (error: any) {
    return {
      agent: NAME,
      success: false,
      message: 'Distribution agent failed.',
      error: error?.message ?? 'Unknown error',
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  }
}
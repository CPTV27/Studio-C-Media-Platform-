import {
  AgentContext,
  AgentResult,
  AgentName,
} from '../../types';
import { callProductionModel } from '../aiClient';

const NAME: AgentName = 'PRODUCTION_PLANNER';

export async function runProductionAgent(
  ctx: AgentContext
): Promise<AgentResult> {
  const startedAt = new Date().toISOString();

  try {
    const plan = await callProductionModel(ctx);

    return {
      agent: NAME,
      success: true,
      message: 'Production plan generated.',
      data: plan,
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  } catch (error: any) {
    return {
      agent: NAME,
      success: false,
      message: 'Production agent failed.',
      error: error?.message ?? 'Unknown error',
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  }
}
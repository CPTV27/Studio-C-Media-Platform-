import {
  AgentContext,
  AgentResult,
  AgentName,
} from '../../types';
import { callStoryboardModel } from '../aiClient';

const NAME: AgentName = 'SCENE_GENERATOR';

export async function runStoryboardAgent(
  ctx: AgentContext
): Promise<AgentResult> {
  const startedAt = new Date().toISOString();

  try {
    const frames = await callStoryboardModel(ctx);

    return {
      agent: NAME,
      success: true,
      message: 'Storyboard frames generated.',
      data: frames,
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  } catch (error: any) {
    return {
      agent: NAME,
      success: false,
      message: 'Storyboard agent failed.',
      error: error?.message ?? 'Unknown error',
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  }
}
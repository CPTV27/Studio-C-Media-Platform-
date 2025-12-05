import {
  AgentContext,
  AgentResult,
  AgentName,
} from '../../types';
import { callAssetModel } from '../aiClient';

const NAME: AgentName = 'ASSET_DESIGNER';

export async function runAssetAgent(
  ctx: AgentContext
): Promise<AgentResult> {
  const startedAt = new Date().toISOString();

  try {
    const assets = await callAssetModel(ctx);

    return {
      agent: NAME,
      success: true,
      message: 'Generated asset concepts.',
      data: assets,
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  } catch (error: any) {
    return {
      agent: NAME,
      success: false,
      message: 'Asset agent failed.',
      error: error?.message ?? 'Unknown error',
      startedAt,
      finishedAt: new Date().toISOString(),
    };
  }
}
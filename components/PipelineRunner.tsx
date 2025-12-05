import React, { useState } from 'react';
import { CaseStudy, PipelineState, AgentName } from '../types';
import { runPipelineForCaseStudy, PIPELINE_ORDER } from '../utils/orchestrator';
import { Terminal, Activity } from 'lucide-react';

interface PipelineRunnerProps {
  caseStudy: CaseStudy;
  allCaseStudies: CaseStudy[];
  onCaseStudyUpdated?: (updated: CaseStudy) => void;
}

const LABELS: Record<AgentName, string> = {
  RESEARCH_ANALYST: 'AGNT_01: RESEARCH',
  PRODUCTION_PLANNER: 'AGNT_02: PROD_PLAN',
  SCENE_GENERATOR: 'AGNT_03: SCENE_GEN',
  ASSET_DESIGNER: 'AGNT_04: ASSET_DSGN',
  DISTRIBUTION_STRATEGIST: 'AGNT_05: DIST_STRAT',
};

export const PipelineRunner: React.FC<PipelineRunnerProps> = ({
  caseStudy,
  allCaseStudies,
  onCaseStudyUpdated,
}) => {
  const [state, setState] = useState<PipelineState>({
    caseStudyId: caseStudy.id,
    status: 'idle',
    results: [],
    updatedCaseStudy: caseStudy,
  });
  const [running, setRunning] = useState(false);

  const handleRun = async () => {
    if (running) return;
    setRunning(true);
    const final = await runPipelineForCaseStudy(
      caseStudy,
      allCaseStudies,
      (s) => {
        setState(s);
        if (s.updatedCaseStudy && onCaseStudyUpdated) {
          onCaseStudyUpdated(s.updatedCaseStudy);
        }
      }
    );
    setState(final);
    setRunning(false);
  };

  return (
    <div className="border border-studio-border bg-black font-mono relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-studio-border bg-studio-panel/50">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-studio-accent" />
          <div>
            <p className="text-[10px] tracking-widest text-white uppercase font-bold">
              Studio C Intelligence Pipeline
            </p>
          </div>
        </div>
        <button
          onClick={handleRun}
          disabled={running}
          className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest border border-studio-border hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-inherit disabled:hover:border-studio-border"
        >
          {running ? 'Processing...' : 'Execute Sequence'}
        </button>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-5 border-b border-studio-border divide-x divide-studio-border">
        {PIPELINE_ORDER.map((agent) => {
          const result = state.results.find((r) => r.agent === agent);
          const isCurrent = state.currentAgent === agent;
          const success = result?.success;
          const failed = result && !result.success;

          let bg = 'bg-black';
          let textColor = 'text-studio-muted';
          let indicatorColor = 'bg-studio-border';
          
          if (success) {
             textColor = 'text-white';
             indicatorColor = 'bg-emerald-500';
          }
          if (failed) {
             textColor = 'text-red-500';
             indicatorColor = 'bg-red-500';
          }
          if (isCurrent) {
             bg = 'bg-studio-panel';
             textColor = 'text-studio-accent';
             indicatorColor = 'bg-studio-accent animate-pulse';
          }

          return (
            <div
              key={agent}
              className={`${bg} p-4 flex flex-col justify-between h-24 transition-colors duration-200`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${indicatorColor} mb-2`}></div>
              <span className="text-[9px] tracking-wider opacity-60">
                {LABELS[agent]}
              </span>
              <span className={`text-[10px] font-bold uppercase ${textColor}`}>
                {success && 'OK'}
                {failed && 'ERR'}
                {!success && !failed && !isCurrent && 'WAIT'}
                {isCurrent && 'RUNNING'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Console Output */}
      <div className="h-48 bg-black p-4 overflow-y-auto custom-scrollbar relative">
        <div className="absolute top-2 right-2 text-[9px] text-studio-muted">CONSOLE_OUT</div>
        {state.results.length === 0 && !running && (
           <div className="text-studio-muted text-xs opacity-30 mt-2">Awaiting command...</div>
        )}
        <div className="space-y-2">
          {state.results.map((r, idx) => (
            <div key={idx} className="flex gap-3 text-xs font-light">
              <span className="text-studio-muted opacity-50">[{new Date(r.finishedAt).toLocaleTimeString().split(' ')[0]}]</span>
              <span className="text-studio-accent uppercase text-[10px] min-w-[120px]">{r.agent.replace('_', ' ')}</span>
              <span className="text-neutral-300">{r.message}</span>
              {r.error && (
                <span className="text-red-500 block ml-[180px]">ERR: {r.error}</span>
              )}
            </div>
          ))}
          {running && (
             <div className="flex gap-3 text-xs font-light animate-pulse">
                <span className="text-studio-accent">&gt;</span>
                <span className="text-neutral-400">Processing...</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
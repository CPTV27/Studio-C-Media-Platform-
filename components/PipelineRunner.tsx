import React, { useState } from 'react';
import { CaseStudy, PipelineState, AgentName } from '../types';
import { runPipelineForCaseStudy, PIPELINE_ORDER } from '../utils/orchestrator';

interface PipelineRunnerProps {
  caseStudy: CaseStudy;
  allCaseStudies: CaseStudy[];
  onCaseStudyUpdated?: (updated: CaseStudy) => void;
}

const LABELS: Record<AgentName, string> = {
  RESEARCH_ANALYST: 'Research Analyst',
  PRODUCTION_PLANNER: 'Production Planner',
  SCENE_GENERATOR: 'Scene / Storyboard',
  ASSET_DESIGNER: 'Asset Designer',
  DISTRIBUTION_STRATEGIST: 'Distribution Strategist',
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
    <div className="mt-16 border border-neutral-800 rounded-xl p-6 bg-neutral-950/70">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs tracking-[0.25em] text-studio-accent uppercase mb-1">
            Studio C Intelligence Pipeline
          </p>
          <p className="text-sm text-studio-muted">
            Run the full multi-agent stack to generate production intelligence.
          </p>
        </div>
        <button
          onClick={handleRun}
          disabled={running}
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider rounded border border-studio-border hover:bg-white hover:text-black transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-inherit"
        >
          {running ? 'Orchestrating...' : 'Run Pipeline'}
        </button>
      </div>

      <div className="grid md:grid-cols-5 gap-3 mb-6">
        {PIPELINE_ORDER.map((agent) => {
          const result = state.results.find((r) => r.agent === agent);
          const isCurrent = state.currentAgent === agent;
          const success = result?.success;
          const failed = result && !result.success;

          let bg = 'bg-neutral-900 border-neutral-800';
          let textColor = 'text-studio-muted';
          
          if (success) {
             bg = 'bg-emerald-900/20 border-emerald-900/50';
             textColor = 'text-emerald-400';
          }
          if (failed) {
             bg = 'bg-red-900/20 border-red-900/50';
             textColor = 'text-red-400';
          }
          if (isCurrent) {
             bg = 'bg-neutral-800 border-studio-accent animate-pulse';
             textColor = 'text-white';
          }

          return (
            <div
              key={agent}
              className={`${bg} border rounded-lg p-3 flex flex-col gap-2 transition-all duration-300`}
            >
              <span className="uppercase tracking-[0.1em] text-[8px] opacity-60">
                {LABELS[agent]}
              </span>
              <span className={`text-[10px] font-medium ${textColor}`}>
                {success && 'Complete'}
                {failed && 'Error'}
                {!success && !failed && !isCurrent && 'Pending'}
                {isCurrent && 'Running...'}
              </span>
            </div>
          );
        })}
      </div>

      {state.results.length > 0 && (
        <div className="max-h-60 overflow-y-auto text-xs bg-black/40 border border-neutral-900 rounded-lg p-4 space-y-3 custom-scrollbar">
          {state.results.map((r, idx) => (
            <div key={idx} className="border-b border-neutral-900 pb-2 last:border-none">
              <div className="flex items-center gap-2 mb-1">
                 <span className={`w-1.5 h-1.5 rounded-full ${r.success ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                 <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  {r.agent}
                 </span>
              </div>
              <p className="text-neutral-400 pl-3.5">
                {r.message}
              </p>
              {r.error && (
                <p className="text-red-400 mt-1 pl-3.5">Error: {r.error}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

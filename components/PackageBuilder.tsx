import React from 'react';
import { PACKAGES } from '../data/initialContent';
import { CheckCircle2, Clock, Users, TrendingUp } from 'lucide-react';

const PackageBuilder: React.FC = () => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500">
      <header className="mb-16">
        <h2 className="font-serif text-5xl text-white mb-4">Studio C Package Matrix</h2>
        <p className="text-studio-muted text-lg max-w-2xl">
          Standardized service tiers designed to convert visibility into asset value.
          From simple sessions to complete brand architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {PACKAGES.map((pkg, idx) => (
          <div key={idx} className="group bg-neutral-900 border border-studio-border hover:border-studio-accent/30 rounded-xl p-8 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-serif text-white mb-1">{pkg.name}</h3>
                <p className="text-sm font-mono text-studio-muted uppercase tracking-wide">{pkg.price}</p>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-studio-accent italic border border-white/10">
                "{pkg.tagline}"
              </div>
            </div>

            <div className="space-y-6">
              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold text-studio-muted uppercase mb-3">Deliverables</h4>
                <ul className="space-y-2">
                  {pkg.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-studio-muted mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logistics Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-studio-border/50">
                <div>
                   <div className="flex items-center gap-2 text-xs text-studio-muted mb-1">
                      <Clock className="w-3 h-3" /> Timeline
                   </div>
                   <p className="text-sm text-white">{pkg.timeline}</p>
                </div>
                <div>
                   <div className="flex items-center gap-2 text-xs text-studio-muted mb-1">
                      <Users className="w-3 h-3" /> Crew
                   </div>
                   <p className="text-sm text-white">{pkg.crew}</p>
                </div>
              </div>

              {/* Strategy */}
              <div>
                 <div className="flex items-center gap-2 text-xs text-studio-muted mb-2">
                    <TrendingUp className="w-3 h-3" /> ROI Narrative
                 </div>
                 <p className="text-sm text-neutral-400 leading-relaxed">
                   {pkg.roi}
                 </p>
              </div>

              <button className="w-full py-3 mt-4 border border-studio-border text-white text-sm font-medium hover:bg-white hover:text-black transition-colors rounded">
                Select Strategy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageBuilder;
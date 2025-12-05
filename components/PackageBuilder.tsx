import React from 'react';
import { PACKAGES } from '../data/initialContent';
import { CheckCircle2, Clock, Users, TrendingUp } from 'lucide-react';

const PackageBuilder: React.FC = () => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500 bg-studio-base min-h-screen">
      <header className="mb-20 border-b border-studio-border pb-8">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Service Matrix</h2>
        <p className="text-studio-muted text-lg font-light max-w-2xl">
          Standardized service tiers designed to convert visibility into asset value.
          From simple sessions to complete brand architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {PACKAGES.map((pkg, idx) => (
          <div key={idx} className="group bg-studio-base border border-studio-border hover:border-studio-accent p-8 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-studio-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-serif text-white mb-2">{pkg.name}</h3>
                <p className="text-xs font-mono text-studio-accent uppercase tracking-widest">{pkg.price}</p>
              </div>
              <div className="px-3 py-1 bg-studio-panel text-[10px] text-white uppercase tracking-widest border border-studio-border">
                {pkg.tagline}
              </div>
            </div>

            <div className="space-y-8">
              {/* Deliverables */}
              <div>
                <h4 className="text-[9px] font-bold text-studio-muted uppercase tracking-widest mb-4">Output Configuration</h4>
                <ul className="space-y-3">
                  {pkg.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                      <span className="w-1.5 h-1.5 bg-studio-border mt-1.5 group-hover:bg-studio-accent transition-colors"></span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logistics Grid */}
              <div className="grid grid-cols-2 gap-px bg-studio-border border border-studio-border">
                <div className="bg-studio-base p-4">
                   <div className="flex items-center gap-2 text-[9px] text-studio-muted uppercase tracking-widest mb-2">
                      <Clock className="w-3 h-3" /> Duration
                   </div>
                   <p className="text-sm text-white font-mono">{pkg.timeline}</p>
                </div>
                <div className="bg-studio-base p-4">
                   <div className="flex items-center gap-2 text-[9px] text-studio-muted uppercase tracking-widest mb-2">
                      <Users className="w-3 h-3" /> Unit
                   </div>
                   <p className="text-sm text-white font-mono">{pkg.crew}</p>
                </div>
              </div>

              {/* Strategy */}
              <div>
                 <div className="flex items-center gap-2 text-[9px] text-studio-muted uppercase tracking-widest mb-3">
                    <TrendingUp className="w-3 h-3" /> Value Narrative
                 </div>
                 <p className="text-sm text-neutral-400 font-light leading-relaxed border-l border-studio-border pl-4">
                   {pkg.roi}
                 </p>
              </div>

              <button className="w-full py-4 border border-studio-border text-white text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-colors">
                Initialize Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageBuilder;
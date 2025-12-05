import React from 'react';
import { CaseStudy } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface Props {
  caseStudies: CaseStudy[];
  onSelect: (cs: CaseStudy) => void;
}

const Dashboard: React.FC<Props> = ({ caseStudies, onSelect }) => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500 bg-studio-base min-h-screen">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-studio-border pb-8">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight">Catalog</h1>
          <p className="font-mono text-xs text-studio-muted max-w-md uppercase tracking-wide leading-relaxed">
            Documenting the recording world. <br/>
            The product is not the video. The product is the visibility.
          </p>
        </div>
        <div className="font-mono text-xs text-studio-muted text-right hidden md:block">
          INDEX_SIZE: {caseStudies.length.toString().padStart(2, '0')} <br/>
          LAST_UPDATED: TODAY
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {caseStudies.map((cs, idx) => (
          <div 
            key={cs.id}
            onClick={() => onSelect(cs)}
            className="group cursor-pointer flex flex-col h-full relative"
          >
            {/* Image Container */}
            <div className="aspect-[3/2] bg-studio-panel relative overflow-hidden mb-6 border border-studio-border group-hover:border-studio-accent transition-colors duration-500">
               <div className="absolute inset-0 bg-studio-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
               <img 
                src={cs.assets?.hero || `https://picsum.photos/600/400?random=${cs.id}`} 
                alt={cs.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Overlay Tags */}
              <div className="absolute top-0 left-0 p-4 w-full flex justify-between z-20">
                 <span className="bg-studio-base text-white text-[9px] font-mono uppercase px-2 py-1 border border-studio-border">
                    {cs.type}
                 </span>
                 {cs.distribution?.duration && (
                   <span className="bg-studio-base text-white text-[9px] font-mono px-2 py-1 border border-studio-border flex items-center gap-1">
                      {cs.distribution.duration}
                   </span>
                 )}
              </div>
            </div>
            
            {/* Typography */}
            <div className="flex-1 flex flex-col relative">
              <div className="flex items-baseline justify-between mb-2">
                 <span className="font-mono text-[9px] text-studio-accent uppercase tracking-widest">0{idx + 1}</span>
                 <span className="font-mono text-[9px] text-studio-muted uppercase tracking-widest">{cs.year}</span>
              </div>
              
              <h3 className="font-serif text-3xl text-white mb-3 leading-none group-hover:text-studio-accent transition-colors duration-300">
                {cs.title}
              </h3>
              <p className="text-xs text-studio-muted font-mono uppercase tracking-wide mb-4 line-clamp-1 border-b border-studio-border/30 pb-4 group-hover:border-studio-accent/30 transition-colors">
                {cs.subtitle}
              </p>
              
              <p className="text-sm text-neutral-400 font-light leading-relaxed line-clamp-2">
                {cs.overview}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                View Case Study <ArrowRight className="w-3 h-3 text-studio-accent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
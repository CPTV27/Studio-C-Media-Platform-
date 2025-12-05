import React from 'react';
import { CaseStudy } from '../types';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface Props {
  caseStudies: CaseStudy[];
  onSelect: (cs: CaseStudy) => void;
}

const Dashboard: React.FC<Props> = ({ caseStudies, onSelect }) => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500">
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Featured Work</h1>
        <p className="text-studio-muted max-w-xl">
          Selected documentation of the recording world. 
          Where the product is not the video, but the visibility.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <div 
            key={cs.id}
            onClick={() => onSelect(cs)}
            className="group cursor-pointer bg-neutral-900 border border-studio-border hover:border-studio-accent transition-all duration-500 rounded-xl overflow-hidden flex flex-col h-full relative"
          >
            <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
               <img 
                src={cs.assets?.hero || `https://picsum.photos/600/400?random=${cs.id}`} 
                alt={cs.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                 <span className="bg-black/80 backdrop-blur text-white text-[10px] uppercase font-bold px-2 py-1 rounded border border-white/10">
                    {cs.type}
                 </span>
                 {cs.year && (
                   <span className="bg-black/60 backdrop-blur text-neutral-300 text-[10px] font-mono px-2 py-1 rounded border border-white/5">
                      {cs.year}
                   </span>
                 )}
              </div>
              {cs.distribution?.duration && (
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-[10px] text-white font-mono">
                      <Clock className="w-3 h-3" /> {cs.distribution.duration}
                  </div>
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-studio-accent">{cs.title}</h3>
              <p className="text-sm text-studio-muted mb-6 flex-1 line-clamp-3">{cs.overview}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-studio-border/50">
                <span className="text-xs font-mono text-neutral-500 uppercase">{cs.id}</span>
                <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { CaseStudy } from '../types';
import { ArrowLeft, Share2, Download, Calendar, Clock, Youtube, Instagram } from 'lucide-react';
import { PipelineRunner } from './PipelineRunner';

interface Props {
  data: CaseStudy;
  allCaseStudies: CaseStudy[];
  onBack: () => void;
  onUpdateCaseStudy?: (updated: CaseStudy) => void;
}

const SectionHeader: React.FC<{ title: string; number: string }> = ({ title, number }) => (
  <div className="flex flex-col gap-2 mb-8 mt-24">
    <span className="font-mono text-[10px] text-studio-accent uppercase tracking-widest">{number} // SECTION</span>
    <h3 className="font-serif text-4xl text-white border-l-2 border-studio-accent pl-6">{title}</h3>
  </div>
);

const CaseStudyDetail: React.FC<Props> = ({ data, allCaseStudies, onBack, onUpdateCaseStudy }) => {
  return (
    <div className="min-h-screen bg-studio-base text-studio-text animate-in slide-in-from-bottom-4 duration-700">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-studio-base/90 backdrop-blur-sm border-b border-studio-border px-8 py-4 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-studio-muted hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </button>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-studio-panel border border-transparent hover:border-studio-border transition-all"><Share2 className="w-3 h-3 text-studio-muted" /></button>
          <button className="p-2 hover:bg-studio-panel border border-transparent hover:border-studio-border transition-all"><Download className="w-3 h-3 text-studio-muted" /></button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Hero */}
        <header className="mb-20 relative">
          <div className="flex items-center justify-between mb-12 border-b border-studio-border pb-4">
            <span className="font-mono text-[10px] text-studio-muted uppercase tracking-widest">Case Study // {data.type}</span>
            <span className="font-mono text-[10px] text-studio-accent uppercase tracking-widest">{data.id}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             <div className="lg:col-span-7">
                <h1 className="font-serif text-6xl md:text-8xl leading-[0.85] text-white mb-8 tracking-tighter">
                  {data.title}
                </h1>
                <p className="font-sans text-xl font-light text-neutral-400 max-w-xl leading-relaxed mb-8">
                  {data.subtitle}
                </p>
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-px bg-studio-border border border-studio-border max-w-md">
                   <div className="bg-studio-base p-4">
                      <div className="text-[9px] font-mono text-studio-muted uppercase mb-1">Year</div>
                      <div className="text-sm text-white font-mono">{data.year}</div>
                   </div>
                   <div className="bg-studio-base p-4">
                      <div className="text-[9px] font-mono text-studio-muted uppercase mb-1">Duration</div>
                      <div className="text-sm text-white font-mono">{data.distribution?.duration || 'N/A'}</div>
                   </div>
                   <div className="bg-studio-base p-4 col-span-2 flex gap-6">
                      {data.distribution?.youtubeUrl && (
                        <a href={data.distribution.youtubeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs hover:text-studio-accent transition-colors">
                            <Youtube className="w-3 h-3" /> Watch Feature
                        </a>
                      )}
                      {data.distribution?.instagramHandle && (
                        <a href={`https://instagram.com/${data.distribution.instagramHandle.replace('@','')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs hover:text-studio-accent transition-colors">
                            <Instagram className="w-3 h-3" /> {data.distribution.instagramHandle}
                        </a>
                      )}
                   </div>
                </div>
             </div>

             {/* Hero Image */}
             {data.assets?.hero && (
               <div className="lg:col-span-5 aspect-[4/5] w-full border border-studio-border relative group">
                 <div className="absolute inset-0 border border-white/10 z-10 m-2 pointer-events-none"></div>
                 <img src={data.assets.hero} alt={data.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
               </div>
             )}
          </div>
        </header>

        {/* --- PIPELINE RUNNER --- */}
        <div className="border-y border-studio-border py-12 bg-studio-panel/20 -mx-8 px-8 mb-16">
            <div className="max-w-4xl mx-auto">
                <PipelineRunner 
                caseStudy={data} 
                allCaseStudies={allCaseStudies} 
                onCaseStudyUpdated={onUpdateCaseStudy} 
                />
            </div>
        </div>

        {/* 1. Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
                <SectionHeader number="01" title="Overview" />
            </div>
            <div className="lg:col-span-9 lg:mt-24">
                <p className="font-serif text-2xl md:text-3xl text-white leading-tight max-w-3xl">
                {data.overview}
                </p>
                {data.tags && (
                <div className="flex flex-wrap gap-2 mt-8">
                    {data.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest text-studio-muted border border-studio-border px-3 py-1 hover:border-studio-accent hover:text-white transition-colors cursor-default">
                        {tag}
                    </span>
                    ))}
                </div>
                )}
            </div>
        </div>
        
        {/* Feature Outline */}
        {data.featureOutline && (
          <div className="mt-24 border-t border-studio-border pt-24">
            <div className="flex items-baseline gap-4 mb-12">
                <span className="w-2 h-2 bg-studio-accent"></span>
                <h4 className="font-mono text-sm text-white uppercase tracking-widest">Documentary Structure</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.featureOutline.map((chapter, idx) => (
                <div key={idx} className="border-l border-studio-border pl-6 relative group hover:border-studio-accent transition-colors">
                  <span className="font-mono text-[9px] text-studio-muted absolute -left-[17px] top-0 bg-studio-base py-1">0{idx + 1}</span>
                  <h5 className="font-serif text-xl text-white mb-4 group-hover:text-studio-accent transition-colors">{chapter.title}</h5>
                  <ul className="text-sm text-neutral-400 space-y-2 font-light">
                    {chapter.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                         <span className="w-1 h-px bg-studio-muted mt-2.5"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. What We Did */}
        <div className="mt-24 border-t border-studio-border pt-12">
            <SectionHeader number="02" title="Approach" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-studio-border border border-studio-border mt-8">
            <div className="bg-studio-base p-8 hover:bg-studio-panel transition-colors">
                <h4 className="font-mono text-[10px] text-studio-accent uppercase mb-4">Production</h4>
                <p className="text-sm leading-relaxed text-neutral-300">{data.whatWeDid.approach}</p>
            </div>
            <div className="bg-studio-base p-8 hover:bg-studio-panel transition-colors">
                <h4 className="font-mono text-[10px] text-studio-accent uppercase mb-4">Visuals</h4>
                <p className="text-sm leading-relaxed text-neutral-300">{data.whatWeDid.visualLanguage}</p>
            </div>
            <div className="bg-studio-base p-8 hover:bg-studio-panel transition-colors">
                <h4 className="font-mono text-[10px] text-studio-accent uppercase mb-4">Editorial</h4>
                <p className="text-sm leading-relaxed text-neutral-300">{data.whatWeDid.editorial}</p>
            </div>
            </div>
        </div>

        {/* 3. Output */}
        <div className="mt-24">
             <SectionHeader number="03" title="Deliverables" />
             <div className="flex flex-wrap gap-4 mt-8">
                {data.deliverables.map((item, idx) => (
                    <div key={idx} className="px-6 py-4 border border-studio-border bg-studio-base flex items-center justify-center text-center hover:border-white transition-colors">
                    <span className="text-xs font-mono uppercase tracking-wide text-neutral-300">{item}</span>
                    </div>
                ))}
             </div>
        </div>

        {/* 4. Impact */}
        <div className="mt-24 bg-studio-panel p-8 md:p-12 border border-studio-border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <ArrowLeft className="w-64 h-64 rotate-180" />
            </div>
            <SectionHeader number="04" title="Impact" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 mt-12">
                <div>
                    <span className="block text-4xl font-serif text-white mb-4">Business</span>
                    <p className="text-sm text-studio-muted font-light leading-relaxed">{data.impact.business}</p>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-white mb-4">Visibility</span>
                    <p className="text-sm text-studio-muted font-light leading-relaxed">{data.impact.visibility}</p>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-white mb-4">Value</span>
                    <p className="text-sm text-studio-muted font-light leading-relaxed">{data.impact.value}</p>
                </div>
            </div>
        </div>

        {/* 5. Gallery */}
        <div className="mt-24">
             <SectionHeader number="05" title="Visual Assets" />
             {data.assets?.stills && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-studio-border border border-studio-border mt-8">
                    {data.assets.stills.map((src, i) => (
                    <div key={i} className="aspect-[4/5] bg-studio-base relative group overflow-hidden">
                        <img src={src} alt={`Still ${i}`} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    ))}
                </div>
             )}
        </div>

        {/* 6. Messaging */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-studio-border pt-12">
            <div>
                <h4 className="font-mono text-[10px] text-studio-muted uppercase mb-6 tracking-widest">Tagline Options</h4>
                <div className="space-y-4">
                    {data.taglines.map((t, i) => (
                        <div key={i} className="text-lg md:text-xl font-serif text-white border-l border-studio-border pl-4 hover:border-studio-accent transition-colors">
                            {t}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="font-mono text-[10px] text-studio-muted uppercase mb-6 tracking-widest">Pull Quotes</h4>
                <div className="space-y-8">
                    {data.quotes.map((q, i) => (
                        <blockquote key={i} className="font-serif text-2xl md:text-3xl italic text-neutral-500 hover:text-white transition-colors">
                            {q}
                        </blockquote>
                    ))}
                </div>
            </div>
        </div>

        {/* 8. Web Layout */}
         <div className="mt-24 mb-24">
             <SectionHeader number="08" title="On-Site Component" />
             <div className="border border-studio-border p-12 bg-black mt-8">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="w-full h-48 bg-studio-panel flex items-center justify-center text-studio-muted font-mono text-xs relative overflow-hidden group border border-studio-border">
                         {data.assets?.hero && <img src={data.assets.hero} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" />}
                         <span className="relative z-10 px-4 py-2 bg-black/50 backdrop-blur border border-white/10 uppercase tracking-widest">{data.layout.hero}</span>
                    </div>
                    <div className="flex gap-4 font-mono text-[10px] text-studio-muted uppercase tracking-widest">
                        <span>{data.layout.flow.split('->').join(' — ')}</span>
                    </div>
                    <button className="px-10 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-studio-accent hover:text-white transition-colors">
                        {data.layout.cta}
                    </button>
                </div>
             </div>
         </div>

      </div>
    </div>
  );
};

export default CaseStudyDetail;
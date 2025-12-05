import React from 'react';
import { CaseStudy } from '../types';
import { ArrowLeft, Share2, Download, ExternalLink, Calendar, Clock, Youtube, Instagram, Music } from 'lucide-react';
import { PipelineRunner } from './PipelineRunner';

interface Props {
  data: CaseStudy;
  allCaseStudies: CaseStudy[]; // New Prop
  onBack: () => void;
  onUpdateCaseStudy?: (updated: CaseStudy) => void; // New Prop
}

const SectionHeader: React.FC<{ title: string; number: string }> = ({ title, number }) => (
  <div className="flex items-baseline gap-4 mb-8 border-b border-studio-border pb-4 mt-16">
    <span className="font-mono text-xs text-studio-muted">{number}</span>
    <h3 className="font-serif text-2xl text-studio-accent">{title}</h3>
  </div>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-studio-border text-[10px] uppercase tracking-wider text-studio-muted hover:border-studio-accent hover:text-studio-accent transition-colors cursor-default">
    {children}
  </span>
);

const CaseStudyDetail: React.FC<Props> = ({ data, allCaseStudies, onBack, onUpdateCaseStudy }) => {
  return (
    <div className="min-h-screen bg-studio-black text-studio-accent animate-in fade-in duration-500">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-studio-black/80 backdrop-blur-md border-b border-studio-border px-8 py-4 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-studio-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Index
        </button>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-studio-charcoal rounded-full transition-colors"><Share2 className="w-4 h-4 text-studio-muted" /></button>
          <button className="p-2 hover:bg-studio-charcoal rounded-full transition-colors"><Download className="w-4 h-4 text-studio-muted" /></button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16">
        
        {/* Hero */}
        <header className="mb-12 relative">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-studio-muted uppercase tracking-widest">{data.type}</span>
            <div className="h-px flex-1 bg-studio-border"></div>
            <span className="font-mono text-xs text-studio-muted uppercase tracking-widest">{data.id}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
             <div>
                <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-white mb-6 tracking-tight">
                  {data.title}
                </h1>
                <p className="font-sans text-xl text-studio-muted max-w-2xl leading-relaxed mb-6">
                  {data.subtitle}
                </p>
                {/* Metadata Bar */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-studio-muted mb-8">
                  {data.year && <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {data.year}</div>}
                  {data.distribution?.duration && <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {data.distribution.duration}</div>}
                  {data.distribution?.youtubeUrl && <a href={data.distribution.youtubeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white"><Youtube className="w-3 h-3" /> Watch</a>}
                  {data.distribution?.instagramHandle && <a href={`https://instagram.com/${data.distribution.instagramHandle.replace('@','')}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white"><Instagram className="w-3 h-3" /> {data.distribution.instagramHandle}</a>}
                </div>
             </div>
             {/* Hero Image */}
             {data.assets?.hero && (
               <div className="aspect-video w-full rounded-lg overflow-hidden border border-studio-border">
                 <img src={data.assets.hero} alt={data.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
             )}
          </div>
        </header>

        {/* --- ORCHESTRATOR PIPELINE UI --- */}
        <PipelineRunner 
          caseStudy={data} 
          allCaseStudies={allCaseStudies} 
          onCaseStudyUpdated={onUpdateCaseStudy} 
        />
        {/* -------------------------------- */}

        {/* 1. Overview */}
        <SectionHeader number="01" title="Overview" />
        <p className="font-sans text-lg text-studio-accent leading-relaxed max-w-3xl">
          {data.overview}
        </p>
        {data.tags && (
          <div className="flex flex-wrap gap-2 mt-6">
            {data.tags.map((tag, i) => (
              <span key={i} className="text-xs text-studio-muted bg-studio-charcoal/50 px-2 py-1 rounded">#{tag}</span>
            ))}
          </div>
        )}
        
        {/* Feature Outline (If available) */}
        {data.featureOutline && (
          <div className="mt-12 bg-neutral-900/30 p-8 border-l border-studio-border">
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-studio-accent rounded-full"></span>
              Feature Documentary Structure
            </h4>
            <div className="space-y-8 relative">
              {/* Vertical line connector */}
              <div className="absolute left-[3px] top-2 bottom-2 w-px bg-studio-border/50"></div>
              
              {data.featureOutline.map((chapter, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-studio-muted rounded-full"></div>
                  <h5 className="font-serif text-lg text-white mb-2">{chapter.title}</h5>
                  <ul className="text-sm text-studio-muted space-y-1">
                    {chapter.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                         <span className="opacity-50">–</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. What We Did */}
        <SectionHeader number="02" title="The Approach" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-3 text-white">Production</h4>
            <p className="text-sm leading-relaxed text-neutral-400">{data.whatWeDid.approach}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-3 text-white">Visuals</h4>
            <p className="text-sm leading-relaxed text-neutral-400">{data.whatWeDid.visualLanguage}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-3 text-white">Editorial</h4>
            <p className="text-sm leading-relaxed text-neutral-400">{data.whatWeDid.editorial}</p>
          </div>
        </div>

        {/* 3. Deliverables */}
        <SectionHeader number="03" title="Output" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.deliverables.map((item, idx) => (
            <div key={idx} className="p-6 border border-studio-border bg-studio-charcoal/20 rounded-lg flex items-center justify-center text-center">
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* 4. Impact */}
        <SectionHeader number="04" title="Why It Matters" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-neutral-900/50 p-8 rounded-xl border border-studio-border">
          <div>
            <span className="block text-2xl font-serif mb-2">Business</span>
            <p className="text-sm text-studio-muted">{data.impact.business}</p>
          </div>
          <div>
            <span className="block text-2xl font-serif mb-2">Visibility</span>
            <p className="text-sm text-studio-muted">{data.impact.visibility}</p>
          </div>
          <div>
            <span className="block text-2xl font-serif mb-2">Value</span>
            <p className="text-sm text-studio-muted">{data.impact.value}</p>
          </div>
        </div>

        {/* 5. Visual Concepts / Gallery */}
        <SectionHeader number="05" title="Visual Assets" />
        
        {/* Actual Stills from Assets */}
        {data.assets?.stills && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.assets.stills.map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded overflow-hidden border border-studio-border group">
                <img src={src} alt={`Still ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        )}

        {/* Conceptual Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.visuals.map((vis, idx) => (
            <div key={idx} className="p-4 bg-neutral-800/50 rounded border-l-2 border-studio-muted">
                <p className="text-sm font-medium text-neutral-300">{vis}</p>
            </div>
          ))}
        </div>

        {/* 6. Messaging */}
        <SectionHeader number="06" title="Verbal Identity" />
        <div className="space-y-8">
            <div>
                <h4 className="font-mono text-xs text-studio-muted uppercase mb-4">Taglines</h4>
                <div className="flex flex-wrap gap-3">
                    {data.taglines.map((t, i) => <Tag key={i}>{t}</Tag>)}
                </div>
            </div>
            <div>
                <h4 className="font-mono text-xs text-studio-muted uppercase mb-4">Pull Quotes</h4>
                <div className="space-y-4">
                    {data.quotes.map((q, i) => (
                        <blockquote key={i} className="font-serif text-xl italic text-neutral-400 border-l-2 border-neutral-700 pl-4">
                            {q}
                        </blockquote>
                    ))}
                </div>
            </div>
        </div>

        {/* 7. Strategy */}
        <SectionHeader number="07" title="Release Strategy" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <h5 className="text-sm font-bold text-white mb-1 flex items-center gap-2"><Youtube className="w-4 h-4" /> YouTube</h5>
                    <p className="text-sm text-studio-muted">{data.releasePlan.youtube}</p>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-white mb-1 flex items-center gap-2"><Instagram className="w-4 h-4" /> Social Ecosystem</h5>
                    <p className="text-sm text-studio-muted">{data.releasePlan.socials}</p>
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h5 className="text-sm font-bold text-white mb-1">Direct (Newsletter)</h5>
                    <p className="text-sm text-studio-muted">{data.releasePlan.newsletter}</p>
                </div>
                 <div>
                    <h5 className="text-sm font-bold text-white mb-1">Partnerships</h5>
                    <p className="text-sm text-studio-muted">{data.releasePlan.partners}</p>
                </div>
            </div>
        </div>

        {/* 8. Web Layout */}
         <SectionHeader number="08" title="On-Site Component" />
         <div className="border border-dashed border-studio-border p-8 rounded-lg bg-black/50">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-full h-32 bg-neutral-900 rounded flex items-center justify-center text-neutral-600 font-mono text-xs relative overflow-hidden group">
                     {data.assets?.hero && <img src={data.assets.hero} className="absolute inset-0 w-full h-full object-cover opacity-20" />}
                     <span className="relative z-10">{data.layout.hero}</span>
                </div>
                <div className="flex gap-4 font-mono text-xs text-studio-muted">
                    <span>{data.layout.flow.split('->').join(' → ')}</span>
                </div>
                <button className="px-8 py-3 bg-white text-black font-sans text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors">
                    {data.layout.cta}
                </button>
            </div>
         </div>

      </div>
    </div>
  );
};

export default CaseStudyDetail;
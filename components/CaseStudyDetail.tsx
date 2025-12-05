import React from 'react';
import { CaseStudy } from '../types';
import { ArrowLeft, Share2, Download, ExternalLink } from 'lucide-react';

interface Props {
  data: CaseStudy;
  onBack: () => void;
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

const CaseStudyDetail: React.FC<Props> = ({ data, onBack }) => {
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

      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Hero */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-studio-muted uppercase tracking-widest">{data.type}</span>
            <div className="h-px flex-1 bg-studio-border"></div>
            <span className="font-mono text-xs text-studio-muted uppercase tracking-widest">{data.id}</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-white mb-6 tracking-tight">
            {data.title}
          </h1>
          <p className="font-sans text-xl text-studio-muted max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </header>

        {/* 1. Overview */}
        <SectionHeader number="01" title="Overview" />
        <p className="font-sans text-lg text-studio-accent leading-relaxed max-w-3xl">
          {data.overview}
        </p>

        {/* 2. What We Did */}
        <SectionHeader number="02" title="The Approach" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-3">Production</h4>
            <p className="text-sm leading-relaxed text-neutral-400">{data.whatWeDid.approach}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-3">Visuals</h4>
            <p className="text-sm leading-relaxed text-neutral-400">{data.whatWeDid.visualLanguage}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-3">Editorial</h4>
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

        {/* 5. Visual Concepts */}
        <SectionHeader number="05" title="Visual Concepts" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.visuals.map((vis, idx) => (
            <div key={idx} className="aspect-video bg-neutral-800 rounded-lg relative overflow-hidden group">
               <img 
                src={`https://picsum.photos/800/600?random=${idx}-${data.id}`} 
                alt="Concept" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-sm font-medium text-white">{vis}</p>
              </div>
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
                    <h5 className="text-sm font-bold text-white mb-1">YouTube</h5>
                    <p className="text-sm text-studio-muted">{data.releasePlan.youtube}</p>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-white mb-1">Social Ecosystem</h5>
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
         <div className="border border-dashed border-studio-border p-8 rounded-lg">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-full h-48 bg-neutral-800 rounded flex items-center justify-center text-neutral-600 font-mono text-xs">
                    {data.layout.hero}
                </div>
                <div className="flex gap-4 font-mono text-xs text-studio-muted">
                    <span>{data.layout.flow.split('->').join(' → ')}</span>
                </div>
                <button className="px-8 py-3 bg-white text-black font-sans text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors">
                    {data.layout.cta}
                </button>
            </div>
         </div>

         {/* 9. SEO */}
         <div className="mt-16 pt-8 border-t border-studio-border">
            <h4 className="font-mono text-xs text-studio-muted uppercase mb-4">Search Keywords</h4>
            <div className="flex flex-wrap gap-2">
                {data.seo.map((k, i) => (
                    <span key={i} className="text-xs text-neutral-600">#{k.replace(/\s+/g, '')}</span>
                ))}
            </div>
         </div>

      </div>
    </div>
  );
};

export default CaseStudyDetail;
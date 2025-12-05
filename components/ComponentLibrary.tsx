import React from 'react';
import { COMPONENT_COPY } from '../data/initialContent';
import { Copy, Type, Terminal } from 'lucide-react';

const ComponentLibrary: React.FC = () => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500">
      <header className="mb-16 border-b border-studio-border pb-8">
        <h2 className="font-serif text-5xl text-white mb-4">Component Library</h2>
        <p className="text-studio-muted">Reusable atoms, voice guidelines, and micro-copy for the Studio C ecosystem.</p>
      </header>

      <div className="space-y-16">
        
        {/* Voice Rules */}
        <section>
          <div className="flex items-center gap-3 mb-6 text-white">
            <Type className="w-5 h-5" />
            <h3 className="font-serif text-2xl">Voice & Tone</h3>
          </div>
          <div className="bg-neutral-900 rounded-lg p-8 border border-studio-border">
            <ul className="space-y-4">
              {COMPONENT_COPY.voiceRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 text-neutral-300 font-light border-b border-neutral-800 pb-4 last:border-0 last:pb-0">
                  <span className="font-mono text-studio-muted text-xs pt-1">0{i + 1}</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Buttons & UI */}
        <section>
          <div className="flex items-center gap-3 mb-6 text-white">
            <Terminal className="w-5 h-5" />
            <h3 className="font-serif text-2xl">UI Elements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-studio-border rounded-lg bg-black space-y-4">
              <h4 className="text-xs text-studio-muted uppercase mb-4">Primary Actions</h4>
              <button className="px-8 py-3 bg-white text-black font-sans text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors w-full md:w-auto">
                Book The Room
              </button>
              <button className="px-8 py-3 bg-transparent border border-white text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                View Case Study
              </button>
            </div>
            <div className="p-8 border border-studio-border rounded-lg bg-black space-y-4">
               <h4 className="text-xs text-studio-muted uppercase mb-4">Tag Styles</h4>
               <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 rounded-full border border-studio-border text-[10px] uppercase tracking-wider text-studio-muted">Cinematic</span>
                 <span className="px-3 py-1 rounded-full border border-white text-white text-[10px] uppercase tracking-wider">Featured</span>
                 <span className="px-3 py-1 bg-studio-charcoal text-[10px] uppercase tracking-wider text-white">New</span>
               </div>
            </div>
          </div>
        </section>

        {/* Scripts */}
        <section>
          <div className="flex items-center gap-3 mb-6 text-white">
            <Copy className="w-5 h-5" />
            <h3 className="font-serif text-2xl">Copy Bank</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-neutral-900/50 border border-studio-border rounded-lg">
                <h4 className="text-xs text-studio-muted uppercase mb-4">60s Reel Script Template</h4>
                <pre className="font-mono text-xs text-neutral-400 whitespace-pre-wrap leading-relaxed">
                    {COMPONENT_COPY.reelScript}
                </pre>
            </div>
            <div className="p-6 bg-neutral-900/50 border border-studio-border rounded-lg">
                <h4 className="text-xs text-studio-muted uppercase mb-4">Social Captions</h4>
                 <ul className="space-y-2">
                  {COMPONENT_COPY.captions.map((cap, i) => (
                    <li key={i} className="font-mono text-xs text-neutral-400 bg-black p-2 rounded border border-studio-border/50">
                        {cap}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ComponentLibrary;
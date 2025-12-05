import React, { useState } from 'react';
import { generateCaseStudy } from '../services/geminiService';
import { CaseStudy } from '../types';
import { Loader2, Sparkles, AlertCircle } from 'lucide-react';

interface Props {
  onSuccess: (cs: CaseStudy) => void;
}

const Generator: React.FC<Props> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<'Studio' | 'Artist' | 'Brand'>('Studio');
  const [focus, setFocus] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Temporarily store API key in local storage for session if user provides it
    if (apiKey) {
      localStorage.setItem('GEMINI_API_KEY', apiKey);
    }

    try {
      const result = await generateCaseStudy(name, type, focus);
      onSuccess(result);
    } catch (err: any) {
      setError(err.message || "Failed to generate content. Please check your API Key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 md:p-16 max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <Sparkles className="w-12 h-12 text-white mx-auto mb-4 opacity-50" />
        <h2 className="font-serif text-4xl text-white mb-4">Case Study Generator</h2>
        <p className="text-studio-muted">
          Generate complete, cinematic case study packages using the Studio C AI engine (Gemini 2.5).
        </p>
      </div>

      <form onSubmit={handleGenerate} className="space-y-6 bg-neutral-900/50 p-8 rounded-xl border border-studio-border">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-studio-muted tracking-wider">Subject Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Electric Lady Studios"
              className="w-full bg-black border border-studio-border p-3 text-white focus:border-white outline-none transition-colors rounded"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-studio-muted tracking-wider">Type</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="w-full bg-black border border-studio-border p-3 text-white focus:border-white outline-none transition-colors rounded appearance-none"
            >
              <option value="Studio">Recording Studio</option>
              <option value="Artist">Artist / Musician</option>
              <option value="Brand">Audio Brand</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-studio-muted tracking-wider">Focus / Angle</label>
            <textarea 
              required
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              placeholder="e.g. Historic legacy, intimate acoustic session, avant-garde rebranding..."
              className="w-full bg-black border border-studio-border p-3 text-white focus:border-white outline-none transition-colors rounded h-32 resize-none"
            />
        </div>

        <div className="space-y-2 pt-6 border-t border-studio-border/50">
             <label className="text-xs font-bold uppercase text-studio-muted tracking-wider flex items-center justify-between">
                <span>Gemini API Key</span>
                <span className="text-[10px] font-normal lowercase opacity-50">Required for generation</span>
             </label>
             <input 
              type="password" 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Google GenAI API Key"
              className="w-full bg-neutral-950 border border-studio-border p-3 text-white focus:border-white outline-none transition-colors rounded font-mono text-sm"
            />
        </div>

        {error && (
          <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-900 text-red-200 text-sm rounded">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Strategy...
            </>
          ) : (
            'Generate Case Study'
          )}
        </button>
      </form>
    </div>
  );
};

export default Generator;
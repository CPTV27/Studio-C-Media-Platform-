import React, { useState } from 'react';
import { generateCaseStudy } from '../services/geminiService';
import { CaseStudy } from '../types';
import { Loader2, Sparkles, AlertCircle, Plus } from 'lucide-react';

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
    <div className="p-8 md:p-16 max-w-4xl mx-auto animate-in fade-in duration-500 bg-studio-base min-h-screen flex items-center justify-center">
      <div className="w-full">
        <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl text-white mb-4">New Project</h2>
            <p className="text-studio-muted font-mono text-xs uppercase tracking-widest">
            AI-Powered Case Study Generation // Gemini 2.5
            </p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-8 bg-studio-base border border-studio-border p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-studio-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase text-studio-accent tracking-widest">Subject Name</label>
                <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.G. ELECTRIC LADY"
                className="w-full bg-studio-panel border-b border-studio-border p-4 text-white text-lg font-serif placeholder:text-studio-border focus:border-white outline-none transition-colors"
                />
            </div>
            <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase text-studio-accent tracking-widest">Archetype</label>
                <div className="relative">
                    <select 
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full bg-studio-panel border-b border-studio-border p-4 text-white font-mono text-sm focus:border-white outline-none transition-colors appearance-none uppercase"
                    >
                    <option value="Studio">Recording Studio</option>
                    <option value="Artist">Artist / Musician</option>
                    <option value="Brand">Audio Brand</option>
                    </select>
                    <div className="absolute right-4 top-4 pointer-events-none">
                        <Plus className="w-4 h-4 text-studio-muted" />
                    </div>
                </div>
            </div>
            </div>

            <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase text-studio-accent tracking-widest">Creative Angle</label>
                <textarea 
                required
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                placeholder="DESCRIBE THE CORE NARRATIVE OR VIBE..."
                className="w-full bg-studio-panel border border-studio-border p-4 text-white font-light focus:border-white outline-none transition-colors h-32 resize-none"
                />
            </div>

            <div className="space-y-3 pt-8 border-t border-studio-border/30">
                <label className="text-[9px] font-bold uppercase text-studio-muted tracking-widest flex items-center justify-between">
                    <span>API Credentials</span>
                </label>
                <input 
                type="password" 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="ENTER GEMINI API KEY"
                className="w-full bg-studio-base border border-studio-border p-3 text-studio-text focus:border-white outline-none transition-colors font-mono text-xs"
                />
            </div>

            {error && (
            <div className="flex items-center gap-3 p-4 bg-red-900/10 border border-red-900 text-red-500 text-xs font-mono uppercase">
                <AlertCircle className="w-4 h-4" />
                {error}
            </div>
            )}

            <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-studio-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
            {loading ? (
                <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
                </>
            ) : (
                'Execute Generation'
            )}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Generator;
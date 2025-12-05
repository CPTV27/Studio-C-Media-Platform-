import React from 'react';
import { AppView } from '../types';
import { LayoutGrid, Plus, Layers, BookOpen, Aperture, Command, Building2 } from 'lucide-react';

interface NavProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Nav: React.FC<NavProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Case Studies', icon: LayoutGrid },
    { id: AppView.PARTNERS, label: 'Partners', icon: Building2 },
    { id: AppView.GENERATOR, label: 'Generator', icon: Plus },
    { id: AppView.PACKAGES, label: 'Packages', icon: Layers },
    { id: AppView.LIBRARY, label: 'Library', icon: BookOpen },
    { id: AppView.PLAYBOOK, label: 'OS Playbook', icon: Command },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-studio-base border-r border-studio-border flex flex-col z-50 hidden md:flex">
      <div className="p-8 pb-12 border-b border-studio-border">
        <div className="flex items-center gap-3 text-studio-text mb-2">
          <Aperture className="w-5 h-5 text-studio-accent" />
          <h1 className="font-serif text-lg font-bold tracking-tight">Studio C</h1>
        </div>
        <p className="font-mono text-[10px] text-studio-muted tracking-widest uppercase mt-2">
          Operating System <span className="text-studio-accent">v1.0</span>
        </p>
      </div>

      <div className="flex-1 flex flex-col">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id || (currentView === AppView.DETAIL && item.id === AppView.DASHBOARD);
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`group w-full flex items-center gap-4 px-8 py-4 text-xs font-medium tracking-widest uppercase transition-all duration-200 border-b border-studio-border/50 relative overflow-hidden ${
                isActive
                  ? 'text-white bg-studio-panel'
                  : 'text-studio-muted hover:text-white hover:bg-studio-panel/50'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-studio-accent animate-in fade-in duration-300"></div>
              )}
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-studio-accent' : 'text-studio-muted group-hover:text-white'}`} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-8 border-t border-studio-border">
        <div className="font-mono text-[10px] text-studio-muted space-y-2">
          <div className="flex justify-between items-center">
             <span>SYS</span>
             <span className="text-emerald-500">ONLINE</span>
          </div>
          <div className="flex justify-between items-center">
             <span>AI</span>
             <span className="text-studio-text">GEMINI 2.5</span>
          </div>
          <div className="flex justify-between items-center">
             <span>LOC</span>
             <span className="text-studio-text">MEM/NY</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
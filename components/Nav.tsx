import React from 'react';
import { AppView } from '../types';
import { LayoutGrid, Plus, Layers, BookOpen, Aperture, Command } from 'lucide-react';

interface NavProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Nav: React.FC<NavProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Case Studies', icon: LayoutGrid },
    { id: AppView.GENERATOR, label: 'Generator', icon: Plus },
    { id: AppView.PACKAGES, label: 'Packages', icon: Layers },
    { id: AppView.LIBRARY, label: 'Library', icon: BookOpen },
    { id: AppView.PLAYBOOK, label: 'OS Playbook', icon: Command },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-studio-black border-r border-studio-border flex flex-col z-50 hidden md:flex">
      <div className="p-8 pb-12">
        <div className="flex items-center gap-3 text-studio-accent mb-2">
          <Aperture className="w-6 h-6" />
          <h1 className="font-serif text-xl font-bold tracking-tight">Studio C</h1>
        </div>
        <p className="text-xs text-studio-muted tracking-widest uppercase">Media System 1.0</p>
      </div>

      <div className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id || (currentView === AppView.DETAIL && item.id === AppView.DASHBOARD);
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isActive
                  ? 'bg-studio-charcoal text-white'
                  : 'text-studio-muted hover:text-white hover:bg-studio-charcoal/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-studio-muted group-hover:text-white'}`} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-8 text-[10px] text-studio-muted opacity-40">
        <p>SYSTEM STATUS: ONLINE</p>
        <p>GEMINI 2.5: CONNECTED</p>
      </div>
    </nav>
  );
};

export default Nav;
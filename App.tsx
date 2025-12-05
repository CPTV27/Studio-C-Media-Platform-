import React, { useState } from 'react';
import Nav from './components/Nav';
import CaseStudyDetail from './components/CaseStudyDetail';
import PackageBuilder from './components/PackageBuilder';
import ComponentLibrary from './components/ComponentLibrary';
import Generator from './components/Generator';
import Playbook from './components/Playbook';
import { INITIAL_CASE_STUDIES } from './data/initialContent';
import { AppView, CaseStudy } from './types';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(INITIAL_CASE_STUDIES);

  const handleSelectCaseStudy = (cs: CaseStudy) => {
    setSelectedCaseStudy(cs);
    setCurrentView(AppView.DETAIL);
  };

  const handleGeneratedSuccess = (newCs: CaseStudy) => {
    setCaseStudies(prev => [newCs, ...prev]);
    handleSelectCaseStudy(newCs);
  };

  const renderDashboard = () => (
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
            onClick={() => handleSelectCaseStudy(cs)}
            className="group cursor-pointer bg-neutral-900 border border-studio-border hover:border-studio-accent transition-all duration-500 rounded-xl overflow-hidden flex flex-col h-full"
          >
            <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
               <img 
                src={`https://picsum.photos/600/400?random=${cs.id}`} 
                alt={cs.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4">
                 <span className="bg-black/80 backdrop-blur text-white text-[10px] uppercase font-bold px-2 py-1 rounded border border-white/10">
                    {cs.type}
                 </span>
              </div>
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

  return (
    <div className="min-h-screen bg-studio-black text-studio-accent font-sans selection:bg-white selection:text-black">
      <Nav currentView={currentView} setView={setCurrentView} />
      
      <main className="md:pl-64 min-h-screen">
        {currentView === AppView.DASHBOARD && renderDashboard()}
        {currentView === AppView.DETAIL && selectedCaseStudy && (
          <CaseStudyDetail 
            data={selectedCaseStudy} 
            onBack={() => setCurrentView(AppView.DASHBOARD)} 
          />
        )}
        {currentView === AppView.PACKAGES && <PackageBuilder />}
        {currentView === AppView.LIBRARY && <ComponentLibrary />}
        {currentView === AppView.GENERATOR && <Generator onSuccess={handleGeneratedSuccess} />}
        {currentView === AppView.PLAYBOOK && <Playbook />}
      </main>
    </div>
  );
};

export default App;
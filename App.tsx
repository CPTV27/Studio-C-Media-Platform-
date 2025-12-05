import React, { useState } from 'react';
import Nav from './components/Nav';
import CaseStudyDetail from './components/CaseStudyDetail';
import PackageBuilder from './components/PackageBuilder';
import ComponentLibrary from './components/ComponentLibrary';
import Generator from './components/Generator';
import Playbook from './components/Playbook';
import Dashboard from './components/Dashboard';
import { INITIAL_CASE_STUDIES } from './data/initialContent';
import { AppView, CaseStudy } from './types';
import { LayoutGrid, Plus, Layers, BookOpen, Aperture, Command, Eye } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(INITIAL_CASE_STUDIES);
  const [mediaMode, setMediaMode] = useState(false);

  const handleSelectCaseStudy = (cs: CaseStudy) => {
    setSelectedCaseStudy(cs);
    setCurrentView(AppView.DETAIL);
  };

  const handleGeneratedSuccess = (newCs: CaseStudy) => {
    setCaseStudies(prev => [newCs, ...prev]);
    handleSelectCaseStudy(newCs);
  };

  const handleUpdateCaseStudy = (updatedCs: CaseStudy) => {
    setCaseStudies(prev => prev.map(cs => cs.id === updatedCs.id ? updatedCs : cs));
    if (selectedCaseStudy?.id === updatedCs.id) {
        setSelectedCaseStudy(updatedCs);
    }
  };

  // Routing Logic based on Media Mode
  const handleViewChange = (view: AppView) => {
      // Prevent accessing admin routes in media mode
      if (mediaMode && [AppView.GENERATOR, AppView.PLAYBOOK, AppView.PACKAGES].includes(view)) {
          return;
      }
      setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-studio-black text-studio-accent font-sans selection:bg-white selection:text-black">
      <Nav 
        currentView={currentView} 
        setView={handleViewChange} 
      />
      
      {/* Media Mode Toggle (Fixed Bottom Left) */}
      <div className="fixed bottom-8 left-8 z-50 md:flex items-center gap-3 hidden">
         <button 
           onClick={() => {
               setMediaMode(!mediaMode);
               if (!mediaMode) setCurrentView(AppView.DASHBOARD); // Reset to dashboard on entry
           }}
           className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] uppercase font-bold tracking-widest transition-all ${mediaMode ? 'bg-white text-black border-white' : 'bg-transparent text-studio-muted border-studio-border hover:border-white hover:text-white'}`}
         >
             <Eye className="w-3 h-3" />
             {mediaMode ? 'Media Mode: ON' : 'Media Mode: OFF'}
         </button>
      </div>

      <main className="md:pl-64 min-h-screen">
        {currentView === AppView.DASHBOARD && (
            <Dashboard 
                caseStudies={caseStudies} 
                onSelect={handleSelectCaseStudy} 
            />
        )}
        {currentView === AppView.DETAIL && selectedCaseStudy && (
          <CaseStudyDetail 
            data={selectedCaseStudy} 
            allCaseStudies={caseStudies}
            onBack={() => setCurrentView(AppView.DASHBOARD)} 
            onUpdateCaseStudy={handleUpdateCaseStudy}
          />
        )}
        {currentView === AppView.PACKAGES && !mediaMode && <PackageBuilder />}
        {currentView === AppView.LIBRARY && <ComponentLibrary />}
        {currentView === AppView.GENERATOR && !mediaMode && <Generator onSuccess={handleGeneratedSuccess} />}
        {currentView === AppView.PLAYBOOK && !mediaMode && <Playbook />}
      </main>
    </div>
  );
};

export default App;
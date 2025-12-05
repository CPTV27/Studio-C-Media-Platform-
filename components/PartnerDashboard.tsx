import React, { useState } from 'react';
import { ANCHOR_PARTNERS } from '../data/anchorPartners';
import { SENNHEISER_SPONSOR } from '../data/sponsors';
import { PartnerStudio } from '../types/anchor';
import { Sponsor } from '../types/sponsor';
import { Building2, MapPin, Users, TrendingUp, DollarSign, Calendar, Star, Box, ArrowRight } from 'lucide-react';

const PartnerDashboard: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerStudio | null>(null);

  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500 max-w-[1600px] mx-auto bg-studio-base min-h-screen">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-studio-border pb-8">
        <div>
           <div className="flex items-center gap-3 text-studio-accent mb-4">
              <Building2 className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">Network_Infrastructure</span>
           </div>
           <h1 className="font-serif text-5xl md:text-6xl text-white">Anchor Partners</h1>
        </div>
        <p className="text-studio-muted text-sm max-w-md leading-relaxed font-light">
          Strategic infrastructure. Managing recurring revenue relationships, attribution models, and brand sponsorships.
        </p>
      </header>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-y border-studio-border bg-studio-panel/20 mb-20 divide-y md:divide-y-0 md:divide-x divide-studio-border">
        {[
          { icon: Building2, label: 'Active Anchors', value: ANCHOR_PARTNERS.length },
          { icon: Users, label: 'Catalog Items', value: ANCHOR_PARTNERS.reduce((acc, p) => acc + (p.metrics?.catalogItems || 0), 0) },
          { icon: TrendingUp, label: 'Monthly Views', value: '93k' },
          { icon: DollarSign, label: 'Pipeline Rev', value: '$24k', color: 'text-emerald-500' }
        ].map((stat, i) => (
          <div key={i} className="p-8 flex flex-col justify-between h-32 hover:bg-studio-panel transition-colors">
            <div className="flex items-center gap-2 text-studio-muted text-[10px] uppercase tracking-widest">
              <stat.icon className="w-3 h-3" /> {stat.label}
            </div>
            <p className={`text-4xl font-serif ${stat.color || 'text-white'}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Col: Partner List */}
        <div className="lg:col-span-2 space-y-12">
          <h2 className="text-[10px] font-bold text-studio-accent uppercase tracking-widest border-b border-studio-border pb-4">Partner Studios</h2>
          
          <div className="grid grid-cols-1 gap-px bg-studio-border border border-studio-border">
            {ANCHOR_PARTNERS.map((partner) => (
              <div 
                key={partner.id} 
                onClick={() => setSelectedPartner(selectedPartner?.id === partner.id ? null : partner)}
                className={`group bg-studio-base p-8 transition-all duration-300 cursor-pointer hover:bg-studio-panel`}
              >
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-studio-panel border border-studio-border flex items-center justify-center text-white font-serif text-2xl group-hover:border-studio-accent transition-colors">
                            {partner.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-white group-hover:text-studio-accent transition-colors mb-2">{partner.name}</h3>
                            <div className="flex items-center gap-4 text-[10px] font-mono text-studio-muted uppercase">
                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {partner.location}</span>
                                <span className="px-2 py-0.5 border border-studio-border">{partner.archetype}</span>
                            </div>
                        </div>
                    </div>
                    {partner.brandOpportunities.revenueShareEligible && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-900/10 text-emerald-500 text-[9px] uppercase font-bold tracking-widest border border-emerald-900/30">
                            Rev Share
                        </div>
                    )}
                </div>

                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 max-w-2xl pl-[88px]">
                    {partner.overview}
                </p>

                {/* Expanded Details */}
                {selectedPartner?.id === partner.id && (
                    <div className="pl-[88px] pt-8 border-t border-studio-border/50 grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                        <div>
                            <h4 className="text-[10px] text-studio-muted uppercase tracking-widest mb-4">Recurring Projects</h4>
                            <ul className="space-y-3">
                                {partner.recurringProjects.map((proj, i) => (
                                    <li key={i} className="text-sm text-white flex items-center gap-3 border-l border-studio-border pl-3 hover:border-studio-accent transition-colors">
                                        <span className="text-xs text-neutral-500 font-mono">{proj.year}</span>
                                        {proj.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] text-studio-muted uppercase tracking-widest mb-4">Opportunities</h4>
                            <div className="space-y-2 font-mono text-xs">
                                {partner.brandOpportunities.gearSponsorships && (
                                    <div className="flex items-center gap-2 text-neutral-300">
                                        <Box className="w-3 h-3 text-emerald-500" /> [SPONSORSHIP_ELIGIBLE]
                                    </div>
                                )}
                                {partner.brandOpportunities.artistPipeline && (
                                    <div className="flex items-center gap-2 text-neutral-300">
                                        <Users className="w-3 h-3 text-emerald-500" /> [ARTIST_PIPELINE]
                                    </div>
                                )}
                                <p className="text-neutral-500 mt-4 italic font-sans">"{partner.brandOpportunities.notes}"</p>
                            </div>
                        </div>
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Sponsors & Feed */}
        <div className="space-y-12">
            <h2 className="text-[10px] font-bold text-studio-accent uppercase tracking-widest border-b border-studio-border pb-4">Active Sponsors</h2>
            
            {/* Sennheiser Card */}
            <div className="bg-studio-panel border border-studio-border p-8 relative overflow-hidden group hover:border-studio-accent transition-colors">
                <div className="absolute top-0 right-0 p-3 bg-studio-accent text-black text-[9px] font-bold uppercase tracking-widest">
                    {SENNHEISER_SPONSOR.tier}
                </div>
                <h3 className="font-serif text-3xl text-white mb-2">{SENNHEISER_SPONSOR.name}</h3>
                <a href={SENNHEISER_SPONSOR.url} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-studio-muted hover:text-white transition-colors mb-8 block uppercase tracking-wide">
                    {SENNHEISER_SPONSOR.url?.replace('https://www.', '')}
                </a>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-[9px] text-studio-muted uppercase tracking-widest mb-3">Placements</h4>
                        <div className="flex flex-wrap gap-2">
                            {SENNHEISER_SPONSOR.allowedPlacements.map((p, i) => (
                                <span key={i} className="text-[9px] px-2 py-1 border border-studio-border text-neutral-300 uppercase">
                                    {p.label}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                         <h4 className="text-[9px] text-studio-muted uppercase tracking-widest mb-3">Campaign Window</h4>
                         <div className="flex items-center gap-2 text-xs text-white font-mono">
                             <Calendar className="w-3 h-3 text-studio-muted" /> 
                             FEB_2025 — AUG_2025
                         </div>
                    </div>
                    <div className="pt-6 border-t border-studio-border">
                        <p className="text-sm text-neutral-400 font-light italic leading-relaxed">
                            "{SENNHEISER_SPONSOR.notes}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
             <div className="border border-studio-border p-8">
                <h3 className="font-serif text-xl text-white mb-6">Operations</h3>
                <div className="space-y-3">
                    {['Add New Anchor', 'Generate Pitch Deck', 'Export Rev Report'].map((action) => (
                        <button key={action} className="w-full py-3 border border-studio-border text-[10px] uppercase font-bold tracking-widest text-studio-muted hover:bg-white hover:text-black transition-colors">
                            {action}
                        </button>
                    ))}
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default PartnerDashboard;
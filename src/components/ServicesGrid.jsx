import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  CheckCircle2, ArrowRight, Sparkles, Shield, 
  ChevronRight, X, Layers, Check, Zap, FileText, Cpu 
} from 'lucide-react';

const serviceTools = {
  gmspd: ['PVsyst', 'AutoCAD', 'Civil 3D'],
  spd: ['SketchUp', 'HelioScope', 'AutoCAD'],
  edaa: ['AutoCAD Electrical', 'ETAP', 'CEIG Forms'],
  sd: ['STAAD Pro', 'IS 875', 'AutoCAD'],
  pedac: ['AutoCAD', 'BOQ Excel', 'STAAD'],
  ppgr: ['PVsyst 8760', 'Meteonorm', 'Loss Trees']
};

export default function ServicesGrid({ onSelectServiceForQuote }) {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All 6 Services' },
    { id: 'utility', label: 'Ground Mount Utility' },
    { id: 'cni', label: 'C&I Pre-Design' },
    { id: 'compliance', label: 'CEIG & Structural' },
    { id: 'engineering', label: 'Execution & Yield' },
  ];

  const displayedServices = activeFilter === 'all'
    ? irsCompanyData.services
    : irsCompanyData.services.filter(s => {
        if (activeFilter === 'utility') return s.id === 'gmspd';
        if (activeFilter === 'cni') return s.id === 'spd';
        if (activeFilter === 'compliance') return s.id === 'edaa' || s.id === 'sd';
        if (activeFilter === 'engineering') return s.id === 'pedac' || s.id === 'ppgr';
        return true;
      });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Solar Design &amp; Engineering</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] font-display tracking-tight mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] font-display tracking-tight mb-3">
            Solar services for EPCs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From 3D pre-design to statutory CEIG packages and MW-scale detailed engineering, the solar line that ensures fast approvals and clean on-site execution.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 sm:mb-12 px-1">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 ${
                activeFilter === tab.id
                  ? 'bg-[#0A1628] text-[#149C68] shadow-sm ring-2 ring-[#149C68]/40'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  ? 'bg-[#07427B] text-white shadow-sm ring-2 ring-[#17BAF0]/40'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Core Services Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedServices.map((srv) => (
            <div 
              key={srv.id}
              id={srv.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#149C68]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#17BAF0]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Area */}
              <div className="h-44 sm:h-48 overflow-hidden relative bg-[#0A1628]">
              <div className="h-44 sm:h-48 overflow-hidden relative bg-[#042342]">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent"></div>
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#149C68] text-white shadow-xs">
                <div className="absolute inset-0 bg-gradient-to-t from-[#042342]/85 via-[#07427B]/20 to-transparent"></div>
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#07427B] text-white shadow-xs">
                  {srv.badge}
                </span>
                <span className="absolute top-3 right-3 text-xs font-black text-white bg-[#0A1628]/80 px-2.5 py-0.5 rounded-full backdrop-blur-xs font-mono border border-white/10">
                <span className="absolute top-3 right-3 text-xs font-black text-[#17BAF0] bg-[#042342]/90 px-2.5 py-0.5 rounded-full backdrop-blur-xs font-mono border border-white/10">
                  0{srv.number}
                </span>

                {/* Software Stack Pills on Image */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 flex-wrap">
                  {serviceTools[srv.id]?.map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-medium bg-black/60 text-slate-200 px-2 py-0.5 rounded backdrop-blur-xs border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1A202C] mb-2 leading-snug group-hover:text-[#149C68] transition-colors font-display">
                <h3 className="text-base sm:text-lg font-bold text-[#07427B] mb-2 leading-snug group-hover:text-[#17BAF0] transition-colors font-display">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {srv.shortDesc}
                </p>

                {/* Deliverable Highlights */}
                <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  {srv.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#149C68] shrink-0 mt-0.5" />
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#59BD4B] shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-xs font-medium">{item}</span>
                    </li>
                  ))}
                  {srv.deliverables.length > 3 && (
                    <li className="text-[11px] text-[#149C68] font-bold pl-5">
                    <li className="text-[11px] text-[#07427B] font-bold pl-5">
                      + {srv.deliverables.length - 3} more deliverables
                    </li>
                  )}
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => setSelectedServiceDetail(srv)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#149C68] py-1.5 cursor-pointer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#07427B] hover:text-[#17BAF0] py-1.5 cursor-pointer"
                  >
                    <span>View Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#149C68]" />
                    <ChevronRight className="w-3.5 h-3.5 text-[#17BAF0]" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(srv.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#149C68]/10 hover:bg-[#149C68] text-[#149C68] hover:text-white font-bold text-xs transition-all border border-[#149C68]/20 hover:border-[#149C68] cursor-pointer active:scale-95"
                    className="px-3.5 py-1.5 rounded-lg bg-[#07427B]/10 hover:bg-[#07427B] text-[#07427B] hover:text-white font-bold text-xs transition-all border border-[#07427B]/20 hover:border-[#07427B] cursor-pointer active:scale-95"
                  >
                    Get Quote
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Specifications Bottom Sheet / Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#042342]/75 backdrop-blur-xs animate-in fade-in">
          <div 
            className="fixed inset-0"
            onClick={() => setSelectedServiceDetail(null)}
          ></div>

          <div className="bg-white rounded-t-3xl sm:rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative z-10 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
            <div className="sm:hidden w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3"></div>

            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#149C68] block mb-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#07427B] block mb-0.5">
                Service 0{selectedServiceDetail.number} • {selectedServiceDetail.badge}
              </span>
              <h3 className="text-xl font-bold text-[#1A202C] font-display">
              <h3 className="text-xl font-bold text-[#07427B] font-display">
                {selectedServiceDetail.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedServiceDetail.longDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#149C68]" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#07427B] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#17BAF0]" />
                Included Drawings &amp; Engineering Deliverables:
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedServiceDetail.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#149C68] shrink-0 mt-0.5" />
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#59BD4B] shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#149C68]/5 border border-[#149C68]/20 mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#149C68] mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#149C68]" />
            <div className="p-4 rounded-xl bg-[#07427B]/5 border border-[#07427B]/15 mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#07427B] mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#07427B]" />
                Engineering Standards &amp; Objectives:
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700">
                {selectedServiceDetail.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#149C68] shrink-0 mt-1.5"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#59BD4B] shrink-0 mt-1.5"></div>
                    <span className="text-xs leading-snug">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onSelectServiceForQuote(title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#07427B] hover:bg-[#042342] text-white font-bold text-xs shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Scope Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <ArrowRight className="w-3.5 h-3.5 text-[#17BAF0]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

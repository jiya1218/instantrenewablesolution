import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  CheckCircle2, ArrowRight, Sparkles, Shield, 
  ChevronRight, X, Layers, Check, Zap, FileText 
} from 'lucide-react';

export default function ServicesGrid({ onSelectServiceForQuote }) {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'ground', label: '01. Ground Mount' },
    { id: 'predesign', label: '02. Pre-Design' },
    { id: 'electrical', label: '03. CEIG Electrical' },
    { id: 'structure', label: '04. Structure STAAD' },
    { id: 'execution', label: '05. Execution & BOQ' },
    { id: 'pvsyst', label: '06. PVsyst Yield' },
  ];

  const displayedServices = activeFilter === 'all'
    ? irsCompanyData.services
    : irsCompanyData.services.filter(s => {
        if (activeFilter === 'ground') return s.id.includes('ground');
        if (activeFilter === 'predesign') return s.id.includes('predesign');
        if (activeFilter === 'electrical') return s.id.includes('electrical');
        if (activeFilter === 'structure') return s.id.includes('structure');
        if (activeFilter === 'execution') return s.id.includes('execution');
        if (activeFilter === 'pvsyst') return s.id.includes('pvsyst');
        return true;
      });

  return (
    <section id="services" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 max-w-2xl mx-auto">
          <span className="section-label">Solar Design &amp; Engineering</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
            Solar Services for EPCs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Outsourced solar engineering services for EPC companies, developers, installers, and consultants executing commercial, industrial, and utility-scale projects.
          </p>
        </div>

        {/* Mobile-Friendly Horizontal Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8 max-w-4xl mx-auto px-1">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Core Services Card Grid (3x2 Layout) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedServices.map((srv) => (
            <div 
              key={srv.id}
              id={srv.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber-400 transition-all flex flex-col group"
            >
              {/* Card Image Area */}
              <div className="h-40 sm:h-44 overflow-hidden relative bg-slate-900">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FFA91F] text-slate-950 shadow-sm">
                  {srv.badge}
                </span>
                <span className="absolute bottom-2.5 right-3 text-xs font-black text-white bg-slate-950/80 px-2 py-0.5 rounded-md backdrop-blur-xs font-mono">
                  0{srv.number}
                </span>
              </div>

              {/* Card Content Area */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-amber-600 transition-colors font-display">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3.5 flex-1">
                  {srv.shortDesc}
                </p>

                {/* Key Deliverable Mini-bullets (3 items) */}
                <ul className="space-y-1.5 mb-4 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  {srv.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-xs font-medium">{item}</span>
                    </li>
                  ))}
                  {srv.deliverables.length > 3 && (
                    <li className="text-[11px] text-amber-700 font-semibold pl-5">
                      + {srv.deliverables.length - 3} more deliverables
                    </li>
                  )}
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => setSelectedServiceDetail(srv)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-amber-600 py-1.5 cursor-pointer"
                  >
                    <span>Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(srv.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-slate-950 font-bold text-xs transition-colors border border-amber-200 cursor-pointer active:scale-95"
                  >
                    Get Quote
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Service Detail Specifications Bottom Sheet / Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          {/* Backdrop click to close */}
          <div 
            className="fixed inset-0"
            onClick={() => setSelectedServiceDetail(null)}
          ></div>

          {/* Modal / Bottom Sheet Box */}
          <div className="bg-white rounded-t-3xl sm:rounded-2xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative z-10 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
            
            {/* Mobile Drag Indicator Pill */}
            <div className="sm:hidden w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3"></div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                Service 0{selectedServiceDetail.number} • {selectedServiceDetail.badge}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                {selectedServiceDetail.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedServiceDetail.longDesc}
              </p>
            </div>

            {/* Complete Deliverables Checklist */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Included Drawings &amp; Engineering Deliverables:
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedServiceDetail.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/60 border border-amber-200 mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-700" />
                Our Objectives for this Service:
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700">
                {selectedServiceDetail.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5"></div>
                    <span className="text-xs leading-snug">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onSelectServiceForQuote(title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FFA91F] text-white font-bold text-xs shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Request Scope Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}


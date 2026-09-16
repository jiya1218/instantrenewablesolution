import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  CheckCircle2, ArrowRight, Sparkles, Shield, 
  ChevronRight, X, Layers, Check, Zap, FileText 
} from 'lucide-react';

export default function ServicesGrid({ onSelectServiceForQuote }) {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  return (
    <section id="services" className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="section-label">Solar Design &amp; Engineering</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-display tracking-tight mb-2">
            Solar Services for EPCs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Outsourced solar engineering services for EPC companies, developers, installers, and consultants executing commercial, industrial, and utility-scale projects.
          </p>
        </div>

        {/* 6 Core Services Card Grid (3x2 Layout) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {irsCompanyData.services.map((srv) => (
            <div 
              key={srv.id}
              id={srv.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-amber-400 transition-all flex flex-col"
            >
              {/* Card Image Area */}
              <div className="h-40 sm:h-44 overflow-hidden relative bg-slate-900">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-950 shadow-xs">
                  {srv.badge}
                </span>
                <span className="absolute bottom-2 right-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-xs font-mono">
                  0{srv.number}
                </span>
              </div>

              {/* Card Content Area */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-amber-600 transition-colors font-display">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3 flex-1">
                  {srv.shortDesc}
                </p>

                {/* Key Deliverable Mini-bullets (3 items) */}
                <ul className="space-y-1.5 mb-4 pt-2.5 border-t border-slate-100 text-xs text-slate-700">
                  {srv.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-[11px] font-medium">{item}</span>
                    </li>
                  ))}
                  {srv.deliverables.length > 3 && (
                    <li className="text-[10px] text-amber-700 font-semibold pl-5">
                      + {srv.deliverables.length - 3} more deliverables
                    </li>
                  )}
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => setSelectedServiceDetail(srv)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3 h-3 text-amber-600" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(srv.title)}
                    className="px-3 py-1 rounded-md bg-amber-50 hover:bg-amber-500 text-amber-800 hover:text-slate-950 font-bold text-xs transition-colors border border-amber-200 cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Service Detail Specifications Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-6 shadow-xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                Service {selectedServiceDetail.number} • {selectedServiceDetail.badge}
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                {selectedServiceDetail.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedServiceDetail.longDesc}
              </p>
            </div>

            {/* Complete Deliverables Checklist */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Included Drawings &amp; Engineering Deliverables:
              </h4>
              <div className="grid sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                {selectedServiceDetail.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[11px]">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-amber-700" />
                Our Objectives for this Service:
              </h4>
              <div className="space-y-1 text-xs text-slate-700">
                {selectedServiceDetail.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-amber-600 shrink-0 mt-1.5"></div>
                    <span className="text-[11px]">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="px-4 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onSelectServiceForQuote(title);
                }}
                className="btn-primary"
              >
                <span>Request Quote for {selectedServiceDetail.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

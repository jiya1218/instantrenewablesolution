import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Award, ShieldCheck, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';

export default function AwardsRecognition({ onOpenEstimateModal }) {
  return (
    <section id="recognition" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Awards and Recognition
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Our Engineering Standards &amp; Industry Compliance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every drawing, calculation sheet, and PVsyst model issued by Instant Renewable Solution adheres strictly to national and international statutory engineering benchmarks.
          </p>
        </div>

        {/* 4 Recognition / Standards Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {irsCompanyData.awardsAndCompliance.map((item, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 rounded-xl p-6 bg-white hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2 font-display">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-6 rounded-2xl bg-amber-500 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <h3 className="text-base sm:text-lg font-black font-display">
              Need statutory CEIG drawings for an upcoming state utility submission?
            </h3>
            <p className="text-xs font-medium text-slate-900 mt-0.5">
              Get permit-ready electrical schematics, SLD, and earthing calculations delivered in 48-72 hours.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="px-6 py-3 rounded-lg bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            Request CEIG Package
          </button>
        </div>

      </div>
    </section>
  );
}


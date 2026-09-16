import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Zap, Factory, Sun, Home, Users, ArrowRight } from 'lucide-react';

const industryIcons = {
  Zap,
  Factory,
  Sun,
  Home,
  Users
};

export default function IndustriesWeServe({ onOpenEstimateModal }) {
  return (
    <section id="industries" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Industries We Serve
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Engineered for Solar Stakeholders Across the Value Chain
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From turnkey EPC companies executing multi-megawatt solar plants to industrial facility owners and consultants, we deliver constructible engineering packages.
          </p>
        </div>

        {/* 5 Industry Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {irsCompanyData.industriesWeServe.map((ind, idx) => {
            const Icon = industryIcons[ind.icon] || Zap;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 border border-amber-200/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-5">
                  <button
                    onClick={onOpenEstimateModal}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Industry Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Contact Card */}
          <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Custom Sector Requirements?
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">
                Need specialized solar calculations for your unique facility?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our senior solar engineers for custom single-line diagrams, DG sync, and zero-export schemes.
              </p>
            </div>
            <div className="mt-5">
              <a
                href={irsCompanyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-slate-950 font-bold text-xs shadow-xs transition-colors"
              >
                <span>Talk to Engineering Lead</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


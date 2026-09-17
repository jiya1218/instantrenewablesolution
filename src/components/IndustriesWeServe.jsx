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
    <section id="industries" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
    <section id="industries" className="py-16 sm:py-24 bg-[#F4F8FC] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Ecosystem Partners</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Engineered for Solar Stakeholders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From turnkey EPC companies executing multi-megawatt solar plants to C&amp;I facility owners and consultants.
          </p>
        </div>

        {/* 5 Industry Cards Grid + Custom CTA Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {irsCompanyData.industriesWeServe.map((ind, idx) => {
            const Icon = industryIcons[ind.icon] || Zap;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 hover:shadow-xl hover:border-[#149C68]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 hover:shadow-xl hover:border-[#17BAF0]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center mb-4 group-hover:bg-[#149C68] group-hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#07427B]/10 text-[#07427B] flex items-center justify-center mb-4 group-hover:bg-[#07427B] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1A202C] mb-2 font-display group-hover:text-[#149C68] transition-colors">
                  <h3 className="text-base sm:text-lg font-bold text-[#07427B] mb-2 font-display group-hover:text-[#17BAF0] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-2">
                  <button
                    onClick={onOpenEstimateModal}
                    className="text-xs font-bold text-[#149C68] hover:text-[#0E7A52] inline-flex items-center gap-1.5 cursor-pointer active:scale-95"
                    className="text-xs font-bold text-[#07427B] hover:text-[#17BAF0] inline-flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Request Sector Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#17BAF0]" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Contact Card */}
          <div className="bg-[#0A1628] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#149C68]/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="bg-[#042342] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#17BAF0]/20 blur-3xl rounded-full pointer-events-none"></div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#149C68] block mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#17BAF0] block mb-1">
                Custom Sector Requirements?
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-display">
                Need specialized solar engineering for your unique facility?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Connect directly with our senior solar engineers for custom single-line diagrams, DG sync, and zero-export schemes.
              </p>
            </div>
            <div>
              <a
                href={irsCompanyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#59BD4B] hover:bg-[#479E3B] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
              >
                <span>Chat with Engineering Lead</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

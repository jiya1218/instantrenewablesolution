import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Award, ShieldCheck, CheckCircle2, FileCheck, ArrowRight, Cpu, Wrench } from 'lucide-react';

export default function AwardsRecognition({ onOpenEstimateModal }) {
  const softwareStack = [
    { name: 'PVsyst 7.4+', role: 'Bankable 8760 Hourly Yield Modeling', tag: 'Yield Simulation' },
    { name: 'AutoCAD & Civil 3D', role: 'Full Permit & Construction CAD Schematics', tag: '2D Drafting' },
    { name: 'STAAD Pro v8i', role: '3D Wind Load & Structural Stress Analysis', tag: 'IS 875 Structural' },
    { name: 'HelioScope', role: 'Rapid Pre-Bid 3D Layouts & Shading', tag: 'Preliminary' },
    { name: 'SketchUp 3D', role: 'Client Presentation Visualization & Renders', tag: '3D Render' },
    { name: 'ETAP Electrical', role: 'Short-Circuit & Relay Coordination Modeling', tag: 'Grid Safety' }
  ];

  return (
    <section id="recognition" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Engineering Rigor</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Standards &amp; Statutory Compliance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every drawing sheet, calculation package, and PVsyst model issued by Instant Renewable Solution strictly satisfies national and international engineering benchmarks.
          </p>
        </div>

        {/* 4 Recognition / Standards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {irsCompanyData.awardsAndCompliance.map((item, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 rounded-xl p-6 bg-white hover:border-[#149C68]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              className="border border-slate-200 rounded-xl p-6 bg-white hover:border-[#17BAF0]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-[#149C68]/10 border border-[#149C68]/20 text-[#149C68] text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  <span className="inline-block bg-[#07427B]/10 border border-[#07427B]/20 text-[#07427B] text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center group-hover:bg-[#149C68] group-hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07427B]/10 text-[#07427B] flex items-center justify-center group-hover:bg-[#07427B] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-bold text-[#1A202C] text-base leading-snug mb-2 font-display group-hover:text-[#149C68] transition-colors">
                <h3 className="font-bold text-[#07427B] text-base leading-snug mb-2 font-display group-hover:text-[#17BAF0] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#149C68]">
                <CheckCircle2 className="w-4 h-4 text-[#149C68] shrink-0" />
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#59BD4B]">
                <CheckCircle2 className="w-4 h-4 text-[#59BD4B] shrink-0" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Software Tool Stack Showcase */}
        <div className="mb-14 bg-slate-50 border border-slate-200/80 rounded-2xl p-7 sm:p-9">
        <div className="mb-14 bg-[#F4F8FC] border border-slate-200/80 rounded-2xl p-7 sm:p-9">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#149C68]">Tooling &amp; Simulation Infrastructure</span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A202C] mt-1.5 font-display">Industry-Standard Software Stack</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-[#07427B]">Tooling &amp; Simulation Infrastructure</span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#07427B] mt-1.5 font-display">Industry-Standard Software Stack</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {softwareStack.map((tool, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-center hover:border-[#149C68]/40 hover:shadow-sm transition-all flex flex-col justify-between">
                <span className="text-[10px] font-bold text-[#149C68] uppercase tracking-wider block mb-1">{tool.tag}</span>
                <span className="text-sm font-bold text-[#1A202C] block mb-1 font-display">{tool.name}</span>
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-center hover:border-[#17BAF0]/50 hover:shadow-sm transition-all flex flex-col justify-between">
                <span className="text-[10px] font-bold text-[#17BAF0] uppercase tracking-wider block mb-1">{tool.tag}</span>
                <span className="text-sm font-bold text-[#07427B] block mb-1 font-display">{tool.name}</span>
                <span className="text-[11px] text-slate-500 line-clamp-2 leading-tight">{tool.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#0A1628] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#149C68]/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="p-7 sm:p-9 rounded-2xl bg-[#042342] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#17BAF0]/20 blur-3xl rounded-full pointer-events-none"></div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-display">
              Need statutory CEIG drawings for an upcoming state utility submission?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              Get permit-ready electrical schematics, SLD, and earthing calculations delivered in 48-72 hours.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-lg active:scale-95 transition-all cursor-pointer shrink-0 hover:-translate-y-0.5"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer shrink-0 hover:-translate-y-0.5"
          >
            Request CEIG Package
          </button>
        </div>

      </div>
    </section>
  );
}

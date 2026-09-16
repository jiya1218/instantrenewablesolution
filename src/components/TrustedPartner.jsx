import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ShieldCheck, CheckCircle2, Award, Zap, Building2, Sun } from 'lucide-react';

export default function TrustedPartner() {
  const partnerBadges = [
    { title: "Solar EPC Contractors", desc: "Turnkey MW & C&I Partners", icon: Zap },
    { title: "State DISCOM Projects", desc: "Permit & CEIG Approved", icon: ShieldCheck },
    { title: "Industrial Solar Developers", desc: "Captive & Open Access", icon: Building2 },
    { title: "Utility Scale IPPs", desc: "Multi-MW Plant Engineering", icon: Sun },
    { title: "Rooftop EPC Integrators", desc: "Distributed Solar Networks", icon: Award },
    { title: "International EPC Teams", desc: "Middle East Standards", icon: CheckCircle2 }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Trusted Partner
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Our Valuable EPC &amp; Developer Partners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 200+ projects and 800+ MW delivered with an industry-leading 98% client retention rate across India and the Middle East.
          </p>
        </div>

        {/* 6 Partner Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
          {partnerBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-sm transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-2.5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-0.5 leading-snug">
                  {badge.title}
                </h4>
                <span className="text-[10px] text-slate-500 font-medium">
                  {badge.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Trust Proof Metrics Strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-md flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#FFA91F] block font-display">800+ MW</span>
            <span className="text-xs text-slate-300">Total Capacity Engineered</span>
          </div>
          <div className="w-px h-8 bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#FFA91F] block font-display">200+</span>
            <span className="text-xs text-slate-300">Completed Projects</span>
          </div>
          <div className="w-px h-8 bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#FFA91F] block font-display">98%</span>
            <span className="text-xs text-slate-300">Repeat Client Retention</span>
          </div>
          <div className="w-px h-8 bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#FFA91F] block font-display">24-48h</span>
            <span className="text-xs text-slate-300">Fast Turnaround SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
}


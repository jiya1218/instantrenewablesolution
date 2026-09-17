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
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Trusted Partner</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Our Valuable EPC &amp; Developer Partners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 200+ projects and 800+ MW delivered with an industry-leading 98% client retention rate across India and the Middle East.
          </p>
        </div>

        {/* 6 Partner Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {partnerBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#149C68]/40 hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#17BAF0]/50 hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center mb-3 group-hover:bg-[#149C68] group-hover:text-white transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#07427B]/10 text-[#07427B] flex items-center justify-center mb-3 group-hover:bg-[#07427B] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#1A202C] mb-1 leading-snug">
                <h4 className="text-xs sm:text-sm font-bold text-[#07427B] mb-1 leading-snug">
                  {badge.title}
                </h4>
                <span className="text-[11px] text-slate-500 font-medium">
                  {badge.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Trust Proof Metrics Strip */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#0A1628] text-white shadow-xl flex flex-wrap items-center justify-around gap-6 text-center border border-white/10">
        {/* Trust Proof Metrics Strip matching IRS Navy */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#042342] text-white shadow-xl flex flex-wrap items-center justify-around gap-6 text-center border border-white/10">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#149C68] block font-display">800+ MW</span>
            <span className="text-3xl sm:text-4xl font-black text-[#17BAF0] block font-display">800+ MW</span>
            <span className="text-xs sm:text-sm text-slate-300">Total Capacity Engineered</span>
          </div>
          <div className="w-px h-10 bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#149C68] block font-display">200+</span>
            <span className="text-3xl sm:text-4xl font-black text-[#59BD4B] block font-display">200+</span>
            <span className="text-xs sm:text-sm text-slate-300">Completed Projects</span>
          </div>
          <div className="w-px h-10 bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#149C68] block font-display">98%</span>
            <span className="text-3xl sm:text-4xl font-black text-[#17BAF0] block font-display">98%</span>
            <span className="text-xs sm:text-sm text-slate-300">Repeat Client Retention</span>
          </div>
          <div className="w-px h-10 bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#149C68] block font-display">24-48h</span>
            <span className="text-3xl sm:text-4xl font-black text-[#59BD4B] block font-display">24-48h</span>
            <span className="text-xs sm:text-sm text-slate-300">Fast Turnaround SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
}

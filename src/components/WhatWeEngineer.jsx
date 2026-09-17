import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, Cpu, Users } from 'lucide-react';

export default function WhatWeEngineer({ onOpenEstimateModal }) {
  const verticals = [
    {
      title: "Commercial & Industrial (C&I) Solar",
      tag: "For EPCs & Installers",
      tagBg: "bg-[#FFA91F]",
      tagBg: "bg-[#59BD4B]",
      image: "/images/c-and-i-solar-clean.jpg",
      description: "Permit-ready packages, 3D pre-design, shed structural load analysis, and CEIG drawings for commercial, industrial, and institutional solar installations.",
      highlights: [
        "Shed & RCC rooftop load verification (IS 875)",
        "3D shading analysis & annual energy yield forecasts",
        "CEIG single line diagrams & panel layouts",
        "Zero export schemes & DG synchronization details"
      ],
      btnClass: "bg-[#FFA91F] hover:bg-[#e8970d] text-white",
      btnClass: "bg-[#59BD4B] hover:bg-[#479E3B] text-white",
      ctaText: "Explore C&I Solar Services"
    },
    {
      title: "Ground-Mount & MW Scale Engineering",
      tag: "For Developers & EPCs",
      tagBg: "bg-[#149C68]",
      tagBg: "bg-[#07427B]",
      image: "/images/american-public-power-association-fm5_vCUa-Bc-unsplash-1-1024x731.jpg",
      description: "Utility-scale detailed engineering, topography layout, STAAD Pro pile foundation design, HT switchyard integration, and balance-of-system (BOS) optimization.",
      highlights: [
        "Terrain-optimized pitch & row layout planning",
        "66kV / 33kV switchyard & HT electrical integration",
        "Wind load & STAAD structural foundation modeling",
        "Bankable 8760 PVsyst generation simulation reports"
      ],
      btnClass: "bg-[#149C68] hover:bg-[#0E7A52] text-white",
      btnClass: "bg-[#07427B] hover:bg-[#042342] text-white",
      ctaText: "Explore Ground Mount Services"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "24-48h Rapid Turnaround",
      desc: "Fast delivery on preliminary 3D layouts, proposals, and revision cycles so your bids never miss deadlines."
    },
    {
      icon: ShieldCheck,
      title: "100% Statutory CEIG Compliance",
      desc: "Standardized CAD schematics, earthing calculations, and submission annexures accepted across state DISCOMs."
    },
    {
      icon: Cpu,
      title: "IS 875 & STAAD Pro Precision",
      desc: "Comprehensive 3D stress modeling and structural wind load calculations for sheds, RCC, and ground piles."
    },
    {
      icon: Users,
      title: "Zero In-House Payroll Overhead",
      desc: "Access specialized senior PV design engineers on-demand without carrying fixed employee payroll costs."
    }
  ];

  return (
    <section id="what-we-engineer" className="py-16 sm:py-24 bg-white border-t border-slate-100" aria-labelledby="verticals-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
          <p className="section-label">What we engineer</p>
          <h2 id="verticals-heading" className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 id="verticals-heading" className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Two verticals. One engineering partner.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Instant Renewable Solution serves solar EPCs, developers, and contractors with constructible drawings, bankable models, and delivery ready for direct site execution.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {verticals.map((vert, idx) => (
            <article 
              key={idx}
              className="group relative flex flex-col rounded-2xl border overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200 hover:border-[#149C68]/40"
              className="group relative flex flex-col rounded-2xl border overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200 hover:border-[#17BAF0]/50"
            >
              {/* Image Banner */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#042342]">
                <img 
                  src={vert.image} 
                  alt={vert.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-[#0A1628]/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03172B]/75 via-[#07427B]/15 to-transparent"></div>
                <span className={`absolute top-3.5 left-3.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${vert.tagBg} text-white shadow-sm`}>
                  {vert.tag}
                </span>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#1A202C] mb-2 font-display">
                <h3 className="text-lg sm:text-xl font-bold text-[#07427B] mb-2 font-display">
                  {vert.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {vert.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {vert.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#149C68]" />
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#59BD4B]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenEstimateModal}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all ${vert.btnClass} shadow-md cursor-pointer w-full sm:w-auto hover:shadow-lg`}
                >
                  <span>{vert.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="border-t border-slate-200/80 pt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#149C68]">Why EPCs Outsource To IRS</span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A202C] mt-1.5 font-display">Built to Eliminate Your Engineering Bottlenecks</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-[#07427B]">Why EPCs Outsource To IRS</span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#07427B] mt-1.5 font-display">Built to Eliminate Your Engineering Bottlenecks</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-[#149C68]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  className="p-5 rounded-xl border border-slate-200/80 bg-[#F4F8FC] hover:bg-white hover:border-[#17BAF0]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#149C68]/10 text-[#149C68] flex items-center justify-center mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#07427B]/10 text-[#07427B] flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A202C] mb-1.5">{adv.title}</h4>
                    <h4 className="text-sm font-bold text-[#07427B] mb-1.5">{adv.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

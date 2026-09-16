import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { CheckCircle2, ArrowRight, Sun, Building2 } from 'lucide-react';

export default function WhatWeEngineer({ onOpenEstimateModal }) {
  const verticals = [
    {
      title: "Commercial & Industrial (C&I) Solar",
      tag: "For EPCs & Installers",
      image: "/images/pre-design-new.jpg",
      description: "Permit-ready packages, 3D pre-design, shed structural load analysis, and CEIG drawings for commercial, industrial, and institutional solar installations.",
      highlights: [
        "Shed & RCC rooftop load verification (IS 875)",
        "3D shading analysis & annual energy yield forecasts",
        "CEIG single line diagrams & panel layouts",
        "Zero export schemes & DG synchronization details"
      ],
      ctaText: "Explore C&I Solar Services",
      ctaHref: "#services"
    },
    {
      title: "Ground-Mount & MW Scale Engineering",
      tag: "For Developers & EPCs",
      image: "/images/ground-mount-solar.jpg",
      description: "Utility-scale detailed engineering, topography layout, STAAD Pro pile foundation design, HT switchyard integration, and balance-of-system (BOS) optimization.",
      highlights: [
        "Terrain-optimized pitch & row layout planning",
        "66kV / 33kV switchyard & HT electrical integration",
        "Wind load & STAAD structural foundation modeling",
        "Bankable 8760 PVsyst generation simulation reports"
      ],
      ctaText: "Explore Ground Mount Services",
      ctaHref: "#services"
    }
  ];

  return (
    <section id="what-we-engineer" className="py-16 sm:py-20 bg-white border-t border-slate-100" aria-labelledby="verticals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            What We Engineer
          </div>
          <h2 id="verticals-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Two Solar Verticals. One Engineering Partner.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Instant Renewable Solution serves solar EPCs, developers, and contractors with the same standard: constructible drawings, bankable models, and delivery ready for direct site execution.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {verticals.map((vert, idx) => (
            <article 
              key={idx}
              className="group relative flex flex-col rounded-2xl border overflow-hidden bg-white transition-all duration-300 hover:shadow-xl border-slate-200 hover:border-amber-400"
            >
              {/* Image Banner */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                <img 
                  src={vert.image} 
                  alt={vert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent"></div>
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFA91F] text-white shadow-sm">
                  {vert.tag}
                </span>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 font-display">
                  {vert.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {vert.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {vert.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenEstimateModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-colors bg-[#FFA91F] hover:bg-[#e8970d] text-white shadow-sm cursor-pointer"
                >
                  <span>{vert.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}


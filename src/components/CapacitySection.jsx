import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Factory, Sun, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CapacitySection({ onOpenEstimateModal }) {
  const verticals = [
    {
      title: "Commercial & Industrial (C&I)",
      tag: "For EPCs & Installers",
      image: "/images/pre-design-new.jpg",
      description: "Fast-turnaround permit packages, 3D pre-design, shed structural load analysis, and CEIG drawings for commercial and industrial solar installations.",
      highlights: [
        "Shed & RCC rooftop load verification",
        "3D shading analysis & energy yield models",
        "CEIG single line diagrams & panel layouts",
        "Zero export & DG synchronization schemes"
      ]
    },
    {
      title: "Ground-Mount & MW Scale",
      tag: "For Developers & EPCs",
      image: "/images/ground-mount-solar.jpg",
      description: "Utility-scale detailed engineering, topography layout, STAAD Pro pile foundation design, and balance-of-system (BOS) optimization.",
      highlights: [
        "Terrain-optimized pitch & row layout",
        "HT substation & switchyard integration",
        "Wind load & STAAD structural modeling",
        "Bankable 8760 PVsyst generation reports"
      ]
    }
  ];

  return (
    <section id="capacity" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="section-label">Engineering Capacity Multiplier</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-display tracking-tight mb-2">
            Expand Your Engineering Capacity Without Expanding Your Team
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {irsCompanyData.capacityMultiplier.subtitle}
          </p>
        </div>

        {/* 2 Verticals Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {verticals.map((vert, idx) => (
            <article 
              key={idx}
              className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-amber-400 hover:shadow-md transition-all"
            >
              {/* Image Banner */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                <img 
                  src={vert.image} 
                  alt={vert.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500 text-slate-950">
                  {vert.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-display">
                  {vert.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {vert.description}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {vert.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-600" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenEstimateModal}
                  className="btn-primary w-fit text-xs"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4 Multiplier Benefit Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {irsCompanyData.capacityMultiplier.points.map((pt, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-amber-700 block mb-1">0{i + 1}.</span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {pt}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

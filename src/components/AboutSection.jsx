import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  ShieldCheck, CheckCircle2, Award, Zap, ArrowRight, 
  Target, Compass, Sparkles, Users, Lightbulb, Leaf, Shield 
} from 'lucide-react';

const valueIcons = [Shield, Zap, Award, Target, Users];

export default function AboutSection({ onOpenEstimateModal }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column About Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Engineering Team Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 relative group">
              <img 
                src="/images/solar-office-team.png" 
                alt="Instant Renewable Solution Solar Engineering Team in Office" 
                className="w-full h-auto object-cover max-h-[340px]"
                onError={(e) => {
                  e.target.src = "/images/solar-design-team.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">Surat Office</span>
                <p className="text-xs text-slate-200 font-medium">Multidisciplinary Solar CAD &amp; Simulation Desk</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-white border border-slate-200 shadow-md rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shadow-2xs">
                IRS
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-tight">Outsourced Solar Team</span>
                <span className="text-[11px] text-amber-600 font-semibold">Surat • India &amp; Middle East</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Information */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              About Instant Renewable Solution
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4 font-display">
              Outsourced Solar Engineering Partner for EPC Companies
            </h2>

            <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Instant Renewable Solution (IRS)</strong> provides outsourced solar design and engineering support to EPC companies, developers, installers, and consultants working across commercial, industrial, and utility-scale projects.
              </p>
              <p>
                Our multidisciplinary engineering covers PVsyst simulations, electrical Single Line Diagrams (SLD), structural STAAD Pro analysis, statutory CEIG documentation, execution drawings, and comprehensive Bill of Quantities (BOQ).
              </p>
              <p className="text-slate-500 text-xs sm:text-sm">
                Our philosophy is simple: maximize energy yield, eliminate design friction, and deliver precise engineering packages ready for safe, timely site construction.
              </p>
            </div>

            {/* 4 Trust Points */}
            <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-200">
              {irsCompanyData.trustPillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{pillar.title}</span>
                    <span className="text-xs text-slate-500 leading-snug">{pillar.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEstimateModal}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={irsCompanyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors border border-slate-200"
              >
                <span>Talk to Solar Engineer</span>
              </a>
            </div>
          </div>

        </div>

        {/* Mission & Vision Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Our Purpose</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">Our Mission</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {irsCompanyData.aboutUs.mission}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">Our Horizon</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">Our Vision</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {irsCompanyData.aboutUs.vision}
              </p>
            </div>
          </div>

          {/* 5 Core Values Cards (Balanced 3 top, 2 bottom centered) */}
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              Core Principles
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Our 5 Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {irsCompanyData.aboutUs.coreValues.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div 
                  key={i} 
                  className={`p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all flex flex-col ${
                    i === 3 ? 'lg:col-start-1 lg:translate-x-1/2' : i === 4 ? 'lg:col-start-2 lg:translate-x-1/2' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/60 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">{v.name}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

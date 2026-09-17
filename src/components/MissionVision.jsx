import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Target, Compass, Sparkles } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
    <section id="mission-vision" className="py-16 sm:py-24 bg-[#F4F8FC] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Mission &amp; Vision</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Our Purpose and Future Horizon
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Guiding our engineering team in empowering Solar EPC contractors to build cleaner, faster, and more profitable renewable infrastructure.
          </p>
        </div>

        {/* 2 Side-by-Side Cards (Mission & Vision) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Mission Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="h-44 sm:h-48 overflow-hidden relative bg-[#0A1628]">
            <div className="h-44 sm:h-48 overflow-hidden relative bg-[#042342]">
              <img 
                src="/images/solar-office-team.png" 
                alt="Our Mission - Instant Renewable Solution" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "/images/hero-solar-sky.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#042342]/85 via-[#07427B]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#149C68] text-white flex items-center justify-center font-bold shadow-md">
                  <Target className="w-5 h-5" />
                <div className="w-10 h-10 rounded-xl bg-[#07427B] text-white flex items-center justify-center font-bold shadow-md">
                  <Target className="w-5 h-5 text-[#17BAF0]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#149C68] block">Our Core Mission</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#17BAF0] block">Our Core Mission</span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">Mission Statement</h3>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {irsCompanyData.aboutUs.mission}
              </p>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#149C68]">
                <Sparkles className="w-3.5 h-3.5 text-[#149C68]" />
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#07427B]">
                <Sparkles className="w-3.5 h-3.5 text-[#59BD4B]" />
                <span>Zero Engineering Bottlenecks for Solar EPCs</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="h-44 sm:h-48 overflow-hidden relative bg-[#0A1628]">
            <div className="h-44 sm:h-48 overflow-hidden relative bg-[#042342]">
              <img 
                src="/images/american-public-power-association-fm5_vCUa-Bc-unsplash-1-1024x731.jpg" 
                alt="Our Vision - Instant Renewable Solution" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "/images/pre-design-new.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#042342]/85 via-[#07427B]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A1628] text-[#149C68] flex items-center justify-center font-bold shadow-md border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#042342] text-[#59BD4B] flex items-center justify-center font-bold shadow-md border border-white/10">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">Our Long-term Vision</span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">Vision Statement</h3>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {irsCompanyData.aboutUs.vision}
              </p>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-[#149C68]" />
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#07427B]">
                <Sparkles className="w-3.5 h-3.5 text-[#17BAF0]" />
                <span>Premier Solar Engineering Partner in India &amp; ME</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

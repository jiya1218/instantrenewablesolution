import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Zap, Layers } from 'lucide-react';

export default function Hero({ onOpenEstimateModal }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[640px] sm:min-h-[720px] lg:h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden pt-[70px] bg-[#0A1628]"
      className="relative min-h-[640px] sm:min-h-[720px] lg:h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden pt-[70px] bg-[#042342]"
    >
      {/* Background Solar Engineering Image */}
      <picture className="absolute inset-0 pointer-events-none">
        <source srcSet="/images/hero-solar-sky.jpg" type="image/jpeg" />
        <img 
          src="/images/hero-solar-sky.jpg" 
          alt="Instant Renewable Solution - Solar Design & Engineering" 
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
          onError={(e) => {
            e.target.src = "/images/ground-mount-solar.jpg";
          }}
        />
      </picture>

      {/* Dual-Layer Midnight Navy & Clean-Tech Radial Glow Overlays */}
      <div className="absolute inset-0 bg-[#0A1628]/80" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/60 to-[#0A1628]/85" aria-hidden="true"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#149C68]/20 blur-[130px] rounded-full pointer-events-none" aria-hidden="true"></div>
      {/* Dual-Layer IRS Navy (#07427B & #042342) and Cyan/Green Glow Overlays */}
      <div className="absolute inset-0 bg-[#042342]/85" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#03172B]/90 via-[#07427B]/60 to-[#042342]/90" aria-hidden="true"></div>
      
      {/* Ambient Radial Glows matching Logo Cyan #17BAF0 & Green #59BD4B */}
      <div className="absolute -top-32 left-1/3 w-[550px] h-[350px] bg-[#17BAF0]/25 blur-[140px] rounded-full pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -bottom-20 right-1/3 w-[450px] h-[300px] bg-[#59BD4B]/20 blur-[130px] rounded-full pointer-events-none" aria-hidden="true"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Eyebrow Pill with Emerald Accent Lines */}
          {/* Eyebrow Pill with Logo Cyan & Green Accent Lines */}
          <div className="inline-flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
            <span className="w-8 h-[2px] bg-[#149C68]" aria-hidden="true"></span>
            <span className="w-8 h-[2.5px] bg-[#17BAF0]" aria-hidden="true"></span>
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.25em] uppercase text-white/90 font-display">
              Solar Design &amp; Engineering Consultancy
            </span>
            <span className="w-8 h-[2px] bg-[#149C68]" aria-hidden="true"></span>
            <span className="w-8 h-[2.5px] bg-[#59BD4B]" aria-hidden="true"></span>
          </div>

          {/* Main Headline - Strictly 2 Lines, Montserrat font-extrabold */}
          <h1 className="text-white font-extrabold leading-[1.15] text-3xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] mb-6 max-w-4xl mx-auto font-display tracking-tight">
            <span className="block">Drawings &amp; engineering</span>
            <span className="block text-white/95 mt-1 sm:mt-2">that install clean on site.</span>
          </h1>

          {/* Subtitle - Poppins leading-relaxed */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-9 font-sans font-normal px-2">
            Permit-ready CAD, PVsyst &amp; STAAD packages for 200+ solar EPC companies. IRS operates as an extension of your engineering team, eliminating bottlenecks during peak workloads with 24–48h SLA and zero permanent overhead.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-semibold text-sm shadow-xl shadow-orange-500/30 transition-all hover:scale-102 active:scale-95 cursor-pointer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-semibold text-sm shadow-xl shadow-cyan-500/30 transition-all hover:scale-102 active:scale-95 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              <Zap className="w-4 h-4 fill-white text-white" />
              <span>Get a free quote</span>
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-white/80 hover:bg-white hover:text-[#0A1628] text-white font-semibold text-sm transition-all hover:scale-102 active:scale-95 cursor-pointer backdrop-blur-xs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-white/80 hover:bg-white hover:text-[#07427B] text-white font-semibold text-sm transition-all hover:scale-102 active:scale-95 cursor-pointer backdrop-blur-xs"
            >
              <Layers className="w-4 h-4" />
              <span>Explore services</span>
            </a>
          </div>

          {/* Metrics Rail */}
          {/* Metrics Rail with Logo Colors */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/85 text-xs sm:text-sm font-sans">
            <span className="flex items-center gap-2">
              <span className="text-[#149C68] font-bold text-base sm:text-lg">800+ MW</span>
              <span className="text-[#17BAF0] font-bold text-base sm:text-lg">800+ MW</span>
              <span className="text-slate-300">engineered</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#149C68] font-bold text-base sm:text-lg">200+</span>
              <span className="text-[#59BD4B] font-bold text-base sm:text-lg">200+</span>
              <span className="text-slate-300">EPC projects</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#149C68] font-bold text-base sm:text-lg">98%</span>
              <span className="text-[#17BAF0] font-bold text-base sm:text-lg">98%</span>
              <span className="text-slate-300">retention</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#149C68] font-bold text-base sm:text-lg">24-48h</span>
              <span className="text-[#59BD4B] font-bold text-base sm:text-lg">24-48h</span>
              <span className="text-slate-300">turnaround SLA</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

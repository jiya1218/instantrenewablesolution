import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ArrowRight, Zap, Layers } from 'lucide-react';

export default function Hero({ onOpenEstimateModal }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[620px] sm:min-h-[700px] lg:h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden pt-[84px] md:pt-[120px] bg-[#0a1628]"
    >
      {/* Background Solar Engineering Image with Professional Dark Overlays */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-solar-sky.jpg" 
          alt="Instant Renewable Solution Solar Engineering" 
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = "/images/ground-mount-solar.jpg";
          }}
        />
        {/* Deep Dual-layer Overlays for High Contrast & Text Legibility */}
        <div className="absolute inset-0 bg-[#0a1628]/75" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/85 via-[#0a1628]/60 to-[#0a1628]/85" aria-hidden="true"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Eyebrow Tag with Golden Lines */}
          <div className="inline-flex items-center justify-center gap-3 mb-5 sm:mb-6 animate-in fade-in duration-500">
            <span className="w-8 h-[2px] bg-[#FFA91F]" aria-hidden="true"></span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/90">
              Solar Design · Engineering Support · CEIG &amp; PVsyst
            </span>
            <span className="w-8 h-[2px] bg-[#FFA91F]" aria-hidden="true"></span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-black leading-[1.12] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-5 tracking-tight font-display">
            <span className="block">Solar Design &amp; Engineering</span>
            <span className="block text-white">That Deliver On Site.</span>
          </h1>

          {/* Subtitle (100% IRS Content) */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Permit-ready CAD packages, CEIG drawings, and bankable PVsyst reports for Solar EPC companies across India and the Middle East.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border-2 border-white/80 hover:bg-white hover:text-[#0a1628] text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Services</span>
            </a>
          </div>

          {/* Bottom Metrics Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/85 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="text-[#FFA91F] font-black text-base sm:text-lg">800+ MW</span>
              <span className="text-slate-200">delivered</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#FFA91F] font-black text-base sm:text-lg">200+</span>
              <span className="text-slate-200">residential projects</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#FFA91F] font-black text-base sm:text-lg">98%</span>
              <span className="text-slate-200">client retention</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#FFA91F] font-black text-base sm:text-lg">India &amp; ME</span>
              <span className="text-slate-200">regional expertise</span>
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="text-[#FFA91F] font-black text-base sm:text-lg">24-48h</span>
              <span className="text-slate-200">fast SLA</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

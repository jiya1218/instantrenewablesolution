import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ArrowRight, Zap, Layers, Sparkles } from 'lucide-react';

export default function Hero({ onOpenEstimateModal }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[560px] sm:min-h-[640px] lg:h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden pt-20 sm:pt-28 lg:pt-[110px] pb-10 sm:pb-16 bg-[#0a1628]"
    >
      {/* Background Solar Engineering Image with High Contrast Overlays */}
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
        <div className="absolute inset-0 bg-[#0a1628]/80" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/65 to-[#0a1628]/90" aria-hidden="true"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Eyebrow Tag with Golden Line Accents */}
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-in fade-in duration-500">
            <span className="w-5 sm:w-8 h-[2px] bg-[#FFA91F]" aria-hidden="true"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-white/95">
              Solar Design · Engineering · CEIG &amp; PVsyst
            </span>
            <span className="w-5 sm:w-8 h-[2px] bg-[#FFA91F]" aria-hidden="true"></span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-black leading-[1.18] sm:leading-[1.12] text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] mb-4 sm:mb-5 tracking-tight font-display">
            <span className="block">Solar Design &amp; Engineering</span>
            <span className="block text-white">That Deliver On Site.</span>
          </h1>

          {/* Subtitle (100% IRS Content) */}
          <p className="text-white/90 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-normal px-2">
            Permit-ready CAD packages, CEIG drawings, and bankable PVsyst reports for Solar EPC companies across India and the Middle East.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-md sm:max-w-none mx-auto w-full px-2">
            <button
              onClick={onOpenEstimateModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/30 active:scale-95 transition-all cursor-pointer min-h-[46px]"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl border border-white/70 hover:bg-white hover:text-[#0a1628] text-white font-bold text-xs sm:text-sm active:scale-95 transition-all min-h-[46px]"
            >
              <Layers className="w-4 h-4" />
              <span>Explore 6 Services</span>
            </a>
          </div>

          {/* Mobile-Optimized Metrics Rail / Bar */}
          <div className="pt-5 border-t border-white/15">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-x-7 sm:gap-y-2 text-white/90 text-xs">
              <div className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 flex items-center justify-center sm:justify-start gap-1.5">
                <span className="text-[#FFA91F] font-black text-sm sm:text-lg">800+ MW</span>
                <span className="text-slate-300 text-[11px] sm:text-xs">delivered</span>
              </div>

              <div className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 flex items-center justify-center sm:justify-start gap-1.5">
                <span className="text-[#FFA91F] font-black text-sm sm:text-lg">200+</span>
                <span className="text-slate-300 text-[11px] sm:text-xs">projects</span>
              </div>

              <div className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 flex items-center justify-center sm:justify-start gap-1.5">
                <span className="text-[#FFA91F] font-black text-sm sm:text-lg">98%</span>
                <span className="text-slate-300 text-[11px] sm:text-xs">retention</span>
              </div>

              <div className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 flex items-center justify-center sm:justify-start gap-1.5">
                <span className="text-[#FFA91F] font-black text-sm sm:text-lg">India &amp; ME</span>
                <span className="text-slate-300 text-[11px] sm:text-xs">expertise</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Target, Compass, Sparkles } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Mission &amp; Vision
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Our Purpose and Future Horizon
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Guiding our engineering team in empowering Solar EPC contractors to build cleaner, faster, and more profitable renewable infrastructure.
          </p>
        </div>

        {/* 2 Side-by-Side Cards (Mission & Vision) */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="h-48 sm:h-52 overflow-hidden relative bg-slate-900">
              <img 
                src="/images/solar-office-team.png" 
                alt="Our Mission - Instant Renewable Solution" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/hero-solar-sky.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Our Core Mission</span>
                  <h3 className="text-lg font-bold text-white font-display">Mission Statement</h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {irsCompanyData.aboutUs.mission}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Zero Engineering Bottlenecks for Solar EPCs</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="h-48 sm:h-52 overflow-hidden relative bg-slate-900">
              <img 
                src="/images/ground-mount-solar.jpg" 
                alt="Our Vision - Instant Renewable Solution" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/pre-design-new.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-sm border border-slate-700">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">Our Long-term Vision</span>
                  <h3 className="text-lg font-bold text-white font-display">Vision Statement</h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {irsCompanyData.aboutUs.vision}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Premier Solar Engineering Partner in India &amp; ME</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


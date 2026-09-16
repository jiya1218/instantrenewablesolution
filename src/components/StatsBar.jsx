import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Zap, Home, Users, Globe2 } from 'lucide-react';

const statIcons = [Zap, Home, Users, Globe2];

export default function StatsBar() {
  return (
    <section className="py-12 sm:py-14 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            Work
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight font-display">
            What We Have Done So Far?
          </h2>
        </div>

        {/* 4 Balanced, Normal-Sized Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl mx-auto">
          {irsCompanyData.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div 
                key={idx}
                className="text-center p-4 sm:p-5 border border-slate-200 rounded-xl bg-white hover:border-amber-400 hover:shadow-sm transition-all flex flex-col items-center justify-between"
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Metric Value */}
                <div className="text-xl sm:text-2xl font-extrabold text-amber-600 mb-1 font-display leading-tight">
                  {stat.value}
                </div>
                
                {/* Metric Label */}
                <div className="text-xs sm:text-sm text-slate-900 font-bold mb-1 leading-snug">
                  {stat.label}
                </div>

                {/* Metric Description */}
                <div className="text-[11px] text-slate-500 leading-snug">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

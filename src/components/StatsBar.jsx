import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Zap, CheckCircle2, Users, Globe2 } from 'lucide-react';

const statIcons = [Zap, CheckCircle2, Users, Globe2];

export default function StatsBar() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200/70">
    <section className="py-16 sm:py-20 bg-[#F4F8FC] border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
          <p className="section-label">Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display">
            What We Have Done So Far?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A proven track record of reliable, bankable solar design packages delivered across markets.
          </p>
        </div>

        {/* 4 Balanced Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {irsCompanyData.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            const iconColor = idx % 2 === 0 ? 'text-[#07427B] bg-[#07427B]/10' : 'text-[#59BD4B] bg-[#59BD4B]/10';
            const hoverBg = idx % 2 === 0 ? 'group-hover:bg-[#07427B] group-hover:text-white' : 'group-hover:bg-[#59BD4B] group-hover:text-white';

            return (
              <div 
                key={idx}
                className="text-center p-6 sm:p-8 border border-slate-200/80 rounded-xl bg-white hover:border-[#149C68]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between group"
                className="text-center p-6 sm:p-8 border border-slate-200/80 rounded-xl bg-white hover:border-[#17BAF0]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#149C68]/10 text-[#149C68] flex items-center justify-center mb-4 group-hover:bg-[#149C68] group-hover:text-white transition-colors">
                <div className={`w-14 h-14 rounded-full ${iconColor} ${hoverBg} flex items-center justify-center mb-4 transition-colors`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                {/* Metric Value */}
                <div className="text-3xl sm:text-4xl font-black text-[#149C68] mb-1.5 font-display tracking-tight">
                <div className="text-3xl sm:text-4xl font-black text-[#07427B] mb-1.5 font-display tracking-tight">
                  {stat.value}
                </div>
                
                {/* Metric Label */}
                <div className="text-xs sm:text-sm text-slate-800 font-bold mb-1 leading-snug">
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

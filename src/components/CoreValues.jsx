import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ShieldCheck, Zap, Award, Target, Users } from 'lucide-react';

const valueIcons = [ShieldCheck, Zap, Award, Target, Users];

export default function CoreValues() {
  return (
    <section id="values" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Core Principles</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Our 5 Guiding Engineering Values
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The fundamental engineering principles that drive our high accuracy, turnaround speed, and 98% client retention.
          </p>
        </div>

        {/* 5 Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {irsCompanyData.aboutUs.coreValues.map((val, idx) => {
            const Icon = valueIcons[idx % valueIcons.length];
            const iconBg = idx % 2 === 0 ? 'bg-[#07427B]/10 text-[#07427B] group-hover:bg-[#07427B]' : 'bg-[#59BD4B]/10 text-[#59BD4B] group-hover:bg-[#59BD4B]';

            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-[#149C68]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center items-center group"
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-[#17BAF0]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center items-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center mb-4 group-hover:bg-[#149C68] group-hover:text-white transition-colors">
                <div className={`w-12 h-12 rounded-xl ${iconBg} group-hover:text-white flex items-center justify-center mb-4 transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1A202C] mb-2 font-display group-hover:text-[#149C68] transition-colors">
                <h3 className="text-base sm:text-lg font-bold text-[#07427B] mb-2 font-display group-hover:text-[#17BAF0] transition-colors">
                  {val.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

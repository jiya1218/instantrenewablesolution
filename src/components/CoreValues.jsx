import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ShieldCheck, Zap, Award, Target, Users } from 'lucide-react';

const valueIcons = [ShieldCheck, Zap, Award, Target, Users];

export default function CoreValues() {
  return (
    <section id="values" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Core Values
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Our 5 Guiding Core Values
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The fundamental engineering principles that drive our high accuracy, turnaround speed, and 98% client retention.
          </p>
        </div>

        {/* 5 Core Values Grid (3 top, 2 bottom centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {irsCompanyData.aboutUs.coreValues.map((val, idx) => {
            const Icon = valueIcons[idx % valueIcons.length];
            return (
              <div 
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col text-center items-center ${
                  idx === 3 ? 'lg:col-start-1 lg:translate-x-1/2' : idx === 4 ? 'lg:col-start-2 lg:translate-x-1/2' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 border border-amber-200/80 shadow-2xs">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-display">
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


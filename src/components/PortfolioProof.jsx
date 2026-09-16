import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { MapPin, Zap, ArrowRight, Layers, FileCheck } from 'lucide-react';

export default function PortfolioProof({ onOpenEstimateModal }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Ground Mount Utility', 'C&I Industrial Rooftop', 'Industrial Shed & RCC', 'Middle East Utility'];

  const filteredProjects = filter === 'All' 
    ? irsCompanyData.portfolioProjects 
    : irsCompanyData.portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            Portfolio Proof
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-2">
            Our Landmark Solar Engineering Projects
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Over 800+ MW of constructible solar designs delivered across India and the Middle East for commercial, industrial, and utility installations.
          </p>
        </div>

        {/* Mobile-Friendly Horizontal Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8 max-w-4xl mx-auto px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-400 transition-all duration-300 group flex flex-col"
            >
              {/* Image with capacity badge */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/ground-mount-solar.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                
                <span className="absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-lg bg-[#FFA91F] text-slate-950 shadow-md">
                  {proj.capacity}
                </span>

                <span className="absolute bottom-2.5 left-3 text-xs font-medium text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {proj.location}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug font-display">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    <strong className="text-slate-700 font-semibold">Deliverables: </strong>
                    {proj.deliverables}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Permit Ready
                  </span>

                  <button
                    onClick={onOpenEstimateModal}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer active:scale-95"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Proof Bottom CTA Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Have a similar utility or C&amp;I solar project requiring fast design?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Submit your project inputs for an immediate technical review and deliverable milestone timeline.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
          >
            Request Project Scope
          </button>
        </div>

      </div>
    </section>
  );
}



import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { MapPin, Zap, ArrowRight, Layers, FileCheck, CheckCircle2 } from 'lucide-react';

export default function PortfolioProof({ onOpenEstimateModal }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Ground Mount Utility', 'C&I Industrial Rooftop', 'Industrial Shed & RCC', 'Middle East Utility'];

  const filteredProjects = filter === 'All' 
    ? irsCompanyData.portfolioProjects 
    : irsCompanyData.portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <p className="section-label">Engineering Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Landmark Solar Projects Engineered
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 800+ MW of constructible solar designs delivered across India and the Middle East for commercial, industrial, and utility installations.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 sm:mb-12 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 ${
                filter === cat
                  ? 'bg-[#0A1628] text-[#149C68] shadow-sm ring-2 ring-[#149C68]/40'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  ? 'bg-[#07427B] text-white shadow-sm ring-2 ring-[#17BAF0]/40'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12 sm:mb-16">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#149C68]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#17BAF0]/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Image with capacity badge */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#0A1628]">
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#042342]">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/hero-solar-sky.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#042342]/85 via-[#07427B]/20 to-transparent"></div>
                
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-md bg-[#149C68] text-white shadow-xs font-mono">
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-md bg-[#07427B] text-white shadow-xs font-mono">
                  {proj.capacity}
                </span>

                <span className="absolute bottom-2.5 left-3 text-xs font-medium text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#149C68]" />
                  <MapPin className="w-3.5 h-3.5 text-[#17BAF0]" />
                  {proj.location}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#149C68] block mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#07427B] block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-base font-bold text-[#1A202C] mb-2 leading-snug font-display group-hover:text-[#149C68] transition-colors">
                  <h3 className="text-base font-bold text-[#07427B] mb-2 leading-snug font-display group-hover:text-[#17BAF0] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-800 font-semibold">Deliverables: </strong>
                    {proj.deliverables}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-xs font-semibold text-[#59BD4B] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#59BD4B]" />
                    Permit-Ready
                  </span>

                  <button
                    onClick={onOpenEstimateModal}
                    className="text-xs font-bold text-[#149C68] hover:text-[#0E7A52] flex items-center gap-1 cursor-pointer active:scale-95"
                    className="text-xs font-bold text-[#07427B] hover:text-[#17BAF0] flex items-center gap-1 cursor-pointer active:scale-95"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Proof Bottom CTA Banner */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#0A1628] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#149C68]/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="p-7 sm:p-9 rounded-2xl bg-[#042342] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#17BAF0]/20 blur-3xl rounded-full pointer-events-none"></div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-display">
              Have a similar utility or C&amp;I solar project requiring fast design?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              Submit your project parameters for immediate engineering review and turnaround timeline.
            </p>
          </div>

          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer shrink-0 hover:-translate-y-0.5"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all active:scale-95 cursor-pointer shrink-0 hover:-translate-y-0.5"
          >
            Request Project Scope
          </button>
        </div>

      </div>
    </section>
  );
}

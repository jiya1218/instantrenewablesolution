import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  FileSearch, FileCheck, FolderInput, Cpu, 
  CheckCircle2, Send, ArrowRight, Sparkles 
} from 'lucide-react';

const processIcons = {
  FileSearch,
  FileCheck,
  FolderInput,
  Cpu,
  CheckCircle2,
  Send
};

export default function WorkingProcess({ onOpenEstimateModal }) {
  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
    <section id="process" className="py-16 sm:py-24 bg-[#F4F8FC] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="section-label">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] font-display tracking-tight mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] font-display tracking-tight mb-3">
            Our 6-Step Delivery Workflow
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A structured, quality-controlled engineering pipeline ensuring on-time deliverable submission and zero site construction friction.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {irsCompanyData.workingProcess.map((stepItem, idx) => {
            const Icon = processIcons[stepItem.icon] || FileCheck;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-[#149C68]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-[#17BAF0]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Glowing Gradient Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#149C68] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#07427B] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center group-hover:bg-[#149C68] group-hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#07427B]/10 text-[#07427B] flex items-center justify-center group-hover:bg-[#07427B] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-md bg-[#0A1628] text-[#149C68] text-xs font-bold font-mono border border-white/10">
                    <span className="px-3 py-1 rounded-md bg-[#042342] text-[#17BAF0] text-xs font-bold font-mono border border-white/10">
                      Step 0{stepItem.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1A202C] mb-2 font-display group-hover:text-[#149C68] transition-colors">
                  <h3 className="text-base sm:text-lg font-bold text-[#07427B] mb-2 font-display group-hover:text-[#17BAF0] transition-colors">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {stepItem.description}
                  </p>
                </div>

                {/* Card Footer: Verified QA Tag */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#149C68]">
                  <div className="inline-flex items-center gap-1.5 bg-[#149C68]/10 border border-[#149C68]/20 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#149C68] shrink-0" />
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#59BD4B]">
                  <div className="inline-flex items-center gap-1.5 bg-[#59BD4B]/10 border border-[#59BD4B]/20 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#59BD4B] shrink-0" />
                    <span>Quality Assured</span>
                  </div>
                  <span className="text-slate-400 text-xs font-mono">Stage 0{stepItem.step}/06</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Process CTA Banner */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#0A1628] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#149C68]/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="p-7 sm:p-9 rounded-2xl bg-[#042342] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#17BAF0]/20 blur-3xl rounded-full pointer-events-none"></div>

          <div>
            <span className="text-xs font-bold text-[#149C68] uppercase tracking-wider block mb-1">
            <span className="text-xs font-bold text-[#17BAF0] uppercase tracking-wider block mb-1">
              Ready to Kick Off Step 01?
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white font-display">
              Send your solar project inputs for immediate technical review
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              Receive scope confirmation, delivery timeline, and customized proposal within 24 hours.
            </p>
          </div>

          <button
            onClick={onOpenEstimateModal}
            className="w-full md:w-auto px-7 py-3.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 active:scale-95 transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
            className="w-full md:w-auto px-7 py-3.5 rounded-lg bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <span>Initiate Scope Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

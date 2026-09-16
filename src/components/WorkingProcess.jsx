import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  FileSearch, FileCheck, FolderInput, Cpu, 
  CheckCircle2, Send, ArrowRight 
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
    <section id="process" className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="section-label">Execution Pipeline</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-display tracking-tight mb-1.5">
            Our 6-Step Working Process
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            A structured, quality-controlled engineering workflow ensuring on-time deliverable submission and seamless on-site construction.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {irsCompanyData.workingProcess.map((stepItem, idx) => {
            const Icon = processIcons[stepItem.icon] || FileCheck;

            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="text-lg font-black font-mono text-amber-600">
                      {stepItem.step}.
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 font-display">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-3 text-[10px] font-semibold text-amber-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-600" />
                  <span>Standardized QA Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Process CTA Banner */}
        <div className="p-5 sm:p-6 rounded-xl bg-slate-900 text-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
              Ready to begin Step 01?
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Send your solar project inputs for rapid technical review
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Receive scope confirmation, milestone schedule, and proposal within 2-4 hours.
            </p>
          </div>

          <button
            onClick={onOpenEstimateModal}
            className="btn-primary shrink-0 text-xs"
          >
            <span>Start Project Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

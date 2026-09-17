import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

export default function FaqSection({ onOpenEstimateModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="section-label">Clear Answers</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about partnering with Instant Renewable Solution for outsourced solar engineering.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3 mb-12 sm:mb-14">
          {irsCompanyData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#149C68] shadow-md bg-white ring-1 ring-[#149C68]/20' : 'border-slate-200 bg-white hover:border-slate-300'
                  isOpen ? 'border-[#07427B] shadow-md bg-white ring-1 ring-[#17BAF0]/30' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold text-sm sm:text-base pr-4 font-display ${isOpen ? 'text-[#149C68]' : 'text-[#1A202C]'}`}>
                    <span className={`font-bold text-sm sm:text-base pr-4 font-display ${isOpen ? 'text-[#07427B]' : 'text-[#1A202C]'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#149C68] text-white border-[#149C68]' : 'text-slate-400 border-slate-200 bg-slate-50'
                      isOpen ? 'rotate-180 bg-[#07427B] text-white border-[#07427B]' : 'text-slate-400 border-slate-200 bg-slate-50'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div className="border-t border-slate-100 p-5 bg-[#149C68]/5 animate-in fade-in duration-200">
                  <div className="border-t border-slate-100 p-5 bg-[#07427B]/5 animate-in fade-in duration-200">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Read More / Ask Question Button */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xs">
        <div className="p-6 sm:p-8 rounded-xl bg-[#F4F8FC] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#1A202C] font-display">
            <h4 className="text-base sm:text-lg font-bold text-[#07427B] font-display">
              Have a specific technical question regarding your project drawings?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Our solar engineering desk in Surat is available for immediate consultations on WhatsApp and Phone.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#149C68] hover:bg-[#0E7A52] text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#07427B] hover:bg-[#042342] text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <span>Ask A Solar Engineer</span>
          </button>
        </div>

      </div>
    </section>
  );
}

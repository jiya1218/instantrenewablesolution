import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FaqSection({ onOpenEstimateModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about partnering with Instant Renewable Solution for outsourced solar engineering.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3.5 mb-10">
          {irsCompanyData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-amber-400 transition-colors"
              >
                <h3>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full border border-amber-500/40 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-500 text-slate-950' : 'text-amber-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 sm:px-6 py-4 bg-slate-50/50">
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
        <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
              Have a specific technical question regarding your solar drawings?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our engineering team in Surat is available on WhatsApp and Phone.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer shrink-0"
          >
            <span>Ask Our Solar Engineers</span>
          </button>
        </div>

      </div>
    </section>
  );
}


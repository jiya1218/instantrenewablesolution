import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';

export default function SocialProof({ onOpenEstimateModal }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const testimonials = irsCompanyData.testimonials;

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTesti = testimonials[currentIdx];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="testi-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            Social Proof
          </div>
          <h2 id="testi-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Trusted by EPCs and Project Teams
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Read what solar developers and turnkey EPC contractors say about our outsourced engineering delivery and response SLA.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm relative text-center">
          
          {/* Avatar Icon */}
          <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto mb-4 border-4 border-amber-200 shadow-sm">
            {activeTesti.name.charAt(0)}
          </div>

          {/* Sector Badge */}
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
            {activeTesti.tag}
          </span>

          {/* Client Details */}
          <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-0.5 font-display">
            {activeTesti.name}
          </h3>
          <p className="text-xs text-slate-500 mb-6 font-medium">
            {activeTesti.role} • {activeTesti.company}
          </p>

          {/* Quote */}
          <blockquote className="text-slate-700 leading-relaxed text-sm sm:text-base italic border-l-4 border-amber-500 pl-6 text-left max-w-2xl mx-auto mb-8 bg-slate-50/60 py-3 pr-4 rounded-r-lg">
            “{activeTesti.quote}”
          </blockquote>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentIdx ? 'bg-amber-500 w-6' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}


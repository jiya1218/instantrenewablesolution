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
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70" aria-labelledby="testi-heading">
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F4F8FC] border-t border-slate-200/70" aria-labelledby="testi-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="section-label">Partner Testimonials</p>
          <h2 id="testi-heading" className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 id="testi-heading" className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Trusted by Solar EPC Leadership
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Read what solar developers and turnkey EPC contractors say about our outsourced engineering delivery and response SLA.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-12 shadow-xl relative text-center">
          
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1.5 text-[#FFA91F] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFA91F]" />
            ))}
          </div>

          {/* Sector Badge */}
          <span className="inline-block text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider text-[#149C68] bg-[#149C68]/10 border border-[#149C68]/20 px-3.5 py-0.5 rounded-full mb-4">
          <span className="inline-block text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider text-[#07427B] bg-[#07427B]/10 border border-[#07427B]/20 px-3.5 py-0.5 rounded-full mb-4">
            {activeTesti.tag}
          </span>

          {/* Quote */}
          <blockquote className="text-slate-800 leading-relaxed text-base sm:text-lg italic max-w-2xl mx-auto mb-6">
            “{activeTesti.quote}”
          </blockquote>

          {/* Client Details */}
          <div className="mb-6">
            <h3 className="font-bold text-[#1A202C] text-base sm:text-lg font-display">
            <h3 className="font-bold text-[#07427B] text-base sm:text-lg font-display">
              {activeTesti.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              {activeTesti.role} • {activeTesti.company}
            </p>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-center gap-4 pt-5 border-t border-slate-100">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#149C68] hover:text-[#149C68] active:scale-90 transition-all cursor-pointer bg-slate-50 hover:bg-white"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#07427B] hover:text-[#07427B] active:scale-90 transition-all cursor-pointer bg-slate-50 hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentIdx ? 'bg-[#149C68] w-6' : 'bg-slate-200 w-2.5'
                    i === currentIdx ? 'bg-[#07427B] w-6' : 'bg-slate-200 w-2.5'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#149C68] hover:text-[#149C68] active:scale-90 transition-all cursor-pointer bg-slate-50 hover:bg-white"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#07427B] hover:text-[#07427B] active:scale-90 transition-all cursor-pointer bg-slate-50 hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

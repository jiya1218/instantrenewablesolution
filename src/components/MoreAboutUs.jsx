import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ArrowRight, Phone } from 'lucide-react';

export default function MoreAboutUs({ onOpenEstimateModal }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Team Photo with floating trust pill */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#042342] group">
              <img 
                src="/images/solar-office-team.png" 
                alt="Instant Renewable Solution Solar Engineering Team in Office" 
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[460px] group-hover:scale-103 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "/images/solar-design-team.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#042342]/90 via-[#07427B]/25 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#149C68] block mb-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#17BAF0] block mb-1">
                  Surat Headquarters Desk
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  Multidisciplinary Solar CAD, STAAD &amp; PVsyst Engineering Team
                </p>
              </div>
            </div>

            {/* Floating Trust Pill */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-3.5 sm:p-4.5 flex items-center gap-3.5 backdrop-blur-md">
              <div className="w-11 h-11 rounded-xl bg-[#149C68] text-white flex items-center justify-center font-black text-sm shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#07427B] text-white flex items-center justify-center font-black text-sm shadow-md">
                IRS
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">Remote Solar Design Desk</span>
                <span className="text-[11px] text-[#149C68] font-semibold">Surat • Serving India &amp; Middle East</span>
                <span className="text-xs sm:text-sm font-bold text-[#07427B] block leading-tight">Remote Solar Design Desk</span>
                <span className="text-[11px] text-[#59BD4B] font-bold">Surat • Serving India &amp; Middle East</span>
              </div>
            </div>
          </div>

          {/* Right: IRS Company Profile & Overview */}
          <div className="lg:col-span-6 pt-6 sm:pt-0">
            <p className="section-label">More About Us</p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] leading-tight mb-5 font-display tracking-tight">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] leading-tight mb-5 font-display tracking-tight">
              About Instant Renewable Solution
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Instant Renewable Solution (IRS)</strong> is an engineering design consultancy based in Surat, Gujarat, India. We deliver precise solar design for EPC companies worldwide, executing commercial, industrial, and utility-scale solar projects.
              </p>
              <p>
                Our specialized solar engineers produce cost-effective, accurate designs: bankable PVsyst simulations, electrical CEIG drawings, STAAD Pro structural load calculations, construction execution drawings, and detailed material BOQs.
              </p>
              <p className="text-slate-500 text-sm">
                Our philosophy is simple: maximise energy performance, reduce construction friction, and hand you drawings and calculation packages that install clean on site.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                onClick={onOpenEstimateModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-semibold text-sm shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#07427B] hover:bg-[#042342] text-white font-semibold text-sm shadow-lg shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Know More &amp; Request Quote</span>
                <ArrowRight className="w-4 h-4" />
                <ArrowRight className="w-4 h-4 text-[#17BAF0]" />
              </button>

              <a
                href={`tel:${irsCompanyData.contact.phoneClean}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-sm transition-all border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[#07427B] font-semibold text-sm transition-all border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#149C68]" />
                <Phone className="w-4 h-4 text-[#59BD4B]" />
                <span>Call Solar Engineer</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

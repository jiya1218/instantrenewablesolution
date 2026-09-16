import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';

export default function MoreAboutUs({ onOpenEstimateModal }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Team Photo with decorative corner badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 group">
              <img 
                src="/images/solar-office-team.png" 
                alt="Instant Renewable Solution Solar Engineering Team in Office" 
                className="w-full h-auto object-cover max-h-[420px] group-hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "/images/solar-design-team.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Surat Headquarters
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  Multidisciplinary Solar CAD, STAAD &amp; PVsyst Engineering Desk
                </p>
              </div>
            </div>

            {/* Floating Trust Pill */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white border border-slate-200 shadow-xl rounded-xl p-3 sm:p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-xs">
                IRS
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-tight">Outsourced Solar Desk</span>
                <span className="text-[11px] text-amber-600 font-semibold">Surat • India &amp; Middle East</span>
              </div>
            </div>
          </div>

          {/* Right: IRS Company Profile & Overview */}
          <div className="lg:col-span-6">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              More About Us
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-5 font-display tracking-tight">
              About Instant Renewable Solution
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">Instant Renewable Solution (IRS)</strong> is an outsourced solar design and engineering company based in Surat, Gujarat, India. We deliver precise, permit-ready solar engineering for Solar EPC companies, developers, installers, and consultants worldwide.
              </p>
              <p>
                Our specialized solar engineers produce cost-effective, accurate designs: bankable PVsyst simulations, electrical CEIG drawings, STAAD Pro structural load calculations, construction execution drawings, and detailed material BOQs.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm">
                Our philosophy is simple: maximise energy performance, reduce construction friction, and hand you drawings and calculation packages that install clean on site.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenEstimateModal}
                className="px-6 py-3 rounded-lg bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Know More &amp; Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${irsCompanyData.contact.phoneClean}`}
                className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors border border-slate-200"
              >
                <span>Call Solar Engineer</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


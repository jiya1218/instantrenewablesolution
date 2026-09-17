import React from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  Sun, 
  Compass, 
  Zap, 
  Layers, 
  FileSpreadsheet, 
  Activity, 
  Target, 
  Mail, 
  MessageSquare,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight
} from "lucide-react";
import { irsCompanyData, irsAssets } from "../data/irsContent";

export default function ServicesPage({ onOpenEstimate }) {
  const softwareStack = [
    { name: "PVsyst 8.0", desc: "8760 Hourly Yield & 3D Shading" },
    { name: "AutoCAD Electrical", desc: "CEIG SLD & Cable Routing" },
    { name: "STAAD.Pro V8i", desc: "IS 875 Wind MMS Analysis" },
    { name: "SketchUp 3D", desc: "Rooftop 3D Modeling" },
    { name: "HelioScope", desc: "Fast Pre-Bid Layouts" },
    { name: "ArcGIS / Civil 3D", desc: "Topography & Contouring" }
  ];

  const standardsList = [
    "CEIG Gujarat & State Guidelines",
    "CEA Grid Connectivity Standards",
    "IS 875 Part 3 (Wind Loads)",
    "IS 456 (Concrete Structures)",
    "IS 3043 (Earthing Practices)",
    "IEC 62446 (PV System QA)"
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION (APP COMPACT MOBILE + DESKTOP) */}
      <section className="relative bg-gradient-to-b from-[#F4F8FC] via-white to-slate-50 border-b border-slate-200 py-8 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#07427B] mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>IRS Services • 6 Core Disciplines</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#07427B] max-w-4xl mx-auto leading-tight tracking-tight">
            Comprehensive Solar Design & Detailed Engineering
          </h1>
          
          <p className="text-slate-600 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed mt-2.5">
            From pre-design feasibility and PVsyst simulation to CEIG electrical schematics, STAAD structural models, and execution BOQs.
          </p>

          {/* Metrics Strip (Compact 2x2 on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mt-6 pt-4 sm:pt-6 border-t border-slate-200">
            <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-2xl font-black font-display text-[#07427B]">6</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Core Disciplines</span>
            </div>
            <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-2xl font-black font-display text-[#16A34A]">800+ MW</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Delivered</span>
            </div>
            <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-2xl font-black font-display text-[#07427B]">100%</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">CEIG & IS Compliant</span>
            </div>
            <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-2xl font-black font-display text-[#16A34A]">24-48 Hrs</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Fast Turnaround</span>
            </div>
          </div>

          {/* Jump Links Pill Bar (Horizontal scroll on mobile) */}
          <div className="mt-5 sm:mt-8 flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 max-w-4xl mx-auto pb-1 sm:justify-center">
            {irsCompanyData.services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg bg-white text-[#07427B] hover:bg-[#07427B] hover:text-white border border-slate-200 shadow-xs transition-all"
              >
                <span className="font-mono text-[10px] text-[#16A34A]">{s.number}</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES SHOWCASE (APP-OPTIMIZED COMPACT CARDS) */}
      <section className="py-8 sm:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-16">
          {irsCompanyData.services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-20 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-3.5 sm:space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                    
                    {/* Header */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-white bg-[#07427B] px-2.5 py-0.5 sm:py-1 rounded-md">
                        {service.number}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-[#16A34A] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 sm:py-1 rounded-md">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-lg sm:text-3xl font-extrabold font-display text-[#07427B] leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-slate-700 text-xs sm:text-base leading-relaxed mt-1 sm:mt-2">
                        {service.longDesc || service.shortDesc}
                      </p>
                    </div>

                    {/* Deliverables Checklist Chips (2-column on mobile) */}
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 sm:mb-3 flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-[#07427B]" />
                        <span>Key Deliverables</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
                        {service.keyHighlights.map((item, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-1.5 text-[10px] sm:text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                            <span className="font-semibold text-slate-800 leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Objectives Section */}
                    <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F4F8FC] border border-slate-200 space-y-1.5 sm:space-y-2">
                      <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#07427B] flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>Engineering Objectives</span>
                      </h4>
                      <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs text-slate-700">
                        {service.objectives.map((obj, oi) => (
                          <li key={oi} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#17BAF0] mt-1.5 flex-shrink-0" />
                            <span className="leading-snug">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action CTAs */}
                    <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
                      <button
                        onClick={onOpenEstimate}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#07427B] hover:bg-[#042342] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                      >
                        <span>Request Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#17BAF0]" />
                      </button>

                      <a
                        href={irsCompanyData.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-3.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                  </div>

                  {/* Image Display Column */}
                  <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs p-2 sm:p-3">
                      <div className="h-36 sm:h-auto sm:aspect-[4/3] flex items-center justify-center bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden p-2">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = irsAssets.approvalDrawings;
                          }}
                        />
                      </div>
                      <div className="p-2 sm:p-3 bg-white flex items-center justify-between border-t border-slate-100 mt-1">
                        <div>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-[#07427B] inline-block uppercase">
                            Deliverable Sheet
                          </span>
                          <p className="text-[11px] sm:text-xs font-bold text-[#07427B]">
                            {service.title}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#16A34A]">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SOFTWARE TOOLS & STANDARDS (COMPACT 2x2 APP GRID) */}
      <section className="py-8 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Stack & Standards</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              Engineering Tools & Compliance Codes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            
            {/* Software Stack */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 space-y-3">
              <h3 className="text-sm sm:text-lg font-bold font-display text-[#07427B] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#16A34A]" />
                <span>Specialized Software</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {softwareStack.map((tool, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-[11px] sm:text-xs font-bold text-[#07427B] block">{tool.name}</span>
                    <span className="text-[9px] sm:text-[11px] text-slate-500 leading-snug mt-0.5 block">{tool.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Codes */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 space-y-3">
              <h3 className="text-sm sm:text-lg font-bold font-display text-[#07427B] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#07427B]" />
                <span>Statutory Codes</span>
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {standardsList.map((std, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-[10px] sm:text-xs font-semibold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WORKING PROCESS (COMPACT 2-COLUMN APP GRID ON MOBILE) */}
      <section className="py-8 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Standard Process</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              Our Working Process
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {irsCompanyData.workingProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                    <span className="text-base sm:text-2xl font-black font-display text-[#07427B]">
                      {step.step}.
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-[#07427B] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section 
        className="py-10 sm:py-16 text-white text-center"
        style={{ backgroundColor: "#07427B" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/20 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-[#16A34A]/40">
            Need A Free Estimate?
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white max-w-2xl mx-auto leading-tight">
            Precise engineering, transparent pricing. Get your solar estimate today.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2">
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact-us"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/30 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
            <a
              href={irsCompanyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#16A34A] text-white font-bold text-xs sm:text-sm hover:bg-[#15803D] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

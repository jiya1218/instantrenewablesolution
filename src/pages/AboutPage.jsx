import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Leaf, 
  Users, 
  Mail, 
  Building2, 
  Check, 
  MapPin, 
  Clock, 
  MessageSquare,
  Zap,
  Cpu,
  Layers
} from "lucide-react";
import { irsCompanyData, irsAssets } from "../data/irsContent";

export default function AboutPage({ onOpenEstimate }) {
  const valueCards = [
    {
      name: "Integrity",
      desc: "Complete transparency and honesty in every calculation and drawing sheet.",
      icon: <ShieldCheck className="w-5 h-5 text-[#07427B]" />,
      badge: "Transparency"
    },
    {
      name: "Innovation",
      desc: "Advanced 3D simulation tools, PVsyst modeling, and STAAD Pro.",
      icon: <Cpu className="w-5 h-5 text-[#16A34A]" />,
      badge: "Technology"
    },
    {
      name: "Quality",
      desc: "Precision drafting, zero-error BOQs, and 100% statutory CEIG compliance.",
      icon: <Award className="w-5 h-5 text-[#17BAF0]" />,
      badge: "Excellence"
    },
    {
      name: "Sustainability",
      desc: "Accelerating India and global transition toward clean, green energy.",
      icon: <Leaf className="w-5 h-5 text-[#16A34A]" />,
      badge: "Clean Future"
    },
    {
      name: "Customer Focus",
      desc: "Rapid turnaround, tailored design flexibility, and dedicated revisions.",
      icon: <Users className="w-5 h-5 text-[#07427B]" />,
      badge: "Support"
    }
  ];

  const epcAdvantages = [
    {
      title: "Eliminate Bottlenecks",
      desc: "Handle peak bidding surges without fixed salary overhead.",
      icon: <Zap className="w-4 h-4 text-[#16A34A]" />
    },
    {
      title: "Multi-Disciplinary Desk",
      desc: "Civil, structural, electrical, and simulation under one roof.",
      icon: <Layers className="w-4 h-4 text-[#07427B]" />
    },
    {
      title: "Fast 24-48h Bids",
      desc: "Rapid 3D layouts and PVsyst yield forecasts for winning tenders.",
      icon: <Clock className="w-4 h-4 text-[#17BAF0]" />
    },
    {
      title: "100% Confidentiality",
      desc: "Project-level NDAs protect your proprietary site data.",
      icon: <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. HERO HEADER (APP COMPACT MOBILE + DESKTOP) */}
      <section className="relative bg-gradient-to-b from-[#F4F8FC] via-white to-slate-50 border-b border-slate-200 py-8 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#07427B] mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>About Instant Renewable Solution • Surat, Gujarat</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#07427B] max-w-4xl mx-auto leading-tight tracking-tight">
            The Dedicated Solar Engineering Partner for EPCs
          </h1>
          
          <p className="text-slate-600 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed mt-2.5">
            We operate as an agile remote extension of your engineering team — shortening design cycles, ensuring CEIG compliance, and delivering constructible packages.
          </p>

          {/* Metrics Strip (Compact 2x2 on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mt-6 pt-4 sm:pt-6 border-t border-slate-200">
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-3xl font-black font-display text-[#07427B]">800+ MW</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Delivered</span>
            </div>
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-3xl font-black font-display text-[#16A34A]">200+</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Projects</span>
            </div>
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-3xl font-black font-display text-[#07427B]">98%</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Retention</span>
            </div>
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-lg sm:text-3xl font-black font-display text-[#16A34A]">Surat HQ</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 block">Headquarters</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW & SURAT HEADQUARTERS */}
      <section className="py-8 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Col: Authentic Story */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/15 text-[#07427B] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>
              
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B] leading-tight">
                Accelerating Clean Energy Delivery Through Precision Solar Engineering
              </h2>

              <p className="text-slate-700 text-xs sm:text-base leading-relaxed">
                {irsCompanyData.aboutUs.description}
              </p>

              {/* Highlight Quote Box */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#F4F8FC] border-l-4 border-[#07427B] space-y-1">
                <p className="text-[11px] sm:text-sm font-semibold text-[#07427B] italic leading-relaxed">
                  "IRS operates as an extension of your engineering team. We help Solar EPC companies manage peak workloads, shorten design cycles and deliver coordinated engineering packages without increasing permanent headcount."
                </p>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#16A34A] block">
                  — Instant Renewable Solution Engineering Desk
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  onClick={onOpenEstimate}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#07427B] hover:bg-[#042342] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#17BAF0]" />
                </button>
                <Link
                  to="/services"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#07427B] font-bold text-xs sm:text-sm transition-colors border border-slate-200"
                >
                  <span>Explore 6 Services</span>
                </Link>
              </div>
            </div>

            {/* Right Col: Office Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2 sm:p-3 space-y-2 sm:space-y-3">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src={irsAssets.officeTeam}
                    alt="IRS Solar Engineering Office Team in Surat"
                    className="w-full h-auto object-cover max-h-64 sm:max-h-none"
                  />
                  <div className="absolute top-2 left-2 bg-[#07427B]/90 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                    <span>Surat Headquarters</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                    <span className="font-semibold">{irsCompanyData.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 4 OPERATIONAL PILLARS (COMPACT 2x2 APP GRID ON MOBILE) */}
      <section className="py-8 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Operational Pillars</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              The Four Pillars of IRS Engineering
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {irsCompanyData.aboutPillars.map((pillar, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#07427B] mb-2 sm:mb-4">
                    {i === 0 && <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#07427B]" />}
                    {i === 1 && <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#16A34A]" />}
                    {i === 2 && <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#17BAF0]" />}
                    {i === 3 && <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#16A34A]" />}
                  </div>
                  <h4 className="text-xs sm:text-base font-bold font-display text-[#07427B] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2 sm:pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-[#16A34A]">
                  <span>Pillar 0{i + 1}</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MISSION & VISION (DUO CARDS) */}
      <section className="py-8 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-[#F4F8FC] to-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-xs space-y-2 sm:space-y-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#07427B] text-white flex items-center justify-center shadow-xs">
                <Target className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#07427B] block">
                Our Purpose
              </span>
              <h3 className="text-lg sm:text-3xl font-extrabold font-display text-[#07427B]">
                Our Mission
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed">
                "{irsCompanyData.aboutUs.mission}"
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-emerald-50/50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-xs space-y-2 sm:space-y-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#16A34A] text-white flex items-center justify-center shadow-xs">
                <Eye className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#16A34A] block">
                Our Future Outlook
              </span>
              <h3 className="text-lg sm:text-3xl font-extrabold font-display text-[#07427B]">
                Our Vision
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed">
                "{irsCompanyData.aboutUs.vision}"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR CORE VALUES (COMPACT 2-COLUMN APP GRID ON MOBILE) */}
      <section className="py-8 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-6">
            {valueCards.map((val) => (
              <div
                key={val.name}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200 hover:border-[#16A34A] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-2 sm:mb-4">
                    {val.icon}
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 inline-block uppercase tracking-wider mb-1">
                    {val.badge}
                  </span>
                  <h4 className="text-xs sm:text-lg font-bold text-[#07427B] mb-1 font-display">
                    {val.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY EPCs CHOOSE IRS (COMPACT 2x2 APP GRID ON MOBILE) */}
      <section className="py-8 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07427B]/10 text-[#07427B] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              The Remote Engineering Advantage
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {epcAdvantages.map((adv, idx) => (
              <div key={idx} className="p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                  {adv.icon}
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#07427B]">{adv.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM ESTIMATE BANNER */}
      <section 
        className="py-10 sm:py-16 text-white text-center"
        style={{ backgroundColor: "#07427B" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/20 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-[#16A34A]/40">
            Need A Free Estimate?
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white max-w-2xl mx-auto leading-tight">
            Ready to expand your solar engineering capacity?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2">
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <span>Request Proposal</span>
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

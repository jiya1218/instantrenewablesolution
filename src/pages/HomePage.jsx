import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Send, 
  Sparkles, 
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { irsCompanyData, irsAssets } from "../data/irsContent";

export default function HomePage({ onOpenEstimate }) {
  const [heroForm, setHeroForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "predesign",
    message: ""
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    setHeroSubmitted(true);
  };

  const handleHeroWhatsApp = () => {
    const subjectMap = {
      predesign: "Solar Pre-Design & Feasibility",
      "ground mound": "Ground Mount Solar Project Design",
      "mega project": "Mega / Multi-MW Project Engineering"
    };

    const text = `Hello IRS Team,\n\nI need solar engineering support for an active project:\n- Name: ${heroForm.name || "Client"}\n- Company: ${heroForm.company || "N/A"}\n- Phone: ${heroForm.phone || "N/A"}\n- Email: ${heroForm.email || "N/A"}\n- Requirement: ${subjectMap[heroForm.subject] || heroForm.subject}\n- Project Details: ${heroForm.message || "Please contact me for scope discussion."}`;
    
    window.open(`https://wa.me/917874537206?text=${encodeURIComponent(text)}`, "_blank");
  };

  const quickDisciplines = [
    { label: "Ground Mount", id: "gmspd" },
    { label: "Pre-Design", id: "spd" },
    { label: "CEIG Drawings", id: "edaa" },
    { label: "Structure Design", id: "sd" },
    { label: "Execution BOQ", id: "pedac" },
    { label: "PVsyst 8760", id: "ppgr" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F4F8FC] via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        
        {/* ========================================================= */}
        {/* MOBILE HERO: ULTRA-CLEAN, UNIFIED, MODERN APP EXPERIENCE */}
        {/* ========================================================= */}
        <div className="lg:hidden px-4 py-6 space-y-4">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Outsourced Solar Engineering Desk</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-[#07427B] font-display tracking-tight leading-snug">
              Solar Design & Detailed Engineering for <span className="text-[#16A34A]">EPC Companies</span>
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              Expand your engineering capacity without permanent headcount. Delivering CEIG approval sets, STAAD structural models, and PVsyst reports from Surat.
            </p>
          </div>

          {/* Quick Metrics Chips */}
          <div className="grid grid-cols-3 gap-2 py-1">
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-sm font-extrabold text-[#07427B] block">800+ MW</span>
              <span className="text-[9px] text-slate-500 font-semibold">Delivered</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-sm font-extrabold text-[#16A34A] block">98%</span>
              <span className="text-[9px] text-slate-500 font-semibold">Retention</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs text-center">
              <span className="text-sm font-extrabold text-[#07427B] block">24-48h</span>
              <span className="text-[9px] text-slate-500 font-semibold">Turnaround</span>
            </div>
          </div>

          {/* Featured Visual Card with Instant Actions */}
          <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={irsAssets.heroIllustration}
                alt="IRS Solar Design Illustration"
                className="w-20 h-auto object-contain flex-shrink-0"
              />
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-[#16A34A] uppercase tracking-wider block">
                  Surat Engineering Desk
                </span>
                <p className="text-xs font-bold text-[#07427B] leading-tight">
                  Expand Engineering Output on Demand
                </p>
                <p className="text-[10px] text-slate-500 leading-tight">
                  C&I Rooftop, Ground Mount & MW Projects
                </p>
              </div>
            </div>

            {/* Quick Action Button Duo */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
              <button
                onClick={onOpenEstimate}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#07427B] text-white text-xs font-bold shadow-sm active:scale-95 transition-all"
              >
                <span>Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#17BAF0]" />
              </button>

              <a
                href={irsCompanyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Discipline Pill Strip (Horizontal App Scroller) */}
          <div className="pt-1">
            <div className="flex items-center justify-between mb-1.5 px-0.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Explore 6 Disciplines
              </span>
              <Link to="/services" className="text-[10px] font-bold text-[#16A34A]">
                View All →
              </Link>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1">
              {quickDisciplines.map((d) => (
                <Link
                  key={d.id}
                  to={`/services#${d.id}`}
                  className="flex-shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white text-[#07427B] border border-slate-200 shadow-2xs"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* DESKTOP HERO: SPACIOUS 2-COLUMN WITH SIDE FORM */}
        {/* ========================================================= */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#16A34A]" />
                <span>Outsourced Solar Design & Engineering Support</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#07427B] font-display tracking-tight leading-tight">
                Solar Design & Engineering Support for{" "}
                <span className="text-[#16A34A] font-black">EPC Companies</span>
              </h1>

              {/* Subheadline from IRS live site */}
              <p className="text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl">
                IRS operates as an extension of your engineering team. We help Solar EPC companies manage peak workloads, shorten design cycles and deliver coordinated engineering packages without increasing permanent headcount.
              </p>

              {/* Featured IRS Hero Visual Badge & Illustration */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4">
                <img
                  src={irsAssets.heroIllustration}
                  alt="IRS Solar Design Team Illustration"
                  className="w-32 h-auto object-contain flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-bold text-[#07427B]">
                    Expand Your Engineering Capacity Without Expanding Your Team
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Designed for commercial, industrial, rooftop, ground-mounted and utility-scale solar projects.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pt-1">
                <button
                  onClick={onOpenEstimate}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#07427B] hover:bg-[#042342] text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4 text-[#17BAF0]" />
                </button>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#07427B] font-bold text-sm border border-slate-300 transition-colors shadow-xs"
                >
                  <span>Explore 6 Core Services</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-4 gap-3 pt-3 border-t border-slate-200 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span>CEIG Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span>STAAD Pro MMS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span>PVsyst 8760 Yield</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span>Detailed BOQs</span>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Project Inquiry Box */}
            <div className="col-span-5">
              <div className="bg-white rounded-3xl p-7 shadow-xl border border-slate-200 text-slate-800">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Direct Engineering Desk
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#07427B]">
                    Need Engineering Support for an Active Solar Project?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill the form below to receive a personalized estimate & scope review.
                  </p>
                </div>

                {heroSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#07427B]">Proposal Request Sent!</h4>
                    <p className="text-xs text-slate-600">
                      Our solar design engineers in Surat will review your specifications and contact you right away.
                    </p>
                    <button
                      onClick={handleHeroWhatsApp}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message on WhatsApp</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={heroForm.name}
                          onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          value={heroForm.company}
                          onChange={(e) => setHeroForm({ ...heroForm, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={heroForm.email}
                          onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                          placeholder="engineer@company.com"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={heroForm.subject}
                          onChange={(e) => setHeroForm({ ...heroForm, subject: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white appearance-none pr-8"
                        >
                          <option value="predesign">predesign</option>
                          <option value="ground mound">ground mound</option>
                          <option value="mega project">mega project</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Message / Project Scope
                      </label>
                      <textarea
                        rows={2}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="e.g. 2 MW ground mount layout, CEIG SLD & BOQ required..."
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white"
                      />
                    </div>

                    <div className="pt-1 space-y-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#07427B] hover:bg-[#042342] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                      >
                        <Send className="w-3.5 h-3.5 text-[#17BAF0]" />
                        <span>Submit Project Inquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleHeroWhatsApp}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-semibold transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Solar Desk: +91 78745 37206</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR (COMPACT 2x2 ON MOBILE, 4 IN ROW ON DESKTOP) */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {irsCompanyData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#07427B] hover:shadow-xs transition-all group"
              >
                <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B] group-hover:text-[#16A34A] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-sm font-bold text-slate-800 mt-0.5 sm:mt-1 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight hidden xs:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES (2-COLUMN APP-GRID ON MOBILE, 3-COLUMN ON DESKTOP) */}
      <section className="py-10 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Our Services</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              Solar Design & Engineering Services for EPCs
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Specialised electrical, structural, civil and energy-yield engineering for commercial, industrial and utility projects.
            </p>
          </div>

          {/* 2-Column Grid on Mobile (4 cards fit on screen!), 3-Column on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {irsCompanyData.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="bg-slate-50 p-2 sm:p-4 border-b border-slate-100 h-28 sm:h-52 flex items-center justify-center overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = irsAssets.approvalDrawings;
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-5 space-y-1 sm:space-y-2">
                    <span className="text-[9px] sm:text-xs font-bold text-[#16A34A] uppercase tracking-wider block">
                      {service.badge}
                    </span>
                    <h3 className="text-xs sm:text-lg font-bold font-display text-[#07427B] group-hover:text-[#16A34A] transition-colors leading-tight line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-[10px] sm:text-sm leading-snug line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-3 sm:p-5 pt-0">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#07427B] hover:text-[#16A34A] transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#16A34A]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#07427B] hover:bg-[#042342] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <span>Explore All 6 Detailed Services & Objectives</span>
              <ArrowRight className="w-4 h-4 text-[#17BAF0]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR WORKING PROCESS (2x2 GRID ON MOBILE, 3 IN ROW ON DESKTOP) */}
      <section className="py-10 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span>Standard Process</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#07427B]">
              Our Working Process
            </h2>
            <p className="text-slate-600 text-xs sm:text-base">
              A streamlined, 6-stage engineering delivery pipeline.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {irsCompanyData.workingProcess.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all hover:border-[#16A34A] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                    <span className="text-lg sm:text-2xl font-black font-display text-[#07427B]">
                      {step.step}.
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-[#07427B] mb-1 leading-snug">
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

      {/* 5. BOTTOM ESTIMATE BANNER */}
      <section 
        className="py-10 sm:py-16 text-white text-center"
        style={{ backgroundColor: "#07427B" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/20 text-emerald-300 border border-[#16A34A]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            Need A Free Estimate?
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white max-w-2xl mx-auto leading-tight">
            Precise engineering, transparent pricing. Get your solar estimate today.
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Request a personalized solar design & cost estimate now. Our Surat engineering desk is ready to assist your active projects.
          </p>

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

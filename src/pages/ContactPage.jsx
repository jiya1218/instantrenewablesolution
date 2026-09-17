import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ArrowRight,
  ExternalLink 
} from "lucide-react";
import { irsCompanyData } from "../data/irsContent";

export default function ContactPage({ onOpenEstimate }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "predesign",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const subjectMap = {
      predesign: "Solar Pre-Design & Feasibility",
      "ground mound": "Ground Mount Solar Project Design",
      "mega project": "Mega / Multi-MW Project Engineering"
    };

    const text = `Hello IRS Team,\n\nI would like to request an engineering proposal:\n- Name: ${formData.name || "Client"}\n- Company: ${formData.company || "N/A"}\n- Phone: ${formData.phone || "N/A"}\n- Email: ${formData.email || "N/A"}\n- Subject: ${subjectMap[formData.subject] || formData.subject}\n- Project Details: ${formData.message || "Please contact me."}`;
    
    window.open(`https://wa.me/917874537206?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. CONTACT PAGE HEADER */}
      <section className="bg-[#F4F8FC] border-b border-slate-200 py-12 sm:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07427B]/10 text-[#07427B] border border-[#07427B]/20 text-xs font-bold uppercase tracking-wider">
            <span>Contact Us</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#07427B] max-w-3xl mx-auto leading-tight">
            Request an Engineering Proposal
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Share your solar project requirements with our engineering team. We support EPC companies, developers and consultants with project-specific electrical, structural, civil and energy-yield deliverables.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16A34A] block mb-1">
                  Get in Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#07427B]">
                  We're Here to Assist Your Solar Projects
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Ready to start your solar journey? At Instant Renewable Solutions, we make it easy to get started with a free, no-obligation estimate. Simply share your project details, and our expert team will provide a customized solar design plan with accurate cost and performance insights.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-2">
                {/* Address Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F8FC] flex items-center justify-center flex-shrink-0 text-[#07427B] border border-slate-200">
                    <MapPin className="w-5 h-5 text-[#07427B]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Address</h4>
                    <p className="text-sm font-semibold text-[#07427B] mt-0.5">
                      {irsCompanyData.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600 border border-emerald-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">IRS Phone Support</h4>
                    <a
                      href={`tel:${irsCompanyData.contact.phoneClean}`}
                      className="text-sm font-bold text-[#07427B] hover:text-[#16A34A] transition-colors mt-0.5 block"
                    >
                      {irsCompanyData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0 text-[#07427B] border border-sky-200">
                    <Mail className="w-5 h-5 text-[#07427B]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</h4>
                    <a
                      href={`mailto:${irsCompanyData.contact.email}`}
                      className="text-sm font-bold text-[#07427B] hover:text-[#17BAF0] transition-colors mt-0.5 block break-all"
                    >
                      {irsCompanyData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-5 rounded-xl bg-emerald-600 text-white shadow-md space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <h4 className="text-sm font-bold">Fast-Track Solar Desk on WhatsApp</h4>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Send site layouts, single line diagrams, or DWG/PDF specs directly to our senior engineering desk for immediate review.
                </p>
                <a
                  href={irsCompanyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-sm"
                >
                  <span>Chat on WhatsApp: {irsCompanyData.contact.phone}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Engineering Proposal Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07427B]/10 text-[#07427B] text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Instant Renewable Solution</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#07427B]">
                    Request an Engineering Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Get in touch with our team — we’re here to answer your questions and guide your solar project from concept to completion.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-[#07427B]">
                      Proposal Request Submitted!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#07427B]">{formData.name}</strong>. Our solar engineering team in Surat will review your requirements and respond promptly.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsApp}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Details on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white transition-all"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company / EPC Name"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="engineer@company.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white appearance-none pr-8"
                        >
                          <option value="predesign">predesign</option>
                          <option value="ground mound">ground mound</option>
                          <option value="mega project">mega project</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Message / Project Specifications
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share capacity, site location, required drawings, timeline, or specific questions..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#07427B] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3.5 px-6 rounded-lg bg-[#07427B] hover:bg-[#042342] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                      >
                        {isSubmitting ? (
                          <span>Sending Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#17BAF0]" />
                            <span>Submit Proposal Request</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold text-sm hover:bg-emerald-100 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-600" />
                        <span>Send to WhatsApp</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Confidentiality Guaranteed • Direct Surat Engineering Team</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SURAT OFFICE MAP EMBED */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold font-display text-[#07427B]">
                Our Engineering Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                143 Dwarkesh Nagar Godadra Surat, Gujarat, India
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Godadra+Surat+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#07427B] hover:text-[#59BD4B]"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-80 w-full bg-slate-100">
            <iframe
              title="IRS Surat Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.42995642398!2d72.8222963!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sGodadara%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

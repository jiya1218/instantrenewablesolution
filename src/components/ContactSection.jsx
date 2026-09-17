import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    project: prefilledService || 'Ground Mount Solar Project Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Hello Instant Renewable Solution, I have submitted an RFQ from your website:
• Name: ${formData.name}
• Company: ${formData.company}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Project Discipline: ${formData.project}
• Project Notes: ${formData.message || 'Please provide design proposal'}`;

    const whatsappUrl = `https://wa.me/917874537206?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="section-label">Direct Connection</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] font-display tracking-tight mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] font-display tracking-tight mb-3">
            Connect with Our Solar Engineering Desk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Get in touch with our engineering desk in Surat — we are ready to review your project drawings, site data, and statutory parameters.
          </p>
        </div>

        {/* Mobile Quick Tap Action Bar */}
        <div className="grid grid-cols-3 gap-2 mb-6 lg:hidden">
          <a
            href={`tel:${irsCompanyData.contact.phoneClean}`}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 active:scale-95 transition-transform text-center shadow-xs"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07427B] active:scale-95 transition-transform text-center shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#149C68] mb-1" />
            <Phone className="w-4 h-4 text-[#07427B] mb-1" />
            <span className="text-[11px] font-bold">Call Office</span>
          </a>

          <a
            href={irsCompanyData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#25D366] text-white active:scale-95 transition-transform text-center shadow-sm"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#59BD4B] text-white active:scale-95 transition-transform text-center shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-white mb-1" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          <a
            href={`mailto:${irsCompanyData.contact.email}`}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 active:scale-95 transition-transform text-center shadow-xs"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-[#07427B] active:scale-95 transition-transform text-center shadow-xs"
          >
            <Mail className="w-4 h-4 text-[#149C68] mb-1" />
            <Mail className="w-4 h-4 text-[#17BAF0] mb-1" />
            <span className="text-[11px] font-bold">Email Us</span>
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-5 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-[#1A202C] font-display pb-3 border-b border-slate-200">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F4F8FC] border border-slate-200 space-y-5 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-[#07427B] font-display pb-3 border-b border-slate-200">
                Surat Engineering Headquarters
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#07427B]/10 text-[#07427B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Headquarters</h4>
                    <p className="text-xs sm:text-sm font-medium text-[#1A202C] leading-snug">
                    <p className="text-xs sm:text-sm font-medium text-[#07427B] leading-snug">
                      {irsCompanyData.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#07427B]/10 text-[#07427B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Support</h4>
                    <a 
                      href={`tel:${irsCompanyData.contact.phoneClean}`}
                      className="text-xs sm:text-sm font-bold text-[#1A202C] hover:text-[#149C68] transition-colors"
                      className="text-xs sm:text-sm font-bold text-[#07427B] hover:text-[#17BAF0] transition-colors"
                    >
                      {irsCompanyData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#149C68]/10 text-[#149C68] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#17BAF0]/10 text-[#17BAF0] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Inquiries</h4>
                    <a 
                      href={`mailto:${irsCompanyData.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#1A202C] hover:text-[#149C68] transition-colors break-all"
                      className="text-xs sm:text-sm font-semibold text-[#07427B] hover:text-[#17BAF0] transition-colors break-all"
                    >
                      {irsCompanyData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="pt-2">
                <a
                  href={irsCompanyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#59BD4B] hover:bg-[#479E3B] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#149C68]/10 border border-[#149C68]/20 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#149C68] shrink-0" />
            <div className="p-4 rounded-xl bg-[#07427B]/5 border border-[#07427B]/15 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#07427B] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1A202C]">2-4h Response Guarantee</h4>
                <h4 className="text-xs font-bold text-[#07427B]">2-4h Response Guarantee</h4>
                <p className="text-[11px] text-slate-600">All submitted project files are reviewed by a senior solar engineer.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean RFQ Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A202C] font-display">
                  <h3 className="text-lg sm:text-xl font-bold text-[#07427B] font-display">
                    Request an Engineering Proposal
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Share your requirements to receive a customized scope, timeline, and quote.
                  </p>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-bold">
                  * Required
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#149C68]/10 border border-[#149C68]/20 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#149C68] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <div className="p-8 text-center bg-[#07427B]/5 border border-[#07427B]/20 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#59BD4B] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A202C] mb-1">Proposal Request Transmitted!</h4>
                  <h4 className="text-lg font-bold text-[#07427B] mb-1">Proposal Request Transmitted!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-4">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. An IRS engineering coordinator will review your scope promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg bg-[#149C68] text-white font-bold text-xs shadow-sm"
                    className="px-5 py-2.5 rounded-lg bg-[#07427B] text-white font-bold text-xs shadow-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#149C68] focus:bg-white transition-all shadow-xs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#07427B] focus:bg-white transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / EPC Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company / EPC name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#149C68] focus:bg-white transition-all shadow-xs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#07427B] focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 78745 37206"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#149C68] focus:bg-white transition-all shadow-xs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#07427B] focus:bg-white transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#149C68] focus:bg-white transition-all shadow-xs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#07427B] focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Engineering Discipline *
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#149C68] focus:bg-white cursor-pointer transition-all shadow-xs"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#07427B] focus:bg-white cursor-pointer transition-all shadow-xs"
                    >
                      <option value="Ground Mount Solar Project Design">01. Ground Mount Solar Project Design</option>
                      <option value="Solar Pre-Design & Feasibility">02. Solar Pre-Design & Feasibility</option>
                      <option value="Electrical (CEIG) Drawings & Approval">03. Electrical (CEIG) Drawings & Approval</option>
                      <option value="Structure Design">04. Structure Design</option>
                      <option value="Project Execution Drawings, Calculations & BOQ">05. Project Execution Drawings, Calculations & BOQ</option>
                      <option value="PVsyst Power Generation Report">06. PVsyst Power Generation Report</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Notes / Scope Details *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe solar system capacity (kW/MW), site location, and required drawings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#149C68] focus:bg-white resize-none transition-all shadow-xs"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-[#07427B] focus:bg-white resize-none transition-all shadow-xs"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                      className="w-full py-3.5 rounded-xl bg-[#07427B] hover:bg-[#042342] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <Send className="w-4 h-4 text-[#17BAF0]" />
                      <span>Transmit Project Scope Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

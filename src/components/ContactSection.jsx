import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    project: prefilledService || 'predesign',
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
    <section id="contact" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="section-label">Get in Touch</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-display tracking-tight mb-1.5">
            Need Engineering Support for an Active Solar Project?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Get in touch with our engineering desk in Surat — we are ready to review your project drawings and statutory requirements.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Office & Direct Details */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 font-display pb-2 border-b border-slate-200">
                Contact Information
              </h3>

              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Office Address</h4>
                    <p className="text-xs font-medium text-slate-900 leading-snug">
                      {irsCompanyData.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number</h4>
                    <a 
                      href={`tel:${irsCompanyData.contact.phoneClean}`}
                      className="text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                    >
                      {irsCompanyData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Proposal Desk</h4>
                    <a 
                      href={`mailto:${irsCompanyData.contact.email}`}
                      className="text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors break-all"
                    >
                      {irsCompanyData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="pt-1">
                <a
                  href={irsCompanyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Fast Turnaround SLA</h4>
                <p className="text-[11px] text-slate-500">Inquiries reviewed by senior solar engineers within 2-4 hours.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean RFQ Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Request an Engineering Proposal
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the form below to receive customized deliverables and pricing.
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 font-bold">
                  * Required
                </span>
              </div>

              {submitted ? (
                <div className="p-6 text-center bg-white border border-amber-200 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Proposal Request Sent!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto mb-3">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. An IRS engineer will connect shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company / EPC name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 78745 37206"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Discipline *
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
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
                      Project Notes *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe solar system capacity (kW/MW), location, and required drawings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full btn-primary justify-center py-2.5 text-xs font-bold"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Project Request</span>
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

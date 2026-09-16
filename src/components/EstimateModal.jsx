import React, { useState, useEffect } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { X, Zap, Send, CheckCircle2 } from 'lucide-react';

export default function EstimateModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    project: 'predesign',
    capacity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        project: initialData.projectType || prev.project,
        capacity: initialData.capacity || prev.capacity,
        message: initialData.selectedServices ? `Selected Scope: ${initialData.selectedServices.join(', ')}` : prev.message
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Hello Instant Renewable Solution, I would like a fast solar estimate:
• Name: ${formData.name}
• Company: ${formData.company}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Project: ${formData.project}
• Capacity: ${formData.capacity || 'Not specified'}
• Notes: ${formData.message || 'Please provide design quotation'}`;

    const whatsappUrl = `https://wa.me/917874537206?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white rounded-2xl p-5 sm:p-6 max-w-md w-full shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
            Free Engineering Estimate
          </span>
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Get a Free Proposal
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Permit-ready CAD &amp; PVsyst packages for solar EPC companies across India and the Middle East.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-5">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-0.5">Estimate Request Submitted!</h4>
            <p className="text-xs text-slate-600 mb-4">
              An IRS solar engineer is reviewing your project requirements and will connect promptly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
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
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

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
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Required Service / Discipline
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white cursor-pointer"
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
                  Capacity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 kW / 2 MW"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Notes
              </label>
              <textarea
                rows={3}
                placeholder="Share specific scope requirements, deadline, or location details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-500 focus:bg-white resize-none"
              ></textarea>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full btn-primary justify-center py-2.5 text-xs font-bold"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit &amp; Open WhatsApp Proposal</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

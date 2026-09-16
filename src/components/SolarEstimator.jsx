import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  Calculator, MessageSquare, ArrowRight, CheckSquare, 
  Square, Clock, Sparkles, Send, CheckCircle2 
} from 'lucide-react';

export default function SolarEstimator({ onOpenEstimateModalWithData }) {
  const [projectType, setProjectType] = useState('Ground Mount Utility Scale');
  const [capacity, setCapacity] = useState(500); // kW
  const [selectedServices, setSelectedServices] = useState([
    'Solar Pre-Design & Feasibility',
    'Electrical (CEIG) Drawings & Approval',
    'Structure Design'
  ]);

  const serviceOptions = [
    'Ground Mount Solar Project Design',
    'Solar Pre-Design & Feasibility',
    'Electrical (CEIG) Drawings & Approval',
    'Structure Design',
    'Project Execution Drawings, Calculations & BOQ',
    'PVsyst Power Generation Report'
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const estimatedTurnaround = capacity > 5000 ? '4 - 7 Business Days' : capacity > 1000 ? '3 - 5 Business Days' : '48 - 72 Hours';

  const generateWhatsAppMessage = () => {
    const formattedCapacity = capacity >= 1000 ? `${(capacity / 1000).toFixed(1)} MW (${capacity} kW)` : `${capacity} kW`;
    const text = `Hello Instant Renewable Solution, I would like an engineering proposal quote:
• Project Type: ${projectType}
• Capacity: ${formattedCapacity}
• Required Deliverables: ${selectedServices.join(', ')}
• Target Turnaround: ${estimatedTurnaround}`;
    return `https://wa.me/917874537206?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="section-label">Engineering Scope Estimator</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display tracking-tight mb-1.5">
            Estimate Your Solar Project Deliverables
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Configure your project specifications to receive custom turnaround timelines and a proposal.
          </p>
        </div>

        {/* Clean Compact Calculator Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 max-w-4xl mx-auto shadow-xs">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Configuration Controls */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  1. Project Installation Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Ground Mount Utility Scale',
                    'C&I Rooftop & Shed',
                    'Residential Cluster',
                    'Solar Carport / Canopy',
                    'High Voltage MW Plant',
                    'Floating Solar Feasibility'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-all cursor-pointer leading-snug ${
                        projectType === type
                          ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: System Capacity Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    2. System Capacity
                  </label>
                  <span className="text-xs font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    {capacity >= 1000 ? `${(capacity / 1000).toFixed(1)} MW (${capacity} kW)` : `${capacity} kW`}
                  </span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="15000"
                  step="20"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                  <span>20 kW</span>
                  <span>1 MW</span>
                  <span>5 MW</span>
                  <span>15+ MW</span>
                </div>
              </div>

              {/* Step 3: Deliverable Checklist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  3. Select Engineering Deliverables
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {serviceOptions.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`p-2.5 rounded-lg border text-xs text-left flex items-start gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {isSelected ? (
                          <CheckSquare className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span className="text-[11px] leading-tight">{srv}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Scope Summary */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between h-full shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    Scope Summary
                  </span>
                  <span className="text-[9px] bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">
                    IRS Spec
                  </span>
                </div>

                <div className="space-y-2 mb-3.5 text-xs text-slate-700">
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-[11px]">Type:</span>
                    <span className="font-semibold text-slate-900 text-right text-[11px]">{projectType}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-[11px]">Capacity:</span>
                    <span className="font-bold text-amber-700 text-[11px]">
                      {capacity >= 1000 ? `${(capacity / 1000).toFixed(1)} MW` : `${capacity} kW`}
                    </span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-[11px]">Deliverables:</span>
                    <span className="font-semibold text-slate-900 text-[11px]">{selectedServices.length} Selected</span>
                  </div>
                  <div className="flex justify-between items-center pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      Turnaround:
                    </span>
                    <span className="font-semibold text-slate-900 text-[11px]">{estimatedTurnaround}</span>
                  </div>
                </div>

                {/* Selected Checklist Mini list */}
                <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 mb-4">
                  <span className="text-[10px] font-bold text-slate-500 block mb-1.5 uppercase tracking-wider">Included Deliverables:</span>
                  <ul className="space-y-1">
                    {selectedServices.map((s, i) => (
                      <li key={i} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                        <span className="line-clamp-1">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => onOpenEstimateModalWithData({ projectType, capacity: `${capacity} kW`, selectedServices })}
                  className="w-full btn-primary justify-center text-xs font-bold"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Scope Proposal Request</span>
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors border border-slate-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

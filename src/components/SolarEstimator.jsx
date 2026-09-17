import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  Calculator, Zap, Clock, CheckCircle2, MessageSquare, 
  ArrowRight, ShieldCheck, FileCheck, Layers, Sparkles 
} from 'lucide-react';

const projectTypes = [
  { id: 'cni', name: 'C&I Rooftop Solar', defaultCap: 500, unit: 'kW', icon: '🏭' },
  { id: 'utility', name: 'Ground Mount Utility', defaultCap: 10, unit: 'MW', icon: '☀️' },
  { id: 'res', name: 'Residential Cluster', defaultCap: 50, unit: 'kW', icon: '🏡' }
];

const deliverablesList = [
  { id: 'predesign', label: '3D Pre-Design & Shading (Helio/SketchUp)', hours: 24, badge: 'Fast 24h' },
  { id: 'ceig', label: 'Statutory CEIG Electrical Drawings & SLD', hours: 48, badge: 'CEIG Ready' },
  { id: 'staad', label: 'Structural Wind Load & STAAD Pro (IS 875)', hours: 48, badge: 'IS 875' },
  { id: 'pvsyst', label: 'Bankable 8760 PVsyst Generation Report', hours: 24, badge: 'Bankable' },
  { id: 'boq', label: 'Execution Drawings & Itemized BOQ', hours: 72, badge: 'Site-Ready' },
  { id: 'switchyard', label: 'HT Switchyard & Inverter Room GA', hours: 48, badge: 'HT / 33kV' },
];

export default function SolarEstimator({ onOpenEstimateModalWithData }) {
  const [selectedType, setSelectedType] = useState('cni');
  const [capacity, setCapacity] = useState(500); // in kW
  const [selectedDeliverables, setSelectedDeliverables] = useState([
    'predesign', 'ceig', 'staad', 'pvsyst'
  ]);

  const toggleDeliverable = (id) => {
    if (selectedDeliverables.includes(id)) {
      if (selectedDeliverables.length > 1) {
        setSelectedDeliverables(selectedDeliverables.filter(item => item !== id));
      }
    } else {
      setSelectedDeliverables([...selectedDeliverables, id]);
    }
  };

  // Turnaround calculation based on deliverables
  const maxHours = Math.max(
    ...selectedDeliverables.map(id => {
      const item = deliverablesList.find(d => d.id === id);
      return item ? item.hours : 24;
    })
  );

  const formattedTurnaround = maxHours <= 24 
    ? '24 Hours' 
    : maxHours <= 48 
      ? '24 - 48 Hours' 
      : '3 - 4 Business Days';

  const formatCapacity = (cap) => {
    if (cap >= 1000) {
      return `${(cap / 1000).toFixed(1)} MW`;
    }
    return `${cap} kW`;
  };

  const handleWhatsAppSend = () => {
    const typeObj = projectTypes.find(t => t.id === selectedType);
    const deliverableNames = selectedDeliverables.map(id => {
      const d = deliverablesList.find(item => item.id === id);
      return d ? d.label : id;
    }).join(', ');

    const text = `Hello Instant Renewable Solution! I am looking for outsourced solar design support:%0A%0A*Project Type:* ${typeObj?.name}%0A*Capacity:* ${formatCapacity(capacity)}%0A*Estimated Turnaround:* ${formattedTurnaround}%0A*Required Deliverables:* ${deliverableNames}%0A%0APlease provide a proposal.`;
    window.open(`https://wa.me/917874537206?text=${text}`, '_blank');
  };

  const handleModalOpen = () => {
    const typeObj = projectTypes.find(t => t.id === selectedType);
    const deliverableNames = selectedDeliverables.map(id => {
      const d = deliverablesList.find(item => item.id === id);
      return d ? d.label : id;
    });
    onOpenEstimateModalWithData({
      projectType: typeObj?.name,
      capacity: formatCapacity(capacity),
      selectedDeliverables: deliverableNames
    });
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
    <section id="calculator" className="py-16 sm:py-24 bg-[#F4F8FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="section-label">Interactive Scope Builder</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight font-display mb-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07427B] tracking-tight font-display mb-3">
            Estimate Your Solar Engineering Turnaround
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your plant type, capacity, and desired deliverables to calculate instant SLA turnaround time and request a tailored engineering quote.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Controls Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              <label className="block text-xs font-bold text-[#07427B] uppercase tracking-wider mb-2.5">
                1. Select Solar Project Type
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedType(t.id);
                      if (t.id === 'utility') setCapacity(10000);
                      else if (t.id === 'res') setCapacity(100);
                      else setCapacity(500);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${selectedType === t.id ? 'border-[#149C68] bg-[#149C68]/10 ring-2 ring-[#149C68]/30 font-bold text-slate-900 shadow-xs' : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'}`}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${selectedType === t.id ? 'border-[#07427B] bg-[#07427B]/8 ring-2 ring-[#07427B]/20 font-bold text-[#07427B] shadow-xs' : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'}`}
                  >
                    <span className="text-xl sm:text-2xl">{t.icon}</span>
                    <span className="text-xs leading-tight">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Capacity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                <label className="text-xs font-bold text-[#07427B] uppercase tracking-wider">
                  2. Plant Capacity (DC)
                </label>
                <span className="text-sm sm:text-base font-extrabold text-[#149C68] bg-[#0A1628] px-3.5 py-0.5 rounded-lg">
                <span className="text-sm sm:text-base font-extrabold text-[#17BAF0] bg-[#042342] px-3.5 py-0.5 rounded-lg font-mono">
                  {formatCapacity(capacity)}
                </span>
              </div>

              <input 
                type="range" 
                min={selectedType === 'utility' ? 1000 : 50} 
                max={selectedType === 'utility' ? 50000 : selectedType === 'res' ? 500 : 5000} 
                step={selectedType === 'utility' ? 1000 : 50}
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>{selectedType === 'utility' ? '1 MW' : '50 kW'}</span>
                <span>{selectedType === 'utility' ? '25 MW' : '2.5 MW'}</span>
                <span>{selectedType === 'utility' ? '50+ MW' : selectedType === 'res' ? '500 kW' : '5 MW'}</span>
              </div>
            </div>

            {/* 3. Deliverables Checklist */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              <label className="block text-xs font-bold text-[#07427B] uppercase tracking-wider mb-2.5">
                3. Choose Required Engineering Deliverables
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                {deliverablesList.map((d) => {
                  const isChecked = selectedDeliverables.includes(d.id);
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => toggleDeliverable(d.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${isChecked ? 'bg-[#149C68]/10 border-[#149C68] text-slate-900' : 'bg-slate-50/70 border-slate-200/80 text-slate-600 hover:bg-slate-100/70'}`}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${isChecked ? 'bg-[#59BD4B]/10 border-[#59BD4B] text-[#07427B]' : 'bg-slate-50/70 border-slate-200/80 text-slate-600 hover:bg-slate-100/70'}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-white ${isChecked ? 'bg-[#149C68]' : 'border border-slate-300'}`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 fill-[#149C68] text-white" />}
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-white ${isChecked ? 'bg-[#59BD4B]' : 'border border-slate-300'}`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 fill-[#59BD4B] text-white" />}
                        </div>
                        <span className="text-xs font-medium leading-tight">{d.label}</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500 shrink-0">
                        {d.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Scope Summary Card */}
          <div className="lg:col-span-5 bg-[#0A1628] border border-white/10 rounded-2xl p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#149C68]/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="lg:col-span-5 bg-[#042342] border border-white/10 rounded-2xl p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow matching logo cyan */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#17BAF0]/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#149C68] block">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#17BAF0] block">
                  Turnaround SLA
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {formattedTurnaround}
                </h3>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#149C68]/20 text-[#149C68] flex items-center justify-center">
              <div className="w-11 h-11 rounded-xl bg-[#17BAF0]/20 text-[#17BAF0] flex items-center justify-center">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Scope Summary Checklist */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <span className="text-slate-400">Project Capacity:</span>
                <span className="font-bold text-white">{formatCapacity(capacity)}</span>
                <span className="font-bold text-white font-mono">{formatCapacity(capacity)}</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <span className="text-slate-400">Scope Deliverables:</span>
                <span className="font-bold text-[#149C68]">{selectedDeliverables.length} Selected</span>
                <span className="font-bold text-[#17BAF0]">{selectedDeliverables.length} Selected</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <span className="text-slate-400">Statutory Compliance:</span>
                <span className="font-bold text-emerald-400">100% CEIG &amp; IS 875</span>
                <span className="font-bold text-[#59BD4B]">100% CEIG &amp; IS 875</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <span className="text-slate-400">Dedicated PV Engineers:</span>
                <span className="font-bold text-white">Surat HQ Desk</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#59BD4B] hover:bg-[#479E3B] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Dispatch Scope to WhatsApp</span>
              </button>

              <button
                onClick={handleModalOpen}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFA91F] hover:bg-[#e8970d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all active:scale-95 cursor-pointer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all active:scale-95 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-white" />
                <Zap className="w-4 h-4 fill-white text-white" />
                <span>Get Formal Scope Proposal</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-4 leading-snug">
              Instant Renewable Solution operates under strict non-disclosure (NDA) for all EPC partners.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

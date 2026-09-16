import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Phone, MessageSquare, Zap } from 'lucide-react';

export default function MobileBottomBar({ onOpenEstimateModal }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${irsCompanyData.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-slate-800 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call Desk</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={irsCompanyData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-slate-900 text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Estimate Modal Trigger */}
        <button
          onClick={onOpenEstimateModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95 transition-all font-black shadow-md shadow-amber-500/20 text-center cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-slate-950 mb-0.5" />
          <span className="text-[10px] font-black tracking-tight">Free Quote</span>
        </button>
      </div>
    </div>
  );
}

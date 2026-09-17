import React from "react";
import { Phone, MessageSquare, FileSpreadsheet } from "lucide-react";
import { irsCompanyData } from "../data/irsContent";

export default function MobileBottomBar({ onOpenEstimate }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${irsCompanyData.contact.phoneClean}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 text-brand-navy hover:bg-slate-200 transition-colors text-center"
      >
        <Phone className="w-4 h-4 text-brand-navy mb-0.5" />
        <span className="text-[11px] font-bold">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={irsCompanyData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors text-center"
      >
        <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
        <span className="text-[11px] font-bold">WhatsApp</span>
      </a>

      {/* Free Estimate CTA */}
      <button
        onClick={onOpenEstimate}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-brand-navy text-white hover:bg-brand-navy-light transition-colors text-center shadow-sm"
      >
        <FileSpreadsheet className="w-4 h-4 text-brand-cyan mb-0.5" />
        <span className="text-[11px] font-bold">Get Estimate</span>
      </button>
    </div>
  );
}

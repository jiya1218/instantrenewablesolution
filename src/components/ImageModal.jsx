import React from "react";
import { X, ZoomIn, Download, ExternalLink } from "lucide-react";

export default function ImageModal({ isOpen, onClose, imageSrc, title, subtitle }) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full p-4 sm:p-6 overflow-hidden z-10 border border-slate-200 my-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#59BD4B]">
              IRS Engineering Deliverable Preview
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-[#07427B]">
              {title || "Solar Engineering Drawing"}
            </h3>
            {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-[#07427B] hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-semibold"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open HD</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="mt-4 bg-slate-50 rounded-xl p-2 sm:p-4 border border-slate-200 flex items-center justify-center max-h-[75vh] overflow-auto">
          <img
            src={imageSrc}
            alt={title || "Engineering preview"}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Instant Renewable Solution • Surat Engineering Desk</span>
          <span className="text-[#07427B] font-semibold">Standardized CAD / STAAD / PVsyst Format</span>
        </div>
      </div>
    </div>
  );
}


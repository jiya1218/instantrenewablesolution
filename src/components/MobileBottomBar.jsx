import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { Home, Zap, FolderGit2, MessageSquare, Sparkles } from 'lucide-react';

export default function MobileBottomBar({ onOpenEstimateModal }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] safe-area-bottom">
      <div className="grid grid-cols-5 items-center px-1.5 py-1">
        {/* Tab 1: Home */}
        <a
          href="#home"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-500 hover:text-amber-600 active:scale-90 transition-transform"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[9.5px] font-semibold tracking-tight">Home</span>
        </a>

        {/* Tab 2: Services */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-500 hover:text-amber-600 active:scale-90 transition-transform"
        >
          <Zap className="w-5 h-5 mb-0.5" />
          <span className="text-[9.5px] font-semibold tracking-tight">Services</span>
        </a>

        {/* Tab 3: Projects */}
        <a
          href="#portfolio"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-500 hover:text-amber-600 active:scale-90 transition-transform"
        >
          <FolderGit2 className="w-5 h-5 mb-0.5" />
          <span className="text-[9.5px] font-semibold tracking-tight">Projects</span>
        </a>

        {/* Tab 4: WhatsApp */}
        <a
          href={irsCompanyData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-500 hover:text-emerald-600 active:scale-90 transition-transform"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 mb-0.5 text-emerald-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
          </div>
          <span className="text-[9.5px] font-semibold text-emerald-600 tracking-tight">Chat</span>
        </a>

        {/* Tab 5: Free Quote (Raised App Button) */}
        <button
          onClick={onOpenEstimateModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-amber-500 text-slate-950 active:scale-90 transition-transform shadow-md shadow-amber-500/25 cursor-pointer font-bold"
        >
          <Sparkles className="w-5 h-5 mb-0.5 fill-slate-950" />
          <span className="text-[9.5px] font-black tracking-tight">Quote</span>
        </button>
      </div>
    </div>
  );
}


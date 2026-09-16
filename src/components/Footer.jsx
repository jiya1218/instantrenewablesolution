import React from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  MapPin, Phone, Mail, MessageSquare, ArrowUp, 
  ArrowRight, Sun, Zap 
} from 'lucide-react';

export default function Footer({ onOpenEstimateModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-10 pb-20 lg:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Call to Action Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
              Need An Engineering Estimate?
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Precise solar engineering, transparent pricing.
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Get your solar project estimate and technical proposal today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              onClick={onOpenEstimateModal}
              className="btn-primary text-xs flex-1 sm:flex-initial"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Get a Free Estimate</span>
            </button>
            <a
              href={`tel:${irsCompanyData.contact.phoneClean}`}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors flex-1 sm:flex-initial"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Desk</span>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Col 1: IRS Logo & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <a href="#home" className="inline-block bg-white p-2 rounded-lg focus:outline-none">
              <img 
                src="/images/cropped-cropped-IRS-LOGO.png" 
                alt="Instant Renewable Solution Logo" 
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Instant Renewable Solution provides outsourced solar design and engineering support to EPC companies, developers, installers and consultants executing commercial, industrial and utility-scale projects.
            </p>

            <div className="pt-1">
              <a
                href={irsCompanyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {irsCompanyData.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#home" className="text-slate-400 hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-amber-400 transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#process" className="text-slate-400 hover:text-amber-400 transition-colors">How We Work</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-amber-400 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solar Engineering Services (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solar Services</h4>
            <ul className="space-y-1.5 text-xs">
              {irsCompanyData.services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-[10px] text-amber-500 font-mono">0{s.number}.</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office Info (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{irsCompanyData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${irsCompanyData.contact.phoneClean}`} className="hover:text-amber-400 font-medium text-slate-300">
                  {irsCompanyData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${irsCompanyData.contact.email}`} className="hover:text-amber-400 break-all font-medium text-slate-300">
                  {irsCompanyData.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Instant Renewable Solution (IRS). All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Solar Engineering &amp; Design Consultancy</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

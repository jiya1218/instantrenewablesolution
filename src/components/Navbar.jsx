import React, { useState } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  Menu, X, Phone, MessageSquare, ChevronDown, 
  ArrowRight, Zap, Sun, Mail, MapPin, Clock 
} from 'lucide-react';

export default function Navbar({ onOpenEstimateModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesDropdown(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all">
      {/* Top Contact Strip */}
      <div className="hidden md:block bg-slate-950 text-slate-400 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Surat, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`mailto:${irsCompanyData.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{irsCompanyData.contact.email}</span>
            </a>

            <a 
              href={`tel:${irsCompanyData.contact.phoneClean}`} 
              className="flex items-center gap-1.5 text-slate-200 font-medium hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{irsCompanyData.contact.phone}</span>
            </a>

            <a 
              href={irsCompanyData.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - 100% Solid White */}
      <div className="bg-white border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[74px] sm:h-[80px]" aria-label="Primary">
          
          {/* Official IRS Logo (Bigger & Prominent) */}
          <a 
            href="#home" 
            className="flex items-center gap-2 shrink-0 focus:outline-none py-1"
            onClick={closeMenu}
          >
            <img 
              src="/images/cropped-cropped-IRS-LOGO.png" 
              alt="Instant Renewable Solution Logo" 
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-all"
            />
          </a>

          {/* Desktop Nav Links (Bigger & Crisp Font) */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            <li>
              <a 
                href="#home" 
                className="px-3.5 py-2 text-[14px] sm:text-[15px] font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Home
              </a>
            </li>

            <li>
              <a 
                href="#about" 
                className="px-3.5 py-2 text-[14px] sm:text-[15px] font-semibold text-slate-800 hover:text-amber-600 transition-colors"
              >
                About Us
              </a>
            </li>

            <li>
              <a 
                href="#portfolio" 
                className="px-3.5 py-2 text-[14px] sm:text-[15px] font-semibold text-slate-800 hover:text-amber-600 transition-colors"
              >
                Our Projects
              </a>
            </li>

            {/* Services Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a 
                href="#services" 
                className="flex items-center gap-1.5 px-3.5 py-2 text-[14px] sm:text-[15px] font-semibold text-slate-800 hover:text-amber-600 transition-colors"
              >
                Our Services
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in duration-100">
                  <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 w-[560px]">
                    <div className="mb-2.5 pb-2.5 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                        Solar Design &amp; Engineering Packages
                      </span>
                      <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 font-bold px-2 py-0.5 rounded-md">
                        6 Core Services
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {irsCompanyData.services.map((srv) => (
                        <a
                          key={srv.id}
                          href={`#${srv.id}`}
                          onClick={() => setServicesDropdown(false)}
                          className="p-2.5 rounded-xl text-slate-700 hover:bg-amber-50/70 hover:text-amber-800 transition-colors group"
                        >
                          <div className="font-bold text-xs sm:text-sm flex items-center justify-between">
                            <span>{srv.title}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-amber-600 font-mono">0{srv.number}</span>
                          </div>
                          <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{srv.badge}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a 
                href="#process" 
                className="px-3.5 py-2 text-[14px] sm:text-[15px] font-semibold text-slate-800 hover:text-amber-600 transition-colors"
              >
                How We Work
              </a>
            </li>

            <li>
              <a 
                href="#faq" 
                className="px-3.5 py-2 text-[14px] sm:text-[15px] font-semibold text-slate-800 hover:text-amber-600 transition-colors"
              >
                FAQs
              </a>
            </li>

            <li>
              <a 
                href="#contact" 
                className="px-3.5 py-2 text-[14px] sm:text-[15px] font-semibold text-slate-800 hover:text-amber-600 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFA91F] hover:bg-[#e8970d] text-white text-[13.5px] font-bold shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Header Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimateModal}
              className="px-3.5 py-1.5 rounded-lg bg-[#FFA91F] text-white text-xs font-bold shadow-sm"
            >
              Get Quote
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 hover:text-amber-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1 shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto">
          <a href="#home" onClick={closeMenu} className="block px-3 py-2 text-xs font-semibold text-amber-600">Home</a>
          <a href="#about" onClick={closeMenu} className="block px-3 py-2 text-xs font-medium text-slate-700">About Us</a>
          <a href="#portfolio" onClick={closeMenu} className="block px-3 py-2 text-xs font-medium text-slate-700">Our Projects</a>
          <a href="#services" onClick={closeMenu} className="block px-3 py-2 text-xs font-medium text-slate-700">Our Services</a>
          <a href="#process" onClick={closeMenu} className="block px-3 py-2 text-xs font-medium text-slate-700">How We Work</a>
          <a href="#faq" onClick={closeMenu} className="block px-3 py-2 text-xs font-medium text-slate-700">FAQs</a>
          <a href="#contact" onClick={closeMenu} className="block px-3 py-2 text-xs font-medium text-slate-700">Contact Us</a>
        </div>
      )}
    </header>
  );
}

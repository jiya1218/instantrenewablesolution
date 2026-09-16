import React, { useState, useEffect } from 'react';
import { irsCompanyData } from '../data/irsContent';
import { 
  Menu, X, Phone, MessageSquare, ChevronDown, ChevronRight,
  ArrowRight, Zap, Mail, MapPin, Clock, Home, Info, 
  FolderGit2, CheckCircle2, HelpCircle, PhoneCall
} from 'lucide-react';

export default function Navbar({ onOpenEstimateModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all">
      {/* Top Contact Strip (Desktop Only) */}
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

      {/* Main Navbar Bar */}
      <div className="bg-white border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-[76px]" aria-label="Primary">
          
          {/* Official IRS Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 shrink-0 focus:outline-none py-1"
            onClick={closeMenu}
          >
            <img 
              src="/images/cropped-cropped-IRS-LOGO.png" 
              alt="Instant Renewable Solution Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all"
            />
          </a>

          {/* Desktop Nav Links */}
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

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFA91F] hover:bg-[#e8970d] text-white text-[13.5px] font-bold shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Bar Actions (App Style) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimateModal}
              className="px-3 py-1.5 rounded-lg bg-[#FFA91F] active:bg-[#e8970d] text-white text-xs font-bold shadow-sm active:scale-95 transition-transform flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Quote</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:text-amber-600 active:scale-90 transition-all"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Native App-Style Mobile Drawer & Backdrop */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          ></div>

          {/* Slide-in Drawer Container */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/cropped-cropped-IRS-LOGO.png" 
                  alt="IRS Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-lg bg-slate-200/80 text-slate-700 active:scale-90 transition-transform"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <a 
                href="#home" 
                onClick={closeMenu} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-slate-900 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Home className="w-4 h-4" />
                </div>
                <span>Home</span>
              </a>

              <a 
                href="#about" 
                onClick={closeMenu} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                  <Info className="w-4 h-4" />
                </div>
                <span>About Us</span>
              </a>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span>Our Services (6)</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180 text-amber-600' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-11 pr-2 py-1 space-y-1 border-l-2 border-amber-200 ml-4 my-1">
                    {irsCompanyData.services.map((srv) => (
                      <a
                        key={srv.id}
                        href={`#${srv.id}`}
                        onClick={closeMenu}
                        className="block py-1.5 px-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
                      >
                        <span className="font-bold text-amber-700 mr-1.5">0{srv.number}.</span>
                        {srv.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="#portfolio" 
                onClick={closeMenu} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <span>Our Projects</span>
              </a>

              <a 
                href="#process" 
                onClick={closeMenu} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>How We Work</span>
              </a>

              <a 
                href="#faq" 
                onClick={closeMenu} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span>FAQs</span>
              </a>

              <a 
                href="#contact" 
                onClick={closeMenu} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Drawer Bottom Quick Contacts & CTA */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${irsCompanyData.contact.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold active:scale-95 transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call Us</span>
                </a>

                <a
                  href={irsCompanyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold active:scale-95 transition-transform"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  closeMenu();
                  onOpenEstimateModal();
                }}
                className="w-full py-3 rounded-xl bg-[#FFA91F] text-white font-bold text-xs shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Get Free Project Quote</span>
              </button>

              <p className="text-[10px] text-center text-slate-400 pt-1">
                Surat HQ • Gujarat • India &amp; Middle East
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}


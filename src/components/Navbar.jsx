import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { irsCompanyData } from "../data/irsContent";

export default function Navbar({ onOpenEstimate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Only (Name is already in the logo image) */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src={irsCompanyData.logoUrl}
              alt="Instant Renewable Solution"
              className="h-11 sm:h-13 md:h-15 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/cropped-cropped-IRS-LOGO-104x80.png";
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all py-1 border-b-2 ${
                    isActive
                      ? "text-[#07427B] border-[#07427B] font-bold"
                      : "text-slate-600 border-transparent hover:text-[#07427B] hover:border-[#16A34A]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={irsCompanyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${irsCompanyData.contact.phoneClean}`}
              className="flex items-center gap-1.5 text-xs font-bold text-[#07427B] hover:text-[#16A34A] transition-colors px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>{irsCompanyData.contact.phone}</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#07427B] hover:bg-[#042342] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#17BAF0]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenEstimate}
              className="px-3 py-1.5 rounded-lg bg-[#07427B] text-white text-xs font-bold"
            >
              Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#07427B]" /> : <Menu className="w-6 h-6 text-[#07427B]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isActive
                    ? "bg-[#07427B] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#07427B] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#17BAF0]" />
            </button>
            
            <a
              href={irsCompanyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: {irsCompanyData.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

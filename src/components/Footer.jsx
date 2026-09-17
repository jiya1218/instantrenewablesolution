import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink 
} from "lucide-react";
import { irsCompanyData } from "../data/irsContent";

export default function Footer({ onOpenEstimate }) {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const serviceLinks = [
    { label: "Ground Mount Solar Project Design", path: "/services#gmspd" },
    { label: "Solar Pre-Design", path: "/services#spd" },
    { label: "Electrical (CEIG) Drawings & Approval", path: "/services#edaa" },
    { label: "Structure Design", path: "/services#sd" },
    { label: "Project Execution Drawings & Calculations", path: "/services#pedac" },
    { label: "PVsyst Power Generation Report", path: "/services#ppgr" },
  ];

  return (
    <footer 
      className="text-white"
      style={{ backgroundColor: "#03172B" }}
    >
      {/* Top CTA Banner */}
      <div 
        className="py-10 border-b border-white/10"
        style={{ backgroundColor: "#07427B" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16A34A]/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-[#16A34A]/40">
                Need A Free Estimate?
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Precise engineering, transparent pricing.
              </h3>
              <p className="text-slate-200 text-sm mt-1">
                Request a personalized solar design & cost estimate today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#17BAF0] hover:bg-[#0E9BD0] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex-1 md:flex-initial"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-colors flex-1 md:flex-initial"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={irsCompanyData.logoUrl}
                alt="Instant Renewable Solution"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-xl p-2 shadow-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/cropped-cropped-IRS-LOGO-104x80.png";
                }}
              />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              IRS operates as an extension of your engineering team. We help Solar EPC companies manage peak workloads, shorten design cycles and deliver coordinated engineering packages without increasing permanent headcount.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Commercial, Industrial, Rooftop & Ground-Mounted Projects</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-[#17BAF0] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenEstimate}
                  className="text-slate-300 hover:text-[#16A34A] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Get a Free Estimate</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-slate-300 hover:text-[#17BAF0] transition-colors flex items-start gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#16A34A] mt-1 flex-shrink-0" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-1" />
                <span>{irsCompanyData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#17BAF0] flex-shrink-0" />
                <a
                  href={`tel:${irsCompanyData.contact.phoneClean}`}
                  className="text-white hover:text-emerald-400 font-bold transition-colors"
                >
                  {irsCompanyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#17BAF0] flex-shrink-0" />
                <a
                  href={`mailto:${irsCompanyData.contact.email}`}
                  className="text-slate-300 hover:text-white transition-colors break-all"
                >
                  {irsCompanyData.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={irsCompanyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/40 border border-emerald-500/40 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Instant Chat</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Copyright © 2026 irs. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Powered by irs</span>
            <span>•</span>
            <Link to="/about-us" className="hover:text-white transition-colors">About</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>•</span>
            <Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Building2,
  Compass,
  TrendingUp
} from "lucide-react";
import { handleNavAnchorClick } from "@/lib/navigation";

export function Footer() {
  // Smooth scroll handler for section navigation
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleNavAnchorClick(e, href);
  };

  // Exact Requested Quick Links List
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "★ Real Estate Marketing", href: "/real-estate" },
    { name: "12 Digital Services", href: "/services" },
    { name: "Training Academy", href: "/training" },
    { name: "AI Marketing", href: "/#ai-marketing" },
    { name: "Portfolio & Case Studies", href: "/#portfolio" },
    { name: "About Us", href: "/#about" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#07090e] border-t border-white/10 pt-20 pb-12 relative overflow-hidden z-10 text-slate-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* ========================================================================= */}
          {/* COL 1: BRAND, CORE SPECIALIZATIONS & CREDIBILITY (span 4 on desktop) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link 
              href="/#home" 
              onClick={(e) => handleScrollTo(e, "/#home")} 
              className="inline-flex items-center gap-3 group mb-4"
            >
              <div className="relative h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Himastech Digital Realty Marketing Logo"
                  width={56}
                  height={56}
                  priority
                  className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white leading-none group-hover:text-amber-300 transition-colors">
                  HIMAS<span className="text-amber-400">TECH</span>
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.18em] text-amber-300 uppercase leading-tight mt-1">
                  Digital Realty Marketing
                </span>
              </div>
            </Link>

            {/* Requested Brand Title */}
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
              HIMASTECH — Digital Realty Marketing
            </h3>

            {/* Requested Specializations Tagline */}
            <p className="text-xs sm:text-sm font-black text-gold-gradient tracking-wide mt-1.5 mb-3.5">
              Real Estate Marketing | Digital Marketing | AI Marketing | Training
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Complete digital marketing solutions for Real Estate, Builders, Developers, Luxury Villas, Entrepreneurs &amp; Growing Businesses. Architecting hyper-local lead funnels, Meta CAPI telemetry, and high-conversion sales systems.
            </p>

            {/* Credibility Pills */}
            <div className="space-y-2 text-xs text-slate-300 font-semibold mb-6">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Meta &amp; Google Premier Partner Proficiencies</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Strategic Alliance with Merlinflow Technologies Pvt Ltd</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <Link
              href="/#contact"
              onClick={(e) => handleScrollTo(e, "/#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 transition-all group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>GET FREE AUDIT</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* ========================================================================= */}
          {/* COL 2: QUICK LINKS (Exact Match: Home • About • Services • Real Estate Marketing • AI Marketing • Portfolio • Training • Contact) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-5 flex items-center gap-2 pb-2 border-b border-white/10">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-slate-300 hover:text-amber-300 transition-colors flex items-center justify-between py-1 group/item"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover/item:text-amber-400 group-hover/item:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* COL 3: SPECIALIZED SYSTEMS & TELEMETRY (span 2 on desktop) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-5 flex items-center gap-2 pb-2 border-b border-white/10">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Growth Systems</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <Link 
                  href="/#gallery" 
                  onClick={(e) => handleScrollTo(e, "/#gallery")}
                  className="hover:text-amber-300 transition-colors block py-0.5 text-amber-400 font-bold"
                >
                  Founder &amp; Moments Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/#social-activity" 
                  onClick={(e) => handleScrollTo(e, "/#social-activity")}
                  className="hover:text-amber-300 transition-colors block py-0.5 text-slate-300"
                >
                  Live Social Media Activity
                </Link>
              </li>
              <li>
                <Link 
                  href="/#testimonials" 
                  onClick={(e) => handleScrollTo(e, "/#testimonials")}
                  className="hover:text-amber-300 transition-colors block py-0.5"
                >
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/#who-we-help" 
                  onClick={(e) => handleScrollTo(e, "/#who-we-help")}
                  className="hover:text-amber-300 transition-colors block py-0.5"
                >
                  Who We Help (8 Sectors)
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1 py-0.5 font-bold text-cyan-400"
                >
                  <span>Merlinflow Tech Alliance</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/#faq" 
                  onClick={(e) => handleScrollTo(e, "/#faq")}
                  className="hover:text-amber-300 transition-colors block py-0.5"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* COL 4: CONTACT & DISPLAY INFORMATION (span 3 on desktop) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-5 flex items-center gap-2 pb-2 border-b border-white/10">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Contact Us</span>
            </h4>
            
            <ul className="space-y-3.5 text-xs text-slate-300 font-medium mb-6">
              
              {/* WhatsApp */}
              <li>
                <a 
                  href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20let's%20talk%20about%20our%20business." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-wider">WhatsApp</span>
                    <span className="text-white font-bold group-hover:text-emerald-300 transition-colors">+91 6304989071</span>
                  </div>
                </a>
              </li>

              {/* Call Us */}
              <li>
                <a 
                  href="tel:+916304989071" 
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-amber-400 font-bold uppercase tracking-wider">Call Us</span>
                    <span className="text-white font-bold group-hover:text-amber-300 transition-colors">+91 6304989071</span>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a 
                  href="mailto:info@himastechdigi.com" 
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Email</span>
                    <span className="text-white font-bold group-hover:text-cyan-300 transition-colors">info@himastechdigi.com</span>
                  </div>
                </a>
              </li>

              {/* Location: Hyderabad, Telangana */}
              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-purple-400/10 border border-purple-400/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-purple-400 font-bold uppercase tracking-wider">Location</span>
                  <span className="text-xs font-semibold text-white">Hyderabad, Telangana.</span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">Nagole, Hyderabad, Telangana, 500068</span>
                </div>
              </li>

            </ul>
          </div>

        </div>
        
        {/* ========================================================================= */}
        {/* BOTTOM BAR: COPYRIGHT, LEGAL LINKS & ALLIANCE DISCLAIMER */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-medium text-slate-300">
              &copy; {new Date().getFullYear()} HIMASTECH — Digital Realty Marketing. All rights reserved.
            </p>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 font-semibold text-slate-400">
              <Link
                href="/terms-and-conditions"
                className="hover:text-amber-400 transition-colors underline cursor-pointer"
              >
                Terms and Conditions
              </Link>
              <span>•</span>
              <Link
                href="/privacy-policy"
                className="hover:text-amber-400 transition-colors underline cursor-pointer"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms-and-conditions#clause-06"
                className="hover:text-amber-400 transition-colors underline cursor-pointer"
              >
                SLA &amp; Performance Standard
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-slate-400 font-medium">
              In strategic alliance with{" "}
              <Link
                href="/merlinflow"
                className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Merlinflow Technologies Pvt Ltd</span>
                <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
              </Link>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

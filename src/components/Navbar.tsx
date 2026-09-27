"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sparkles, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allServices } from "@/data/servicesData";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const beforeServicesLinks = [
    { name: "★ Real Estate", href: "/real-estate", isFlagship: true },
  ];

  const afterServicesLinks = [
    { name: "Training", href: "/training", isSpecial: false },
    { name: "AI Marketing", href: "/#ai-marketing" },
    { name: "Merlinflow Tech", href: "/merlinflow", isSpecial: true },
  ];

  const moreLinks = [
    { name: "Founder & Moments Gallery", href: "/#gallery", desc: "Leadership, site visits & workshops" },
    { name: "Case Studies & Portfolio", href: "/#portfolio", desc: "Real estate & brand growth results" },
    { name: "Live Dashboard", href: "/#dashboard", desc: "Real campaign metrics & KPIs" },
    { name: "Client Testimonials", href: "/#testimonials", desc: "Verified client feedback & photos" },
    { name: "Who We Help", href: "/#who-we-help", desc: "8 specialized industry sectors" },
    { name: "6-Step Process", href: "/#process", desc: "Our proven revenue multiplication engine" },
    { name: "About Founder", href: "/#about", desc: "Kishore Patel & company vision" },
    { name: "FAQ", href: "/#faq", desc: "Frequently asked questions & answers" },
  ];

  // Mobile list matching user priority
  const allMobileLinks = [
    { name: "★ Real Estate Marketing (Flagship)", href: "/real-estate", isFlagship: true },
    { name: "Services (12 Specialized)", href: "/services" },
    { name: "Training Academy (Real Estate & Media)", href: "/training", isSpecial: true },
    { name: "Founder Moments Gallery", href: "/#gallery" },
    { name: "AI Marketing", href: "/#ai-marketing" },
    { name: "Case Studies & Portfolio", href: "/#portfolio" },
    { name: "Live Dashboard", href: "/#dashboard" },
    { name: "Merlinflow Tech Alliance", href: "/merlinflow", isSpecial: true },
    { name: "Client Testimonials", href: "/#testimonials" },
    { name: "Who We Help", href: "/#who-we-help" },
    { name: "Our 6-Step Process", href: "/#process" },
    { name: "About Founder", href: "/#about" },
    { name: "FAQs", href: "/#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-[0_12px_40px_rgba(0,0,0,0.85)] border-b border-white/10"
          : "bg-[#07090e]/80 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center gap-4">
          
          {/* ================= Brand Logo & Full Wordmark ================= */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group py-1">
              <div className="relative h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Himastech Lightbulb Emblem"
                  width={48}
                  height={48}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.45)]"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="text-lg sm:text-xl font-black tracking-wider text-white leading-none group-hover:text-amber-300 transition-colors">
                  HIMAS<span className="text-amber-400">TECH</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.16em] text-amber-300 uppercase leading-tight mt-1 whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  Digital Realty Marketing
                </span>
              </div>
            </Link>
          </div>

          {/* ================= Desktop Nav Items ================= */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#0c121e]/90 backdrop-blur-xl px-2.5 xl:px-3 py-1.5 rounded-full border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
            {beforeServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs font-black transition-all px-3 py-1 rounded-full whitespace-nowrap ${
                  link.isFlagship
                    ? "bg-amber-400/20 text-amber-300 border border-amber-400/50 hover:bg-amber-400/30 hover:text-white shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Services Dropdown (12 Services) */}
            <div 
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`text-xs font-bold transition-all px-2.5 py-1 rounded-full flex items-center gap-1 cursor-pointer ${
                  servicesOpen ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-amber-400" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[90vw] max-w-[620px] rounded-2xl glass-modal border border-amber-400/35 p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-50 overflow-hidden"
                  >
                    {/* Dropdown Header */}
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 px-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-black uppercase tracking-wider text-white">
                          Complete Marketing Arsenal (12 Services)
                        </span>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        <span>View All Overview</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* 12 Services 2-Column Grid */}
                    <div className="grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto no-scrollbar">
                      {allServices.map((service, sIdx) => {
                        const Icon = service.icon;
                        const numStr = String(sIdx + 1).padStart(2, "0");
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-all group/item border border-transparent hover:border-amber-400/30"
                          >
                            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 group-hover/item:border-amber-400/50 group-hover/item:bg-amber-400/20 text-amber-400 transition-colors shadow-2xs mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[9px] font-mono font-bold text-amber-400/60">#{numStr}</span>
                                <span className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors truncate">
                                  {service.title}
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                                <span className="text-emerald-400 font-semibold">{service.impact}</span> • {service.badge}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between px-2 bg-white/5 rounded-xl p-2">
                      <span className="text-[11px] text-slate-300 font-medium">
                        Looking for a custom multi-channel growth plan?
                      </span>
                      <Link
                        href="/#contact"
                        onClick={() => setServicesOpen(false)}
                        className="text-[10px] font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 px-3 py-1 rounded-full transition-colors shrink-0"
                      >
                        Get Free Audit
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {afterServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs font-bold transition-all px-2.5 py-1 rounded-full whitespace-nowrap ${
                  link.isSpecial
                    ? "text-cyan-300 hover:text-cyan-200 bg-cyan-950/70 border border-cyan-400/40 shadow-xs flex items-center gap-1.5"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.isSpecial && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* "More" Dropdown Menu */}
            <div 
              ref={moreRef}
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`text-xs font-bold transition-all px-2.5 py-1 rounded-full flex items-center gap-1 cursor-pointer ${
                  moreOpen ? "bg-white/15 text-white" : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
                aria-expanded={moreOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-[#0c1220]/95 backdrop-blur-2xl border border-white/15 p-2 shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="space-y-1">
                      {moreLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                          <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400 font-medium">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ================= Action Button ================= */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/#contact"
              className="px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 text-xs font-black tracking-wider transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.55)] hover:scale-105 flex items-center gap-1.5 whitespace-nowrap shadow-md uppercase cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" /> 
              <span><span className="hidden xl:inline">BOOK </span>FREE CONSULTATION</span>
            </Link>
          </div>

          {/* ================= Mobile Hamburger ================= */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-100 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer shadow-xs transition-colors"
            >
              {isOpen ? <X className="h-6 w-6 text-amber-400" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu Drawer ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass-modal border-b border-white/15 overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 pt-4 pb-8 space-y-2 max-w-lg mx-auto">
              
              {/* Brand Header Inside Mobile Drawer */}
              <div className="flex items-center gap-3 p-3 mb-2 rounded-xl glass-card border border-white/10">
                <Image
                  src="/logo-icon.png"
                  alt="Himastech Logo Icon"
                  width={36}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
                <div>
                  <div className="text-sm font-black text-white">
                    HIMAS<span className="text-amber-400">TECH</span>
                  </div>
                  <div className="text-[9px] font-bold text-amber-300 tracking-wider uppercase">
                    Digital Realty Marketing
                  </div>
                </div>
              </div>

              {/* Mobile Real Estate Link - Flagship #1 */}
              <Link
                href="/real-estate"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-black transition-all bg-amber-400/15 border border-amber-400/40 text-amber-300 hover:bg-amber-400/25 shadow-xs"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">★</span>
                  <span>Real Estate Marketing</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md">
                  Flagship
                </span>
              </Link>

              {/* Mobile Services Accordion (12 Services) */}
              <div className="rounded-xl border border-white/10 glass-card overflow-hidden">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-white cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Services (12 Capabilities)</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="border-t border-white/10 px-3 py-2 space-y-1 bg-black/40"
                    >
                      <Link
                        href="/services"
                        className="block px-3 py-2 rounded-lg text-xs font-bold text-amber-400 hover:bg-white/5 transition-colors border-b border-white/5 mb-1"
                        onClick={() => setIsOpen(false)}
                      >
                        ⚡ View All 12 Services Overview →
                      </Link>
                      {allServices.map((service, sIdx) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-white/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">{service.title}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Training Academy Link - #2 Priority */}
              <Link
                href="/training"
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5 border border-white/10 glass-card"
                onClick={() => setIsOpen(false)}
              >
                <span>Training Academy (Real Estate &amp; Media)</span>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-400/40 px-2 py-0.5 rounded-md">
                  5 Tracks
                </span>
              </Link>

              {/* Other Mobile Links */}
              <Link
                href="/#ai-marketing"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                AI Marketing
              </Link>
              <Link
                href="/#portfolio"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Case Studies &amp; Portfolio
              </Link>
              <Link
                href="/#dashboard"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Live Dashboard
              </Link>
              <Link
                href="/#process"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Our 6-Step Process
              </Link>
              <Link
                href="/#testimonials"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/#who-we-help"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Who We Help
              </Link>
              <Link
                href="/#about"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                About Founder
              </Link>
              <Link
                href="/merlinflow"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-cyan-300 bg-cyan-950/50 border border-cyan-400/40"
                onClick={() => setIsOpen(false)}
              >
                Merlinflow Tech Alliance
              </Link>
              <Link
                href="/#faq"
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all text-slate-100 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>

              <div className="pt-4">
                <Link
                  href="/#contact"
                  className="block text-center px-4 py-3.5 rounded-xl text-sm font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.4)] uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

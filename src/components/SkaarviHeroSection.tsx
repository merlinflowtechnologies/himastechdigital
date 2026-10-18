"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Star, 
  GraduationCap, 
  Building2, 
  Bot, 
  ShieldCheck, 
  Users,
  Award,
  BookOpen,
  TrendingUp,
  QrCode,
  ExternalLink,
  Copy,
  Check,
  X,
  Globe,
  Smartphone
} from "lucide-react";

interface SkaarviHeroSectionProps {
  onOpenRegisterModal?: () => void;
}

export function SkaarviHeroSection({ onOpenRegisterModal }: SkaarviHeroSectionProps) {
  const [showQrModal, setShowQrModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const websiteUrl = "https://himastechdigi.com";

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(websiteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowQrModal(false);
      }
    };
    if (showQrModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showQrModal]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-10 pb-20 md:py-24 bg-transparent overflow-hidden">
      {/* Decorative Geometry */}
      <div className="absolute top-12 left-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Skaarvi Style 7 Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left bg-white/90 backdrop-blur-md p-6 sm:p-9 rounded-3xl border border-white/70 shadow-xl">
            
            {/* Skaarvi Pre-Title Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f15a22]/10 border border-[#f15a22]/20 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#f15a22] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#f15a22]">
                About Us • Digital Realty Marketing &amp; Skills Academy
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-black text-[#062d72] tracking-tight leading-[1.18] mb-4"
            >
              Empowering Telugu Learners with{" "}
              <span className="text-[#f15a22] relative inline-block">
                Future-Ready Digital Skills
                {/* Decorative Underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#f15a22]/30 fill-current" viewBox="0 0 250 12" preserveAspectRatio="none">
                  <path d="M0,7 C50,0 200,0 250,7 L250,12 C200,5 50,5 0,12 Z" />
                </svg>
              </span>
            </motion.h1>

            {/* Description Copy From skaarvi.com */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed mb-6"
            >
              <p>
                At <strong className="text-[#062d72] font-black">HIMASTECH Digital Marketing</strong>, we believe that learning the right skills can open doors to new opportunities. We are a <strong className="text-[#f15a22]">Digital Realty Marketing &amp; Skills Academy</strong> focused on making practical, future-ready digital education simple, accessible, and easy to implement.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm">
                Through structured courses, live mentoring, practical implementation support, and community learning, we help learners build the skills and confidence to move forward in today's digital world.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1ab69d] shrink-0" />
                <span className="text-xs font-bold text-slate-800">Live Mentoring</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f15a22] shrink-0" />
                <span className="text-xs font-bold text-slate-800">100% in Telugu</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#062d72] shrink-0" />
                <span className="text-xs font-bold text-slate-800">Practical Tasks</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8e56ff] shrink-0" />
                <span className="text-xs font-bold text-slate-800">Job &amp; Freelance</span>
              </div>
            </motion.div>

            {/* Skaarvi Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <button 
                onClick={onOpenRegisterModal || (() => scrollTo("courses"))}
                className="px-6 py-3.5 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white font-bold text-sm shadow-lg shadow-[#062d72]/20 hover:shadow-xl hover:shadow-[#f15a22]/30 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore HIMASTECH Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => scrollTo("packages")}
                className="px-6 py-3.5 rounded-xl bg-white border-2 border-[#062d72] text-[#062d72] hover:bg-[#062d72] hover:text-white font-bold text-sm transition-all cursor-pointer"
              >
                View Packages
              </button>

              <a 
                href="https://wa.me/916304989071" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-200"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Talk to Surekha Mam on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#062d72] hover:text-[#f15a22] bg-white hover:bg-slate-50 px-4 py-3 rounded-xl border border-slate-200/90 shadow-xs transition-all cursor-pointer group"
                title="View HIMASTECH Website QR Code & Link"
              >
                <QrCode className="w-4 h-4 text-[#f15a22] group-hover:scale-110 transition-transform" />
                <span>Web Link &amp; QR Code</span>
              </button>
            </motion.div>

            {/* Career Path / Growth Pathway Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mt-6 p-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e59800]/15 text-[#e59800] flex items-center justify-center font-black shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#062d72] uppercase tracking-wider">Fast-Track Career Path</div>
                  <div className="text-[11px] text-slate-500 font-medium">Bilingual Step-by-Step Growth Roadmap</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">1. Skill Track</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">2. Live Mentoring</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-md bg-[#f15a22]/10 text-[#f15a22] border border-[#f15a22]/20 font-black">3. Earn &amp; Scale</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Layered Visual & Dynamic Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Premium Full-Length View of Founder */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white p-2 sm:p-2.5 z-10 group">
                <div className="relative h-[520px] sm:h-[580px] lg:h-[600px] w-full rounded-2xl overflow-hidden bg-slate-100 flex flex-col justify-between p-4 sm:p-5">
                  
                  {/* Founder Photo - Sharp, High-Definition, Unobstructed */}
                  <Image 
                    src="/himastech-founder.jpg" 
                    alt="HIMASTECH Founder - Digital Realty Marketing Leadership"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 brightness-105 contrast-[1.02]"
                  />
                  
                  {/* Top Floating Badge */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Founder &amp; Growth Mentor
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-[#062d72] shadow-md border border-slate-200">
                      Live Mentorship
                    </span>
                  </div>

                  {/* Bottom Compact Glassmorphism Info Pill - Does NOT Cover the Founder */}
                  <div className="relative z-10 rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl border border-white/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#f15a22] bg-[#f15a22]/10 px-2.5 py-1 rounded-md">
                        Digital Realty Marketing
                      </span>
                      <div className="flex items-center gap-1 text-xs font-black text-amber-500">
                        <span>★ 4.9/5</span>
                        <span className="text-[10px] text-slate-500 font-medium">(1,000+ Enrolled)</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#062d72] leading-tight">
                      HIMASTECH Digital Realty Marketing
                    </h3>
                    
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
                      Founder-Led Real Estate Client Acquisition, Meta Ads, and Telugu Masterclasses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div 
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f15a22] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">500+ Videos</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Practical Telugu Replays</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div 
                animate={{ y: [6, -4, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">100% Happy Students</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Homemakers &amp; Professionals</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Scan QR Code & HIMASTECH Website Link */}
              <div className="absolute -bottom-6 right-2 sm:right-3 z-30">
                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-200/90 hover:border-[#f15a22]/50 flex items-center gap-2.5 hover:scale-105 transition-all cursor-pointer group text-left"
                  title="Scan QR Code or visit HIMASTECH Website"
                >
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#062d72] to-[#0a2550] text-amber-300 flex items-center justify-center p-1.5 shadow-inner group-hover:from-[#f15a22] group-hover:to-[#ff7a45] group-hover:text-white transition-all">
                    <QrCode className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-black text-slate-900 group-hover:text-[#062d72] leading-tight">
                        HIMASTECH Web
                      </span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#f15a22] transition-colors" />
                    </div>
                    <div className="text-[9px] text-[#f15a22] font-extrabold flex items-center gap-1 mt-0.5">
                      <span>Scan QR / Open Link</span>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Interactive HIMASTECH Website QR Code & Web Link Modal */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQrModal(false)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 z-10 text-center overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#062d72] via-[#e59800] to-[#f15a22]" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close QR Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Badge & Title */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#062d72]/10 text-[#062d72] text-[10px] font-black uppercase tracking-wider mb-2">
                <Globe className="w-3 h-3 text-[#062d72]" />
                <span>Official Web Link</span>
              </div>

              <h3 className="text-xl font-black text-[#062d72] tracking-tight mb-1">
                HIMASTECH Website
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Scan with your phone camera or open the link directly
              </p>

              {/* QR Code Frame */}
              <div className="relative mx-auto w-52 h-52 sm:w-56 sm:h-56 p-3 rounded-2xl bg-white border-2 border-slate-200 shadow-md flex items-center justify-center mb-4 group">
                <div className="relative w-full h-full">
                  <Image
                    src="/himastech-qr.svg"
                    alt="HIMASTECH Website QR Code - https://himastechdigi.com"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                {/* Center Mini Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-center p-1">
                    <div className="relative w-full h-full">
                      <Image
                        src="/logo-icon.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Link Pill with Copy Button */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                <div className="flex items-center gap-2 overflow-hidden text-left pl-1">
                  <Globe className="w-4 h-4 text-[#f15a22] shrink-0" />
                  <span className="text-xs font-bold text-slate-700 truncate select-all">
                    {websiteUrl}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-[#062d72] hover:bg-[#f15a22] text-white"
                  }`}
                  title="Copy link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#062d72] to-[#0a2550] hover:from-[#f15a22] hover:to-[#ff7a45] text-white text-xs font-black shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Open Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/916304989071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

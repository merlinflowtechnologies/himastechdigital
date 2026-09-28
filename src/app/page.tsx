"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Activity, Building2, User, Award, Target } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/navigation";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { TrustStrip } from "@/components/TrustStrip";
import { HimastechDifference } from "@/components/HimastechDifference";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { StatsBar } from "@/components/StatsBar";
import { RealEstateMarketingSection } from "@/components/RealEstateMarketingSection";
import { AIMarketingSection } from "@/components/AIMarketingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { CreativePortfolioSection } from "@/components/CreativePortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrainingSection } from "@/components/TrainingSection";
import { ClientTestimonialsSection } from "@/components/ClientTestimonialsSection";
import { FounderGallerySection } from "@/components/FounderGallerySection";
import { SocialMediaActivitySection } from "@/components/SocialMediaActivitySection";
import { AboutSection } from "@/components/AboutSection";
import { MerlinflowSection } from "@/components/MerlinflowSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        setTimeout(() => {
          scrollToSection(id);
        }, 100);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] overflow-x-hidden relative">
      {/* Global Animated Background System */}
      <BackgroundEffects />

      {/* Hero Section • HIMASTECH — Digital Realty Marketing */}
      <section id="home" className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
        
        {/* Background Ambient City Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image 
            src="/realty-hero.jpg" 
            alt="Himastech Digital Realty Marketing - Cinematic Hyderabad Skyline and Luxury Villa Project" 
            fill 
            priority 
            sizes="100vw"
            className="object-cover object-center opacity-20 sm:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/70 via-[#07090e]/85 to-[#07090e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#07090e_75%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Strategic Authority & Conversion Engine (7 Cols) */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              
              {/* Brand Concept Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1322]/90 border border-white/10 text-slate-200 mb-3 text-xs shadow-lg backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-yellow-500 tracking-wider text-[11px] sm:text-xs uppercase">
                  HIMASTECH — DIGITAL REALTY MARKETING • DIGITAL + AI SOLUTIONS
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black border border-amber-400/30">
                  REAL ESTATE &amp; BUSINESS GROWTH
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight mb-4 leading-[1.12] text-white"
              >
                <span>BUILD YOUR BRAND . </span>
                <span className="text-gold-gradient block sm:inline">
                  GENERATE LEADS . 
                </span>
                <span className="block mt-1">GROW WITH DIGITAL + AI.</span>
              </motion.h1>

              {/* Core Website Message (5-Second Immediate Clarity Card) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#0c1220] to-cyan-500/10 border-l-4 border-l-amber-400 border border-white/10 shadow-xl mb-4 w-full"
              >
                <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed">
                  Himastech helps <span className="text-amber-300 font-black underline decoration-amber-400/60 decoration-2 underline-offset-4">real-estate companies and businesses</span> build their digital brand, generate leads and improve their marketing using <span className="text-cyan-300 font-black">digital + AI solutions</span>.
                </p>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  Specialized performance systems for real estate builders, luxury villas, commercial towers, and growing enterprises in Hyderabad &amp; global NRI corridors.
                </p>
              </motion.div>

              {/* 3 Quick-Scan Value Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full mb-6 text-xs"
              >
                <div className="px-3 py-2 rounded-xl glass-subcard flex items-center gap-2 shadow-xs hover:border-amber-400/40 transition-colors">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-200 font-bold">Build Digital Brand</span>
                </div>
                <div className="px-3 py-2 rounded-xl glass-subcard flex items-center gap-2 shadow-xs hover:border-emerald-400/40 transition-colors">
                  <Target className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 font-bold">Generate HNI Leads</span>
                </div>
                <div className="px-3 py-2 rounded-xl glass-subcard flex items-center gap-2 shadow-xs hover:border-cyan-400/40 transition-colors">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-200 font-bold">Digital + AI Solutions</span>
                </div>
              </motion.div>

              {/* Call to Actions (Primary & Secondary CTA) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center w-full sm:w-auto"
              >
                {/* Primary CTA */}
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" /> 
                  <span>GET FREE GROWTH AUDIT</span> 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-amber-400" />
                </Link>
              </motion.div>

              {/* Proof / Trust Metrics */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 font-semibold w-full">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> 50+ Projects Delivered
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-white">
                  <Building2 className="w-4 h-4 text-cyan-400" /> Luxury Villas &amp; High-Rise Funnels
                </span>
                <span className="hidden sm:inline-block text-slate-600">•</span>
                <span className="hidden sm:flex items-center gap-1.5 text-white">
                  <Activity className="w-4 h-4 text-amber-400" /> AI CAPI Lead Telemetry
                </span>
              </div>

            </div>

            {/* Right Column: Himastech Founder Photo & Executive Card (5 Cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3 relative"
            >
              {/* Executive CEO Showcase Card */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 relative overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                {/* Ambient glow behind card */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-amber-400/20 to-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 to-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-white tracking-wider uppercase">
                        Executive Leadership
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                  </div>

                  {/* CEO Photo Frame */}
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-md group">
                    <Image
                      src="/saik.jpeg"
                      alt="Kishore Patel - Founder of Himastech Digital Realty Marketing"
                      fill
                      priority
                      quality={98}
                      className="object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/30 to-transparent" />
                    
                    {/* Badge at top of photo */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Founder &amp; Lead Strategist
                      </span>
                    </div>

                    {/* CEO Details Bottom Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-base sm:text-lg font-black tracking-tight text-white leading-tight mb-0.5">
                        Kishore Patel
                      </div>
                      <div className="text-xs font-bold text-amber-400 mb-1 leading-tight">
                        Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist
                      </div>
                      <p className="text-[11px] text-slate-300 font-medium leading-relaxed line-clamp-2">
                        Helping businesses understand digital marketing, generate opportunities and build stronger sales systems.
                      </p>
                    </div>
                  </div>

                  {/* Trust Micro-Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
                    <div className="px-3 py-2 rounded-xl glass-subcard">
                      <div className="text-[10px] text-slate-400 font-medium">Experience</div>
                      <div className="text-xs font-bold text-amber-300">12+ Years Industry</div>
                    </div>
                    <div className="px-3 py-2 rounded-xl glass-subcard">
                      <div className="text-[10px] text-slate-400 font-medium">Campaigns</div>
                      <div className="text-xs font-bold text-cyan-300">50+ Projects Launched</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Below Photo: Prominent Link to About & Leadership */}
              <Link
                href="#about"
                className="w-full p-3.5 sm:p-4 rounded-2xl glass-card glass-card-hover text-slate-200 hover:text-white transition-all duration-300 flex items-center justify-between group/about border border-white/10 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center group-hover/about:bg-amber-400 group-hover/about:text-slate-950 transition-colors shadow-2xs border border-amber-400/20">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-white group-hover/about:text-amber-300 transition-colors">
                      About Kishore Patel &amp; Leadership Vision
                    </div>
                    <div className="text-[11px] text-slate-400 group-hover/about:text-slate-300 transition-colors">
                      Trainer, Sales Strategist &amp; Real Estate Growth Expert →
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover/about:text-amber-400 group-hover/about:translate-x-1.5 transition-all" />
              </Link>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Strip • 5 Core Credibility Pillars */}
      <TrustStrip />

      {/* The Himastech Difference • Digital Growth System */}
      <HimastechDifference />

      {/* 1. Official Partner Ecosystem */}
      <PartnersMarquee />

      {/* 2. Agency Proof Metrics */}
      <StatsBar />

      {/* 3. Real Estate Marketing • 12 Core Capabilities */}
      <RealEstateMarketingSection />

      {/* 4. AI Marketing • AI + Marketing = Your New Growth Engine */}
      <AIMarketingSection />

      {/* 6. Complete Digital Marketing • Everything Your Business Needs to Grow Online */}
      <ServicesSection />

      {/* 7. Who We Help • 8 Dedicated Industry Segments */}
      <WhoWeHelpSection />

      {/* 8. Creative Portfolio • Client Projects & Deep Case Studies */}
      <CreativePortfolioSection />

      {/* 8. Your Growth Journey • 6-Step Framework */}
      <ProcessSection />

      {/* 8. Elite Marketing Training & Recruiting Academy */}
      <TrainingSection />

      {/* 9. Genuine Client Testimonials */}
      <ClientTestimonialsSection />

      {/* 10. Founder & Agency Moments Photo Gallery */}
      <FounderGallerySection />

      {/* 10.5 Live Social Media Activity • Instagram Reels */}
      <SocialMediaActivitySection />

      {/* 11. About Us & Strategic Vision */}
      <AboutSection />

      {/* 12. Strategic Alliance with Merlinflow Technologies Private Limited */}
      <MerlinflowSection />

      {/* 13. Frequently Asked Questions */}
      <FaqSection />

      {/* 14. Contact & Free Marketing Audit Consultation */}
      <ContactSection />
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles, Zap, ShieldCheck, Activity, BarChart3, MessageCircle, Building2, TrendingUp, MapPin, User, Award, Target, Camera } from "lucide-react";
import { motion } from "framer-motion";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { TrustStrip } from "@/components/TrustStrip";
import { HimastechDifference } from "@/components/HimastechDifference";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { StatsBar } from "@/components/StatsBar";
import { MarketingDashboardSection } from "@/components/MarketingDashboardSection";
import { RealEstateMarketingSection } from "@/components/RealEstateMarketingSection";
import { AIMarketingSection } from "@/components/AIMarketingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { CreativePortfolioSection } from "@/components/CreativePortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrainingSection } from "@/components/TrainingSection";
import { ClientTestimonialsSection } from "@/components/ClientTestimonialsSection";
import { FounderGallerySection } from "@/components/FounderGallerySection";
import { AboutSection } from "@/components/AboutSection";
import { MerlinflowSection } from "@/components/MerlinflowSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] overflow-x-hidden relative">
      {/* Global Animated Background System */}
      <BackgroundEffects />

      {/* Hero Section • HIMASTECH — Digital Realty Marketing */}
      {/* Hero Section • HIMASTECH — Digital Realty Marketing */}
      <section id="home" className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center justify-start pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden z-10">
        
        {/* Background Layer: Founder & Cinematic Skyline Ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Ambient City & Villa Backdrop on Left */}
          <Image 
            src="/realty-hero.jpg" 
            alt="Himastech Digital Realty Marketing - Cinematic Hyderabad Skyline and Luxury Villa Project" 
            fill 
            priority 
            sizes="100vw"
            className="object-cover object-left opacity-20 sm:opacity-30"
          />

          {/* Founder Background Image on Right Side */}
          <div className="absolute top-0 bottom-0 right-0 w-full sm:w-[65%] lg:w-[48%] h-full">
            <Image
              src="/founder.jpeg"
              alt="Kishore Patel - Founder of Himastech Digital Realty Marketing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top sm:object-[top_center] opacity-55 sm:opacity-75 lg:opacity-90"
            />
            {/* Directional blend gradients around the founder image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/60 to-transparent lg:via-[#07090e]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/60 via-transparent to-[#07090e]" />
          </div>

          {/* Calibrated Directional Gradients for Maximum Visual Impact & Crystal Sharp Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/80 via-transparent to-[#07090e]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl lg:max-w-3xl text-left flex flex-col items-start">
            
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
                HIMASTECH — Digital Realty Marketing • Digital + AI Solutions
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black border border-amber-400/30">
                REAL ESTATE &amp; BUSINESS GROWTH
              </span>
            </motion.div>

            {/* Founder Authority Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-subcard text-amber-300 text-xs font-bold mb-4 border border-amber-400/30"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Founded &amp; Led by Kishore Patel • 12+ Years Real Estate &amp; Growth Experience</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight mb-4 leading-[1.12] text-white"
            >
              <span>BUILD YOUR BRAND. </span>
              <span className="text-gold-gradient block sm:inline">
                GENERATE LEADS. 
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
                <span>BOOK FREE CONSULTATION</span> 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20let's%20talk%20about%20our%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> 
                <span>WHATSAPP HIMASTECH</span> 
              </a>

              {/* Link to Founder Moments Gallery */}
              <Link
                href="#gallery"
                className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Founder Gallery</span>
              </Link>
            </motion.div>

            {/* Proof / Trust Metrics */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 font-semibold w-full">
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> ₹480Cr+ Real Estate Sold
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

      {/* 2.5 Live Performance & Campaign Telemetry Dashboard */}
      <MarketingDashboardSection />

      {/* 3. Real Estate Marketing • 12 Core Capabilities */}
      <RealEstateMarketingSection />

      {/* 5. AI Marketing • AI + Marketing = Your New Growth Engine */}
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

      {/* 9. Genuine Client Testimonials (100% Genuine with Client Photos & Logos) */}
      <ClientTestimonialsSection />

      {/* 10. Founder & Agency Moments Photo Gallery */}
      <FounderGallerySection />

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

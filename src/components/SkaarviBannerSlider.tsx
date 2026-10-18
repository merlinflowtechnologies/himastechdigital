"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Award,
  Layers,
  GraduationCap
} from "lucide-react";

export interface BannerSlide {
  id: string;
  tagline?: string;
  welcomeText?: string;
  brandName?: string;
  ribbonText?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  accentColor?: string;
}

export function SkaarviBannerSlider() {
  // Duplicate banners array as requested - user can update or replace these easily later
  const banners: BannerSlide[] = [
    {
      id: "banner-1",
      welcomeText: "Welcome to",
      brandName: "Himastech",
      ribbonText: "Real Estate Funnels & Marketing Automation",
      subtitle: "Live Whiteboard Strategy with Real Estate Developers & Builders",
      imageSrc: "/himastech-funnel-whiteboard.jpg",
      imageAlt: "Kishore Patel Whiteboard Funnel Strategy Session",
      accentColor: "#e59800"
    },
    {
      id: "banner-2",
      welcomeText: "Empower Your Career with",
      brandName: "Himastech",
      ribbonText: "100% Practical Telugu Masterclasses",
      subtitle: "Massive Live Cohorts • Hands-on Digital Implementation",
      imageSrc: "/himastech-auditorium-cohort.jpg",
      imageAlt: "HIMASTECH Live Training Cohort in Auditorium",
      accentColor: "#0a2550"
    },
    {
      id: "banner-3",
      welcomeText: "Scale High-Ticket Properties with",
      brandName: "Himastech",
      ribbonText: "Corporate Boardroom Strategy & Consulting",
      subtitle: "₹10Cr+ Real Estate Deals Closed • SGD Developers Consultation",
      imageSrc: "/himastech-boardroom-meeting.jpg",
      imageAlt: "HIMASTECH Executive Real Estate Boardroom Session",
      accentColor: "#be1e2d"
    },
    {
      id: "banner-4",
      welcomeText: "Master Digital Marketing & Automation with",
      brandName: "Himastech",
      ribbonText: "Executive Mentorship by Kishore Patel",
      subtitle: "Meta Ads • WhatsApp Automation • Direct Sales Systems",
      imageSrc: "/himastech-masterclass-presentation.jpg",
      imageAlt: "Kishore Patel Presenting Live Digital Marketing & Automation Masterclass",
      accentColor: "#059669"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  // Skill app icons as shown in screenshot
  const skillIcons = [
    { name: "Design", bg: "bg-purple-600", text: "Ai" },
    { name: "Funnels", bg: "bg-cyan-600", text: "▼" },
    { name: "Affiliate", bg: "bg-emerald-600", text: "🤝" },
    { name: "Instagram", bg: "bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600", text: "IG" },
    { name: "Canva", bg: "bg-sky-500", text: "C" },
    { name: "CapCut", bg: "bg-slate-900", text: "✂" },
    { name: "YouTube", bg: "bg-red-600", text: "▶" },
    { name: "Meesho", bg: "bg-teal-600", text: "🛍" },
    { name: "Facebook", bg: "bg-blue-600", text: "f" },
    { name: "Certificate", bg: "bg-emerald-700", text: "🎓" },
  ];

  const currentBanner = banners[currentIndex];

  return (
    <div 
      className="relative w-full bg-white overflow-hidden border-b border-slate-200 select-none z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Swooshes matching screenshot */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <svg 
          className="absolute -top-10 left-1/4 w-[750px] h-[400px] text-blue-600/15" 
          viewBox="0 0 600 300" 
          fill="none"
        >
          <path d="M0,180 C150,80 350,260 600,60" stroke="#062d72" strokeWidth="4" strokeDasharray="6 6" />
          <path d="M0,220 C200,90 400,280 600,100" stroke="#f15a22" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] md:min-h-[440px]"
          >
            {/* Left Column: Skaarvi Branding & Typography */}
            <div className="lg:col-span-5 flex flex-col items-start z-10 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xl">
              
              {/* Himastech Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0">
                  <Image 
                    src="/logo-icon.png" 
                    alt="HIMASTECH Logo" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl sm:text-3xl tracking-tight text-[#e59800] leading-none">
                    HIMASTECH
                  </span>
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#be1e2d] mt-1">
                    Digital Realty Marketing
                  </span>
                </div>
              </div>

              {/* Script Subtitle */}
              <div className="font-serif italic text-2xl sm:text-3xl text-[#062d72] tracking-wide mb-1">
                {currentBanner.welcomeText}
              </div>

              {/* Huge Bold Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-[4.2rem] font-black text-[#062d72] tracking-tight leading-none mb-4">
                {currentBanner.brandName}
              </h1>

              {/* Angled Ribbon "Skills that Build Success" */}
              <div className="relative inline-block mb-6 shadow-md shadow-orange-500/20">
                <div className="bg-gradient-to-r from-[#f15a22] to-[#ff733b] text-white px-5 sm:px-6 py-2 rounded-md font-extrabold text-sm sm:text-base tracking-wide flex items-center gap-2">
                  <span>{currentBanner.ribbonText}</span>
                </div>
              </div>

              {/* App / Tool Circular Icons Row */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
                {skillIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    title={icon.name}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${icon.bg} text-white flex items-center justify-center text-[10px] sm:text-xs font-black shadow-sm transition-transform hover:scale-115 cursor-pointer`}
                  >
                    <span>{icon.text}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Leadership Summit Group Photo */}
            <div className="lg:col-span-7 relative z-10 flex justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <div className="relative aspect-video w-full">
                  <Image 
                    src={currentBanner.imageSrc} 
                    alt={currentBanner.imageAlt} 
                    fill 
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  {/* Summit Pill Badge on Photo */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-bold flex items-center gap-1.5 border border-white/20">
                      <Award className="w-3.5 h-3.5 text-[#f15a22]" />
                      <span>HIMASTECH Community • 1,000+ Learners</span>
                    </div>
                    <span className="hidden sm:inline bg-[#f15a22] px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                      Hyderabad Cohort
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrow: Previous (Left) */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg flex items-center justify-center transition-all cursor-pointer z-20 hover:scale-110 border border-slate-200"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#062d72]" />
      </button>

      {/* Navigation Arrow: Next (Right) */}
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg flex items-center justify-center transition-all cursor-pointer z-20 hover:scale-110 border border-slate-200"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 text-[#062d72]" />
      </button>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 transition-all rounded-full cursor-pointer ${
              currentIndex === idx 
                ? "w-8 bg-[#f15a22]" 
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

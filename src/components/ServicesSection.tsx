"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { 
  Share2,
  Search, 
  Target, 
  TrendingUp,
  Laptop,
  Layout,
  Palette,
  Video,
  FileText,
  MessageCircle,
  Mail,
  Cpu,
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  X,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { allServices, ServiceItem } from "@/data/servicesData";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [mounted, setMounted] = useState(false);

  // Drag Carousel State & Controls
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const isDraggingRef = useRef(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    isDraggingRef.current = false;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 6) {
      isDraggingRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftState - walk;
    updateScrollState();
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isMouseDown) {
        setIsMouseDown(false);
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 60);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isMouseDown]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = Math.min(sliderRef.current.clientWidth * 0.75, 420);
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const services = allServices;

  return (
    <section id="services" className="flex flex-col w-full py-20 lg:py-28 bg-transparent border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Background Volumetric Flares */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black mb-3.5 shadow-xs"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Digital Marketing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            Everything Your Business <br className="hidden sm:block" />
            <span className="text-gold-gradient">Needs to Grow Online.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            From high-conversion paid acquisition and AI-powered search optimization to sub-second websites, viral videos, and automated lead nurturing funnels.
          </motion.p>
        </div>

        {/* Interactive Draggable Carousel Controller Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold shadow-xs">
              <MoveHorizontal className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Drag or swipe horizontally to explore all 12 services</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              12 Capabilities
            </span>
          </div>

          {/* Navigation Chevron Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? "bg-white/5 hover:bg-amber-400/20 text-slate-200 hover:text-amber-300 border-white/15 hover:border-amber-400/40 shadow-sm active:scale-95"
                  : "bg-white/5 text-slate-600 border-white/5 cursor-not-allowed opacity-40"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next service"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? "bg-white/5 hover:bg-amber-400/20 text-slate-200 hover:text-amber-300 border-white/15 hover:border-amber-400/40 shadow-sm active:scale-95"
                  : "bg-white/5 text-slate-600 border-white/5 cursor-not-allowed opacity-40"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 12 Services Draggable Horizontal Showcase Track */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onScroll={updateScrollState}
          className={`flex gap-5 sm:gap-6 overflow-x-auto py-3 px-1 no-scrollbar select-none mb-6 touch-pan-x ${
            isMouseDown ? "snap-none cursor-grabbing" : "snap-x snap-mandatory cursor-grab"
          }`}
        >
          {services.map((service, index) => {
            const IconComp = service.icon;
            const numStr = String(index + 1).padStart(2, "0");
            return (
              <div 
                key={index}
                onClick={() => {
                  if (!isDraggingRef.current) {
                    setSelectedService(service);
                  }
                }}
                className="w-[305px] sm:w-[345px] md:w-[375px] shrink-0 snap-start glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-amber-400/50 shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)] flex flex-col justify-between group relative overflow-hidden cursor-pointer"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.accent} rounded-bl-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Top Row: Icon, Service Index, Impact Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform text-amber-400">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black text-amber-400/50 group-hover:text-amber-400/80 transition-colors font-mono">
                        #{numStr}
                      </span>
                    </div>

                    <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                      <TrendingUp className="w-3 h-3 text-emerald-400" /> {service.impact}
                    </span>
                  </div>

                  {/* Title & Category Badge */}
                  <div className="mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                      {service.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-3.5 border-t border-white/10">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-tight truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isDraggingRef.current) setSelectedService(service);
                    }}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors group/link cursor-pointer"
                  >
                    <span>View Playbook</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href={`/services/${service.slug}`}
                    onClick={(e) => {
                      if (isDraggingRef.current) e.preventDefault();
                    }}
                    className="text-[10px] text-cyan-300 hover:text-cyan-200 font-bold bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
                  >
                    Full Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Glowing Progress Indicator Bar */}
        <div className="flex flex-col items-center justify-center gap-2 mb-14">
          <div className="w-64 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full transition-all duration-150"
              style={{ width: `${Math.max(12, scrollProgress)}%` }}
            />
          </div>
          <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
            <span>←</span> Drag or swipe horizontally to see all 12 services <span>→</span>
          </span>
        </div>

      </div>

      {/* ----------------- INTERACTIVE STRATEGY DEEP-DIVE MODAL ----------------- */}
      {mounted && selectedService && createPortal(
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null);
          }}
          className="fixed inset-0 z-[9999999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xl overflow-y-auto"
        >
          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl rounded-3xl bg-[#090d16] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden relative my-auto max-h-[90vh] flex flex-col text-slate-100"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-white/5 flex items-start justify-between relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-0.5">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  Strategy Overview
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {selectedService.description}
                </p>
              </div>

              {/* 4-Step Playbook */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" /> Tactical Execution Playbook
                </h4>
                <div className="space-y-2.5">
                  {selectedService.playbook.map((step, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-black flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white mb-0.5">{step.title}</div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
                  Production Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Deployment Timeline</div>
                  <div className="text-xs font-bold text-white mt-0.5">{selectedService.deliverables.timeline}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Reporting Cadence</div>
                  <div className="text-xs font-bold text-white mt-0.5">{selectedService.deliverables.reporting}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Dedicated Pod</div>
                  <div className="text-xs font-bold text-white mt-0.5">{selectedService.deliverables.teamPod}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Quality Guarantee</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">{selectedService.deliverables.guarantee}</div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-medium">
                Want this strategy installed for your business?
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <Link
                  href={`/services/${selectedService.slug}`}
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Full Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </motion.div>
        </div>,
        document.body
      )}

    </section>
  );
}

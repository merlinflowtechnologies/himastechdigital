"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Sliders, 
  Zap, 
  TrendingUp, 
  ShieldAlert, 
  ShieldCheck, 
  Eye, 
  MessageCircle,
  Clock,
  Layers
} from "lucide-react";

export function BeforeAfterCreativeSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const onMouseMove = (e: globalThis.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const onTouchMove = (e: globalThis.TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };
    const onStop = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onStop);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onStop);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onStop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onStop);
    };
  }, [isDragging]);

  const comparisonPoints = [
    {
      metric: "Targeting & Reach",
      before: "Untargeted street traffic & casual highway drivers",
      after: "Hyper-local geo-fencing + Meta/Google AI targeting verified HNI & NRI buyers",
    },
    {
      metric: "Lead Qualification",
      before: "Zero filtering; 80%+ casual callers and brokers",
      after: "Multi-step interactive qualification, budget screening & OTP phone verification",
    },
    {
      metric: "Speed to Lead",
      before: "Delayed 24-48 hour manual call backs by front desk",
      after: "Instant 60-second automated WhatsApp brochure drop & calendar site visit booking",
    },
    {
      metric: "Measurable ROI",
      before: "Zero attribution; no idea which hoarding produced sales",
      after: "Real-time CAPI telemetry tracking cost per verified lead and booked site visit",
    },
  ];

  return (
    <section id="creative-transformation" className="w-full py-20 lg:py-28 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-4 text-xs font-extrabold uppercase tracking-widest shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Campaign Transformation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight"
          >
            <span>The Transformation: </span>
            <span className="text-gold-gradient">Flat Poster </span>
            <span>vs. </span>
            <span className="text-electric-gradient">Digital Realty Engine</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium"
          >
            Your project deserves more than a flat hoarding on a busy junction. Slide to compare what traditional agencies settle for versus how Himastech builds your digital conversion machine.
          </motion.p>
        </div>

        {/* Interactive Before/After Visual Slider Container */}
        <div className="relative max-w-5xl mx-auto mb-12">
          
          {/* Quick Guidance Instructions */}
          <div className="flex items-center justify-between px-2 mb-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-bold text-rose-400 uppercase tracking-wider text-[11px]">
              <XCircle className="w-4 h-4 text-rose-400" /> Before: Traditional Flat Poster
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400 text-[11px] font-semibold">
              <Sliders className="w-3.5 h-3.5 text-amber-400" /> Drag slider left or right to inspect
            </span>
            <span className="flex items-center gap-1.5 font-bold text-cyan-400 uppercase tracking-wider text-[11px]">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> After: Himastech AI Funnel
            </span>
          </div>

          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            className="relative h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden select-none border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] cursor-ew-resize group"
          >
            {/* 1. AFTER LAYER (Full background underneath) */}
            <div className="absolute inset-0 w-full h-full bg-[#080d19]">
              <Image
                src="/luxury-villa.jpg"
                alt="Himastech Digital Realty Engine - Luxury Villa Project with Holographic Analytics"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-transparent to-black/40" />

              {/* After Badges & HUD Overlays */}
              <div className="absolute top-5 right-5 z-10 flex flex-col items-end gap-2">
                <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md text-cyan-300 border border-cyan-400/40 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Himastech Digital Realty Engine
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-400/20 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-extrabold uppercase">
                  ⚡ 8.4x Real Estate ROAS
                </span>
              </div>

              {/* Bottom Feature Pill Row on After Side */}
              <div className="absolute bottom-5 right-5 z-10 hidden sm:flex flex-col items-end gap-1.5 text-right">
                <div className="px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-cyan-400/30 text-white text-xs font-bold flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant WhatsApp 60-Sec Lead Qualifier</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-bold flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  <span>₹120Cr+ Inventory Funnel Active</span>
                </div>
              </div>
            </div>

            {/* 2. BEFORE LAYER (Clipped by slider position) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[700px] md:min-w-[900px] bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                
                {/* Traditional Billboard Simulation */}
                <div className="max-w-md w-full p-6 sm:p-8 rounded-2xl bg-zinc-900 border-2 border-dashed border-rose-500/40 shadow-2xl relative">
                  <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider">
                    Traditional Static Hoarding
                  </div>

                  <div className="text-xl sm:text-2xl font-black text-slate-300 tracking-wider uppercase mb-2">
                    LUXURY 3BHK & 4BHK APARTMENTS FOR SALE
                  </div>
                  <div className="text-xs text-slate-400 mb-4 font-mono">
                    Kokapet • Gachibowli • Call: 98480XXXXX
                  </div>

                  <div className="py-3 px-4 rounded-xl bg-black/40 border border-white/5 mb-4 text-left space-y-1.5 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2 text-rose-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" /> Zero audience targeting (wasted highway gaze)
                    </div>
                    <div className="flex items-center gap-2 text-rose-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" /> No instant WhatsApp or brochure link
                    </div>
                    <div className="flex items-center gap-2 text-rose-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" /> Delayed manual follow-ups (cold leads)
                    </div>
                    <div className="flex items-center gap-2 text-rose-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" /> Impossible to track ROAS or buyer source
                    </div>
                  </div>

                  <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                    ⚠️ 82% Bounce • High Cost per Acquisition
                  </div>
                </div>

                {/* Left Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-rose-500/20 backdrop-blur-md text-rose-300 border border-rose-400/40 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Traditional Flat Poster
                  </span>
                </div>
              </div>
            </div>

            {/* 3. DRAGGABLE DIVIDER HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-white to-cyan-400 cursor-ew-resize z-20 shadow-[0_0_20px_rgba(245,158,11,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.6)] flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Quick Slider Position Controller */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setSliderPosition(20)}
              className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              Inspect Poster (Left)
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 transition-colors"
            >
              Split View (50/50)
            </button>
            <button
              onClick={() => setSliderPosition(80)}
              className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              Inspect Himastech (Right)
            </button>
          </div>

        </div>

        {/* 4-Pillar Comparison Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {comparisonPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-5 border border-white/10 relative overflow-hidden"
            >
              <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.metric}</span>
              </div>

              {/* Before item */}
              <div className="mb-3 pb-3 border-b border-white/10">
                <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-rose-400" /> Traditional Poster
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.before}
                </p>
              </div>

              {/* After item */}
              <div>
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Himastech Engine
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  {item.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section Action Bar */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-400/30 shadow-[0_15px_40px_rgba(245,158,11,0.12)]">
          <div className="text-left max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 mb-1 block">
              Transform Your Project Marketing Today
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              Ready to replace flat hoardings with a high-conversion digital engine?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an agency audit of your current project creatives, ad hooks, and landing page conversion rates with our direct response team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>UPGRADE MY PROJECT MARKETING CREATIVES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Zap, 
  PhoneCall,
  Star
} from "lucide-react";

export function PowerfulCtaSection() {

  return (
    <section className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-20">
      
      {/* Background radial gradients for high-end cinematic ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/15 via-cyan-500/15 to-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#0e1424] via-[#090d16] to-[#07090e] border-2 border-amber-400/30 p-8 sm:p-12 lg:p-16 text-center shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Subtle Top Gold Highlight Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none" />

          {/* Eyebrow: Pulsing Beacon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/35 text-amber-300 text-xs sm:text-sm font-black tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            <span>READY TO GROW?</span>
          </div>

          {/* Core Powerful Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
            <span>Your competitors are already building their digital presence. </span>
            <span className="block mt-2 text-gold-gradient drop-shadow-[0_2px_20px_rgba(245,158,11,0.3)]">
              Let&apos;s build yours.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
            Stop losing qualified buyers and high-ticket site visits to competing builders and agencies. Partner directly with Kishore Patel and Himastech to deploy hyper-local ad engines, Meta CAPI tracking, and high-conversion sales systems.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 w-full sm:w-auto">
            
            {/* Primary Action Button */}
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(245,158,11,0.55)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] hover:scale-105 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>GET FREE GROWTH AUDIT</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="#services"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/10 hover:bg-white/15 text-white font-black text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:scale-105 transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-md"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1.5 transition-transform" />
            </Link>

          </div>

          {/* Trust Guarantees & Reassurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10 text-xs text-slate-300 font-semibold mb-8">
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>30-Min Strategy Audit</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Confidential &amp; Zero Spam</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/10">
              <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Real Estate &amp; Enterprise Focus</span>
            </div>
          </div>

          {/* Client Social Proof Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 text-xs text-slate-400">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="font-bold text-white text-xs ml-1.5">5.0 / 5.0 Rating</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="font-medium text-slate-300">
              Trusted by Managing Directors, Developers &amp; Founders across Hyderabad
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

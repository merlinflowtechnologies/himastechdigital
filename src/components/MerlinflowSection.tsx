"use client";

import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare, 
  BarChart3, 
  Globe2,
  Sparkles,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function MerlinflowSection() {
  const advantages = [
    {
      icon: Zap,
      title: "Real-Time Cloud Sync",
      desc: "Zero-lag synchronization across desktop, tablet, and mobile devices."
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Access",
      desc: "Granular administrative permissions with bank-grade encryption."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      desc: "Responsive web & native mobile interfaces built for fast frontline execution."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & SMS Alerts",
      desc: "Automated event triggers, instant receipts, and operational alerts via WhatsApp."
    },
    {
      icon: BarChart3,
      title: "Visual Intelligence",
      desc: "Executive analytics dashboards for real-time revenue and performance telemetry."
    },
    {
      icon: Globe2,
      title: "India-Ready Compliance",
      desc: "Native GST invoices, UPI QR payments, Aadhaar verification, and multi-language support."
    },
  ];

  return (
    <section id="merlinflow" className="flex flex-col w-full py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-xs uppercase tracking-wider font-bold mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Strategic Technology Alliance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.15]"
          >
            In Strategic Collaboration With <br />
            <span className="text-electric-gradient">
              Merlinflow Technologies Private Limited
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Empowering institutions and modern enterprises with next-generation cloud SaaS ERP solutions, automated operational workflows, and intelligent software infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/merlinflow"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold transition-all hover:scale-105 shadow-[0_0_25px_rgba(6,182,212,0.35)] border border-cyan-400/30 cursor-pointer"
            >
              <span>Explore Tech Portfolio (6 Suites)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.merlinflow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-bold transition-all hover:scale-105 shadow-sm group cursor-pointer"
            >
              <span>Visit merlinflow.in</span>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Platform Advantages Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="mb-8 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
              Enterprise Foundation
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-2">
              Why Forward-Thinking Enterprises Choose Merlinflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl font-medium">
              Every system in the Merlinflow suite is built on a shared, unified architecture engineered for 99.9% uptime, data privacy, and frictionless daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div 
                  key={idx}
                  className="glass-subcard p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <AdvIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{adv.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified CTA Footer Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping hidden sm:block shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Looking to modernize your institution or enterprise ERP? <strong className="text-white font-bold">Partner with Himastech & Merlinflow</strong> for integrated tech and growth solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.merlinflow.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-all cursor-pointer border border-cyan-400/30"
              >
                <span>Discover Merlinflow OS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="#contact"
                className="py-2.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-xs transition-all hover:scale-105 cursor-pointer shadow-sm"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

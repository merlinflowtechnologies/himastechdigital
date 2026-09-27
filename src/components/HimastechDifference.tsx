"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Eye, 
  TrendingUp, 
  Target, 
  Compass, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export function HimastechDifference() {
  const pipelineSteps = [
    { num: "01", name: "ATTENTION", sub: "HNI Visibility", color: "from-amber-400 to-yellow-500", text: "text-amber-400" },
    { num: "02", name: "ENGAGEMENT", sub: "Emotional Hook", color: "from-cyan-400 to-blue-500", text: "text-cyan-400" },
    { num: "03", name: "LEADS", sub: "Verified Inquiries", color: "from-amber-300 to-yellow-400", text: "text-amber-300" },
    { num: "04", name: "SALES", sub: "Site Visits & Closes", color: "from-cyan-300 to-sky-400", text: "text-cyan-300" },
    { num: "05", name: "GROWTH", sub: "Predictable Scale", color: "from-emerald-400 to-teal-400", text: "text-emerald-400" },
  ];

  const pillars = [
    {
      step: "STAGE 01",
      title: "Attract",
      subtitle: "Reach the right audience.",
      description: "We don't burn budgets on vanity reach. We deploy hyper-targeted Meta & Google ad funnels calibrated to high-net-worth real estate buyers, off-plan investors, and serious consumers.",
      icon: Eye,
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      badgeColor: "bg-amber-400/15 text-amber-300 border-amber-400/30",
      iconColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      points: [
        "Hyper-Local Kokapet & Hyderabad Geo-Fencing",
        "Meta Broad AI & Advantage+ HNI Calibration",
        "High-Intent Google Search & P-Max Domination",
        "Generative AI Search (GEO) Perplexity & SGE Visibility"
      ],
      metric: "99.4% Targeted Accuracy"
    },
    {
      step: "STAGE 02",
      title: "Engage",
      subtitle: "Turn attention into enquiries.",
      description: "Passive browsing doesn't close property deals. We engineer high-retention architectural video hooks, cinematic drone walkthroughs, and sub-second landing pages that compel action.",
      icon: Compass,
      accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
      badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
      points: [
        "Cinematic Luxury Villa & High-Rise Visuals",
        "Psychology-Driven 3-Second Scroll-Stopping Hooks",
        "Sub-Second High-Speed Mobile Landing Pages",
        "Interactive Floorplan & Virtual Tour Capture"
      ],
      metric: "3.2x Higher CTR & Retention"
    },
    {
      step: "STAGE 03",
      title: "Convert",
      subtitle: "Support the sales process.",
      description: "A lead left waiting is a lost booking. We automate instant WhatsApp lead routing within 30 seconds, pre-qualify buyer budgets via AI, and equip your closing team to convert site visits into sales.",
      icon: Zap,
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
      iconColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      points: [
        "Instant <30s WhatsApp Notification to Sales Pods",
        "Automated AI Chatbot Budget & Intent Qualification",
        "Real-Time Meta CAPI Server Data Telemetry",
        "High-Ticket Closing Scripts & CRM Synchronization"
      ],
      metric: "+180% Qualified Site Visits"
    }
  ];

  return (
    <section id="difference" className="py-20 sm:py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Himastech Difference</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            Not Just Marketing. <br className="hidden sm:block" />
            <span className="text-gold-gradient">
              We Build Your Digital Growth System.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Traditional agencies stop at clicks. We engineer the complete revenue pipeline that turns online attention into booked site visits and closed real estate transactions.
          </motion.p>
        </div>

        {/* The 5-Stage Core Pipeline Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 sm:mb-16"
        >
          <div className="glass-card rounded-3xl p-4 sm:p-6 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
            <div className="text-center mb-4">
              <span className="text-[11px] font-bold text-amber-400/80 uppercase tracking-widest">
                The Compounding Revenue Blueprint
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2 items-center">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-full text-center p-3 rounded-2xl glass-subcard hover:border-amber-400/40 transition-all hover:scale-105 shadow-2xs group">
                    <div className="text-[10px] font-black text-slate-400 mb-0.5">{step.num}</div>
                    <div className={`text-xs sm:text-sm font-black tracking-tight ${step.text} group-hover:scale-105 transition-transform`}>
                      {step.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                      {step.sub}
                    </div>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center px-1 text-slate-600">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3 Core Pillars Bento Grid: Attract • Engage • Convert */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-white/10 hover:border-amber-400/50 shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Background Ambient Flare */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.accent} rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

                <div>
                  {/* Top Badge & Metric Row */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {pillar.step}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/40 shadow-2xs">
                      {pillar.metric}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform ${pillar.iconColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-bold text-cyan-400">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Micro-CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                  >
                    <span>Implement {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-semibold">Done-For-You SLA</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom System Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl glass-card-gold text-white relative overflow-hidden border border-amber-400/30 shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
        >
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-400/40">
                <Sparkles className="w-3 h-3 text-amber-400" /> Complete Growth System
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1.5">
                Ready To Automate Your Real Estate Lead Pipeline?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-medium">
                Let our senior growth strategists audit your project funnels and install the 3-stage Attract • Engage • Convert framework.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wide hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </Link>
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%20team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20Digital%20Growth%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wide transition-all border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>Talk To Strategist</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

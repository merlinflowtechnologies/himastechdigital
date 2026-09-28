"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  FileText, 
  Video, 
  Palette, 
  Target, 
  Bot, 
  ArrowRight, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  MessageSquare,
  Activity,
  Layers
} from "lucide-react";
import Link from "next/link";

export function AIMarketingSection() {
  const aiPillars = [
    {
      num: "01",
      title: "AI Content Creation",
      tagline: "Hyper-Velocity Copy & SEO",
      description: "Generate high-converting sales copy, localized property articles, and generative SEO (GEO) content tuned for Perplexity, ChatGPT, and Google SGE in seconds.",
      icon: FileText,
      accent: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-500/10 text-cyan-600 border-cyan-200/80",
      points: [
        "Generative Search Optimization (GEO) Content",
        "Multilingual NRI Copy Variations (Telugu, Hindi, English)",
        "Direct-Response Video Scripts & Ad Copy"
      ],
      stat: "10x Production Speed",
    },
    {
      num: "02",
      title: "AI Video Marketing",
      icon: Video,
      tagline: "Automated 4K Property Reels",
      description: "Transform raw footage into viral Instagram Reels and YouTube Shorts with AI voiceovers, dynamic captions, drone enhancements, and auto-translated audio.",
      accent: "from-indigo-500 to-purple-500",
      bgGlow: "bg-indigo-500/10 text-indigo-600 border-indigo-200/80",
      points: [
        "Automated Subtitles & Visual Hook Triggers",
        "AI Voiceover in Multiple Indian & Global Dialects",
        "Instant Cut-Downs of Long Architectural Tours"
      ],
      stat: "3.4x Higher Video Retention",
    },
    {
      num: "03",
      title: "AI Creative Design",
      icon: Palette,
      tagline: "Algorithmic Multivariate Ad Sets",
      description: "Scale from 3 to 30+ creative variations weekly. Automatically generate high-CTR property banners, virtual interior staging, and scroll-stopping visual interrupts.",
      accent: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10 text-purple-600 border-purple-200/80",
      points: [
        "Virtual Staging of Unfurnished Project Renders",
        "Dynamic Carousel & Story Ad Generator",
        "A/B Multivariate Visual Asset Testing"
      ],
      stat: "+85% Click-Through Rate",
    },
    {
      num: "04",
      title: "AI Lead Generation",
      icon: Target,
      tagline: "Predictive Buyer Intent Modeling",
      description: "Leverage machine learning algorithms to pinpoint high-income individuals actively researching luxury homes, plots, and commercial real estate.",
      accent: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-500/10 text-emerald-600 border-emerald-200/80",
      points: [
        "Predictive HNI Behavioral Targeting",
        "Server-Side Meta CAPI Conversion Telemetry",
        "Automated Algorithmic Bid Scaling"
      ],
      stat: "-42% Cost Per Qualified Lead",
    },
    {
      num: "05",
      title: "AI Sales Support",
      icon: Bot,
      tagline: "24/7 Autonomous Lead Qualification",
      description: "Deploy intelligent WhatsApp & website AI agents that qualify buyer budgets, answer project specifications, and schedule direct site visits in seconds.",
      accent: "from-rose-500 to-pink-500",
      bgGlow: "bg-rose-500/10 text-rose-600 border-rose-200/80",
      points: [
        "Sub-10s WhatsApp Autonomous Lead Responses",
        "Automated Budget, Location & Timeline Screening",
        "Seamless Handoff to Human Real Estate Agents"
      ],
      stat: "100% Zero Lead Drop-Off",
    },
  ];

  return (
    <section id="ai-marketing" className="py-20 sm:py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs uppercase tracking-widest font-black mb-3.5 shadow-xs"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Marketing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            AI + Marketing ={" "}
            <span className="text-electric-gradient">
              Your New Growth Engine
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Harness next-generation artificial intelligence to produce creative 10x faster, qualify high-ticket buyers automatically, and out-scale competitors with algorithmic precision.
          </motion.p>
        </div>

        {/* 5 AI Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-14">
          {aiPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle Hover Gradient Flare */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${pillar.accent} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Top Bar with Number & Stat Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-full shadow-2xs">
                      {pillar.stat}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-2.5">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-0.5">
                      Module {pillar.num}
                    </span>
                    <h3 className="text-xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-cyan-400 mt-0.5">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {pillar.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="pt-3.5 border-t border-white/10 space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors group/link cursor-pointer"
                  >
                    <span>Activate {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-semibold">AI Powered</span>
                </div>

              </motion.div>
            );
          })}

          {/* 6th Card: Live AI Telemetry Node Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl p-6 sm:p-7 glass-card-cyan text-white shadow-xl flex flex-col justify-between relative overflow-hidden border border-cyan-400/30"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/20 to-indigo-500/20 rounded-bl-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  Live Engine
                </span>
              </div>

              <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest block mb-0.5">
                Next-Gen Stack
              </span>
              <h3 className="text-xl font-black tracking-tight text-white mb-2">
                Automated Growth Engine
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Combine Meta CAPI, Generative AI Search, and WhatsApp automated bots into a synchronized 24/7 revenue machine.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-400">Content Speed</span>
                  <strong className="text-cyan-300 font-bold">10x Faster</strong>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-400">Attribution Match</span>
                  <strong className="text-emerald-400 font-bold">99.4% Accurate</strong>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-400">Lead Response</span>
                  <strong className="text-amber-300 font-bold">&lt;10 Seconds</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
              <Link
                href="#contact"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Deploy AI Engine</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </Link>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

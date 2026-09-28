"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Palette, 
  Rocket, 
  Activity, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export function ProcessSection() {
  const steps = [
    {
      stepNumber: "01",
      stepBadge: "STEP 01",
      name: "DISCOVER",
      summary: "Understand the business, audience and goals.",
      description: "We dive deep into your market positioning, analyze competitor ad funnels, profile high-intent buyer personas, and map out clear revenue targets.",
      icon: Search,
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      badgeColor: "bg-amber-400/15 text-amber-300 border-amber-400/30",
      iconColor: "text-amber-400",
      deliverables: [
        "Business Goals & Revenue Alignment",
        "Competitor Ad & Keyword Intel Audit",
        "Ideal Buyer Persona (HNI/B2B) Mapping",
        "Current Funnel & Telemetry Diagnostics"
      ]
    },
    {
      stepNumber: "02",
      stepBadge: "STEP 02",
      name: "STRATEGIZE",
      summary: "Create a customized digital marketing strategy.",
      description: "No generic templates. We build an omnichannel growth blueprint calibrated to your specific audience across paid ads, SEO, and conversion funnels.",
      icon: Target,
      accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
      badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
      iconColor: "text-cyan-400",
      deliverables: [
        "Custom Multi-Channel Growth Plan",
        "Attract • Engage • Convert Funnel Map",
        "Budget Allocation & ROAS Forecast",
        "Server-Side CAPI Tracking Architecture"
      ]
    },
    {
      stepNumber: "03",
      stepBadge: "STEP 03",
      name: "CREATE",
      summary: "Develop content, creatives, videos and campaigns.",
      description: "Our direct-response studio crafts scroll-stopping visual creatives, produces cinematic 4K video hooks, writes high-converting copy, and builds sub-second landing pages.",
      icon: Palette,
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
      badgeColor: "bg-amber-400/15 text-amber-300 border-amber-400/30",
      iconColor: "text-amber-400",
      deliverables: [
        "Scroll-Stopping Direct-Response Ad Creatives",
        "4K Cinematic Videos & Viral Short Hooks",
        "Sub-Second Mobile Landing Pages",
        "Interactive WhatsApp Automation Chatbots"
      ]
    },
    {
      stepNumber: "04",
      stepBadge: "STEP 04",
      name: "LAUNCH",
      summary: "Launch targeted digital campaigns.",
      description: "We deploy synchronized campaigns across Meta, Google Search, Performance Max, YouTube, and hyper-local geo-fences with real-time conversion tracking live.",
      icon: Rocket,
      accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
      badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
      iconColor: "text-cyan-400",
      deliverables: [
        "Advantage+ AI & Broad Audience Setup",
        "High-Intent Google Search & P-Max Launch",
        "Hyper-Local Kokapet & City Geo-Fencing",
        "Real-Time Telemetry Reporting Dashboard"
      ]
    },
    {
      stepNumber: "05",
      stepBadge: "STEP 05",
      name: "OPTIMIZE",
      summary: "Monitor and improve performance.",
      description: "Continuous 24/7 campaign analysis: algorithmic bid pacing, killing fatigue ads, lowering cost per qualified lead, and optimizing conversion rates.",
      icon: Activity,
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      badgeColor: "bg-amber-400/15 text-amber-300 border-amber-400/30",
      iconColor: "text-amber-400",
      deliverables: [
        "24/7 Algorithmic Bid & Budget Pacing",
        "A/B Split Testing for Hooks & Headlines",
        "Lead Quality & Phone OTP Verification",
        "Weekly Executive Performance Audits"
      ]
    },
    {
      stepNumber: "06",
      stepBadge: "STEP 06",
      name: "GROW",
      summary: "Scale strategies that are working.",
      description: "Once proven, we pump aggressive budget into winning campaigns, expand into lookalike audiences, and compound your monthly revenue and market authority.",
      icon: TrendingUp,
      accent: "from-cyan-500/20 via-emerald-500/10 to-transparent",
      badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
      iconColor: "text-cyan-400",
      deliverables: [
        "Aggressive Horizontal & Vertical Ad Scaling",
        "New Micro-Market & City Expansion",
        "High-Ticket Closing Scripts & CRM Sync",
        "Compounding Client Retention & Retargeting"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-transparent border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Dynamic Ambient Glow Flares */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <span>6-Stage Revenue Framework</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            Your Growth <span className="text-gold-gradient">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            A systematic, predictable roadmap engineered to understand your audience, launch high-converting creative funnels, and scale revenue predictably.
          </motion.p>
        </div>

        {/* 6-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative mb-14">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 border border-white/10 hover:border-amber-400/40 group flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
              >
                {/* Subtle Hover Gradient Flare */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.accent} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Step Top Bar: Icon + Step Badge + Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.stepBadge}
                      </span>
                      <span className="text-2xl font-black text-slate-600 group-hover:text-amber-400/60 transition-colors">
                        {item.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Step Name & Summary */}
                  <div className="mb-3">
                    <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors tracking-tight leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-400/90 mt-1 uppercase tracking-wide">
                      {item.summary}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-3.5 border-t border-white/10 space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Phase Deliverables:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400">
                    Himastech Growth Framework
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

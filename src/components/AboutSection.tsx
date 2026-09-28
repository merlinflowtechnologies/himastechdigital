"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Award, 
  Building2, 
  GraduationCap, 
  Users, 
  Sparkles, 
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  UserCheck,
  PhoneCall,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export function AboutSection() {
  const experienceHighlights = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      metric: "12+ Years",
      title: "Marketing Experience",
      badge: "Industry Veteran",
      desc: "Pioneering high-ROI digital acquisition funnels across Meta, Google Ads, programmatic channels, and generative search algorithms since 2012.",
      accent: "from-amber-500/20 via-amber-500/5 to-transparent border-amber-500/30",
      iconBg: "bg-amber-400/10 border-amber-400/20 text-amber-400",
      metricColor: "text-amber-400"
    },
    {
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      metric: "50+",
      title: "Real Estate & Growth Projects",
      badge: "Proven Campaigns",
      desc: "Targeted campaigns for residential projects, plotted layouts, boutique brands, and local businesses across Hyderabad and regional hubs.",
      accent: "from-cyan-500/20 via-cyan-500/5 to-transparent border-cyan-500/30",
      iconBg: "bg-cyan-400/10 border-cyan-400/20 text-cyan-400",
      metricColor: "text-cyan-400"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      metric: "5,000+",
      title: "Digital Marketing Training & Strategy",
      badge: "Master Trainer",
      desc: "Demystifying complex ad algorithms and campaign engineering into practical, result-yielding frameworks for entrepreneurs, marketing leaders, and students.",
      accent: "from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-500/30",
      iconBg: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
      metricColor: "text-emerald-400"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      metric: "3.8x Lift",
      title: "Sales Team Development",
      badge: "Sales Strategist",
      desc: "Architecting end-to-end sales closing systems, speed-to-lead response workflows, and objection-handling playbooks that convert leads into confirmed site visits.",
      accent: "from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/30",
      iconBg: "bg-purple-400/10 border-purple-400/20 text-purple-400",
      metricColor: "text-purple-400"
    }
  ];

  const corePillars = [
    {
      title: "Clarity Over Complexity",
      desc: "Stripping away vanity metrics so business owners clearly understand their customer acquisition cost, ad efficiency, and pipeline velocity.",
      icon: <Lightbulb className="w-4 h-4 text-amber-400" />
    },
    {
      title: "High-Intent Opportunity Generation",
      desc: "Filtering out casual scrollers to attract genuine, qualified buyers with the financial readiness to commit to your project.",
      icon: <Target className="w-4 h-4 text-cyan-400" />
    },
    {
      title: "Full-Funnel Sales Alignment",
      desc: "Marketing doesn't end with lead capture. We equip your sales force with the collateral, cadence, and insights needed to close transactions.",
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
          >
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Executive Leadership & Founder Vision</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            About <span className="text-gold-gradient">Kishore Patel</span>
          </motion.h2>

          {/* Subheading / Role Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold mb-5"
          >
            <span className="text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Digital Marketing Trainer
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
              Sales Strategist
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
              Real Estate Marketing Specialist
            </span>
          </motion.div>

          {/* Core Positioning Copy (Exact User Specification) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            <span className="text-white font-semibold">“Helping businesses understand digital marketing,</span> generate opportunities and build stronger sales systems.”
          </motion.p>
        </div>

        {/* Master Profile & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Premium Photo Showcase & Status Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-xl group">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0b0f17]">
                {/* Photo */}
                <div className="relative h-96 sm:h-[440px] w-full">
                  <Image
                    src="/ceo.jpg"
                    alt="Kishore Patel - Digital Marketing Trainer, Sales Strategist & Real Estate Marketing Specialist"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent" />
                  
                  {/* Top Live Availability Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Founder & Lead Strategist
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-400/20 backdrop-blur-md text-[10px] font-black text-amber-300 border border-amber-400/30">
                      12+ Years Exp
                    </span>
                  </div>

                  {/* Bottom Photo Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-0.5">
                      Kishore Patel
                    </h3>
                    <p className="text-xs font-bold text-amber-400 mb-2">
                      Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-semibold text-slate-300">
                      <span className="bg-white/10 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                        📍 Hyderabad, India
                      </span>
                      <span className="bg-white/10 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                        🏢 Himastech & Merlinflow
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Action Bar */}
                <div className="p-4 bg-[#0a0d14] border-t border-white/10 grid grid-cols-2 gap-3">
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all shadow-md cursor-pointer uppercase tracking-wider"
                  >
                    <span>Connect Directly</span>
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Request Audit</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strategic Narrative & Core Pillars (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Mission Statement Callout */}
            <div className="relative p-6 sm:p-7 rounded-2xl glass-card-gold border border-amber-400/30 shadow-lg">
              <div className="text-amber-400 text-3xl font-serif leading-none mb-2">“</div>
              <p className="text-base sm:text-lg text-white font-bold leading-relaxed mb-3">
                Digital marketing should never be a guessing game or an unpredictable cost center. It must operate as a mathematical, repeatable sales machine that builds authentic brand equity while filling your pipeline with ready-to-buy prospects.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                  KP
                </div>
                <div>
                  <div className="text-xs font-black text-white">Kishore Patel</div>
                  <div className="text-[11px] text-amber-400 font-medium">Founder, Lead Trainer & Sales Strategist</div>
                </div>
              </div>
            </div>

            {/* Strategic Narrative */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                With over <strong className="text-white font-semibold">12+ years of hands-on marketing leadership</strong>, Kishore Patel has guided real estate developers, enterprise brands, and ambitious founders through the rapidly shifting landscape of online customer acquisition.
              </p>
              <p>
                Specializing in residential and commercial marketing across Hyderabad and South India, Kishore has orchestrated multi-channel campaigns that connect genuine buyers with developers—delivering over <strong className="text-amber-300 font-semibold">50+ successful marketing launches and thousands of qualified inquiries</strong>.
              </p>
              <p>
                As a passionate <strong className="text-white font-semibold">Digital Marketing Trainer</strong>, Kishore has mentored more than 5,000 students, business owners, and corporate sales teams, teaching them how to turn complex advertising algorithms into predictable revenue streams.
              </p>
            </div>

            {/* Core Philosophy 3-Point Checklist */}
            <div className="pt-2 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Three Strategic Tenets</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {corePillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl glass-subcard hover:border-amber-400/40 transition-all duration-300"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center mb-2.5">
                      {pillar.icon}
                    </div>
                    <div className="text-xs font-bold text-white mb-1">{pillar.title}</div>
                    <p className="text-[11px] text-slate-400 leading-snug">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alliance Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Backed by enterprise engineering through <strong className="text-slate-200">Merlinflow Technologies Private Limited</strong>.
              </span>
            </div>

          </motion.div>

        </div>

        {/* 4 Suggested Experience Highlights Section */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Proven Track Record</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Experience Highlights & Core Specializations
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Decade-long mastery combining paid media science, real estate marketing, and high-performance sales training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {experienceHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-b ${item.accent} glass-card glass-card-hover border relative group hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Big Metric */}
                  <div className={`text-2xl sm:text-3xl font-black ${item.metricColor} tracking-tight mb-1`}>
                    {item.metric}
                  </div>

                  {/* Highlight Title */}
                  <h4 className="text-sm sm:text-base font-extrabold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>

                  {/* Narrative Details */}
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Micro-Bar */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Expertise
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

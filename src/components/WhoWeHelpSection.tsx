"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  KeyRound, 
  Briefcase, 
  MapPin, 
  TrendingUp, 
  Rocket, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  PhoneCall, 
  ChevronRight,
  Layers,
  Target,
  Zap,
  Award
} from "lucide-react";

interface AudienceSegment {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  icon: any;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  accentColor: string;
  borderGlow: string;
  iconBg: string;
  whatsappMessage: string;
}

export function WhoWeHelpSection() {
  const [selectedId, setSelectedId] = useState<string>("builders-developers");

  const audienceSegments: AudienceSegment[] = [
    {
      id: "builders-developers",
      title: "Builders & Developers",
      tagline: "Turn Luxury Villas, Penthouses & Open Plots Into Sold-Out Inventories.",
      badge: "Flagship Specialty",
      icon: Building2,
      metric: "₹120Cr+",
      metricLabel: "Inventory Moved",
      challenge: "High project holding costs, declining returns from print/hoarding media, and low-intent enquiries that waste sales team hours.",
      solution: "Hyper-targeted 360° project marketing blitzes: photorealistic 3D/AI drone walkthroughs, NRI buyer acquisition funnels, and verified site-visit generation.",
      deliverables: [
        "Project Launch Branding & 3D Visual Identity",
        "Meta & Google Performance Max Ads",
        "NRI Investor High-Ticket Funnels (USA, UAE, UK)",
        "Sub-Second Masterplan Landing Pages",
        "CRM Speed-to-Lead Response Workflows"
      ],
      accentColor: "from-amber-500/20 via-amber-500/5 to-transparent",
      borderGlow: "border-amber-400/40 shadow-amber-500/10",
      iconBg: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
      whatsappMessage: "Hi Kishore Patel, I am a Builder/Developer looking to scale marketing and site visits for our real estate project."
    },
    {
      id: "real-estate-agents",
      title: "Real Estate Agents",
      tagline: "Stop Fighting Over Shared Portal Leads. Build Your Own High-Intent Pipeline.",
      badge: "High-Ticket Channel",
      icon: KeyRound,
      metric: "4.8x Lift",
      metricLabel: "In Site Visits",
      challenge: "Tired of burning money on saturated property portals where 20 other brokers get the exact same stale contact numbers.",
      solution: "Exclusive buyer acquisition engines running directly on your personal brand, paired with instant WhatsApp bot qualification so you only speak to verified buyers.",
      deliverables: [
        "Personal Real Estate Agent Branding",
        "Exclusive Direct-to-Consumer Lead Campaigns",
        "Automated WhatsApp Instant Follow-Up",
        "Luxury Listing Video Reels & Walkthroughs",
        "HNIs & Investor Retargeting Systems"
      ],
      accentColor: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      borderGlow: "border-cyan-400/40 shadow-cyan-500/10",
      iconBg: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
      whatsappMessage: "Hi Kishore Patel, I am a Real Estate Agent/Broker interested in generating exclusive, high-ticket buyer leads."
    },
    {
      id: "corporate-businesses",
      title: "Corporate Businesses",
      tagline: "Align Marketing With Sales to Drive Predictable Enterprise Revenue.",
      badge: "Enterprise Scale",
      icon: Briefcase,
      metric: "-38% CAC",
      metricLabel: "Acquisition Efficiency",
      challenge: "Siloed marketing vs sales teams, lack of clear multi-touch attribution, and massive ad spends with questionable bottom-line revenue impact.",
      solution: "Enterprise account-based marketing (ABM), server-side CAPI telemetry, and corporate in-house sales team coaching to ensure every rupee drives verifiable EBITDA growth.",
      deliverables: [
        "Account-Based Marketing (ABM) B2B Funnels",
        "Server-Side Data Attribution & CAPI Infrastructure",
        "Corporate Team Training & Sales Enablement",
        "Executive Revenue & Attribution Dashboards",
        "Strategic Technology Collaboration (Merlinflow ERP)"
      ],
      accentColor: "from-blue-500/20 via-blue-500/5 to-transparent",
      borderGlow: "border-blue-400/40 shadow-blue-500/10",
      iconBg: "bg-blue-400/10 text-blue-400 border border-blue-400/20",
      whatsappMessage: "Hi Kishore Patel, I represent a Corporate Business and would like to explore enterprise growth and team training."
    },
    {
      id: "local-businesses",
      title: "Local Businesses",
      tagline: "Dominate Your City Radius & Turn Nearby Searches Into Paying Customers.",
      badge: "Local Dominance",
      icon: MapPin,
      metric: "+140%",
      metricLabel: "Walk-in Footfall",
      challenge: "Struggling to stand out against local competitors, missing out on high-intent 'near me' searches, and inconsistent foot traffic.",
      solution: "Hyper-local geo-fenced Meta ads, Google Maps 3-Pack optimization, and high-converting WhatsApp walk-in offers that pull customers straight into your doors.",
      deliverables: [
        "Google Maps & Local SEO 3-Pack Dominance",
        "Geo-Fenced Meta Ads (3-5 km Targeted Radius)",
        "WhatsApp Direct Booking & Consultation Offers",
        "Reputation Management & 5-Star Review Growth",
        "High-Converting Local Mobile Landing Pages"
      ],
      accentColor: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      borderGlow: "border-emerald-400/40 shadow-emerald-500/10",
      iconBg: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20",
      whatsappMessage: "Hi Kishore Patel, I own a Local Business and want to increase footfall and local customer inquiries."
    },
    {
      id: "entrepreneurs",
      title: "Entrepreneurs",
      tagline: "Turn Your Vision Into a Predictable, Scalable Online Cash Machine.",
      badge: "High Growth",
      icon: TrendingUp,
      metric: "3.2x ROAS",
      metricLabel: "Average Campaign Return",
      challenge: "Overwhelmed wearing multiple hats, burning capital on boosted posts with zero sales, and lacking a structured customer acquisition funnel.",
      solution: "Battle-tested direct-response acquisition funnels that convert cold prospects into paid customers, liberating founders to focus on strategic execution.",
      deliverables: [
        "High-Converting Offer Crafting & Positioning",
        "Direct-Response Ad Creative & Copy Sprints",
        "Sub-Second Conversion Rate Optimized Landing Pages",
        "Automated Lead-to-Customer Nurturing Flows",
        "Weekly Strategy Mentorship with Kishore Patel"
      ],
      accentColor: "from-purple-500/20 via-purple-500/5 to-transparent",
      borderGlow: "border-purple-400/40 shadow-purple-500/10",
      iconBg: "bg-purple-400/10 text-purple-400 border border-purple-400/20",
      whatsappMessage: "Hi Kishore Patel, I am an Entrepreneur looking to build a high-converting digital marketing system."
    },
    {
      id: "startups",
      title: "Startups",
      tagline: "Achieve Product-Market Fit & Scale Customer Acquisition with Ruthless Efficiency.",
      badge: "Rapid Velocity",
      icon: Rocket,
      metric: "10x",
      metricLabel: "Pipeline Scaling",
      challenge: "Strict CAC constraints, ticking runway clocks, and the urgent need to demonstrate traction and user growth to investors.",
      solution: "High-velocity growth hacking sprints, viral UGC creator creative testing, Generative Engine Optimization (GEO) for AI search, and sub-second web experiences.",
      deliverables: [
        "High-Velocity Growth Sprints & Angle Testing",
        "Generative Search Optimization (GEO) for ChatGPT & Perplexity",
        "Viral UGC Video Ad Sprints & Creative Hooks",
        "Full-Funnel CAC to LTV Unit Economic Modeling",
        "Automated Onboarding & Retention Email/WhatsApp Cadences"
      ],
      accentColor: "from-pink-500/20 via-pink-500/5 to-transparent",
      borderGlow: "border-pink-400/40 shadow-pink-500/10",
      iconBg: "bg-pink-400/10 text-pink-400 border border-pink-400/20",
      whatsappMessage: "Hi Kishore Patel, I am a Startup founder looking for rapid growth marketing and user acquisition."
    },
    {
      id: "training-institutes",
      title: "Training Institutes",
      tagline: "Fill Every Batch with High-Commitment Students & Eliminate Seat Vacancies.",
      badge: "Education Niche",
      icon: GraduationCap,
      metric: "85%+",
      metricLabel: "Webinar / Demo Show-ups",
      challenge: "High cost-per-lead, seasonal batch enrollment slumps, and prospects dropping off between lead capture and demo sessions.",
      solution: "High-engagement webinar & workshop registration engines, multi-channel WhatsApp/SMS countdowns, and curriculum landing pages that convert browsers into enrolled students.",
      deliverables: [
        "Batch Admission Funnels & Masterclass Registration",
        "Multi-Touch WhatsApp & SMS Reminder Cadences",
        "Retargeting Ad Stacks for High-Intent Inquirers",
        "Alumni Case Study & Social Proof Landing Pages",
        "Live In-House Sales Team Counseling Playbooks"
      ],
      accentColor: "from-indigo-500/20 via-indigo-500/5 to-transparent",
      borderGlow: "border-indigo-400/40 shadow-indigo-500/10",
      iconBg: "bg-indigo-400/10 text-indigo-400 border border-indigo-400/20",
      whatsappMessage: "Hi Kishore Patel, I manage a Training Institute and want to fill our upcoming student batches."
    },
    {
      id: "professional-services",
      title: "Professional Services",
      tagline: "Position Yourself as the Premier Authority & Win High-Fee Retainers.",
      badge: "High-Trust Authority",
      icon: ShieldCheck,
      metric: "₹50L+",
      metricLabel: "Average Deal Scope",
      challenge: "Treated as a commodity, prospective clients shopping around purely on price, and difficulty explaining complex, high-value consulting services.",
      solution: "Authority positioning systems, thought-leadership video content, LinkedIn account-based prospecting, and high-trust consultation scheduling funnels.",
      deliverables: [
        "Executive Authority & Thought-Leadership Content",
        "High-Ticket Client Consultation Booking Engines",
        "LinkedIn B2B Prospecting & Network Growth",
        "Client Case Studies & Institutional Whitepapers",
        "Automated Pre-Call Qualification Questionnaires"
      ],
      accentColor: "from-teal-500/20 via-teal-500/5 to-transparent",
      borderGlow: "border-teal-400/40 shadow-teal-500/10",
      iconBg: "bg-teal-400/10 text-teal-400 border border-teal-400/20",
      whatsappMessage: "Hi Kishore Patel, I provide Professional Services and want to attract premium high-ticket clients."
    }
  ];

  const activeSegment = audienceSegments.find((s) => s.id === selectedId) || audienceSegments[0];
  const ActiveIcon = activeSegment.icon;

  return (
    <section id="who-we-help" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <Target className="w-4 h-4 text-amber-400" />
            <span>Target Industries & Client Segments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Who We <span className="text-gold-gradient">Help.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            From premier real estate builders to fast-scaling enterprises and ambitious founders, we engineer specialized digital growth and sales systems tailored to your exact industry dynamics.
          </motion.p>
        </div>

        {/* 8 Industry Category Chips / Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {audienceSegments.map((segment, idx) => {
            const Icon = segment.icon;
            const isSelected = selectedId === segment.id;

            return (
              <motion.button
                key={segment.id}
                onClick={() => setSelectedId(segment.id)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`p-3.5 sm:p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer group relative overflow-hidden border ${
                  isSelected
                    ? "glass-card-gold border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.25)] -translate-y-1"
                    : "glass-card hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5"
                }`}
              >
                {/* Active Indicator Top Pill */}
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-cyan-400" />
                )}

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-300 ${
                  isSelected 
                    ? "bg-amber-400 text-slate-950 scale-110 shadow-md font-bold" 
                    : "bg-white/5 text-slate-300 group-hover:scale-105 group-hover:text-white"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <span className={`text-xs font-bold leading-tight ${
                  isSelected ? "text-white font-extrabold" : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {segment.title}
                </span>

                <span className={`text-[9px] mt-1 font-semibold uppercase tracking-wider ${
                  isSelected ? "text-amber-400" : "text-slate-500"
                }`}>
                  {segment.badge}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Industry Deep-Dive Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-card border border-white/20 shadow-2xl relative overflow-hidden mb-16"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
              
              {/* Left Column: The Narrative, Pain Point & Himastech Solution (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header Tag & Segment Title */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Dedicated Growth Architecture
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs font-semibold text-slate-400">
                      {activeSegment.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-2">
                    {activeSegment.title}
                  </h3>
                  <p className="text-sm sm:text-base text-amber-300 font-bold leading-relaxed">
                    {activeSegment.tagline}
                  </p>
                </div>

                {/* Challenge vs Solution Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Challenge */}
                  <div className="p-4 rounded-2xl glass-subcard border-red-500/30">
                    <div className="text-[11px] font-bold text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      The Common Problem
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {activeSegment.challenge}
                    </p>
                  </div>

                  {/* Himastech Growth Solution */}
                  <div className="p-4 rounded-2xl glass-subcard border-emerald-500/30">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      The Himastech Solution
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {activeSegment.solution}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables Bulleted List */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Specialized Strategy Deliverables</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSegment.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: High-Impact Metric Card & 1-Click Connection (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-white/20 shadow-xl relative overflow-hidden">
                
                {/* Metric Badge */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${activeSegment.iconBg} flex items-center justify-center shadow-md`}>
                      <ActiveIcon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      Impact Metric
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                    <span className="text-gold-gradient">{activeSegment.metric}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {activeSegment.metricLabel}
                  </div>
                </div>

                <div className="p-4 rounded-xl glass-subcard mb-6 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white font-semibold">Led by Kishore Patel: </strong>
                  Get a comprehensive 30-day go-to-market blueprint designed specifically for {activeSegment.title.toLowerCase()}.
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/916304989071?text=${encodeURIComponent(activeSegment.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950" />
                    <span>GET {activeSegment.title.toUpperCase()} BLUEPRINT</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </a>

                  <Link
                    href="#contact"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Request Free Marketing Consultation</span>
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom 8-Category Fast Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {audienceSegments.map((segment) => {
            const Icon = segment.icon;

            return (
              <div
                key={segment.id}
                onClick={() => setSelectedId(segment.id)}
                className="p-4 rounded-xl glass-card glass-card-hover border border-white/10 hover:border-amber-400/40 transition-all duration-300 group cursor-pointer flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-colors shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {segment.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {segment.metric} {segment.metricLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

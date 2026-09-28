"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, BarChart3, Building2, ShoppingBag, Briefcase, ArrowRight, RotateCcw, Layers, TrendingUp } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  id: string;
  category: "real-estate" | "ecommerce" | "b2b";
  categoryLabel: string;
  client: string;
  headline: string;
  summary: string;
  tags: string[];
  metrics: {
    primary: { value: string; label: string; trend: string };
    secondary: { value: string; label: string; trend: string };
    tertiary: { value: string; label: string; trend: string };
  };
  strategy: string[];
  color: string;
  accentGradient: string;
}

interface CategoryInfo {
  id: "real-estate" | "ecommerce" | "b2b";
  title: string;
  subtitle: string;
  icon: any;
  badge: string;
  color: string;
  accentGradient: string;
  borderColor: string;
  glowColor: string;
  totalGenerated: string;
  avgRoas: string;
  casesCount: number;
}

export function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<"overview" | "real-estate" | "ecommerce" | "b2b">("overview");

  const categories: CategoryInfo[] = [
    {
      id: "real-estate",
      title: "Real Estate & High-Ticket",
      subtitle: "Residential Apartments, Plotted Layouts & Commercial Projects",
      icon: Building2,
      badge: "High-Ticket Funnels",
      color: "from-blue-500/20 to-cyan-500/20",
      accentGradient: "from-blue-500 via-cyan-400 to-teal-400",
      borderColor: "hover:border-cyan-400/50 border-cyan-500/30",
      glowColor: "rgba(6, 182, 212, 0.25)",
      totalGenerated: "50+ Projects",
      avgRoas: "3.8x Avg ROAS",
      casesCount: 3,
    },
    {
      id: "ecommerce",
      title: "E-Commerce & D2C",
      subtitle: "Fashion, Organic Skincare & Consumer Brand Scaling",
      icon: ShoppingBag,
      badge: "Omnichannel D2C",
      color: "from-purple-500/20 to-pink-500/20",
      accentGradient: "from-purple-500 via-pink-500 to-rose-400",
      borderColor: "hover:border-pink-400/50 border-purple-500/30",
      glowColor: "rgba(236, 72, 153, 0.25)",
      totalGenerated: "24+ Stores",
      avgRoas: "3.5x Avg ROAS",
      casesCount: 3,
    },
    {
      id: "b2b",
      title: "B2B SaaS & Tech Startups",
      subtitle: "Cloud Software, Digital Services & Product Growth",
      icon: Briefcase,
      badge: "Pipeline Engine",
      color: "from-emerald-500/20 to-teal-500/20",
      accentGradient: "from-emerald-400 via-teal-400 to-cyan-400",
      borderColor: "hover:border-emerald-400/50 border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.25)",
      totalGenerated: "35+ B2B Funnels",
      avgRoas: "180% Avg Demo Lift",
      casesCount: 3,
    },
  ];

  const caseStudies: Record<"real-estate" | "ecommerce" | "b2b", CaseStudy[]> = {
    "real-estate": [
      {
        id: "skyline-realty",
        category: "real-estate",
        categoryLabel: "Case 1 of 3",
        client: "Aura Luxury Residences",
        headline: "14 Units Booked via Meta & Google High-Intent Funnels",
        summary: "Scaled qualified buyer acquisition for residential apartments via targeted geo-fencing, Google search ads, and virtual tour lead capture.",
        tags: ["Meta Ads", "Google Search", "Local SEO", "High-Ticket"],
        metrics: {
          primary: { value: "+280%", label: "Buyer Inquiries", trend: "up" },
          secondary: { value: "-35%", label: "Cost / Lead", trend: "down" },
          tertiary: { value: "3.8x", label: "Campaign ROAS", trend: "up" },
        },
        strategy: [
          "Targeted video remarketing for local homebuyers and professionals",
          "Sub-second landing pages with instant WhatsApp booking flow",
          "Automated instant follow-up protocol connecting sales managers",
        ],
        color: "from-blue-500/20 to-cyan-500/20",
        accentGradient: "from-blue-500 to-cyan-400",
      },
      {
        id: "sovereign-estates",
        category: "real-estate",
        categoryLabel: "Case 2 of 3",
        client: "The Sovereign Waterfront Villas",
        headline: "28 Villa Units Sold via Private Access Digital Funnels",
        summary: "Targeted digital campaigns for luxury villa community with gated preview brochures and automated WhatsApp qualification.",
        tags: ["Meta Ads", "Google Search", "VIP Funnels", "WhatsApp CRM"],
        metrics: {
          primary: { value: "+220%", label: "VIP Tours", trend: "up" },
          secondary: { value: "-40%", label: "Lead Cost", trend: "down" },
          tertiary: { value: "3.9x", label: "Inventory ROAS", trend: "up" },
        },
        strategy: [
          "Geo-fenced targeting around premium corporate corridors & hubs",
          "Two-step qualification interactive inquiry survey",
          "Automated instant WhatsApp callback routing within 5 minutes",
        ],
        color: "from-cyan-500/20 to-indigo-500/20",
        accentGradient: "from-cyan-400 to-blue-500",
      },
      {
        id: "pinnacle-commercial",
        category: "real-estate",
        categoryLabel: "Case 3 of 3",
        client: "Pinnacle Commercial & Tech Parks",
        headline: "Commercial Pre-Leasing in 90 Days via LinkedIn & Search",
        summary: "Accelerated commercial lease velocity for an office development via LinkedIn and Google Search campaigns targeting regional business managers.",
        tags: ["LinkedIn B2B", "Commercial Real Estate", "Google Search", "B2B Funnels"],
        metrics: {
          primary: { value: "+190%", label: "Tenant Inquiries", trend: "up" },
          secondary: { value: "85k Sq Ft", label: "Pre-Leased", trend: "up" },
          tertiary: { value: "-30%", label: "Cost / Tour", trend: "down" },
        },
        strategy: [
          "B2B decision-maker intent search on Google targeting office expansion",
          "Interactive 3D floorplan simulator with instant floorplate details",
          "Automated executive virtual presentation calendar booking",
        ],
        color: "from-blue-600/20 to-teal-500/20",
        accentGradient: "from-blue-400 to-teal-400",
      },
    ],
    ecommerce: [
      {
        id: "lumina-apparel",
        category: "ecommerce",
        categoryLabel: "Case 1 of 3",
        client: "Lumina Organic Apparel",
        headline: "Scaled from ₹2L to ₹12L/Mo with Omnichannel Paid Media",
        summary: "Restructured ad account architecture with high-volume UGC creator testing, automated email flows, and Meta video ads with continuous CRO.",
        tags: ["Meta Scaling", "Email Flows", "Shorts Ads", "CRO Testing"],
        metrics: {
          primary: { value: "3.8x", label: "Blended ROAS", trend: "up" },
          secondary: { value: "+140%", label: "Repeat Rate", trend: "up" },
          tertiary: { value: "+380%", label: "Revenue Lift", trend: "up" },
        },
        strategy: [
          "Tested 15+ creative hooks weekly with algorithmic budget allocation",
          "Customized 1-click upsell post-purchase funnels",
          "Server-side Conversions API (CAPI) for accurate tracking",
        ],
        color: "from-purple-500/20 to-pink-500/20",
        accentGradient: "from-purple-500 to-pink-500",
      },
      {
        id: "kura-skincare",
        category: "ecommerce",
        categoryLabel: "Case 2 of 3",
        client: "Kura Botanicals Skincare",
        headline: "Scaled to ₹18L/Month with Meta, Shorts Ads & Retention Flows",
        summary: "Paid-and-retention flywheel using native creator video ads, skin diagnostic quiz funnels, and automated WhatsApp nurturing.",
        tags: ["Shorts & Reels", "WhatsApp SMS", "Quiz Funnel", "D2C Scaling"],
        metrics: {
          primary: { value: "+240%", label: "Revenue Scale", trend: "up" },
          secondary: { value: "3.6x", label: "Account ROAS", trend: "up" },
          tertiary: { value: "38%", label: "Repeat Rate", trend: "up" },
        },
        strategy: [
          "High-volume creator UGC angle testing (20+ variations/mo)",
          "Interactive skin diagnosis quiz lifting CVR to 6.2%",
          "Automated smart replenishment reminders timed to usage cycles",
        ],
        color: "from-pink-500/20 to-rose-500/20",
        accentGradient: "from-pink-400 to-rose-500",
      },
      {
        id: "veloce-audio",
        category: "ecommerce",
        categoryLabel: "Case 3 of 3",
        client: "Veloce Performance Audio",
        headline: "Holiday Sales Blitz with 3.9x ROAS on Meta & P-Max",
        summary: "Multi-phase holiday sales campaign leveraging pre-launch early access, dynamic catalog ads with live badges, and abandoned cart flows.",
        tags: ["Google P-Max", "Meta Advantage+", "Festival Season", "Shopify Plus"],
        metrics: {
          primary: { value: "3.9x", label: "Holiday ROAS", trend: "up" },
          secondary: { value: "+180%", label: "New Buyers", trend: "up" },
          tertiary: { value: "-32%", label: "Cost / Order", trend: "down" },
        },
        strategy: [
          "Pre-launch VIP early access lead collection at competitive cost",
          "Performance Max product feed optimization with custom labels",
          "Fast Shopify checkout speed optimization",
        ],
        color: "from-purple-600/20 to-indigo-500/20",
        accentGradient: "from-purple-400 to-indigo-400",
      },
    ],
    b2b: [
      {
        id: "cloudscale-saas",
        category: "b2b",
        categoryLabel: "Case 1 of 3",
        client: "CloudScale Analytics",
        headline: "180% Surge in Qualified Demo Bookings for Emerging SaaS",
        summary: "Streamlined B2B lead gen with LinkedIn thought leadership ads, Google search intent, and interactive ROI simulator lead magnets.",
        tags: ["LinkedIn Ads", "Google Search", "AI Search", "ABM Scaling"],
        metrics: {
          primary: { value: "+180%", label: "Demo Volume", trend: "up" },
          secondary: { value: "95+", label: "SQLs in 90d", trend: "up" },
          tertiary: { value: "-35%", label: "Cost / Demo", trend: "down" },
        },
        strategy: [
          "Targeted ABM list reaching tech and operations leaders",
          "Interactive benchmark calculator funnels",
          "Landing page iterations lifting demo conversion from 2.1% to 5.4%",
        ],
        color: "from-emerald-500/20 to-teal-500/20",
        accentGradient: "from-emerald-500 to-teal-400",
      },
      {
        id: "securestack-cyber",
        category: "b2b",
        categoryLabel: "Case 2 of 3",
        client: "SecureStack Cyber Defense",
        headline: "Qualified B2B Sales Pipeline in 90 Days via Search & LinkedIn",
        summary: "Targeted IT and security decision-makers with interactive cloud vulnerability benchmarks and intent-triggered Google Search campaigns.",
        tags: ["LinkedIn Ads", "Targeted ABM", "Google Search", "CRM Webhooks"],
        metrics: {
          primary: { value: "+160%", label: "Sales Demos", trend: "up" },
          secondary: { value: "3.4x", label: "Pipeline / Spend", trend: "up" },
          tertiary: { value: "-38%", label: "Cost / SQL", trend: "down" },
        },
        strategy: [
          "Targeted company-level outreach on LinkedIn",
          "Interactive cyber posture self-assessment tool",
          "Real-time CRM webhook sync for immediate sales qualification",
        ],
        color: "from-teal-500/20 to-cyan-500/20",
        accentGradient: "from-teal-400 to-cyan-400",
      },
      {
        id: "omniflow-automation",
        category: "b2b",
        categoryLabel: "Case 3 of 3",
        client: "OmniFlow Workflow Automation",
        headline: "Reduced CAC by 42% while Scaling Signups to 3,500/mo",
        summary: "Scaled freemium SaaS by capturing high-intent workflow search queries and optimizing landing page signup flow.",
        tags: ["SEO & Search", "Product-Led", "Google Intent", "CRO Growth"],
        metrics: {
          primary: { value: "3.5k+", label: "Monthly Trials", trend: "up" },
          secondary: { value: "-42%", label: "Blended CAC", trend: "down" },
          tertiary: { value: "+180%", label: "Paid Conversions", trend: "up" },
        },
        strategy: [
          "Search engine optimization on workflow automation queries",
          "Competitor comparison pages with clear feature matrices",
          "Friction-free onboarding and signup flow",
        ],
        color: "from-emerald-600/20 to-blue-500/20",
        accentGradient: "from-emerald-400 to-blue-400",
      },
    ],
  };

  return (
    <section id="case-studies" className="flex flex-col w-full py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-72 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-72 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs uppercase tracking-wider font-extrabold mb-3 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-600" /> Proven Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mb-3 tracking-tight">
            Real Impact. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600">Unstoppable Revenue.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Explore our 3 specialized growth sectors. Click any industry below to drill down into its 3 verified client case studies.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory("overview")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              selectedCategory === "overview"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white shadow-sm scale-105"
                : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/80 shadow-sm"
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> 3 Industry Overview
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const IconComp = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? `bg-gradient-to-r ${cat.accentGradient} text-white shadow-sm scale-105`
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/80 shadow-sm"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" /> {cat.title} ({cat.casesCount})
              </button>
            );
          })}
        </div>

        {/* ----------------- 1. DEFAULT VIEW: 3 SECTIONS IN A SINGLE ROW ----------------- */}
        <AnimatePresence mode="wait">
          {selectedCategory === "overview" ? (
            <motion.div
              key="overview-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {categories.map((cat, idx) => {
                const IconComp = cat.icon;
                const featuredCase = caseStudies[cat.id][0];

                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className={`glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden border border-slate-200/90 group transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1`}
                  >
                    {/* Top ambient glow */}
                    <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${cat.color} rounded-bl-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform shadow-xs">
                            <IconComp className="w-4 h-4 text-cyan-600" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">
                              Industry Sector 0{idx + 1}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                              {cat.title}
                            </h3>
                          </div>
                        </div>

                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${cat.accentGradient} text-white shadow-sm shrink-0`}>
                          3 Live Cases
                        </span>
                      </div>

                      {/* Flagship Case Card Preview */}
                      <div className="p-4 rounded-xl glass-subcard mb-4 relative z-10 shadow-xs">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5 font-medium">
                          <span>Featured Client:</span>
                          <span className="text-slate-900 font-bold">{featuredCase.client}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-950 leading-snug mb-2 group-hover:text-cyan-700 transition-colors">
                          {featuredCase.headline}
                        </h4>
                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed mb-3">
                          {featuredCase.summary}
                        </p>

                        {/* Top 3 Metrics Strip */}
                        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-200 text-center">
                          <div>
                            <div className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${cat.accentGradient}`}>
                              {featuredCase.metrics.primary.value}
                            </div>
                            <div className="text-[8px] text-slate-500 truncate font-bold">{featuredCase.metrics.primary.label}</div>
                          </div>
                          <div className="border-x border-slate-200">
                            <div className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${cat.accentGradient}`}>
                              {featuredCase.metrics.secondary.value}
                            </div>
                            <div className="text-[8px] text-slate-500 truncate font-bold">{featuredCase.metrics.secondary.label}</div>
                          </div>
                          <div>
                            <div className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${cat.accentGradient}`}>
                              {featuredCase.metrics.tertiary.value}
                            </div>
                            <div className="text-[8px] text-slate-500 truncate font-bold">{featuredCase.metrics.tertiary.label}</div>
                          </div>
                        </div>
                      </div>

                      {/* Remaining 2 Cases Teaser Badges */}
                      <div className="space-y-1.5 mb-4 relative z-10">
                        <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                          Included in this section:
                        </div>
                        {caseStudies[cat.id].slice(1).map((subCase, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/80 font-medium">
                            <CheckCircle2 className="w-3 h-3 text-cyan-600 shrink-0" />
                            <span className="truncate">{subCase.client} ({subCase.headline.split("via")[0]})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Click Trigger Button */}
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${cat.accentGradient} text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer relative z-10 hover:scale-[1.02]`}
                    >
                      View All 3 {cat.title.split("&")[0]} Cases <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* ----------------- 2. EXPANDED VIEW: ALL 3 CASE STUDIES FOR SELECTED CATEGORY ----------------- */
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Back Bar and Active Category Indicator */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl glass-subcard mb-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600">
                    Showing 3 Deep-Dive Studies for:
                  </span>
                  <span className="text-xs font-extrabold text-cyan-900 bg-cyan-100/80 px-3 py-1 rounded-full border border-cyan-200 shadow-2xs">
                    {categories.find(c => c.id === selectedCategory)?.title}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCategory("overview")}
                  className="px-3.5 py-1.5 rounded-xl glass-subcard hover:bg-white text-slate-800 text-xs font-bold flex items-center gap-1.5 border border-slate-200 transition-colors cursor-pointer shadow-xs"
                >
                  <RotateCcw className="w-3 h-3 text-cyan-600" /> Back to 3-Industry Overview
                </button>
              </div>

              {/* 3 Case Study Cards for the Selected Category in a Single Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {caseStudies[selectedCategory].map((study, idx) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/50 border border-slate-200/90 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${study.color} rounded-bl-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

                    <div>
                      {/* Header Badge & Client Name */}
                      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
                        <span className="text-[10px] font-bold text-slate-700 bg-slate-100/80 border border-slate-200 px-2.5 py-0.5 rounded-full">
                          {study.categoryLabel}
                        </span>
                        <span className="text-[11px] font-bold text-cyan-700 truncate max-w-[150px]">
                          {study.client}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 leading-snug group-hover:text-cyan-600 transition-colors">
                        {study.headline}
                      </h3>

                      <p className="text-[11px] text-slate-600 mb-3.5 leading-relaxed line-clamp-2">
                        {study.summary}
                      </p>

                      {/* Compact Metrics Strip */}
                      <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl glass-subcard mb-3.5 shadow-xs">
                        <div className="text-center">
                          <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                            {study.metrics.primary.value}
                          </div>
                          <div className="text-[8px] text-slate-500 leading-tight truncate font-bold">
                            {study.metrics.primary.label}
                          </div>
                        </div>
                        <div className="text-center border-x border-slate-200">
                          <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                            {study.metrics.secondary.value}
                          </div>
                          <div className="text-[8px] text-slate-500 leading-tight truncate font-bold">
                            {study.metrics.secondary.label}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                            {study.metrics.tertiary.value}
                          </div>
                          <div className="text-[8px] text-slate-500 leading-tight truncate font-bold">
                            {study.metrics.tertiary.label}
                          </div>
                        </div>
                      </div>

                      {/* Strategy Checklist */}
                      <div className="space-y-1.5 mb-3.5">
                        {study.strategy.map((item, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium leading-snug">
                            <CheckCircle2 className="w-3 h-3 text-cyan-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-slate-100">
                        {study.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold border border-slate-200/60">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="#contact"
                        className="mt-3 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-300 hover:border-cyan-500/40 transition-all cursor-pointer shadow-sm"
                      >
                        Replicate These Results <ArrowUpRight className="w-3 h-3 text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


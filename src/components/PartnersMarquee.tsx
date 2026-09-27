"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function PartnersMarquee() {
  const partners = [
    { name: "Meta Business Partner", logoText: "Meta", sub: "Business Partner", color: "from-blue-500 to-indigo-500", dot: "bg-blue-400" },
    { name: "Google Premier Partner", logoText: "Google Ads", sub: "Premier Partner 2024", color: "from-red-500 via-amber-400 to-blue-500", dot: "bg-amber-400" },
    { name: "TikTok Marketing Partner", logoText: "TikTok", sub: "For Business", color: "from-pink-500 to-cyan-400", dot: "bg-pink-400" },
    { name: "Shopify Plus Partner", logoText: "Shopify", sub: "Plus Certified", color: "from-emerald-400 to-teal-500", dot: "bg-emerald-400" },
    { name: "HubSpot Platinum", logoText: "HubSpot", sub: "Platinum Partner", color: "from-amber-500 to-orange-600", dot: "bg-orange-400" },
    { name: "Klaviyo Elite", logoText: "Klaviyo", sub: "Master Partner", color: "from-emerald-500 to-lime-400", dot: "bg-lime-400" },
    { name: "LinkedIn Marketing", logoText: "LinkedIn", sub: "Marketing Solutions", color: "from-blue-600 to-cyan-600", dot: "bg-cyan-400" },
    { name: "Amazon Ads", logoText: "Amazon Ads", sub: "Verified Partner", color: "from-amber-400 to-yellow-500", dot: "bg-yellow-400" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full py-10 sm:py-12 bg-[#07090e]/95 border-y border-white/10 relative overflow-hidden backdrop-blur-2xl z-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-28 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-28 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Section Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[11px] sm:text-xs uppercase tracking-widest font-black shadow-xs hover:border-amber-400/30 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Partner Ecosystem Expertise &amp; Advertising Platform Proficiencies</span>
        </div>
      </div>

      {/* Dark gradient fade masks for seamless infinity scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#07090e] via-[#07090e]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#07090e] via-[#07090e]/90 to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Marquee */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          className="flex gap-6 sm:gap-8 whitespace-nowrap"
        >
          {duplicatedPartners.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0b101c]/90 border border-white/10 hover:border-cyan-400/50 hover:bg-[#0e1628] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 transition-all duration-300 group shrink-0 backdrop-blur-xl"
            >
              <div className={`w-2.5 h-2.5 rounded-full ${p.dot} animate-pulse shadow-[0_0_10px_currentColor]`} />
              <div>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors block leading-tight">
                  {p.logoText}
                </span>
                <span className="text-[11px] text-slate-400 group-hover:text-slate-300 block mt-0.5 font-medium">
                  {p.sub}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

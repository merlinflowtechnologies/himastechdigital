"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Building2, 
  Target, 
  Cpu, 
  Users
} from "lucide-react";

export function TrustStrip() {
  const trustItems = [
    {
      icon: Award,
      badge: "Industry Proven",
      title: "12+ Years Experience",
      sub: "Scaling Brands & Builders",
      accent: "from-amber-500 to-yellow-500",
      bgGlow: "bg-amber-400/10 text-amber-400 border-amber-400/30",
    },
    {
      icon: Building2,
      badge: "Niche Authority",
      title: "Real Estate Marketing",
      sub: "Villas, High-Rises & Off-Plan",
      accent: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
    },
    {
      icon: Target,
      badge: "High-Intent Scale",
      title: "Digital Lead Generation",
      sub: "Hyper-Local Meta & Google Ads",
      accent: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
    },
    {
      icon: Cpu,
      badge: "Next-Gen Tech",
      title: "AI-Powered Marketing",
      sub: "CAPI Telemetry & Generative GEO",
      accent: "from-cyan-400 to-sky-500",
      bgGlow: "bg-sky-400/10 text-sky-400 border-sky-400/30",
    },
    {
      icon: Users,
      badge: "Academy & Skills",
      title: "Sales & Team Training",
      sub: "High-Ticket Closing Mastery",
      accent: "from-amber-400 to-orange-500",
      bgGlow: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    },
  ];

  return (
    <section className="w-full py-6 sm:py-8 bg-[#090d16]/90 backdrop-blur-2xl border-y border-white/10 relative z-20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mini Trust Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-5 text-center">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-widest font-black text-amber-400/90">
            How Himastech Helps Real-Estate Companies &amp; Businesses Build Their Brand, Generate Leads &amp; Scale With Digital + AI Solutions
          </span>
        </div>

        {/* 5-Column Responsive Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-3">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-card rounded-2xl p-4 sm:p-4.5 border border-white/10 hover:border-amber-400/40 shadow-xs hover:shadow-[0_10px_25px_rgba(0,0,0,0.7)] transition-all duration-300 flex items-start gap-3 group relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Flare */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.accent} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-xl shrink-0 border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300 ${item.bgGlow}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5 truncate">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

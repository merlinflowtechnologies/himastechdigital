"use client";

import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, Users, Building2, Sparkles, Award } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      value: "₹120Cr+",
      label: "Real Estate Marketed",
      sublabel: "Luxury villas, high-rises & commercial off-plan inventory",
      badge: "Realty Benchmark",
      icon: <IndianRupee className="w-5 h-5 text-amber-400" />,
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      border: "border-amber-400/30 hover:border-amber-400/60",
      valueColor: "text-gold-gradient",
    },
    {
      value: "8.4x",
      label: "Average Campaign ROAS",
      sublabel: "Hyper-local Meta & Google CAPI verified acquisition",
      badge: "Performance Standard",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
      border: "border-cyan-400/30 hover:border-cyan-400/60",
      valueColor: "text-electric-gradient",
    },
    {
      value: "150,000+",
      label: "Verified Buyer Inquiries",
      sublabel: "Pre-screened HNI & NRI buyers with phone OTP",
      badge: "Verified Inquiries",
      icon: <Users className="w-5 h-5 text-amber-300" />,
      accent: "from-amber-400/20 via-orange-500/10 to-transparent",
      border: "border-amber-400/30 hover:border-amber-400/60",
      valueColor: "text-gold-gradient",
    },
    {
      value: "45+",
      label: "Luxury Projects Scaled",
      sublabel: "Kokapet, Financial District, Gachibowli & prime hubs",
      badge: "Track Record",
      icon: <Building2 className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/20 via-indigo-500/10 to-transparent",
      border: "border-cyan-400/30 hover:border-cyan-400/60",
      valueColor: "text-electric-gradient",
    },
  ];

  return (
    <section className="w-full py-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-6 mb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-black text-amber-400">
              Verified Performance Telemetry
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Audited Real Estate Ad Accounts • Updated Weekly</span>
          </div>
        </div>

        {/* 4-Card Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 border ${stat.border} group shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-30 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-xs group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shadow-2xs">
                  {stat.badge}
                </span>
              </div>

              <div className="relative z-10">
                <div className={`text-3xl lg:text-4xl font-black tracking-tight mb-1.5 ${stat.valueColor}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

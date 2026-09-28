"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, IndianRupee, Users, Building2, Sparkles } from "lucide-react";

function AnimatedCounter({ 
  target, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  duration = 2
}: { 
  target: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutExpo for ultra smooth luxury feel
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * target;
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function StatsBar() {
  const stats = [
    {
      numericTarget: 50,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "Projects Delivered",
      sublabel: "Residential, commercial & growing business launches",
      badge: "Track Record",
      icon: <Building2 className="w-5 h-5 text-amber-400" />,
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      border: "border-amber-400/30 hover:border-amber-400/60",
      valueColor: "text-gold-gradient",
    },
    {
      numericTarget: 3.8,
      prefix: "",
      suffix: "x",
      decimals: 1,
      label: "Average Campaign ROAS",
      sublabel: "Targeted Meta & Google acquisition campaigns",
      badge: "Performance",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
      border: "border-cyan-400/30 hover:border-cyan-400/60",
      valueColor: "text-electric-gradient",
    },
    {
      numericTarget: 12000,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "Qualified Leads Generated",
      sublabel: "Targeted customer and buyer inquiries generated",
      badge: "Lead Velocity",
      icon: <Users className="w-5 h-5 text-amber-300" />,
      accent: "from-amber-400/20 via-orange-500/10 to-transparent",
      border: "border-amber-400/30 hover:border-amber-400/60",
      valueColor: "text-gold-gradient",
    },
    {
      numericTarget: 98,
      prefix: "",
      suffix: "%",
      decimals: 0,
      label: "Client Satisfaction Rate",
      sublabel: "Transparent reporting & agile growth support",
      badge: "Client Success",
      icon: <IndianRupee className="w-5 h-5 text-cyan-400" />,
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
            <span>Audited Campaign Metrics • Updated Monthly</span>
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
                  <AnimatedCounter 
                    target={stat.numericTarget}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
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

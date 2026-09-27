"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight, 
  Building2, 
  Share2, 
  Palette, 
  Target, 
  Video, 
  Laptop, 
  TrendingUp, 
  PhoneCall,
  CheckCircle2,
  Layers
} from "lucide-react";
import { portfolioProjects, portfolioCategories, PortfolioProject } from "@/data/portfolioData";

export function CreativePortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = activeCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "real-estate": return <Building2 className="w-3.5 h-3.5" />;
      case "social-media": return <Share2 className="w-3.5 h-3.5" />;
      case "branding": return <Palette className="w-3.5 h-3.5" />;
      case "ads": return <Target className="w-3.5 h-3.5" />;
      case "ai-videos": return <Video className="w-3.5 h-3.5" />;
      case "websites": return <Laptop className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      <div id="case-studies" className="scroll-mt-28" />
      
      {/* Ambient Flares */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Work & Verified Results</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            Creative <span className="text-gold-gradient">Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Explore actual client projects delivered by Himastech across Real Estate, Social Media, Branding, Paid Ads, AI Videos, and High-Performance Websites.
          </motion.p>
        </div>

        {/* 6 Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-12">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
                {cat.id !== "all" && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ml-0.5 ${
                    isActive ? "bg-slate-950/20 text-slate-950" : "bg-white/10 text-slate-400"
                  }`}>
                    {portfolioProjects.filter((p) => p.category === cat.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Compact Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Compact Project Image Frame */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/25 to-transparent" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-400/30 text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Primary Metric Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-lg bg-black/85 backdrop-blur-md text-white border border-white/20 text-[11px] font-black flex items-center gap-1 shadow-md">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span>{project.metrics[0]?.value}</span>
                      </span>
                    </div>
                  </div>

                  {/* Compact Project Details Content */}
                  <div className="p-4 sm:p-4.5">
                    {/* Client & Timeline */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
                      <span className="font-semibold text-slate-300 truncate max-w-[170px]">
                        {project.client}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {project.clientLocation}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-1.5">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal mb-3 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* 2-Metric Highlight Grid */}
                    <div className="grid grid-cols-2 gap-1.5 pt-2.5 border-t border-white/10 mb-3">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded-lg glass-subcard">
                          <div className="text-[9px] text-slate-400 font-semibold truncate">{m.label}</div>
                          <div className="text-xs sm:text-sm font-black text-amber-300">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-medium text-slate-400 glass-subcard px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action: Dedicated Link to Case Study Page */}
                <div className="p-4 sm:p-4.5 pt-0">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-amber-400 text-slate-200 hover:text-slate-950 font-bold text-[11px] uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-amber-400 flex items-center justify-between group/btn shadow-xs"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl glass-card-gold text-white relative overflow-hidden shadow-2xl border border-amber-400/30"
        >
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-amber-500/15 via-yellow-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Start Your Success Story
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
                Want Results Like These For Your Business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Book a free strategy session with our senior performance marketers. We will review your current marketing, dissect your competitors, and build your growth plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="#contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>GET FREE MARKETING CONSULTATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%20team%2C%20I%20reviewed%20your%20Creative%20Portfolio%20and%20would%20like%20to%20discuss%20a%20campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

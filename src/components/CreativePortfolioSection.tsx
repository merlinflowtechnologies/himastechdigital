"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Share2, 
  Palette, 
  Target, 
  Video, 
  Laptop, 
  TrendingUp, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { portfolioProjects, portfolioCategories } from "@/data/portfolioData";

export function CreativePortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) setHasDragged(true);
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-transparent border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      <div id="case-studies" className="scroll-mt-28" />
      
      {/* Ambient Flares */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black mb-3.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Proven Work &amp; Verified Results</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-2"
            >
              Creative <span className="text-gold-gradient">Portfolio.</span>
            </motion.h2>

            {/* Horizontal Swipe Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold mt-2">
              <span className="text-amber-400">←</span>
              <span>Drag or swipe horizontally to explore all projects ({filteredProjects.length})</span>
              <span className="text-amber-400">→</span>
            </div>
          </div>

          {/* Navigation Arrow Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/50 flex items-center justify-center transition-colors cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/50 flex items-center justify-center transition-colors cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-8">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
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

        {/* Horizontal Draggable & Swipeable Projects Track */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar select-none cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0 mb-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="w-[290px] sm:w-[320px] md:w-[340px] shrink-0 glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Compact Project Image Frame */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 290px, 340px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/25 to-transparent pointer-events-none" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-400/30 text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Primary Metric Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
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
                    onClick={(e) => {
                      if (hasDragged) e.preventDefault();
                    }}
                    className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-amber-400 text-slate-200 hover:text-slate-950 font-bold text-[11px] uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-amber-400 flex items-center justify-between group/btn shadow-xs cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

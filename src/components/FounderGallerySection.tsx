"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Award, 
  Building2, 
  GraduationCap, 
  Users, 
  Maximize2, 
  X,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

interface GalleryPhoto {
  id: string;
  title: string;
  category: "all" | "leadership" | "training" | "projects" | "site-visits";
  categoryLabel: string;
  src: string;
  location: string;
  year: string;
  description: string;
}

export function FounderGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Gallery Photos Collection - User can drop more photos into public/ and add here!
  const photos: GalleryPhoto[] = [
    {
      id: "photo-1",
      title: "Kishore Patel — Founder & Lead Strategist",
      category: "leadership",
      categoryLabel: "Executive Leadership",
      src: "/founder.jpeg",
      location: "Hyderabad, India",
      year: "2026",
      description: "Leading strategic growth advisory sessions, real estate acquisition funnels, and enterprise digital marketing roadmaps."
    },
    {
      id: "photo-2",
      title: "Real Estate Mastery Workshop & Training Session",
      category: "training",
      categoryLabel: "Mastery Academy",
      src: "/ceo.jpg",
      location: "Nagole Hub, Hyderabad",
      year: "2026",
      description: "Mentoring real estate builders, channel partners, and in-house marketing teams on speed-to-lead and HNI buyer psychology."
    },
    {
      id: "photo-3",
      title: "Kokapet High-Rise Luxury Project Site Visit",
      category: "site-visits",
      categoryLabel: "Site Visit",
      src: "/realty-hero.jpg",
      location: "Kokapet Financial District",
      year: "2025",
      description: "On-site review of 3D architectural masterplans, drone camera walkthrough angles, and sales closing office workflows."
    },
    {
      id: "photo-4",
      title: "Luxury Gated Villa Development Launch",
      category: "projects",
      categoryLabel: "Real Estate Project",
      src: "/luxury-villa.jpg",
      location: "Mokila, Hyderabad",
      year: "2025",
      description: "Full-funnel digital launch campaign resulting in 84 luxury villas sold out within 6 months of campaign deployment."
    },
    {
      id: "photo-5",
      title: "Creative Direct-Response Video Studio",
      category: "projects",
      categoryLabel: "Media Production",
      src: "/ai-video-portfolio.jpg",
      location: "Production Studio",
      year: "2026",
      description: "Architecting high-CTR social media video hooks, 4K aerial drone shoots, and viral reels for real estate developments."
    },
    {
      id: "photo-6",
      title: "Strategic Brand Identity & Campaign Direction",
      category: "leadership",
      categoryLabel: "Brand Architecture",
      src: "/branding-portfolio.jpg",
      location: "Himastech Strategy Desk",
      year: "2026",
      description: "High-ticket project brand book design, RERA compliance verification, and investor presentation materials."
    },
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "leadership", label: "Leadership & Founder" },
    { id: "training", label: "Academy & Workshops" },
    { id: "site-visits", label: "Project Site Visits" },
    { id: "projects", label: "Client Developments" },
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Founder &amp; Agency Moments Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            Moments, Mentorship &amp;{" "}
            <span className="text-gold-gradient">Milestones.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            A visual chronicle of Kishore Patel&apos;s leadership journey—from on-site real estate project inspections and live corporate workshops to high-ticket campaign launches.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? "bg-amber-400 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105"
                    : "glass-subcard text-slate-300 hover:text-white border-white/10 hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 shadow-xl group flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div 
                  onClick={() => setActivePhoto(photo)}
                  className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-amber-300">
                      {photo.categoryLabel}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-slate-300 font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{photo.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.year}</span>
                    </span>
                  </div>
                </div>

                {/* Card Info Box */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {photo.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span className="text-[11px] text-amber-400/90 font-medium">Himastech Archives</span>
                    <button
                      onClick={() => setActivePhoto(photo)}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1 text-xs font-bold cursor-pointer"
                    >
                      <span>View Full Photo</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* User Photo Upload Prompt Helper Box */}
        <div className="p-5 sm:p-6 rounded-2xl glass-subcard border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Want to add more of your photos to this gallery?
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Simply place your image files in the <code className="text-amber-300 font-mono">public/</code> directory and add a tile entry in <code className="text-cyan-300 font-mono">FounderGallerySection.tsx</code>.
              </p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer"
          >
            Connect With Kishore Patel
          </Link>
        </div>

      </div>

      {/* Lightbox Modal Popup */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl glass-modal border border-white/20 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[55vh] sm:h-[65vh] w-full">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-[#07090e]/95 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    {activePhoto.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">
                    {activePhoto.location} • {activePhoto.year}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  {activePhoto.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {activePhoto.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export function FounderGallerySection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // Gallery Photos - Pure imagery without any text overlays or description boxes
  const photos = [
    { src: "/saik.jpeg", alt: "Gallery Photo 1" },
    { src: "/realty-hero.jpg", alt: "Gallery Photo 2" },
    { src: "/luxury-villa.jpg", alt: "Gallery Photo 3" },
    { src: "/ceo.jpg", alt: "Gallery Photo 4" },
    { src: "/ai-video-portfolio.jpg", alt: "Gallery Photo 5" },
    { src: "/branding-portfolio.jpg", alt: "Gallery Photo 6" },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Photo <span className="text-gold-gradient">Gallery.</span>
          </motion.h2>
        </div>

        {/* Normal Clean Photo Grid (Zero Texts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setActivePhoto(photo.src)}
              className="relative h-72 sm:h-80 md:h-84 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 group shadow-xl bg-[#0c1020]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
              />
              
              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-400 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Pure Lightbox Modal (Zero Text, Just Full Image) */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center bg-black"
            >
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-pointer border border-white/20 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[70vh] sm:h-[80vh]">
                <Image
                  src={activePhoto}
                  alt="Gallery Full Photo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

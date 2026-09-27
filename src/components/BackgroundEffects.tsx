"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Warm Gold Flare - Top Center/Right */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="hidden md:block absolute -top-32 right-1/4 w-[750px] h-[500px] rounded-full bg-gradient-to-b from-amber-500/15 via-yellow-500/10 to-transparent blur-[140px] will-change-transform"
      />

      {/* Subtle Electric-Blue Fill Light - Top/Mid Left */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute top-1/4 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent blur-[160px] will-change-transform"
      />

      {/* Subtle Deep Gold Ambient Flare - Bottom Right */}
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut", delay: 4 }}
        className="hidden md:block absolute bottom-1/4 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-[150px] will-change-transform"
      />

      {/* Ultra-Clean Architectural Blueprint Dot Matrix Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_35%,#000_40%,transparent_100%)] opacity-70" 
      />
    </div>
  );
}

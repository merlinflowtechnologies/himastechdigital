"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera, ChevronLeft, ChevronRight } from "lucide-react";

export function FounderGallerySection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // All 19 Photos from public/gallery/
  const photos = [
    { src: "/gallery/cimg3.jpeg", alt: "Award Presentation with Celebrity Guest" },
    { src: "/gallery/cimg2.jpeg", alt: "BBG Group Award Felicitation on Stage" },
    { src: "/gallery/cimg1.jpeg", alt: "Building Blocks Stage Award & Honors" },
    { src: "/gallery/img2.jpeg", alt: "Next India Developers Builder Felicitation" },
    { src: "/gallery/img10.jpeg", alt: "Executive Boardroom Training Masterclass" },
    { src: "/gallery/img12.jpeg", alt: "Presentation to Corporate Leaders" },
    { src: "/gallery/img5.jpeg", alt: "SGD Developers Keynote Presentation" },
    { src: "/gallery/img1.jpeg", alt: "SGD Developers Conference Session" },
    { src: "/gallery/img8.jpeg", alt: "Strategy & Whiteboard Direction Session" },
    { src: "/gallery/img3.jpeg", alt: "Real Estate Mastery Workshop Attendees" },
    { src: "/gallery/img4.jpeg", alt: "Interactive Team Advisory Meeting" },
    { src: "/gallery/img6.jpeg", alt: "Corporate Strategy Discussion" },
    { src: "/gallery/img7.jpeg", alt: "Live Mentorship & Coaching Session" },
    { src: "/gallery/img9.jpeg", alt: "Team Strategy & Review" },
    { src: "/gallery/img11.jpeg", alt: "Sales Team Architecture Workshop" },
    { src: "/gallery/img13.jpeg", alt: "Strategic Planning Discussion" },
    { src: "/gallery/img14.jpeg", alt: "Project Review & Execution Session" },
    { src: "/gallery/img16.jpeg", alt: "Executive Mentorship Group" },
    { src: "/gallery/img17.jpeg", alt: "Agency Milestones & Workshop Celebration" },
  ];

  // Duplicated for an unbroken infinite seamless conveyor loop (no start, no end)
  const displayPhotos = [...photos, ...photos];

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const halfWidth = container.scrollWidth / 2;
    const scrollAmount = 360;

    if (direction === "left") {
      if (container.scrollLeft <= scrollAmount) {
        container.scrollLeft += halfWidth;
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      }
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

  // Continuous smooth auto-scroll effect with seamless infinite wrap
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollAcc = container.scrollLeft;
    const speed = 2.2; // Fast, fluid continuous auto-scroll

    const step = () => {
      const halfWidth = container.scrollWidth / 2;
      if (halfWidth > 0) {
        if (!isHovered && !isDragging && !activePhoto) {
          scrollAcc += speed;
          if (scrollAcc >= halfWidth) {
            scrollAcc -= halfWidth;
          }
          container.scrollLeft = scrollAcc;
        } else {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
          scrollAcc = container.scrollLeft;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isDragging, activePhoto]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left/Right Controls and Swipe Hint */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-black mb-3 shadow-sm"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Moments &amp; Milestones ({photos.length} Photos)</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]"
            >
              Photo <span className="text-gold-gradient">Gallery.</span>
            </motion.h2>

            {/* Horizontal Swipe Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold mt-3">
              <span className="text-amber-400">←</span>
              <span>Drag or swipe horizontally to see all photos</span>
              <span className="text-amber-400">→</span>
            </div>
          </div>

          {/* Navigation Arrow Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
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

        {/* Horizontal Draggable / Auto-Scrolling Photo Track */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseUp();
          }}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar select-none cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0`}
        >
          {displayPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              onClick={() => {
                if (!hasDragged) {
                  setActivePhoto(photo.src);
                }
              }}
              className="w-[280px] sm:w-[320px] md:w-[350px] h-72 sm:h-80 md:h-96 shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 group shadow-2xl bg-[#0c1020] relative"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 280px, 350px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out pointer-events-none"
              />
              
              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-400 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-2xl">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Pure Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/94 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center bg-black"
            >
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-pointer border border-white/20 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[70vh] sm:h-[82vh]">
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

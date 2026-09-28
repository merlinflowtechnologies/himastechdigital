"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink,
  Volume2,
  VolumeX
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

interface SocialPost {
  id: string;
  author: string;
  collaborator?: string;
  avatar: string;
  audio: string;
  thumbnail: string;
  videoSrc?: string;
  badgeTitle: string;
  badgeSubtitle: string;
  likes: number;
  caption: string;
  hashtags: string[];
  commentsCount: number;
  timeAgo: string;
  instagramUrl: string;
}

const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "post-1",
    author: "himastech_official",
    collaborator: "kishorepatel_growth",
    avatar: "/saik.jpeg",
    audio: "Original audio • Real Estate Strategy",
    thumbnail: "/saik.jpeg",
    videoSrc: "/splash.mp4",
    badgeTitle: "KISHORE PATEL",
    badgeSubtitle: "Founder & Lead Strategist",
    likes: 1482,
    caption: "Why 80% of real estate lead generation campaigns fail: Builders rely on cold clicks without sub-5-minute speed-to-lead WhatsApp routing. Here is the exact qualification funnel we deployed to move ₹120Cr+ inventory.",
    hashtags: ["#RealEstateMarketing", "#HyderabadRealty", "#MetaAds", "#KishorePatel", "#SalesFunnel"],
    commentsCount: 64,
    timeAgo: "2 days ago",
    instagramUrl: "https://www.instagram.com/himastech"
  },
  {
    id: "post-2",
    author: "himastech_official",
    collaborator: "prestige_estates",
    avatar: "/realty-hero.jpg",
    audio: "Original audio • Luxury Drone Beats",
    thumbnail: "/realty-hero.jpg",
    videoSrc: "/splash.mp4",
    badgeTitle: "PRESTIGE ESTATES",
    badgeSubtitle: "Kokapet Luxury High-Rise",
    likes: 2130,
    caption: "Grateful for the incredible milestone on the Kokapet Luxury High-Rise project! Over ₹48Cr+ inventory booked within 90 days of deploying hyper-targeted NRI Meta & Google Search ad stacks.",
    hashtags: ["#KokapetHighRise", "#LuxuryLiving", "#SiteVisitFunnel", "#HimastechResults"],
    commentsCount: 92,
    timeAgo: "4 days ago",
    instagramUrl: "https://www.instagram.com/himastech"
  },
  {
    id: "post-3",
    author: "himastech_official",
    collaborator: "urbanrise_villas",
    avatar: "/luxury-villa.jpg",
    audio: "Original audio • Architectural Walkthrough",
    thumbnail: "/luxury-villa.jpg",
    videoSrc: "/splash.mp4",
    badgeTitle: "URBANRISE VILLAS",
    badgeSubtitle: "Gated Luxury Community",
    likes: 1845,
    caption: "4K cinematic drone walkthrough reel engineered for Instagram algorithm. Generated 42 verified weekend site visits in the first 72 hours of campaign scaling!",
    hashtags: ["#VillaDevelopment", "#MokilaVillas", "#RealEstateReels", "#LeadGeneration"],
    commentsCount: 78,
    timeAgo: "1 week ago",
    instagramUrl: "https://www.instagram.com/himastech"
  },
  {
    id: "post-4",
    author: "himastech_official",
    collaborator: "himastech_academy",
    avatar: "/ceo.jpg",
    audio: "Original audio • Live Workshop Session",
    thumbnail: "/ceo.jpg",
    videoSrc: "/splash.mp4",
    badgeTitle: "REAL ESTATE MASTERY",
    badgeSubtitle: "Live Corporate Workshop",
    likes: 968,
    caption: "Inside our weekend Real Estate Marketing Mastery masterclass led by Kishore Patel. Mentoring channel partners and sales directors on WhatsApp CRM automation and high-ticket conversion scripts.",
    hashtags: ["#TrainingAcademy", "#KishorePatel", "#SalesTraining", "#DigitalMarketingCourse"],
    commentsCount: 45,
    timeAgo: "1 week ago",
    instagramUrl: "https://www.instagram.com/himastech"
  },
  {
    id: "post-5",
    author: "himastech_official",
    collaborator: "himastech_studios",
    avatar: "/ai-video-portfolio.jpg",
    audio: "Original audio • Production Studio Mix",
    thumbnail: "/ai-video-portfolio.jpg",
    videoSrc: "/splash.mp4",
    badgeTitle: "DIRECT-RESPONSE STUDIO",
    badgeSubtitle: "3-Second Hook Production",
    likes: 1620,
    caption: "One filming session = 10+ dynamic vertical reels cut for Meta, YouTube Shorts, and Instagram. Stop running static banners when high-CTR video walkthroughs convert 3.8x higher!",
    hashtags: ["#VideoProduction", "#DroneCinematography", "#AdCreative", "#ReelsViral"],
    commentsCount: 53,
    timeAgo: "2 weeks ago",
    instagramUrl: "https://www.instagram.com/himastech"
  },
  {
    id: "post-6",
    author: "himastech_official",
    collaborator: "himastech_creative",
    avatar: "/branding-portfolio.jpg",
    audio: "Original audio • Creative Studio",
    thumbnail: "/branding-portfolio.jpg",
    videoSrc: "/splash.mp4",
    badgeTitle: "BRAND ARCHITECTURE",
    badgeSubtitle: "High-Ticket Identity & 3D",
    likes: 1120,
    caption: "Crafting luxury brand books, 3D architectural project identities, and RERA-approved digital collateral that immediately establish premium credibility in the market.",
    hashtags: ["#BrandDesign", "#LuxuryRealEstate", "#ArchitecturalRenders", "#HimastechAgency"],
    commentsCount: 39,
    timeAgo: "2 weeks ago",
    instagramUrl: "https://www.instagram.com/himastech"
  }
];

export function SocialMediaActivitySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVideoPost, setActiveVideoPost] = useState<SocialPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    SOCIAL_POSTS.forEach((p) => {
      counts[p.id] = p.likes;
    });
    return counts;
  });
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Mouse drag to scroll handlers
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

  // Continuous smooth fast auto-scroll effect (pauses on hover, drag, or modal view)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollAcc = container.scrollLeft;
    const speed = 2.0; // Fast, fluid 60fps auto-scroll

    const step = () => {
      if (!isHovered && !isDragging && !activeVideoPost) {
        scrollAcc += speed;
        if (scrollAcc >= container.scrollWidth - container.clientWidth - 2) {
          scrollAcc = 0;
        }
        container.scrollLeft = Math.floor(scrollAcc);
      } else {
        scrollAcc = container.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isDragging, activeVideoPost]);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyLiked = likedPosts[id];
    setLikedPosts((prev) => ({ ...prev, [id]: !isCurrentlyLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: isCurrentlyLiked ? prev[id] - 1 : prev[id] + 1
    }));
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="social-activity" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-pink-500/15 to-purple-500/15 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-black mb-3.5 shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Live Social Media Activity • Instagram Reels</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]"
            >
              Social Media <span className="text-gold-gradient">Activity.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium mt-2 max-w-2xl"
            >
              Watch our latest client project reels, on-site walkthroughs, founder strategy breakdowns, and training sessions direct from Instagram.
            </motion.p>
          </div>

          {/* Carousel Arrows & Instagram CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.instagram.com/himastech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs hover:opacity-95 transition-all flex items-center gap-2 shadow-lg shadow-pink-500/20 cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>Follow @himastech</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Reel Track with Auto-Scroll */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className={`flex gap-5 sm:gap-6 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {SOCIAL_POSTS.map((post, idx) => {
            const isLiked = likedPosts[post.id];
            const currentLikes = likeCounts[post.id];

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="w-[285px] sm:w-[305px] md:w-[315px] shrink-0 rounded-2xl bg-[#0c1220] border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300"
              >
                {/* 1. Card Top Bar (Instagram Header) */}
                <div className="p-3 border-b border-white/10 bg-[#090d16] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shrink-0">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                        <Image
                          src={post.avatar}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-white truncate flex items-center gap-1">
                        <span>{post.author}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {post.audio}
                      </div>
                    </div>
                  </div>

                  <a
                    href={post.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-white bg-[#0095f6] hover:bg-[#1877f2] px-2.5 py-1 rounded-md transition-colors shrink-0"
                  >
                    View profile
                  </a>
                </div>

                {/* 2. Reel Video / Media Container */}
                <div 
                  onClick={() => {
                    if (!hasDragged) setActiveVideoPost(post);
                  }}
                  className="relative h-72 sm:h-80 w-full overflow-hidden cursor-pointer bg-black group/media"
                >
                  <Image
                    src={post.thumbnail}
                    alt={post.badgeTitle}
                    fill
                    sizes="(max-width: 768px) 285px, 315px"
                    className="object-cover object-top group-hover/media:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                  {/* Centered Video Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover/media:scale-115 group-hover/media:bg-amber-400 group-hover/media:text-slate-950 transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Lower Third Speaker / Client Badge (Exact MBL Style) */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-center">
                    <div className="text-xs font-black tracking-wider text-amber-300 uppercase">
                      {post.badgeTitle}
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">
                      {post.badgeSubtitle}
                    </div>
                  </div>
                </div>

                {/* 3. Card Bottom Bar (Instagram Actions, Likes & Caption) */}
                <div className="p-3.5 bg-[#090d16] flex flex-col justify-between flex-1 text-xs">
                  {/* View More on Instagram Link */}
                  <div className="mb-2">
                    <a
                      href={post.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0095f6] hover:underline flex items-center gap-1"
                    >
                      <span>View more on Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Social Action Bar */}
                  <div className="flex items-center justify-between text-slate-200 mb-2">
                    <div className="flex items-center gap-3.5">
                      <button
                        onClick={(e) => handleLike(post.id, e)}
                        className="hover:text-red-500 transition-colors cursor-pointer"
                        aria-label="Like post"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-transform active:scale-125 ${
                            isLiked ? "fill-red-500 text-red-500" : "text-white"
                          }`} 
                        />
                      </button>
                      <button 
                        onClick={() => setActiveVideoPost(post)}
                        className="hover:text-cyan-400 transition-colors cursor-pointer"
                        aria-label="View comments"
                      >
                        <MessageCircle className="w-5 h-5 text-white" />
                      </button>
                      <a
                        href={post.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition-colors cursor-pointer"
                        aria-label="Share post"
                      >
                        <Send className="w-4.5 h-4.5 text-white" />
                      </a>
                    </div>
                    <button 
                      onClick={() => handleLike(post.id, {} as any)}
                      className="hover:text-amber-400 transition-colors cursor-pointer"
                      aria-label="Save post"
                    >
                      <Bookmark className="w-4.5 h-4.5 text-slate-400 hover:text-white" />
                    </button>
                  </div>

                  {/* Likes Count */}
                  <div className="font-extrabold text-white text-xs mb-1.5">
                    {currentLikes.toLocaleString()} likes
                  </div>

                  {/* Caption & Author */}
                  <div className="text-[11px] text-slate-300 leading-relaxed line-clamp-3 mb-2">
                    <span className="font-bold text-white mr-1.5">{post.author}</span>
                    <span>{post.caption}</span>
                  </div>

                  {/* Hashtags */}
                  <div className="text-[10px] text-cyan-400/90 font-medium truncate mb-2">
                    {post.hashtags.join(" ")}
                  </div>

                  {/* Timestamp & Comment Prompt */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{post.timeAgo}</span>
                    <button 
                      onClick={() => setActiveVideoPost(post)}
                      className="text-slate-400 hover:text-white cursor-pointer font-medium"
                    >
                      View all {post.commentsCount} comments
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Video / Reel Player Modal */}
      <AnimatePresence>
        {activeVideoPost && (
          <div 
            onClick={() => setActiveVideoPost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#090d16] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoPost(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-pointer border border-white/20 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Column */}
              <div className="relative w-full md:w-1/2 h-[50vh] md:h-[75vh] bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={activeVideoPost.videoSrc || "/splash.mp4"}
                  poster={activeVideoPost.thumbnail}
                  controls
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* Sound Toggle Button */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 left-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/20"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Reel Information Column */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[75vh] bg-[#0c1220] border-t md:border-t-0 md:border-l border-white/10 text-xs">
                <div>
                  {/* Author Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                    <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 to-pink-500 shrink-0">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                        <Image
                          src={activeVideoPost.avatar}
                          alt={activeVideoPost.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">
                        {activeVideoPost.author}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {activeVideoPost.audio}
                      </div>
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-4">
                    <div className="text-xs font-black text-amber-300 uppercase">
                      {activeVideoPost.badgeTitle}
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium">
                      {activeVideoPost.badgeSubtitle}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-xs text-slate-200 leading-relaxed space-y-2 mb-4">
                    <p>{activeVideoPost.caption}</p>
                    <div className="text-cyan-400 font-medium">
                      {activeVideoPost.hashtags.join(" ")}
                    </div>
                  </div>
                </div>

                {/* Actions & CTA */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-white">
                      {likeCounts[activeVideoPost.id]?.toLocaleString()} likes
                    </span>
                    <span>{activeVideoPost.timeAgo}</span>
                  </div>

                  <a
                    href={activeVideoPost.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Watch Full Reel on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

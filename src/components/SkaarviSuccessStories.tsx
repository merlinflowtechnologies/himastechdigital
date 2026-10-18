"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Play, 
  Star, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Award, 
  Quote, 
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StudentStory {
  id: string;
  name: string;
  role: string;
  metric: string;
  quote: string;
  tag: string;
  accent: string;
}

export function SkaarviSuccessStories() {
  const [activeStory, setActiveStory] = useState<StudentStory | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const stories: StudentStory[] = [
    {
      id: "vamsi-krishna",
      name: "Vamsi Krishna",
      role: "Student & Freelancer",
      metric: "First 3 Client Retainers",
      quote: "I'm thrilled to have had the opportunity to learn from Surekha! Her training sessions are a total game-changer. She breaks down complex concepts about Facebook and Instagram ads into easy-to-understand, bite-sized pieces, making it perfect for beginners and experienced professionals alike.",
      tag: "Meta Ads Mastery",
      accent: "from-blue-600 to-indigo-800"
    },
    {
      id: "sampath-kumar",
      name: "Sampath Kumar",
      role: "Real Estate Agent • Hyderabad",
      metric: "4.5x Site Visits in 30 Days",
      quote: "I am a realtor in Hyderabad. I joined Surekha mam classes to grow my business. These classes and trainings helped me a lot for my business. The targeted Meta ad funnels and WhatsApp scripts helped me close gated community deals easily.",
      tag: "Real Estate Growth",
      accent: "from-emerald-600 to-teal-800"
    },
    {
      id: "hima-bindhu",
      name: "Hima Bindhu",
      role: "Homemaker & Affiliate Marketer",
      metric: "Part-Time Income Online",
      quote: "Nenu homemaker ga Surekha gaaru cheppina techniques follow ayyanu. Free time lo income ela generate cheyyalo step-by-step nerpincharu. Training lo cheppina content easy ga practice cheyyagalanu, Thanks to HIMASTECH.",
      tag: "Telugu Community",
      accent: "from-orange-500 to-red-600"
    },
    {
      id: "madhusoudhan",
      name: "Madhusoudhan",
      role: "Business Owner • Construction Supplies",
      metric: "12+ B2B Client Contracts",
      quote: "Surekha gaaru training lo cheppina knowledge naku baga use ayyindi. Marketing skills improve cheyyataniki oka right mentor mam la unaru. Practical ga cheppina strategies implement cheyyadam chala easy.",
      tag: "Business Expansion",
      accent: "from-purple-600 to-indigo-900"
    },
    {
      id: "gade-balaji",
      name: "Gade Balaji",
      role: "Software Engineer",
      metric: "Weekend Agency Freelancer",
      quote: "As a full-time software engineer, I was always looking for ways to utilize my free time productively. Joining HIMASTECH Digital Marketing turned out to be one of the best decisions of my life. Surekha’s training introduced me to digital skills that I could easily implement in my part-time.",
      tag: "Tech to Marketing",
      accent: "from-cyan-600 to-blue-800"
    },
    {
      id: "chandra-leela",
      name: "Chandra Leela",
      role: "Nutritionist & Health Coach",
      metric: "Consistent Online Consultation Leads",
      quote: "Surekha mam herself directly takes live trainings for us. Those trainings are so valuable and informative. She explains everything step by step and everyone can understand easily.",
      tag: "Healthcare Brand",
      accent: "from-rose-500 to-pink-700"
    },
    {
      id: "roja-rani",
      name: "Roja Rani",
      role: "Homemaker (2 Kids)",
      metric: "Independent Work-From-Home",
      quote: "Iam Roja. Nenu home maker, 2 kids. Vere platform lo join iyyanu but vallu cheppe Hindi and English classes sariga ardham kani time lo sureka madam Instagram lo telugulo cheppe classes chusi impress iyyi HIMASTECH lo join ayyi courses nerchukunnanu.",
      tag: "Telugu Mother",
      accent: "from-amber-500 to-orange-700"
    },
    {
      id: "sandhya",
      name: "Sandhya",
      role: "Affiliate Marketer",
      metric: "Affiliate Career Shift",
      quote: "Surekha mam classes lo chala confidence kaligincharu. Nenu part-time ga panichesina affiliate marketing ni ippudu career chesanu. Mam cheppina tips chala easy ga implement cheyyachu.",
      tag: "Affiliate Income",
      accent: "from-teal-600 to-emerald-800"
    },
    {
      id: "divya",
      name: "Divya",
      role: "Homemaker • Amazon Seller",
      metric: "Monthly Side Commissions",
      quote: "Nenu oka homemaker ni, free time lo income generate cheyyali ani chala rojulu alochinchanu. HIMASTECH platform lo cheppina Amazon Affiliate Marketing course nannu chala inspire chesindi. Now I earn confidently from home.",
      tag: "Amazon Partner",
      accent: "from-blue-600 to-cyan-800"
    },
    {
      id: "phani-teja",
      name: "Phani Teja",
      role: "Homemaker & Content Creator",
      metric: "10K+ Followers & Brand Deals",
      quote: "As a homemaker, I always wanted to make use of my free time effectively. HIMASTECH Digital Marketing training gave me the confidence to start earning online. Her classes are straightforward, practical, and super motivating.",
      tag: "Canva & Video",
      accent: "from-violet-600 to-purple-800"
    }
  ];

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => el.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Optional subtle auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 15) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="success-stories" className="py-20 bg-white/40 backdrop-blur-xs text-slate-800 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/70 shadow-md">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#f15a22] bg-[#f15a22]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              SUCCESS STORIES &amp; REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062d72] tracking-tight">
              What Our <span className="text-[#f15a22]">Students &amp; Partners</span> Say
            </h2>
            <div className="w-16 h-1 bg-[#f15a22] rounded-full mt-3 mb-4" />
            <p className="text-xs sm:text-sm text-slate-600">
              Real transformations from Telugu homemakers, realtors, students, software professionals, and business owners across our cohorts.
            </p>
          </div>

          {/* Scroll Controls (Arrows & Counter) */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">
              Swipe or Click to Explore ({stories.length} Stories)
            </span>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                canScrollLeft 
                  ? "text-[#062d72] hover:bg-[#062d72] hover:text-white hover:border-[#062d72] hover:scale-105" 
                  : "text-slate-300 opacity-50 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                canScrollRight 
                  ? "text-[#062d72] hover:bg-[#062d72] hover:text-white hover:border-[#062d72] hover:scale-105" 
                  : "text-slate-300 opacity-50 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Testimonials Track */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1 focus:outline-none"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none" 
            }}
          >
            {stories.map(story => (
              <div
                key={story.id}
                className="w-[290px] sm:w-[340px] md:w-[370px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group"
              >
                {/* Video Mockup Frame */}
                <div 
                  onClick={() => setActiveStory(story)}
                  className={`relative h-48 sm:h-52 bg-gradient-to-br ${story.accent} p-4 flex flex-col justify-between text-white cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                  {/* Tag & Rating */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[10px] font-bold">
                      {story.tag}
                    </span>
                    <div className="flex text-amber-300 text-xs">
                      {"★".repeat(5)}
                    </div>
                  </div>

                  {/* Central Play Button */}
                  <div className="relative z-10 self-center">
                    <div className="w-13 h-13 rounded-full bg-white text-[#062d72] shadow-2xl flex items-center justify-center group-hover:scale-115 transition-transform group-hover:bg-[#f15a22] group-hover:text-white">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="relative z-10 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg text-center text-xs font-black text-white">
                    {story.metric}
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-black text-slate-900 text-base mb-0.5">
                      {story.name}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#062d72] mb-3">
                      {story.role}
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed italic">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Student
                    </span>
                    <button 
                      onClick={() => setActiveStory(story)}
                      className="text-[#f15a22] font-bold hover:underline cursor-pointer"
                    >
                      Read Story →
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Fade Gradient on right edge indicating more content to scroll */}
          <div className="pointer-events-none absolute top-0 bottom-6 right-0 w-16 bg-gradient-to-l from-[#f0f4f5] to-transparent hidden md:block" />
        </div>

        {/* Video Player Modal Simulation */}
        <AnimatePresence>
          {activeStory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
              >
                <button 
                  onClick={() => setActiveStory(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#f15a22] bg-[#f15a22]/10 px-3 py-1 rounded-full">
                    HIMASTECH Student Transformation Story
                  </span>
                  <h3 className="text-2xl font-black text-[#062d72] mt-2">
                    {activeStory.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold">
                    {activeStory.role}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#062d72]/5 border border-[#062d72]/15 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 mb-4">
                  <div className="font-black text-[#062d72] flex items-center gap-1.5 text-sm">
                    <Award className="w-4 h-4 text-[#f15a22]" />
                    <span>Key Outcome: {activeStory.metric}</span>
                  </div>
                  <p className="italic leading-relaxed">
                    "{activeStory.quote}"
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enrolled &amp; mentored through Surekha Mam's live Telugu cohort.</span>
                </div>

                <div className="flex gap-2">
                  <a 
                    href={`https://wa.me/916304989071?text=${encodeURIComponent(`Hi HIMASTECH Digital Marketing, I saw ${activeStory.name}'s story and want to join the next batch.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask About This Cohort on WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

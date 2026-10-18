"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  X,
  PlayCircle,
  Sparkles,
  MessageCircle
} from "lucide-react";

export interface Course {
  id: string;
  category: "all" | "excel" | "affiliate" | "ai" | "design" | "realty";
  categoryLabel: string;
  badge: string;
  title: string;
  description: string;
  instructor: string;
  instructorRole: string;
  duration: string;
  lessons: number;
  rating: number;
  reviewsCount: number;
  originalPrice: string;
  discountedPrice: string;
  language: string;
  image: string;
  modules: string[];
}

import initialCourses from "@/data/coursesData.json";

interface SkaarviCoursesSectionProps {
  onOpenRegisterModal?: () => void;
}

export function SkaarviCoursesSection({ onOpenRegisterModal }: SkaarviCoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const [courses, setCourses] = useState<Course[]>(initialCourses as Course[]);

  useEffect(() => {
    fetch("/api/courses")
      .then(r => r.json())
      .then(d => {
        if (d.success && Array.isArray(d.courses) && d.courses.length > 0) {
          setCourses(d.courses);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "excel", label: "MS Excel" },
    { id: "affiliate", label: "Affiliate & Reselling" },
    { id: "ai", label: "AI & Faceless Video" },
    { id: "design", label: "Design & Video Editing" },
    { id: "realty", label: "Real Estate Marketing" }
  ];

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-white/40 backdrop-blur-xs text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/70 shadow-md">
          <span className="text-xs font-black uppercase tracking-widest text-[#f15a22] bg-[#f15a22]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            LEARN TODAY • COURSES OFFERED
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#062d72] tracking-tight">
            Courses <span className="text-[#f15a22]">Offered</span> in Telugu
          </h2>
          <div className="w-16 h-1 bg-[#f15a22] rounded-full mx-auto mt-3 mb-4" />
          <p className="text-xs sm:text-sm text-slate-600">
            Practical, future-ready courses taught in simple Telugu with live weekly mentoring, step-by-step practice tasks, and recognized completion certificates.
          </p>
        </div>

        {/* Founder Mentorship Spotlight Banner - Direct Clear View in Courses Section */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-gradient-to-br from-[#061838] via-[#0a2550] to-[#062d72] p-1 sm:p-2 shadow-2xl border-2 border-amber-400/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#061838]/90 via-[#0a2550]/80 to-transparent">
            
            {/* Left: Founder Photo with Clear High-Definition View */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl aspect-[4/4.5] sm:aspect-[4/4.2]">
                <Image 
                  src="/himastech-funnel-whiteboard.jpg" 
                  alt="Kishore Patel - Real Estate Funnel & Automation Strategy Session"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 brightness-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/40">
                  ★ Founder Mentorship
                </div>
                <div className="absolute bottom-3 inset-x-3 rounded-xl bg-slate-950/80 backdrop-blur-md p-3 border border-white/20 text-center">
                  <div className="text-xs font-black text-white">Kishore Patel</div>
                  <div className="text-[10px] text-amber-300 font-semibold">Founder &amp; Real Estate Growth Mentor</div>
                </div>
              </div>
            </div>

            {/* Right: Masterclass Highlights & Direct WhatsApp Connect */}
            <div className="lg:col-span-7 text-white space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                FLAGSHIP FOUNDER MASTERCLASS IN TELUGU
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Digital Realty Marketing &amp; High-Ticket Lead Gen
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Learn directly from the HIMASTECH Founder how to generate verified buyer leads for gated villas, luxury apartments, and open plots in Hyderabad using Meta Broad AI and WhatsApp funnels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-on-1 Strategy &amp; Ad Setup</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NRI &amp; Luxury Buyer Targeting</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly Live Zoom Reviews</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Practical Telugu Explanations</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 flex-wrap">
                <a
                  href="https://wa.me/916304989071?text=Hi%20HIMASTECH,%20I%20am%20interested%20in%20Founder-Led%20Real%20Estate%20Digital%20Marketing%20Mentorship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
                <button
                  onClick={() => {
                    const realtyCourse = courses.find(c => c.id === "real-estate-sales-marketing");
                    if (realtyCourse) setSelectedCourse(realtyCourse);
                  }}
                  className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs border border-white/30 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>View Full Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#062d72] text-white shadow-md shadow-[#062d72]/20"
                  : "bg-white/80 text-slate-700 hover:bg-white border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div
              key={course.id}
              className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-white/80 flex flex-col justify-between group"
            >
              <div>
                {/* Course Thumbnail Image with Badges */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white border border-white/20">
                      {course.categoryLabel}
                    </span>
                    <span className="text-[10px] font-black bg-[#f15a22] text-white px-2.5 py-1 rounded-full shadow-md">
                      {course.badge}
                    </span>
                  </div>

                  {/* Bottom Image Stats Bar */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white z-10 font-semibold">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amber-300 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {course.rating} ({course.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="text-[11px] font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
                    <span>Mentor:</span>
                    <strong className="text-[#062d72] font-bold">{course.instructor}</strong>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#062d72] mb-2 line-clamp-2 leading-snug group-hover:text-[#f15a22] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {course.modules.slice(0, 2).map((mod, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Footer & Price */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-1.5">
                      {course.originalPrice}
                    </span>
                    <span className="text-xl font-black text-[#062d72]">
                      {course.discountedPrice}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Lifetime Replay Access
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-[#062d72] hover:text-[#062d72] text-xs font-bold transition-all text-center cursor-pointer"
                  >
                    View Curriculum
                  </button>

                  <button
                    onClick={onOpenRegisterModal || (() => {
                      const text = `Hi HIMASTECH Digital Marketing, I want to enroll in ${course.title} for ${course.discountedPrice}`;
                      window.open(`https://wa.me/916304989071?text=${encodeURIComponent(text)}`, "_blank");
                    })}
                    className="py-2.5 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white text-xs font-bold transition-all text-center shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Curriculum Modal */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#f15a22] bg-[#f15a22]/10 px-2.5 py-1 rounded-full">
                    {selectedCourse.categoryLabel} • {selectedCourse.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#062d72] mt-2">
                    {selectedCourse.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold mt-1">
                    Lead Mentor: {selectedCourse.instructor} • {selectedCourse.duration}
                  </div>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-5">
                  <Image 
                    src={selectedCourse.image} 
                    alt={selectedCourse.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedCourse.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#f15a22]" />
                    <span>Complete Course Curriculum Modules</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedCourse.modules.map((mod, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#062d72] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="font-medium leading-relaxed">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#062d72]/5 border border-[#062d72]/15 flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-2">
                      {selectedCourse.originalPrice}
                    </span>
                    <span className="text-2xl font-black text-[#062d72]">
                      {selectedCourse.discountedPrice}
                    </span>
                    <div className="text-[10px] font-bold text-emerald-700">
                      Includes Weekly Live Zoom Mentoring in Telugu
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/916304989071?text=${encodeURIComponent(`Hi HIMASTECH Digital Marketing, I want to enroll in ${selectedCourse.title} for ${selectedCourse.discountedPrice}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enroll on WhatsApp</span>
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

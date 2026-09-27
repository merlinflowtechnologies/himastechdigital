"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Target, 
  Building2, 
  Bot, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Clock, 
  Zap, 
  TrendingUp, 
  Layers, 
  X, 
  UserCheck, 
  Laptop, 
  ChevronRight,
  Send,
  Building
} from "lucide-react";

interface TrainingModule {
  id: string;
  category: string;
  title: string;
  badge: string;
  shortDesc: string;
  icon: any;
  accentGradient: string;
  borderColor: string;
  iconBg: string;
  textColor: string;
  curriculum: {
    week: string;
    topic: string;
    deliverable: string;
  }[];
  keyOutcomes: string[];
  idealFor: string;
}

export function TrainingSection() {
  const [activeTab, setActiveTab] = useState<string>("real-estate-sales");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("Real Estate Sales & Marketing Training");
  const [mounted, setMounted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    teamSize: "5 - 15 members",
    program: "Real Estate Sales & Marketing Training",
    notes: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const programs: TrainingModule[] = [
    {
      id: "real-estate-sales",
      category: "Program 01 • Flagship",
      title: "Real Estate Sales & Marketing Training",
      badge: "★ Flagship Core Track",
      shortDesc: "Master the complete real estate growth engine: HNI buyer targeting, Meta/Google ad funnels for gated communities & plots, WhatsApp 24/7 site-visit booking, and telephonic closing scripts.",
      icon: Building2,
      accentGradient: "from-amber-500/20 via-amber-500/5 to-transparent",
      borderColor: "border-amber-400/30",
      iconBg: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
      textColor: "text-amber-400",
      curriculum: [
        {
          week: "Module 01",
          topic: "Speed-to-Lead & Real Estate Buyer Psychology",
          deliverable: "Sub-5-minute contact cadences and automated WhatsApp nurture sequences for luxury buyers."
        },
        {
          week: "Module 02",
          topic: "Meta & Google Ads for Luxury Properties & Plots",
          deliverable: "Setting up Advantage+ campaigns, hyper-local tech park geo-fencing, and NRI investor funnels."
        },
        {
          week: "Module 03",
          topic: "Telephonic Lead Qualification & Objection Handling",
          deliverable: "Custom objection handling scripts for budget, location, and approval timelines."
        },
        {
          week: "Module 04",
          topic: "Site Visit Conversion & High-Ticket Closing Scripts",
          deliverable: "Experiential property tour playbooks that turn casual visitors into token depositors."
        }
      ],
      keyOutcomes: [
        "Elevate lead-to-site-visit conversion rates from 4% to 18%+",
        "Master direct acquisition of luxury villa, apartment, and plot buyers",
        "Eliminate lead leakage with ironclad CRM follow-up protocols",
        "Equip sales callers with confidence against tough price negotiations",
        "Accelerate transaction velocity across luxury villas, plots & flats"
      ],
      idealFor: "Real estate builders, developers, channel partners, brokers, site sales managers, and marketing heads."
    },
    {
      id: "digital-marketing",
      category: "Program 02",
      title: "Digital Marketing Training",
      badge: "Core Growth Engine",
      shortDesc: "Equip your marketing department with cutting-edge media buying skills, server-side CAPI telemetry, and repeatable lead acquisition funnels.",
      icon: Target,
      accentGradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      borderColor: "border-cyan-400/30",
      iconBg: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
      textColor: "text-cyan-400",
      curriculum: [
        {
          week: "Module 01",
          topic: "Meta & Google Ads Architecture",
          deliverable: "Custom campaign blueprint, audience segmentation, and budget allocation models."
        },
        {
          week: "Module 02",
          topic: "Server-Side CAPI & Data Attribution",
          deliverable: "Bulletproof tracking setup recovering 20-30% lost conversions from iOS/ad-blockers."
        },
        {
          week: "Module 03",
          topic: "High-Converting Creative Testing (DCT)",
          deliverable: "Dynamic creative matrices, 3-second hook testing, and ad fatigue mitigation."
        },
        {
          week: "Module 04",
          topic: "Funnel Optimization & Live Dashboards",
          deliverable: "Sub-second CRO landing page integration and automated ROI reporting."
        }
      ],
      keyOutcomes: [
        "In-house team stops burning ad budget on boosted posts",
        "Predictable cost-per-lead (CPL) benchmarks established",
        "Clear 100% ad account transparency with zero agency lock-in",
        "Live campaign management with verified attribution metrics"
      ],
      idealFor: "In-house marketing teams, marketing heads, and founders wanting total ad control."
    },
    {
      id: "ai-tools",
      category: "Program 03",
      title: "AI Tools Training",
      badge: "10x Productivity",
      shortDesc: "Harness generative AI tools to automate creative production, write viral direct-response hooks, deploy AI video reels, and score leads automatically.",
      icon: Bot,
      accentGradient: "from-purple-500/20 via-purple-500/5 to-transparent",
      borderColor: "border-purple-400/30",
      iconBg: "bg-purple-400/10 text-purple-400 border border-purple-400/20",
      textColor: "text-purple-400",
      curriculum: [
        {
          week: "Module 01",
          topic: "Generative AI Creative & Copy Prompts",
          deliverable: "Battle-tested prompt libraries for high-CTR ad headlines, hooks, and sales scripts."
        },
        {
          week: "Module 02",
          topic: "AI Video Production & Studio Avatars",
          deliverable: "Automating 4K drone walkthroughs, avatar reels, and multilingual video campaigns."
        },
        {
          week: "Module 03",
          topic: "AI Lead Scoring & Intelligent Qualification",
          deliverable: "Deploying AI bots that pre-qualify buyer budgets 24/7 on WhatsApp & web chat."
        },
        {
          week: "Module 04",
          topic: "Workflow Automation & CRM Intelligence",
          deliverable: "Zapier/Make integrations connecting ad forms directly to automated sales cadences."
        }
      ],
      keyOutcomes: [
        "Cut creative and video production turnaround times by 70%",
        "Generate 30+ multilingual ad variants in under 2 hours",
        "Automate 24/7 lead qualification without expanding headcount",
        "Stay years ahead of competitors still relying on manual agency workflows"
      ],
      idealFor: "Modern sales forces, content teams, creative designers, and growth managers."
    },
    {
      id: "team-building",
      category: "Program 04",
      title: "Team Building & Recruitment",
      badge: "Talent Architecture",
      shortDesc: "Build, evaluate, and scale a self-sustaining digital sales force. From hiring pre-vetted media buyers to structuring incentive-driven sales teams.",
      icon: Users,
      accentGradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      borderColor: "border-emerald-400/30",
      iconBg: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20",
      textColor: "text-emerald-400",
      curriculum: [
        {
          week: "Module 01",
          topic: "Talent Profiling & Technical Vetting",
          deliverable: "Pre-employment assessment scorecards for media buyers, callers, and managers."
        },
        {
          week: "Module 02",
          topic: "Sales & Marketing Department Alignment",
          deliverable: "Shared KPI dashboards eliminating friction between lead gen and sales closing."
        },
        {
          week: "Module 03",
          topic: "Incentive Structures & Daily Scorecards",
          deliverable: "Performance-driven commission matrices tied to site visits and bookings."
        },
        {
          week: "Module 04",
          topic: "90-Day Ramp & Ongoing Audits",
          deliverable: "Standard Operating Procedures (SOPs) and monthly leadership review rubrics."
        }
      ],
      keyOutcomes: [
        "Hire pre-trained digital talent with verified case histories",
        "Bridge the communication gap between marketing and sales closers",
        "Implement clear daily KPI accountability and pipeline tracking",
        "Establish an in-house digital growth machine that thrives independently"
      ],
      idealFor: "Managing directors, founders, HR directors, and corporate growth leadership."
    }
  ];

  const activeProgramData = programs.find((p) => p.id === activeTab) || programs[0];

  const handleOpenBooking = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgram(programTitle);
      setBookingForm((prev) => ({ ...prev, program: programTitle }));
    }
    setShowBookingModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Corporate & Team Enablement Academy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Transform Your Team Into a{" "}
            <span className="text-gold-gradient">Digital Sales Force.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Stop relying solely on external agencies. Led by <strong className="text-white">Kishore Patel</strong> (12+ years experience, 5,000+ leaders trained), we upskill your in-house talent into an unstoppable revenue-generating machine.
          </motion.p>

          {/* Quick Primary CTA Button in Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/training"
              className="px-6 py-3.5 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Explore Training Academy (5 Tracks) →</span>
            </Link>
            <button
              onClick={() => handleOpenBooking("Corporate Training Session")}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 cursor-pointer uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>BOOK A TRAINING SESSION</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <a
              href="https://wa.me/916304989071?text=Hi%20Kishore%20Patel%2C%20I%20would%20like%20to%20book%20a%20training%20session%20for%20our%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Strategy Desk</span>
            </a>
          </motion.div>
        </div>

        {/* 4 Interactive Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 sm:mb-16">
          {programs.map((prog, idx) => {
            const IconComponent = prog.icon;
            const isSelected = activeTab === prog.id;

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveTab(prog.id)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected 
                    ? `glass-card-gold border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/40 -translate-y-1` 
                    : `glass-card glass-card-hover border-white/10 hover:border-white/25 hover:-translate-y-0.5`
                }`}
              >
                {/* Glow pill behind active card */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${prog.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {prog.badge}
                    </span>
                  </div>

                  {/* Program Number & Title */}
                  <div className="text-[11px] font-bold text-amber-400/80 uppercase tracking-wider mb-1">
                    {prog.category}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {prog.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed font-medium mb-4">
                    {prog.shortDesc}
                  </p>
                </div>

                {/* Bottom Trigger Indicator */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-xs font-bold ${isSelected ? "text-amber-300" : "text-slate-400 group-hover:text-slate-200"}`}>
                    {isSelected ? "Active Curriculum ↓" : "View Curriculum"}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                    isSelected ? "bg-amber-400 text-slate-950 font-bold" : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Program Detailed Curriculum & Outcomes Deep-Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgramData.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-card border border-white/20 shadow-2xl relative overflow-hidden mb-16"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
              
              {/* Left Column: Curriculum Modules (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Syllabus Breakdown • {activeProgramData.title}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  High-Impact Practical Curriculum
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  {activeProgramData.shortDesc}
                </p>

                {/* Modules Accordion / List */}
                <div className="space-y-3">
                  {activeProgramData.curriculum.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl glass-subcard hover:border-amber-400/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-black text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                            {item.week}
                          </span>
                          <span className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
                            {item.topic}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-300 font-medium pl-1 leading-relaxed">
                        <strong className="text-slate-400 font-semibold">Core Deliverable: </strong>
                        {item.deliverable}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Outcomes, Ideal Audience & Instant CTA (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card border border-white/20 shadow-lg">
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Tangible Business Outcomes</span>
                  </div>

                  <h5 className="text-lg font-black text-white mb-4">
                    What Your Team Achieves
                  </h5>

                  <ul className="space-y-3 mb-6">
                    {activeProgramData.keyOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal For Badge */}
                  <div className="p-3.5 rounded-xl glass-subcard mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Ideal Candidate Profile
                    </div>
                    <div className="text-xs font-semibold text-slate-200">
                      {activeProgramData.idealFor}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Section */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => handleOpenBooking(activeProgramData.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>BOOK THIS TRAINING SESSION</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Customizable 1-Day to 4-Week Formats
                    </span>
                    <span className="text-cyan-400 font-semibold">On-site or Virtual</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Lead Trainer & Methodology Credentials Banner */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-amber-400/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                Executive Trainer & Director
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white">
                Led by Kishore Patel
              </h4>
              <p className="text-xs text-slate-300 font-medium">
                Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist • 12+ Years Experience • 5,000+ Professionals Mentored
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
            <button
              onClick={() => handleOpenBooking("Custom Corporate Training")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 uppercase tracking-wider"
            >
              <span>BOOK A TRAINING SESSION</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <a
              href="https://wa.me/916304989071?text=Hi%20Kishore%20Patel%2C%20I%20would%20like%20to%20discuss%20training%20for%20our%20sales%20and%20marketing%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Call / WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE MODAL: BOOK A TRAINING SESSION (Portaled to body) */}
      {/* ========================================================================= */}
      {mounted && showBookingModal && createPortal(
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl glass-modal rounded-3xl border border-white/25 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-amber-500/10 via-transparent to-cyan-500/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    Book a Training Session
                  </h3>
                  <p className="text-[11px] text-amber-400 font-medium">
                    Led by Kishore Patel & Himastech Growth Specialists
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowBookingModal(false);
                  setFormSubmitted(false);
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Selected Program Indicator */}
                  <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Target Focus</div>
                      <div className="text-xs font-bold text-white">{bookingForm.program}</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      Corporate Masterclass
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Ramesh Varma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Company / Developer Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.company}
                        onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                        placeholder="e.g. Sky Infra Developers"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        placeholder="team@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Select Training Program *</label>
                      <select
                        value={bookingForm.program}
                        onChange={(e) => setBookingForm({ ...bookingForm, program: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141926] border border-white/15 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                      >
                        <option value="Digital Marketing Training">Digital Marketing Training</option>
                        <option value="Real Estate Sales Training">Real Estate Sales Training</option>
                        <option value="AI Tools Training">AI Tools Training</option>
                        <option value="Team Building & Recruitment">Team Building & Recruitment</option>
                        <option value="All-Inclusive Growth Bootcamp">All-Inclusive Growth Bootcamp</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Estimated Team Size *</label>
                      <select
                        value={bookingForm.teamSize}
                        onChange={(e) => setBookingForm({ ...bookingForm, teamSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141926] border border-white/15 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                      >
                        <option value="1 - 5 key members">1 - 5 key members</option>
                        <option value="5 - 15 members">5 - 15 members</option>
                        <option value="15 - 30 members">15 - 30 members</option>
                        <option value="30+ enterprise sales force">30+ enterprise sales force</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Key Challenges or Specific Goals (Optional)</label>
                    <textarea
                      rows={2}
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      placeholder="e.g. Need our sales callers to convert more Meta ad leads into site visits for our villa project in Kollur..."
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs sm:text-sm hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg shadow-amber-500/20"
                  >
                    {isSubmitting ? "Securing Session..." : "CONFIRM & BOOK TRAINING SESSION →"}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Training Session Request Received!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you <strong>{bookingForm.name}</strong> from <strong>{bookingForm.company}</strong>. Kishore Patel's executive desk will contact you via WhatsApp/Phone at <strong>{bookingForm.phone}</strong> within 4 hours to coordinate scheduling and curriculum customization.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setShowBookingModal(false);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-[#090c14] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Confidentiality & Tailored On-Site / Remote Delivery
              </span>
              <a
                href="https://wa.me/916304989071?text=Hi%20Kishore%20Patel%2C%20I%20have%20an%20urgent%20training%20booking%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:underline"
              >
                Instant WhatsApp Desk →
              </a>
            </div>

          </motion.div>
        </div>,
        document.body
      )}

    </section>
  );
}

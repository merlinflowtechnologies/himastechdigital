"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Building2, 
  Target, 
  Bot, 
  Users, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Clock, 
  Zap, 
  TrendingUp, 
  Home, 
  UserCheck, 
  Layers, 
  X, 
  Send,
  Download,
  Star,
  ChevronRight
} from "lucide-react";

interface TrainingTrack {
  id: string;
  category: string;
  isFlagship?: boolean;
  title: string;
  subtitle: string;
  badge: string;
  shortDesc: string;
  icon: any;
  duration: string;
  format: string;
  curriculum: {
    module: string;
    title: string;
    deliverable: string;
  }[];
  keyOutcomes: string[];
  idealFor: string;
  upcomingCohort: string;
  accent: string;
  glowBg: string;
}

export default function TrainingPage() {
  const [activeTrack, setActiveTrack] = useState<string>("real-estate-mastery");
  const [showModal, setShowModal] = useState(false);
  const [selectedTrackTitle, setSelectedTrackTitle] = useState("Real Estate Marketing & Sales Closing Mastery");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    role: "Real Estate Broker / Channel Partner",
    track: "Real Estate Marketing & Sales Closing Mastery",
    notes: ""
  });

  const tracks: TrainingTrack[] = [
    {
      id: "real-estate-mastery",
      category: "★ Flagship Academy Program #1",
      isFlagship: true,
      title: "Real Estate Marketing & Sales Closing Mastery",
      subtitle: "The Complete High-Ticket Property Sales Acceleration Blueprint",
      badge: "Flagship Real Estate Track",
      shortDesc: "The definitive real estate digital marketing and sales closing program. Engineered specifically for builders, real estate channel partners, brokers, and in-house marketing heads to generate verified high-intent buyer inquiries and master speed-to-lead closing.",
      icon: Building2,
      duration: "6 Weeks (Live Interactive + Case Labs)",
      format: "Weekend Cohort & Corporate On-Site Batches",
      upcomingCohort: "October 10, 2026",
      accent: "text-amber-400",
      glowBg: "from-amber-500/20 via-yellow-500/10 to-transparent",
      curriculum: [
        {
          module: "Module 01",
          title: "Real Estate Buyer Psychology & Micro-Market Positioning",
          deliverable: "Profiling luxury HNI personas (Kokapet, Financial District, Gachibowli), understanding decision triggers for 3BHK/4BHKs vs open plots, and RERA compliance fundamentals."
        },
        {
          module: "Module 02",
          title: "Meta Advertising (Advantage+ & Cinematic Video Funnels)",
          deliverable: "Setting up high-intent Meta ad funnels, scroll-stopping drone hook creatives, Dynamic Creative Testing (DCT), and targeting NRI buyer diaspora in Dubai, USA, and Singapore."
        },
        {
          module: "Module 03",
          title: "Google Search, Performance Max & Hyper-Local Geo-Fencing",
          deliverable: "Bidding on bottom-funnel property keywords, capturing corporate CXOs via GPS geo-fencing around IT corridors, and dominating Google Maps Local 3-Pack rankings."
        },
        {
          module: "Module 04",
          title: "Sub-Second Project Landing Pages & 3D Masterplans",
          deliverable: "Building high-converting mobile landing pages with interactive masterplans, 1-click brochure downloads, OTP phone verification, and server-side CAPI tracking."
        },
        {
          module: "Module 05",
          title: "WhatsApp Business API & 24/7 Site-Visit Scheduling",
          deliverable: "Deploying automated WhatsApp nurture sequences, instant digital brochure drops, live location map directions, and automated Sunday site visit confirmations."
        },
        {
          module: "Module 06",
          title: "Telephonic Lead Qualification & High-Ticket Closing Scripts",
          deliverable: "Sub-30-second speed-to-lead response protocols, objection handling scripts for pricing and loan approvals, and closing workshops for in-house sales teams."
        }
      ],
      keyOutcomes: [
        "Master direct acquisition of luxury villa, apartment, and plot buyers",
        "Cut Cost-Per-Qualified-Lead (CPL) by 40-60% without burning budget",
        "Automate 24/7 site-visit scheduling directly into WhatsApp & CRM",
        "Deploy battle-tested sales closing scripts that convert inquiries into token advances",
        "Live campaigns executed on actual real estate ad spend with 1-on-1 mentorship"
      ],
      idealFor: "Real Estate Builders, Developers, Channel Partners, Independent Brokers, Agency Founders, and In-House Property Marketing Executives."
    },
    {
      id: "performance-marketing",
      category: "Program #2 • Digital Marketing",
      title: "Advanced Performance Marketing & ROAS Scaling",
      subtitle: "Full-Funnel Paid Media Buying Across Meta, Google & TikTok",
      badge: "Media Buying Track",
      shortDesc: "Master enterprise media buying architecture: server-side Meta CAPI data attribution, Google Performance Max campaign structure, dynamic creative testing, and algorithmic budget scaling.",
      icon: Target,
      duration: "4 Weeks (Intensive Bootcamp)",
      format: "Live Online & Practical Studio",
      upcomingCohort: "October 18, 2026",
      accent: "text-cyan-400",
      glowBg: "from-cyan-500/20 via-blue-500/10 to-transparent",
      curriculum: [
        {
          module: "Module 01",
          title: "Meta Ads Advanced Bidding & Broad Targeting Algorithms",
          deliverable: "Advantage+ shopping, lead gen funnels, audience consolidation, and creative diversification."
        },
        {
          module: "Module 02",
          title: "Server-Side CAPI, First-Party Data & Post-iOS Tracking",
          deliverable: "Setting up Gateway CAPI, recovering 25%+ lost conversions, and multi-touch attribution models."
        },
        {
          module: "Module 03",
          title: "Google Search Dominance, P-Max & YouTube DR Video",
          deliverable: "High-intent keyword harvesting, script-based bid modifiers, and YouTube direct response hooks."
        },
        {
          module: "Module 04",
          title: "Algorithmic Budget Scaling & Executive Reporting Dashboards",
          deliverable: "Vertical vs horizontal budget scaling, dayparting, and building real-time Looker Studio reports."
        }
      ],
      keyOutcomes: [
        "Scale ad accounts from ₹50,000/month to ₹25 Lakhs+/month profitably",
        "Eliminate ad fatigue through structured Dynamic Creative Testing (DCT)",
        "Master CAPI server-side tracking to recover lost tracking telemetry",
        "Achieve verifiable 4.0x+ ROAS across e-commerce, B2B, and high-ticket offers"
      ],
      idealFor: "Digital Marketers, Agency Media Buyers, Marketing Managers, and E-Commerce Founders."
    },
    {
      id: "ai-marketing-geo",
      category: "Program #3 • AI & Future Tech",
      title: "AI-Driven Marketing & Generative Growth Engineering",
      subtitle: "Next-Gen AI Systems, GEO Search & Conversational Chatbots",
      badge: "Future-Ready Tech",
      shortDesc: "Leverage artificial intelligence to automate growth: Generative Engine Optimization (GEO) for ChatGPT and Perplexity, AI programmatic copywriting, and automated voice & text sales bots.",
      icon: Bot,
      duration: "3 Weeks (Fast-Track Masterclass)",
      format: "Interactive AI Lab + Sandbox Access",
      upcomingCohort: "October 25, 2026",
      accent: "text-purple-400",
      glowBg: "from-purple-500/20 via-pink-500/10 to-transparent",
      curriculum: [
        {
          module: "Module 01",
          title: "Generative Engine Optimization (GEO) Architecture",
          deliverable: "Ranking your brand inside ChatGPT, Claude, and Perplexity answer citations."
        },
        {
          module: "Module 02",
          title: "Programmatic AI Copywriting & Ad Variation Engines",
          deliverable: "Generating 100+ high-converting ad hooks, headlines, and angles in minutes."
        },
        {
          module: "Module 03",
          title: "AI Chatbots, Auto-Qualification & CRM Integration",
          deliverable: "Building autonomous WhatsApp & Web AI bots that screen leads and book appointments."
        }
      ],
      keyOutcomes: [
        "Rank your brand as the #1 recommended source on AI search engines",
        "10x ad creative production speed with customized AI prompting frameworks",
        "Deploy autonomous AI qualifying bots that handle buyer inquiries 24/7",
        "Integrate AI workflows into your marketing team to cut operational hours in half"
      ],
      idealFor: "Growth Hackers, CMOs, Innovation Leads, Tech Founders, and Digital Agencies."
    },
    {
      id: "sales-closing-telephony",
      category: "Program #4 • High-Ticket Sales",
      title: "Corporate Sales & Speed-to-Lead Telephonic Closing Mastery",
      subtitle: "Transform Inquiries into Token Advances & Closed Contracts",
      badge: "Deal-Closing Track",
      shortDesc: "Digital marketing only generates the lead—the closing team wins the revenue. Train your tele-callers and sales representatives on speed-to-lead protocols, tone calibration, and closing psychology.",
      icon: UserCheck,
      duration: "2 Weeks (High-Intensity Workshop)",
      format: "Live Roleplay & Audio Call Audits",
      upcomingCohort: "November 05, 2026",
      accent: "text-emerald-400",
      glowBg: "from-emerald-500/20 via-teal-500/10 to-transparent",
      curriculum: [
        {
          module: "Module 01",
          title: "Sub-5-Minute Speed-to-Lead Response Architecture",
          deliverable: "Cadences that increase contact rates by 391% over delayed callbacks."
        },
        {
          module: "Module 02",
          title: "High-Ticket Lead Discovery & Financial Qualification",
          deliverable: "Pre-screening questions that uncover genuine buying power and decision-maker roles."
        },
        {
          module: "Module 03",
          title: "Objection Annihilation & Closing the Site Visit / Deal",
          deliverable: "Navigating 'price is too high', 'need to ask family', and securing commitment."
        }
      ],
      keyOutcomes: [
        "Increase lead-to-site-visit conversion rate from 5% to 22%+",
        "Establish an institutional speed-to-lead standard (<30 seconds)",
        "Equip sales callers with proven objection handling response battlecards",
        "Eliminate pipeline ghosting with automated multi-channel follow-up cadences"
      ],
      idealFor: "In-House Real Estate Sales Teams, Tele-Calling Executives, Closers, and Business Development Managers."
    },
    {
      id: "direct-response-video",
      category: "Program #5 • Content & Creative",
      title: "Direct-Response Video Production & Viral Short-Form Content",
      subtitle: "4K Drone Shoots, Model Walkthroughs & Viral Social Reels",
      badge: "Production Studio Track",
      shortDesc: "Craft cinematic visual assets that stop thumbs. Master 4K drone cinematography, model property walkthrough scripting, 3-second hook editing, and viral Instagram Reels algorithms.",
      icon: Video,
      duration: "3 Weeks (Hands-on Production Lab)",
      format: "On-Location Shoots & Premiere Pro Masterclass",
      upcomingCohort: "November 12, 2026",
      accent: "text-rose-400",
      glowBg: "from-rose-500/20 via-pink-500/10 to-transparent",
      curriculum: [
        {
          module: "Module 01",
          title: "Scripting High-Retention Direct-Response Hooks",
          deliverable: "Writing the first 3 seconds that stop the scroll on Instagram and YouTube Shorts."
        },
        {
          module: "Module 02",
          title: "Cinematic 4K Drone Filming & Walkthrough Angles",
          deliverable: "Architectural framing, elevation shots, and dynamic gimbal walkthrough techniques."
        },
        {
          module: "Module 03",
          title: "Fast-Paced Editing, Audio Design & Subtitle Pacing",
          deliverable: "High-energy editing in Premiere Pro / CapCut calibrated for maximum conversion."
        }
      ],
      keyOutcomes: [
        "Produce broadcast-grade 4K property walkthrough reels in-house",
        "Stop relying on expensive third-party video production agencies",
        "Master the top 10 direct-response ad video frameworks that drive clicks",
        "Build a repeatable weekly video publishing pipeline for brand authority"
      ],
      idealFor: "Videographers, Creative Directors, Content Creators, and In-House Media Production Pods."
    }
  ];

  const currentTrack = tracks.find((t) => t.id === activeTrack) || tracks[0];

  const handleOpenModal = (trackTitle: string) => {
    setSelectedTrackTitle(trackTitle);
    setFormData((prev) => ({ ...prev, track: trackTitle }));
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] min-h-screen pt-24 sm:pt-28 pb-20 overflow-x-hidden relative">
      
      {/* Background Volumetric Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ================= Breadcrumb ================= */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium py-3 mb-6 border-b border-white/10">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-300 font-bold">Training Academy</span>
        </nav>

        {/* ================= Hero Showcase ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-black mb-4 shadow-xs">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Himastech Growth &amp; Real Estate Academy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5">
            Practical Growth Training. <br />
            <span className="text-gold-gradient">Starting With Real Estate Dominance.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto mb-8">
            Learn directly from the team that has scaled ₹480Cr+ in property sales and driven over 18,500+ verified site visits. From our flagship <strong>Real Estate Marketing &amp; Sales Closing Mastery</strong> to Advanced Performance Media Buying and AI Systems.
          </p>

          {/* Quick Credibility Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
            <div className="p-3.5 rounded-2xl glass-subcard border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black text-amber-400 block">100% Live</span>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mt-0.5 block">Client Ad Budgets</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-subcard border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black text-cyan-400 block">5 Programs</span>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mt-0.5 block">Specialized Tracks</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-subcard border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black text-emerald-400 block">1,240+</span>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mt-0.5 block">Professionals Trained</span>
            </div>
            <div className="p-3.5 rounded-2xl glass-subcard border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black text-purple-400 block">Certified</span>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mt-0.5 block">Industry Credential</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenModal("Real Estate Marketing & Sales Closing Mastery")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>ENROLL IN REAL ESTATE MASTERY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Real%20Estate%20Training%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 fill-white" />
              <span>WHATSAPP ACADEMY COUNSELOR</span>
            </a>
          </div>

        </div>

        {/* ================= 5 Programs Tab Selector ================= */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-1">
              Curriculum Hierarchy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Select Your Specialization Track
            </h2>
          </div>

          {/* Program Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {tracks.map((track) => {
              const IconComp = track.icon;
              const isActive = activeTrack === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                    isActive
                      ? track.isFlagship
                        ? "bg-amber-400 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105"
                        : "bg-white/15 text-white border-white/30 shadow-md scale-105"
                      : "glass-subcard text-slate-300 hover:text-white border-white/10 hover:border-white/20"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive && track.isFlagship ? "text-slate-950" : track.accent}`} />
                  <span>{track.title}</span>
                  {track.isFlagship && (
                    <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full ${isActive ? "bg-slate-950 text-amber-300" : "bg-amber-400/20 text-amber-300"}`}>
                      ★ Primary
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= Active Program Showcase Card ================= */}
        <div className="mb-20">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Top Glowing Ambient Flare */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${currentTrack.glowBg} rounded-bl-full pointer-events-none opacity-40`} />

            {/* Program Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8 relative z-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                    {currentTrack.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    Next Batch: <strong className="text-white">{currentTrack.upcomingCohort}</strong>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mt-1 mb-2">
                  {currentTrack.title}
                </h3>
                <p className="text-sm sm:text-base text-amber-300/90 font-semibold mb-3">
                  {currentTrack.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentTrack.shortDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => handleOpenModal(currentTrack.title)}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>APPLY FOR ADMISSION</span>
                </button>
                <a
                  href={`https://wa.me/916304989071?text=Hi%20Himastech%2C%20please%20send%20the%20complete%20syllabus%20for%20${encodeURIComponent(currentTrack.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download Syllabus</span>
                </a>
              </div>
            </div>

            {/* Curriculum Breakdown Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 relative z-10">
              
              {/* Left Column: Weekly Module Roadmap (Span 7) */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Comprehensive Module Breakdown</span>
                  </h4>
                  <span className="text-xs font-semibold text-slate-400">{currentTrack.duration}</span>
                </div>

                <div className="space-y-3.5">
                  {currentTrack.curriculum.map((item, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-2xl glass-subcard border border-white/10 hover:border-amber-400/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                          {item.module}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Verified Deliverable</span>
                      </div>
                      <h5 className="text-sm font-bold text-white mb-1.5 leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {item.deliverable}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Outcomes & Target Audience (Span 5) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Outcomes Box */}
                <div className="p-6 rounded-2xl glass-subcard border border-emerald-400/20">
                  <h4 className="text-sm font-black uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Guaranteed Practical Outcomes</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentTrack.keyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300 text-[10px] font-bold">
                          ✓
                        </div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Box */}
                <div className="p-6 rounded-2xl glass-subcard border border-white/10">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ideal Candidate Profile</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {currentTrack.idealFor}
                  </p>
                </div>

                {/* Certification & Mentorship Note */}
                <div className="p-5 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center gap-4">
                  <Award className="w-8 h-8 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Official Certification</span>
                    <span className="text-[11px] text-slate-300 block">Certificate of Growth Engineering signed by Kishore Patel.</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ================= Lead Instructor Profile ================= */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 p-1 shrink-0 shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              <div className="w-full h-full rounded-[22px] bg-[#07090e] flex flex-col items-center justify-center text-center p-2">
                <span className="text-2xl sm:text-3xl font-black text-amber-400">KP</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1">Founder</span>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Lead Strategist &amp; Real Estate Growth Mentor</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Trained Directly By Kishore Patel
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mt-2 max-w-3xl">
                Founder of Himastech Digital Realty Marketing. Over 8+ years scaling real estate ad accounts, engineering algorithmic ROAS funnels, and advising builders across Hyderabad, Bangalore, and Vijayawada. You learn the real numbers, exact ad accounts, and actual phone closing scripts used to sell out real estate inventory.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://wa.me/916304989071?text=Hi%20Kishore%2C%20I%20am%20interested%20in%20joining%20the%20Real%20Estate%20Marketing%20Training%20Program."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Talk to Kishore Patel</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= Bottom Conversion Banner ================= */}
        <div className="p-6 sm:p-10 rounded-3xl glass-card-gold text-white relative overflow-hidden shadow-2xl border border-amber-400/30">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Limited Seats Per Cohort (Max 15 Candidates)
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
                Advance Your Real Estate Marketing &amp; Sales Career
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Reserve your seat for the upcoming October cohort. In-person practical workshops in Nagole, Hyderabad with live online broadcast options for outstation and corporate teams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <button
                onClick={() => handleOpenModal("Real Estate Marketing & Sales Closing Mastery")}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>ENROLL IN NEXT BATCH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20would%20like%20to%20register%20for%20the%20Training%20Program."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>WHATSAPP ADMISSIONS DESK</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ================= Registration Modal Dialog ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl glass-modal border border-white/20 p-6 sm:p-8 relative shadow-2xl overflow-hidden">
            <button
              onClick={() => { setShowModal(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-white mb-2">Application Received!</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you for applying to <strong>{selectedTrackTitle}</strong>. Our admissions counselor will contact you via WhatsApp / Phone within 2 hours with the syllabus and cohort onboarding details.
                </p>
                <button
                  onClick={() => { setShowModal(false); setFormSubmitted(false); }}
                  className="px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                    Cohort Registration Form
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-white">
                    Apply for {selectedTrackTitle}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out your contact details to reserve a seat in the upcoming cohort.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">WhatsApp Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Current Role / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Real Estate Channel Partner / Freelancer / Marketing Head"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Questions / Specific Goals</label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what you want to achieve (e.g. want to sell luxury villas in Mokila)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT APPLICATION &amp; GET SYLLABUS</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

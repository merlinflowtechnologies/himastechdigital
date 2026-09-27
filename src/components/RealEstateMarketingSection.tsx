"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Target, 
  Search, 
  Users, 
  Layout, 
  MessageCircle, 
  Video, 
  Palette, 
  MapPin, 
  Cpu, 
  BarChart3, 
  UserCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall 
} from "lucide-react";
import Link from "next/link";

export function RealEstateMarketingSection() {
  const modules = [
    {
      number: "01",
      title: "Project Branding",
      icon: Building2,
      tag: "Identity & Luxury",
      description: "Elevate your property development with bespoke visual identities, premium brochure layouts, 3D logo systems, and high-ticket project positioning.",
      highlights: ["Luxury Project Brand Books", "3D Identity & Typography", "Investor Pitch Decks"],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      number: "02",
      title: "Meta Advertising",
      icon: Target,
      tag: "Reels & HNI Audiences",
      description: "Laser-targeted Instagram & Facebook campaigns engineered to reach active home buyers, NRIs, and commercial property investors.",
      highlights: ["Advantage+ HNI Targeting", "Cinematic Video Reels Funnels", "Lookalike Investor Audiences"],
      color: "from-cyan-500 to-indigo-500",
      bgGlow: "bg-cyan-50 text-cyan-600 border-cyan-200",
    },
    {
      number: "03",
      title: "Google Advertising",
      icon: Search,
      tag: "Bottom-Funnel Intent",
      description: "Dominate search results when buyers search for luxury villas, apartments, or plots in Kokapet, Gachibowli, and prime locations.",
      highlights: ["Google Search & P-Max", "YouTube In-Stream Property Video", "Google Maps Local 3-Pack"],
      color: "from-indigo-500 to-purple-500",
      bgGlow: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      number: "04",
      title: "Lead Generation",
      icon: Users,
      tag: "Verified Inquiries",
      description: "Filter out casual tire-kickers with multi-step qualification funnels, OTP phone verification, and buyer budget screening.",
      highlights: ["Budget & Timeline Qualification", "OTP Phone Verification", "Zero Junk Inquiries Guarantee"],
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      number: "05",
      title: "Landing Pages",
      icon: Layout,
      tag: "Sub-Second Speed",
      description: "Custom high-speed project landing pages built to convert mobile traffic with interactive floor plans, amenity walk-throughs, and instant CTAs.",
      highlights: ["Sub-1.2s Load Speeds", "Interactive 3D Masterplans", "1-Click Brochure Download"],
      color: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-50 text-pink-600 border-pink-200",
    },
    {
      number: "06",
      title: "WhatsApp Marketing",
      icon: MessageCircle,
      tag: "Direct Conversions",
      description: "Official WhatsApp Business API integration that delivers instant digital brochures, answers buyer FAQs, and schedules site visits 24/7.",
      highlights: ["Instant Brochure Automation", "Broadcast Campaign Drops", "Automated Site Visit Booking"],
      color: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      number: "07",
      title: "Video Marketing",
      icon: Video,
      tag: "Cinematic Walkthroughs",
      description: "High-production 4K drone cinematography, model villa walkthroughs, founder interviews, and weekly construction milestone updates.",
      highlights: ["4K Drone Aerial Shoots", "Influencer Property Tours", "Progress Update Reels"],
      color: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      number: "08",
      title: "Creative Designing",
      icon: Palette,
      tag: "Direct-Response Ads",
      description: "Visual assets that stop the scroll on social media, hoardings, newspaper print inserts, and digital display billboards across prime hubs.",
      highlights: ["Hoarding & Billboard Renders", "Direct-Response Social Posts", "Interactive Carousel Creatives"],
      color: "from-rose-500 to-red-500",
      bgGlow: "bg-rose-50 text-rose-600 border-rose-200",
    },
    {
      number: "09",
      title: "Location Marketing",
      icon: MapPin,
      tag: "Hyper-Local Geo-Fencing",
      description: "Precision geo-targeting around IT corridors, Financial District, luxury clubs, and tech parks to capture corporate executives and HNIs.",
      highlights: ["Competitor Site Conquesting", "IT Tech Park Geo-Fencing", "Airport Terminal Targeting"],
      color: "from-teal-500 to-emerald-500",
      bgGlow: "bg-teal-50 text-teal-600 border-teal-200",
    },
    {
      number: "10",
      title: "AI Marketing",
      icon: Cpu,
      tag: "Predictive Intelligence",
      description: "Server-side Meta Conversions API (CAPI), AI chatbot buyer screening, and Generative Engine Optimization (GEO) on AI search engines.",
      highlights: ["Real-Time CAPI Attribution", "AI Lead Scoring Algorithms", "Perplexity & ChatGPT GEO Search"],
      color: "from-blue-600 to-indigo-600",
      bgGlow: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      number: "11",
      title: "Campaign Management",
      icon: BarChart3,
      tag: "Algorithmic ROAS",
      description: "Continuous dayparting, algorithmic budget scaling, A/B creative testing, and transparent real-time revenue telemetry dashboards.",
      highlights: ["24/7 Bid Pacing & Scaling", "Live Real-Time Dashboards", "Weekly Performance Audits"],
      color: "from-violet-500 to-purple-600",
      bgGlow: "bg-violet-50 text-violet-600 border-violet-200",
    },
    {
      number: "12",
      title: "Sales Team Support",
      icon: UserCheck,
      tag: "Deal-Closing Mastery",
      description: "We don't leave your sales team hanging. We integrate with your CRM, automate lead distribution in <30 seconds, and provide closing scripts.",
      highlights: ["Sub-30s Lead Routing to Agents", "High-Ticket Objection Scripts", "Sales Closing Workshops"],
      color: "from-cyan-600 to-teal-600",
      bgGlow: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
  ];

  return (
    <section id="real-estate" className="py-20 sm:py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black mb-3.5 shadow-xs"
          >
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Real Estate Marketing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            Your Project Deserves{" "}
            <span className="text-gold-gradient">
              More Than a Poster.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            A physical hoarding only captures who drives past. We turn your real estate development into an omnichannel demand-generation machine that attracts qualified luxury buyers across India and the NRI diaspora.
          </motion.p>
        </div>

        {/* 12-Module Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {modules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-5 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${item.color} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-amber-400 tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="mb-2">
                    <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider block mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Trigger */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors group/link cursor-pointer"
                  >
                    <span>Deploy Module</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-semibold">Real Estate Engine</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Primary Step 4 CTA Banner: GET MY PROJECT MARKETING PLAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl glass-card-gold text-white relative overflow-hidden shadow-2xl border border-amber-400/30"
        >
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-amber-500/15 via-yellow-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Tailored For Builders & Developers
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
                Ready To Launch A High-Converting Real Estate Campaign?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Receive a custom blueprint analyzing your project's micro-market, competitor ad funnels, targeted buyer personas, and projected lead acquisition costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="#contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>GET MY PROJECT MARKETING PLAN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%20team%2C%20I%20would%20like%20to%20get%20a%20Project%20Marketing%20Plan%20for%20our%20real%20estate%20development."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>WHATSAPP CONSULTATION</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

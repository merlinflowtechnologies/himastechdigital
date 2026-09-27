import Link from "next/link";
import { Metadata } from "next";
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
  PhoneCall, 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  Compass, 
  Home, 
  Award,
  Globe2,
  Clock,
  ChevronRight,
  Layers,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing & PropTech Growth Agency | HIMASTECH",
  description: "India's premier real estate digital marketing agency. Selling out luxury villas, gated communities, and open plots in Hyderabad, Kokapet, and across India with hyper-local ad funnels, NRI investor campaigns, and verified site visits.",
};

export default function RealEstatePage() {
  const modules = [
    {
      number: "01",
      title: "Project Branding & Identity",
      icon: Building2,
      tag: "Identity & Luxury",
      description: "Elevate your property development with bespoke luxury brand books, 3D logo systems, architectural typography, RERA-compliant brochures, and high-ticket investor pitch decks.",
      highlights: ["Luxury Project Brand Books", "3D Architectural Typography", "RERA-Compliant Brochures", "Investor Pitch Decks"],
      color: "from-blue-500 to-cyan-500",
      accent: "text-cyan-400"
    },
    {
      number: "02",
      title: "Meta Ads (HNI & NRI Funnels)",
      icon: Target,
      tag: "Reels & HNI Audiences",
      description: "Laser-targeted Instagram & Facebook campaigns engineered to reach active home buyers, high-net-worth individuals, and NRI investors in the US, Dubai, UK, and Singapore.",
      highlights: ["Advantage+ HNI Targeting", "Cinematic Drone Reels Funnels", "NRI Expat Diaspora Funnels", "Custom Lookalike Buyer Audiences"],
      color: "from-cyan-500 to-indigo-500",
      accent: "text-cyan-400"
    },
    {
      number: "03",
      title: "Google Search & Performance Max",
      icon: Search,
      tag: "Bottom-Funnel Intent",
      description: "Dominate search engine rankings when high-intent buyers search for 3BHK/4BHK luxury apartments, duplex villas, or open plots in Kokapet, Gachibowli, and Financial District.",
      highlights: ["High-Intent Google Search & P-Max", "YouTube In-Stream Property Video", "Google Maps Local 3-Pack Rank", "Negative Keyword Scrubbing"],
      color: "from-indigo-500 to-purple-500",
      accent: "text-indigo-400"
    },
    {
      number: "04",
      title: "OTP-Verified Lead Generation",
      icon: Users,
      tag: "Verified Inquiries",
      description: "Filter out casual tire-kickers with multi-step interactive qualification funnels, buyer budget screening, possession timeline filtering, and instant SMS OTP phone verification.",
      highlights: ["Budget & Timeline Qualification", "OTP Phone Verification", "Zero Junk Inquiries Guarantee", "Instant CRM Sync (<30s)"],
      color: "from-purple-500 to-pink-500",
      accent: "text-purple-400"
    },
    {
      number: "05",
      title: "Sub-Second Next.js Landing Pages",
      icon: Layout,
      tag: "Sub-Second Speed",
      description: "Custom lightning-fast project landing pages built to convert mobile traffic with interactive 2D/3D masterplans, amenity walkthroughs, unit availability, and 1-click brochure downloads.",
      highlights: ["Sub-1.2s Mobile Load Speeds", "Interactive 3D Masterplans", "1-Click Brochure Download", "RERA Registration Badges"],
      color: "from-pink-500 to-rose-500",
      accent: "text-pink-400"
    },
    {
      number: "06",
      title: "WhatsApp 24/7 Site-Visit Automation",
      icon: MessageCircle,
      tag: "Direct Conversions",
      description: "Official WhatsApp Business API integration that delivers instant digital brochures, answers buyer FAQs, provides live Google Maps site directions, and schedules site visits 24/7.",
      highlights: ["Instant Digital Brochure Drop", "Broadcast Launch Drops", "Automated Site Visit Booking", "Live Location Maps Sync"],
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400"
    },
    {
      number: "07",
      title: "4K Drone & Cinematic Property Video",
      icon: Video,
      tag: "Cinematic Walkthroughs",
      description: "High-production 4K aerial drone cinematography, model villa walkthroughs, founder & architect interviews, and monthly construction milestone video updates for investor trust.",
      highlights: ["4K Drone Aerial Shoots", "Influencer Property Tours", "Model Villa Walkthroughs", "Monthly Progress Reels"],
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-400"
    },
    {
      number: "08",
      title: "Creative Designing & Outdoor Hoardings",
      icon: Palette,
      tag: "Direct-Response Ads",
      description: "Visual assets that command attention: highway hoardings, newspaper print inserts, site entrance branding, digital display billboards, and scroll-stopping social media creatives.",
      highlights: ["Highway Hoardings & Billboards", "Direct-Response Social Posts", "Interactive 3D Carousel Creatives", "Print Media & Event Banners"],
      color: "from-rose-500 to-red-500",
      accent: "text-rose-400"
    },
    {
      number: "09",
      title: "Hyper-Local Geo-Fencing & IT Parks",
      icon: MapPin,
      tag: "Hyper-Local Conquesting",
      description: "Precision GPS geo-targeting around IT corridors, Financial District, luxury golf clubs, five-star hotels, and airport terminals to capture corporate executives, CXOs, and HNIs.",
      highlights: ["Competitor Site Conquesting", "IT Tech Park Geo-Fencing", "Airport Terminal Targeting", "Luxury Club & Golf Course Radars"],
      color: "from-teal-500 to-emerald-500",
      accent: "text-teal-400"
    },
    {
      number: "10",
      title: "Meta CAPI & AI Lead Scoring",
      icon: Cpu,
      tag: "Predictive Intelligence",
      description: "Server-side Meta Conversions API (CAPI) that bypasses iOS ad blockers, coupled with AI lead scoring algorithms that prioritize high-intent buyers for immediate sales team calls.",
      highlights: ["Real-Time CAPI Attribution", "AI Lead Scoring Algorithms", "Perplexity & ChatGPT GEO Search", "Automated Buyer Propensity Score"],
      color: "from-blue-600 to-indigo-600",
      accent: "text-blue-400"
    },
    {
      number: "11",
      title: "Algorithmic ROAS & Live Telemetry",
      icon: BarChart3,
      tag: "Algorithmic ROAS",
      description: "Continuous dayparting, algorithmic budget pacing, A/B creative testing, and transparent real-time revenue telemetry dashboards showing cost-per-site-visit and inventory bookings.",
      highlights: ["24/7 Bid Pacing & Scaling", "Live Real-Time Dashboards", "Weekly Performance Audits", "Cost-Per-Site-Visit Tracking"],
      color: "from-violet-500 to-purple-600",
      accent: "text-violet-400"
    },
    {
      number: "12",
      title: "Sales Team Enablement & Speed-to-Lead",
      icon: UserCheck,
      tag: "Deal-Closing Mastery",
      description: "We don't leave your sales team hanging. We integrate with your CRM, automate lead distribution in <30 seconds, and provide high-ticket objection handling scripts and closing workshops.",
      highlights: ["Sub-30s Lead Routing to Closers", "High-Ticket Objection Scripts", "Site-Visit Closing Workshops", "CRM Call Log Analytics"],
      color: "from-cyan-600 to-teal-600",
      accent: "text-cyan-400"
    },
  ];

  const projectTypes = [
    {
      title: "Luxury High-Rise Communities",
      badge: "2BHK / 3BHK / 4BHK",
      desc: "Targeting corporate tech leaders and HNIs in Kokapet, Nanakramguda, and Gachibowli with 3D walkthroughs, amenity videos, and high-converting floorplan downloads.",
      stat: "₹48Cr+ Sold",
      color: "border-cyan-400/30"
    },
    {
      title: "Gated Luxury Villas & Duplexes",
      badge: "₹3.5Cr - ₹15Cr+",
      desc: "Architected for high-ticket buyers. Ultra-exclusive branding, private video tours, personalized concierge site visits, and private WhatsApp concierge nurture funnels.",
      stat: "84 Villas Sold",
      color: "border-amber-400/30"
    },
    {
      title: "HMDA & RERA Approved Open Plots",
      badge: "Farmland & Commercial",
      desc: "High-velocity acquisition funnels along growth corridors (Shadnagar, Vijayawada highway, Warangal highway) using viral drone footage and Sunday site-visit bus campaigns.",
      stat: "220+ Plots Booked",
      color: "border-emerald-400/30"
    },
    {
      title: "NRI Investor Diaspora Campaigns",
      badge: "Global Expat Capital",
      desc: "Timezone-optimized Meta & Google funnels targeting Indian expats in the UAE, US, UK, and Singapore looking for high-yield rental returns and ancestral wealth preservation.",
      stat: "35% NRI Share",
      color: "border-purple-400/30"
    }
  ];

  const caseStudies = [
    {
      client: "Prestige Kokapet Luxury High-Rise",
      location: "Kokapet, Financial District",
      result: "₹48.4 Cr Revenue Generated",
      metrics: [
        { label: "Verified Leads", val: "1,840+" },
        { label: "Site Visits", val: "412 Booked" },
        { label: "Average CPL", val: "₹320" },
        { label: "Overall ROAS", val: "6.8x" }
      ],
      desc: "Deployed full-funnel Meta Reels, Google Search on competitor keywords, sub-second Next.js landing pages, and an automated WhatsApp bot for immediate site visit appointment bookings."
    },
    {
      client: "Emerald Luxury Villa County",
      location: "Mokila, Hyderabad",
      result: "84 Luxury Villas Sold Out in 6 Months",
      metrics: [
        { label: "Ticket Size", val: "₹4.5Cr - ₹7Cr" },
        { label: "Site Visits", val: "520+ HNIs" },
        { label: "Speed to Lead", val: "<45 Seconds" },
        { label: "Ad Spend ROAS", val: "5.4x" }
      ],
      desc: "Used 4K drone cinematography, hyper-local geofencing of Hyderabad tech parks, and our in-house calling objection handling scripts to achieve a record sell-out speed."
    },
    {
      client: "GreenMeadows HMDA Open Plots",
      location: "Vijayawada Highway Corridor",
      result: "220 Plots Closed in 45 Days",
      metrics: [
        { label: "Inquiries", val: "3,200+" },
        { label: "Sunday Visitors", val: "68 Families" },
        { label: "Cost Per Visit", val: "₹1,150" },
        { label: "Inventory Clearance", val: "94%" }
      ],
      desc: "Leveraged short-form video reels highlighting future highway connectivity, appreciation data, and an automated Sunday site-visit bus seat reservation engine."
    }
  ];

  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] min-h-screen pt-24 sm:pt-28 pb-20 overflow-x-hidden relative">
      
      {/* Background Volumetric Glows */}
      <div className="absolute top-10 left-1/4 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ================= Breadcrumb Navigation ================= */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium py-3 mb-6 border-b border-white/10">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-300 font-bold">Real Estate Marketing</span>
        </nav>

        {/* ================= Hero Showcase ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-black mb-5 shadow-xs">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>★ Flagship Core Specialization • India's #1 Real Estate Growth Partner</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
            We Don't Just Run Property Ads. <br />
            <span className="text-gold-gradient">We Sell Out Real Estate Projects.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto mb-8">
            From luxury high-rise gated communities in Kokapet and Gachibowli to premium villas and HMDA open plots. We architect end-to-end demand engines that deliver verified high-ticket buyers, 18,500+ booked site visits, and ₹480Cr+ in property inventory sales.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl glass-subcard border border-white/10 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 block">₹480Cr+</span>
              <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-bold mt-1 block">Inventory Sold</span>
            </div>
            <div className="p-4 rounded-2xl glass-subcard border border-white/10 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-black text-cyan-400 block">18,500+</span>
              <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-bold mt-1 block">Site Visits Booked</span>
            </div>
            <div className="p-4 rounded-2xl glass-subcard border border-white/10 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">4.8x</span>
              <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-bold mt-1 block">Average ROAS</span>
            </div>
            <div className="p-4 rounded-2xl glass-subcard border border-white/10 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 block">&lt;30s</span>
              <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-bold mt-1 block">Speed to Lead</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>GET PROJECT MARKETING BLUEPRINT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20want%20to%20discuss%20Digital%20Marketing%20for%20our%20Real%20Estate%20Project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 fill-white" />
              <span>WHATSAPP REAL ESTATE DESK</span>
            </a>
          </div>

        </div>

        {/* ================= 4 Project Asset Categories ================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2">
              Tailored Architecture By Property Type
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Calibrated For Every Real Estate Asset Class
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {projectTypes.map((pt, pIdx) => (
              <div
                key={pIdx}
                className={`glass-card glass-card-hover rounded-2xl p-6 border ${pt.color} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-amber-400">
                      {pt.badge}
                    </span>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      {pt.stat}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium mb-4">
                    {pt.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Custom Campaign Funnel</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 12 Core Real Estate Capabilities Grid ================= */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-2">
              Full-Stack Digital Realty Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              12 Specialized Capabilities Engineered for Property Sales
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
              Every stage of the real estate buyer journey—from initial 3D project awareness to site visit booking and contract signing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {modules.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${item.color} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform text-amber-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-amber-400">
                        #{item.number}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider block mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>

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

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/#contact"
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Deploy Module</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[10px] text-slate-400 font-semibold">PropTech Engine</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= REAL ESTATE TRAINING BRIDGE BANNER ================= */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl glass-card-cyan border border-cyan-400/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-cyan-500/15 via-blue-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-cyan-400/40">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Dedicated Real Estate Training Academy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                Train Your Sales &amp; Marketing Team In-House
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Want your channel partners, project marketing leads, and closing executives to master speed-to-lead response, HNI objection handling, and hyper-local Meta ad funnels? Explore our specialized Real Estate Marketing &amp; Sales Closing Academy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="/training"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-slate-950" />
                <span>EXPLORE REAL ESTATE TRAINING</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Real Estate Case Studies ================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2">
              Proven Project Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Real Estate Case Studies &amp; Track Record
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, cIdx) => (
              <div
                key={cIdx}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      {cs.location}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Case #{cIdx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-snug">
                    {cs.client}
                  </h3>

                  <div className="text-base font-extrabold text-emerald-400 mb-4 pb-3 border-b border-white/10 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>{cs.result}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium">
                    {cs.desc}
                  </p>

                  {/* 4 Metric Tiles */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-xl glass-subcard border border-white/10 text-center">
                        <span className="text-[10px] text-slate-400 block font-semibold">{m.label}</span>
                        <span className="text-sm font-black text-white mt-0.5 block">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-amber-300 hover:text-amber-200 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Replicate For Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Bottom Conversion Banner ================= */}
        <div className="p-6 sm:p-10 rounded-3xl glass-card-gold text-white relative overflow-hidden shadow-2xl border border-amber-400/30">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 30-Minute Real Estate Growth Audit
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
                Ready to Sell Out Your Property Development?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Schedule an exclusive consultation with Kishore Patel and our real estate growth pod. We will analyze your project pricing, competitor ad funnels, micro-market positioning, and projected lead acquisition costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="/#contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>BOOK PROJECT AUDIT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20would%20like%20to%20schedule%20a%20Project%20Marketing%20Audit."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>WHATSAPP KISHORE PATEL</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

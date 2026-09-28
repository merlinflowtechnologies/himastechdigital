import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { 
  allServices, 
  getServiceBySlug, 
  getOtherServices, 
  ServiceItem 
} from "@/data/servicesData";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  PhoneCall, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  Cpu,
  Home
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Himastech",
    };
  }

  return {
    title: `${service.title} | HIMASTECH Digital Realty Marketing`,
    description: service.description,
    openGraph: {
      title: `${service.title} — HIMASTECH`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = getOtherServices(service.slug);
  const currentIndex = allServices.findIndex((s) => s.slug === service.slug);
  const prevService = allServices[(currentIndex - 1 + allServices.length) % allServices.length];
  const nextService = allServices[(currentIndex + 1) % allServices.length];
  const IconComp = service.icon;

  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] min-h-screen pt-24 sm:pt-28 pb-20 overflow-x-hidden relative">
      
      {/* Background Volumetric Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ================= Breadcrumb & Previous/Next Quick Nav ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 mb-8 border-b border-white/10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-amber-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-bold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          {/* Quick Prev / Next Switcher */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
            <Link
              href={`/services/${prevService.slug}`}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden md:inline text-slate-400">Prev:</span>
              <span className="truncate max-w-[120px]">{prevService.shortTitle}</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href={`/services/${nextService.slug}`}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group"
            >
              <span className="hidden md:inline text-slate-400">Next:</span>
              <span className="truncate max-w-[120px]">{nextService.shortTitle}</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ================= Hero Showcase ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Title, Overview, Metrics & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Badge & Impact Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black shadow-xs">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>{service.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>{service.impact}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
              {service.title}
            </h1>

            {/* Brief Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-6">
              {service.description}
            </p>

            {/* Full Strategic Overview */}
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-white/10 mb-8 text-sm sm:text-base text-slate-200 leading-relaxed">
              <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
                Strategic Impact & Commercial Angle
              </div>
              <p>{service.fullOverview}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Link
                href="/#contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>REQUEST CUSTOM PROPOSAL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Icon Feature Showcase & Deliverables Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Header Card */}
            <div className="glass-card-gold rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-amber-400/30 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-md">
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                    Himastech Capability #{String(currentIndex + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xl font-black text-white">{service.shortTitle}</div>
                </div>
              </div>

              {/* Core Features Checklist */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Included Capabilities:
                </div>
                <ul className="space-y-2.5">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SLA Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-amber-400/20">
                <div className="glass-subcard p-3 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Deployment</div>
                  <div className="text-xs font-bold text-white mt-0.5">{service.deliverables.timeline}</div>
                </div>
                <div className="glass-subcard p-3 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Reporting</div>
                  <div className="text-xs font-bold text-white mt-0.5">{service.deliverables.reporting}</div>
                </div>
                <div className="glass-subcard p-3 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Dedicated Pod</div>
                  <div className="text-xs font-bold text-white mt-0.5">{service.deliverables.teamPod}</div>
                </div>
                <div className="glass-subcard p-3 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Quality Guarantee</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">{service.deliverables.guarantee}</div>
                </div>
              </div>

            </div>

            {/* Production Tech Stack Badges */}
            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production Tools &amp; Enterprise Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ================= Why It Drives Revenue (4 Strategic Benefits) ================= */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2">
              ROI &amp; Business Multipliers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Why {service.title} Directly Multiplies Revenue
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.strategicBenefits.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400/70 mb-2 block">
                    0{bIdx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 4-Step Tactical Execution Playbook ================= */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Standard Operating Procedures</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Our 4-Step Tactical Execution Playbook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.playbook.map((step, sIdx) => (
              <div
                key={sIdx}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-black flex items-center justify-center shadow-xs">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Phase {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CRUCIAL REQUIREMENT: NAVIGATION TO OTHER 11 SERVICES ================= */}
        <div className="pt-12 border-t border-white/10 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Channel Synergy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Explore The Other 11 Specialized Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Combine {service.shortTitle} with our full-stack growth arsenal to dominate your industry across search, social, ads, and AI automation.
              </p>
            </div>

            <Link
              href="/services"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors shrink-0 group"
            >
              <span>View All 12 Services Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid of the Other 11 Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {otherServices.map((other, idx) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.id}
                  href={`/services/${other.slug}`}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Corner Glow Accent */}
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${other.accent} rounded-bl-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />

                  <div>
                    {/* Top Row: Icon + Impact Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-amber-400">
                        <OtherIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        {other.impact}
                      </span>
                    </div>

                    {/* Badge & Title */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 block mb-1">
                      {other.badge}
                    </span>
                    <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                      {other.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3 font-medium">
                      {other.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= Bottom Conversion Banner ================= */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card-gold text-white relative overflow-hidden shadow-2xl border border-amber-400/30">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Dedicated Growth Strategy
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
                Ready to Implement {service.title} for Your Business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Get a customized execution roadmap, ad creative strategy, and ROI projection tailored to your business goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="/#contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>REQUEST CUSTOM PROPOSAL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

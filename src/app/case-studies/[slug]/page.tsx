import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Clock, 
  MapPin, 
  Share2, 
  Palette, 
  Target, 
  Video, 
  Laptop, 
  PhoneCall,
  Quote,
  Layers
} from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Himastech",
    };
  }

  return {
    title: `${project.title} Case Study | Himastech Creative Portfolio`,
    description: project.headline,
    openGraph: {
      title: `${project.title} | Himastech Client Case Study`,
      description: project.summary,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "real-estate": return <Building2 className="w-4 h-4 text-amber-400" />;
      case "social-media": return <Share2 className="w-4 h-4 text-pink-400" />;
      case "branding": return <Palette className="w-4 h-4 text-purple-400" />;
      case "ads": return <Target className="w-4 h-4 text-amber-400" />;
      case "ai-videos": return <Video className="w-4 h-4 text-cyan-400" />;
      case "websites": return <Laptop className="w-4 h-4 text-cyan-400" />;
      default: return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <Link href="/#portfolio" className="hover:text-amber-400 transition-colors">
            Creative Portfolio
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          {/* Category & Client Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-wider">
              {getCategoryIcon(project.category)}
              <span>{project.categoryLabel}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              {project.client}
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {project.clientLocation}
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {project.timeline}
            </span>
          </div>

          {/* Main Title & Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.12] mb-5">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-bold text-amber-400/90 leading-snug max-w-4xl mb-6">
            {project.headline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-medium">
            {project.summary}
          </p>
        </div>

        {/* Verified Performance Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12">
          {project.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 relative overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
            >
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gold-gradient tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Main Showcase Image Frame */}
        <div className="relative h-[360px] sm:h-[480px] md:h-[560px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] mb-14 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-black/30" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-black border border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Case Study Production Asset
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-xl bg-amber-400/20 backdrop-blur-md text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              Himastech Growth Engine
            </span>
          </div>
        </div>

        {/* Deep Dive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          
          {/* Left Column: Challenge & Strategic Blueprint */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* The Challenge */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-rose-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Client Challenge
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight">
                Overcoming Funnel Bottlenecks & Wasted Ad Spend
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            {/* Strategic Execution Framework */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 mb-3">
                <Layers className="w-4 h-4 text-amber-400" />
                Strategic Execution Architecture
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight">
                How Himastech Engineered The Turnaround
              </h2>
              <div className="space-y-4">
                {project.strategy.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="w-7 h-7 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-black flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact & Results Summary */}
            <div className="glass-card-gold rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-xl">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 mb-2">
                <TrendingUp className="w-4 h-4 text-amber-400" /> Verified Business Impact
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight">
                The Compounding Revenue Outcome
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {project.resultsSummary}
              </p>
            </div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                <Quote className="w-12 h-12 text-amber-400/20 absolute -top-2 right-4 pointer-events-none" />
                <p className="text-base sm:text-lg italic text-slate-200 leading-relaxed font-medium mb-4 relative z-10">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <div className="text-sm font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-xs text-amber-400 font-semibold">{project.testimonial.designation}</div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Deliverables & Quick Actions */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Deliverables Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Deployed Deliverables
              </h3>
              <ul className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-sm font-black uppercase tracking-wider text-white mb-3">
                Applied Channels & Tech
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-amber-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="glass-card-gold rounded-3xl p-6 border border-amber-400/30 text-center">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h3 className="text-lg font-black text-white mb-1.5">Want Similar Growth?</h3>
              <p className="text-xs text-slate-300 mb-4 font-medium">
                Get a free growth blueprint customized to your market and revenue goals.
              </p>
              <Link
                href="/#contact"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:scale-105 transition-all mb-2.5"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/916304989071?text=Hi%20Himastech%20team%2C%20I%20just%20read%20the%20${encodeURIComponent(project.title)}%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20campaign.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>WhatsApp Our Team</span>
              </a>
            </div>

          </div>

        </div>

        {/* Related Case Studies Grid */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Explore More Case Studies
            </h3>
            <Link
              href="/#portfolio"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <span>View All 12 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/case-studies/${rel.slug}`}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 block group"
              >
                <div className="text-[10px] font-black uppercase tracking-wider text-amber-400 mb-1">
                  {rel.categoryLabel}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-2 line-clamp-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                  {rel.summary}
                </p>
                <div className="flex items-center justify-between text-xs font-black text-amber-300 pt-2 border-t border-white/10">
                  <span>{rel.metrics[0]?.value}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
                    Read Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

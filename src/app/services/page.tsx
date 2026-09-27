import Link from "next/link";
import { Metadata } from "next";
import { allServices } from "@/data/servicesData";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  PhoneCall, 
  TrendingUp,
  Layers,
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "12 Specialized Digital Marketing Services | HIMASTECH",
  description: "Explore Himastech's full-stack digital marketing and AI growth capabilities: Real Estate Marketing, Meta Ads, Google Ads, SEO, Next.js Websites, Video, WhatsApp, and AI Systems.",
};

export default function ServicesHubPage() {
  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] min-h-screen pt-24 sm:pt-28 pb-20 overflow-x-hidden relative">
      
      {/* Background Volumetric Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium py-3 mb-6 border-b border-white/10">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-300 font-bold">Services Directory</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest font-black mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Digital Marketing Arsenal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            12 Specialized Capabilities. <br className="hidden sm:block" />
            <span className="text-gold-gradient">One Integrated Growth Engine.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
            From hyper-targeted paid acquisition and AI-powered search optimization to sub-second Next.js web applications, viral video reels, and automated WhatsApp conversion funnels.
          </p>
        </div>

        {/* 12 Services Full Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-20">
          {allServices.map((service, index) => {
            const IconComp = service.icon;
            const numStr = String(index + 1).padStart(2, "0");
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl relative overflow-hidden"
              >
                {/* Corner Gradient Glow */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.accent} rounded-bl-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Top Row: Icon, Service Index, Impact Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-amber-400 shadow-xs">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400/60">
                        #{numStr}
                      </span>
                    </div>

                    <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                      <TrendingUp className="w-3 h-3 text-emerald-400" /> {service.impact}
                    </span>
                  </div>

                  {/* Title & Category Badge */}
                  <div className="mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                      {service.badge}
                    </span>
                    <h2 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {service.title}
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-3.5 border-t border-white/10">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-tight truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                    <span>View Full Strategy</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                    Growth SLA
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card-gold text-white relative overflow-hidden shadow-2xl border border-amber-400/30">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Full-Stack Digital Partner
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
                Not Sure Which Services You Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Book a free 30-minute digital marketing &amp; revenue audit. Our leadership will review your current pipeline, website, and ad accounts to give you an objective roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="/#contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all hover:scale-105 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>BOOK FREE AUDIT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20would%20like%20to%20book%20a%20Free%20Marketing%20Audit%20for%20our%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>WHATSAPP OUR TEAM</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

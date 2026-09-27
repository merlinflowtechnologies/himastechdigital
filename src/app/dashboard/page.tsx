import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
import { MarketingDashboardSection } from "@/components/MarketingDashboardSection";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Live Marketing Dashboard • Real Campaign Telemetry | Himastech",
  description: "Audited marketing performance telemetry across Meta CAPI, Google Ads, and CRM funnels. Real campaign data only: Campaigns, Leads, Reach, Engagement, and Campaigns Optimized.",
  openGraph: {
    title: "Live Marketing Dashboard • Real Campaign Telemetry | Himastech",
    description: "Audited marketing performance telemetry across Meta CAPI, Google Ads, and CRM funnels. Real campaign data only.",
  }
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full text-slate-100 bg-[#07090e] min-h-screen pt-24 pb-20 relative overflow-hidden">
      <BackgroundEffects />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 mb-2">
        <div className="flex items-center justify-between flex-wrap gap-4 py-3 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Audited Against Meta Business Manager &amp; Google Ads API</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <MarketingDashboardSection />

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0d1322] to-amber-950/40 border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ready for Real Campaign Growth?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Deploy Audited CAPI &amp; Multi-Channel Funnels for Your Business
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Get direct access to senior media buyers, 24/7 telemetry dashboards, and high-ticket lead qualification with zero long-term lock-in.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md"
            >
              Get Free Consultation →
            </Link>
            <a
              href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20reviewed%20your%20live%20marketing%20dashboard%20and%20would%20like%20to%20discuss%20our%20campaign."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Strategy Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

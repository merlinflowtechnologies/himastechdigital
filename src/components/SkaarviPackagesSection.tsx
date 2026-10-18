"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, MessageCircle } from "lucide-react";

interface SkaarviPackagesSectionProps {
  onOpenRegisterModal?: () => void;
}

export function SkaarviPackagesSection({ onOpenRegisterModal }: SkaarviPackagesSectionProps) {
  const packages = [
    {
      id: "silver",
      name: "Silver Package",
      tagline: "Essential starter skills for homemakers & beginners",
      price: "₹1,999",
      billing: "One-time payment • Lifetime access",
      badge: "Self-Paced Starter",
      isPopular: false,
      accent: "border-slate-200 hover:border-[#062d72]",
      features: [
        "MS Excel Basic to Intermediate Worksheets",
        "Amazon & Flipkart Affiliate Marketing Foundations",
        "Canva Pro Graphic Design Templates in Telugu",
        "HIMASTECH WhatsApp & Telegram Community Access",
        "Course Completion Digital Certificate",
        "Community Support & Q&A"
      ],
      ctaText: "Enroll in Silver",
      ctaClass: "bg-white border-2 border-[#062d72] text-[#062d72] hover:bg-[#062d72] hover:text-white"
    },
    {
      id: "gold",
      name: "Gold Package",
      tagline: "Most chosen by students, ambitious earners & professionals",
      price: "₹4,999",
      billing: "One-time payment • Complete cohort",
      badge: "MOST POPULAR",
      isPopular: true,
      accent: "border-[#f15a22] shadow-xl",
      features: [
        "All Courses in Silver Package Included",
        "AI Faceless YouTube & Reels Automation Mastery",
        "Prompt Engineering & ChatGPT Productivity",
        "Meesho Reselling & Social Commerce Playbook",
        "Weekly Live Zoom Mentoring with Surekha Mam",
        "Hands-On Practical Homework Reviews",
        "Dedicated Job Connect & Freelance Leads",
        "Official Verified HIMASTECH Academy Certificate"
      ],
      ctaText: "Enroll in Gold Cohort",
      ctaClass: "bg-gradient-to-r from-[#062d72] to-[#f15a22] text-white hover:opacity-95 shadow-lg shadow-[#062d72]/20"
    },
    {
      id: "diamond",
      name: "Diamond / Platinum Pass",
      tagline: "Full access career track & high-income real estate funnels",
      price: "₹9,999",
      billing: "Lifetime VIP Access • Unlimited cohorts",
      badge: "VIP ALL-ACCESS",
      isPopular: false,
      accent: "border-purple-300 hover:border-purple-600",
      features: [
        "Everything in Silver & Gold Packages",
        "Real Estate Digital Sales & HNI Lead Generation",
        "Meta & Google Performance Ads Scaling",
        "WhatsApp Automation Bot & CRM Integration",
        "1-on-1 Strategy & Resume/Portfolio Audit",
        "Priority Agency Freelance Contract Referrals",
        "Lifetime VIP Mentorship Access"
      ],
      ctaText: "Enroll in Platinum VIP",
      ctaClass: "bg-gradient-to-r from-purple-700 to-indigo-900 text-white hover:opacity-95 shadow-lg"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white/40 backdrop-blur-xs text-slate-800 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/70 shadow-md">
          <span className="text-xs font-black uppercase tracking-widest text-[#f15a22] bg-[#f15a22]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            GET MEMBERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#062d72] tracking-tight">
            HIMASTECH <span className="text-[#f15a22]">Packages</span>
          </h2>
          <div className="w-16 h-1 bg-[#f15a22] rounded-full mx-auto mt-3 mb-4" />
          <p className="text-xs sm:text-sm text-slate-600">
            Choose the learning track that fits your career or earning goal. Transparent pricing in Telugu with zero hidden fees.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map(pkg => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-2 transition-all duration-300 relative ${pkg.accent} ${
                pkg.isPopular ? "scale-102 lg:-translate-y-2" : ""
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#062d72] to-[#f15a22] text-white text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  ★ Most Popular Telugu Track ★
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    {pkg.badge}
                  </span>
                  {pkg.isPopular && (
                    <Sparkles className="w-5 h-5 text-[#f15a22]" />
                  )}
                </div>

                <h3 className="text-2xl font-black text-[#062d72] mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  {pkg.tagline}
                </p>

                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl sm:text-4xl font-black text-[#062d72]">
                    {pkg.price}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-1">
                    {pkg.billing}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 block">
                    What's Included:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenRegisterModal || (() => {
                    const text = `Hi HIMASTECH Digital Marketing, I want to enroll in the ${pkg.name} (${pkg.price})`;
                    window.open(`https://wa.me/916304989071?text=${encodeURIComponent(text)}`, "_blank");
                  })}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${pkg.ctaClass}`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="mt-3 text-center">
                  <a
                    href={`https://wa.me/916304989071?text=${encodeURIComponent(`Hi, I have questions about ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-slate-500 hover:text-[#f15a22] inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Ask Questions on WhatsApp</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">100% Practical Implementation Guarantee</div>
              <div className="text-[11px] text-slate-500">Live doubt clearing in Telugu every week until you master the skills.</div>
            </div>
          </div>
          <a
            href="https://wa.me/916304989071"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white text-xs font-bold transition-colors shrink-0"
          >
            Chat with Counselor
          </a>
        </div>

      </div>
    </section>
  );
}

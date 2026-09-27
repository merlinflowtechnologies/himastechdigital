"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Performance & ROAS",
      question: "How quickly can we expect measurable ROAS improvements?",
      answer: "For Paid Media (Meta, Google Ads, TikTok), we launch new campaign structures within 7-10 business days after onboarding and pixel tracking audits. Most clients experience measurable CAC reduction and lead volume growth within the first 21 to 30 days of active ad testing.",
    },
    {
      category: "Ad Spend & Contracts",
      question: "What is the recommended monthly ad budget to work with Himastech?",
      answer: "We recommend a minimum ad spend of ₹1,00,000 to ₹2,50,000/month for paid media campaigns so our algorithmic testing framework has sufficient data volume to optimize bids, audience segments, and creative variations efficiently. We operate on month-to-month retainers with zero long-term lock-in.",
    },
    {
      category: "Attribution & Tracking",
      question: "How do you handle iOS privacy updates and attribution tracking?",
      answer: "We implement 100% server-side tracking using Meta Conversions API (CAPI), Google Enhanced Conversions, and custom First-Party Server GTM containers. This bypasses browser ad blockers and iOS tracking loss, providing clean attribution and higher conversion signaling.",
    },
    {
      category: "Creative Production",
      question: "Do you create the video ads and landing pages, or do we provide them?",
      answer: "Himastech provides end-to-end creative production. Our team scripts direct-response hooks, sources UGC creator content, designs high-CTR static carousels, and builds high-speed custom Next.js landing pages. You simply approve the creative roadmap.",
    },
    {
      category: "Generative SEO & GEO",
      question: "What is Generative Engine Optimization (GEO) and why does it matter?",
      answer: "GEO is the new frontier of organic search. As consumers search via ChatGPT, Perplexity AI, and Google Gemini instead of traditional search bars, GEO optimizes your brand's technical knowledge graph and semantic entity authority so AI models cite your business as the recommended solution.",
    },
    {
      category: "Recruitment & Training",
      question: "How does your marketing recruitment & training program work?",
      answer: "Through our intensive training academy, we upskill ambitious marketers on live ad accounts and Meta Blueprint standards. When our clients need to hire dedicated in-house media buyers or marketing specialists, we provide pre-vetted, certified talent from our top graduate cohort.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-xs uppercase tracking-wider font-bold mb-4 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3"
          >
            Got Questions?{" "}
            <span className="text-electric-gradient">
              We&apos;ve Got Answers.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium"
          >
            Everything you need to know about our data-driven marketing frameworks, lead pipelines, and deliverables.
          </motion.p>
        </div>

        {/* Compact FAQ Accordion Cards */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? "glass-card-cyan border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.2)]" 
                    : "glass-card glass-card-hover border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                      {faq.category}
                    </span>
                    <h3 className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                      isOpen ? "text-white" : "text-slate-200 group-hover:text-cyan-200"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-xl shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "rotate-180 text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]" 
                      : "text-slate-400 bg-white/5 border border-white/10 group-hover:text-white group-hover:border-white/20"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Bottom Support Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Have a specific question about your marketing stack?</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Our senior media strategists are available for a 1-on-1 strategy call.</p>
          </div>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Book Strategy Call</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

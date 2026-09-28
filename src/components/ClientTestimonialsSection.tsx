"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  X, 
  FileCheck2, 
  Check,
  PlusCircle
} from "lucide-react";
import { genuineClientTestimonials, ClientTestimonial } from "@/data/clientTestimonialsData";

export function ClientTestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitForm, setSubmitForm] = useState({
    name: "",
    company: "",
    designation: "",
    project: "",
    phone: "",
    reviewText: "",
    rating: 5
  });

  const categories = ["All", "Real Estate", "Technology", "Branding & Social", "High-Ticket Ads"];

  const filteredTestimonials = activeCategory === "All"
    ? genuineClientTestimonials
    : genuineClientTestimonials.filter((item) => item.category === activeCategory);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Anchor for legacy #feedback / #reviews links */}
      <div id="feedback" className="scroll-mt-28" />
      <div id="reviews" className="scroll-mt-28" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Client <span className="text-gold-gradient">Testimonials.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Direct testimonials from verified real estate developers, enterprise tech founders, and commercial leaders with authentic company partnerships and documented results.
          </motion.p>

          {/* Genuine Client Standard Banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold"
          >
            <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Integrity Policy: Zero Invented Reviews. Tied Directly to Executed Contracts.</span>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 font-black"
                    : "glass-card text-slate-300 hover:border-white/25 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border border-amber-400/30 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Submit Review</span>
            </button>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Amber Glow on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-40 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar: Authentic Company Logo + Rating & Verification */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
                    {/* Real Client Company Logo */}
                    <div className="relative h-11 w-44 rounded-xl overflow-hidden glass-subcard p-1 flex items-center justify-center shrink-0">
                      <Image
                        src={item.companyLogo}
                        alt={`${item.company} Logo`}
                        width={170}
                        height={40}
                        className="object-contain max-h-9 w-auto drop-shadow-sm"
                      />
                    </div>

                    {/* Star Rating & Verified Pill */}
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.highlightMetric}</span>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-7 h-7 text-amber-400/20 absolute -top-3 -left-1 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed italic relative z-10 pl-2">
                      “{item.testimonial}”
                    </p>
                  </div>
                </div>

                {/* Bottom Identity Block (Without Photo) */}
                <div className="pt-5 border-t border-white/10">
                  <div className="flex items-center gap-3.5">
                    {/* Clean Executive Initials Monogram Avatar */}
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-amber-600/20 border-2 border-amber-400/30 flex items-center justify-center shadow-lg shrink-0 group-hover:border-amber-400 transition-colors">
                      <span className="text-sm font-black text-amber-300 tracking-wider">
                        {item.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0b0e17] flex items-center justify-center shadow-xs">
                        <Check className="w-2.5 h-2.5 text-slate-950 font-black stroke-[3]" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-amber-400 font-semibold leading-tight mt-0.5">
                        {item.designation}
                      </p>
                      <p className="text-[10px] text-slate-300 font-medium truncate mt-0.5">
                        {item.company}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium truncate flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* SUBMIT VERIFIED REVIEW MODAL */}
      {/* ========================================================================= */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-lg glass-modal rounded-3xl border border-white/25 shadow-2xl overflow-hidden my-auto p-6 sm:p-7 text-white"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <h3 className="text-lg font-black text-white">Submit Verified Client Review</h3>
                <p className="text-xs text-amber-400">For active or past clients of Himastech &amp; Kishore Patel</p>
              </div>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  setSubmitted(false);
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmitReview} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={submitForm.name}
                      onChange={(e) => setSubmitForm({ ...submitForm, name: e.target.value })}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Designation / Role *</label>
                    <input
                      type="text"
                      required
                      value={submitForm.designation}
                      onChange={(e) => setSubmitForm({ ...submitForm, designation: e.target.value })}
                      placeholder="e.g. Managing Director"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Company / Project Name *</label>
                    <input
                      type="text"
                      required
                      value={submitForm.company}
                      onChange={(e) => setSubmitForm({ ...submitForm, company: e.target.value })}
                      placeholder="e.g. Sovereign Developers"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Official Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={submitForm.phone}
                      onChange={(e) => setSubmitForm({ ...submitForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Your Endorsement / Experience with Himastech *</label>
                  <textarea
                    rows={3}
                    required
                    value={submitForm.reviewText}
                    onChange={(e) => setSubmitForm({ ...submitForm, reviewText: e.target.value })}
                    placeholder="Share how Kishore Patel and the Himastech team impacted your project sales, leads, or brand visibility..."
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-xs hover:scale-102 transition-all cursor-pointer uppercase tracking-wider"
                >
                  Submit For Verification &amp; Publishing →
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3.5">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white">Review Submitted Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-amber-300">{submitForm.name || "valued partner"}</strong>. Your endorsement has been received and will be verified by our team before publishing.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setShowSubmitModal(false);
                      setSubmitted(false);
                      setSubmitForm({
                        name: "",
                        company: "",
                        designation: "",
                        project: "",
                        phone: "",
                        reviewText: "",
                        rating: 5
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </section>
  );
}

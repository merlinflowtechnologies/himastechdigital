"use client";

import { useState, useTransition } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Building2,
  User,
  Layers,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions";

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    serviceRequired: "Real Estate Digital Marketing & Lead Funnels",
    businessDetails: ""
  });

  const serviceOptions = [
    "Real Estate Digital Marketing & Lead Funnels",
    "Meta & Google Ads Management (CAPI)",
    "Commercial Grade-A Pre-Lease Campaigns",
    "Aesthetic Social Media & Reels Commerce",
    "Complete Brand Identity & Positioning",
    "Custom Website & Funnel Architecture",
    "Free 30-Min Marketing Audit & Strategy"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const data = new FormData();
    data.set("name", formData.name);
    data.set("businessName", formData.businessName);
    data.set("phone", formData.phone);
    data.set("email", formData.email);
    data.set("serviceRequired", formData.serviceRequired);
    data.set("businessDetails", formData.businessDetails);

    startTransition(async () => {
      const result = await submitContactForm(data);
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          businessName: "",
          phone: "",
          email: "",
          serviceRequired: serviceOptions[0],
          businessDetails: ""
        });
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        setError(result.error || "An unexpected error occurred. Please try again.");
      }
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#07090e] border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-black mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>CONTACT HIMASTECH</span>
          </div>

          {/* Requested Exact Headline: Let's Talk About Your Business. */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Let&apos;s Talk About <span className="text-gold-gradient">Your Business.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
            Ready to generate high-ticket real estate buyers, scale paid ads, or upgrade your brand? Reach us directly or share your requirements below.
          </p>
        </div>

        {/* 2-Column Equal Height Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* ========================================================================= */}
          {/* LEFT COLUMN: DISPLAY (Call Us • WhatsApp • Email • Hyderabad, Telangana) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-6 sm:p-8 glass-card border border-white/15 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs uppercase tracking-wider font-bold mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Direct Communication Channels</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 leading-tight">
                  Reach Our Growth Desk
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Connect directly with Kishore Patel and our senior growth specialists. Zero junior gatekeepers, 100% confidential.
                </p>

                {/* Direct Contact Cards Display */}
                <div className="space-y-3">
                  
                  {/* 1. CALL US */}
                  <a
                    href="tel:+916304989071"
                    className="rounded-2xl p-4 glass-subcard hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-xs hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <Phone className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                          Call Us
                        </div>
                        <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          +91 6304989071
                        </div>
                        <div className="text-[10.5px] text-slate-400 font-medium">
                          Mon – Sat: 9:00 AM – 7:00 PM IST
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2.5 py-1 rounded-full border border-amber-400/30">
                      Call Now →
                    </span>
                  </a>

                  {/* 2. WHATSAPP */}
                  <a
                    href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20let's%20talk%20about%20our%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl p-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-xs hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#25D366] text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                      </div>
                      <div>
                        <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                          WhatsApp
                        </div>
                        <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          +91 6304989071
                        </div>
                        <div className="text-[10.5px] text-slate-300 font-medium">
                          Instant Response (Avg 5 mins)
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-300 bg-[#25D366]/20 px-2.5 py-1 rounded-full border border-[#25D366]/40">
                      Chat 💬
                    </span>
                  </a>

                  {/* 3. EMAIL */}
                  <a
                    href="mailto:info@himastech.com"
                    className="rounded-2xl p-4 glass-subcard hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-xs hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <Mail className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                          Email
                        </div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          info@himastech.com
                        </div>
                        <div className="text-[10.5px] text-slate-400 font-medium">
                          Proposals &amp; Official Inquiries
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* 4. HYDERABAD, TELANGANA */}
                  <div className="rounded-2xl p-4 glass-subcard flex items-center gap-3.5 shadow-xs">
                    <div className="w-11 h-11 rounded-xl bg-purple-400/10 border border-purple-400/25 text-purple-400 flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                        Location
                      </div>
                      <div className="text-sm font-bold text-white">
                        Hyderabad, Telangana.
                      </div>
                      <div className="text-[10.5px] text-slate-400 font-medium">
                        Operational Desk: Nagole, Hyderabad, 500068
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-5 mt-6 border-t border-white/10 space-y-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Strict NDA Protection • Zero Spam Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Turnaround guarantee: response within 2 business hours</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: FIELDS (Name • Business Name • Phone • Email • Service Required • Tell us about your business.) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-6 sm:p-8 glass-card border border-white/15 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form
                    key="form"
                    className="space-y-4"
                    onSubmit={handleSubmit}
                  >
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs">
                        {error}
                      </div>
                    )}

                    {/* Row 1: Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* FIELD 1: Name */}
                      <div>
                        <label htmlFor="name" className="text-xs font-bold text-slate-300 block mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Varma"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                        />
                      </div>

                      {/* FIELD 2: Business Name */}
                      <div>
                        <label htmlFor="businessName" className="text-xs font-bold text-slate-300 block mb-1">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Sovereign Realty Developers"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* FIELD 3: Phone */}
                      <div>
                        <label htmlFor="phone" className="text-xs font-bold text-slate-300 block mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                        />
                      </div>

                      {/* FIELD 4: Email */}
                      <div>
                        <label htmlFor="email" className="text-xs font-bold text-slate-300 block mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                        />
                      </div>
                    </div>

                    {/* FIELD 5: Service Required */}
                    <div>
                      <label htmlFor="serviceRequired" className="text-xs font-bold text-slate-300 block mb-1">
                        Service Required *
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        required
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-[#0e1424] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer shadow-xs"
                      >
                        {serviceOptions.map((service, idx) => (
                          <option key={idx} value={service} className="bg-[#0e1424] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* FIELD 6: Tell us about your business. */}
                    <div>
                      <label htmlFor="businessDetails" className="text-xs font-bold text-slate-300 block mb-1">
                        Tell us about your business. *
                      </label>
                      <textarea
                        id="businessDetails"
                        name="businessDetails"
                        required
                        rows={4}
                        value={formData.businessDetails}
                        onChange={(e) => setFormData({ ...formData, businessDetails: e.target.value })}
                        placeholder="Tell us about your project location, current ad bottlenecks, lead volume targets, or what you're looking to achieve..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none shadow-xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer shadow-md"
                      >
                        {isPending ? (
                          <div className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-slate-950" />
                            <span>BOOK FREE CONSULTATION</span>
                            <ArrowRight className="h-4 w-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Direct WhatsApp Callout */}
                    <div className="text-center pt-1">
                      <p className="text-[11px] text-slate-400">
                        Prefer an immediate conversation?{" "}
                        <a
                          href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20let's%20talk%20about%20our%20business."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
                        >
                          <MessageCircle className="w-3 h-3 fill-emerald-400" />
                          <span>WHATSAPP HIMASTECH (+91 6304989071)</span>
                        </a>
                      </p>
                    </div>

                  </form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 shadow-sm">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Message Received!</h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-sm mb-4 leading-relaxed font-medium">
                      Thank you for sharing your requirements. Kishore Patel and our senior growth specialists will review your business details and connect with you within 2 business hours.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Turnaround time: under 2 business hours</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
}

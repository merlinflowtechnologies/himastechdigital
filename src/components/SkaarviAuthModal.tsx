"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Send, Lock, User, Phone, Mail, BookOpen } from "lucide-react";

interface SkaarviAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "register" | "login";
}

export function SkaarviAuthModal({ isOpen, onClose, initialMode = "register" }: SkaarviAuthModalProps) {
  const [mode, setMode] = useState<"register" | "login">(initialMode);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("Gen-AI & Digital Marketing");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Persist registration details to Admin Portal database
    try {
      if (mode === "register") {
        await fetch("/api/registrations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            course: selectedCourse,
            source: "Website Registration Modal"
          })
        });
      }
    } catch (err) {
      console.warn("Auto-sync registration failed:", err);
    }

    setTimeout(() => {
      // Redirect or WhatsApp message
      const text = mode === "register" 
        ? `Hello HIMASTECH Digital Marketing, I want to register for ${selectedCourse}.\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim()}`
        : `Hello HIMASTECH Digital Marketing, I need help logging into my student account.\n\nPhone: ${phone.trim()}`;
      window.open(`https://wa.me/916304989071?text=${encodeURIComponent(text)}`, "_blank");
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f15a22]/10 text-[#f15a22] text-[10px] font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HIMASTECH Digital Marketing Academy</span>
            </div>
            <h3 className="text-2xl font-black text-[#062d72] tracking-tight">
              {mode === "register" ? "Register for Live Cohort" : "Student Login"}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {mode === "register"
                ? "Start learning practical digital marketing and online earning skills in Telugu."
                : "Enter your credentials to access your course materials and live mentoring replay."}
            </p>
          </div>

          {/* Mode Switch Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                mode === "register"
                  ? "bg-white text-[#062d72] shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Register (New Student)
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                mode === "login"
                  ? "bg-white text-[#062d72] shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Sign In (Existing)
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f15a22] focus:ring-2 focus:ring-[#f15a22]/20"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                WhatsApp Phone Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f15a22] focus:ring-2 focus:ring-[#f15a22]/20"
                />
              </div>
            </div>

            {mode === "register" && (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="youremail@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f15a22] focus:ring-2 focus:ring-[#f15a22]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Preferred Course / Interest
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#f15a22] focus:ring-2 focus:ring-[#f15a22]/20 bg-white"
                    >
                      <option value="Gen-AI & Digital Marketing">Gen-AI &amp; Digital Marketing</option>
                      <option value="MS Excel Mastery">MS Excel Mastery</option>
                      <option value="Affiliate Marketing (Amazon & Flipkart)">Affiliate Marketing</option>
                      <option value="Meesho Reselling in Telugu">Meesho Reselling in Telugu</option>
                      <option value="AI Faceless Channels & Reels">AI Faceless Channels &amp; Reels</option>
                      <option value="Canva & Video Editing Mastery">Canva &amp; Video Editing</option>
                      <option value="Real Estate Lead Generation Funnels">Real Estate Lead Generation</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {mode === "login" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Access Code or Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="Enter your student password"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f15a22] focus:ring-2 focus:ring-[#f15a22]/20"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#062d72] to-[#f15a22] hover:opacity-95 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-5"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white animate-spin" />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <span>{mode === "register" ? "Confirm & Join Telugu Batch" : "Log In to Student Portal"}</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-[11px] text-slate-400">
              Need immediate help? Call/WhatsApp{" "}
              <a href="https://wa.me/916304989071" target="_blank" rel="noopener noreferrer" className="text-[#f15a22] font-bold hover:underline">
                +91 6304989071
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

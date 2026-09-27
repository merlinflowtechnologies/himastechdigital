"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles, ArrowRight, Phone } from "lucide-react";

export function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isMerlinflow = pathname?.includes("merlinflow");

  const merlinflowNum1 = "918374373753";
  const merlinflowNum2 = "918247716878";
  const himastechNum = "916304989071";

  const defaultMessage = isMerlinflow
    ? "Hi Merlinflow team, I would like to book a product demo for your SaaS ERP solutions."
    : "Hi Himastech team, I would like to learn more about your data-driven marketing services and training tracks.";

  const primaryUrl = isMerlinflow
    ? `https://wa.me/${merlinflowNum1}?text=${encodeURIComponent(defaultMessage)}`
    : `https://wa.me/${himastechNum}?text=${encodeURIComponent(defaultMessage)}`;

  const secondaryUrl = `https://wa.me/${merlinflowNum2}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* Mini Quick Message Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 sm:w-84 rounded-2xl glass-modal border border-emerald-500/30 p-4 shadow-[0_10px_40px_rgba(37,211,102,0.25)] relative overflow-hidden"
          >
            {/* Ambient Green Flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#25D366] to-emerald-400 flex items-center justify-center text-white shadow-md">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0d141e] animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {isMerlinflow ? "Merlinflow Solutions Desk" : "Himastech Growth Desk"}
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-medium">Online • Typically replies in 5m</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close WhatsApp prompt"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Bubble Message */}
            <div className="rounded-xl glass-subcard border border-white/10 p-3 mb-3 text-xs text-slate-200 leading-relaxed">
              {isMerlinflow
                ? "👋 Hey! Looking to schedule a software demo or discuss custom ERP deployments? Connect with our technical directors directly."
                : "👋 Hey! Looking to scale your ad ROAS or explore digital marketing training? Let's talk directly on WhatsApp."}
            </div>

            {/* Direct CTA Buttons */}
            {isMerlinflow ? (
              <div className="space-y-2">
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white text-xs font-bold flex items-center justify-between shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Chat Desk 1 (+91 8374373753)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Chat Desk 2 (+91 8247716878)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start WhatsApp Chat <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2.5">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#25D366] to-[#1ebd59] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] border-2 border-white/20 relative cursor-pointer transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle Outer Pulse Ring */}
          <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-30 pointer-events-none" />

          {/* Official WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current group-hover:rotate-6 transition-transform" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>

          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#070913] flex items-center justify-center text-[8px] font-black text-white">
            1
          </span>
        </motion.button>

        {/* Hover / Initial Pill Badge */}
        <AnimatePresence>
          {(isHovered || !isOpen) && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d141e]/90 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/40 cursor-pointer hover:border-emerald-500/60 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Chat on WhatsApp
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

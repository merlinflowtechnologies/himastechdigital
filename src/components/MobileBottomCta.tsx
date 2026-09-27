"use client";

import Link from "next/link";
import { Sparkles, MessageCircle, Phone, ArrowRight } from "lucide-react";

export function MobileBottomCta() {
  const whatsappUrl = "https://wa.me/916304989071?text=Hi%20Himastech%2C%20I'm%20ready%20to%20grow.%20Our%20competitors%20are%20already%20building%20their%20presence%E2%80%94let's%20build%20ours.%20I%20would%20like%20to%20book%20a%20free%20consultation.";

  return (
    <aside 
      aria-label="Quick Mobile Actions" 
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 pt-2 pb-3.5 bg-[#07090e]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_35px_rgba(0,0,0,0.8)]"
    >
      {/* Top Micro Live Bar */}
      <div className="flex items-center justify-between px-2 pb-1.5 text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5 font-black text-amber-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
          </span>
          GROWTH DESK ONLINE
        </span>
        <span className="text-slate-300 font-medium truncate max-w-[200px] text-[9.5px]">
          Free Real Estate &amp; Marketing Consultation
        </span>
      </div>

      {/* Main Action Buttons Grid */}
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Quick Phone Call Button */}
        <a
          href="tel:+916304989071"
          aria-label="Call Himastech Team"
          className="col-span-2 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center active:scale-95 transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
        </a>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 h-11 px-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 text-emerald-400 hover:text-emerald-300 font-bold text-[11px] flex items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
          <span className="truncate">WHATSAPP</span>
        </a>

        {/* Primary High-Impact CTA */}
        <Link
          href="#contact"
          className="col-span-6 h-11 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(245,158,11,0.35)] active:scale-95 transition-all tracking-wide uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 text-slate-950" />
          <span className="truncate">BOOK FREE CONSULT</span>
          <ArrowRight className="w-3 h-3 shrink-0" />
        </Link>
      </div>
    </aside>
  );
}

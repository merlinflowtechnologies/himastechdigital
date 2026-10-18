"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  GraduationCap,
  Sparkles
} from "lucide-react";

export function SkaarviFooter() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#051c44] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-white/10 relative overflow-hidden scroll-mt-20">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f15a22]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-transform group-hover:scale-105">
                <Image 
                  src="/logo-icon.png" 
                  alt="HIMASTECH Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-[#e59800] leading-none">
                  HIMASTECH
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5768] mt-1">
                  Digital Realty Marketing
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mb-4">
              At HIMASTECH, we specialize in high-impact Digital Realty Marketing, performance advertising, and skill development to empower next-generation realtors, brands, and learners with modern industry mastery.
            </p>

            {/* Powered by Merlinflow Technologies Private Limited Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                Powered by{" "}
                <Link 
                  href="/merlinflow" 
                  className="text-white font-bold hover:text-cyan-300 transition-colors"
                >
                  Merlinflow Technologies Private Limited
                </Link>
              </span>
            </div>

            {/* Official Social Media Channels */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20let's%20talk%20about%20our%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] border border-white/10 group cursor-pointer"
                title="WhatsApp: +91 6304989071"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.96.536 1.764.78 2.791.78h.001c3.181 0 5.768-2.586 5.768-5.766 0-3.18-2.587-5.766-5.769-5.766zm3.376 8.21c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.748-.393-1.423-.592-2.339-2.043-2.41-2.138-.071-.095-.572-.76-.572-1.45 0-.69.362-1.03.49-1.173.128-.143.279-.179.373-.179.094 0 .188.001.27.006.086.005.201-.033.314.24.118.283.402.981.437 1.053.036.072.06.155.012.25-.048.096-.072.156-.143.239-.072.083-.151.185-.216.248-.071.07-.145.147-.062.29.083.143.37.61.794.987.545.485 1.006.636 1.149.707.143.072.227.06.312-.036.084-.096.363-.423.46-.568.096-.144.192-.12.324-.072.132.048.837.394.981.466.144.072.24.108.276.168.036.06.036.347-.108.752z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.659 1.442 5.17L2 22l4.98-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.155-.494-4.42-1.341l-.317-.213-2.955.775.789-2.88-.233-.37A8.04 8.04 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.062-8 8.062z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/himastech_digitalmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(225,48,108,0.5)] border border-white/10 group cursor-pointer"
                title="Instagram: @himastech_digitalmarketing"
                aria-label="Visit Himastech on Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@himastech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] border border-white/10 group cursor-pointer"
                title="YouTube: @himastech"
                aria-label="Subscribe to Himastech on YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1CWdf1L6SK/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.5)] border border-white/10 group cursor-pointer"
                title="Facebook: Himastech"
                aria-label="Visit Himastech on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://telegram.me/+Tv4fWG7yinJmMGM1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#24A1DE] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(36,161,222,0.5)] border border-white/10 group cursor-pointer"
                title="Telegram Community"
                aria-label="Join Himastech Telegram Community"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo("home")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("about-us")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("meet-our-founders")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  Meet Our Founders
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("courses")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("packages")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("success-stories")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#f15a22] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#f15a22] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#f15a22] transition-colors">
                  Cancellation &amp; Refund
                </Link>
              </li>
              <li>
                <button onClick={() => scrollTo("about-us")} className="hover:text-[#f15a22] transition-colors cursor-pointer">
                  FAQ's
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Contacts &amp; Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href="https://wa.me/916304989071" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">WhatsApp Support</div>
                    <div className="text-slate-300">+91 6304989071</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@himastechdigi.com" 
                  className="flex items-start gap-2.5 hover:text-[#f15a22] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#f15a22] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Email</div>
                    <div className="text-slate-300">info@himastechdigi.com</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Operational Hub</div>
                  <div className="text-slate-300 leading-relaxed text-[11px]">
                    Nagole, Hyderabad, Telangana – 500068
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© Copyright 2026 HIMASTECH Digital Realty Marketing. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Powered by</span>
            <Link 
              href="/merlinflow" 
              className="text-white hover:text-amber-300 font-bold transition-colors underline decoration-slate-500 hover:decoration-amber-400 underline-offset-2"
            >
              Merlinflow Technologies Private Limited
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

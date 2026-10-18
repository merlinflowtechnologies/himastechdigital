"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  LogIn
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkaarviNavbarProps {
  onOpenRegisterModal?: () => void;
  onOpenLoginModal?: () => void;
}

export function SkaarviNavbar({ onOpenRegisterModal, onOpenLoginModal }: SkaarviNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courseList = [
    { title: "MS Excel Mastery", desc: "Basic to Advanced Formulas in Telugu" },
    { title: "Amazon & Flipkart Affiliate Marketing", desc: "Passive Commission Blueprint" },
    { title: "Meesho Reselling in Telugu", desc: "Zero Investment Social Commerce" },
    { title: "AI Faceless YouTube & Reels", desc: "Automated Content & Voiceover" },
    { title: "Canva Pro & CapCut Video Editing", desc: "Graphic Design & High-CTR Banners" },
    { title: "Real Estate Digital Sales & Funnels", desc: "HNI Lead Generation for Realtors" },
    { title: "Meta & Google Ads Masterclass", desc: "Performance Marketing & ROAS" }
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-40 bg-white/85 backdrop-blur-md transition-all duration-200 ${
        isScrolled 
          ? "shadow-md py-3 border-b border-slate-200/80" 
          : "py-4 border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Himastech Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 transition-transform group-hover:scale-105">
            <Image 
              src="/logo-icon.png" 
              alt="HIMASTECH Digital Realty Marketing" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-[#e59800] leading-none">
              HIMASTECH
            </span>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#be1e2d] mt-1">
              Digital Realty Marketing
            </span>
          </div>
        </Link>

        {/* Center Navigation Menu Matching Screenshot */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-[15px] font-bold text-slate-900 hover:text-[#f15a22] transition-colors cursor-pointer"
          >
            Home
          </button>

          <button 
            onClick={() => scrollToSection("about-us")}
            className="text-[15px] font-semibold text-slate-800 hover:text-[#f15a22] transition-colors cursor-pointer"
          >
            About Us
          </button>

          <button 
            onClick={() => scrollToSection("awards-zone")}
            className="text-[15px] font-semibold text-slate-800 hover:text-[#f15a22] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Awards</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </button>

          <button 
            onClick={() => scrollToSection("meet-our-founders")}
            className="text-[15px] font-semibold text-slate-800 hover:text-[#f15a22] transition-colors cursor-pointer"
          >
            Meet Our Founders
          </button>

          {/* Courses with dropdown chevron */}
          <div 
            className="relative"
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <button 
              onClick={() => scrollToSection("courses")}
              className="text-[15px] font-semibold text-slate-800 hover:text-[#f15a22] transition-colors flex items-center gap-1 cursor-pointer py-1"
            >
              <span>Courses</span>
              <ChevronDown className="w-4 h-4 text-slate-600 transition-transform group-hover:rotate-180" />
            </button>

            {/* Courses Dropdown Menu */}
            <AnimatePresence>
              {coursesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 flex flex-col gap-1 z-50"
                >
                  <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#f15a22]">
                    Popular Telugu Masterclasses
                  </div>
                  {courseList.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToSection("courses")}
                      className="text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#f15a22]">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {c.desc}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => scrollToSection("packages")}
            className="text-[15px] font-semibold text-slate-800 hover:text-[#f15a22] transition-colors cursor-pointer"
          >
            Packages
          </button>

          <button 
            onClick={() => scrollToSection("contact")}
            className="text-[15px] font-semibold text-slate-800 hover:text-[#f15a22] transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </nav>

        {/* Right Side Buttons: Register & Login (Dark Navy Rectangles with Rounded-md) */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onOpenRegisterModal}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0a2550] hover:bg-[#061d40] rounded-md transition-colors cursor-pointer shadow-xs"
          >
            Register
          </button>

          <button 
            onClick={onOpenLoginModal || onOpenRegisterModal}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0a2550] hover:bg-[#061d40] rounded-md transition-colors cursor-pointer shadow-xs"
          >
            Login
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={onOpenRegisterModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0a2550] rounded-md sm:hidden"
          >
            Register
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden px-4 pt-3 pb-6 flex flex-col gap-2.5"
          >
            <button 
              onClick={() => scrollToSection("home")}
              className="text-left py-2 px-3 text-sm font-bold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about-us")}
              className="text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection("awards-zone")}
              className="text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Awards Zone</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">★ New</span>
            </button>
            <button 
              onClick={() => scrollToSection("meet-our-founders")}
              className="text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Meet Our Founders
            </button>
            <button 
              onClick={() => scrollToSection("courses")}
              className="text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection("packages")}
              className="text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:text-[#f15a22] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Contact Us
            </button>

            <div className="pt-3 mt-1 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenRegisterModal) onOpenRegisterModal();
                }}
                className="py-2.5 text-center text-xs font-semibold text-white bg-[#0a2550] rounded-md transition-all cursor-pointer"
              >
                Register
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenLoginModal) onOpenLoginModal();
                }}
                className="py-2.5 text-center text-xs font-semibold text-white bg-[#0a2550] rounded-md transition-all cursor-pointer"
              >
                Login
              </button>
            </div>

            {/* Mobile Social Channel Links */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-4">
              <a
                href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20let's%20talk%20about%20our%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#25D366] text-slate-700 hover:text-white flex items-center justify-center transition-all"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.96.536 1.764.78 2.791.78h.001c3.181 0 5.768-2.586 5.768-5.766 0-3.18-2.587-5.766-5.769-5.766zm3.376 8.21c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.748-.393-1.423-.592-2.339-2.043-2.41-2.138-.071-.095-.572-.76-.572-1.45 0-.69.362-1.03.49-1.173.128-.143.279-.179.373-.179.094 0 .188.001.27.006.086.005.201-.033.314.24.118.283.402.981.437 1.053.036.072.06.155.012.25-.048.096-.072.156-.143.239-.072.083-.151.185-.216.248-.071.07-.145.147-.062.29.083.143.37.61.794.987.545.485 1.006.636 1.149.707.143.072.227.06.312-.036.084-.096.363-.423.46-.568.096-.144.192-.12.324-.072.132.048.837.394.981.466.144.072.24.108.276.168.036.06.036.347-.108.752z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.659 1.442 5.17L2 22l4.98-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.155-.494-4.42-1.341l-.317-.213-2.955.775.789-2.88-.233-.37A8.04 8.04 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.062-8 8.062z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/himastech_digitalmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 text-slate-700 hover:text-white flex items-center justify-center transition-all"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@himastech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#FF0000] text-slate-700 hover:text-white flex items-center justify-center transition-all"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1CWdf1L6SK/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-700 hover:text-white flex items-center justify-center transition-all"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

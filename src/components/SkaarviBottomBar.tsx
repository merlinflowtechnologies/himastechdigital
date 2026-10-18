"use client";

import { BookOpen, Home, Package } from "lucide-react";

export function SkaarviBottomBar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-6 shadow-2xl md:hidden">
      <div className="flex items-center justify-around">
        <button
          onClick={() => scrollTo("courses")}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-[#f15a22] transition-colors cursor-pointer"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[11px] font-bold">Courses</span>
        </button>

        {/* Floating Center Home Button */}
        <button
          onClick={() => scrollTo("home")}
          className="relative -top-5 w-12 h-12 rounded-full bg-gradient-to-tr from-[#062d72] to-[#f15a22] text-white shadow-xl flex items-center justify-center border-4 border-white cursor-pointer hover:scale-105 transition-transform"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
        </button>

        <button
          onClick={() => scrollTo("packages")}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-[#f15a22] transition-colors cursor-pointer"
        >
          <Package className="w-5 h-5" />
          <span className="text-[11px] font-bold">Packages</span>
        </button>
      </div>
    </div>
  );
}

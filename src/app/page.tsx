"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SkaarviTopBar } from "@/components/SkaarviTopBar";
import { SkaarviNavbar } from "@/components/SkaarviNavbar";
import { SkaarviBannerSlider } from "@/components/SkaarviBannerSlider";
import { SkaarviHeroSection } from "@/components/SkaarviHeroSection";
import { SkaarviAwardsSection } from "@/components/SkaarviAwardsSection";
import { SkaarviStrategicSection } from "@/components/SkaarviStrategicSection";
import { SkaarviCoursesSection } from "@/components/SkaarviCoursesSection";
import { SkaarviPackagesSection } from "@/components/SkaarviPackagesSection";
import { SkaarviWhyChooseSection } from "@/components/SkaarviWhyChooseSection";
import { SkaarviSuccessStories } from "@/components/SkaarviSuccessStories";
import { SkaarviFoundersSection } from "@/components/SkaarviFoundersSection";
import { SkaarviFooter } from "@/components/SkaarviFooter";
import { SkaarviBottomBar } from "@/components/SkaarviBottomBar";
import { SkaarviAuthModal } from "@/components/SkaarviAuthModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"register" | "login">("register");

  const openRegisterModal = () => {
    setAuthMode("register");
    setAuthModalOpen(true);
  };

  const openLoginModal = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };

  // Support smooth scrolling when hash links change
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-slate-800 antialiased selection:bg-[#f15a22] selection:text-white">
      {/* 1. Header Top Bar (Dark slate with WhatsApp and Email) */}
      <SkaarviTopBar />

      {/* 2. Main Navigation Header (Logo, Nav Links, Register & Login Buttons) */}
      <div className="relative z-40 bg-white">
        <SkaarviNavbar 
          onOpenRegisterModal={openRegisterModal} 
          onOpenLoginModal={openLoginModal} 
        />
      </div>

      {/* 3. Scrolling Banners Slider (Directly below Nav section) */}
      <div className="relative z-30 bg-white">
        <SkaarviBannerSlider />
      </div>

      {/* Main Container with Centered Full-Screen Background Image (Starts from Hero Section to Contact Section) */}
      <div className="relative w-full">
        {/* Full-Screen Centered Executive Leadership Background - Bigger & Light Across Entire Screen */}
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-0 overflow-hidden bg-white">
          {/* Main Full-Width Backdrop Image - Spans wide across entire viewport, bigger scale, luminous & light */}
          <div className="relative w-full h-full">
            <Image 
              src="/himastech-founder.jpg" 
              alt="HIMASTECH Executive Leadership Background" 
              fill 
              priority
              sizes="100vw"
              className="object-cover object-center scale-110 sm:scale-115 brightness-[1.12] contrast-[1.02] saturate-[1.05]"
            />
          </div>

          {/* Clean, light luminous veil across the entire screen so foreground cards & text stay crisp */}
          <div className="absolute inset-0 bg-white/45 sm:bg-white/40 backdrop-blur-[0.5px]" />

          {/* Gentle top & bottom gradient feathering */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>

        {/* Foreground Content Layers (z-10) - Spanning from Hero Section to Founders Section */}
        <div className="relative z-10">
          {/* 4. About Us / Style 7 Hero Section */}
          <SkaarviHeroSection onOpenRegisterModal={openRegisterModal} />

          {/* 5. Awards Zone (Celebrity & Industry Recognition) */}
          <SkaarviAwardsSection />

          {/* 6. Strategic About Us (Who We Are, Why We Started, Mission, Core Values, 7 Pillars, Learning Journey) */}
          <SkaarviStrategicSection />

          {/* 7. Courses Section (Learn Today - Skaarvi Courses) */}
          <SkaarviCoursesSection onOpenRegisterModal={openRegisterModal} />

          {/* 8. Packages Section (Get Membership - Silver, Gold, Diamond) */}
          <SkaarviPackagesSection onOpenRegisterModal={openRegisterModal} />

          {/* 9. Why Choose Skaarvi (High Quality, Lifetime Access, Expert Instructors) */}
          <SkaarviWhyChooseSection />

          {/* 10. Success Stories & Real Student Testimonials */}
          <SkaarviSuccessStories />

          {/* 11. Meet Our Founders & Mentors */}
          <SkaarviFoundersSection />
        </div>
      </div>

      {/* 12. Skaarvi Footer (Contact Section) */}
      <div className="relative z-20">
        <SkaarviFooter />
      </div>

      {/* 13. Mobile Bottom Sticky Navigation */}
      <SkaarviBottomBar />

      {/* 14. Interactive Register / Login Modal */}
      <SkaarviAuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode} 
      />
    </div>
  );
}

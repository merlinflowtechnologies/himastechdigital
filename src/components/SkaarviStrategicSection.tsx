"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Target,
  Eye,
  Compass,
  ShieldCheck,
  Users,
  Zap,
  GraduationCap,
  Building2,
  Bot,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BookOpen,
  Briefcase,
  HelpCircle,
  Clock
} from "lucide-react";

export function SkaarviStrategicSection() {
  const whoWeAreItems = [
    "Structured online courses & curriculum",
    "Live weekly mentoring & doubt sessions",
    "Practical real-estate & digital campaign implementation support",
    "Active WhatsApp & Telegram community learning",
    "Job & Business Connect opportunities",
    "Freelancing & agency client acquisition guidance",
    "Regular algorithm & AI tool updates"
  ];

  const missionItems = [
    "Structured, actionable courses",
    "Live interactive mentoring",
    "Practical implementation guidance",
    "Community peer learning",
    "Continuous digital skill development"
  ];

  const coreValues = [
    {
      title: "Practical Learning",
      description: "We focus on skills that learners and business owners can understand and immediately implement into live campaigns.",
      color: "from-blue-500/10 to-indigo-500/5",
      border: "border-blue-200",
      iconBg: "bg-[#062d72] text-white"
    },
    {
      title: "Simplicity",
      description: "We believe digital & AI education should be straightforward and free of unnecessary technical jargon, especially for beginners.",
      color: "from-orange-500/10 to-amber-500/5",
      border: "border-orange-200",
      iconBg: "bg-[#f15a22] text-white"
    },
    {
      title: "Continuous Learning",
      description: "The digital algorithms keep changing. We equip our community with weekly updates on Meta AI, Google Ads, and automation tools.",
      color: "from-emerald-500/10 to-teal-500/5",
      border: "border-emerald-200",
      iconBg: "bg-[#1ab69d] text-white"
    },
    {
      title: "Integrity",
      description: "We believe in communicating honestly, showing real case studies, and transparent metrics with our learners and partners.",
      color: "from-purple-500/10 to-violet-500/5",
      border: "border-purple-200",
      iconBg: "bg-[#8e56ff] text-white"
    },
    {
      title: "Community",
      description: "Growth accelerates when people can share ideas, ask questions, review ad creatives, and win together as a supportive tribe.",
      color: "from-cyan-500/10 to-sky-500/5",
      border: "border-cyan-200",
      iconBg: "bg-[#39c0fa] text-white"
    }
  ];

  const differences = [
    {
      title: "Structured Online Courses",
      description: "Learn through organised, step-by-step masterclasses designed to make digital & real estate marketing easy to implement.",
      icon: BookOpen,
      iconColor: "text-[#062d72] bg-[#062d72]/10",
      image: "/course-excel.jpg",
      badge: "Curriculum Track",
      iconBg: "bg-[#062d72]",
      highlight: "Step-by-step practical modules"
    },
    {
      title: "Live Mentoring Sessions",
      description: "Attend live weekly Zoom sessions where you clarify doubts, inspect live ad accounts, and receive mentor feedback.",
      icon: Users,
      iconColor: "text-[#f15a22] bg-[#f15a22]/10",
      image: "/himastech-masterclass-presentation.jpg",
      badge: "Weekly Live Zoom",
      iconBg: "bg-[#f15a22]",
      highlight: "Direct mentor Q&A & ad reviews"
    },
    {
      title: "Practical Implementation Support",
      description: "Move far beyond theoretical slides by launching live campaigns, setting up WhatsApp bots, and generating verified leads.",
      icon: Zap,
      iconColor: "text-[#1ab69d] bg-[#1ab69d]/10",
      image: "/himastech-funnel-whiteboard.jpg",
      badge: "Live Execution",
      iconBg: "bg-[#1ab69d]",
      highlight: "Funnels & WhatsApp bot setup"
    },
    {
      title: "Community Learning",
      description: "Be part of a thriving network where entrepreneurs, students, and realtors exchange verified strategies and celebrate wins.",
      icon: Sparkles,
      iconColor: "text-[#8e56ff] bg-[#8e56ff]/10",
      image: "/himastech-auditorium-cohort.jpg",
      badge: "100+ Telugu Tribe",
      iconBg: "bg-[#8e56ff]",
      highlight: "Peer discussions & shared wins"
    },
    {
      title: "Job & Business Connect",
      description: "Stay plugged into freelance gigs, internship tracks, and real estate marketing client opportunities through HimasTech Connect.",
      icon: Briefcase,
      iconColor: "text-[#f8941f] bg-[#f8941f]/10",
      image: "/himastech-boardroom-meeting.jpg",
      badge: "Corporate Network",
      iconBg: "bg-[#f8941f]",
      highlight: "SGD Developers & builder network"
    },
    {
      title: "Freelancing Guidance",
      description: "Learn how to build your portfolio, approach high-paying clients, price your retainer packages, and close retainers.",
      icon: TrendingUp,
      iconColor: "text-[#39c0fa] bg-[#39c0fa]/10",
      image: "/course-canva.jpg",
      badge: "Agency & Freelancing",
      iconBg: "bg-[#39c0fa]",
      highlight: "Client pitching & high retainers"
    },
    {
      title: "Regular Course & AI Updates",
      description: "Continuous lifetime updates as Meta ad rules change, Google launches new features, and AI generative tools evolve.",
      icon: Clock,
      iconColor: "text-emerald-700 bg-emerald-100",
      image: "/course-ai-faceless.jpg",
      badge: "2026 AI Tools",
      iconBg: "bg-emerald-600",
      highlight: "Algorithm & prompt updates"
    }
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Choose a Skill",
      desc: "Select the learning track or growth blueprint that aligns with your career or business goals (Real Estate, AI, Meta Ads, Freelancing)."
    },
    {
      num: "02",
      title: "Learn Step-by-Step",
      desc: "Access structured video modules, download checklists, and master frameworks designed for practical clarity."
    },
    {
      num: "03",
      title: "Attend Live Mentoring",
      desc: "Join interactive live classes every week to resolve campaign bottlenecks, review scripts, and stay accountable."
    },
    {
      num: "04",
      title: "Practice & Implement",
      desc: "Launch your funnels, publish content, create AI videos, and run live ads with expert guidance."
    },
    {
      num: "05",
      title: "Build Confidence",
      desc: "Refine your execution through consistent data review, testing variations, and feedback from mentors."
    },
    {
      num: "06",
      title: "Create Opportunities",
      desc: "Scale your real estate sales, win freelance retainers, grow your business, and expand your digital authority."
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white/40 backdrop-blur-xs text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Row 1: Who We Are & Why We Started (Skaarvi 2-Column Area) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-16 border-b border-slate-100">

          {/* Who We Are */}
          <div className="flex flex-col items-start bg-white/90 backdrop-blur-md p-7 sm:p-9 rounded-3xl border border-white/70 shadow-lg">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f15a22] mb-1">
              OUR PROFILE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062d72] mb-4">
              Who We Are
            </h2>
            <div className="w-12 h-1 bg-[#f15a22] rounded-full mb-6" />

            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              <strong>HIMASTECH Digital Marketing</strong> is a future-ready Digital Skills &amp; Real Estate Academy dedicated to helping ambitious individuals, business owners, and property leaders master practical digital systems in a simple, structured way.
            </p>
            <p className="text-slate-500 font-semibold text-xs sm:text-sm mb-3">
              We bring together:
            </p>

            <ul className="space-y-2.5 w-full">
              {whoWeAreItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-[#1ab69d]/15 text-[#1ab69d] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium">
              💡 Our focus is not just on learning concepts, but on helping learners understand exactly how to practically apply the skills to generate measurable outcomes.
            </div>
          </div>

          {/* Why We Started */}
          <div className="flex flex-col items-start bg-white/90 backdrop-blur-md p-7 sm:p-9 rounded-3xl border border-white/70 shadow-lg">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#062d72] mb-1">
              THE VISION STORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062d72] mb-4">
              Why We Started
            </h2>
            <div className="w-12 h-1 bg-[#062d72] rounded-full mb-6" />

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Technology and the digital world are changing rapidly. While there is a vast amount of generic information available online, many learners and business owners find it difficult to understand <em>what to learn, where to start</em>, and <em>how to practically implement</em> what they study.
              </p>
              <p>
                In the real estate and high-ticket service sectors, finding structured, reliable, and easy-to-understand education with bilingual Telugu &amp; English support has been a major challenge. <strong>HIMASTECH Digital Marketing was created to bridge this exact gap.</strong>
              </p>
              <p>
                Our goal is to make digital education and property lead generation accessible, providing learners with a structured environment where they can build practical skills, attend live mentoring sessions, implement live campaigns, and continuously scale.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-[#062d72]/5 border border-[#062d72]/15">
                <div className="text-2xl font-black text-[#062d72] mb-1">5,000+</div>
                <div className="text-xs font-medium text-slate-600">Hours of Practical Mentoring</div>
              </div>
              <div className="p-4 rounded-xl bg-[#f15a22]/5 border border-[#f15a22]/15">
                <div className="text-2xl font-black text-[#f15a22] mb-1">98%</div>
                <div className="text-xs font-medium text-slate-600">Practical Implementation Rate</div>
              </div>
            </div>
          </div>

        </div>

        {/* Executive Leadership Spotlight */}
        <div className="my-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#062d72] via-[#0b3d91] to-[#062d72] text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">
            <div className="md:col-span-4 lg:col-span-3 flex justify-center">
              <div className="relative w-44 h-48 sm:w-52 sm:h-56 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl ring-4 ring-[#e59800]/40 shrink-0">
                <Image 
                  src="/himastech-founder.jpg" 
                  alt="HIMASTECH Executive Leadership - Kishore Patel" 
                  fill 
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#e59800]/20 text-amber-300 text-[11px] font-black uppercase tracking-wider border border-[#e59800]/30">
                Founder's Vision • HIMASTECH Digital Realty Marketing
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                &ldquo;Real estate marketing and high-income digital skills must be practical, measurable, and accessible to every learner.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                Under the strategic direction of our leadership, HIMASTECH combines enterprise real estate sales funnels, performance advertising architecture, and bilingual mentoring cohorts to help students, homemakers, and property developers achieve breakthrough growth.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Kishore Patel — Founder &amp; Chief Growth Strategist
                </div>
                <div className="text-amber-300 font-semibold">
                  ₹10Cr+ Real Estate Deals Closed • 12+ Yrs Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#062d72] to-[#0a3a8a] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-3">
                MISSION STATEMENT
              </span>
              <h3 className="text-2xl font-black mb-2">Our Mission</h3>
              <h4 className="text-sm font-semibold text-cyan-200 mb-4">
                To Empower Through Practical Digital &amp; Real Estate Education
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
                Our mission is to empower individuals and growing enterprises by providing practical, future-ready digital skills through:
              </p>
              <ul className="space-y-2 text-xs text-slate-100">
                {missionItems.map((m, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#f15a22] to-[#e4460c] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-3">
                VISION STATEMENT
              </span>
              <h3 className="text-2xl font-black mb-2">Our Vision</h3>
              <h4 className="text-sm font-semibold text-amber-100 mb-4">
                To Become the Most Trusted Digital Realty &amp; Skills Academy
              </h4>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
                Our vision is to become the premier learning &amp; growth ecosystem for learners, entrepreneurs, and real estate professionals across India and global NRI corridors, helping individuals continuously master practical skills and stay future-proof in an AI-driven era.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-white/10 backdrop-blur-xs text-xs text-white">
                "Bridging the execution gap between ambition and verifiable business revenue."
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Our Core Values (5 Cards) */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f15a22]">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062d72] mt-1 mb-2">
              Our Core Values
            </h2>
            <div className="w-12 h-1 bg-[#f15a22] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-gradient-to-b ${val.color} border ${val.border} shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl ${val.iconBg} flex items-center justify-center font-black text-sm mb-3 shadow-xs`}>
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: What Makes HimasTech Different? (7 Cards) */}
        <div className="my-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#062d72]">
              UNMATCHED ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062d72] mt-1 mb-2">
              What Makes HimasTech Different?
            </h2>
            <div className="w-12 h-1 bg-[#062d72] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#062d72]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Miniature Image Header */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={diff.image}
                        alt={diff.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Left Miniature Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black text-[#062d72] shadow-sm border border-white/60">
                          {diff.badge}
                        </span>
                      </div>

                      {/* Miniature Icon Badge in Corner */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <div className={`w-9 h-9 rounded-xl ${diff.iconBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#062d72] transition-colors leading-snug">
                        {diff.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Highlight Strip */}
                  <div className="px-5 sm:px-6 pb-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{diff.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 5: Your Learning Journey (6 Step Interactive Roadmap) */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-[#f0f4f5]/80 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f15a22]">
              THE 6-STEP ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062d72] mt-1 mb-2">
              Your Learning &amp; Growth Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From foundational concepts to predictable revenue multiplication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#f15a22] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#062d72]/20 group-hover:text-[#f15a22] transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Skaarvi Commitment Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-[#062d72] border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#062d72] mb-1">
                Our Commitment to You
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We are committed to providing quality digital education, regular campaign updates, practical guidance, and a learner-first environment to help our community stay future-ready.
              </p>
            </div>
            <a
              href="https://wa.me/916304989071"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white text-xs font-bold shrink-0 transition-colors shadow-sm"
            >
              Connect with Leadership
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

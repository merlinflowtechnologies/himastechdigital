"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Infinity, Users, CheckCircle, Sparkles, Award } from "lucide-react";

export function SkaarviWhyChooseSection() {
  const features = [
    {
      title: "High Quality Courses",
      description:
        "We are a professional educational academy specializing in practical, customized tutoring across high-income digital skills and modern industry tools.",
      icon: BookOpen,
      color: "text-[#062d72]",
      badgeBg: "bg-[#062d72]/10",
      border: "border-blue-100",
      accent: "from-blue-600 to-indigo-700"
    },
    {
      title: "Life Time Access",
      description:
        "Our platform offers impactful, high-quality learning experiences designed with lifetime replay access, continuous curriculum updates, and measurable results.",
      icon: Infinity,
      color: "text-[#f15a22]",
      badgeBg: "bg-[#f15a22]/10",
      border: "border-orange-100",
      accent: "from-orange-500 to-amber-600"
    },
    {
      title: "Expert Telugu Instructors",
      description:
        "Learn directly from proven mentors with live interactive weekly doubt sessions, step-by-step guidance in Telugu, and recognized course completion certifications.",
      icon: Users,
      color: "text-[#00bba6]",
      badgeBg: "bg-[#00bba6]/10",
      border: "border-teal-100",
      accent: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-white/30 backdrop-blur-xs border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorative background shapes - bigger and light across */}
      <div className="absolute top-0 left-10 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-orange-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/70 shadow-md">
          <span className="text-xs font-black uppercase tracking-widest text-[#f15a22] bg-[#f15a22]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            WHY CHOOSE HIMASTECH DIGITAL MARKETING
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#062d72] tracking-tight">
            We Provide The <br className="hidden sm:inline" />
            <span className="text-[#f15a22]">Best Online Courses</span> in Telugu
          </h2>
          <div className="w-16 h-1 bg-[#f15a22] rounded-full mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600">
            Tailored specifically for Telugu students, homemakers, working professionals, and business owners who want real results without complicated technical jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className={`bg-[#f0f4f5]/60 hover:bg-white rounded-3xl p-8 border ${item.border} hover:border-[#f15a22]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-[#062d72] mb-3 group-hover:text-[#f15a22] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#1ab69d]" />
                  <span>100% Practical Implementation</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Live Proof & Automation Training Showcase */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#062d72] bg-[#062d72]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#f15a22]" />
              Real Training &amp; Boardroom Consulting
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#062d72] mt-3">
              Inside Our Live <span className="text-[#f15a22]">Automation &amp; Strategy</span> Sessions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Verifiable sessions with real estate developers, enterprise clients, and hundreds of learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-slate-200/90 transition-all duration-300 flex flex-col">
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image 
                  src="/himastech-funnel-whiteboard.jpg" 
                  alt="Real Estate Funnel & Marketing Automation Strategy Session"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs text-[10px] font-black text-amber-300 border border-amber-400/40 shadow-md">
                  Funnel &amp; Automation
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-[#062d72] mb-1.5 group-hover:text-[#f15a22] transition-colors">
                    Real Estate Funnels &amp; Pipeline Strategy
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Live whiteboard diagramming of visitor acquisition, automated qualification, and speed-to-lead routing with SGD Developers leaders.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span className="text-[#062d72]">Kishore Patel Mentorship</span>
                  <span className="text-emerald-600">✓ Live Case Study</span>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-slate-200/90 transition-all duration-300 flex flex-col">
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image 
                  src="/himastech-auditorium-cohort.jpg" 
                  alt="HIMASTECH Live Training Cohort in Telugu"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs text-[10px] font-black text-cyan-300 border border-cyan-400/40 shadow-md">
                  100+ Telugu Learners
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-[#062d72] mb-1.5 group-hover:text-[#f15a22] transition-colors">
                    100% Practical Telugu Masterclasses
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auditorium training cohorts where students, jobseekers, and entrepreneurs master digital marketing tools step-by-step.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span className="text-[#062d72]">Telugu Instruction</span>
                  <span className="text-cyan-600">✓ Classroom Immersion</span>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-slate-200/90 transition-all duration-300 flex flex-col">
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image 
                  src="/himastech-boardroom-meeting.jpg" 
                  alt="SGD Developers Executive Boardroom Consultation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs text-[10px] font-black text-emerald-300 border border-emerald-400/40 shadow-md">
                  Corporate Boardroom
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-[#062d72] mb-1.5 group-hover:text-[#f15a22] transition-colors">
                    Builder &amp; Developer Boardroom Growth
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategic consultation with property developers to architect high-ticket client acquisition and digital branding frameworks.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span className="text-[#062d72]">Enterprise Strategy</span>
                  <span className="text-emerald-600">✓ ₹10Cr+ Real Estate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

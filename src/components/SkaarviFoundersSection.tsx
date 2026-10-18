"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Star, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

export function SkaarviFoundersSection() {
  const founders = [
    {
      name: "Kishore Patel",
      role: "Founder & Chief Growth Strategist",
      badge: "★ Award-Winning Founder",
      bio: "Visionary leader in Real Estate Performance Marketing and ROI-driven ad funnels. Felicitated on stage by superstar Samantha Ruth Prabhu and Building Blocks Group (BBG) for driving milestone property sales and mentoring 1,000+ professionals across South India.",
      metrics: "Felicitated by Samantha • ₹10Cr+ Realty",
      accent: "from-[#e59800] to-[#be1e2d]",
      avatarInitials: "KP",
      image: "/himastech-founder.jpg"
    },
    {
      name: "Surekha Mam",
      role: "Co-Founder & Lead Digital Skills Mentor",
      badge: "Founding Mentor",
      bio: "Pioneer in simplifying Canva design, practical digital skills, affiliate marketing, and work-from-home career models for thousands of Telugu-speaking learners, homemakers, and students across India.",
      metrics: "1,000+ Students Mentored • 500+ Videos",
      accent: "from-orange-500 to-amber-600",
      avatarInitials: "SM"
    }
  ];

  return (
    <section id="meet-our-founders" className="py-20 bg-white/40 backdrop-blur-xs border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/70 shadow-md">
          <span className="text-xs font-black uppercase tracking-widest text-[#f15a22] bg-[#f15a22]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            LEADERSHIP &amp; MENTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#062d72] tracking-tight">
            Meet Our <span className="text-[#f15a22]">Founders &amp; Trainers</span>
          </h2>
          <div className="w-16 h-1 bg-[#f15a22] rounded-full mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600">
            Passionate educators dedicated to making high-demand digital skills and real estate marketing accessible in our mother tongue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  {founder.image ? (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform border-2 border-white ring-2 ring-[#e59800]/40 shrink-0">
                      <Image 
                        src={founder.image} 
                        alt={founder.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${founder.accent} text-white font-black text-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0`}>
                      {founder.avatarInitials}
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#f15a22] bg-[#f15a22]/10 px-2.5 py-0.5 rounded-full">
                      {founder.badge}
                    </span>
                    <h3 className="text-xl font-black text-[#062d72] mt-1">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#062d72] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#f15a22]" />
                  <span>{founder.metrics}</span>
                </span>
                <a
                  href="https://wa.me/916304989071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#f15a22] hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

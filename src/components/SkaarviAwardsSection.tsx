"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  X, 
  Maximize2, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface AwardItem {
  id: string;
  image: string;
  title: string;
  presenter: string;
  organization: string;
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
}

export function SkaarviAwardsSection() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const awards: AwardItem[] = [
    {
      id: "award-samantha",
      image: "/himastech-award-samantha.jpg",
      title: "Felicitated by Superstar Samantha Ruth Prabhu",
      presenter: "Presented by Actress Samantha Ruth Prabhu",
      organization: "Building Blocks Excellence Awards",
      badge: "★ Celebrity Felicitation",
      badgeColor: "bg-amber-500/15 text-amber-500 border-amber-500/30",
      description: "HIMASTECH Founder Kishore Patel receiving the prestigious Building Blocks Trophy on stage directly from renowned South Indian superstar Samantha Ruth Prabhu for outstanding real estate leadership and sales excellence.",
      highlights: [
        "Prestigious Building Blocks Trophy Presentation",
        "Celebrity Felicitation on Grand Stage",
        "Recognized for High-Volume Real Estate Closings"
      ]
    },
    {
      id: "award-felicitation",
      image: "/himastech-award-felicitation.jpg",
      title: "Building Blocks Land Investment & Growth Honors",
      presenter: "Building Blocks Annual Leadership Conclave",
      organization: "Building Blocks Group (BBG)",
      badge: "★ Industry Excellence",
      badgeColor: "bg-blue-500/15 text-blue-600 border-blue-500/30",
      description: "Honored on stage with the ceremonial shawl and prestigious trophy during the Building Blocks Land Investment Experts convention in recognition of high-impact property acquisition campaigns.",
      highlights: [
        "Traditional Ceremonial Shawl & Trophy Honors",
        "Recognized by Real Estate Industry Leaders",
        "Pioneering Performance Marketing in Hyderabad & AP"
      ]
    },
    {
      id: "award-bbg-stage",
      image: "/himastech-award-bbg-stage.jpg",
      title: "BBG Prestigious Memento of Excellence",
      presenter: "BBG Grand Annual Honors Ceremony",
      organization: "Building Blocks Group (BBG)",
      badge: "★ Landmark Honor",
      badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
      description: "Kishore Patel presented with the coveted BBG commemorative shield and celebratory shawl on stage for driving verified client acquisition frameworks and exceptional real estate sales volume.",
      highlights: [
        "Coveted BBG Commemorative Shield",
        "Executive Recognition for Strategic Growth",
        "Frameworks Powering ₹10Cr+ in Real Estate Deals"
      ]
    }
  ];

  return (
    <section id="awards-zone" className="py-20 bg-white/35 backdrop-blur-xs border-t border-slate-200/80 relative overflow-hidden scroll-mt-20">
      {/* Ambient background glows - bigger and light across */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-amber-100/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/70 shadow-lg">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-3">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              AWARDS ZONE • INDUSTRY RECOGNITION
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062d72] tracking-tight leading-tight">
            Honored on Stage by <br className="hidden sm:inline" />
            <span className="text-[#f15a22]">Celebrities &amp; Industry Leaders</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-[#f15a22] rounded-full mx-auto mt-4 mb-4" />
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            HIMASTECH Founder <strong className="text-[#062d72]">Kishore Patel</strong> has been recognized with prestigious trophies and felicitations by leading film stars like <strong className="text-[#f15a22]">Samantha Ruth Prabhu</strong> and prominent real estate developers for driving milestone property sales and marketing innovations.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom & Badge */}
                <div 
                  className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setSelectedAward(award)}
                >
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-105"
                  />
                  
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-black border shadow-lg ${award.badgeColor} bg-white/95`}>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      {award.badge}
                    </span>
                  </div>

                  {/* Click to Expand Trigger Icon */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 inset-x-4 z-10 text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md inline-block mb-1 border border-amber-400/30">
                      {award.organization}
                    </span>
                    <h3 className="text-base font-black text-white leading-snug drop-shadow-md">
                      {award.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#f15a22]">
                    <Award className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>{award.presenter}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {award.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {award.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedAward(award)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#062d72] text-[#062d72] hover:text-white border border-slate-200 text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:border-[#062d72]"
                >
                  <span>View Full Photo &amp; Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust & Authority Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#062d72] via-[#0b3d91] to-[#062d72] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-black shrink-0 border border-amber-400/30">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-300">
                Proven Track Record
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Learn from an Award-Winning Real Estate Growth Mentor
              </h3>
              <p className="text-xs text-slate-200 mt-0.5">
                Over ₹10Cr+ in property inventory closed across Hyderabad &amp; AP corridors.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/916304989071?text=Hi%20HIMASTECH,%20I%20saw%20your%20award-winning%20real%20estate%20achievements%20and%20want%20to%20learn%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect with Mentor on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Interactive Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAward(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative h-96 sm:h-[450px] w-full bg-slate-950">
                <Image
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-7 overflow-y-auto space-y-3 bg-white">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-black border ${selectedAward.badgeColor}`}>
                    {selectedAward.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {selectedAward.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#062d72]">
                  {selectedAward.title}
                </h3>

                <p className="text-xs font-bold text-[#f15a22]">
                  {selectedAward.presenter}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedAward.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-xs font-bold text-slate-700">
                    Recipient: Kishore Patel (HIMASTECH Founder)
                  </div>
                  <a
                    href="https://wa.me/916304989071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-[#062d72] hover:bg-[#f15a22] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

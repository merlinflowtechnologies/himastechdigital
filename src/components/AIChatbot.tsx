"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Send, 
  X, 
  ArrowRight, 
  RotateCcw, 
  Phone, 
  CheckCircle2, 
  Target, 
  GraduationCap, 
  Calendar,
  MessageSquare,
  Building,
  IndianRupee
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  options?: string[];
  cta?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const MASTER_HIMASTECH_SUGGESTIONS: string[] = [
  // CEO & Company
  "🏢 Who is Kishore Patel (Founder & Lead Strategist)?",
  "🎯 What is Himastech's core revenue philosophy?",
  "📍 Where is your operational hub in Nagole, Hyderabad?",
  "🚀 What makes Himastech different from other agencies?",

  // Channels & Strategies
  "⚡ How does Himastech achieve a 4.8x average ROAS?",
  "📱 How do your Meta (FB & IG) ad funnels work?",
  "🔍 What is your Google Ads & Performance Max strategy?",
  "🤖 What is Generative Engine Optimization (GEO)?",
  "🎥 Tell me about TikTok & viral UGC creator ads",
  "📺 How does your YouTube Direct Response video strategy work?",
  "💼 How do you run LinkedIn B2B Account-Based Marketing?",
  "🔄 Tell me about your Klaviyo & WhatsApp retention flows",
  "⚡ How do sub-second Next.js landing pages boost conversions?",

  // Training Academy
  "🎓 What are the 5 Career Tracks in your Academy?",
  "💰 Tell me about the Paid Media & ROAS Acceleration track",
  "📈 What is the Growth Hacking & CRO bootcamp?",
  "💼 Do you provide live client ad budgets and 100% placement?",
  "📅 When does the next Training Academy cohort start?",

  // Free 48-Hour Growth Audit
  "📊 What is included in the Free 48-Hour Growth Audit?",
  "🛡️ Is the 48-Hour Ad Stack Audit covered by mutual NDA?",
  "🔍 How do you diagnose broken Meta CAPI tracking?",

  // Client Results & Case Studies
  "📈 How did you generate ₹48Cr+ for Prestige Estates?",
  "🛍️ How did Lumina Glow Skincare scale 310% MRR in 90 days?",
  "🚀 What results did you achieve for B2B SaaS CloudScale?",
  "⭐ What is your agency client retention rate?",

  // Methodology & Process
  "⚙️ Walk me through your 4-Step Revenue Multiplication Engine",
  "🧪 What is Dynamic Creative Testing (DCT)?",
  "🧮 Can I simulate my projected ROAS with your calculator?",

  // Pricing & Collaboration
  "💰 How does your performance-aligned pricing work?",
  "🤝 Are there any long-term contract lock-ins?",
  "💵 What is the minimum recommended monthly ad spend?",

  // Enterprise Software
  "🚀 Tell me about Merlinflow Cloud ERP suites",
  "🏫 Tell me about the School & College IMS software",
  "🏥 How does the Medical & Hospital ERP work?",
  "🍽️ How does Restaurant OS handle digital QR & KOT sync?",

  // Contact & Social Proof
  "📞 What is Kishore Patel's direct WhatsApp?",
  "⚡ How do I book a 30-minute growth strategy call?",
  "⭐ Where can I read verified client feedback and reviews?",
  "💬 How do we get started working together?"
];

const MASTER_MERLINFLOW_SUGGESTIONS: string[] = [
  "📞 What are the direct WhatsApp desk numbers?",
  "🚀 Schedule a Guided 1-on-1 Software Demo",
  "🏫 Tell me about the School & College IMS features",
  "🏥 How does Medical & Hospital ERP track batch expiries?",
  "🍽️ How does Restaurant OS handle digital QR & KOT sync?",
  "🏢 What modules are in the Real Estate Brokerage ERP?",
  "🛍️ How does the E-Commerce Cloud OS prevent COD fraud?",
  "💼 Tell me about Corporate HRMS & Biometric Payroll",
  "💰 What is the pricing and cloud deployment model?",
  "🤝 How does Merlinflow collaborate with Himastech?"
];

const INITIAL_HIMASTECH_OPTIONS: string[] = [
  "⚡ How fast can you scale our ROAS?",
  "📊 What is included in the Free 48-Hr Audit?",
  "🎓 Tell me about the 5 Training Tracks",
  "🏢 Who is the CEO of Himastech?",
  "💼 What services do you offer?",
];

function selectDynamicSuggestions(
  userQuery: string,
  preferredOptions: string[] | undefined,
  alreadyShown: string[],
  isMerlinflow: boolean,
  count: number = 4
): { suggestions: string[]; newShown: string[] } {
  const pool = isMerlinflow ? MASTER_MERLINFLOW_SUGGESTIONS : MASTER_HIMASTECH_SUGGESTIONS;
  const qLower = userQuery.toLowerCase();
  const normalize = (s: string) => s.replace(/[^\w\s]/g, "").toLowerCase().trim();

  // Filter out suggestions that are identical or directly ask about what was just answered
  const isSimilarToQuery = (s: string) => {
    const sNorm = normalize(s);
    if (qLower.includes("ceo") && sNorm.includes("ceo")) return true;
    if (qLower.includes("roas") && sNorm.includes("roas")) return true;
    if (qLower.includes("audit") && sNorm.includes("audit")) return true;
    if (qLower.includes("training") && sNorm.includes("training")) return true;
    if (qLower.includes("pricing") && sNorm.includes("pricing")) return true;
    if (qLower.includes("merlinflow") && sNorm.includes("merlinflow")) return true;
    if (qLower.includes("prestige") && sNorm.includes("prestige")) return true;
    if (qLower.includes("lumina") && sNorm.includes("lumina")) return true;
    if (qLower.includes("geo") && sNorm.includes("geo")) return true;
    if (qLower.includes("contact") && sNorm.includes("whatsapp")) return true;
    return false;
  };

  const alreadyShownSet = new Set(alreadyShown.map(normalize));

  // 1. Unshown suggestions from preferred options (if any)
  const availablePreferred = (preferredOptions || []).filter(
    (opt) => opt !== "🔄 More Topics" && !alreadyShownSet.has(normalize(opt)) && !isSimilarToQuery(opt)
  );

  // 2. Unshown candidates from the master pool
  let unshownPool = pool.filter(
    (item) => !alreadyShownSet.has(normalize(item)) && !isSimilarToQuery(item)
  );

  // If unshown pool is nearly exhausted, reset so conversation never runs out of topics
  let resetTriggered = false;
  if (unshownPool.length < count) {
    unshownPool = pool.filter((item) => !isSimilarToQuery(item));
    resetTriggered = true;
  }

  const candidates: string[] = [];
  for (const p of availablePreferred) {
    if (!candidates.includes(p)) candidates.push(p);
    if (candidates.length >= count) break;
  }
  for (const item of unshownPool) {
    if (!candidates.includes(item)) candidates.push(item);
    if (candidates.length >= count) break;
  }

  const updatedShown = resetTriggered ? candidates : [...alreadyShown, ...candidates];
  return { suggestions: candidates, newShown: updatedShown };
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isMerlinflow = pathname?.includes("merlinflow");

  const initialMessages: ChatMessage[] = [
    {
      id: "1",
      sender: "bot",
      text: isMerlinflow
        ? "👋 Welcome to **Merlinflow Technologies**! I can answer questions about our SaaS ERP suites (School IMS, Medical ERP, Restaurant OS, E-Commerce), schedule a 1-on-1 live product demo, or connect you with our engineering directors."
        : "👋 Welcome to **Himastech**! I am your AI Growth & Strategy Assistant. How can I help multiply your revenue today?",
      timestamp: "Just now",
      options: isMerlinflow
        ? [
            "📞 What are the direct WhatsApp numbers?",
            "🚀 Schedule a Guided Software Demo",
            "🏢 Explore School IMS, Medical & Restaurant ERP",
            "💰 Custom Pricing & Cloud Migration",
            "🔄 More Topics"
          ]
        : [
            ...INITIAL_HIMASTECH_OPTIONS,
            "🔄 More Topics"
          ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const shownSuggestionsRef = useRef<string[]>(
    isMerlinflow
      ? [
          "📞 What are the direct WhatsApp numbers?",
          "🚀 Schedule a Guided Software Demo",
          "🏢 Explore School IMS, Medical & Restaurant ERP",
          "💰 Custom Pricing & Cloud Migration"
        ]
      : INITIAL_HIMASTECH_OPTIONS
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotReply = (userQuery: string): { text: string; cta?: { label: string; href: string; isExternal?: boolean }; options?: string[] } => {
    const raw = userQuery.toLowerCase().trim();
    // Normalized query with edge spaces for clean phrase matching
    const q = (" " + raw.replace(/[^\w\s\+]/g, " ").replace(/\s+/g, " ") + " ");
    const words = q.trim().split(" ").filter(Boolean);
    const hasWord = (...terms: string[]) => terms.some(t => words.includes(t.toLowerCase()));
    const hasPhrase = (...phrases: string[]) => phrases.some(p => q.includes(" " + p.toLowerCase() + " ") || q.includes(p.toLowerCase()));

    // REJECTION RESPONSE HELPER FOR UNRELATED QUERIES
    const rejectionResponse = {
      text: "⚠️ **Query Rejected: Outside Company Scope**\n\nI am the official AI Strategist for **Himastech** and **Merlinflow Technologies**. I can only assist with inquiries directly related to our company, digital marketing services, training academy, leadership, and enterprise software.\n\n👉 **Please enter a query related to our company.**\n\n*Examples of questions you can ask:*\n• **CEO & Leadership:** Who is the founder of Himastech? (*Kishore Patel*)\n• **Marketing Services:** Meta & Google Ads, AI Search (GEO), Funnels & CRO\n• **Training Academy:** 5 Career Tracks, Roadmaps & Placement\n• **Free Growth Audit:** Complimentary 48-Hour Ad Stack Diagnostic\n• **Enterprise Software:** Merlinflow Cloud ERP Suites\n• **Contact Us:** Official WhatsApp (+91 6304989071) or Schedule a Strategy Call",
      cta: { 
        label: "Chat on WhatsApp (+91 6304989071)", 
        href: "https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20have%20an%20inquiry%20regarding%20your%20company%20and%20services", 
        isExternal: true 
      },
      options: [
        "🏢 Who is Kishore Patel?",
        "💼 What services do you offer?",
        "🎓 Tell me about Training Academy",
        "📊 Claim Free 48-Hour Audit"
      ]
    };

    // 0. EXPLICIT UNRELATED DOMAINS FILTER (Strictly rejects out-of-the-box off-topic subjects)
    const explicitUnrelatedWords = [
      // Sports & Gaming
      "cricket", "football", "soccer", "tennis", "basketball", "badminton", "chess", "hockey", "ipl", "fifa",
      "batsman", "bowler", "wicket", "stadium", "messi", "ronaldo", "kohli", "dhoni", "pubg", "minecraft",
      "fortnite", "gta", "anime", "manga", "gaming", "gamer", "videogame", "videogames",
      // Pop Culture / Entertainment / Movies
      "movie", "movies", "film", "films", "actor", "actress", "cinema", "song", "songs", "lyrics", "bollywood", "hollywood", "tollywood", "netflix",
      "singer", "album", "trailer", "boxoffice", "celebrity",
      // Food / Cooking / Recipes
      "recipe", "recipes", "cooking", "cook", "bake", "baking", "biryani", "curry", "pizza", "burger", "noodles", "shawarma", "pasta", "sandwich",
      // STEM / General Coding / Homework
      "python", "java", "golang", "rust", "cpp", "leetcode", "physics", "chemistry", "biology", "math", "mathematics", "algebra", "geometry", "calculus", "homework", "assignment",
      // Politics & Trivia
      "politics", "election", "biden", "trump", "modi", "putin", "weather", "temperature",
      // Casual bot banter / Creative writing
      "joke", "jokes", "riddle", "riddles", "poem", "essay", "story"
    ];

    const hasUnrelatedWord = words.some(w => explicitUnrelatedWords.includes(w));
    const hasBusinessContext =
      q.includes("himastech") || q.includes("himas tech") || q.includes("merlinflow") ||
      q.includes("patel") || q.includes("kishore") ||
      q.includes("marketing") || q.includes("ad") || q.includes("ads") || q.includes("agency") ||
      q.includes("business") || q.includes("sales") || q.includes("revenue") || q.includes("leads") ||
      q.includes("roas") || q.includes("audit") || q.includes("training") || q.includes("course");

    if (hasUnrelatedWord && !hasBusinessContext) {
      return rejectionResponse;
    }

    // Check if user is asking to contact / call / WhatsApp / reach someone
    const isContactIntent =
      hasWord("contact", "whatsapp", "email", "address", "phone") ||
      q.includes("contact") ||
      q.includes("phone number") ||
      q.includes("contact number") ||
      q.includes("whatsapp number") ||
      q.includes("mobile number") ||
      q.includes("how to contact") ||
      q.includes("how to reach") ||
      q.includes("where is your office") ||
      q.includes("where are you located") ||
      q.includes("location") ||
      q.includes("nagole") ||
      q.includes("hyderabad") ||
      q.includes("call you") ||
      q.includes("call the team") ||
      q.includes("reach out") ||
      hasPhrase("6304989071", "8374373753", "8247716878", "desk 1", "desk 2");

    // 1. Contact Details / Phone / WhatsApp / Email / Address / Location (Handles "Contact Kishore Patel's Team")
    if (isContactIntent) {
      if (isMerlinflow || q.includes("merlinflow") || q.includes("erp") || q.includes("desk 1") || q.includes("desk 2")) {
        return {
          text: "📞 **Merlinflow Technologies Official Desks:**\n\n• **Direct Solutions Desk 1:** +91 8374373753\n• **Direct Solutions Desk 2:** +91 8247716878\n• **Official Email:** info@merlinflow.in\n• **Website:** https://www.merlinflow.in/\n• **Operational Hub:** Hyderabad, India\n\nOur solutions architects are available on WhatsApp for live demo walkthroughs and custom module proposals.",
          cta: { 
            label: "Chat with Desk 1 (+91 8374373753)", 
            href: "https://wa.me/918374373753?text=Hi%20Merlinflow%2C%20I%20would%20like%20to%20discuss%20our%20enterprise%20software%20requirements", 
            isExternal: true 
          },
          options: [
            "⚡ Chat with Desk 2 (+91 8247716878)", 
            "🚀 Book Live Software Demo", 
            "🏢 Himastech Marketing Contact"
          ]
        };
      }

      const mentionsKishore = q.includes("patel") || q.includes("kishore") || q.includes("ceo");

      return {
        text: mentionsKishore
          ? "📞 **Contact Kishore Patel & Himastech Growth Desk:**\n\n• **Direct Strategy Call:** +91 6304989071\n• **Official WhatsApp Desk:** +91 6304989071\n• **Executive Email:** info@himastech.com\n• **Operational Center:** Nagole, Hyderabad, Telangana, India\n\nFounder & Lead Strategist Kishore Patel and our senior growth directors are available on WhatsApp for direct campaign roadmaps, ad account audits, and enterprise partnerships."
          : "📞 **Himastech Official Contact Details:**\n\n• **Strategy Desk & Phone:** +91 6304989071\n• **WhatsApp Direct Desk:** +91 6304989071\n• **Official Email:** info@himastech.com\n• **Operational Center:** Nagole, Hyderabad, Telangana, India\n\nConnect directly with Kishore Patel's growth team for marketing audits, campaign consulting, and academy enrollments.",
        cta: { 
          label: "Chat on WhatsApp (+91 6304989071)", 
          href: "https://wa.me/916304989071?text=Hi%20Kishore%20Patel%20and%20Himastech%20Team%2C%20I%20would%20like%20to%20discuss%20our%20growth%20strategy", 
          isExternal: true 
        },
        options: ["📊 Request Free 48-Hr Audit", "💼 What services do you offer?", "🎓 Explore Training Academy"]
      };
    }

    // 2. Kishore Patel / Founder / Leadership Biography
    if (
      hasPhrase("kishore", "patel", "kishore patel") ||
      hasWord("ceo", "founder", "trainer") ||
      q.includes("who is kishore") ||
      q.includes("who is the ceo") ||
      q.includes("who is your ceo") ||
      q.includes("who is the founder") ||
      q.includes("who is the owner") ||
      q.includes("owner of himastech") ||
      q.includes("who runs himastech") ||
      q.includes("who started himastech") ||
      q.includes("leadership") ||
      q.includes("management team") ||
      q.includes("executive team")
    ) {
      return {
        text: "🏢 **About Kishore Patel — Founder & Lead Growth Strategist:**\n\n• **Title:** Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist\n\n*“Helping businesses understand digital marketing, generate opportunities and build stronger sales systems.”*\n\n**Experience Highlights:**\n• **12+ Years Marketing Experience:** Veteran growth architect across Meta, Google Ads, and modern acquisition funnels.\n• **Real Estate Marketing Expertise:** ₹120Cr+ inventory moved across luxury villas, open plots, and NRI buyer networks.\n• **Digital Marketing Training & Strategy:** Mentored over 5,000+ professionals, founders, and students.\n• **Sales Team Development:** Designing high-converting sales pipelines, speed-to-lead cadences, and closing scripts.",
        cta: { label: "Learn More in About Section", href: "#about" },
        options: [
          "💼 What services does Himastech offer?",
          "📊 Request Free 48-Hr Growth Audit",
          "📞 Contact Kishore Patel's Team"
        ]
      };
    }

    // 3. Conversational: Day & Well-being ("how was your day", "who was your day", "how is your day")
    if (
      q.includes("was your day") ||
      q.includes("is your day") ||
      q.includes("your day") ||
      q.includes("how was today") ||
      q.includes("how is today") ||
      q.includes("hows today")
    ) {
      return {
        text: "😊 **My day has been wonderful, thank you for asking!**\n\nI've been busy helping business owners audit their ad funnels and sharing data-driven growth strategies engineered by Founder & Lead Strategist **Kishore Patel**.\n\nHow has your day been going so far? Tell me a little about yourself or what you're working on today!",
        cta: { label: "Explore Our Growth Services", href: "#services" },
        options: [
          "🏢 Who is Kishore Patel?",
          "💼 What services do you offer?",
          "📊 Claim Free 48-Hour Audit"
        ]
      };
    }

    // 3b. Conversational: User feeling / Mood ("i am good", "im fine", "doing well")
    if (
      q.includes("i am good") ||
      q.includes("im good") ||
      q.includes("i m good") ||
      q.includes("doing good") ||
      q.includes("doing well") ||
      q.includes("i am fine") ||
      q.includes("im fine") ||
      q.includes("all good") ||
      q.includes("pretty good")
    ) {
      return {
        text: "😄 **Glad to hear that!**\n\nWhat brings you to Himastech today? Are you looking to scale your business revenue with paid ads, exploring career opportunities in our Training Academy, or just checking out our website?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "💼 What services do you offer?",
          "🏢 Who is the CEO?",
          "🎓 Explore Training Academy",
          "📊 Request Free 48-Hr Audit"
        ]
      };
    }

    // 3c. Conversational: Let's chat / Talk ("can we chat", "let's talk", "tell me something")
    if (
      q.includes("can we chat") ||
      q.includes("can we talk") ||
      q.includes("let us chat") ||
      q.includes("lets chat") ||
      q.includes("let us talk") ||
      q.includes("lets talk") ||
      q.includes("talk to me") ||
      q.includes("tell me something")
    ) {
      return {
        text: "💬 **I'd love to chat!**\n\nWe can talk about anything from performance marketing strategies, how our Founder **Kishore Patel** scales real estate and business brands, or career roadmaps in our Training Academy.\n\nWhat's on your mind today?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏢 Who is Kishore Patel?",
          "💼 What services do you offer?",
          "📊 Request Free 48-Hr Audit",
          "📞 WhatsApp Strategy Desk"
        ]
      };
    }

    // 3d. Conversational: Well-being ("how are you")
    if (
      q.includes("how are you") ||
      q.includes("how r u") ||
      q.includes("how do you do") ||
      q.includes("how is it going") ||
      q.includes("hows it going") ||
      q.includes("how s it going") ||
      q.includes("what is up") ||
      q.includes("whats up") ||
      q.includes("what s up") ||
      q.includes("what are you doing") ||
      q.includes("how have you been")
    ) {
      return {
        text: "😊 **I'm doing fantastic, thank you!**\n\nI am here 24/7 assisting business founders, CMOs, and real estate developers with data-driven growth strategies, high-ticket funnels, and sales systems under Founder & Lead Strategist **Kishore Patel**.\n\nHow are you doing today? Tell me a little about your business or what growth goals you have in mind!",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏢 Who is Kishore Patel?",
          "💼 What services do you offer?",
          "📊 Request Free 48-Hr Audit",
          "📈 Calculate Projected ROAS"
        ]
      };
    }

    // 4. Conversational: Gratitude ("thank you", "thanks")
    if (
      hasWord("thanks", "thank", "thx", "tysm") ||
      q.includes("thank you") ||
      q.includes("appreciate it") ||
      q.includes("thanks a lot") ||
      q.includes("thank u")
    ) {
      return {
        text: "🙏 **You're very welcome!**\n\nIt is our absolute pleasure to assist. Whether you need an ad stack audit, higher ROAS on Meta/Google, or sales team development, Kishore Patel's team is ready.\n\nLet us know whenever you want to schedule a strategy call or audit!",
        cta: { label: "Schedule Strategy Call", href: "#contact" },
        options: [
          "📊 Request Free 48-Hr Audit",
          "💼 What services do you offer?",
          "📞 WhatsApp Strategy Desk"
        ]
      };
    }

    // 5. Conversational: Acknowledgements ("ok", "sure", "cool", "great", "nice", etc.)
    const isAcknowledgement =
      ["ok", "okay", "sure", "cool", "great", "nice", "awesome", "perfect", "good", "fine", "understood", "got it", "yes", "yeah", "yep", "alright", "done", "super"].includes(raw) ||
      q.includes("sounds good") ||
      q.includes("makes sense") ||
      q.includes("no problem") ||
      q.includes("all good") ||
      q.includes("got it");

    if (isAcknowledgement) {
      return {
        text: "👍 **Awesome!**\n\nWhat would you like to explore next? We can perform a deep forensic audit on your ad stack, review your projected ROAS, or connect you directly with Kishore Patel's growth desk.",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "📊 Claim Free 48-Hour Audit",
          "💼 Explore Services",
          "🎓 View Training Academy",
          "📞 WhatsApp Strategy Desk"
        ]
      };
    }

    // 6. Conversational: Assistance Requests ("can you help me", "i need help")
    if (
      q.includes("help me") ||
      q.includes("need help") ||
      q.includes("can you help") ||
      q.includes("have a question") ||
      q.includes("can i ask") ||
      q.includes("need advice") ||
      q.includes("suggest me") ||
      q.includes("guide me")
    ) {
      return {
        text: "🤝 **Absolutely! I'm here to help you.**\n\nAs Himastech's official AI Strategist, I can guide you through:\n• **Performance Marketing**: Scaling Meta & Google ads to high ROAS\n• **Forensic Ad Audit**: 48-Hour diagnostic of tracking leaks and ad waste\n• **Generative Engine Optimization (GEO)**: Ranking your brand in AI search engines\n• **Training Academy**: Hands-on agency roadmaps & placement\n\nTell me a little about your brand, or what challenge you're facing right now!",
        cta: { label: "Request Free 48-Hr Audit", href: "#contact" },
        options: [
          "💼 What services do you offer?",
          "📊 Claim Free 48-Hour Audit",
          "📈 Calculate Projected ROAS",
          "🏢 Who is the CEO?"
        ]
      };
    }

    // 7. Conversational: Business Growth & Scaling ("grow my business", "increase sales")
    if (
      q.includes("grow my business") ||
      q.includes("increase sales") ||
      q.includes("more sales") ||
      q.includes("boost sales") ||
      q.includes("get more leads") ||
      q.includes("get leads") ||
      q.includes("more revenue") ||
      q.includes("need customers") ||
      q.includes("grow business") ||
      q.includes("scale brand") ||
      q.includes("scale my") ||
      q.includes("promote my") ||
      q.includes("run ads for")
    ) {
      return {
        text: "🚀 **Scaling Predictable Revenue is Himastech's Core Specialty:**\n\nUnder Founder & Lead Strategist **Kishore Patel**, we turn digital marketing into a mathematical growth engine:\n\n• **Algorithmic Meta & Google Ads**: Engineered for sustainable scale, delivering an average **4.8x ROAS**.\n• **Bulletproof CAPI Tracking**: Server-side attribution to recover lost iOS & Android conversions.\n• **High-Converting Creative Sprints**: Direct-response UGC video hooks, angle testing, and sub-second landing page CRO.\n\nTell me about your business model (e.g. Real Estate, Luxury Living, E-Commerce, Healthcare, or B2B), and we can recommend a tailored scaling blueprint!",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "📊 Request Free 48-Hr Audit",
          "💼 Explore Our Services",
          "📞 WhatsApp Strategy Desk"
        ]
      };
    }

    // 8. Conversational: Getting Started / Collaboration / Next Steps
    if (
      q.includes("how to start") ||
      q.includes("where to start") ||
      q.includes("how to begin") ||
      q.includes("how can we work") ||
      q.includes("how to work") ||
      q.includes("hire you") ||
      q.includes("get started") ||
      q.includes("next step") ||
      q.includes("collaborate") ||
      q.includes("onboarding")
    ) {
      return {
        text: "🚀 **How to Get Started with Himastech:**\n\nPartnering with us is seamless, transparent, and completely risk-free:\n\n1️⃣ **Step 1 — Free 48-Hour Growth Audit**: Our senior media buyers run a deep forensic scan on your ad stack under mutual NDA.\n2️⃣ **Step 2 — Strategic Roadmap**: Kishore Patel and our growth directors present tailored ROAS projections and creative angles.\n3️⃣ **Step 3 — 14-Day Sprint Launch**: We deploy tracking fixes, dynamic creatives, and algorithmic campaigns.\n\nFlexible month-to-month contracts with zero long-term lock-ins. You can also chat directly with Kishore Patel's desk on WhatsApp at **+91 6304989071**.",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "📊 Claim Free 48-Hour Audit",
          "📞 WhatsApp Strategy Desk (+91 6304989071)",
          "💼 View Marketing Services"
        ]
      };
    }

    // 9. Conversational: Compliments / Positive feedback
    if (
      q.includes("good job") ||
      q.includes("nice work") ||
      q.includes("you are good") ||
      q.includes("awesome bot") ||
      q.includes("love this") ||
      q.includes("cool website") ||
      q.includes("impressive") ||
      q.includes("great job")
    ) {
      return {
        text: "✨ **Thank you so much!**\n\nOur entire team and Founder **Kishore Patel** are committed to delivering the absolute highest standard in performance marketing, transparent analytics, and enterprise software.\n\nWe would love to bring that same high standard to your brand's growth! How can we assist you today?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "📊 Claim Free 48-Hour Audit",
          "💼 What services do you offer?",
          "🏢 Who is Kishore Patel?"
        ]
      };
    }

    // 10. Greetings & Friendly Openers
    const isGreeting =
      hasWord("hi", "hello", "hey", "namaste", "greetings", "wassup") ||
      q.includes("good morning") ||
      q.includes("good afternoon") ||
      q.includes("good evening") ||
      q.includes("hey bro") ||
      q.includes("hi bro") ||
      q.includes("hello bro") ||
      q.includes("hi there") ||
      q.includes("hello there") ||
      ["hi", "hello", "hey", "namaste", "start", "help"].includes(raw);

    if (isGreeting) {
      return {
        text: isMerlinflow
          ? "👋 Welcome to **Merlinflow Technologies**! I am your Enterprise Software Assistant. Ask me about our Cloud ERP suites (School IMS, Medical ERP, Restaurant OS, E-Commerce), schedule a 1-on-1 live demo, or connect with our solutions architects."
          : "👋 Hello! Welcome to **Himastech**. I am your AI Growth & Strategy Assistant.\n\nI can assist you with:\n• **Leadership & Founder:** Kishore Patel (Trainer | Sales Strategist | Real Estate Specialist)\n• **Services:** Real Estate Marketing, Meta & Google Ads, AI Videos, Funnels & CRO\n• **Training Academy:** 5 Career Tracks & Placement\n• **Free 48-Hr Growth Audit:** Forensic diagnostic of your ad stack\n• **Enterprise Software:** Merlinflow Cloud ERP Suites\n\nHow can we help your business scale today?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏢 Who is Kishore Patel?",
          "💼 What services do you offer?",
          "📊 Request Free 48-Hr Audit",
          "🎓 Explore Training Academy"
        ]
      };
    }

    // 4. About Company / About Himastech / Agency Details
    if (
      q.includes("company") ||
      q.includes("agency") ||
      q.includes("himastech") ||
      q.includes("himas tech") ||
      q.includes("business") ||
      q.includes("firm") ||
      q.includes("organization") ||
      q.includes("about us") ||
      q.includes("our story") ||
      q.includes("who are you") ||
      q.includes("what is this") ||
      q.includes("what is himastech") ||
      q.includes("who is himastech") ||
      q.includes("why himastech") ||
      q.includes("tell me about yourself")
    ) {
      return {
        text: "🏢 **About Himastech:**\n\n• **Founded By:** Kishore Patel (Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist)\n• **Core Philosophy:** Helping businesses understand digital marketing, generate opportunities, and build stronger sales systems.\n• **Operational Center:** Nagole, Hyderabad, Telangana, India\n• **Strategic Technology Alliance:** Merlinflow Technologies Private Limited\n• **Core Pillars:** Algorithmic Precision, Creative Science, Uncompromising Integrity (100% ad account ownership), and Compound Growth.",
        cta: { label: "Read Our Full Story", href: "#about" },
        options: ["🏢 Who is Kishore Patel?", "💼 Explore Services", "📊 Claim Free 48-Hour Audit"]
      };
    }

    // 5. Free 48-Hour Growth Audit
    if (
      q.includes("audit") ||
      q.includes("teardown") ||
      q.includes("diagnostic") ||
      q.includes("review my ad") ||
      q.includes("account review") ||
      q.includes("free 48")
    ) {
      return {
        text: "📊 **Complimentary 48-Hour Growth & Ad Stack Audit (Under Mutual NDA):**\n\nOur senior media buyers perform a deep forensic diagnostic of your entire marketing stack:\n✓ **Server-Side Tracking Audit**: Identifying lost iOS/Android conversions & Meta CAPI telemetry gaps.\n✓ **Creative Fatigue Index**: Pinpointing decaying ad creatives and high-converting hook opportunities.\n✓ **Audience Cannibalization**: Eliminating budget wasted on overlapping ad sets.\n✓ **Landing Page Drop-off Teardown**: Uncovering friction points in forms, page speeds, and checkout steps.\n\n100% Free with zero obligation.",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: ["📞 WhatsApp Strategy Desk", "⚡ Calculate Projected ROAS", "💼 View Marketing Services"]
      };
    }

    // 6. Services & Growth Solutions
    if (
      q.includes("service") ||
      q.includes("services") ||
      q.includes("what do you do") ||
      q.includes("what does himastech do") ||
      q.includes("how can you help") ||
      q.includes("digital marketing") ||
      q.includes("marketing agency") ||
      q.includes("meta ads") ||
      q.includes("facebook ads") ||
      q.includes("fb ads") ||
      q.includes("instagram ads") ||
      q.includes("google ads") ||
      q.includes("p-max") ||
      q.includes("pmax") ||
      q.includes("performance max") ||
      q.includes("tiktok ads") ||
      q.includes("linkedin ads") ||
      q.includes("youtube ads") ||
      q.includes("media buying") ||
      q.includes("ad campaign") ||
      q.includes("landing page") ||
      q.includes("cro") ||
      q.includes("funnel") ||
      q.includes("lead generation") ||
      q.includes("lead gen") ||
      q.includes("retention marketing")
    ) {
      return {
        text: "💼 **Himastech Digital Marketing & Lead Generation Services:**\n\n1. **Meta Ads (Facebook & Instagram)**: High-converting lead generation, custom audiencing & creative testing.\n2. **Google Ads & Performance Max**: High-intent search sculpting, verified inbound buyer leads.\n3. **Generative Engine Optimization (GEO) & SEO**: AI-ready semantic search ranking on Google, ChatGPT & Perplexity.\n4. **Real Estate Marketing Solutions**: Dedicated property campaigns, walk-through videos & site-visit pipelines.\n5. **AI Marketing & Automation**: Automated lead nurturing, WhatsApp CRM integration & instant sales routing.\n6. **Conversion Landing Pages**: Sub-second fast, high-converting digital landing pages.\n7. **Branding & Creative Design**: Premium digital identity, brochures, 3D renderings & social assets.",
        cta: { label: "Explore Our Services", href: "#services" },
        options: ["⚡ What ROAS can you achieve?", "📊 Claim Free 48-Hr Audit", "🏢 Who is the Founder?"]
      };
    }

    // 7. Generative Engine Optimization (GEO) & AI Search / SEO
    if (
      q.includes("seo") ||
      q.includes("geo") ||
      q.includes("generative engine") ||
      q.includes("ai search") ||
      q.includes("chatgpt ranking") ||
      q.includes("perplexity") ||
      q.includes("search engine optimization") ||
      q.includes("google search ranking") ||
      q.includes("organic ranking")
    ) {
      return {
        text: "🔍 **Generative Engine Optimization (GEO) & AI Search:**\n\nTraditional keyword SEO is no longer enough. We engineer your brand authority to become the cited recommendation across LLM answer engines:\n• **ChatGPT & Perplexity AI Citations**: Optimizing schema and entity relationships for conversational recommendations.\n• **Google AI Overviews & Gemini Panels**: Structuring content to capture top AI summary boxes.\n• **Sub-Second Core Web Vitals**: Flawless Next.js architecture maximizing LCP, INP, and CLS scores.\n• **Topical Authority Hubs**: In-depth pillar content clusters that dominate search rankings.\n• **Tier-1 Digital PR**: High-authority citations and backlink flywheels.",
        cta: { label: "Explore SEO & GEO Services", href: "#services" },
        options: ["📊 Audit My Website SEO", "💼 Explore All Services", "📞 Contact Strategy Desk"]
      };
    }

    // 8. Training Academy / Courses / Syllabus / Roadmaps / Placements
    if (
      q.includes("training") ||
      q.includes("course") ||
      q.includes("courses") ||
      q.includes("academy") ||
      q.includes("syllabus") ||
      q.includes("curriculum") ||
      q.includes("cohort") ||
      q.includes("track") ||
      q.includes("tracks") ||
      q.includes("learn marketing") ||
      q.includes("learn digital marketing") ||
      q.includes("placement") ||
      q.includes("career track") ||
      q.includes("training track") ||
      q.includes("marketing bootcamp") ||
      q.includes("admission") ||
      q.includes("enroll")
    ) {
      return {
        text: "🎓 **Himastech Digital Marketing Academy (5 Elite Career Tracks):**\n\n1️⃣ **Paid Media & ROAS Acceleration** (8 Weeks • ₹8.5 LPA – ₹15 LPA avg salary): Meta CAPI, Google P-Max, live client ad spend.\n2️⃣ **SEO, GEO & AI Search Mastery** (6 Weeks • ₹7.5 LPA – ₹14 LPA avg salary): Core Web Vitals, Schema, ChatGPT & Perplexity indexing.\n3️⃣ **Social Media & Viral Content** (6 Weeks • ₹6.5 LPA – ₹12 LPA avg salary): 3-second hooks, CapCut, UGC creator seeding.\n4️⃣ **Growth Hacking & CRO** (8 Weeks • ₹9.0 LPA – ₹18 LPA avg salary): Sub-second landing pages, Klaviyo/SMS retention, A/B testing.\n5️⃣ **Full-Stack Executive Bootcamp** (12 Weeks • ₹12 LPA – ₹24 LPA avg salary): Complete 360° CMO & growth leadership training.\n\n✨ **Key Benefits:** Interactive curved roadmaps, real-time client ad budgets, 1-on-1 mentorship, and direct placement assistance.",
        cta: { label: "View Academy Roadmaps & Syllabus", href: "#training" },
        options: ["📞 WhatsApp for Next Cohort Seats", "💼 Agency Services", "🏢 About Kishore Patel"]
      };
    }

    // 9. Results / Case Studies / ROAS / Metrics / Portfolio
    if (
      q.includes("roas") ||
      q.includes("case study") ||
      q.includes("case studies") ||
      q.includes("client result") ||
      q.includes("client results") ||
      q.includes("past work") ||
      q.includes("portfolio") ||
      q.includes("track record") ||
      hasPhrase("prestige", "urbanrise", "lumina", "aura", "cloudscale", "nexusflow")
    ) {
      return {
        text: "📈 **Verified Client Results & Proven ROAS:**\n\n• **Prestige Luxury Estates (Real Estate):** 6.4x ROAS | ₹48Cr+ Inventory Sold\n• **UrbanRise Luxury Villas (Real Estate):** 5.8x ROAS | ₹32Cr Booked\n• **Lumina Glow Skincare (D2C E-Commerce):** 4.2x ROAS | 310% MRR Surge in 90 Days\n• **Aura Minimalist Apparel (Fashion E-Com):** 5.1x ROAS | 420% Revenue Scale\n• **CloudScale DevOps (B2B SaaS):** ₹18M Pipeline Closed | 48% CAC Reduction\n• **NexusFlow CRM (B2B Tech):** ₹24M Enterprise ARR | 3.4x Demo Volume\n\n⭐ **Agency Benchmark:** 4.8x Average ROAS across active client portfolios and a 94%+ client retention rate.",
        cta: { label: "View Detailed Case Studies", href: "#case-studies" },
        options: ["📊 Claim Free 48-Hour Audit", "💰 How does pricing work?", "📞 WhatsApp Strategy Desk"]
      };
    }

    // 10. Pricing / Budget / Retainer / Fees / Cost / Charges
    if (
      q.includes("pricing") ||
      q.includes("retainer") ||
      q.includes("agency fee") ||
      q.includes("management fee") ||
      q.includes("marketing budget") ||
      q.includes("how much do you charge") ||
      q.includes("service fee") ||
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("packages")
    ) {
      return {
        text: "💰 **Pricing & Engagement Framework:**\n\n• **Performance-Aligned Structure**: Transparent base monthly retainer + performance milestone bonuses when agreed ROAS/revenue targets are surpassed.\n• **Zero Long-Term Lock-Ins**: Flexible month-to-month contracts because we earn our partnership through real revenue.\n• **Minimum Recommended Ad Spend**: Starting at ₹1,00,000 monthly ad spend to ensure statistical significance in algorithmic testing.\n• **Enterprise Proposals**: Custom-tailored multi-channel retainers available for enterprise brands and VC-backed startups.",
        cta: { label: "Request Custom Pricing Proposal", href: "#contact" },
        options: ["📊 Book Free Account Audit", "💼 Explore Our Services", "📞 WhatsApp Strategy Desk"]
      };
    }

    // 11. Process / 4-Step Revenue Engine / Methodology
    if (
      q.includes("process") ||
      q.includes("how it works") ||
      q.includes("methodology") ||
      q.includes("4 step") ||
      q.includes("4-step") ||
      q.includes("workflow")
    ) {
      return {
        text: "⚙️ **The 4-Step Revenue Multiplication Engine:**\n\n1️⃣ **Deep Forensic Audit (Day 1-7)**: Fix broken CAPI telemetry, resolve tracking blindspots, and establish baseline unit economics.\n2️⃣ **High-Velocity Creative Sprint (Day 8-14)**: Produce 10+ direct response UGC hooks and develop high-converting landing page variants.\n3️⃣ **Algorithmic Media Buying (Day 15-30)**: Deploy Broad AI targeting, Google P-Max feeds, and Dynamic Creative Testing (DCT).\n4️⃣ **Compounding Scale & Retention (Day 30+)**: Deploy Klaviyo/SMS retention sequences and ongoing multivariate CRO.",
        cta: { label: "View Our 4-Step Process", href: "#process" },
        options: ["📊 Claim Free 48-Hr Audit", "📈 View Client Case Studies", "📞 Call +91 6304989071"]
      };
    }

    // 12. Merlinflow Technologies / Cloud ERP / SaaS Suites
    if (
      q.includes("merlinflow") ||
      q.includes("merlin") ||
      q.includes("erp") ||
      q.includes("school ims") ||
      q.includes("medical erp") ||
      q.includes("hospital erp") ||
      q.includes("restaurant erp") ||
      q.includes("real estate erp") ||
      q.includes("cloud os") ||
      q.includes("saas suite")
    ) {
      return {
        text: "🚀 **Strategic Collaboration with Merlinflow Technologies Private Limited:**\n\nHimastech collaborates with Merlinflow Technologies (https://www.merlinflow.in/) to provide enterprise-grade SaaS and automated cloud OS suites:\n\n1️⃣ **Real Estate & Brokerage ERP**: Lead routing, inventory availability matrices, and broker commission payouts.\n2️⃣ **School & College IMS**: Admissions, biometric attendance, fee collection, and parent portals.\n3️⃣ **Medical & Hospital ERP**: Instant POS billing, pharmacy batch/expiry tracking, and NABH compliance.\n4️⃣ **Restaurant & Cloud Kitchen OS**: QR digital menus, real-time KOT kitchen sync, and table reservation management.\n5️⃣ **E-Commerce & Retail OS**: 1-click checkout, automated COD fraud filtering, and logistics sync.\n6️⃣ **Corporate HRMS & Payroll**: Biometric payroll, compliance filings, and employee self-service.\n\nAll suites feature real-time cloud sync, WhatsApp/SMS alerts, and India GST/UPI compliance.",
        cta: { label: "Visit Merlinflow.in", href: "https://www.merlinflow.in/", isExternal: true },
        options: ["📞 Connect with Desk 1 (+91 8374373753)", "⚡ Connect with Desk 2 (+91 8247716878)", "💼 Back to Himastech Marketing"]
      };
    }

    // 13. Reviews / Feedback / Testimonials / Ratings
    if (
      q.includes("review") ||
      q.includes("reviews") ||
      q.includes("feedback") ||
      q.includes("testimonial") ||
      q.includes("testimonials") ||
      q.includes("rating") ||
      q.includes("ratings")
    ) {
      return {
        text: "⭐ **Genuine Client Testimonials:**\n\n• **100% Genuine Client Feedback**: Verified reviews from real estate leaders, directors, and business founders across Hyderabad & India.\n• **Proven Impact**: High praise for transparent ROAS dashboards, zero vanity metrics, and direct access to senior media buyers.\n• **Client Relationships**: Long-standing growth marketing partnerships delivering measurable sales results.",
        cta: { label: "View Client Testimonials", href: "#testimonials" },
        options: ["📊 Claim Free 48-Hour Audit", "🎓 View Training Academy", "🏢 Who is the Founder?"]
      };
    }

    // 14. ROI Strategy & Revenue Forecasting
    if (
      q.includes("roi") ||
      q.includes("calculator") ||
      q.includes("simulate")
    ) {
      return {
        text: "📈 **ROI & Predictable Growth Engineering:**\n\nCurious about the revenue potential of scaling your marketing with Himastech?\n• We engineer custom performance models tailored to your target CAC, CPA, and blended ROAS.\n• Based on historical real campaign averages across Real Estate, B2B, and E-Commerce.\n• Book a complimentary consultation to see an exact mathematical projection for your business.",
        cta: { label: "Book Free Consultation", href: "#contact" },
        options: ["📊 Request Free 48-Hr Audit", "💼 Explore Services", "📞 Contact Strategy Desk"]
      };
    }

    // 15. NATURAL CONVERSATIONAL ASSISTANCE (For general conversation building & friendly chat)
    return {
      text: "I hear you! 😊 I'm always happy to chat and help out.\n\nWhether you're looking to scale your real estate or business brand, curious about how our Founder **Kishore Patel** builds high-converting ad funnels & sales systems, or want to check out our Training Academy, I'm here for you.\n\nWhat would you like to explore together?",
      cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
      options: [
        "🏢 Who is Kishore Patel?",
        "💼 What services do you offer?",
        "📊 Claim Free 48-Hour Audit",
        "📞 WhatsApp Strategy Desk (+91 6304989071)"
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate realistic AI processing
    setTimeout(() => {
      const replyData = generateBotReply(query);

      // Dynamically select 4 new unshown suggestions from our comprehensive pool
      const { suggestions: dynamicOptions, newShown } = selectDynamicSuggestions(
        query,
        replyData.options,
        shownSuggestionsRef.current,
        Boolean(isMerlinflow),
        4
      );
      shownSuggestionsRef.current = newShown;

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyData.text,
        timestamp: "Just now",
        cta: replyData.cta,
        options: [...dynamicOptions, "🔄 More Topics"],
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const handleCycleMoreSuggestions = (messageId: string) => {
    const pool = isMerlinflow ? MASTER_MERLINFLOW_SUGGESTIONS : MASTER_HIMASTECH_SUGGESTIONS;
    const normalize = (s: string) => s.replace(/[^\w\s]/g, "").toLowerCase().trim();
    const shownSet = new Set(shownSuggestionsRef.current.map(normalize));

    let unshown = pool.filter((item) => !shownSet.has(normalize(item)));
    let reset = false;
    if (unshown.length < 4) {
      unshown = pool;
      reset = true;
    }

    const nextFour = unshown.slice(0, 4);
    const updated = reset ? nextFour : [...shownSuggestionsRef.current, ...nextFour];
    shownSuggestionsRef.current = updated;

    setMessages((prev) =>
      prev.map((m) =>
        m.id === messageId ? { ...m, options: [...nextFour, "🔄 More Topics"] } : m
      )
    );
  };

  const handleOptionClick = (opt: string, messageId: string) => {
    if (opt === "🔄 More Topics") {
      handleCycleMoreSuggestions(messageId);
      return;
    }
    handleSendMessage(opt);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    shownSuggestionsRef.current = isMerlinflow
      ? [
          "📞 What are the direct WhatsApp numbers?",
          "🚀 Schedule a Guided Software Demo",
          "🏢 Explore School IMS, Medical & Restaurant ERP",
          "💰 Custom Pricing & Cloud Migration",
        ]
      : INITIAL_HIMASTECH_OPTIONS;
    setMessages(initialMessages);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-3xl glass-modal flex flex-col shadow-2xl relative overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-20 bg-gradient-to-b from-blue-500/15 to-transparent blur-xl pointer-events-none" />

            {/* Chatbot Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200/50 glass-subcard relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-brand-purple flex items-center justify-center text-white shadow-xs">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                    {isMerlinflow ? "Merlinflow AI Assistant" : "Himastech AI Strategist"}
                    <span className="text-[10px] px-1.5 py-0.2 rounded glass-subcard text-blue-700 font-mono border border-blue-300/60">
                      100% Accurate
                    </span>
                  </h3>
                  <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    {isMerlinflow ? "Live Desk • +91 8374373753 / 8247716878" : "Live Desk • +91 6304989071"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message History Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3 sm:p-3.5 leading-relaxed shadow-xs ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none font-medium shadow-sm"
                        : "glass-subcard text-slate-800 rounded-tl-none border-slate-200/60"
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-1">
                      {msg.text}
                    </div>

                    {/* Direct CTA Link Button */}
                    {msg.cta && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200/60">
                        {msg.cta.isExternal ? (
                          <a
                            href={msg.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] border border-emerald-200 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-emerald-600" />
                            {msg.cta.label} <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            href={msg.cta.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-[11px] border border-blue-200 transition-colors"
                          >
                            {msg.cta.label} <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-full">
                      {msg.options.map((opt, oIdx) => {
                        const isCycle = opt === "🔄 More Topics";
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleOptionClick(opt, msg.id)}
                            className={`text-[11px] px-2.5 py-1 rounded-full border transition-all text-left cursor-pointer shadow-2xs ${
                              isCycle
                                ? "glass-subcard border-purple-300 text-purple-700 font-semibold hover:bg-purple-100/60"
                                : "glass-subcard hover:bg-blue-50/80 border-slate-200/70 hover:border-blue-300 text-slate-700 hover:text-blue-700"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl glass-subcard w-20 rounded-tl-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-200/50 glass-subcard relative z-10">
              <div className="flex items-center gap-2 rounded-xl bg-white/80 border border-slate-200/80 px-3 py-1.5 focus-within:border-blue-500 transition-colors shadow-2xs">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isMerlinflow ? "Ask about School IMS, Medical ERP, demos..." : "Ask about phone, ROAS, training, audit..."}
                  className="flex-1 bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    inputText.trim()
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                      : "text-slate-400 cursor-not-allowed"
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1.5 px-1">
                <span>
                  {isMerlinflow
                    ? "⚡ Merlinflow WhatsApp: +91 8374373753 / 8247716878"
                    : "⚡ Call / WhatsApp: +91 6304989071"}
                </span>
                {isMerlinflow ? (
                  <a href="#demo" onClick={() => setIsOpen(false)} className="text-emerald-600 hover:underline font-bold">
                    Live Demo →
                  </a>
                ) : (
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="text-blue-600 hover:underline font-medium">
                    Free 48h Audit →
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Trigger Button */}
      <div className="flex items-center gap-2.5">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white relative cursor-pointer transition-all duration-300 group"
          aria-label="Toggle AI Growth Assistant"
        >
          {/* Subtle Outer Ping Ring */}
          <span className="absolute inset-0 rounded-full border border-blue-400 animate-ping opacity-25 pointer-events-none" />

          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          )}

          {/* AI Active Indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}

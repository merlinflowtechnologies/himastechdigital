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
  Building2,
  Sparkles
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
  // Real Estate Flagship & High-Intent Leads
  "🏡 How does Himastech generate high-intent Real Estate leads?",
  "🏢 Who is Kishore Patel (Founder & Lead Strategist)?",
  "💼 What are the 12 core digital marketing services you offer?",
  "🎓 Tell me about the Real Estate Marketing Training Academy",
  "⚡ What ROAS and results do you achieve for property builders?",
  "📱 How do your Meta (Facebook & Instagram) ads work for real estate?",
  "🔍 What is your Google Ads & High-Intent Search strategy?",
  "📊 What is included in the Free 48-Hour Growth Audit?",
  "📞 What is Kishore Patel's direct WhatsApp & phone number?",
  "🤖 What is Generative Engine Optimization (GEO) & AI Search?",
  "🎥 Tell me about cinematic property walkthroughs & video ads",
  "📍 Where is your operational hub in Nagole, Hyderabad?",
  "🤝 How do we start working together on our property campaigns?",
  "🚀 Tell me about Merlinflow Cloud ERP suites for Real Estate",
  "💰 How does your performance-aligned pricing work?",
  "⭐ Where can I read verified client feedback and reviews?"
];

const MASTER_MERLINFLOW_SUGGESTIONS: string[] = [
  "📞 What are the direct WhatsApp desk numbers?",
  "🚀 Schedule a Guided 1-on-1 Software Demo",
  "🏢 What modules are in the Real Estate Brokerage ERP?",
  "🏫 Tell me about the School & College IMS features",
  "🏥 How does Medical & Hospital ERP track batch expiries?",
  "🍽️ How does Restaurant OS handle digital QR & KOT sync?",
  "🛍️ How does the E-Commerce Cloud OS prevent COD fraud?",
  "💼 Tell me about Corporate HRMS & Biometric Payroll",
  "💰 What is the pricing and cloud deployment model?",
  "🤝 How does Merlinflow collaborate with Himastech?"
];

const INITIAL_HIMASTECH_OPTIONS: string[] = [
  "🏡 Real Estate Marketing Solutions",
  "🏢 Who is Kishore Patel?",
  "💼 12 Core Digital Services",
  "🎓 Real Estate Training Academy",
  "📊 Free 48-Hour Growth Audit"
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
    if (qLower.includes("kishore") && sNorm.includes("kishore")) return true;
    if (qLower.includes("roas") && sNorm.includes("roas")) return true;
    if (qLower.includes("audit") && sNorm.includes("audit")) return true;
    if (qLower.includes("training") && sNorm.includes("training")) return true;
    if (qLower.includes("pricing") && sNorm.includes("pricing")) return true;
    if (qLower.includes("merlinflow") && sNorm.includes("merlinflow")) return true;
    if (qLower.includes("real estate") && sNorm.includes("real estate")) return true;
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
        ? "👋 Welcome to **Merlinflow Technologies**! I can answer questions about our SaaS ERP suites (Real Estate Brokerage ERP, School IMS, Medical ERP, Restaurant OS, E-Commerce), schedule a 1-on-1 live product demo, or connect you with our engineering directors."
        : "👋 Welcome to **Himastech — Digital Realty Marketing & AI Solutions**!\n\nI am your AI Growth & Strategy Assistant. How can I assist you with real estate lead generation, Kishore Patel's consulting, or training today?",
      timestamp: "Just now",
      options: isMerlinflow
        ? [
            "📞 What are the direct WhatsApp numbers?",
            "🚀 Schedule a Guided Software Demo",
            "🏢 Real Estate Brokerage ERP & School IMS",
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
          "🏢 Real Estate Brokerage ERP & School IMS",
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
      text: "⚠️ **Query Outside Company Scope**\n\nI am the official AI Strategist for **Himastech** and **Merlinflow Technologies**. I can only assist with inquiries directly related to our agency, real estate marketing, digital services, training academy, and enterprise software.\n\n👉 **Topics you can explore:**\n• **Real Estate Marketing:** High-intent buyer leads, Meta/Google ads, site visits\n• **Founder & Leadership:** Kishore Patel (12+ years experience, Lead Strategist)\n• **12 Core Digital Services:** Performance ads, SEO/GEO, web development, CRM\n• **Training Academy:** Real estate & digital marketing practical courses\n• **Free 48-Hour Growth Audit:** Complimentary forensic ad stack diagnostic\n• **Contact Us:** Official WhatsApp (+91 6304989071)",
      cta: { 
        label: "Contact Growth Desk", 
        href: "/#contact", 
        isExternal: false 
      },
      options: [
        "🏡 Real Estate Marketing Solutions",
        "🏢 Who is Kishore Patel?",
        "💼 12 Core Digital Services",
        "🎓 Real Estate Training Academy"
      ]
    };

    // 0. EXPLICIT UNRELATED DOMAINS FILTER
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
      q.includes("patel") || q.includes("kishore") || q.includes("real estate") || q.includes("realty") ||
      q.includes("marketing") || q.includes("ad") || q.includes("ads") || q.includes("agency") ||
      q.includes("business") || q.includes("sales") || q.includes("revenue") || q.includes("leads") ||
      q.includes("roas") || q.includes("audit") || q.includes("training") || q.includes("course") ||
      q.includes("villa") || q.includes("plot") || q.includes("flat");

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

    // 1. Contact Details / Phone / WhatsApp / Email / Address / Location
    if (isContactIntent) {
      if (isMerlinflow || q.includes("merlinflow") || q.includes("desk 1") || q.includes("desk 2")) {
        return {
          text: "📞 **Merlinflow Technologies Official Desks:**\n\n• **Direct Solutions Desk 1:** +91 8374373753\n• **Direct Solutions Desk 2:** +91 8247716878\n• **Official Email:** info@merlinflow.in\n• **Website:** https://www.merlinflow.in/\n• **Operational Hub:** Hyderabad, India\n\nOur solutions architects are available for live demo walkthroughs and custom module proposals.",
          cta: { 
            label: "Call Desk 1 (+91 8374373753)", 
            href: "tel:+918374373753", 
            isExternal: true 
          },
          options: [
            "⚡ Call Desk 2 (+91 8247716878)", 
            "🚀 Request Software Demo", 
            "🏢 Himastech Marketing Contact"
          ]
        };
      }

      const mentionsKishore = q.includes("patel") || q.includes("kishore") || q.includes("ceo");

      return {
        text: mentionsKishore
          ? "📞 **Contact Kishore Patel & Himastech Growth Desk:**\n\n• **Direct Strategy Call:** +91 6304989071\n• **Official WhatsApp Desk:** +91 6304989071\n• **Executive Email:** info@himastechdigi.com\n• **Operational Center:** Nagole, Hyderabad, Telangana, India\n\nFounder & Lead Strategist Kishore Patel and our senior growth directors are available on WhatsApp for direct campaign roadmaps, real estate marketing audits, and enterprise partnerships."
          : "📞 **Himastech Official Contact Details:**\n\n• **Strategy Desk & Phone:** +91 6304989071\n• **WhatsApp Direct Desk:** +91 6304989071\n• **Official Email:** info@himastechdigi.com\n• **Operational Center:** Nagole, Hyderabad, Telangana, India\n\nConnect directly with Kishore Patel's team for marketing audits, campaign consulting, and academy enrollments.",
        cta: { 
          label: "Contact Himastech Growth Desk", 
          href: "/#contact", 
          isExternal: false 
        },
        options: ["🏡 Real Estate Marketing Solutions", "📊 Request Free 48-Hr Audit", "💼 12 Core Digital Services", "🎓 Real Estate Training Academy"]
      };
    }

    // 1b. Real Estate Marketing (Dedicated Flagship Handler)
    if (
      q.includes("real estate") ||
      q.includes("realestate") ||
      q.includes("realty") ||
      q.includes("property") ||
      q.includes("plots") ||
      q.includes("plot") ||
      q.includes("villas") ||
      q.includes("villa") ||
      q.includes("apartments") ||
      q.includes("apartment") ||
      q.includes("flat") ||
      q.includes("flats") ||
      q.includes("builders") ||
      q.includes("builder") ||
      q.includes("developer") ||
      q.includes("developers") ||
      q.includes("site visit") ||
      q.includes("site visits") ||
      q.includes("walkthrough") ||
      q.includes("open plots") ||
      q.includes("hmda") ||
      q.includes("dtcp")
    ) {
      return {
        text: "🏡 **Himastech Digital Realty Marketing Solutions:**\n\nReal Estate Marketing is our primary flagship specialty led by Founder & Lead Strategist **Kishore Patel** (12+ years expertise, 50+ projects delivered).\n\n• **Verified Inbound Buyer Leads**: Multi-tier Meta (FB/IG) and Google Search ad campaigns targeting serious local homebuyers and investors.\n• **Sub-5 Minute Speed-to-Lead**: Integrated WhatsApp CRM automation connecting interested buyers directly with your sales managers before leads go cold.\n• **Cinematic Visual Walkthroughs**: Drone videography, architectural walkthroughs, and social reels that drive high emotional intent.\n• **High Site-Visit Conversion**: Qualified site visit generation for open plots, residential layouts, and commercial projects.\n• **Proven Track Record**: 3.5x – 4.2x verified ROAS for clients across Hyderabad and South India.",
        cta: { 
          label: "Get Real Estate Audit", 
          href: "/#contact", 
          isExternal: false 
        },
        options: [
          "📊 Claim Free 48-Hour Audit",
          "🏢 Who is Kishore Patel?",
          "💼 12 Core Digital Services",
          "🎓 Real Estate Training Academy"
        ]
      };
    }

    // 2. Kishore Patel / Founder / Leadership Biography
    if (
      hasPhrase("kishore", "patel", "kishore patel", "sai kishore") ||
      hasWord("ceo", "founder", "trainer", "leader") ||
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
        text: "🏢 **About Kishore Patel — Founder & Lead Strategist:**\n\n• **Role:** Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist\n\n*“Helping businesses understand digital marketing, generate opportunities and build stronger sales systems.”*\n\n**Key Accomplishments & Authority:**\n• **12+ Years Industry Experience:** Veteran growth architect across Meta Ads, Google Ads, and modern acquisition funnels.\n• **Real Estate Marketing Specialist:** 50+ successful projects delivered across residential communities, plotted layouts, and growing brands.\n• **Digital Marketing Trainer & Mentor:** Trained over 5,000+ professionals, business founders, and career aspirants.\n• **Sales Systems Architect:** Designing automated speed-to-lead pipelines, high-converting WhatsApp cadences, and sales closing scripts.",
        cta: { label: "Learn More About Kishore Patel", href: "#about" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "💼 12 Core Digital Services",
          "📊 Request Free 48-Hr Growth Audit",
          "📞 Contact Kishore Patel's Team"
        ]
      };
    }

    // 3. Conversational: Day & Well-being
    if (
      q.includes("was your day") ||
      q.includes("is your day") ||
      q.includes("your day") ||
      q.includes("how was today") ||
      q.includes("how is today") ||
      q.includes("hows today")
    ) {
      return {
        text: "😊 **My day has been fantastic, thank you for asking!**\n\nI've been busy helping real estate developers and business founders audit their ad campaigns and sharing growth strategies engineered by Founder & Lead Strategist **Kishore Patel**.\n\nHow is your day going? Tell me a little about your business or what projects you are currently focusing on!",
        cta: { label: "Explore Our Growth Services", href: "#services" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "🏢 Who is Kishore Patel?",
          "💼 12 Core Digital Services",
          "📊 Claim Free 48-Hour Audit"
        ]
      };
    }

    // 3b. Conversational: User feeling / Mood
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
        text: "😄 **Glad to hear that!**\n\nWhat brings you to Himastech today? Are you looking to generate high-intent leads for your real estate project or business, exploring our Training Academy, or looking for an ad audit?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "💼 12 Core Digital Services",
          "🏢 Who is Kishore Patel?",
          "🎓 Real Estate Training Academy"
        ]
      };
    }

    // 3c. Conversational: Let's chat / Talk
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
        text: "💬 **I'd love to chat!**\n\nWe can talk about real estate buyer acquisition, how our Founder **Kishore Patel** scales property projects and businesses, or roadmaps in our Training Academy.\n\nWhat's on your mind today?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "🏢 Who is Kishore Patel?",
          "💼 12 Core Digital Services",
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
        text: "😊 **I'm doing great, thank you!**\n\nI am here 24/7 assisting real estate developers, builders, and business owners with data-driven growth strategies, high-ticket funnels, and sales systems under Founder & Lead Strategist **Kishore Patel**.\n\nHow are you doing today? What growth goals are you looking to achieve?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "🏢 Who is Kishore Patel?",
          "💼 12 Core Digital Services",
          "📊 Request Free 48-Hr Audit"
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
        text: "🙏 **You're very welcome!**\n\nIt is our pleasure to assist. Whether you need a real estate campaign roadmap, higher ROAS on Meta/Google, or sales team development, Kishore Patel's team is ready.\n\nLet us know whenever you want to schedule a strategy call or free audit!",
        cta: { label: "Schedule Strategy Call", href: "#contact" },
        options: [
          "📊 Request Free 48-Hr Audit",
          "🏡 Real Estate Marketing Solutions",
          "💼 12 Core Digital Services",
          "📞 WhatsApp Strategy Desk"
        ]
      };
    }

    // 5. Conversational: Acknowledgements ("ok", "sure", "cool", etc.)
    const isAcknowledgement =
      ["ok", "okay", "sure", "cool", "great", "nice", "awesome", "perfect", "good", "fine", "understood", "got it", "yes", "yeah", "yep", "alright", "done", "super"].includes(raw) ||
      q.includes("sounds good") ||
      q.includes("makes sense") ||
      q.includes("no problem") ||
      q.includes("all good") ||
      q.includes("got it");

    if (isAcknowledgement) {
      return {
        text: "👍 **Awesome!**\n\nWhat would you like to explore next? We can perform a deep forensic audit on your ad stack, review real estate lead generation strategies, or connect you directly with Kishore Patel's desk.",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "📊 Claim Free 48-Hour Audit",
          "💼 12 Core Digital Services",
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
        text: "🤝 **Absolutely! I'm here to help you.**\n\nAs Himastech's official AI Strategist, I can guide you through:\n• **Real Estate Marketing**: Scaling Meta & Google ads to generate verified buyer visits\n• **Forensic Ad Audit**: Complimentary 48-Hour diagnostic of tracking leaks and ad waste\n• **Generative Engine Optimization (GEO)**: Ranking your brand in AI search engines\n• **Training Academy**: Hands-on agency roadmaps & direct mentorship with Kishore Patel\n\nTell me about your business or current campaign goals!",
        cta: { label: "Request Free 48-Hr Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "💼 12 Core Digital Services",
          "📊 Claim Free 48-Hour Audit",
          "🏢 Who is Kishore Patel?"
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
        text: "🚀 **Scaling Predictable Revenue is Himastech's Core Specialty:**\n\nUnder Founder & Lead Strategist **Kishore Patel**, we turn digital marketing into a mathematical growth engine:\n\n• **Algorithmic Meta & Google Ads**: Engineered for sustainable scale, delivering an average **4.8x – 6.4x ROAS**.\n• **Bulletproof CAPI Tracking**: Server-side attribution to recover lost iOS & Android conversions.\n• **High-Converting Creative Sprints**: Direct-response property video walkthroughs, UGC hooks, and sub-second landing pages.\n\nTell me about your business model (e.g. Real Estate Developer, Luxury Villas, Open Plots, E-Commerce, or B2B), and we'll outline a tailored scaling blueprint!",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "📊 Request Free 48-Hr Audit",
          "💼 12 Core Digital Services",
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
        text: "🚀 **How to Get Started with Himastech:**\n\nPartnering with us is seamless, transparent, and completely risk-free:\n\n1️⃣ **Step 1 — Free 48-Hour Growth Audit**: Our senior media buyers run a deep forensic scan on your ad stack under mutual NDA.\n2️⃣ **Step 2 — Strategic Roadmap**: Kishore Patel and our growth directors present tailored ROAS projections, target buyer personas, and creative angles.\n3️⃣ **Step 3 — 14-Day Sprint Launch**: We deploy tracking fixes, dynamic creatives, speed-to-lead CRM routing, and algorithmic campaigns.\n\nFlexible month-to-month contracts with zero long-term lock-ins. You can also chat directly with Kishore Patel's desk on WhatsApp at **+91 6304989071**.",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "📊 Claim Free 48-Hour Audit",
          "📞 WhatsApp Strategy Desk (+91 6304989071)",
          "🏡 Real Estate Marketing Solutions"
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
        text: "✨ **Thank you so much!**\n\nOur entire team and Founder **Kishore Patel** are committed to delivering the absolute highest standard in performance marketing, real estate lead generation, and transparent analytics.\n\nWe would love to bring that same high standard to your brand's growth! How can we assist you today?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "📊 Claim Free 48-Hour Audit",
          "💼 12 Core Digital Services",
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
          ? "👋 Welcome to **Merlinflow Technologies**! I am your Enterprise Software Assistant. Ask me about our Cloud ERP suites (Real Estate Brokerage ERP, School IMS, Medical ERP, Restaurant OS), schedule a live demo, or connect with our solutions architects."
          : "👋 Hello! Welcome to **Himastech — Digital Realty Marketing & AI Solutions**.\n\nI can assist you with:\n• **Real Estate Marketing:** High-intent buyer leads, NRI campaigns, site-visit pipelines\n• **Founder & Leadership:** Kishore Patel (Trainer | Sales Strategist | Real Estate Specialist)\n• **12 Core Digital Services:** Performance Ads, SEO/GEO, Landing Pages, CRM\n• **Training Academy:** Real Estate & Digital Marketing Mastery Programs\n• **Free 48-Hour Growth Audit:** Complimentary forensic diagnostic of your ad stack\n\nHow can we help your business scale today?",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: [
          "🏡 Real Estate Marketing Solutions",
          "🏢 Who is Kishore Patel?",
          "💼 12 Core Digital Services",
          "🎓 Real Estate Training Academy"
        ]
      };
    }

    // 11. About Company / About Himastech / Agency Details
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
        text: "🏢 **About Himastech — Digital Realty Marketing & AI Solutions:**\n\n• **Founder & Lead Strategist:** Kishore Patel (Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist)\n• **Core Mission:** Helping real estate developers and businesses build their brand, generate qualified leads, and improve sales using digital + AI solutions.\n• **Operational Hub:** Nagole, Hyderabad, Telangana, India\n• **Direct Contact:** +91 6304989071 | info@himastechdigi.com\n• **Strategic Technology Alliance:** Merlinflow Technologies Private Limited\n• **Core Pillars:** Algorithmic Precision, 100% Ad Account Transparency, Creative Science, and Measurable Revenue.",
        cta: { label: "Read Our Full Story", href: "#about" },
        options: ["🏡 Real Estate Marketing Solutions", "🏢 Who is Kishore Patel?", "💼 12 Core Digital Services", "📊 Claim Free 48-Hour Audit"]
      };
    }

    // 12. Free 48-Hour Growth Audit
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
        options: ["📞 WhatsApp Strategy Desk", "🏡 Real Estate Marketing Solutions", "💼 12 Core Digital Services"]
      };
    }

    // 13. 12 Core Services & Growth Solutions
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
        text: "💼 **Himastech 12 Core Digital & Realty Services:**\n\n1. **Real Estate Marketing Solutions**: Dedicated property campaigns, walk-through videos & verified site-visit pipelines.\n2. **Performance Marketing & Paid Media**: Algorithmic Meta & Google Ads scaling, high ROAS bidding.\n3. **SEO & Generative Engine Optimization (GEO)**: Semantic ranking on Google, ChatGPT & Perplexity AI.\n4. **Social Media Marketing**: Brand building, viral reels, and social community growth.\n5. **Web Development & Landing Pages**: Sub-second fast Next.js landing pages built for high conversion.\n6. **Creative Strategy & Branding**: Luxury digital identities, project brochures, and ad creatives.\n7. **WhatsApp & Email Marketing Automation**: Automated lead nurturing & sub-5 minute sales routing.\n8. **Cinematic Video Production**: 4K drone shoots, project walkthroughs & direct-response video ads.\n9. **Influencer & Creator Marketing**: Local property influencers & authentic UGC creator seeding.\n10. **Marketing Automation & CRM**: Speed-to-lead workflow pipelines, telecaller scoring & CRM sync.\n11. **Local SEO & Google Business Profile (GMB)**: Hyper-local buyer discovery and Google Maps dominance.\n12. **Analytics & Conversion Optimization (CRO)**: Server-side CAPI telemetry, A/B testing, and audit reporting.",
        cta: { label: "Explore Services on Website", href: "#services" },
        options: ["🏡 Real Estate Marketing Details", "⚡ What ROAS can you achieve?", "📊 Claim Free 48-Hr Audit", "🏢 Who is Kishore Patel?"]
      };
    }

    // 14. Generative Engine Optimization (GEO) & AI Search / SEO
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

    // 15. Training Academy / Real Estate & Digital Marketing Mastery
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
        text: "🎓 **Himastech Real Estate & Digital Marketing Academy:**\n\nDirectly taught & mentored by veteran strategist **Kishore Patel** (12+ years experience, 5,000+ mentored professionals):\n\n1️⃣ **Real Estate Marketing Mastery**: High-ticket property funnels, Meta/Google ads for villas/plots, NRI targeting & site-visit systems.\n2️⃣ **Paid Media & ROAS Acceleration**: Meta CAPI server-side attribution, Google P-Max, and algorithmic scaling.\n3️⃣ **SEO, GEO & AI Search Mastery**: Core Web Vitals, Schema markup, ChatGPT & Perplexity AI indexing.\n4️⃣ **Social Media & Viral Content**: 3-second hook frameworks, CapCut/Premiere workflows, UGC creator seeding.\n5️⃣ **Full-Stack Growth & CRM Leadership**: Sub-second Next.js pages, WhatsApp CRM automation, speed-to-lead cadences.\n\n✨ **Key Highlights:** Live client ad budgets (real ad accounts), 1-on-1 mentorship from Kishore Patel, and direct agency/developer placement support.",
        cta: { label: "View Academy Curriculum", href: "#training" },
        options: ["📞 WhatsApp for Next Cohort Seats", "🏡 Real Estate Marketing Details", "🏢 About Kishore Patel"]
      };
    }

    // 16. Results / Case Studies / ROAS / Metrics / Portfolio
    if (
      q.includes("roas") ||
      q.includes("case study") ||
      q.includes("case studies") ||
      q.includes("client result") ||
      q.includes("client results") ||
      q.includes("past work") ||
      q.includes("portfolio") ||
      q.includes("track record") ||
      hasPhrase("lumina", "aura", "cloudscale", "kura")
    ) {
      return {
        text: "📈 **Verified Client Results & Proven ROAS:**\n\n• **Residential Apartment Launch:** 3.8x ROAS | 45+ Verified Site Visits\n• **Boutique Gated Villas:** 3.9x ROAS | 28 Units Booked\n• **Plotted Communities:** 120+ Walk-ins & Rapid Sell-Through\n• **Kura Botanicals (D2C E-Commerce):** 3.6x ROAS | +240% Revenue Scale\n• **Lumina Organic Apparel (Fashion):** 3.8x ROAS | +140% Customer Repeat Rate\n• **CloudScale Analytics (B2B SaaS):** +180% Demo Growth | -35% CAC Reduction\n\n⭐ **Agency Benchmark:** 3.5x – 4.2x Average ROAS across active client campaigns and a 98% client satisfaction rate.",
        cta: { label: "View Detailed Case Studies", href: "#case-studies" },
        options: ["📊 Claim Free 48-Hour Audit", "🏡 Real Estate Marketing Solutions", "📞 WhatsApp Strategy Desk"]
      };
    }

    // 17. Pricing / Budget / Retainer / Fees / Cost / Charges
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
        text: "💰 **Pricing & Engagement Framework:**\n\n• **Performance-Aligned Structure**: Transparent base monthly retainer + performance milestone bonuses when agreed ROAS/lead targets are surpassed.\n• **Zero Long-Term Lock-Ins**: Flexible month-to-month contracts because we earn our partnership through real revenue.\n• **Minimum Recommended Ad Spend**: Starting at ₹1,00,000 monthly ad spend to ensure statistical significance in algorithmic testing.\n• **Custom Real Estate & Enterprise Packages**: Tailored packages for builders, developers, and growing business brands.",
        cta: { label: "Request Custom Pricing Proposal", href: "#contact" },
        options: ["📊 Book Free Account Audit", "🏡 Real Estate Marketing Details", "📞 WhatsApp Strategy Desk"]
      };
    }

    // 18. Process / 4-Step Revenue Engine / Methodology
    if (
      q.includes("process") ||
      q.includes("how it works") ||
      q.includes("methodology") ||
      q.includes("4 step") ||
      q.includes("4-step") ||
      q.includes("workflow")
    ) {
      return {
        text: "⚙️ **The 4-Step Revenue Multiplication Engine:**\n\n1️⃣ **Deep Forensic Audit (Day 1-7)**: Fix broken CAPI telemetry, resolve tracking blindspots, and establish baseline unit economics.\n2️⃣ **High-Velocity Creative Sprint (Day 8-14)**: Produce 10+ direct response UGC hooks and develop high-converting landing page variants.\n3️⃣ **Algorithmic Media Buying (Day 15-30)**: Deploy Broad AI targeting, Google Search & P-Max feeds, and Dynamic Creative Testing (DCT).\n4️⃣ **Compounding Scale & Retention (Day 30+)**: Deploy speed-to-lead WhatsApp automation, CRM pipeline routing, and ongoing CRO.",
        cta: { label: "View Our 4-Step Process", href: "#process" },
        options: ["📊 Claim Free 48-Hr Audit", "🏡 Real Estate Marketing Details", "📞 Call +91 6304989071"]
      };
    }

    // 19. Merlinflow Technologies / Cloud ERP / SaaS Suites
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

    // 20. Reviews / Feedback / Testimonials / Ratings
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
        text: "⭐ **Genuine Client Testimonials:**\n\n• **100% Genuine Client Feedback**: Verified reviews from real estate builders, directors, and business founders across Hyderabad & India.\n• **Proven Impact**: High praise for transparent ROAS dashboards, zero vanity metrics, and direct access to Kishore Patel & senior media buyers.\n• **Client Relationships**: Long-standing growth marketing partnerships delivering measurable sales results.",
        cta: { label: "View Client Testimonials", href: "#testimonials" },
        options: ["📊 Claim Free 48-Hour Audit", "🏡 Real Estate Marketing Details", "🏢 Who is the Founder?"]
      };
    }

    // 21. Natural Conversational Fallback
    return {
      text: "I hear you! 😊 I'm always happy to assist.\n\nWhether you're looking to generate high-intent buyer leads for your real estate projects, curious about how our Founder **Kishore Patel** builds high-converting ad funnels & sales systems, or want to check out our Training Academy, I'm here for you.\n\nWhat would you like to explore together?",
      cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
      options: [
        "🏡 Real Estate Marketing Solutions",
        "🏢 Who is Kishore Patel?",
        "💼 12 Core Digital Services",
        "📞 Contact Strategy Desk (+91 6304989071)"
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
    }, 500);
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
          "🏢 Real Estate Brokerage ERP & School IMS",
          "💰 Custom Pricing & Cloud Migration",
        ]
      : INITIAL_HIMASTECH_OPTIONS;
    setMessages(initialMessages);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end font-sans">
      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-[410px] h-[520px] max-h-[82vh] rounded-3xl bg-[#090d16]/96 backdrop-blur-2xl border border-white/15 flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.95)] ring-1 ring-amber-500/20 relative overflow-hidden text-slate-100"
          >
            {/* Top ambient gold & cyan glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-gradient-to-r from-amber-500/15 via-transparent to-cyan-500/15 blur-2xl pointer-events-none" />

            {/* Chatbot Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0c1220]/90 backdrop-blur-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-[#0f172a] to-cyan-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-md">
                    <Bot className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#090d16] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {isMerlinflow ? "Merlinflow AI Assistant" : "Himastech AI Strategist"}
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-mono border border-amber-400/30">
                      Official
                    </span>
                  </h3>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {isMerlinflow ? "Live Desk • +91 8374373753" : "Live Desk • +91 6304989071"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message History Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar text-xs bg-[#07090e]/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 sm:p-4 leading-relaxed shadow-lg ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold rounded-tr-none shadow-amber-500/20"
                        : "bg-[#0d1424]/90 text-slate-200 rounded-tl-none border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-1.5 [&_strong]:text-white [&_strong]:font-bold">
                      {msg.text}
                    </div>

                    {/* Direct CTA Link Button */}
                    {msg.cta && (
                      <div className="mt-3 pt-2.5 border-t border-white/10">
                        {msg.cta.isExternal ? (
                          <a
                            href={msg.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold text-[11px] border border-emerald-500/30 transition-colors shadow-sm"
                          >
                            <Phone className="w-3 h-3 text-emerald-400" />
                            {msg.cta.label} <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            href={msg.cta.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 font-bold text-[11px] border border-amber-500/30 transition-colors shadow-sm"
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
                            className={`text-[11px] px-3 py-1 rounded-full border transition-all text-left cursor-pointer shadow-xs ${
                              isCycle
                                ? "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-400/40 text-cyan-300 font-semibold"
                                : "bg-white/5 hover:bg-amber-500/15 border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-amber-300"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#0d1424]/90 border border-white/10 w-20 rounded-tl-none shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#090d16]/95 relative z-10">
              <div className="flex items-center gap-2 rounded-xl bg-[#0e1626] border border-white/15 px-3.5 py-2 focus-within:border-amber-400/70 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all shadow-inner">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isMerlinflow ? "Ask about School IMS, Medical ERP, demos..." : "Ask about Real Estate leads, Kishore Patel, training..."}
                  className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    inputText.trim()
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold hover:brightness-110 shadow-xs"
                      : "text-slate-600 cursor-not-allowed"
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="text-amber-400 font-bold">⚡ WhatsApp / Call:</span> +91 6304989071
                </span>
                {isMerlinflow ? (
                  <a href="#demo" onClick={() => setIsOpen(false)} className="text-cyan-400 hover:underline font-bold">
                    Live Demo →
                  </a>
                ) : (
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">
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
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0a0e1a] via-[#111827] to-[#1c2638] text-amber-400 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_35px_rgba(245,158,11,0.35)] border-2 border-amber-400/50 hover:border-amber-400 relative cursor-pointer transition-all duration-300 group"
          aria-label="Toggle AI Growth Assistant"
        >
          {/* Subtle Outer Ping Ring */}
          <span className="absolute inset-0 rounded-full border border-amber-400/60 animate-ping opacity-25 pointer-events-none" />

          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-6 h-6 text-amber-300 group-hover:rotate-12 transition-transform" />
          )}

          {/* AI Active Indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#07090e] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}

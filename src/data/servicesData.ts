import { 
  Share2,
  Search, 
  Target, 
  TrendingUp,
  Laptop,
  Layout,
  Palette,
  Video,
  FileText,
  MessageCircle,
  Mail,
  Cpu,
  LucideIcon
} from "lucide-react";

export interface ServiceItem {
  id: string;
  slug: string;
  badge: string;
  title: string;
  shortTitle: string;
  description: string;
  fullOverview: string;
  strategicBenefits: {
    title: string;
    description: string;
  }[];
  impact: string;
  icon: LucideIcon;
  accent: string;
  border: string;
  gradientText: string;
  features: string[];
  playbook: {
    step: string;
    title: string;
    detail: string;
  }[];
  techStack: string[];
  deliverables: {
    timeline: string;
    reporting: string;
    teamPod: string;
    guarantee: string;
  };
}

export const allServices: ServiceItem[] = [
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    badge: "Audience & Community",
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    description: "Organic brand positioning, viral trend hijacking, community building, and cross-platform growth across Instagram, LinkedIn, YouTube & Twitter.",
    fullOverview: "In modern real estate and high-ticket service industries, buyers research your brand on Instagram and LinkedIn long before they speak to a sales representative. Himastech engineers organic social media architectures that combine high-end aesthetic visual production with direct-response community building, positioning your brand as the undisputed luxury authority in your market.",
    strategicBenefits: [
      {
        title: "Algorithmic Viral Reach",
        description: "Deploy 3-second hook Reels and vertical videos engineered specifically for Instagram and YouTube algorithms to capture organic reach."
      },
      {
        title: "Executive Thought Leadership",
        description: "Transform founders and key sales heads into recognized industry figures with ghostwritten thought-leadership posts on LinkedIn."
      },
      {
        title: "DM Conversational Selling",
        description: "Convert comments, story replies, and reactions into warm sales leads and buyer inquiries with our trained community management playbooks."
      },
      {
        title: "Brand Equity & Social Proof",
        description: "Maintain a cohesive, luxury aesthetic that immediately justifies premium pricing and commands buyer trust."
      }
    ],
    impact: "+320% Engagement",
    icon: Share2,
    accent: "from-pink-500/20 to-rose-500/5",
    border: "hover:border-pink-500/40",
    gradientText: "from-pink-400 via-rose-300 to-amber-300",
    features: [
      "Viral Reels & Shorts Video Production",
      "High-End Visual Brand Aesthetic & Grid Design",
      "Community Management & DM Lead Booking",
      "Targeted Influencer & Creator Collaborations"
    ],
    playbook: [
      {
        step: "01",
        title: "Brand Voice & Visual Positioning Architecture",
        detail: "Audit current profiles, establish unified luxury visual guidelines, and define distinctive brand tone and content pillars."
      },
      {
        step: "02",
        title: "Viral Short-Form Video & Trend Pipeline",
        detail: "Deploy weekly batches of scroll-stopping 3-second hook Reels and Shorts engineered for algorithmic distribution."
      },
      {
        step: "03",
        title: "Community Management & Conversational DM Selling",
        detail: "Turn post comments and Story replies into qualified sales conversations and scheduled buyer discovery calls."
      },
      {
        step: "04",
        title: "Cross-Channel Syndication & Influencer Collabs",
        detail: "Amplify reach through strategic niche influencer seeding and synchronized distribution across Meta, LinkedIn, and YouTube."
      }
    ],
    techStack: ["Meta Business Suite", "Later", "CapCut Pro", "Figma", "SocialBlade"],
    deliverables: {
      timeline: "Monthly Compounding Retainer",
      reporting: "Weekly Reach, Retention & DM Audits",
      teamPod: "Social Lead + Video Editor + Graphic Designer",
      guarantee: "100% Organic Growth & Brand Safety"
    }
  },
  {
    id: "search-engine-optimization",
    slug: "search-engine-optimization",
    badge: "Organic Dominance",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO & Generative AI Search",
    description: "Continuous technical, semantic, and structural optimization to rank on Google search results and generative AI answer engines.",
    fullOverview: "Traditional SEO is no longer enough. Buyers now consult both Google Search and generative AI platforms like ChatGPT, Perplexity, and Google AI Overviews. Himastech provides comprehensive full-stack SEO combining sub-second Core Web Vitals, semantic topic clusters, and Generative Engine Optimization (GEO) to ensure your company is cited first whenever buyers search for your services.",
    strategicBenefits: [
      {
        title: "Generative Engine Optimization (GEO)",
        description: "Structure your website content so AI answer engines recommend your brand as the primary source and solution."
      },
      {
        title: "Zero-Click Search Domination",
        description: "Capture Google Featured Snippets, Local 3-Pack Maps rankings, and People Also Ask modules for high-intent queries."
      },
      {
        title: "Compounding Free Traffic",
        description: "Build an organic inbound funnel that continually produces qualified leads without ongoing pay-per-click ad costs."
      },
      {
        title: "Technical Excellence",
        description: "Eliminate crawl bottlenecks, implement JSON-LD schema markup, and secure sub-second load times that Google rewards."
      }
    ],
    impact: "Avg +280% Traffic",
    icon: Search,
    accent: "from-cyan-500/20 to-blue-500/5",
    border: "hover:border-cyan-500/40",
    gradientText: "from-cyan-400 via-teal-300 to-emerald-400",
    features: [
      "Technical SEO & Sub-Second Core Web Vitals",
      "Generative Engine Optimization (GEO & AI Overviews)",
      "Hyper-Local Google Maps 3-Pack Dominance",
      "High-Authority Tier-1 Backlink Flywheel"
    ],
    playbook: [
      {
        step: "01",
        title: "Technical Architecture & Core Web Vitals Audit",
        detail: "Eliminate crawl errors, optimize sub-second load performance (LCP, INP, CLS), and engineer advanced JSON-LD structured data."
      },
      {
        step: "02",
        title: "Topical Authority & Semantic Keyword Clustering",
        detail: "Design hub-and-spoke topic clusters that claim total entity authority in Google's Knowledge Graph."
      },
      {
        step: "03",
        title: "Generative Engine Optimization (GEO)",
        detail: "Train brand citations and vector knowledge to become the primary recommended answer in ChatGPT, Perplexity, and Google AI Overviews."
      },
      {
        step: "04",
        title: "High-Authority Digital PR & Backlink Flywheel",
        detail: "Earn authoritative white-hat editorial backlinks from tier-1 industry publications."
      }
    ],
    techStack: ["Ahrefs", "Semrush", "Screaming Frog", "Perplexity AI", "GSC", "Schema.org"],
    deliverables: {
      timeline: "4-6 Months Compounding Growth",
      reporting: "Bi-Weekly Keyword & Ranking Audits",
      teamPod: "Senior SEO Lead + Technical Dev + Content Strategist",
      guarantee: "100% White-Hat & Algorithm-Proof"
    }
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    badge: "High ROAS Scale",
    title: "Meta Ads (Facebook & Instagram)",
    shortTitle: "Meta Advertising Funnels",
    description: "Laser-targeted Meta advertising campaigns leveraging Advantage+ AI targeting, high-velocity creative testing, and server-side CAPI telemetry.",
    fullOverview: "Meta is the premier platform for demand generation in real estate and luxury services. Himastech deploys cutting-edge Advantage+ AI targeting combined with direct server-side Conversions API (CAPI) infrastructure. This allows our campaigns to pinpoint high-net-worth buyers, eliminate data loss from browser ad-blockers, and scale ad spend profitably with audited ROAS.",
    strategicBenefits: [
      {
        title: "Server-Side CAPI Gateway",
        description: "Bypasses iOS privacy restrictions by feeding 100% accurate first-party conversion data directly into Meta's AI algorithms."
      },
      {
        title: "Dynamic Creative Testing (DCT)",
        description: "Systematically test 20+ hooks, copy variations, and video styles weekly to prevent creative fatigue and lower cost-per-lead."
      },
      {
        title: "High-Ticket Lead Qualification",
        description: "Use interactive on-Facebook forms and custom qualification landing pages to filter out tire-kickers before your sales team calls."
      },
      {
        title: "Retargeting Omni-Presence",
        description: "Re-engage site visitors and brochure downloaders with social proof, customer testimonials, and luxury lifestyle footage."
      }
    ],
    impact: "4.8x - 8.4x ROAS",
    icon: Target,
    accent: "from-amber-500/20 to-yellow-500/5",
    border: "hover:border-amber-500/40",
    gradientText: "from-amber-400 via-yellow-300 to-amber-500",
    features: [
      "Advantage+ AI Audience Scaling",
      "Server-Side Conversions API (CAPI)",
      "High-Velocity Creative Testing Engine",
      "Dynamic Multi-Touch Retargeting Funnels"
    ],
    playbook: [
      {
        step: "01",
        title: "Server-Side CAPI Gateway Installation",
        detail: "Bypass iOS privacy data loss by deploying 100% server-side telemetry directly into Meta's AI algorithms."
      },
      {
        step: "02",
        title: "Dynamic Creative Testing (DCT) Engine",
        detail: "Systematically test 20+ hooks, copy angles, and visual formats weekly to identify winning scalable creatives."
      },
      {
        step: "03",
        title: "Advantage+ Scaling & Budget Pacing",
        detail: "Scale proven winning ad sets horizontally and vertically without triggering audience fatigue or CPAs spikes."
      },
      {
        step: "04",
        title: "Multi-Touch Dynamic Retargeting Funnel",
        detail: "Re-engage abandoned cart and un-submitted lead form visitors with social proof, customer testimonials, and scarcity triggers."
      }
    ],
    techStack: ["Meta Ads Manager", "Meta CAPI Gateway", "Triple Whale", "Motion App", "Figma"],
    deliverables: {
      timeline: "Immediate Launch in 5-7 Days",
      reporting: "Real-Time Telemetry Dashboard + Weekly Deep Dive",
      teamPod: "Performance Media Buyer + Direct-Response Copywriter",
      guarantee: "Audited Target ROAS Thresholds"
    }
  },
  {
    id: "google-ads",
    slug: "google-ads",
    badge: "High-Intent Capture",
    title: "Google Ads (Search, YouTube & P-Max)",
    shortTitle: "Google Paid Media",
    description: "Capture high-intent buyers at the exact second they search for your solutions via Google Search, Performance Max, and YouTube In-Stream ads.",
    fullOverview: "When prospective buyers actively type 'luxury villas in Hyderabad' or 'commercial office space for lease', you must appear at the top. Himastech crafts high-intent Google Ads campaigns combining exact-match keyword harvesting, aggressive negative keyword scrubbing, Performance Max AI syndication, and high-impact YouTube video ads.",
    strategicBenefits: [
      {
        title: "Immediate Bottom-Funnel Intent",
        description: "Target clients who are ready to purchase right now, maximizing conversion rate and reducing sales cycle length."
      },
      {
        title: "Performance Max Cross-Channel Reach",
        description: "Syndicate your brand across Google Search, Maps, YouTube, Gmail, and Discover through unified AI asset groups."
      },
      {
        title: "Negative Keyword Scrubbing",
        description: "Block wasteful non-commercial queries to ensure every rupee of your ad spend targets genuine decision-makers."
      },
      {
        title: "Smart Bidding Value Optimization",
        description: "Deploy Target CPA and Target ROAS bidding calibrated against verified offline sales closures in your CRM."
      }
    ],
    impact: "3.8x Target ROAS",
    icon: TrendingUp,
    accent: "from-blue-500/20 to-indigo-500/5",
    border: "hover:border-blue-500/40",
    gradientText: "from-blue-400 via-indigo-300 to-cyan-400",
    features: [
      "High-Intent Keyword Domination",
      "Performance Max Multi-Channel Deployment",
      "Negative Keyword Cost Scrubbing",
      "YouTube In-Stream Video Ads"
    ],
    playbook: [
      {
        step: "01",
        title: "Commercial Intent Keyword Harvesting",
        detail: "Isolate bottom-of-the-funnel high-intent keywords while aggressively filtering out waste with negative keyword lists."
      },
      {
        step: "02",
        title: "Performance Max Asset Group Calibration",
        detail: "Feed Google AI premium creative assets, audience signals, and customer match lists for cross-network dominance."
      },
      {
        step: "03",
        title: "YouTube In-Stream Direct-Response Funnel",
        detail: "Target video ads to viewers researching competitors or high-value category solutions on YouTube."
      },
      {
        step: "04",
        title: "Algorithmic tCPA & tROAS Bid Management",
        detail: "Calibrate smart bidding algorithms to maximize conversion value while protecting client acquisition margin."
      }
    ],
    techStack: ["Google Ads Manager", "Google Keyword Planner", "Google Analytics 4", "Looker Studio"],
    deliverables: {
      timeline: "Campaign Setup in 4-6 Days",
      reporting: "Live Looker Studio Dashboard + Bi-Weekly Review",
      teamPod: "Google Ads Certified Lead + Search Copywriter",
      guarantee: "Zero Budget Waste with Strict Negative Match"
    }
  },
  {
    id: "website-development",
    slug: "website-development",
    badge: "Sub-Second Performance",
    title: "Website Development",
    shortTitle: "Next.js Web Development",
    description: "Ultra-fast Next.js websites engineered with premium dark luxury aesthetics, mobile-first responsiveness, and high-conversion architecture.",
    fullOverview: "A slow or generic website kills high-ticket conversions. Himastech builds bespoke, lightning-fast digital experiences using Next.js, React, and Tailwind CSS. Featuring sub-second load times, glassmorphism aesthetics, dynamic micro-animations, and direct CRM integrations, our websites convert casual visitors into verified buyer inquiries.",
    strategicBenefits: [
      {
        title: "Sub-Second Speed (Core Web Vitals)",
        description: "Achieve 95+ Google Lighthouse scores that dramatically lower bounce rates and improve ad conversion rates."
      },
      {
        title: "Premium Luxury Aesthetics",
        description: "Bespoke dark-mode UI with sleek glassmorphism and gold accents tailored for high-ticket brands and real-estate developers."
      },
      {
        title: "CRM & WhatsApp Instant Routing",
        description: "Automatically stream form submissions directly into your sales team's WhatsApp and CRM within 3 seconds."
      },
      {
        title: "Scalable Enterprise Stack",
        description: "Built on clean Next.js architecture with zero WordPress plugin vulnerabilities or unexpected site crashes."
      }
    ],
    impact: "Sub-1.2s Load Speeds",
    icon: Laptop,
    accent: "from-cyan-500/20 to-sky-500/5",
    border: "hover:border-cyan-500/40",
    gradientText: "from-cyan-400 via-sky-300 to-indigo-300",
    features: [
      "Next.js & React High Performance Architecture",
      "100% Mobile-First Responsive Layouts",
      "Automated SEO & Schema Structured Data",
      "Seamless CRM & WhatsApp API Integration"
    ],
    playbook: [
      {
        step: "01",
        title: "Conversion Architecture & UX Wireframing",
        detail: "Map buyer user journeys, frictionless navigation paths, and strategic call-to-action touchpoints."
      },
      {
        step: "02",
        title: "High-Performance Modern Frontend Engineering",
        detail: "Build with Next.js App Router, Tailwind CSS, and Framer Motion for buttery 60fps animations."
      },
      {
        step: "03",
        title: "Speed & Core Web Vitals Optimization",
        detail: "Achieve green 95+ Google Lighthouse scores with edge caching, automated image optimization, and clean code."
      },
      {
        step: "04",
        title: "CRM, Pixel & Lead Webhook Synchronization",
        detail: "Connect web forms directly to your sales CRM, WhatsApp notifications, and ad tracking pixels."
      }
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    deliverables: {
      timeline: "2-3 Weeks Turnkey Deployment",
      reporting: "Code Review, QA Matrix & Speed Benchmark",
      teamPod: "Senior Full-Stack Engineer + UI/UX Designer",
      guarantee: "100% Responsive & 95+ Core Web Vitals"
    }
  },
  {
    id: "landing-pages",
    slug: "landing-pages",
    badge: "High-Conversion Funnels",
    title: "Landing Pages",
    shortTitle: "Direct-Response Landing Pages",
    description: "High-velocity direct-response landing pages built with psychology-backed copy, interactive calculators, and frictionless one-click lead capture.",
    fullOverview: "Standard corporate pages are designed to inform; Himastech landing pages are designed to convert. We engineer dedicated campaign landing pages engineered with psychological persuasion architecture, sticky mobile call-to-actions, and interactive budget calculators that turn paid traffic into qualified sales inquiries.",
    strategicBenefits: [
      {
        title: "Laser-Focused Attention Ratio",
        description: "Zero distracting navigation links: every element funnels the visitor toward one crystal-clear action."
      },
      {
        title: "Multi-Step Micro-Commitments",
        description: "Replace intimidating long forms with progressive disclosure flows that increase form completion rates by 35%."
      },
      {
        title: "Instant Mobile Optimization",
        description: "Engineered specifically for smartphone thumbs with sticky WhatsApp CTAs and click-to-call phone triggers."
      },
      {
        title: "Continuous A/B Multivariate Split Testing",
        description: "Relentlessly test headlines, hero renders, and pricing displays to compound conversion efficiency over time."
      }
    ],
    impact: "28.4% Avg Conversion",
    icon: Layout,
    accent: "from-amber-500/20 to-orange-500/5",
    border: "hover:border-amber-500/40",
    gradientText: "from-amber-400 via-yellow-300 to-orange-400",
    features: [
      "Psychological Visual Hierarchy & Scannability",
      "Frictionless One-Click WhatsApp & Phone Forms",
      "Sub-Second Mobile Load Times",
      "Dynamic A/B Multivariate Testing Engine"
    ],
    playbook: [
      {
        step: "01",
        title: "Psychological Offer & Copy Architecture",
        detail: "Extract core emotional triggers, craft irresistible value propositions, and eliminate buyer skepticism."
      },
      {
        step: "02",
        title: "Mobile-First Direct-Response Design",
        detail: "Design layout with sticky bottom CTAs, high-contrast action triggers, and scannable visual proof points."
      },
      {
        step: "03",
        title: "Multi-Step Lead Qualification Flows",
        detail: "Replace intimidating long forms with conversational micro-commitments that boost completed submissions."
      },
      {
        step: "04",
        title: "Continuous A/B Conversion Rate Testing",
        detail: "Test headlines, hero visual angles, CTA button copy, and testimonials to systematically multiply conversion rates."
      }
    ],
    techStack: ["Next.js", "Hotjar", "VWO", "Figma", "Google Tag Manager"],
    deliverables: {
      timeline: "3-5 Business Days Per Funnel",
      reporting: "Heatmap Analysis & Weekly CRO Reports",
      teamPod: "CRO Specialist + Copywriter + Frontend Dev",
      guarantee: "Proven Direct-Response Best Practices"
    }
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    badge: "Visual Authority",
    title: "Graphic Design",
    shortTitle: "Brand & Creative Graphic Design",
    description: "Scroll-stopping ad creatives, corporate branding, luxury typography, pitch decks, hoardings, and marketing collaterals that command instant trust.",
    fullOverview: "First impressions determine whether a prospect stops to read your ad or scrolls past. Himastech provides world-class graphic design spanning luxury brand identity systems, high-converting social media ad carousels, outdoor hoardings, and high-ticket investor pitch decks that establish indisputable market credibility.",
    strategicBenefits: [
      {
        title: "Scroll-Stopping Visuals",
        description: "Ad creatives designed with bold focal points, high contrast, and strategic typography to maximize click-through rate."
      },
      {
        title: "Luxury Brand Identity",
        description: "Unified color palettes, premium typography, and bespoke vector iconography that elevate your brand perception."
      },
      {
        title: "Large-Format Print Mastery",
        description: "Hoardings, billboards, and brochures rendered in ultra-high resolution ready for commercial production."
      },
      {
        title: "Rapid 24-48h Turnaround",
        description: "Fast, agile design sprints that keep your campaigns fresh and responsive to trending market opportunities."
      }
    ],
    impact: "3.5x Scroll-Stop CTR",
    icon: Palette,
    accent: "from-purple-500/20 to-pink-500/5",
    border: "hover:border-purple-500/40",
    gradientText: "from-purple-400 via-pink-300 to-rose-400",
    features: [
      "High-Converting Direct-Response Ad Creatives",
      "Luxury Brand Guidelines & Identity Systems",
      "High-Impact Billboard & Hoarding Print Formats",
      "Investor Pitch Decks, Brochures & Digital Catalogs"
    ],
    playbook: [
      {
        step: "01",
        title: "Brand Asset Audit & Design System Setup",
        detail: "Standardize brand color tokens, typography scales, iconography, and visual hierarchy standards."
      },
      {
        step: "02",
        title: "Social Ad & Carousel Creative Engineering",
        detail: "Produce high-contrast, attention-grabbing ad designs formatted specifically for Instagram, Meta, and LinkedIn."
      },
      {
        step: "03",
        title: "Large-Format Billboard & Hoarding Print Renders",
        detail: "Design crystal-clear, high-resolution hoarding and print collaterals calibrated for maximum distance readability."
      },
      {
        step: "04",
        title: "Investor Pitch Decks & Digital Brochures",
        detail: "Deliver polished, high-ticket presentation decks and brochures that impress clients, investors, and stakeholders."
      }
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign", "Midjourney"],
    deliverables: {
      timeline: "Fast 24-48h Iterative Turnaround",
      reporting: "Source Files (Figma / Vector / PDF) Included",
      teamPod: "Senior Brand Designer + Creative Director",
      guarantee: "100% Bespoke, Print-Ready & Pixel-Perfect"
    }
  },
  {
    id: "video-marketing",
    slug: "video-marketing",
    badge: "Cinematic Engagement",
    title: "Video Marketing",
    shortTitle: "Commercial & Video Production",
    description: "High-production video storytelling, 4K commercial drone shoots, viral short-form Reels/Shorts, founder interviews, and customer case study documentaries.",
    fullOverview: "Video is the single most powerful medium to sell real estate and high-value services. Himastech produces cinematic property walkthroughs, 4K aerial drone showcases, founder interviews, and high-energy short-form Reels that captivate audiences and trigger emotional buying decisions.",
    strategicBenefits: [
      {
        title: "4K Drone & Architectural Cinematography",
        description: "Capture villas, high-rises, and commercial amenities from cinematic angles that showcase scale and prestige."
      },
      {
        title: "Psychological 3-Second Hooks",
        description: "Scripted specifically to hook fast-scrolling mobile viewers and keep retention rates above 80%."
      },
      {
        title: "Social Proof Documentaries",
        description: "Founder and client case study videos that dissolve buyer skepticism and prove tangible ROI."
      },
      {
        title: "Multi-Platform Repurposing",
        description: "One filming session generates 10+ short-form cutdowns for Instagram Reels, YouTube Shorts, and Meta ads."
      }
    ],
    impact: "+450% Watch Time",
    icon: Video,
    accent: "from-amber-500/20 to-rose-500/5",
    border: "hover:border-amber-500/40",
    gradientText: "from-amber-400 via-orange-300 to-rose-400",
    features: [
      "4K Drone Aerial & Architectural Shoots",
      "Psychology-Driven 3s Hook Scriptwriting",
      "Motion Graphics & Kinetic Typography FX",
      "High-Velocity Short-Form Reels & Shorts"
    ],
    playbook: [
      {
        step: "01",
        title: "Pre-Production & Hook Scriptwriting",
        detail: "Develop storyboards, psychology-backed opening hooks, and high-retention narrative arcs for commercial shoots."
      },
      {
        step: "02",
        title: "On-Location 4K Cinema & Aerial Drone Filming",
        detail: "Deploy cinema-grade camera rigs, lighting, and 4K aerial drones to capture architectural properties and operations."
      },
      {
        step: "03",
        title: "Post-Production, Color Grading & Sound FX",
        detail: "Edit with pacing, kinetic typography, dynamic sound effects, and cinematic color grades that hold viewer retention."
      },
      {
        step: "04",
        title: "Multi-Format Platform Re-Purposing",
        detail: "Slice full video shoots into 10+ short-form Reels, Shorts, ad variations, and website background loops."
      }
    ],
    techStack: ["DaVinci Resolve", "Premiere Pro", "After Effects", "DJI 4K Drone", "Sony FX3"],
    deliverables: {
      timeline: "Shoots Scheduled in 3-5 Days",
      reporting: "Full 4K Masters + Formatted Social Cutdowns",
      teamPod: "Director of Photography + Motion Video Editor",
      guarantee: "Broadcast Commercial Cinema Quality"
    }
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    badge: "Thought Leadership",
    title: "Content Marketing",
    shortTitle: "Strategic Content Marketing",
    description: "High-value editorial articles, whitepapers, industry reports, and founder thought leadership that turn casual readers into educated, high-ticket clients.",
    fullOverview: "High-net-worth buyers and decision-makers do extensive research before making multi-crore investments. Himastech writes authoritative editorial content, real estate market guides, and executive thought-leadership articles that establish your brand as the premier market voice, converting casual readers into loyal brand advocates.",
    strategicBenefits: [
      {
        title: "Establish Market Authority",
        description: "Author comprehensive market intelligence reports and investment guides that prospects save, share, and reference."
      },
      {
        title: "Organic Search Topic Clusters",
        description: "Rank for competitive industry queries with in-depth, long-form content that satisfies Google's Helpful Content guidelines."
      },
      {
        title: "Pre-Framed Sales Calls",
        description: "Educate prospective buyers on your unique advantages before they talk to your sales team, shortening closing cycles."
      },
      {
        title: "Lead Magnet Inbound Funnels",
        description: "High-value downloadable brochures and checklists that generate qualified contact details round the clock."
      }
    ],
    impact: "4.2x Organic Inbound",
    icon: FileText,
    accent: "from-emerald-500/20 to-teal-500/5",
    border: "hover:border-emerald-500/40",
    gradientText: "from-emerald-400 via-teal-300 to-cyan-300",
    features: [
      "SEO Pillar & Topic Cluster Guides",
      "High-Ticket Lead Magnets & Market Reports",
      "Executive Ghostwriting & LinkedIn Domination",
      "Industry Whitepapers & Buyer Playbooks"
    ],
    playbook: [
      {
        step: "01",
        title: "Content Matrix & Audience Pain-Point Research",
        detail: "Map every buyer question, hesitation, and objection into an editorial publishing calendar."
      },
      {
        step: "02",
        title: "Deep-Dive Pillar & Cluster Articles",
        detail: "Author comprehensive 2,500+ word guides that capture Google search rankings and position your brand as the industry authority."
      },
      {
        step: "03",
        title: "Executive Ghostwriting & LinkedIn Domination",
        detail: "Transform founder insights into viral personal brand posts that attract enterprise inquiries and partnerships."
      },
      {
        step: "04",
        title: "High-Converting Lead Magnets & E-Books",
        detail: "Package premium checklists, calculators, and reports to capture high-value prospective buyer contact info."
      }
    ],
    techStack: ["Notion", "Grammarly Business", "Ahrefs", "SurferSEO", "Google Docs"],
    deliverables: {
      timeline: "Weekly Scheduled Publishing",
      reporting: "Organic Traffic, Time-on-Page & Lead Capture",
      teamPod: "Managing Editor + Senior Copywriter",
      guarantee: "100% Original, Plagiarism-Free Content"
    }
  },
  {
    id: "whatsapp-marketing",
    slug: "whatsapp-marketing",
    badge: "Instant 60s Conversions",
    title: "WhatsApp Marketing",
    shortTitle: "WhatsApp Business Automation",
    description: "Official WhatsApp Business API integration with 24/7 automated qualification bots, broadcast promotional campaigns, and instant brochure delivery.",
    fullOverview: "In India and global markets, WhatsApp is the primary communication channel where deals get negotiated and finalized. Himastech integrates official Meta WhatsApp Business API solutions featuring green-tick verification, automated brochure delivery, intelligent buyer qualification chatbots, and compliance-guaranteed promotional broadcasts boasting 98% open rates.",
    strategicBenefits: [
      {
        title: "Sub-30s Response Time",
        description: "Engage fresh ad leads on WhatsApp within 30 seconds of submission, when buying intent is at its absolute peak."
      },
      {
        title: "98% Guaranteed Open Rates",
        description: "Deliver project launches and limited-time investment opportunities directly to your verified buyer lists."
      },
      {
        title: "24/7 Automated Qualification",
        description: "AI bots collect buyer budget, timeline, and preferred unit configurations before handing off to human sales closers."
      },
      {
        title: "Instant One-Click Site Visit Booking",
        description: "Allow prospective buyers to schedule property visits or meetings directly within the WhatsApp chat interface."
      }
    ],
    impact: "98% Open Rates",
    icon: MessageCircle,
    accent: "from-emerald-500/20 to-teal-500/5",
    border: "hover:border-emerald-500/40",
    gradientText: "from-emerald-400 via-green-300 to-teal-400",
    features: [
      "Official Green Tick API Verification Support",
      "24/7 Conversational AI Qualification Chatbot",
      "Segmented High-ROI Broadcast Drops",
      "Sub-30s Lead Routing to Senior Sales Reps"
    ],
    playbook: [
      {
        step: "01",
        title: "Official Meta WhatsApp Business API Provisioning",
        detail: "Verify business credentials, secure official green tick status, and configure enterprise webhook webhooks."
      },
      {
        step: "02",
        title: "Interactive Lead Qualification Chatbot",
        detail: "Deploy conversational decision trees that answer FAQs, verify buyer budgets, and deliver digital brochures in seconds."
      },
      {
        step: "03",
        title: "Segmented Promotional Broadcast Drops",
        detail: "Send rich media broadcasts with CTA buttons to targeted opt-in lists with 98% open rates and zero spam risk."
      },
      {
        step: "04",
        title: "Automated Calendar Site Visit & Demo Booking",
        detail: "Enable prospects to book site visits or strategy calls directly inside the WhatsApp conversation."
      }
    ],
    techStack: ["WhatsApp Business API", "Interakt", "Wati", "Zapier", "Webhooks"],
    deliverables: {
      timeline: "Setup & Integration in 48-72h",
      reporting: "Delivery, Read & Conversion Funnel Metrics",
      teamPod: "Automation Specialist + Copywriter",
      guarantee: "Official Meta API Compliance & Zero Ban Risk"
    }
  },
  {
    id: "email-marketing",
    slug: "email-marketing",
    badge: "Compounding Retention",
    title: "Email Marketing",
    shortTitle: "Email Nurturing & Automation",
    description: "Automated behavioral email flows, welcome onboarding sequences, lead nurturing drips, and re-activation campaigns that maximize customer lifetime value.",
    fullOverview: "A lead who doesn't buy immediately shouldn't be forgotten. Himastech develops sophisticated, automated behavioral email sequences that systematically nurture unconverted leads over 30, 60, and 90 days. We combine technical inbox deliverability warmup with psychology-backed copywriting to keep your brand top-of-mind until the client is ready to purchase.",
    strategicBenefits: [
      {
        title: "Long-Term Lead Monetization",
        description: "Extract maximum revenue from your existing lead database without spending extra money on acquisition ads."
      },
      {
        title: "100% Automated Nurturing",
        description: "Behavior-triggered email flows deliver the right message at the right moment based on user interactions."
      },
      {
        title: "Flawless Inbox Deliverability",
        description: "Configure SPF, DKIM, and DMARC protocols to ensure your emails reach the primary inbox rather than spam folders."
      },
      {
        title: "VIP Executive Newsletters",
        description: "Publish recurring luxury market briefings that build trust with high-net-worth investors and repeat buyers."
      }
    ],
    impact: "42x Direct Email ROI",
    icon: Mail,
    accent: "from-indigo-500/20 to-blue-500/5",
    border: "hover:border-indigo-500/40",
    gradientText: "from-indigo-400 via-blue-300 to-cyan-300",
    features: [
      "Automated Behavioral Drip Sequences",
      "High-Deliverability Inbox Domain Warmup",
      "Audience Segmentation & Dynamic Tags",
      "Revenue Attribution & Lifetime Value Tracking"
    ],
    playbook: [
      {
        step: "01",
        title: "Domain Authentication & Warmup (SPF/DKIM/DMARC)",
        detail: "Configure enterprise email authentication protocols and execute graduated warmup to guarantee 99%+ inbox placement."
      },
      {
        step: "02",
        title: "Multi-Branch Behavioral Nurturing Sequence",
        detail: "Engineer 12-stage automated drip sequences triggered by link clicks, brochure downloads, and site re-visits."
      },
      {
        step: "03",
        title: "Dynamic Audience Segmentation",
        detail: "Segment contacts by budget, interest tier, and engagement recency to send hyper-personalized offers."
      },
      {
        step: "04",
        title: "High-Ticket VIP Brand Newsletters",
        detail: "Publish recurring luxury newsletters that keep your brand top-of-mind with high-net-worth clients."
      }
    ],
    techStack: ["Klaviyo", "ActiveCampaign", "Postmark", "Mailchimp", "Litmus"],
    deliverables: {
      timeline: "Core Flows Live in 7 Business Days",
      reporting: "Open Rates, Click-Throughs & Revenue Per Email",
      teamPod: "Email Strategist + Direct-Response Copywriter",
      guarantee: "99%+ Primary Inbox Deliverability"
    }
  },
  {
    id: "ai-marketing",
    slug: "ai-marketing",
    badge: "Next-Gen Growth Engine",
    title: "AI Marketing",
    shortTitle: "AI-Powered Marketing Systems",
    description: "AI-driven content generation, predictive lead scoring, CAPI algorithmic telemetry, and AI voice agents that automate qualification and follow-up.",
    fullOverview: "Artificial Intelligence is transforming business growth from manual guesswork into automated predictability. Himastech installs proprietary AI marketing engines: custom LLM brand calibration, automated multi-variant ad creative generation, predictive lead intent scoring, and intelligent AI voice and chat agents that operate 24/7 to scale your revenue pipeline 10x faster.",
    strategicBenefits: [
      {
        title: "10x Production Velocity",
        description: "Generate 50+ localized creative and copy variations in minutes, drastically cutting creative turnaround times."
      },
      {
        title: "Predictive Lead Intent Scoring",
        description: "Machine learning algorithms analyze behavioral signals to immediately alert closers to high-budget prospects."
      },
      {
        title: "Generative Search Engine Optimization (GEO)",
        description: "Position your brand as the primary recommendation in ChatGPT, Perplexity, and AI search interfaces."
      },
      {
        title: "24/7 Autonomous Follow-Up",
        description: "AI conversational agents qualify incoming inquiries across web, WhatsApp, and social DMs without human delays."
      }
    ],
    impact: "10x Output Speed",
    icon: Cpu,
    accent: "from-cyan-500/20 to-blue-500/5",
    border: "hover:border-cyan-500/40",
    gradientText: "from-cyan-400 via-sky-300 to-indigo-400",
    features: [
      "Generative AI Copy & Creative Variations",
      "Predictive Lead Scoring & Intent Filters",
      "Algorithmic CAPI Telemetry Optimization",
      "AI Chatbot & Voice Follow-Up Automation"
    ],
    playbook: [
      {
        step: "01",
        title: "Custom LLM Knowledge Base Calibration",
        detail: "Ingest your company data, past winning ad copies, and buyer profiles into tailored AI models."
      },
      {
        step: "02",
        title: "Rapid Multi-Variant Ad Creative Generation",
        detail: "Produce 50+ localized copy variations and visual concepts in minutes, dramatically cutting creative turnaround."
      },
      {
        step: "03",
        title: "Predictive Lead Scoring & Routing",
        detail: "Use machine learning models to identify hot leads with high budget intent and immediately alert senior closers."
      },
      {
        step: "04",
        title: "Generative Search Engine Optimization (GEO)",
        detail: "Optimize your brand's digital footprint so AI platforms like Perplexity and ChatGPT recommend you first."
      }
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Midjourney v6", "Meta CAPI Gateway", "Perplexity AI"],
    deliverables: {
      timeline: "Custom AI Stack Integration in 7-10 Days",
      reporting: "Weekly Efficiency, Speed & Pipeline Attribution",
      teamPod: "AI Solutions Architect + Growth Strategist",
      guarantee: "Proprietary Data Privacy & Enterprise Security"
    }
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceItem[] {
  return allServices.filter((s) => s.slug !== currentSlug);
}

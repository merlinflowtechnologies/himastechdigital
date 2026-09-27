export interface PortfolioProject {
  slug: string;
  category: "real-estate" | "social-media" | "branding" | "ads" | "ai-videos" | "websites";
  categoryLabel: string;
  title: string;
  client: string;
  clientLocation: string;
  timeline: string;
  image: string;
  headline: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  tags: string[];
  challenge: string;
  strategy: string[];
  deliverables: string[];
  resultsSummary: string;
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
  accentColor: string;
}

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "real-estate", label: "Real Estate" },
  { id: "social-media", label: "Social Media" },
  { id: "branding", label: "Branding" },
  { id: "ads", label: "Ads" },
  { id: "ai-videos", label: "AI Videos" },
  { id: "websites", label: "Websites" },
] as const;

export const portfolioProjects: PortfolioProject[] = [
  // 1. REAL ESTATE
  {
    slug: "kokapet-sky-villas",
    category: "real-estate",
    categoryLabel: "Real Estate",
    title: "Kokapet Luxury Sky Villas",
    client: "Aura Luxury Residences & Estates",
    clientLocation: "Kokapet, Hyderabad",
    timeline: "90-Day Full Funnel Sprint",
    image: "/luxury-villa.jpg",
    headline: "₹42Cr in Luxury Villa Inventory Sold via Hyper-Local Meta & Google CAPI Funnels",
    summary: "Engineered a closed-loop digital realty engine targeting verified HNIs and NRIs across USA and Gulf corridors, resulting in 180+ verified site visits and ₹42Cr in booked sales.",
    metrics: [
      { label: "Inventory Sold", value: "₹42Cr+", subtext: "Within 90 Days of Launch" },
      { label: "Ad Campaign ROAS", value: "8.4x", subtext: "Audited Meta & Google Media" },
      { label: "Verified Site Visits", value: "180+", subtext: "Qualified HNI Buyer Tours" },
      { label: "Cost Per Site Visit", value: "₹2,450", subtext: "64% Below Market Standard" }
    ],
    tags: ["Meta Ads", "Google P-Max", "4K Drone Walkthroughs", "WhatsApp API", "Kokapet Geo-Fence"],
    challenge: "Traditional hoarding and newspaper advertisements were yielding high volumes of brokers and casual callers with an 82% bounce rate, exhausting the sales desk.",
    strategy: [
      "Deployed Meta Conversions API (CAPI) with CRM offline lead tracking to train ad algorithms on actual booked site visits rather than simple link clicks.",
      "Engineered cinematic 4K drone walkthroughs showcasing dusk villa architecture and private swimming pools with scroll-stopping 3-second hooks.",
      "Integrated 60-second automated WhatsApp Business API lead qualification bot that pre-screened buyer budgets before routing to senior relationship managers.",
      "Geo-fenced luxury IT tech parks in Financial District and international departure hubs targeting verified NRI travelers."
    ],
    deliverables: [
      "Cinematic 4K Drone Aerial Property Video",
      "Sub-Second Mobile Project Landing Page",
      "24/7 Automated WhatsApp Brochure Qualifier Bot",
      "Live Revenue Telemetry & Site Visit Attribution CRM"
    ],
    resultsSummary: "The client completely discontinued static hoardings after achieving an 8.4x return on ad spend and sold 14 premium units in under 3 months.",
    testimonial: {
      quote: "Himastech replaced our un-trackable billboard spend with a surgical HNI pipeline. We booked 180+ verified high-net-worth site visits and closed ₹42Cr in luxury units within a single quarter.",
      author: "Rajeshwar Rao",
      designation: "Managing Director, Aura Luxury Residences"
    },
    accentColor: "amber"
  },
  {
    slug: "financial-district-highrise",
    category: "real-estate",
    categoryLabel: "Real Estate",
    title: "Financial District Commercial High-Rise",
    client: "Urban Heights Infrastructure",
    clientLocation: "Financial District, Hyderabad",
    timeline: "60-Day Pre-Lease Campaign",
    image: "/realty-hero.jpg",
    headline: "240+ Verified Institutional Inquiries & 94% Pre-Lease Booking for Grade-A Office Towers",
    summary: "Built a high-intent Google Search and LinkedIn B2B enterprise acquisition funnel securing corporate leases for 350,000 sq.ft of premium office real estate.",
    metrics: [
      { label: "Pipeline Value", value: "₹68Cr", subtext: "Institutional Lease Commitments" },
      { label: "Inquiries Generated", value: "240+", subtext: "Verified CXO & Corporate Decision Makers" },
      { label: "Pre-Lease Occupancy", value: "94%", subtext: "Prior to Building Completion" },
      { label: "Search Click-Through Rate", value: "14.2%", subtext: "Google Exact Match Intent" }
    ],
    tags: ["Google Search", "LinkedIn B2B", "Commercial Real Estate", "3D Masterplan"],
    challenge: "Commercial real estate requires targeting senior C-suite decision-makers and corporate finance heads who rarely click on consumer-style advertisements.",
    strategy: [
      "Harvested commercial exact-match Google Search keywords for Grade-A office spaces and IT tech infrastructure in Hyderabad.",
      "Deployed LinkedIn Sponsored Content targeting IT Directors, Real Estate Heads, and Regional Expansion VPs.",
      "Engineered an interactive 3D floorplate calculator allowing corporate tenants to estimate seating capacity and operational ROI.",
      "Direct VIP scheduling calendar allowing immediate boardroom virtual tours with the developer."
    ],
    deliverables: [
      "Interactive 3D Floorplate Web Application",
      "Exact-Match Google Search Campaign Architecture",
      "Executive LinkedIn B2B Ad Funnel",
      "Corporate Investor Presentation Deck"
    ],
    resultsSummary: "Achieved 94% pre-lease commitments 4 months before commercial occupancy certification, creating a locked 10-year recurring lease revenue base.",
    testimonial: {
      quote: "The quality of corporate leads delivered was exceptional. Every single inquiry was a verified decision-maker with allocated expansion budgets.",
      author: "Siddharth Verma",
      designation: "Head of Commercial Leasing, Urban Heights"
    },
    accentColor: "cyan"
  },

  // 2. SOCIAL MEDIA
  {
    slug: "urban-luxe-lifestyle",
    category: "social-media",
    categoryLabel: "Social Media",
    title: "Urban Luxe Designer Living",
    client: "Urban Luxe Decor & Furnishings",
    clientLocation: "Jubilee Hills, Hyderabad",
    timeline: "Ongoing 6-Month Organic Retainer",
    image: "/branding-portfolio.jpg",
    headline: "1.8 Million Organic Reel Views & +340% Follower Surge in 60 Days",
    summary: "Transformed a luxury interior brand into an aesthetic social powerhouse through viral architectural video reels, trend audio synchronization, and conversational DM commerce.",
    metrics: [
      { label: "Organic Reel Views", value: "1.8M+", subtext: "Zero Paid Media Spend" },
      { label: "Follower Growth", value: "+340%", subtext: "From 4.2k to 18.5k Verified Fans" },
      { label: "Direct DM Inquiries", value: "2,400+", subtext: "Product Catalog Requests" },
      { label: "Organic Revenue", value: "₹28L+", subtext: "Attributed Directly to Instagram" }
    ],
    tags: ["Viral Reels", "Instagram Growth", "Aesthetic Branding", "DM Automation"],
    challenge: "The brand suffered from low social engagement, posting static product photos that were ignored by modern mobile users on Instagram.",
    strategy: [
      "Instituted a 3-second scroll-stopping video formula featuring high-contrast architectural before-and-after room reveals.",
      "Created structured content pillars: Designer BTS, Styling Hacks, and Client Home Tours.",
      "Implemented ManyChat automated DM routing that sent product price links instantly when users commented 'LUXE' on any post.",
      "Partnered with top Hyderabad luxury home lifestyle creators for authentic organic shoutouts."
    ],
    deliverables: [
      "24 High-Resolution Reels & Carousel Packages / Mo",
      "Automated ManyChat Conversational DM Funnels",
      "Influencer Seeding & Creative Strategy",
      "Weekly Social Performance & DM Revenue Reports"
    ],
    resultsSummary: "Expanded monthly organic reach by 600% and established the brand as the premier interior destination for luxury homeowners in Hyderabad.",
    testimonial: {
      quote: "Himastech made our Instagram an actual sales generator. We receive 40+ direct product inquiries every day directly through our Reels.",
      author: "Pooja Reddy",
      designation: "Creative Director, Urban Luxe"
    },
    accentColor: "amber"
  },
  {
    slug: "apex-fitness-wellness",
    category: "social-media",
    categoryLabel: "Social Media",
    title: "Apex Elite Athletics & Wellness Hub",
    client: "Apex Fitness Clubs",
    clientLocation: "Gachibowli, Hyderabad",
    timeline: "4-Month Community Campaign",
    image: "/ai-video-portfolio.jpg",
    headline: "Scaled from 5,000 to 85,000 Followers with Viral Community Storytelling",
    summary: "Built a fanatical local fitness community through trainer challenge reels, client transformation documentaries, and viral workout shorts.",
    metrics: [
      { label: "Total Follower Base", value: "85,000+", subtext: "Grown from 5,200 Baseline" },
      { label: "Average Engagement", value: "4.8%", subtext: "3x Above Industry Benchmark" },
      { label: "Annual Memberships", value: "420+", subtext: "Directly Converted from Social Funnel" },
      { label: "Local Footfall", value: "+185%", subtext: "To Gachibowli Center" }
    ],
    tags: ["Community Building", "Transformation Reels", "Micro-Influencers", "Viral Challenges"],
    challenge: "Intense competition from national gym chains with massive offline budgets meant Apex needed to win through organic digital culture.",
    strategy: [
      "Produced cinematic short-form trainer transformation documentaries highlighting real member weight loss and athletic achievements.",
      "Launched the '21-Day Apex Metabolic Challenge' on Instagram, driving viral user-generated content from 600+ participants.",
      "Automated WhatsApp lead booking offering 1-day free VIP trial passes for post engagement.",
      "Leveraged local Hyderabad fitness creators for collaborative workout takeovers."
    ],
    deliverables: [
      "Weekly High-Energy Reel Video Production",
      "Viral Social Challenge Framework & Assets",
      "Automated Free Pass Lead Routing Funnel",
      "Community Comment & DM Moderation"
    ],
    resultsSummary: "Filled membership capacity within 120 days and established a waiting list for personal training programs.",
    testimonial: {
      quote: "Our gym is completely packed. Himastech didn't just give us views; they built an engaged community that visits our gym every single day.",
      author: "Vikram Naidu",
      designation: "Founder, Apex Elite Athletics"
    },
    accentColor: "cyan"
  },

  // 3. BRANDING
  {
    slug: "aura-horizon-capital",
    category: "branding",
    categoryLabel: "Branding",
    title: "Aura Horizon Private Wealth",
    client: "Aura Horizon Capital Partners",
    clientLocation: "Banjara Hills, Hyderabad",
    timeline: "Comprehensive 8-Week Rebrand",
    image: "/branding-portfolio.jpg",
    headline: "Luxury Visual Identity & Brand System for Ultra-HNI Private Wealth Firm",
    summary: "Created a timeless, prestige brand architecture including custom gold-embossed typography, executive investor catalogs, stationary systems, and digital guidelines.",
    metrics: [
      { label: "AUM Inflow", value: "₹150Cr+", subtext: "In First 6 Months Post-Rebrand" },
      { label: "Brand Recall Rate", value: "100%", subtext: "Audited Across Target Investor Sample" },
      { label: "Investor Pitch Win Rate", value: "78%", subtext: "Institutional Pitch Approvals" },
      { label: "Brand Asset Suite", value: "65+ Assets", subtext: "Print, Digital & Spatial Guidelines" }
    ],
    tags: ["Luxury Branding", "Typography System", "Gold Foil Mockups", "Brand Architecture"],
    challenge: "The firm's dated 2012 visual identity failed to inspire confidence in ultra-high-net-worth investors managing ₹10Cr+ portfolios.",
    strategy: [
      "Engineered an iconic monogram and geometric wordmark with warm gold and deep obsidian charcoal color tokens.",
      "Produced heavy-weight cotton stationary, gold-foiled executive pitch decks, and architectural leather presentation folders.",
      "Formulated strict digital typography and spatial design rules for digital client portals and executive reports.",
      "Designed executive business cards with NFC digital vCard touch-technology for instant networking."
    ],
    deliverables: [
      "Complete 80-Page Master Brand Guidelines Manual",
      "Gold-Embossed Executive Stationary & Collateral",
      "Master Pitch Deck & Quarterly Report Templates",
      "Digital Vector Asset Kit & Font Licensing Matrix"
    ],
    resultsSummary: "Positioned the firm at the top of the Hyderabad private wealth tier, contributing to over ₹150Cr in new institutional portfolio inflows.",
    testimonial: {
      quote: "The branding Himastech engineered command immediate respect. When we hand our collateral to family office heads, the quality speaks before we even begin our presentation.",
      author: "Harish Chandra",
      designation: "Managing Partner, Aura Horizon Capital"
    },
    accentColor: "amber"
  },
  {
    slug: "terra-bella-estates",
    category: "branding",
    categoryLabel: "Branding",
    title: "Terra Bella Luxury Estates",
    client: "Terra Bella Developers",
    clientLocation: "Mokila, Hyderabad",
    timeline: "6-Week Identity Sprint",
    image: "/realty-hero.jpg",
    headline: "Brand Architecture, Logo Identity & Billboard Design for ₹100Cr Villa Community",
    summary: "Engineered the complete brand identity from naming and logo symbolism to highway hoardings, master brochure design, and luxury project signage.",
    metrics: [
      { label: "Project Sell-Through", value: "100%", subtext: "All 48 Villas Booked" },
      { label: "Highway Billboard Recall", value: "88%", subtext: "Gachibowli to Mokila Corridor" },
      { label: "Luxury Catalog Downloads", value: "3,800+", subtext: "Digital Lookbook Inquiries" },
      { label: "Avg Unit Ticket", value: "₹2.5Cr+", subtext: "Premium Gated Community" }
    ],
    tags: ["Real Estate Branding", "Billboard Design", "Master Catalog", "Logo Symbolism"],
    challenge: "Standing out in the crowded Mokila villa corridor required an aspirational, nature-integrated brand identity that conveyed serenity and prestige.",
    strategy: [
      "Crafted an organic-geometric leaf-and-arch motif symbolizing sustainable luxury living.",
      "Selected an earth-toned luxury palette with olive greens, champagne golds, and deep charcoals.",
      "Designed large-format highway hoardings with minimal, high-impact typography legible at 80 km/h.",
      "Printed a hardbound linen-textured project catalog distributed to premium airport lounges."
    ],
    deliverables: [
      "Full Project Brand Identity & Logo Guidelines",
      "12+ High-Impact Highway Hoarding Designs",
      "Hardbound Master Villa Catalog & Digital PDF",
      "On-Site Experience Center Signage System"
    ],
    resultsSummary: "All 48 luxury villas sold out 6 months ahead of construction schedule with zero discounting.",
    testimonial: {
      quote: "Himastech gave our project an unforgettable soul. The hoarding creatives and brochures set a new benchmark for villa branding in Hyderabad.",
      author: "K. Murali Mohan",
      designation: "Director, Terra Bella Developers"
    },
    accentColor: "cyan"
  },

  // 4. ADS
  {
    slug: "zenith-meta-ad-scaling",
    category: "ads",
    categoryLabel: "Ads",
    title: "Zenith Performance Ad Scaling",
    client: "Zenith D2C Wellness",
    clientLocation: "National D2C Brand",
    timeline: "90-Day Scaling Sprint",
    image: "/ai-video-portfolio.jpg",
    headline: "Scaled from ₹5L/mo to ₹45L/mo Meta Ad Spend at 5.2x Blended ROAS",
    summary: "Deployed Advantage+ AI broad campaigns and a high-velocity Dynamic Creative Testing (DCT) framework to achieve explosive, profitable national scale.",
    metrics: [
      { label: "Monthly Ad Spend", value: "₹45L", subtext: "Scaled from ₹5L Baseline" },
      { label: "Blended ROAS", value: "5.2x", subtext: "On 90-Day Trailing Spend" },
      { label: "Cost Per Acquisition", value: "-42%", subtext: "Reduced from ₹1,200 to ₹690" },
      { label: "New Monthly Customers", value: "6,500+", subtext: "Verified Order Transactions" }
    ],
    tags: ["Meta Ads", "Dynamic Creative Testing", "Advantage+", "Direct-Response"],
    challenge: "The client was stuck at ₹5L/month spend; whenever they tried scaling budgets, cost-per-acquisition doubled and ROAS dropped below break-even.",
    strategy: [
      "Replaced micro-interest targeting with broad Advantage+ AI and server-side CAPI telemetry.",
      "Built a weekly creative testing sprint testing 20+ UGC hooks, emotional pain-point angles, and comparison tables.",
      "Scaled winning creative assets vertically in standalone scaling campaigns with automated rules.",
      "Engineered post-purchase 1-click upsell funnels that lifted Average Order Value (AOV) by 32%."
    ],
    deliverables: [
      "Dynamic Creative Testing (DCT) Engine",
      "Server-Side Meta CAPI Gateway Integration",
      "Weekly High-Volume Video & Static Ad Batches",
      "Real-Time Triple Whale Attribution Setup"
    ],
    resultsSummary: "Generated over ₹2.3Cr in incremental revenue within 90 days while maintaining a profitable 5.2x return on ad spend.",
    testimonial: {
      quote: "Himastech solved our ad scaling bottleneck. We went from struggling at ₹5L a month to easily spending ₹45L every single month with predictable profits.",
      author: "Aditya Mehta",
      designation: "Founder, Zenith Wellness"
    },
    accentColor: "amber"
  },
  {
    slug: "gachibowli-search-ads",
    category: "ads",
    categoryLabel: "Ads",
    title: "Gachibowli High-Intent Search Ads",
    client: "Prestige Commercial Suites",
    clientLocation: "Gachibowli, Hyderabad",
    timeline: "Ongoing Performance Campaign",
    image: "/realty-hero.jpg",
    headline: "Dominating Top 3 Google Search Positions for Commercial Real Estate",
    summary: "Captured bottom-funnel commercial office inquiries through exact-match keyword architecture, negative keyword filtering, and call-only extensions.",
    metrics: [
      { label: "Conversion Rate", value: "34.2%", subtext: "Search Click-to-Inquiry Rate" },
      { label: "Target ROAS", value: "9.2x", subtext: "Closed Lease Value Attribution" },
      { label: "Cost Per Qualified Lead", value: "₹380", subtext: "55% Below Industry Average" },
      { label: "Closed Lease Value", value: "₹18Cr+", subtext: "Attributed to Search Funnel" }
    ],
    tags: ["Google Search", "Exact Match", "Negative Keywords", "Call Extensions"],
    challenge: "High competition on Google Ads for office space keywords was draining budget on generic searches like 'coworking day pass' rather than multi-year leases.",
    strategy: [
      "Audited and blocked 1,200+ negative keyword phrases (cheap, day pass, shared desk, residential).",
      "Built dedicated exact-match ad groups with dynamic keyword insertion matching user city and square-footage queries.",
      "Deployed call-only extensions that routed phone calls directly to commercial leasing directors.",
      "Optimized landing page load speed to 0.8 seconds to achieve a 10/10 Google Quality Score."
    ],
    deliverables: [
      "Exact-Match Google Ads Structure",
      "Comprehensive Negative Keyword Filter Matrix",
      "High-Converting Landing Page with Sub-1s Speed",
      "Call Tracking & CRM Webhook Integration"
    ],
    resultsSummary: "Reduced cost per qualified lease inquiry by 55% while securing ₹18Cr in closed commercial lease contracts.",
    testimonial: {
      quote: "Our Google Ads went from being a money pit to our most reliable deal-closing channel. Every lead is a real business looking for multi-year office space.",
      author: "Naveen Prasad",
      designation: "Director of Asset Management, Prestige Suites"
    },
    accentColor: "cyan"
  },

  // 5. AI VIDEOS
  {
    slug: "ai-architectural-walkthroughs",
    category: "ai-videos",
    categoryLabel: "AI Videos",
    title: "Hyper-Realistic Architectural AI Walkthroughs",
    client: "Vanguard Realty Developers",
    clientLocation: "Kokapet, Hyderabad",
    timeline: "30-Day Generative AI Video Project",
    image: "/luxury-villa.jpg",
    headline: "Producing 20+ Cinematic 4K Property Walkthrough Videos with Generative AI in 48 Hours",
    summary: "Leveraged generative AI diffusion models to transform static 2D elevation blueprints into photorealistic 4K cinematic property videos before construction began.",
    metrics: [
      { label: "Production Cost", value: "-85%", subtext: "Versus Traditional 3D Studios" },
      { label: "Delivery Speed", value: "48 Hours", subtext: "Versus 6-8 Weeks Standard" },
      { label: "Total Video Views", value: "2.4M+", subtext: "Across Meta, YouTube & TikTok" },
      { label: "Pre-Launch Leads", value: "1,200+", subtext: "Generated Prior to Groundbreak" }
    ],
    tags: ["Generative AI Video", "Diffusion Models", "Virtual Real Estate", "Photorealism"],
    challenge: "Traditional 3D animation studios quoted ₹15L and 8 weeks for video renders, delaying project pre-sales and draining the developer's marketing budget.",
    strategy: [
      "Trained generative AI visual models on the architectural CAD blueprints and interior finishes.",
      "Synthesized camera fly-through sequences simulating golden hour, dusk, and night lighting conditions.",
      "Generated multi-lingual AI voice narration in English, Hindi, and Telugu tailored to diverse NRI buyer demographics.",
      "Rendered in full 4K 60fps format with dynamic sound design and ambient water effects."
    ],
    deliverables: [
      "20 Cinematic 4K Property Walkthrough Variations",
      "Multilingual AI Voiceover Tracks in 3 Languages",
      "Social-Ready 9:16 Vertical Cutdowns for Reels & Shorts",
      "Interactive Virtual Tour Embed for Project Website"
    ],
    resultsSummary: "Delivered 20 cinematic videos in 48 hours at 15% of traditional cost, generating 1,200+ qualified pre-launch inquiries.",
    testimonial: {
      quote: "What traditional studios took two months to deliver, Himastech generated in two days with unbelievable cinematic quality. It completely transformed our pre-sales.",
      author: "Anil K. Varma",
      designation: "VP Marketing, Vanguard Realty"
    },
    accentColor: "amber"
  },
  {
    slug: "ai-video-ad-engine",
    category: "ai-videos",
    categoryLabel: "AI Videos",
    title: "Automated AI Video Ad Engine",
    client: "Lumina Smart Appliances",
    clientLocation: "Pan-India D2C",
    timeline: "60-Day Automated AI Pipeline",
    image: "/ai-video-portfolio.jpg",
    headline: "50+ AI-Generated Video Ad Variations Testing Angles and Hooks at Scale",
    summary: "Deployed automated AI video generation pipeline creating localized, psychology-driven video ads with synthetic avatars and high-retention hooks.",
    metrics: [
      { label: "Hook Retention", value: "+38%", subtext: "3-Second Video Scroll-Stop" },
      { label: "Campaign ROAS", value: "4.6x", subtext: "Blended Meta Video Ads" },
      { label: "Production Cost", value: "-65%", subtext: "Eliminated Live Studio Shoots" },
      { label: "Ad Variations Tested", value: "50+ Weekly", subtext: "Iterative Testing Speed" }
    ],
    tags: ["AI Video Engine", "Synthetic Avatars", "Automated Scripting", "Direct-Response"],
    challenge: "Creative fatigue was burning out ad sets after 10 days, and producing live-action shoots every week was logistically impossible.",
    strategy: [
      "Built custom AI pipeline generating direct-response scripts targeting different buyer personas.",
      "Used hyper-realistic synthetic video avatars delivering localized hooks with authentic voice intonations.",
      "Automated dynamic background swapping matching regional customer environments.",
      "Programmed automated video rendering directly linked to Meta ad campaign creation."
    ],
    deliverables: [
      "Automated AI Video Production Pipeline",
      "50+ Weekly Localized Video Ad Creatives",
      "Multi-Angle Problem-Solution Hook Matrix",
      "Real-Time Creative Fatigue Dashboard"
    ],
    resultsSummary: "Eliminated creative fatigue entirely, maintaining a 4.6x ROAS over 60 consecutive days of scaling.",
    testimonial: {
      quote: "The ability to produce 50 new video ads every week using AI without hiring actors or studio crews gave us an unfair competitive advantage.",
      author: "Deepak Sharma",
      designation: "CMO, Lumina Appliances"
    },
    accentColor: "cyan"
  },

  // 6. WEBSITES
  {
    slug: "merlinflow-saas-portal",
    category: "websites",
    categoryLabel: "Websites",
    title: "Merlinflow ERP & Enterprise SaaS Portal",
    client: "Merlinflow Technologies Private Limited",
    clientLocation: "Hyderabad, India",
    timeline: "3-Week Turnkey Build",
    image: "/branding-portfolio.jpg",
    headline: "Sub-Second Enterprise SaaS Web App with Interactive Product Demos and Lead Telemetry",
    summary: "Architected a high-performance Next.js enterprise web application with dark luxury aesthetics, automated lead routing, and sub-second load speeds.",
    metrics: [
      { label: "Load Speed", value: "0.9s", subtext: "Sub-Second Core Web Vitals" },
      { label: "Demo Bookings", value: "+180%", subtext: "Lift in Qualified Inquiries" },
      { label: "Google Lighthouse", value: "98/100", subtext: "Performance & Best Practices" },
      { label: "Mobile Bounce Rate", value: "-45%", subtext: "Frictionless Responsive UX" }
    ],
    tags: ["Next.js", "Enterprise SaaS", "Tailwind CSS", "Interactive Demos", "Sub-Second Speed"],
    challenge: "The previous WordPress website was sluggish (4.8s load time), suffered from plugin security vulnerabilities, and converted poorly on mobile.",
    strategy: [
      "Re-engineered the entire web architecture on Next.js App Router with server-side rendering (SSR) and edge caching.",
      "Implemented a sleek dark luxury UI with glassmorphic cards, gold highlights, and buttery 60fps Framer Motion animations.",
      "Built interactive product tour modals allowing visitors to experience ERP workflows without signing up.",
      "Integrated direct WhatsApp and CRM webhooks for instant sales team notifications."
    ],
    deliverables: [
      "Custom Next.js Enterprise Web Platform",
      "Interactive Product Demo Architecture",
      "100% Green Google Core Web Vitals",
      "Automated Lead Notification Telemetry"
    ],
    resultsSummary: "Lifted inbound enterprise demo bookings by 180% within 30 days of launch while cutting server hosting costs by 70%.",
    testimonial: {
      quote: "Our new website looks like a billion-dollar Silicon Valley SaaS platform. It loads instantly on mobile and our demo conversion rate skyrocketed by 180%.",
      author: "Kishore Patel",
      designation: "Executive Strategic Director, Merlinflow Technologies"
    },
    accentColor: "cyan"
  },
  {
    slug: "signature-villas-website",
    category: "websites",
    categoryLabel: "Websites",
    title: "Signature Villas Interactive Masterplan Portal",
    client: "Signature Builders & Developers",
    clientLocation: "Hyderabad, India",
    timeline: "2-Week Rapid Launch",
    image: "/luxury-villa.jpg",
    headline: "High-Velocity Property Launch Website with 3D Interactive Masterplans & WhatsApp Integration",
    summary: "Engineered a luxury real estate launch website featuring interactive villa unit availability, 3D masterplans, and 1-click digital brochure downloads.",
    metrics: [
      { label: "Conversion Rate", value: "24.6%", subtext: "Visitor-to-Lead Ratio" },
      { label: "Mobile Load Speed", value: "1.1s", subtext: "Optimized for 4G/5G Connections" },
      { label: "Brochure Downloads", value: "4,500+", subtext: "Delivered via Automated WhatsApp" },
      { label: "Pre-Launch Site Visits", value: "210+", subtext: "Directly Booked on Portal" }
    ],
    tags: ["Next.js", "Interactive Masterplan", "Real Estate Portal", "WhatsApp Automation"],
    challenge: "The developer needed an ultra-luxurious, lightning-fast web portal deployed in under two weeks for a major high-stakes villa launch event.",
    strategy: [
      "Built a high-performance Next.js web application optimized for mobile smartphone browsing.",
      "Integrated an interactive SVG/3D masterplan where visitors can tap on individual villa plots to inspect floorplans and specifications.",
      "Created a frictionless 1-field phone number capture that delivers the master digital brochure directly to WhatsApp in 5 seconds.",
      "Implemented live countdown scarcity triggers and video background loops."
    ],
    deliverables: [
      "Custom High-Speed Next.js Realty Launch Web App",
      "Interactive Villa Masterplan & Floorplan Viewer",
      "Automated WhatsApp Instant Brochure Delivery",
      "Live Lead Telemetry & Sales CRM Integration"
    ],
    resultsSummary: "Delivered 4,500+ brochure downloads and 210+ booked site visits, helping sell out 85% of villa units during the launch weekend.",
    testimonial: {
      quote: "The interactive masterplan was a game-changer. Clients were selecting their preferred villa plots on their phones before even stepping foot in our sales lounge.",
      author: "Ramesh Goud",
      designation: "VP Sales, Signature Builders"
    },
    accentColor: "amber"
  }
];

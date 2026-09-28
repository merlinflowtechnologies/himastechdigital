export interface ClientTestimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  clientPhoto: string;
  companyLogo: string;
  projectSlug?: string;
  projectTitle: string;
  category: "Real Estate" | "Technology" | "Branding & Social" | "High-Ticket Ads";
  rating: number;
  date: string;
  verified: boolean;
  testimonial: string;
  highlightMetric: string;
  location: string;
  verifiedBadgeText: string;
}

export const genuineClientTestimonials: ClientTestimonial[] = [
  {
    id: "testimonial-aura-luxury",
    name: "Rajeshwar Rao",
    designation: "Managing Director",
    company: "Aura Luxury Residences & Estates",
    clientPhoto: "/testimonials/rajeshwar-rao.jpg",
    companyLogo: "/testimonials/logos/aura-luxury.svg",
    projectSlug: "kokapet-sky-villas",
    projectTitle: "Kokapet Luxury Sky Villas & Penthouses",
    category: "Real Estate",
    rating: 5,
    date: "August 2024",
    verified: true,
    verifiedBadgeText: "Verified Client • Launch Campaign",
    testimonial: "Himastech transformed our project launch. Instead of generic low-quality leads, our sales team was booking qualified site visits directly on WhatsApp. Accelerating our booking timeline was directly driven by Kishore Patel and his team's hyper-local digital systems.",
    highlightMetric: "45+ Verified Site Visits in 30 Days",
    location: "Kokapet, Hyderabad"
  },
  {
    id: "testimonial-merlinflow",
    name: "Adduri Sai Kishore",
    designation: "Chief Executive Officer",
    company: "Merlinflow Technologies Private Limited",
    clientPhoto: "/testimonials/sai-kishore.jpg",
    companyLogo: "/testimonials/logos/merlinflow.svg",
    projectSlug: "the-solitaire-experience-portal",
    projectTitle: "Enterprise Cloud ERP Suites & Web Architecture",
    category: "Technology",
    rating: 5,
    date: "September 2024",
    verified: true,
    verifiedBadgeText: "Strategic Alliance Partner",
    testimonial: "In our strategic collaboration with Himastech, Kishore Patel has combined technology rigor with high-conversion marketing. Our product demo bookings rose by 180% with flawless speed, live telemetry, and zero wasted ad spend.",
    highlightMetric: "+180% Product Demo Bookings",
    location: "Nagole, Hyderabad"
  },
  {
    id: "testimonial-greenstone",
    name: "M. Venkat Rao",
    designation: "Head of Sales & Marketing",
    company: "Greenstone Infra Projects",
    clientPhoto: "/testimonials/venkat-rao.jpg",
    companyLogo: "/testimonials/logos/greenstone.svg",
    projectSlug: "jubilee-greens-plots",
    projectTitle: "Jubilee Greens Eco-Luxury Villa Plots",
    category: "Real Estate",
    rating: 5,
    date: "October 2024",
    verified: true,
    verifiedBadgeText: "Verified Client • Plotted Layout",
    testimonial: "Their hyper-local geo-targeted video ads and weekend site-visit blitz generated over 120+ genuine walk-ins. We accelerated our plotted community sales significantly without relying on expensive offline billboards.",
    highlightMetric: "65+ Plotted Units Booked",
    location: "Shankarpally, Hyderabad"
  },
  {
    id: "testimonial-urban-heights",
    name: "Siddharth Verma",
    designation: "Head of Commercial Leasing",
    company: "Urban Heights Infrastructure",
    clientPhoto: "/testimonials/siddharth-verma.jpg",
    companyLogo: "/testimonials/logos/urban-heights.svg",
    projectSlug: "financial-district-highrise",
    projectTitle: "Financial District Commercial Grade-A Towers",
    category: "High-Ticket Ads",
    rating: 5,
    date: "July 2024",
    verified: true,
    verifiedBadgeText: "Verified Client • Commercial Project",
    testimonial: "Commercial real estate requires reaching verified business decision-makers. Himastech's exact-match Google Search and LinkedIn architecture secured 85+ verified business inquiries and consistent tour bookings.",
    highlightMetric: "85+ Corporate Inquiries • 3.4x ROAS",
    location: "Financial District, Hyderabad"
  },
  {
    id: "testimonial-aura-horizon",
    name: "Harish Chandra",
    designation: "Managing Partner",
    company: "Aura Horizon Capital Partners",
    clientPhoto: "/testimonials/harish-chandra.jpg",
    companyLogo: "/testimonials/logos/aura-horizon.svg",
    projectSlug: "aura-horizon-capital",
    projectTitle: "Wealth Advisory Portal & Brand Architecture",
    category: "Branding & Social",
    rating: 5,
    date: "November 2024",
    verified: true,
    verifiedBadgeText: "Verified Client • Advisory Firm",
    testimonial: "The professional visual identity and investor collateral Himastech engineered command immediate credibility. When we present to clients and investors, the quality of our brand speaks before we even begin our presentation.",
    highlightMetric: "+240% Inbound Inquiries",
    location: "Banjara Hills, Hyderabad"
  },
  {
    id: "testimonial-urban-luxe",
    name: "Pooja Reddy",
    designation: "Creative Director",
    company: "Urban Luxe Decor & Furnishings",
    clientPhoto: "/testimonials/pooja-reddy.jpg",
    companyLogo: "/testimonials/logos/urban-luxe.svg",
    projectSlug: "urban-luxe-lifestyle",
    projectTitle: "Aesthetic Social Media & DM Commerce",
    category: "Branding & Social",
    rating: 5,
    date: "December 2024",
    verified: true,
    verifiedBadgeText: "Verified Client • Retail & Interiors",
    testimonial: "Himastech made our social media an actual sales generator. Through architectural before-and-after reels and conversational DM funnels, we convert daily views into consistent direct product inquiries and design contracts.",
    highlightMetric: "320k+ Views • 3.6x ROAS",
    location: "Jubilee Hills, Hyderabad"
  }
];

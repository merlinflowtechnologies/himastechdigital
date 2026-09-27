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
    verifiedBadgeText: "Verified Client • Executed Contract",
    testimonial: "Himastech transformed our Kokapet project launch. Instead of generic leads, our sales team was booking qualified NRI buyers directly on WhatsApp. Selling out ₹48Cr of villa inventory ahead of schedule was directly driven by Kishore Patel and his team's hyper-local digital systems.",
    highlightMetric: "₹48Cr Inventory Sold in 90 Days",
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
    testimonial: "In our strategic collaboration with Himastech, Kishore Patel has combined enterprise technology rigor with high-conversion marketing. Our enterprise product demo bookings rose by 180% with flawless speed, live telemetry, and zero wasted ad spend.",
    highlightMetric: "+180% Enterprise Demo Bookings",
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
    verifiedBadgeText: "Verified Client • 140 Units Closed",
    testimonial: "Their hyper-local geo-targeted video ads and weekend site-visit blitz generated over 380 walk-ins. We sold out all 140 luxury plots in just three months without spending a single rupee on print hoardings.",
    highlightMetric: "140+ Plots Sold in 90 Days",
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
    verifiedBadgeText: "Verified Client • Commercial Lease",
    testimonial: "Commercial real estate requires reaching verified corporate decision-makers. Himastech's exact-match Google Search and executive LinkedIn architecture secured 240+ verified institutional inquiries and closed 94% pre-lease commitments.",
    highlightMetric: "₹68Cr Lease Pipeline • 94% Pre-Leased",
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
    projectTitle: "Ultra-HNI Wealth Portal & Brand Architecture",
    category: "Branding & Social",
    rating: 5,
    date: "November 2024",
    verified: true,
    verifiedBadgeText: "Verified Client • Wealth Firm",
    testimonial: "The luxury visual identity and investor collateral Himastech engineered command immediate prestige. When we present to family offices and ultra-HNIs, the quality of our brand speaks before we even begin our presentation.",
    highlightMetric: "₹150Cr+ Institutional Inflows",
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
    verifiedBadgeText: "Verified Client • E-Commerce & Retail",
    testimonial: "Himastech made our Instagram an actual sales generator. Through architectural before-and-after reels and automated conversational DM funnels, we convert daily views into 40+ direct product inquiries and high-ticket interior contracts.",
    highlightMetric: "1.8M+ Views • ₹28L Direct Revenue",
    location: "Jubilee Hills, Hyderabad"
  }
];

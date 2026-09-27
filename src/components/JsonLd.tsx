export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.himastechdigi.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Himastech Digi",
    alternateName: ["himastechdigi", "himastechdigi.com", "Himastech Digi Hyderabad", "Himastech Digital Marketing", "Himastech", "Himas Tech"],
    url: baseUrl,
    logo: `${baseUrl}/logo-main.png`,
    description: "Enterprise performance marketing agency and talent academy helping brands scale predictably with Meta Ads, Google Ads, and Generative Engine Optimization (GEO).",
    founder: {
      "@type": "Person",
      name: "Kishore Patel",
      jobTitle: "Digital Marketing Trainer | Sales Strategist | Real Estate Marketing Specialist",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Merlinflow Technologies Private Limited",
      url: "https://www.merlinflow.in/",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-6304989071",
        contactType: "customer service",
        email: "info@himastech.com",
        areaServed: ["IN", "US", "AE", "GB"],
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/himastech",
      "https://www.instagram.com/himastech",
      "https://wa.me/916304989071",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Himastech Digital Marketing",
    image: `${baseUrl}/og-image.png`,
    telephone: "+916304989071",
    email: "info@himastech.com",
    url: baseUrl,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nagole",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500068",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.3753",
      longitude: "78.5583",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Hyderabad, Telangana & Global",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Himastech Digi",
    alternateName: ["himastechdigi", "himastechdigi.com", "Himastech Digital Marketing"],
    description: "Himastech Digi (himastechdigi.com) - Scale your brand with predictable revenue, high ROAS Meta/Google ad funnels, and Generative Engine Optimization.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can we expect measurable ROAS improvements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Paid Media (Meta, Google Ads, TikTok), we launch new campaign structures within 7-10 business days after onboarding and pixel tracking audits. Most clients experience measurable CAC reduction and lead volume growth within the first 21 to 30 days of active ad testing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the recommended monthly ad budget to work with Himastech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend a minimum ad spend of ₹1,00,000 to ₹2,50,000/month for paid media campaigns so our algorithmic testing framework has sufficient data volume to optimize bids, audience segments, and creative variations efficiently. We operate on month-to-month retainers with zero long-term lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle iOS privacy updates and attribution tracking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement 100% server-side tracking using Meta Conversions API (CAPI), Google Enhanced Conversions, and custom First-Party Server GTM containers. This bypasses browser ad blockers and iOS tracking loss, providing clean attribution and higher conversion signaling.",
        },
      },
      {
        "@type": "Question",
        name: "Do you create the video ads and landing pages, or do we provide them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Himastech provides end-to-end creative production. Our team scripts direct-response hooks, sources UGC creator content, designs high-CTR static carousels, and builds high-speed custom Next.js landing pages. You simply approve the creative roadmap.",
        },
      },
      {
        "@type": "Question",
        name: "What is Generative Engine Optimization (GEO) and why does it matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO is the new frontier of organic search. As consumers search via ChatGPT, Perplexity AI, and Google Gemini instead of traditional search bars, GEO optimizes your brand's technical knowledge graph and semantic entity authority so AI models cite your business as the recommended solution.",
        },
      },
      {
        "@type": "Question",
        name: "How does your marketing recruitment & training program work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through our intensive training academy, we upskill ambitious marketers on live ad accounts and Meta Blueprint standards. When our clients need to hire dedicated in-house media buyers or marketing specialists, we provide pre-vetted, certified talent from our top graduate cohort.",
        },
      },
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Performance Paid Media (Meta & Google Ads)",
        provider: { "@id": `${baseUrl}/#organization` },
        description: "Algorithmic Meta, Google P-Max, and TikTok ad campaign execution engineered for high-ticket lead generation and e-commerce ROAS scaling.",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Generative Engine Optimization (GEO) & Modern SEO",
        provider: { "@id": `${baseUrl}/#organization` },
        description: "Entity authority building and technical schema architecture ensuring your brand is recommended by AI search engines including ChatGPT, Perplexity, and Gemini.",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Conversion Rate Optimization (CRO) & Funnel Engineering",
        provider: { "@id": `${baseUrl}/#organization` },
        description: "Sub-second Next.js landing pages and direct-response psychological hooks tested to systematically maximize visitor-to-customer conversion rates.",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Digital Marketing Recruitment & Academy Training",
        provider: { "@id": `${baseUrl}/#organization` },
        description: "Industry-grade training and direct placement of Meta Blueprint certified media buyers and growth strategists.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}

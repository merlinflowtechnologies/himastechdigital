import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AIChatbot } from "@/components/AIChatbot";
import { JsonLd } from "@/components/JsonLd";
import { MobileBottomCta } from "@/components/MobileBottomCta";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.himastechdigi.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "HIMASTECH — Digital Realty Marketing | We Make Real Estate Projects Visible",
    template: "%s | Himastech Digi",
  },
  description:
    "Himastech helps real-estate companies and businesses build their digital brand, generate leads and improve their marketing using digital + AI solutions. Real Estate Marketing | Digital Marketing | AI Marketing | Training.",
  keywords: [
    "HIMASTECH Digital Realty Marketing",
    "Digital Realty Marketing Hyderabad",
    "Real Estate Digital Marketing Agency",
    "Himastech Digi",
    "himastechdigi",
    "himastechdigi.com",
    "Real Estate Lead Generation",
    "Builders Marketing Agency Hyderabad",
    "Performance Marketing Agency Hyderabad",
    "Digital Marketing Agency Hyderabad",
    "Meta Ads Agency India",
    "Google Ads ROAS",
    "Generative Engine Optimization",
    "GEO AI Search",
    "Conversion Rate Optimization",
    "Digital Marketing Training Hyderabad",
    "Merlinflow Technologies",
    "Kishore Patel",
  ],
  authors: [{ name: "Himastech Digi", url: baseUrl }],
  creator: "Himastech Digi & Merlinflow Technologies",
  publisher: "Himastech Digi",
  alternates: {
    canonical: `${baseUrl}`,
    languages: {
      "en-IN": `${baseUrl}`,
      "en-US": `${baseUrl}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Himastech Digi",
    title: "Himastech Digi | Data-Driven Digital Marketing & Performance Agency",
    description:
      "Himastech Digi (himastechdigi.com) scales your brand predictably with data-driven Meta & Google ad funnels, Generative Engine Optimization (GEO), and elite performance marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himastech Digital Marketing Ecosystem",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himastech Digital Marketing Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himastech | Data-Driven Digital Marketing & Performance Agency",
    description:
      "Scale your brand predictably with data-driven Meta & Google ad funnels, Generative Engine Optimization (GEO), and elite performance marketing.",
    images: ["/og-image.png"],
    creator: "@himastech",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "i5JgCwKKwuqsYwNCKHv9Lhjn5qihEqFsj2x88PM1HNw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col relative bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Global Floating Communication & Mobile Bottom CTA */}
        <WhatsAppWidget />
        <AIChatbot />
        <MobileBottomCta />
      </body>
    </html>
  );
}


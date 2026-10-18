import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AIChatbot } from "@/components/AIChatbot";
import { JsonLd } from "@/components/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://himastechdigi.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "HIMASTECH Digital Realty Marketing | Professional Real Estate Marketing & Digital Skills",
    template: "%s | HIMASTECH Digital Realty Marketing",
  },
  description:
    "HIMASTECH Digital Realty Marketing provides high-impact property marketing, luxury brand architecture, performance advertising funnels, and expert digital skills training.",
  keywords: [
    "HIMASTECH",
    "HIMASTECH Digital Marketing",
    "Himastech Digi",
    "HIMASTECH Telugu courses",
    "Surekha Mam digital marketing",
    "Kishore Patel real estate marketing",
    "MS Excel Telugu",
    "Affiliate marketing Telugu",
    "Meesho reselling in Telugu",
    "AI faceless YouTube channel",
    "Real Estate Digital Marketing Hyderabad",
    "Canva training Hyderabad",
    "Merlinflow Technologies"
  ],
  authors: [{ name: "HIMASTECH Digital Marketing", url: baseUrl }],
  creator: "HIMASTECH Digital Marketing & Merlinflow Technologies",
  publisher: "HIMASTECH Digital Marketing",
  alternates: {
    canonical: `${baseUrl}`,
    languages: {
      "en-IN": `${baseUrl}`,
      "te-IN": `${baseUrl}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "HIMASTECH Digital Marketing",
    title: "HIMASTECH Digital Marketing | Future-Ready Digital Skills & Realty Marketing",
    description:
      "Master practical digital marketing, high-ticket real estate sales funnels, AI video tools, and performance ad systems with live mentoring.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HIMASTECH Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMASTECH Digital Marketing | Future-Ready Digital Skills & Realty Marketing",
    description:
      "Master practical digital marketing, high-ticket real estate sales funnels, AI video tools, and performance ad systems with live mentoring.",
    images: ["/og-image.png"],
    creator: "@himastech_digitalmarketing",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col relative bg-white text-slate-900 selection:bg-[#f15a22] selection:text-white`}>
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Global AI Chatbot Assistant */}
        <AIChatbot />
      </body>
    </html>
  );
}

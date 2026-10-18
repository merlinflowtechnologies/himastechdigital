import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  Clock, 
  Building2, 
  Server, 
  Sparkles,
  Cookie,
  ChevronRight,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | 26-Point Data Governance Policy | Himastech",
  description:
    "Official 26-point Privacy Policy and data protection standards for Himastech Digital Marketing. Full compliance with Indian DPDP Act 2023, GDPR, and Meta CAPI telemetry.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 14, 2026";

  const policiesList = [
    {
      num: "01",
      title: "Scope & Commitment to Data Protection",
      content: (
        <p>
          This Privacy Policy outlines how <strong>Himastech Digital Marketing</strong> in alliance with <strong>Merlinflow Technologies Pvt Ltd</strong> collects, stores, processes, protects, and handles personal data across our website (himastechdigi.com), marketing consultation funnels, and enterprise services. We are dedicated to transparent, lawful, and ethical data governance.
        </p>
      ),
    },
    {
      num: "02",
      title: "Identity of the Data Fiduciary & Controller",
      content: (
        <p>
          The primary Data Fiduciary under the Indian Digital Personal Data Protection (DPDP) Act 2023 and Data Controller under the EU GDPR is <strong>Himastech Digital Marketing</strong>, headquartered in Nagole, Hyderabad, Telangana, India. Our appointed Data Protection Officer can be reached directly at <a href="mailto:info@himastechdigi.com" className="text-blue-600 underline font-semibold">info@himastechdigi.com</a>.
        </p>
      ),
    },
    {
      num: "03",
      title: "Voluntary Information Provided Directly by You",
      content: (
        <p>
          We collect personal identification details that you explicitly furnish through contact forms, growth audit inquiries, interactive ROI calculators, WhatsApp chat widgets, or intake agreements. This includes full name, business email address, WhatsApp/mobile telephone number, company name, monthly marketing spend, target revenue goals, and business website URLs.
        </p>
      ),
    },
    {
      num: "04",
      title: "Automated Device Telemetry & Log Information",
      content: (
        <p>
          When accessing our online infrastructure, our servers automatically log technical metadata including your Internet Protocol (IP) address, approximate geographic city/region, browser type, operating system version, referring URL, time-stamp of visit, network latency, and clickstream interactions across page elements.
        </p>
      ),
    },
    {
      num: "05",
      title: "Client Business Data & Ad Account Access",
      content: (
        <p>
          For active marketing retainer clients, we receive delegated, role-based administrative access to Meta Business Manager, Google Ads accounts, Shopify dashboards, CRM leads, and Google Tag Manager containers. This information is utilized solely for campaign deployment, conversion rate optimization, and weekly reporting.
        </p>
      ),
    },
    {
      num: "06",
      title: "Lawful Grounds for Processing under DPDP Act 2023 & GDPR",
      content: (
        <p>
          We process personal data strictly pursuant to legally recognized grounds: (a) Explicit Consent provided when submitting forms; (b) Contractual Performance to fulfill marketing services and deliverables; (c) Legitimate Business Interests such as fraud detection and platform uptime monitoring; and (d) Legal Obligations to maintain statutory corporate records.
        </p>
      ),
    },
    {
      num: "07",
      title: "Purposes of Telemetry & Marketing Data Processing",
      content: (
        <p>
          Your information is processed to: (1) Conduct comprehensive 30-minute growth audits; (2) Architect high-converting ad funnels on Meta and Google; (3) Deliver weekly performance reports; (4) Provide student support for the Marketing Academy; (5) Respond to customer support inquiries via WhatsApp; and (6) Prevent distributed denial-of-service (DDoS) attacks.
        </p>
      ),
    },
    {
      num: "08",
      title: "Server-Side Meta Conversions API (CAPI) Integration",
      content: (
        <p>
          Himastech leverages server-side Meta Conversions API (CAPI) to bypass third-party browser tracking limitations and ensure high attribution integrity. All sensitive customer parameters (such as email addresses or phone numbers) are cryptographically hashed using SHA-256 before server-to-server transmission to Meta platforms.
        </p>
      ),
    },
    {
      num: "09",
      title: "Google Analytics 4 & Enhanced Conversion Modeling",
      content: (
        <p>
          We utilize Google Analytics 4 (GA4) with IP masking and Google Enhanced Conversions to measure aggregate visitor journeys, session depths, and bounce rates. Data collected is processed in an aggregated, pseudonymized manner and is not combined with personally identifiable profile dossiers.
        </p>
      ),
    },
    {
      num: "10",
      title: "Cookie Policy & Tracking Technologies",
      content: (
        <p>
          Our web ecosystem uses essential session cookies, functional preference cookies, and analytical performance cookies to maintain responsive UI state, remember form preferences, and measure page load speed. We do not use intrusive cross-site tracking beacons or third-party behavioral spyware.
        </p>
      ),
    },
    {
      num: "11",
      title: "User Cookie Controls & Browser Opt-Out Mechanisms",
      content: (
        <p>
          You have the absolute right to accept, reject, or purge cookies through your web browser configuration (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge). You can also install the official Google Analytics Opt-out Browser Add-on to completely prevent telemetry reporting.
        </p>
      ),
    },
    {
      num: "12",
      title: "Zero Data Brokerage & Anti-Monetization Guarantee",
      content: (
        <p>
          Himastech enforces a permanent zero-monetization policy: We <strong>never sell, lease, rent, trade, or broker</strong> your personal information, client ad records, or customer contact numbers to any data brokers, telemarketers, or advertising networks for third-party monetization.
        </p>
      ),
    },
    {
      num: "13",
      title: "Trusted Sub-Processors & Infrastructure Providers",
      content: (
        <p>
          We share data strictly with vetted sub-processors essential to our high-availability infrastructure: Vercel Inc. (cloud edge hosting), Amazon Web Services / Google Cloud (cloud storage), Twilio / Meta Cloud API (transactional WhatsApp and SMS alerts), and Google Workspace (encrypted email communication). All sub-processors operate under strict SOC 2 Type II and ISO 27001 data processing agreements.
        </p>
      ),
    },
    {
      num: "14",
      title: "Strategic Alliance Data Handling (Merlinflow Technologies)",
      content: (
        <p>
          Under our formalized strategic alliance with <strong>Merlinflow Technologies Pvt Ltd</strong>, technical data may be processed jointly to develop bespoke enterprise ERP modules, CRM integrations, and automated webhook pipelines. Merlinflow adheres to reciprocal, non-negotiable confidentiality agreements.
        </p>
      ),
    },
    {
      num: "15",
      title: "Cloud Infrastructure Security & Server Locations",
      content: (
        <p>
          Our web applications, databases, and APIs are deployed on secure, enterprise-grade cloud server instances located in high-security data centers (including Indian nodes in Mumbai/Hyderabad and international edge points). Physical access is restricted via biometric verification and 24/7 video surveillance.
        </p>
      ),
    },
    {
      num: "16",
      title: "Cryptographic Encryption (TLS 1.3 & SHA-256)",
      content: (
        <p>
          All data in transit across our digital ecosystem is protected by robust Transport Layer Security (TLS 1.3) with 256-bit encryption. Sensitive stored information is encrypted at rest using AES-256, and data hashes transmitted for attribution are generated using one-way SHA-256 hashing.
        </p>
      ),
    },
    {
      num: "17",
      title: "Role-Based Access Control & Multi-Factor Authentication",
      content: (
        <p>
          Access to client ad accounts, lead rosters, and backend administration panels is restricted exclusively to authorized Himastech staff on a least-privilege necessity basis. All team access requires enforced Multi-Factor Authentication (MFA) and secure corporate password managers.
        </p>
      ),
    },
    {
      num: "18",
      title: "Data Retention Schedules & Automated Purging",
      content: (
        <p>
          Contact inquiries, growth audit submissions, and prospective client profiles are maintained for twenty-four (24) months, after which they are automatically purged or permanently pseudonymized. Invoicing records, tax invoices, and statutory payment logs are retained for eight (8) years in compliance with Indian GST statutory requirements.
        </p>
      ),
    },
    {
      num: "19",
      title: "Cross-Border Data Transfers & Global Safeguards",
      content: (
        <p>
          When processing campaigns for international clients or utilizing global cloud providers, data transfers are conducted under Standard Contractual Clauses (SCCs) and rigorous adequacy assessments to ensure your information enjoys protection equivalent to Indian DPDP and GDPR standards.
        </p>
      ),
    },
    {
      num: "20",
      title: "Right to Access & Data Portability",
      content: (
        <p>
          You have the legal right to request a complete summary of all personal data Himastech holds regarding you, along with details of the specific processing activities and recipients. We will supply this information in an easily readable, structured digital format (such as JSON or CSV) within thirty (30) days of verified identity confirmation.
        </p>
      ),
    },
    {
      num: "21",
      title: "Right to Correction, Rectification & Updating",
      content: (
        <p>
          If any personal details, business emails, or contact information we hold are inaccurate, outdated, or incomplete, you have the right to request immediate correction or supplementation by contacting our governance desk.
        </p>
      ),
    },
    {
      num: "22",
      title: "Right to Erasure (&apos;Right to be Forgotten&apos;)",
      content: (
        <p>
          You may request the permanent deletion of your personal records from our databases and marketing dispatch lists at any time, provided retention is not mandated by statutory Indian tax law or pending litigation defense.
        </p>
      ),
    },
    {
      num: "23",
      title: "Right to Withdraw Consent & Instant Unsubscribe",
      content: (
        <p>
          Where processing is founded upon consent, you may withdraw that consent at any moment with immediate effect. Every promotional email includes a direct 1-click &quot;Unsubscribe&quot; link, and WhatsApp alerts can be terminated immediately by replying &quot;STOP&quot;.
        </p>
      ),
    },
    {
      num: "24",
      title: "Protection of Minors & Children&apos;s Privacy",
      content: (
        <p>
          Himastech services, training programs, and marketing consulting are designed strictly for adults aged eighteen (18) and above. We do not intentionally collect or process data pertaining to children under 18 years of age. Any inadvertent submissions will be promptly deleted upon notification.
        </p>
      ),
    },
    {
      num: "25",
      title: "Security Incident & Breach Notification Protocol",
      content: (
        <p>
          In the unlikely event of a verified data breach impacting personal records, Himastech will immediately contain the incident, inform the Indian Computer Emergency Response Team (CERT-In) and the Data Protection Board within statutory deadlines, and notify affected users with remediation guidance.
        </p>
      ),
    },
    {
      num: "26",
      title: "Grievance Redressal Officer & Legal Contact Information",
      content: (
        <div className="space-y-2">
          <p>
            In compliance with Section 10 of the Indian Digital Personal Data Protection Act 2023 and Rule 3(11) of the Information Technology Rules, the contact details of our Data Protection &amp; Grievance Officer are:
          </p>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200/90 text-xs sm:text-sm text-slate-800 space-y-1 mt-2">
            <p className="font-bold text-slate-950">Grievance &amp; Data Protection Officer</p>
            <p className="text-slate-600">Himastech Digital Marketing (Alliance Partner: Merlinflow Technologies Pvt Ltd)</p>
            <p className="pt-1"><strong>Physical Address:</strong> Nagole, Hyderabad, Telangana 500068, India</p>
            <p><strong>Official Email:</strong> <a href="mailto:info@himastechdigi.com" className="text-blue-600 underline font-semibold">info@himastechdigi.com</a></p>
            <p><strong>Telephone / WhatsApp:</strong> <a href="tel:+916304989071" className="text-emerald-700 underline font-semibold">+91 6304989071</a></p>
            <p className="text-slate-500 text-xs pt-1">Turnaround Time: All formal grievances are reviewed and resolved within thirty (30) calendar days.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-8 pb-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-700">Legal &amp; Compliance</span>
          <span>/</span>
          <span className="text-blue-600 font-bold">Privacy Policy</span>
        </div>

        {/* Page Hero Header - Luminous, Bright & Crystal Clear */}
        <div className="mb-10 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg relative overflow-hidden">
          {/* Subtle Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#062d72] via-[#e59800] to-[#f15a22]" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold mb-4 shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>
              Data Protection &amp; Telemetry Framework • 26 Numbered Policies
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062d72] tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-normal">
            Your privacy is paramount at <strong className="text-[#062d72] font-bold">Himastech Digital Marketing</strong>. The following 26 numbered policy sections explain in complete detail how we collect, store, safeguard, encrypt, and handle business data under the Indian Digital Personal Data Protection (DPDP) Act 2023, EU GDPR, and global standards.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-600 pt-6 border-t border-slate-200 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Effective: <strong className="text-slate-800">{lastUpdated}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Standard: <strong className="text-slate-800">DPDP Act 2023 &amp; GDPR Compliant</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-bold">26 Binding Policies</span>
            </div>
            <span>•</span>
            <Link href="/terms-and-conditions" className="text-blue-600 underline hover:text-blue-800 font-bold ml-auto flex items-center gap-1">
              <span>View Terms &amp; Conditions</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Quick Policy Index Matrix */}
        <div className="mb-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <p className="text-xs font-black text-[#062d72] uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f15a22]" />
            <span>Quick Policy Directory (Click to jump to any policy)</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
            {policiesList.map((item) => (
              <a
                key={item.num}
                href={`#policy-${item.num}`}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 border border-slate-200/80 transition-all flex items-center gap-2 truncate shadow-2xs"
              >
                <span className="font-mono font-bold text-blue-600">#{item.num}</span>
                <span className="truncate text-[11px] font-medium text-slate-700">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 26 Full Numbered Policies */}
        <div className="space-y-5">
          {policiesList.map((policy) => (
            <div 
              key={policy.num}
              id={`policy-${policy.num}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all scroll-mt-28"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#062d72] to-[#1e40af] text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {policy.num}
                </div>
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-black text-[#062d72] mb-2.5">
                    {policy.num}. {policy.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {policy.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact & Action Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#062d72] via-[#09357a] to-[#0a2550] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Rights &amp; Privacy Requests</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Have privacy questions or wish to exercise your rights?</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Our Data Protection Officer reviews all access, rectification, and erasure requests within 30 days.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/terms-and-conditions"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all"
            >
              Terms &amp; Conditions
            </Link>
            <a
              href="mailto:info@himastechdigi.com"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e59800] to-[#f15a22] text-white font-bold text-xs hover:opacity-95 transition-all shadow-md"
            >
              Email Privacy Desk
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

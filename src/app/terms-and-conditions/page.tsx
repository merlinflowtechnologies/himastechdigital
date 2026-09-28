import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Building2, 
  ExternalLink, 
  Lock, 
  Scale, 
  CreditCard, 
  Mail, 
  Phone,
  Sparkles,
  Award,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | 25+ Clause Enterprise Agreement | Himastech",
  description:
    "Official 25+ clause Terms and Conditions, agency engagement framework, ad spend direct-billing policies, and performance SLAs for Himastech Digital Marketing & Merlinflow Technologies.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 14, 2026";

  const termsList = [
    {
      num: "01",
      title: "Acceptance of Agreement & Legal Capacity",
      content: (
        <p>
          By accessing the digital properties of Himastech (including himastechdigi.com), retaining our growth marketing services, executing a Statement of Work (SOW), or commissioning ad management, you (&quot;Client&quot;, &quot;You&quot;) agree to be legally bound by these comprehensive Terms and Conditions. You warrant that you have full legal power, corporate authority, and capacity to enter into this binding commercial agreement.
        </p>
      ),
    },
    {
      num: "02",
      title: "Agency Identity & Merlinflow Strategic Alliance",
      content: (
        <p>
          These Terms govern services rendered by <strong>Himastech Digital Marketing</strong> operating in formalized strategic technical and operational alliance with <strong>Merlinflow Technologies Pvt Ltd</strong> (&quot;Himastech&quot;, &quot;Agency&quot;, &quot;We&quot;, &quot;Us&quot;). Technology stacks, enterprise CRMs, ERP integrations, and cloud infrastructure are developed and maintained under this unified operating consortium.
        </p>
      ),
    },
    {
      num: "03",
      title: "Scope of Performance Marketing Services",
      content: (
        <p>
          Himastech delivers full-funnel digital growth services including Meta Ads (Facebook &amp; Instagram), Google Search, Performance Max, YouTube Ads, LinkedIn B2B media, Generative Engine Optimization (GEO), conversion copywriting, high-ticket landing page engineering, Klaviyo email automations, and WhatsApp Business API integration. All deliverables are governed by individual client SOWs.
        </p>
      ),
    },
    {
      num: "04",
      title: "100% Client Ad Account & Asset Ownership",
      content: (
        <p>
          The Client retains 100% exclusive administrative, legal, and operational ownership of all advertising accounts, Business Managers, Google Ads CID profiles, Google Analytics 4 properties, tracking tags, and domain DNS records. Himastech operates strictly via delegated agency/partner access. We never hold client accounts hostage under any circumstance.
        </p>
      ),
    },
    {
      num: "05",
      title: "Direct Platform Billing & Zero Ad Spend Markup",
      content: (
        <p>
          All digital advertising budgets are paid directly by the Client to media platforms (Meta, Google, LinkedIn, etc.) using the Client&apos;s registered corporate payment cards or lines of credit. Himastech does not levy arbitrary percentage markups, hidden exchange commissions, or float surcharges on raw platform ad spend.
        </p>
      ),
    },
    {
      num: "06",
      title: "Campaign Strategy & 7-Day Technical Onboarding SLA",
      content: (
        <p>
          Upon contract execution and receipt of required account permissions, Himastech guarantees completion of technical onboarding within seven (7) business days. This includes conversion tracking audits, server-side Conversions API (CAPI) configuration, custom audiences initialization, and baseline media plan delivery.
        </p>
      ),
    },
    {
      num: "07",
      title: "Creative Production, Hooks & Deliverable Rights",
      content: (
        <p>
          Upon complete payment of all agreed monthly fees, the Client receives a perpetual, royalty-free, worldwide license to utilize all custom ad copy, graphic banners, direct-response video scripts, and landing page wireframes created specifically for the Client during the active engagement.
        </p>
      ),
    },
    {
      num: "08",
      title: "Proprietary Agency Frameworks & IP Protection",
      content: (
        <p>
          Himastech and Merlinflow Technologies retain exclusive intellectual property rights to all proprietary algorithmic growth models, custom ROI calculators, conversion rate optimization scripts, automation webhooks, enterprise ERP source codes, and internal agency benchmarking software.
        </p>
      ),
    },
    {
      num: "09",
      title: "Client Obligations, Asset Handovers & Communication",
      content: (
        <p>
          The Client agrees to provide timely brand assets, product imagery, price sheets, and compliance guidelines. The Client agrees to review and approve creative drafts and landing pages within forty-eight (48) business hours to maintain uninterrupted campaign scaling and algorithmic momentum.
        </p>
      ),
    },
    {
      num: "10",
      title: "Retainer Fees, Invoicing Cycles & Advance Payments",
      content: (
        <p>
          Agency retainers are billed on a recurring 30-day billing cycle in advance. Invoices are dispatched five (5) business days prior to the start of the billing period and are strictly payable within seven (7) calendar days via NEFT, RTGS, UPI, or verified corporate bank transfer.
        </p>
      ),
    },
    {
      num: "11",
      title: "Goods & Services Tax (GST) & Statutory Compliance",
      content: (
        <p>
          All quoted fees are exclusive of applicable Indian Goods and Services Tax (GST at 18%) or international cross-border withholding levies. Official tax invoices with valid GSTIN identifiers will be furnished for all transactions to facilitate Input Tax Credit (ITC) reconciliation.
        </p>
      ),
    },
    {
      num: "12",
      title: "Late Payment Delinquency & Service Interruption",
      content: (
        <p>
          Undisputed invoices overdue by more than ten (10) calendar days may result in temporary suspension of active ad optimization, campaign monitoring, and creative delivery until the balance is cleared. Himastech is not liable for performance dips or attribution gaps resulting from payment-related pauses.
        </p>
      ),
    },
    {
      num: "13",
      title: "Server-Side Tracking, CAPI & Attribution Integrity",
      content: (
        <p>
          Himastech implements server-side Meta Conversions API (CAPI) and Google Tag Manager server containers to bypass browser ad blockers and iOS 14.5+ cookie restrictions. The Client agrees to maintain required cloud webhook endpoints and cooperate with DNS record verification for custom attribution subdomains.
        </p>
      ),
    },
    {
      num: "14",
      title: "Platform Policy Compliance & Advertising Standards",
      content: (
        <p>
          The Client represents and warrants that their products, services, claims, and landing page offers strictly adhere to Meta Advertising Standards, Google Ads Policies, and applicable consumer protection statutes. Himastech reserves the right to decline publishing ads promoting deceptive, black-hat, or prohibited substances.
        </p>
      ),
    },
    {
      num: "15",
      title: "Market Volatility & Performance Disclaimer",
      content: (
        <p>
          While Himastech applies elite data-driven performance engineering, final commercial outcomes, Return on Ad Spend (ROAS), and Cost Per Acquisition (CPA) are subject to external market volatility, consumer demand, competitor bidding intensity, inventory seasonality, and the Client&apos;s own sales closing capability. We do not offer speculative revenue guarantees unless explicitly executed in an equity-hybrid SOW.
        </p>
      ),
    },
    {
      num: "16",
      title: "Strict Confidentiality & Mutual Non-Disclosure (NDA)",
      content: (
        <p>
          Both parties enter into a binding non-disclosure covenant. Himastech will keep strictly confidential all client revenue figures, ad spend budgets, customer lead records, conversion rates, and business strategies. Case study mentions will be strictly anonymized unless prior written authorization is granted by the Client.
        </p>
      ),
    },
    {
      num: "17",
      title: "Mutual Non-Disparagement & Professional Integrity",
      content: (
        <p>
          Both parties agree not to publish, post, broadcast, or disseminate any defamatory, slanderous, or disparaging statements regarding each other&apos;s executives, team members, services, or software solutions on social media, review portals, or public forums during or after the engagement term.
        </p>
      ),
    },
    {
      num: "18",
      title: "Term of Engagement & 30-Day Cancellation Notice",
      content: (
        <p>
          Services operate on a rolling month-to-month basis with zero lock-in hostage contracts. Either party may terminate the active engagement for convenience by providing at least thirty (30) calendar days written notice via registered email to info@himastechdigi.com.
        </p>
      ),
    },
    {
      num: "19",
      title: "Orderly Offboarding SLA & Complete Asset Handover",
      content: (
        <p>
          Upon completion of the 30-day notice period and receipt of final fee settlements, Himastech will immediately surrender agency access, transfer campaign documentation, deliver raw creative source assets, and ensure all ad accounts remain running smoothly without disruption.
        </p>
      ),
    },
    {
      num: "20",
      title: "Limitation of Liability & Consequential Damages",
      content: (
        <p>
          To the maximum extent permitted under applicable law, neither Himastech nor Merlinflow Technologies Pvt Ltd shall be liable for indirect, punitive, special, or consequential damages (including loss of business revenue, profit, or data). Total aggregate liability under any cause of action shall not exceed the actual management fees paid by the Client in the three (3) months preceding the claim.
        </p>
      ),
    },
    {
      num: "21",
      title: "Client Indemnification Covenant",
      content: (
        <p>
          The Client agrees to indemnify, defend, and hold harmless Himastech, its directors, employees, and Merlinflow partners against any third-party claims, regulatory penalties, copyright infringement actions, or damages arising out of the Client&apos;s products, services, unauthorized trademark usage, or defamatory landing page claims.
        </p>
      ),
    },
    {
      num: "22",
      title: "Force Majeure & Infrastructure Outages",
      content: (
        <p>
          Neither party shall be held liable for failure or delay in performance caused by circumstances beyond reasonable control, including global outages of Meta/Google ad networks, undersea cable disruptions, cloud host failures (AWS/Vercel), cyber-attacks, governmental bans, or natural disasters.
        </p>
      ),
    },
    {
      num: "23",
      title: "Non-Solicitation of Agency Talent & Contractors",
      content: (
        <p>
          During the term of engagement and for twelve (12) months following termination, the Client agrees not to directly or indirectly solicit, recruit, employ, or contract any Himastech or Merlinflow performance marketer, media buyer, developer, or strategist introduced to the Client.
        </p>
      ),
    },
    {
      num: "24",
      title: "Governing Law & Exclusive Jurisdiction in Hyderabad",
      content: (
        <p>
          This Agreement, its interpretation, and any disputes arising out of or in connection with it shall be governed exclusively by the laws of the Republic of India. The parties irrevocably submit to the exclusive jurisdiction of the competent courts in <strong>Hyderabad, Telangana, India</strong>.
        </p>
      ),
    },
    {
      num: "25",
      title: "Severability, Entire Agreement & Future Amendments",
      content: (
        <p>
          If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect. These Terms, together with executed SOWs and our Privacy Policy, constitute the entire agreement between the parties superseding all prior oral or written representations.
        </p>
      ),
    },
    {
      num: "26",
      title: "Legal Notices & Operational Headquarters Contact",
      content: (
        <div className="space-y-2">
          <p>
            All legal, formal notices, or queries regarding these Terms must be addressed to the Himastech Legal and Governance Desk:
          </p>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200/90 text-xs sm:text-sm text-slate-800 space-y-1 mt-2">
            <p className="font-bold text-slate-950">Himastech Digital Marketing</p>
            <p className="text-slate-600">Strategic Alliance Partner: Merlinflow Technologies Pvt Ltd</p>
            <p className="pt-1"><strong>Operational HQ:</strong> Nagole, Hyderabad, Telangana 500068, India</p>
            <p><strong>Official Email:</strong> <a href="mailto:info@himastechdigi.com" className="text-blue-600 underline font-semibold">info@himastechdigi.com</a></p>
            <p><strong>Direct Hotline / WhatsApp:</strong> <a href="tel:+916304989071" className="text-emerald-700 underline font-semibold">+91 6304989071</a></p>
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
          <span className="text-blue-600 font-bold">Terms and Conditions</span>
        </div>

        {/* Page Hero Header */}
        <div className="mb-10 p-6 sm:p-10 rounded-3xl glass-card border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subcard text-slate-800 text-xs font-bold mb-4 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Master Agency Service Agreement • 26 Numbered Clauses
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Terms and Conditions
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Welcome to the official terms of engagement for <strong>Himastech Digital Marketing</strong> and our alliance partner <strong>Merlinflow Technologies Pvt Ltd</strong>. The following 26 numbered clauses comprehensively define client account ownership, media billing, performance standards, intellectual property, and contractual rights.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-500 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Effective: <strong>{lastUpdated}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Jurisdiction: <strong>Hyderabad, India</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">26 Binding Clauses</span>
            </div>
            <span>•</span>
            <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800 font-semibold ml-auto flex items-center gap-1">
              <span>View Privacy Policy</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Quick Clause Index Matrix */}
        <div className="mb-10 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/90 shadow-xs">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Quick Clause Directory (Click to jump to any clause)</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
            {termsList.map((item) => (
              <a
                key={item.num}
                href={`#clause-${item.num}`}
                className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200/60 transition-colors flex items-center gap-2 truncate"
              >
                <span className="font-mono font-bold text-blue-600">#{item.num}</span>
                <span className="truncate text-[11px] font-medium text-slate-700">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 26 Full Numbered Clauses */}
        <div className="space-y-6">
          {termsList.map((clause) => (
            <div 
              key={clause.num}
              id={`clause-${clause.num}`}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all scroll-mt-28"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {clause.num}
                </div>
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-black text-slate-950 mb-2.5">
                    {clause.num}. {clause.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {clause.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact & Action Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Retainer Inquiries</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Ready to scale your business with Himastech?</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Have questions regarding custom SOW deliverables, ROAS milestones, or agency onboarding?
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/privacy-policy"
              className="px-5 py-2.5 rounded-full glass-subcard text-white hover:bg-white/10 text-xs font-bold transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 transition-all shadow-md"
            >
              Schedule Growth Call
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Users, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare, 
  BarChart3, 
  Globe2, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Server, 
  Send,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function MerlinflowPortfolioPage() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    product: "Real Estate ERP",
    requirements: ""
  });

  const products = [
    {
      id: "real-estate-erp",
      category: "enterprise",
      name: "Real Estate & Brokerage ERP",
      tagline: "Property Sales, Accelerated",
      badge: "PropTech OS",
      description: "High-ticket real estate CRM and property lifecycle ERP. Unifies lead attribution from digital ads, automated site-visit scheduling, live unit availability inventory matrices, broker channel partner payouts, and legal documentation vaults.",
      icon: Building2,
      color: "from-cyan-500/20 to-blue-500/5",
      accent: "text-cyan-400",
      border: "hover:border-cyan-400/40",
      badgeBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
      href: "https://www.merlinflow.in/",
      features: [
        "Omnichannel Real Estate Lead Routing & Call Telephony",
        "Interactive 2D/3D Unit Availability & Price Quotation Generator",
        "Channel Partner / Broker Commission Payout Ledger",
        "Automated WhatsApp Triggers for Site-Visit Directions & Brochures",
        "RERA-Compliant Cost Sheets, Payment Schedules & Milestone Invoicing",
        "Executive Sales Manager Performance & Pipeline Forecast Dashboard"
      ],
      metrics: "₹480Cr+ Pipeline Handled"
    },
    {
      id: "enterprise-crm",
      category: "enterprise",
      name: "Enterprise Workflow & Sales OS",
      tagline: "Automate Ops, Eliminate Friction",
      badge: "Enterprise OS",
      description: "Comprehensive corporate OS uniting employee biometric attendance, automated payroll disbursement, multi-stage sales pipeline tracking, vendor procurement, and dynamic KPI dashboards for executive leadership.",
      icon: Users,
      color: "from-blue-500/20 to-indigo-500/5",
      accent: "text-blue-400",
      border: "hover:border-blue-400/40",
      badgeBg: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      href: "https://www.merlinflow.in/",
      features: [
        "Biometric & Geofenced Mobile Attendance with Shift Roster Planning",
        "Automated India Payroll, PF/ESI Deductions & Digital Payslips",
        "Multi-Tier Approval Workflows for Expenses & Purchase Requisitions",
        "Customer Helpdesk Ticketing with First-Response SLA Automation",
        "Role-Based Permission Matrix with Enterprise Audit Logs",
        "Executive Financial P&L Telemetry & Real-Time Cash Flow Charts"
      ],
      metrics: "45% Reduction in Admin Overhead"
    },
    {
      id: "ecommerce-suite",
      category: "commerce",
      name: "D2C Commerce & Logistics OS",
      tagline: "Scale Orders with Zero Leakage",
      badge: "Retail OS",
      description: "High-concurrency headless e-commerce management suite. Integrates multi-channel inventory sync across Shopify & Amazon, automated WhatsApp order confirmations, NDR delivery management, and real-time COD fraud filtering.",
      icon: BarChart3,
      color: "from-purple-500/20 to-pink-500/5",
      accent: "text-purple-400",
      border: "hover:border-purple-400/40",
      badgeBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      href: "https://www.merlinflow.in/",
      features: [
        "Sub-Second 1-Click Checkout with UPI & EMI Integration",
        "Multi-Warehouse Inventory Allocation & Batch Expiry Tracking",
        "Automated WhatsApp Shipping Updates & Live Map Tracking",
        "AI-Powered COD RTO (Return to Origin) Risk Scoring",
        "Automated Bulk GST Invoicing & Return Management",
        "LTV & Cohort Retention Dashboard with Segment Export"
      ],
      metrics: "22% RTO Reduction"
    },
    {
      id: "school-ims",
      category: "education",
      name: "School & Campus Management OS",
      tagline: "Total Campus Digitization",
      badge: "EdTech OS",
      description: "End-to-end institutional operating system engineered for K-12 schools, junior colleges, and coaching academies. Digitizes admissions, biometric student attendance, automated fee collection with UPI payment gateways, and real-time parent communication.",
      icon: ShieldCheck,
      color: "from-amber-500/20 to-orange-500/5",
      accent: "text-amber-400",
      border: "hover:border-amber-400/40",
      badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      href: "https://www.merlinflow.in/products/school",
      features: [
        "Automated Fee Ledger with WhatsApp Receipts & Online UPI Gateways",
        "RFID & Biometric Student/Staff Attendance with Instant SMS Alerts",
        "Automated Report Card Generation & CBSE/State Board Grade Calculations",
        "GPS School Bus Fleet Tracking with Geofenced Parent Alerts",
        "Teacher Lesson Planners & Digital Homework Submission Portals",
        "Library Management with Barcode Checkout & Fine Automation"
      ],
      metrics: "98% Fee Collection Velocity"
    },
    {
      id: "restaurant-os",
      category: "hospitality",
      name: "Restaurant & Cloud Kitchen OS",
      tagline: "Speed From Table to Kitchen",
      badge: "Hospitality OS",
      description: "Mission-critical food service platform engineered for fine dining restaurants, cafes, cloud kitchens, and multi-outlet franchises. Unifies dynamic QR code table menus, real-time Kitchen Display Systems (KDS), Zomato/Swiggy API sync, and inventory recipe costing.",
      icon: Zap,
      color: "from-rose-500/20 to-red-500/5",
      accent: "text-rose-400",
      border: "hover:border-rose-400/40",
      badgeBg: "bg-rose-500/15 text-rose-300 border-rose-500/30",
      href: "https://www.merlinflow.in/products/food",
      features: [
        "Interactive Contactless QR Digital Menus with Table Ordering",
        "Real-Time Wireless KOT (Kitchen Order Ticket) Display Sync",
        "Aggregator Integration: Manage Swiggy & Zomato from 1 Screen",
        "Ingredient-Level Recipe Costing & Auto-Deducting Inventory",
        "Custom Loyalty Points, CRM & Automated Birthday WhatsApp Vouchers",
        "Multi-Branch Central Kitchen Commissary Dispatch & Transfers"
      ],
      metrics: "12-Min Table Turnover Time"
    },
    {
      id: "medical-erp",
      category: "healthcare",
      name: "Clinic & Pharmacy Cloud ERP",
      tagline: "Zero-Error Healthcare Operations",
      badge: "HealthTech OS",
      description: "HIPAA & NABH compliant clinical management and pharmacy retail software. Unifies patient Electronic Medical Records (EMR), instant POS billing with medicine batch/expiry tracking, doctor consultation appointment scheduling, and automated lab test report delivery.",
      icon: Globe2,
      color: "from-emerald-500/20 to-teal-500/5",
      accent: "text-emerald-400",
      border: "hover:border-emerald-400/40",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      href: "https://www.merlinflow.in/products/health",
      features: [
        "Smart Expiry & Near-Expiry Alerts to Eliminate Losses",
        "High-Speed Barcode POS Billing with Prescription Sync",
        "Multi-Store Stock Transfer & Centralized Inventory",
        "Automated Low-Stock Vendor Purchase Orders",
        "Instant GST e-Invoicing & B2B Tax Filing Reports",
        "Doctor Commission & Referral Analytics Matrix"
      ],
      metrics: "Zero Stock Expiry Wastage"
    }
  ];

  const architecturePillars = [
    {
      icon: Server,
      title: "99.9% High-Availability Cloud",
      desc: "Distributed multi-region cloud infrastructure with automated auto-scaling and zero-downtime deployments."
    },
    {
      icon: Lock,
      title: "Role-Based Access & Security",
      desc: "Granular administrative permission hierarchies, multi-factor authentication, and immutable audit logs."
    },
    {
      icon: MessageSquare,
      title: "Automated WhatsApp & SMS Gateway",
      desc: "Built-in notification triggers for instant transaction receipts, booking confirmations, and alert broadcasts."
    },
    {
      icon: Globe2,
      title: "100% India-Ready Compliance",
      desc: "Native GST e-Invoicing, UPI dynamic QR payments, Aadhaar verification, and regional language support."
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Encryption",
      desc: "AES-256 bit data encryption at rest and in transit with automated offsite daily backup protocols."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Native Apps",
      desc: "Lightning-fast Android, iOS, and PWA web applications built for frontline team velocity."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-[#07090e] text-slate-100">
      {/* Ambient Top Studio Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-indigo-600/5 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Himastech</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Merlinflow Technologies Pvt Ltd</span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-xs uppercase tracking-wider font-bold mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Technology & SaaS Arm of Himastech
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6"
          >
            The Technology & Cloud SaaS Ecosystem of Himastech —{" "}
            <span className="text-electric-gradient">
              Built & Powered by Merlinflow Technologies Pvt Ltd.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-medium"
          >
            Combining algorithmic digital marketing with enterprise-grade cloud software. Explore our flagship operating systems built for schools, healthcare networks, hospitality, e-commerce brands, real estate, and enterprise workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://www.merlinflow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] border border-cyan-400/30 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Visit Official Website (merlinflow.in)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#demo-form"
              className="py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book a Product Demo</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl glass-subcard border-white/10 shadow-sm hover:border-cyan-400/30 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-black text-white">99.9%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mt-0.5">Uptime SLA</span>
            </div>
            <div className="p-4 rounded-xl glass-subcard border-white/10 shadow-sm hover:border-cyan-400/30 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-black text-cyan-400">50k+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mt-0.5">Daily API Calls</span>
            </div>
            <div className="p-4 rounded-xl glass-subcard border-white/10 shadow-sm hover:border-cyan-400/30 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-black text-purple-400">6+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mt-0.5">Industry OS Suites</span>
            </div>
            <div className="p-4 rounded-xl glass-subcard border-white/10 shadow-sm hover:border-cyan-400/30 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-black text-emerald-400">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mt-0.5">GST & UPI Ready</span>
            </div>
          </div>
        </div>

        {/* 6 Flagship Products Grid */}
        <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 scroll-mt-24">
          {products.map((product, idx) => {
            const IconComp = product.icon;
            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-3xl p-6 sm:p-7 border border-white/10 transition-all duration-300 ${product.border} relative overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl scroll-mt-28`}
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${product.color} rounded-bl-full blur-xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity`} />

                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <IconComp className={`h-6 w-6 ${product.accent}`} />
                    </div>
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${product.badgeBg}`}>
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 block mb-2.5">
                    {product.tagline}
                  </span>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {product.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="pt-4 border-t border-white/10 mb-5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-2.5">
                      Core Enterprise Capabilities
                    </span>
                    <ul className="space-y-2">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>Explore Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[10px] font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    {product.metrics}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Architecture & Security Strip */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden mb-20 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          
          <div className="max-w-3xl mb-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
              Enterprise Tech Infrastructure & Security
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              High-Velocity Architecture Built For Unbreakable Reliability
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Merlinflow platforms run on a unified, high-concurrency cloud stack that eliminates operational bottlenecks, maintains strict financial compliance, and protects sensitive customer records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {architecturePillars.map((pillar, pIdx) => {
              const PillarIcon = pillar.icon;
              return (
                <div 
                  key={pIdx}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm text-cyan-400">
                    <PillarIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Generation & Demo Booking Form */}
        <div id="demo-form" className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-bold border border-cyan-400/25">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Fast-Track Onboarding
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Schedule a Guided Software Demo with Merlinflow
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Connect directly with our senior software solutions engineers. We will analyze your institutional or business workflows and show a live demo tailored to your exact industry.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive 1-on-1 walkthrough of live product modules</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom pricing, hardware integrations & GST/UPI setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Legacy data migration assessment & onboarding timeline</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Direct WhatsApp & Inquiries:
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 flex-wrap">
                  <a
                    href="https://wa.me/918374373753?text=Hi%20Merlinflow%2C%20I%20would%20like%20to%20book%20a%20product%20demo%20for%20your%20SaaS%20ERP%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp: +91 8374373753</span>
                  </a>
                  <a
                    href="tel:+918247716878"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Desk 2: +91 8247716878</span>
                  </a>
                  <a
                    href="mailto:info@merlinflow.in"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Email: info@merlinflow.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 glass-subcard rounded-2xl p-5 sm:p-7 border border-white/10 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Demo Request Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you! A Merlinflow solutions architect will contact you via WhatsApp and email within 2 business hours to schedule your interactive live demo.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        organization: "",
                        product: "School IMS",
                        requirements: ""
                      });
                    }}
                    className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors cursor-pointer border border-white/10 shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19]/90 border border-white/15 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19]/90 border border-white/15 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19]/90 border border-white/15 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Organization / Business *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="ABC Academy / XYZ Healthcare"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19]/90 border border-white/15 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Product Suite Required *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19]/90 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer shadow-inner"
                    >
                      <option value="Real Estate ERP" className="bg-[#0b0f19] text-white">Real Estate & Brokerage ERP (PropTech OS)</option>
                      <option value="Enterprise CRM" className="bg-[#0b0f19] text-white">Enterprise CRM & Workflow Automation</option>
                      <option value="E-Commerce Platform" className="bg-[#0b0f19] text-white">E-Commerce Platform (D2C Commerce OS)</option>
                      <option value="School IMS" className="bg-[#0b0f19] text-white">School IMS (EdTech OS)</option>
                      <option value="Restaurant ERP" className="bg-[#0b0f19] text-white">Restaurant ERP (Hospitality OS)</option>
                      <option value="Medical ERP" className="bg-[#0b0f19] text-white">Medical ERP (Pharmacy & Clinic OS)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Operational Requirements / Current Challenges
                    </label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      placeholder="Tell us about your branch locations, student/customer volume, or specific feature requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19]/90 border border-white/15 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border border-cyan-400/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Demo Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Book My Live Product Demo</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

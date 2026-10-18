"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Edit3, 
  Trash2, 
  Phone, 
  Mail, 
  MessageCircle, 
  Lock, 
  Key, 
  LogOut, 
  Check, 
  X, 
  AlertCircle, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Layers,
  Save,
  Clock,
  ArrowRight
} from "lucide-react";
import { CourseItem, CustomerRegistration } from "@/lib/adminData";

export default function AdminPortalPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"registrations" | "courses" | "settings">("registrations");

  // Data state
  const [registrations, setRegistrations] = useState<CustomerRegistration[]>([]);
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters & Search
  const [regSearch, setRegSearch] = useState("");
  const [regStatusFilter, setRegStatusFilter] = useState<string>("all");
  const [courseSearch, setCourseSearch] = useState("");

  // Modals & Editing
  const [editingCourse, setEditingCourse] = useState<CourseItem | null>(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Settings State
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [settingsMsg, setSettingsMsg] = useState("");

  // Check stored auth session
  useEffect(() => {
    const session = localStorage.getItem("himastech_admin_session");
    if (session === "true") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput.trim() })
      });
      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("himastech_admin_session", "true");
        fetchData();
      } else {
        setAuthError(data.error || "Incorrect Security PIN");
      }
    } catch {
      setAuthError("Connection error. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("himastech_admin_session");
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  // Fetch all live data
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [regRes, courseRes] = await Promise.all([
        fetch("/api/registrations"),
        fetch("/api/courses?all=true")
      ]);

      const regData = await regRes.json();
      const courseData = await courseRes.json();

      if (regData.success) setRegistrations(regData.registrations);
      if (courseData.success) setCourses(courseData.courses);
    } catch (err) {
      console.error("Error loading admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Update registration status
  const handleUpdateStatus = async (id: string, newStatus: CustomerRegistration["status"]) => {
    try {
      const res = await fetch("/api/registrations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  // Delete registration
  const handleDeleteRegistration = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete registration for ${name}?`)) return;

    try {
      const res = await fetch(`/api/registrations?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setRegistrations(prev => prev.filter(r => r.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete registration:", err);
    }
  };

  // Export registrations to CSV
  const handleExportCSV = () => {
    if (registrations.length === 0) {
      alert("No customer registrations available to export.");
      return;
    }

    const headers = ["ID", "Customer Name", "Phone", "Email", "Registered Course", "Date", "Status", "Source", "Notes"];
    const rows = registrations.map(r => [
      `"${r.id}"`,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.phone.replace(/"/g, '""')}"`,
      `"${r.email.replace(/"/g, '""')}"`,
      `"${r.course.replace(/"/g, '""')}"`,
      `"${new Date(r.createdAt).toLocaleString("en-IN")}"`,
      `"${r.status}"`,
      `"${r.source || ""}"`,
      `"${(r.notes || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(row => row.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `HIMASTECH_Customer_Registrations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Save / Update course
  const handleSaveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;

    try {
      const isNew = isCreatingCourse;
      const res = await fetch("/api/courses", {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCourse)
      });
      const data = await res.json();

      if (data.success) {
        if (isNew) {
          setCourses(prev => [...prev, data.course]);
        } else {
          setCourses(prev => prev.map(c => c.id === editingCourse.id ? data.course : c));
        }
        setSaveMessage(`Course "${editingCourse.title}" updated successfully! Changes are live on website.`);
        setEditingCourse(null);
        setIsCreatingCourse(false);
        setTimeout(() => setSaveMessage(null), 5000);
      } else {
        alert(data.error || "Failed to save course.");
      }
    } catch {
      alert("Failed to connect to server.");
    }
  };

  // Quick Charge Update (Inline)
  const handleQuickPriceUpdate = async (id: string, newDiscountedPrice: string, newOriginalPrice?: string) => {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    const updates: Partial<CourseItem> = {
      discountedPrice: newDiscountedPrice,
      ...(newOriginalPrice ? { originalPrice: newOriginalPrice } : {})
    };

    try {
      const res = await fetch("/api/courses", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates })
      });
      const data = await res.json();
      if (data.success) {
        setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
        setSaveMessage(`Updated charges for "${course.title}" to ${newDiscountedPrice}`);
        setTimeout(() => setSaveMessage(null), 4000);
      }
    } catch {
      alert("Failed to update course charges.");
    }
  };

  // Toggle course active state
  const handleToggleCourseActive = async (id: string, currentActive: boolean = true) => {
    try {
      const res = await fetch("/api/courses", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isActive: !currentActive })
      });
      const data = await res.json();
      if (data.success) {
        setCourses(prev => prev.map(c => c.id === id ? { ...c, isActive: !currentActive } : c));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered registrations
  const filteredRegistrations = useMemo(() => {
    return registrations.filter(r => {
      const matchSearch = 
        r.name.toLowerCase().includes(regSearch.toLowerCase()) ||
        r.phone.toLowerCase().includes(regSearch.toLowerCase()) ||
        r.email.toLowerCase().includes(regSearch.toLowerCase()) ||
        r.course.toLowerCase().includes(regSearch.toLowerCase());
      
      const matchStatus = regStatusFilter === "all" || r.status.toLowerCase() === regStatusFilter.toLowerCase();
      return matchSearch && matchStatus;
    });
  }, [registrations, regSearch, regStatusFilter]);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return courses.filter(c => 
      c.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
      c.category.toLowerCase().includes(courseSearch.toLowerCase()) ||
      c.discountedPrice.toLowerCase().includes(courseSearch.toLowerCase())
    );
  }, [courses, courseSearch]);

  // Metrics
  const metrics = useMemo(() => {
    const totalLeads = registrations.length;
    const newLeads = registrations.filter(r => r.status === "New").length;
    const convertedLeads = registrations.filter(r => r.status === "Converted").length;
    const activeCoursesCount = courses.filter(c => c.isActive !== false).length;
    return { totalLeads, newLeads, convertedLeads, activeCoursesCount };
  }, [registrations, courses]);

  // =========================================================================
  // LOGIN SCREEN (If not authenticated)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#051329] via-[#092247] to-[#041024] text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center relative z-10 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#e59800] to-[#f15a22] flex items-center justify-center mx-auto mb-4 shadow-xl border border-white/20">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              HIMASTECH Digital Marketing
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Admin Portal
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Manage live course charges &amp; customer registration details
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                Admin Security PIN / Password
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter Admin PIN (Default: himas2026)"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e59800] to-[#f15a22] hover:opacity-95 text-slate-950 font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Access Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center relative z-10 flex items-center justify-between text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <span>← Back to Website</span>
            </Link>
            <span>PIN: <code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">himas2026</code></span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-[#f15a22] selection:text-white pb-20">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Portal Badge */}
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#062d72] to-[#f15a22] flex items-center justify-center p-1.5 shadow-md">
              <Image 
                src="/logo-icon.png" 
                alt="Logo" 
                width={28} 
                height={28} 
                className="object-contain"
              />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-white tracking-tight">HIMASTECH</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-500/30">
                  Admin Hub
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Course Pricing &amp; Customer Registrations
              </div>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors border border-slate-700"
            >
              <span>View Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={fetchData}
              title="Refresh Live Data"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-amber-400" : ""}`} />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs font-bold transition-colors border border-red-800/40 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* Save Confirmation Banner */}
        {saveMessage && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center justify-between shadow-lg animate-in fade-in">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{saveMessage}</span>
            </div>
            <button onClick={() => setSaveMessage(null)} className="text-emerald-300 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* KPI / Overview Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Customer Leads</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">{metrics.totalLeads}</div>
              <div className="text-[10px] text-slate-500 mt-1">Registrations received</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">New Actionable Leads</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">{metrics.newLeads}</div>
              <div className="text-[10px] text-amber-400/80 mt-1">Awaiting contact</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Converted Enrolled</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">{metrics.convertedLeads}</div>
              <div className="text-[10px] text-emerald-500 mt-1">Completed admissions</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Courses</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">{metrics.activeCoursesCount}</div>
              <div className="text-[10px] text-slate-500 mt-1">Catalog items live</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Tab Navigation Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 max-w-md">
          <button
            onClick={() => setActiveTab("registrations")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "registrations"
                ? "bg-[#062d72] text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Customer Leads ({registrations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "courses"
                ? "bg-[#f15a22] text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Course Charges ({courses.length})</span>
          </button>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CUSTOMER REGISTRATIONS */}
        {/* =================================================================== */}
        {activeTab === "registrations" && (
          <div className="space-y-6">
            
            {/* Action Bar (Search, Status Filter, Export CSV) */}
            <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={regSearch}
                  onChange={(e) => setRegSearch(e.target.value)}
                  placeholder="Search by name, phone, email, course..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Status Filters & Export */}
              <div className="flex items-center gap-2.5 w-full md:w-auto flex-wrap justify-end">
                <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
                  {["all", "New", "Contacted", "Converted"].map(st => (
                    <button
                      key={st}
                      onClick={() => setRegStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg font-bold capitalize transition-all cursor-pointer ${
                        regStatusFilter === st
                          ? "bg-amber-500 text-slate-950 font-black shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleExportCSV}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  title="Export all customer registration details to Excel/CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export to Excel/CSV</span>
                </button>
              </div>

            </div>

            {/* Registrations Data Table */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 text-slate-400 font-extrabold uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-4 px-5">Customer Name</th>
                      <th className="py-4 px-5">Contact Details</th>
                      <th className="py-4 px-5">Requested Course</th>
                      <th className="py-4 px-5">Date &amp; Time</th>
                      <th className="py-4 px-5">Lead Status</th>
                      <th className="py-4 px-5 text-right">Instant Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    {filteredRegistrations.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-12 text-slate-500">
                          <Users className="w-10 h-10 mx-auto mb-2 opacity-30" />
                          <div className="font-bold text-sm">No customer registrations found</div>
                          <div className="text-xs text-slate-600">Leads submitted through website modal appear here automatically.</div>
                        </td>
                      </tr>
                    ) : (
                      filteredRegistrations.map((reg) => (
                        <tr key={reg.id} className="hover:bg-slate-800/50 transition-colors group">
                          
                          {/* Name */}
                          <td className="py-4 px-5">
                            <div className="font-bold text-white text-sm">{reg.name}</div>
                            <div className="text-[10px] text-slate-500">{reg.source || "Website Modal"}</div>
                          </td>

                          {/* Contact Details */}
                          <td className="py-4 px-5 space-y-1">
                            <div className="flex items-center gap-1.5 font-semibold text-white">
                              <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                              <a href={`tel:${reg.phone}`} className="hover:text-emerald-300 transition-colors">
                                {reg.phone}
                              </a>
                            </div>
                            {reg.email && (
                              <div className="flex items-center gap-1.5 text-slate-400">
                                <Mail className="w-3 h-3 text-blue-400 shrink-0" />
                                <a href={`mailto:${reg.email}`} className="hover:text-blue-300 transition-colors">
                                  {reg.email}
                                </a>
                              </div>
                            )}
                          </td>

                          {/* Course */}
                          <td className="py-4 px-5">
                            <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 font-bold border border-slate-700 inline-block">
                              {reg.course}
                            </span>
                          </td>

                          {/* Date */}
                          <td className="py-4 px-5 text-slate-400 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              <span>{new Date(reg.createdAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                            </div>
                            <div className="text-[10px] text-slate-500">
                              {new Date(reg.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </td>

                          {/* Status Dropdown */}
                          <td className="py-4 px-5">
                            <select
                              value={reg.status}
                              onChange={(e) => handleUpdateStatus(reg.id, e.target.value as CustomerRegistration["status"])}
                              className={`px-3 py-1.5 rounded-xl font-black text-xs border cursor-pointer focus:outline-none ${
                                reg.status === "New"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : reg.status === "Contacted"
                                  ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                                  : reg.status === "Converted"
                                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                  : "bg-slate-800 text-slate-400 border-slate-700"
                              }`}
                            >
                              <option value="New" className="bg-slate-900 text-amber-300">🟡 New Lead</option>
                              <option value="Contacted" className="bg-slate-900 text-blue-300">🔵 Contacted</option>
                              <option value="Converted" className="bg-slate-900 text-emerald-300">🟢 Converted / Enrolled</option>
                              <option value="Archived" className="bg-slate-900 text-slate-400">⚪ Archived</option>
                            </select>
                          </td>

                          {/* Instant Actions (WhatsApp, Call, Delete) */}
                          <td className="py-4 px-5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {/* Direct WhatsApp Chat with Prefilled Intro */}
                              <a
                                href={`https://wa.me/${reg.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${reg.name}, thank you for registering for ${reg.course} at HIMASTECH Digital Marketing! How can I assist you with your batch enrollment?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-white border border-emerald-500/30 transition-all cursor-pointer"
                                title="Chat with customer on WhatsApp"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </a>

                              {/* Call */}
                              <a
                                href={`tel:${reg.phone}`}
                                className="p-2 rounded-xl bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-white border border-blue-500/30 transition-all cursor-pointer"
                                title="Call customer"
                              >
                                <Phone className="w-4 h-4" />
                              </a>

                              {/* Delete */}
                              <button
                                onClick={() => handleDeleteRegistration(reg.id, reg.name)}
                                className="p-2 rounded-xl bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/20 transition-all cursor-pointer"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: COURSE CHARGES & COURSE MANAGEMENT */}
        {/* =================================================================== */}
        {activeTab === "courses" && (
          <div className="space-y-6">
            
            {/* Header Controls */}
            <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  placeholder="Search course title or category..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={() => {
                    setEditingCourse({
                      id: `course-${Date.now()}`,
                      category: "realty",
                      categoryLabel: "Real Estate",
                      badge: "New Batch",
                      title: "",
                      description: "",
                      instructor: "Kishore Patel",
                      instructorRole: "Founder & Growth Strategist",
                      duration: "4 Weeks",
                      lessons: 20,
                      rating: 5.0,
                      reviewsCount: 100,
                      originalPrice: "₹9,999",
                      discountedPrice: "₹2,999",
                      language: "Telugu",
                      image: "/himastech-funnel-whiteboard.jpg",
                      modules: ["Module 1: Introduction", "Module 2: Practical Implementation"],
                      isActive: true
                    });
                    setIsCreatingCourse(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#062d72] to-[#f15a22] hover:opacity-95 text-white text-xs font-black transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Course</span>
                </button>
              </div>

            </div>

            {/* Courses Grid with Instant Price Editing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((c) => (
                <div 
                  key={c.id} 
                  className={`rounded-3xl bg-slate-900 border overflow-hidden shadow-lg flex flex-col justify-between transition-all ${
                    c.isActive === false ? "opacity-60 border-slate-800" : "border-slate-800 hover:border-amber-500/40"
                  }`}
                >
                  <div>
                    {/* Course Header Thumbnail */}
                    <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                      <Image
                        src={c.image || "/course-excel.jpg"}
                        alt={c.title}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-black text-amber-300 border border-amber-400/30">
                          {c.badge}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <button
                          type="button"
                          onClick={() => handleToggleCourseActive(c.id, c.isActive !== false)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition-colors cursor-pointer ${
                            c.isActive !== false
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              : "bg-red-500/20 text-red-300 border-red-500/40"
                          }`}
                        >
                          {c.isActive !== false ? "✓ Active on Site" : "✕ Hidden"}
                        </button>
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="p-5 space-y-3">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {c.categoryLabel} • {c.duration}
                      </div>

                      <h3 className="text-base font-black text-white leading-snug line-clamp-2">
                        {c.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {c.description}
                      </p>

                      {/* Live Charges & Price Editor Box */}
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center justify-between">
                          <span>Live Course Charges</span>
                          <span className="text-[10px] text-slate-500 font-normal">Instant Update</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] text-slate-400 font-bold mb-0.5">Discounted (Charge)</label>
                            <input
                              type="text"
                              defaultValue={c.discountedPrice}
                              onBlur={(e) => {
                                if (e.target.value !== c.discountedPrice) {
                                  handleQuickPriceUpdate(c.id, e.target.value);
                                }
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-black text-emerald-400 focus:outline-none focus:border-emerald-400"
                              placeholder="e.g. ₹4,999"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 font-bold mb-0.5">Original (Crossed)</label>
                            <input
                              type="text"
                              defaultValue={c.originalPrice}
                              onBlur={(e) => {
                                if (e.target.value !== c.originalPrice) {
                                  handleQuickPriceUpdate(c.id, c.discountedPrice, e.target.value);
                                }
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-400 line-through focus:outline-none focus:border-slate-500"
                              placeholder="e.g. ₹14,999"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/60 mt-2">
                    <button
                      onClick={() => {
                        setEditingCourse(c);
                        setIsCreatingCourse(false);
                      }}
                      className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Edit Course &amp; Modules</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* =================================================================== */}
      {/* EDIT / CREATE COURSE MODAL */}
      {/* =================================================================== */}
      {editingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                setEditingCourse(null);
                setIsCreatingCourse(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                {isCreatingCourse ? "Create New Course" : "Edit Course Details & Charges"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
                {isCreatingCourse ? "Add New Course to HIMASTECH" : editingCourse.title}
              </h2>
            </div>

            <form onSubmit={handleSaveCourse} className="space-y-4">
              
              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  value={editingCourse.title}
                  onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Pricing Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-400 mb-1">Discounted Live Charge (Price to Pay)</label>
                  <input
                    type="text"
                    required
                    value={editingCourse.discountedPrice}
                    onChange={(e) => setEditingCourse({ ...editingCourse, discountedPrice: e.target.value })}
                    placeholder="₹4,999"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-black text-emerald-300 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Original Price (Crossed Out)</label>
                  <input
                    type="text"
                    required
                    value={editingCourse.originalPrice}
                    onChange={(e) => setEditingCourse({ ...editingCourse, originalPrice: e.target.value })}
                    placeholder="₹14,999"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Badge & Category */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Badge (e.g. ★ Best Seller)</label>
                  <input
                    type="text"
                    value={editingCourse.badge}
                    onChange={(e) => setEditingCourse({ ...editingCourse, badge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Category</label>
                  <select
                    value={editingCourse.category}
                    onChange={(e) => setEditingCourse({ 
                      ...editingCourse, 
                      category: e.target.value as CourseItem["category"],
                      categoryLabel: e.target.value === "realty" ? "Real Estate" : e.target.value === "excel" ? "MS Excel" : e.target.value === "ai" ? "AI & Content" : "Digital Skills"
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="realty">Real Estate Marketing</option>
                    <option value="excel">MS Excel</option>
                    <option value="ai">AI &amp; Content</option>
                    <option value="affiliate">Affiliate &amp; Reselling</option>
                    <option value="design">Design &amp; Video</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingCourse.description}
                  onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Instructor & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Instructor Name</label>
                  <input
                    type="text"
                    value={editingCourse.instructor}
                    onChange={(e) => setEditingCourse({ ...editingCourse, instructor: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Duration &amp; Lessons</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={editingCourse.duration}
                      onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                      placeholder="e.g. 4 Weeks"
                      className="w-full px-2.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none"
                    />
                    <input
                      type="number"
                      value={editingCourse.lessons}
                      onChange={(e) => setEditingCourse({ ...editingCourse, lessons: parseInt(e.target.value) || 20 })}
                      placeholder="Lessons"
                      className="w-full px-2.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Curriculum Modules */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Curriculum Modules (1 per line)</label>
                <textarea
                  rows={4}
                  value={editingCourse.modules?.join("\n") || ""}
                  onChange={(e) => setEditingCourse({ 
                    ...editingCourse, 
                    modules: e.target.value.split("\n").filter(m => m.trim().length > 0) 
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none font-mono"
                  placeholder="Module 1: Getting Started&#10;Module 2: Practical Setup"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingCourse(null);
                    setIsCreatingCourse(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#062d72] to-[#f15a22] hover:opacity-95 text-white text-xs font-black shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Course &amp; Publish Charges</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

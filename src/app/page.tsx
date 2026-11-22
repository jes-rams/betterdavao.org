"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DavaoDistrictMap from "@/components/DavaoDistrictMap";
import AnimatedHeroCounters from "@/components/AnimatedHeroCounters";
import { useLanguage } from "@/context/LanguageContext";

// Data Imports
import agendaData from "../data/agenda.json";
import budgetData from "../data/budget.json";
import officialsData from "../data/officials.json";
import livabilityData from "../data/livability.json";
import projectsData from "../data/projects.json";

export default function Home() {
  const { t, language } = useLanguage();
  const { pillars } = agendaData;
  const budget = budgetData.budgets[0];
  const { officials } = officialsData;
  const ongoingProjects = projectsData.projects.ongoing.slice(0, 3);

  const openSearch = () => {
    window.dispatchEvent(new Event("open-command-palette"));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. HERO SECTION: Authoritative Civic Banner */}
        <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
          {/* Subtle Skyline Backdrop with High-Contrast Dark Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/landmarks/davao-skyline.jpg"
              alt="Davao City Skyline"
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/95"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 space-y-8 w-full">
            {/* Top Civic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/80 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>{t("hero_badge")}</span>
            </div>

            {/* Main Title & Mission */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {t("hero_title_1")}{" "}
                <span className="text-amber-400">
                  {t("hero_title_2")}
                </span>
                {" "}Better Davao.
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
                {t("hero_desc")}
              </p>
            </div>

            {/* Interactive Search Bar Trigger (Command Palette) */}
            <div className="max-w-2xl">
              <button
                type="button"
                onClick={openSearch}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-900 text-slate-300 border border-slate-700/80 hover:border-blue-500 shadow-lg transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-slate-400">
                    Search 182 barangays, 911 services, budget, ordinances, or projects...
                  </span>
                </div>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700 rounded-md">
                  Ctrl + K
                </kbd>
              </button>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>🏛️</span>
                <span>Citizen E-Services</span>
              </Link>
              <Link
                href="/agenda"
                className="bg-slate-800 hover:bg-slate-700 text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all border border-slate-700 hover:border-slate-600 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>📋</span>
                <span>{t("hero_cta_agenda")}</span>
              </Link>
              <Link
                href="/barangays"
                className="bg-slate-800 hover:bg-slate-700 text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all border border-slate-700 hover:border-slate-600 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>📍</span>
                <span>{language === "ceb" ? "182 Ka Barangay" : "182 Barangays"}</span>
              </Link>
              <Link
                href="/budget"
                className="bg-slate-800 hover:bg-slate-700 text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all border border-slate-700 hover:border-slate-600 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>📊</span>
                <span>₱12.7B Budget</span>
              </Link>
            </div>

            {/* Animated Counters Banner */}
            <AnimatedHeroCounters />
          </div>
        </section>

        {/* 2. CITIZEN E-SERVICES QUICK DIRECTORY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                Direct Citizen Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Frequently Accessed City Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              View All Municipal Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Service 1: eBPLS */}
            <Link
              href="/services#ebpls"
              className="civic-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl font-bold border border-blue-100 dark:border-blue-900">
                  🏢
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Online Business Permit (eBPLS)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Apply, renew, and pay local business permits online through the Business Bureau portal.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Business Bureau</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">Apply &rarr;</span>
              </div>
            </Link>

            {/* Service 2: Lingap Medical */}
            <Link
              href="/services#lingap"
              className="civic-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl font-bold border border-emerald-100 dark:border-emerald-900">
                  🩺
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Lingap Para sa Mahirap
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Zero-cost medical prescriptions, dialysis, hospital bill subsidies, and funeral aid.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Mayor&apos;s Office</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">Requirements &rarr;</span>
              </div>
            </Link>

            {/* Service 3: Central 911 */}
            <div className="civic-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-red-500 bg-red-50/20 dark:bg-red-950/20">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center text-xl font-bold border border-red-200 dark:border-red-900">
                  🚑
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Central 911 Emergency Response
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    24/7 toll-free medical ambulances, fire rescue, K9, and police response across Davao.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400 font-mono">Toll-Free 24/7</span>
                <a
                  href="tel:911"
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition shadow-xs"
                >
                  Call 911
                </a>
              </div>
            </div>

            {/* Service 4: Cedula & Tax */}
            <Link
              href="/services#cedula"
              className="civic-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl font-bold border border-amber-100 dark:border-amber-900">
                  📄
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Cedula &amp; Real Property Tax
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Community Tax Certificates, RPT assessments, and land tax payment locations.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">City Treasurer&apos;s Office</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">Details &rarr;</span>
              </div>
            </Link>

            {/* Service 5: Building Permits */}
            <Link
              href="/services#obps"
              className="civic-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl font-bold border border-indigo-100 dark:border-indigo-900">
                  🏗️
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Building Permits &amp; Inspections (OBPS)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Online building permit submissions, structural clearances, and occupancy certificate tracking.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">City Building Official</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">Check Guide &rarr;</span>
              </div>
            </Link>

            {/* Service 6: 182 Barangays */}
            <Link
              href="/barangays"
              className="civic-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl font-bold border border-purple-100 dark:border-purple-900">
                  🗺️
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    182 Barangay Hall Directory
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Find your local Barangay Captain, barangay hall address, and emergency contact numbers.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">3 Cong. Districts</span>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">Browse 182 &rarr;</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 3. CIVIC MONITORING DASHBOARD (Mega-Projects, Budget, Ordinances) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                Transparency &amp; Governance Pulse
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Public Works, Budget &amp; Landmark Ordinances
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Monitored in real time using official City Council reports and City Engineer disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CARD A: Mega-Projects Progress Tracker (HIGH CONTRAST RE-ENGINEERED) */}
            <div className="lg:col-span-2 civic-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                    Public Works Corridors
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Mega-Projects Progress
                  </h3>
                </div>
                <Link
                  href="/projects"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                >
                  All Projects &rarr;
                </Link>
              </div>

              {/* Projects List with High Contrast Progress Bars */}
              <div className="space-y-5">
                {ongoingProjects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                      <span className="text-slate-800 dark:text-slate-100 truncate max-w-[75%]">
                        {proj.name}
                      </span>
                      <span className="font-mono font-black text-blue-700 dark:text-blue-400 text-sm">
                        {proj.progress_percent}%
                      </span>
                    </div>
                    {/* High-Contrast Progress Bar Track */}
                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: `${proj.progress_percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status and Milestones Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  Davao Mountain Tunnel (45.5km) &bull; Samal Bridge (3.98km)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Civil Works
                </span>
              </div>
            </div>

            {/* CARD B: ₱12.7B Fiscal Budget Transparency */}
            <div className="civic-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    Approved Annual Budget
                  </span>
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                    {budget.amount_formatted}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 inline-block mt-1">
                    ↑ +7.62% increase vs 2023 Fiscal Year
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  General Fund: ₱10.12B (79.8%) &bull; Annual Development Fund: ₱2.40B (19.0%). Every peso open to public Dabawenyo inspection.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Social Services &amp; Health</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">38.4%</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Infrastructure &amp; Drainage</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">24.2%</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>General Public Services</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">22.8%</span>
                </div>
                <div className="pt-3">
                  <Link
                    href="/budget"
                    className="w-full text-center block py-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 font-bold text-xs text-blue-700 dark:text-blue-300 transition border border-blue-100 dark:border-slate-700"
                  >
                    Open Tax Impact Calculator &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECONDARY ROW: Landmark Civic Ordinances */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="civic-card p-6 rounded-2xl space-y-2">
              <span className="text-2xl block mb-1">🚭</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Comprehensive Anti-Smoking Law
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Strict citywide ban covering all public utility vehicles, enclosed buildings, and entertainment centers.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                City Ordinance No. 0367-12
              </div>
            </div>

            <div className="civic-card p-6 rounded-2xl space-y-2">
              <span className="text-2xl block mb-1">🍺</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                1:00 AM Citywide Liquor Ban
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Sale and consumption of alcoholic beverages prohibited from 1:00 AM to 8:00 AM in all public commercial spaces.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Executive Order No. 39
              </div>
            </div>

            <div className="civic-card p-6 rounded-2xl space-y-2">
              <span className="text-2xl block mb-1">🚗</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                30–60 km/h Speed Limit
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Radar-enforced speed limits: 30 km/h downtown, 40 km/h along secondary arterials, and 60 km/h along highways.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                City Ordinance No. 0270-23
              </div>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE 3-DISTRICT VECTOR MAP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DavaoDistrictMap />
        </section>

        {/* 5. 12 PRIORITY DEVELOPMENT AGENDA OF DAVAO CITY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                {t("section_agenda_badge")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {agendaData.title}
              </h2>
            </div>
            <Link
              href="/agenda"
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              View All 12 Pillars &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {pillars.map((pillar: any) => (
              <Link
                key={pillar.number}
                href={`/agenda/${pillar.slug}`}
                className="civic-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {pillar.image && (
                    <div className="w-full h-36 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-md">
                        {pillar.number}
                      </div>
                    </div>
                  )}
                  <div className="p-4 sm:p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {pillar.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                      {t("read_more")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. DAVAO LIFE IS HERE: 7 LIVABILITY PILLARS */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {t("section_life_badge")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {livabilityData.slogan}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {livabilityData.introduction}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {livabilityData.livability_pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={`/life-is-here/${pillar.id}`}
                  className="civic-card rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {pillar.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-blue-900 text-amber-300 text-xs font-black px-2.5 py-1 rounded-md shadow-sm">
                        {pillar.stat}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-2">
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{pillar.stat_label}</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                        {t("read_more")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 7. EXECUTIVE & LEGISLATIVE GOVERNANCE PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="civic-card rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  Executive &amp; Legislative Governance
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  City Leadership &amp; 21st City Council
                </h2>
              </div>
              <Link
                href="/council"
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                View All Councilors &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                  City Mayor
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {officials.mayor.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {officials.mayor.notes}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                  City Vice Mayor &amp; Presiding Officer
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {officials.vice_mayor.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {officials.vice_mayor.notes}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. EMERGENCY 911 LIFELINE CALLOUT */}
        <section className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center justify-center md:justify-start gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                24/7 Citizen Lifeline
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">Need Emergency Assistance in Davao?</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Dial Central 911 for free medical, search and rescue, fire, or police dispatch across all 182 barangays.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:911"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
              >
                Call Central 911
              </a>
              <a
                href="tel:0822411000"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all"
              >
                City Hall: (082) 241-1000
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
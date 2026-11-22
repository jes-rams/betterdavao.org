"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DavaoDistrictMap from "@/components/DavaoDistrictMap";
import AnimatedHeroCounters from "@/components/AnimatedHeroCounters";
import { useLanguage } from "@/context/LanguageContext";
import {
  Shield,
  Landmark,
  Building2,
  MapPin,
  Activity,
  FileText,
  PhoneCall,
  ArrowUpRight,
  Search,
  Compass,
  TrendingUp,
  Leaf,
  Scale,
  HardHat,
  Stethoscope,
  FileCheck,
  Truck,
  Sparkles,
  Clock,
  Droplets,
  AlertCircle
} from "lucide-react";

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
    <div className="min-h-screen bg-[#fbfbfa] dark:bg-[#060b13] flex flex-col font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. HERO SECTION: The Executive Civic Dossier */}
        <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060d17] text-white border-b border-slate-800/80">
          {/* Subtle Archival Backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/landmarks/davao-skyline.jpg"
              alt="Davao City Skyline"
              className="w-full h-full object-cover opacity-12 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-[#060d17]/85 to-[#060d17]/95"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 space-y-8 w-full">
            {/* Top Sovereign Imprint */}
            <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase text-amber-400/90 font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Republic of the Philippines</span>
              <span className="text-slate-600">&bull;</span>
              <span>City Government of Davao</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300">Executive Civic Dossier</span>
            </div>

            {/* Display Title in Editorial Serif */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="font-serif-civic text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] text-white">
                The Governance, Public Works &amp; Livability Dossier of{" "}
                <span className="italic text-amber-300 font-serif-civic">
                  Davao City
                </span>
                .
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-3xl">
                Guiding 2,443.6 square kilometers across 3 Congressional Districts and 182 Barangays. An independent civic transparency register delivering direct access to municipal budgets, emergency lifelines, major infrastructure corridors, and public e-services.
              </p>
            </div>

            {/* Command Search Trigger */}
            <div className="max-w-2xl">
              <button
                type="button"
                onClick={openSearch}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-900 text-slate-300 border border-slate-700/80 hover:border-amber-500/60 shadow-xl transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-slate-400">
                    Search 182 barangays, 911 dispatch, budget records, ordinances, or projects...
                  </span>
                </div>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700 rounded-md">
                  Ctrl + K
                </kbd>
              </button>
            </div>

            {/* Telemetry Jump Links */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center text-xs">
              <Link
                href="/services"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-sm inline-flex items-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>Citizen E-Services</span>
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-bold transition inline-flex items-center gap-2"
              >
                <HardHat className="w-4 h-4 text-amber-400" />
                <span>Infrastructure Corridors</span>
              </Link>
              <Link
                href="/barangays"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-bold transition inline-flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>182 Barangays Directory</span>
              </Link>
              <Link
                href="/budget"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-bold transition inline-flex items-center gap-2"
              >
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>₱12.7B Fiscal Budget</span>
              </Link>
            </div>

            {/* Telemetry Stat Cards */}
            <AnimatedHeroCounters />
          </div>
        </section>

        {/* 2. PUBLIC WORKS CORRIDORS & FISCAL TRANSPARENCY MONITOR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="telemetry-tag text-amber-700 dark:text-amber-400 block mb-1">
                CIVIL WORKS &bull; INFRASTRUCTURE CORRIDORS
              </span>
              <h2 className="font-serif-civic text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">
                Major Infrastructure &amp; Public Fund Accountability
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md font-mono">
              Monitored via DPWH Unified Project Management Office (UPMO) &amp; City Council Disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Mega-Projects Tracker Card */}
            <div className="lg:col-span-2 civic-dossier-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="telemetry-tag text-blue-700 dark:text-blue-400 block">
                    DPWH &bull; JICA &bull; CITY ENGINEER
                  </span>
                  <h3 className="font-serif-civic text-xl sm:text-2xl font-normal text-slate-900 dark:text-white tracking-tight mt-0.5">
                    Strategic Connectivity Corridors
                  </h3>
                </div>
                <Link
                  href="/projects"
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  All Projects <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* High-Density Project Dossier */}
              <div className="space-y-6">
                {/* Project 1 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100 block">
                        Davao City Bypass Construction Project (45.5 km)
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Package 1-1: 2.3km Twin-Tube Mountain Tunnel &bull; Shimizu-Fujita-Takenaka-EEI JV &bull; JICA PH-P261
                      </span>
                    </div>
                    <span className="font-mono font-black text-amber-700 dark:text-amber-400 text-sm shrink-0">
                      68% Complete
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-amber-600 via-blue-600 to-indigo-600 rounded-full transition-all duration-1000"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100 block">
                        Samal Island–Davao City Connector (SIDC) Marine Bridge (3.98 km)
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        4-Lane Cable-Stayed Marine Viaduct &bull; China Road &amp; Bridge Corp &bull; DPWH-UPMO
                      </span>
                    </div>
                    <span className="font-mono font-black text-blue-700 dark:text-blue-400 text-sm shrink-0">
                      42% Complete
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100 block">
                        Davao Public Transport Modernization Project (DPTMP / HPBS)
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        672-km Modern Bus Network &bull; 1,000+ Electric Units &bull; Asian Development Bank (ADB)
                      </span>
                    </div>
                    <span className="font-mono font-black text-emerald-700 dark:text-emerald-400 text-sm shrink-0">
                      55% Complete
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  Verified civil works contracts registered with the City Planning &amp; Development Office (CPDO).
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1.5 shrink-0 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Civil Works
                </span>
              </div>
            </div>

            {/* Fiscal Budget Card */}
            <div className="civic-dossier-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-amber-700 dark:text-amber-400">
                    CITY ORDINANCE NO. 0244-23
                  </span>
                  <Landmark className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                    {budget.amount_formatted}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 inline-block mt-1 font-mono">
                    ↑ +7.62% YoY Expansion vs FY 2023
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  General Fund: ₱10.12B (79.8%) &bull; Annual Development Fund: ₱2.40B (19.0%). Full transparency across every taxpayer peso.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Social Services &amp; Public Health</span>
                  <span className="font-bold text-slate-900 dark:text-slate-200">38.4% (₱4.88B)</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Infrastructure &amp; Drainage</span>
                  <span className="font-bold text-slate-900 dark:text-slate-200">24.2% (₱3.07B)</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>General Public Administration</span>
                  <span className="font-bold text-slate-900 dark:text-slate-200">22.8% (₱2.90B)</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Economic Services &amp; Agribusiness</span>
                  <span className="font-bold text-slate-900 dark:text-slate-200">14.6% (₱1.85B)</span>
                </div>
                <div className="pt-3">
                  <Link
                    href="/budget"
                    className="w-full text-center block py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs text-white transition border border-slate-700"
                  >
                    Launch Dabawenyo Tax Impact Calculator &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. VERIFIED MUNICIPAL CITIZEN E-SERVICES DIRECTORY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="telemetry-tag text-blue-700 dark:text-blue-400 block mb-1">
                EXECUTIVE E-GOVERNANCE DIRECTORY
              </span>
              <h2 className="font-serif-civic text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">
                Official Municipal Citizen E-Portals
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              Complete Services Catalog <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Tile 1: eBPLS */}
            <div className="civic-dossier-card p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-slate-500 dark:text-slate-400">Business Bureau</span>
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Online Business Permit Licensing System (eBPLS)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Apply, renew, and track city business permits online through the Business Bureau portal with real-time assessment.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">&bull; 100% Online</span>
                <a
                  href="https://appbts.davaocity.gov.ph/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Access eBPLS <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Tile 2: Lingap */}
            <div className="civic-dossier-card p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-slate-500 dark:text-slate-400">City Mayor&apos;s Office</span>
                  <Stethoscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Lingap Para sa Mahirap Medical Aid
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Zero-cost municipal medical prescriptions, dialysis assistance, hospital billing subsidies, and funeral grants.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">General Fund Subsidized</span>
                <Link
                  href="/services#lingap"
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Requirements &rarr;
                </Link>
              </div>
            </div>

            {/* Tile 3: Central 911 */}
            <div className="civic-dossier-card p-6 rounded-2xl flex flex-col justify-between group hover:border-red-500 bg-red-50/20 dark:bg-red-950/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-red-600 dark:text-red-400">CDRRMO &bull; Central 911</span>
                  <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Central 911 Emergency Response
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    24/7 toll-free emergency medical ambulances, fire rescue, K9 units, and police dispatch covering all 182 barangays.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-red-600 dark:text-red-400 font-bold">Zero Citizen Cost</span>
                <a
                  href="tel:911"
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition"
                >
                  Dial 911 Direct
                </a>
              </div>
            </div>

            {/* Tile 4: Cedula & Tax */}
            <div className="civic-dossier-card p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-slate-500 dark:text-slate-400">City Treasurer</span>
                  <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Cedula &amp; Real Property Tax (RPT)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Community Tax Certificates, land tax assessments, and electronic payment channels across the city.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">CTO Treasury Window</span>
                <a
                  href="https://cedula.davaocity.gov.ph/Home/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Online Cedula <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Tile 5: OBPS */}
            <div className="civic-dossier-card p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-slate-500 dark:text-slate-400">Building Official</span>
                  <HardHat className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Online Building Permit System (OBPS)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Digital submission of structural plans, zoning clearances, and construction permits with transparent engineering tracking.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">OCBO Engineering</span>
                <a
                  href="https://obps.davaocity.gov.ph/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Access OBPS <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Tile 6: 182 Barangays */}
            <div className="civic-dossier-card p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="telemetry-tag text-slate-500 dark:text-slate-400">3 Cong. Districts</span>
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    182 Barangay Hall Administrative Directory
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Direct directory of Barangay Captains, barangay hall addresses, and emergency hotline contacts across all 3 districts.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold">182 Communities</span>
                <Link
                  href="/barangays"
                  className="text-xs font-bold text-purple-700 dark:text-purple-400 hover:underline inline-flex items-center gap-1"
                >
                  Browse 182 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DAVAO LANDMARK LEGAL STANDARDS & ORDINANCES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="telemetry-tag text-amber-700 dark:text-amber-400 block mb-1">
                CIVIC DISCIPLINE &bull; CODIFIED CITY ORDINANCES
              </span>
              <h2 className="font-serif-civic text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">
                Landmark Legal Frameworks
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              Codified and strictly enforced by the City Transport &amp; Traffic Management Office (CTTMO) &amp; DCPO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="civic-dossier-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="telemetry-tag text-slate-500">City Ordinance No. 0367-12</span>
                <Scale className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Comprehensive Anti-Smoking Law
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Complete prohibition of smoking and electronic vaping inside public conveyances, government offices, commercial dining areas, and entertainment centers.
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                Penalty: ₱1,000–₱5,000 fine / Mandatory smoking cessation seminar
              </div>
            </div>

            <div className="civic-dossier-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="telemetry-tag text-slate-500">Executive Order No. 39</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                1:00 AM Citywide Liquor Curfew
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Mandatory cessation of alcohol distribution, retail sale, and public consumption between 1:00 AM and 8:00 AM across all commercial establishments.
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                Enforced by: DCPO Task Force &bull; Business license revocation on 3rd offense
              </div>
            </div>

            <div className="civic-dossier-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="telemetry-tag text-slate-500">City Ordinance No. 0270-23</span>
                <Truck className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Speed Limit Regulation (30–60 km/h)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Radar-enforced speed limits: 30 km/h in downtown and school corridors, 40 km/h along secondary city arterials, and 60 km/h on national highways.
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                Monitored by: CTTMO Speed Radar Patrols &bull; Reduced traffic fatalities by 60%
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOVEREIGN CULTURAL HERITAGE: THE 11 ETHNOLINGUISTIC TRIBES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="civic-dossier-card rounded-3xl p-6 sm:p-10 space-y-8 bg-gradient-to-br from-white via-[#fcfbf9] to-[#faf8f4] dark:from-[#0b1322] dark:via-[#090f1b] dark:to-[#060b13] border-amber-200/50 dark:border-amber-900/30">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-amber-200/40 dark:border-slate-800 pb-4">
              <div>
                <span className="telemetry-tag text-amber-700 dark:text-amber-400 block mb-1">
                  ANCESTRAL DOMAIN &bull; CULTURAL HERITAGE
                </span>
                <h2 className="font-serif-civic text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">
                  Harmonious Haven of Davao&apos;s 11 Ethnolinguistic Tribes
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-950/70 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800">
                11 Official Deputy Mayors in City Hall
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-4xl">
              Long before colonial foundations, Davao&apos;s vast highland valleys, pristine rivers, and coastal shores were nurtured by 11 recognized indigenous nations. Davao City is the only local government in the Philippines with 11 salaried tribal Deputy Mayors holding direct executive voice in City Hall.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-2">
              {/* Lumad Peoples */}
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="telemetry-tag text-amber-700 dark:text-amber-400 block">
                  The 5 Lumad Highland Nations
                </span>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Ata:</strong> Traditional highland hunters and basketry artisans of the Paquibato mountain ranges.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Klata (Guiangan):</strong> Master herbalists, forest botanists, and weavers of Baguio and Tugbok districts.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Matigsalug:</strong> &ldquo;People of the Salug River&rdquo; renowned for epic beadwork and oral traditions in Marilog.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Ovu-Manuvo:</strong> Sacred guardians of the forested slopes and volcanic headwaters of Mount Apo.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Tagabawa:</strong> Bagobo cultivators of traditional Inabal sacred abaca cloth and brass ornaments.
                  </div>
                </div>
              </div>

              {/* Moro Peoples */}
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="telemetry-tag text-emerald-700 dark:text-emerald-400 block">
                  The 6 Moro Maritime &amp; Valley Nations
                </span>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Iranun:</strong> Ancient seafarers and navigators of the southern seas and Davao Gulf coastlines.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Kagan:</strong> Original agricultural river settlers along the fertile Davao and Sirawan river basins.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Maguindanaon:</strong> Historical artisans, brass casters, and diplomatic leaders of Mindanao trade.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Maranao:</strong> &ldquo;People of the Lake&rdquo; famed for exquisite Okir woodcarvings and commerce.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Sama:</strong> Peaceful maritime voyagers, master boatbuilders, and custodians of coastal waters.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Tausug:</strong> &ldquo;People of the Current&rdquo; known for culinary heritage, trade, and steadfast defense.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 border-t border-amber-200/30 dark:border-slate-800">
              <span>Celebrated annually during the month of August during the grand <strong>Kadayawan Festival</strong>.</span>
              <Link
                href="/life-is-here/cultural-diversity"
                className="font-bold text-amber-700 dark:text-amber-400 hover:underline"
              >
                Read Cultural Heritage Charter &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 6. GEOGRAPHIC & DISTRICT NAVIGATION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DavaoDistrictMap />
        </section>

        {/* 7. 12 PRIORITY DEVELOPMENT AGENDA OF DAVAO CITY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="telemetry-tag text-blue-700 dark:text-blue-400 block mb-1">
                STRATEGIC MUNICIPAL BLUEPRINT &bull; 12 EXECUTIVE PILLARS
              </span>
              <h2 className="font-serif-civic text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">
                {agendaData.title}
              </h2>
            </div>
            <Link
              href="/agenda"
              className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              View Full 12 Pillars Strategy <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {pillars.map((pillar: any) => (
              <Link
                key={pillar.number}
                href={`/agenda/${pillar.slug}`}
                className="civic-dossier-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-500"
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
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-slate-900/90 text-white font-mono font-bold text-xs shadow-md border border-slate-700">
                        Pillar {pillar.number}
                      </div>
                    </div>
                  )}
                  <div className="p-4 sm:p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {pillar.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:underline inline-flex items-center gap-0.5">
                      Inspect Pillar <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 8. DAVAO LIFE IS HERE: LIVABILITY ARCHIVE */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="telemetry-tag text-emerald-700 dark:text-emerald-400">
                OFFICIAL MUNICIPAL CHARTER &bull; LIVABILITY ARCHIVE
              </span>
              <h2 className="font-serif-civic text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                {livabilityData.slogan}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {livabilityData.introduction}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {livabilityData.livability_pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={`/life-is-here/${pillar.id}`}
                  className="civic-dossier-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-500"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-700">
                        {pillar.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-950/90 text-amber-300 font-mono text-xs font-black px-2.5 py-1 rounded-md shadow-sm border border-slate-800">
                        {pillar.stat}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2">
                      <h3 className="font-serif-civic text-lg font-normal text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-2">
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-mono">{pillar.stat_label}</span>
                      <span className="text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:underline inline-flex items-center gap-0.5">
                        Read Charter <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. EXECUTIVE & LEGISLATIVE GOVERNANCE DOSSIER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="civic-dossier-card rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="telemetry-tag text-blue-700 dark:text-blue-400 block mb-1">
                  MUNICIPAL EXECUTIVE &bull; 21ST SANGGUNIANG PANLUNGSOD
                </span>
                <h2 className="font-serif-civic text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white">
                  Executive Leadership &amp; City Council
                </h2>
              </div>
              <Link
                href="/council"
                className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                All 24 City Councilors Directory <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="telemetry-tag text-blue-700 dark:text-blue-400 block">
                  City Mayor of Davao
                </span>
                <h3 className="font-serif-civic text-xl sm:text-2xl font-normal text-slate-900 dark:text-white">
                  {officials.mayor.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {officials.mayor.notes}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="telemetry-tag text-blue-700 dark:text-blue-400 block">
                  Vice Mayor &amp; Presiding Officer
                </span>
                <h3 className="font-serif-civic text-xl sm:text-2xl font-normal text-slate-900 dark:text-white">
                  {officials.vice_mayor.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {officials.vice_mayor.notes}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CENTRAL 911 EMERGENCY LIFELINE CALLOUT */}
        <section className="bg-[#060d17] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="telemetry-tag text-red-400 flex items-center justify-center md:justify-start gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                24/7 Citizen Emergency Lifeline
              </span>
              <h3 className="font-serif-civic text-2xl sm:text-3xl font-normal">Need Emergency Assistance in Davao?</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-light">
                Dial Central 911 for free medical ambulance, search and rescue, fire, or police dispatch across all 182 barangays. Funded 100% by local city taxes with zero cost to citizens.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:911"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
              >
                Call Central 911 Direct
              </a>
              <a
                href="tel:0822411000"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all"
              >
                City Hall Trunkline: (082) 241-1000
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
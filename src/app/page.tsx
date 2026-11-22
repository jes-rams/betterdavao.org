"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DavaoDistrictMap from "@/components/DavaoDistrictMap";
import { useLanguage } from "@/context/LanguageContext";

// Data Imports
import agendaData from "../data/agenda.json";
import ordinancesData from "../data/ordinances.json";
import budgetData from "../data/budget.json";
import officialsData from "../data/officials.json";
import contactData from "../data/contact.json";
import livabilityData from "../data/livability.json";
import projectsData from "../data/projects.json";

export default function Home() {
  const { t, language } = useLanguage();
  const { pillars } = agendaData;
  const ordinances = ordinancesData.landmark_ordinances;
  const budget = budgetData.budgets[0];
  const { officials } = officialsData;
  const { contact_information } = contactData;
  const ongoingProjects = projectsData.projects.ongoing.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 space-y-12 sm:space-y-16">
        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-16 px-6 sm:px-12 overflow-hidden bg-blue-950 text-white min-h-[80vh] flex items-center border-b border-blue-900/40">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/landmarks/davao-skyline.jpg"
              alt="Davao Skyline"
              className="w-full h-full object-cover opacity-25 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/80 to-blue-950"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 space-y-8 w-full mt-6">
            {/* Community Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {t("hero_badge")}
            </div>

            {/* Main Headline */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
                {t("hero_title_1")} <br />
                {t("hero_title_2")} <span className="text-amber-400">Better Davao</span>.
              </h1>
              <p className="text-lg sm:text-2xl text-blue-100 leading-relaxed font-light">
                {t("hero_desc")}
              </p>
            </div>

            {/* City Pride Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                🏔️ Mount Apo (2,954m Peak)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                🦅 Home of the Philippine Eagle
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                💧 100% Potable Mountain Tap Water
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                🚑 24/7 Zero-Cost Central 911
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                👑 Fruit &amp; Cacao Capital
              </span>
            </div>

            {/* Fast Action CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                href="/life-is-here"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3.5 rounded-xl font-black shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm sm:text-base"
              >
                {t("hero_cta_life")}
              </Link>
              <Link
                href="/agenda"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold shadow-md transition-all border border-blue-500 text-sm sm:text-base"
              >
                {t("hero_cta_agenda")}
              </Link>
              <Link
                href="/barangays"
                className="bg-slate-800/80 hover:bg-slate-700 text-white px-5 py-3.5 rounded-xl font-bold shadow-md transition-all border border-slate-700 text-sm sm:text-base"
              >
                🏛️ {language === "ceb" ? "182 Ka Barangay" : "182 Barangays"}
              </Link>
            </div>
          </div>
        </section>

        {/* 2. THE MODERN CIVIC BENTO GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                Civic Pulse &amp; Transparency Command
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Davao City at a Glance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Real-time civic indicators, 24/7 emergency response, municipal projects, and public funds in one unified view.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* BENTO CELL 1: Central 911 Emergency Command (Red/Card) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    Central 911 Dispatch
                  </span>
                  <span className="text-2xl">🚑</span>
                </div>
                <h3 className="text-2xl font-black leading-tight">
                  Free 24/7 Emergency Medical &amp; Rescue
                </h3>
                <p className="text-xs text-red-100 leading-relaxed font-light">
                  First integrated 911 dispatch in Asia outside North America. Zero cost to citizens, funded 100% by local taxes.
                </p>
              </div>

              <div className="pt-6 relative z-10 flex items-center justify-between border-t border-red-400/40 mt-4">
                <span className="text-xs font-bold text-red-100">&lt; 8 Mins Urban Response</span>
                <a
                  href="tel:911"
                  className="px-4 py-2 rounded-xl bg-white text-red-700 font-black text-xs hover:bg-red-50 transition shadow-xs"
                >
                  Dial 911 &rarr;
                </a>
              </div>
            </div>

            {/* BENTO CELL 2: ₱12.7B Fiscal Transparency (Blue/Card) */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    2024 Approved Budget
                  </span>
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">
                    {budget.amount_formatted}
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-block mt-1">
                    ↑ +7.62% increase vs 2023
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  General Fund: ₱10.12B (79.8%) &bull; Annual Dev Fund: ₱2.40B (19.0%). Every peso open to public inspection.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Tax Calculator</span>
                <Link
                  href="/budget"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Inspect Budget &rarr;
                </Link>
              </div>
            </div>

            {/* BENTO CELL 3: Potable Tap Water (Teal/Card with Image) */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-end group min-h-[220px]">
              <img
                src="/images/landmarks/davao-potable-water.jpg"
                alt="Davao Tap Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              <div className="relative z-10 p-6 space-y-2 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-500/80 backdrop-blur-xs text-[10px] font-black uppercase tracking-wider inline-block">
                  WHO Drinking Standard
                </span>
                <h3 className="text-xl font-bold leading-tight">100% Drinkable Tap Water</h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Naturally filtered through volcanic aquifers beneath Mount Apo. Zero bottled water needed.
                </p>
                <Link
                  href="/life-is-here/clean-water"
                  className="text-xs font-bold text-teal-300 hover:underline inline-block pt-1"
                >
                  Read Water Report &rarr;
                </Link>
              </div>
            </div>

            {/* BENTO CELL 4: Fruit & Cacao Capital (Amber/Card with Image) */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-end group min-h-[220px]">
              <img
                src="/images/landmarks/davao-fruit-bounty.jpg"
                alt="Davao Fruit Bounty"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
              <div className="relative z-10 p-6 space-y-2 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider inline-block">
                  Fruit &amp; Cacao Capital
                </span>
                <h3 className="text-xl font-bold leading-tight">Durian, Pomelo &amp; Cacao</h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Top 1 national producer of durian and gold-medal artisan Malagos dark chocolate.
                </p>
                <Link
                  href="/life-is-here/food-abundance"
                  className="text-xs font-bold text-amber-300 hover:underline inline-block pt-1"
                >
                  Explore Agricultural Bounty &rarr;
                </Link>
              </div>
            </div>

            {/* BENTO CELL 5 (WIDE - 2 COLS): Mega-Infrastructure Progress Tracker */}
            <div className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                    Public Works Corridors
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Mega-Projects Progress
                  </h3>
                </div>
                <Link href="/projects" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  All Projects &rarr;
                </Link>
              </div>

              <div className="space-y-3.5">
                {ongoingProjects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800 dark:text-slate-200 truncate max-w-[70%]">{proj.name}</span>
                      <span className="text-amber-500 font-mono">{proj.progress_percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-blue-600 rounded-full"
                        style={{ width: `${proj.progress_percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Davao Mountain Tunnel (45.5km) &bull; Samal Bridge (3.98km)</span>
                <span className="font-semibold text-emerald-500">Active Works</span>
              </div>
            </div>

            {/* BENTO CELL 6: Citizen E-Services Direct Hub */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    E-Governance
                  </span>
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Citizen E-Services
                </h3>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Online Business Permit (eBPLS)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Online Cedula Application</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Lingap para sa Mahirap Aid</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Building Permits (OBPS)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                <Link
                  href="/services"
                  className="w-full text-center block py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs text-slate-800 dark:text-slate-200 transition"
                >
                  Open E-Services Directory &rarr;
                </Link>
              </div>
            </div>

            {/* BENTO CELL 7: Civic Discipline & Landmark Laws */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Public Safety Laws
                  </span>
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Civic Discipline
                </h3>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">🚭 Anti-Smoking Law</span>
                    <span>Strict ban in public places &amp; transit</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">🍺 1:00 AM Liquor Ban</span>
                    <span>Zero public street drinking 24/7</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">🚗 Speed Limits (30-60 kph)</span>
                    <span>Monitored with radar guns by CTTMO</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                <Link
                  href="/life-is-here/peace-and-discipline"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Ordinance Rules &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE 3-DISTRICT VECTOR MAP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DavaoDistrictMap />
        </section>

        {/* 4. Slogan Showcase: Davao Life Is Here (7 Pillars) */}
        <section className="relative py-16 px-6 sm:px-12 bg-emerald-50/90 dark:bg-slate-900/60 border-t border-b border-emerald-100 dark:border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {t("section_life_badge")}
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {livabilityData.slogan}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                {livabilityData.introduction}
              </p>
            </div>

            {/* Livability Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {livabilityData.livability_pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={`/life-is-here/${pillar.id}`}
                  className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {pillar.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-blue-900/90 backdrop-blur-xs text-amber-300 text-xs font-black px-2.5 py-1 rounded-lg">
                        {pillar.stat}
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{pillar.stat_label}</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline inline-flex items-center gap-1">
                        {t("read_more")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 12 Priority Development Pillars Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                {t("section_agenda_badge")}
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar: any) => (
              <Link
                key={pillar.number}
                href={`/agenda/${pillar.slug}`}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition group flex flex-col justify-between"
              >
                <div>
                  {pillar.image && (
                    <div className="w-full h-32 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                        {pillar.number}
                      </div>
                    </div>
                  )}
                  <div className="p-4 space-y-1.5">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {pillar.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                      {t("read_more")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. City Leadership Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
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
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {officials.mayor.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {officials.mayor.notes}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                  City Vice Mayor &amp; Presiding Officer
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {officials.vice_mayor.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {officials.vice_mayor.notes}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Emergency Direct Dial Banner */}
        <section className="bg-slate-900 text-white py-12 px-6 sm:px-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                24/7 Citizen Lifeline
              </span>
              <h3 className="text-2xl font-black">Need Emergency Assistance in Davao?</h3>
              <p className="text-xs text-slate-400">
                Dial Central 911 for free medical, search and rescue, fire, or police dispatch across all 182 barangays.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:911"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-md transition"
              >
                Call Central 911
              </a>
              <a
                href="tel:0822411000"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition"
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

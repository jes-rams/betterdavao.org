"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DavaoDistrictMap from "@/components/DavaoDistrictMap";
import barangaysData from "@/data/barangays.json";
import { useLanguage } from "@/context/LanguageContext";

export default function BarangaysPage() {
  const { t, language } = useLanguage();
  const [selectedDistrict, setSelectedDistrict] = useState<number | "all">("all");
  const [selectedAdmin, setSelectedAdmin] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const { administrative_districts, barangays, summary } = barangaysData;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const filteredBarangays = useMemo(() => {
    return barangays.filter((b) => {
      const matchDistrict = selectedDistrict === "all" || b.congressional_district === selectedDistrict;
      const matchAdmin = selectedAdmin === "all" || b.admin_district === selectedAdmin;
      const matchQuery =
        !searchQuery.trim() ||
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.admin_district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.police_precinct.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.type.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDistrict && matchAdmin && matchQuery;
    });
  }, [selectedDistrict, selectedAdmin, searchQuery, barangays]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            <span>🏛️</span>
            {language === "ceb" ? "182 Ka Barangay • 3 Ka Distrito" : "182 Barangays • 3 Congressional Districts"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {language === "ceb" ? "Direktoryo sa mga Barangay ug Emerhensya" : "Davao City Barangay & Emergency Hub"}
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-light">
            {language === "ceb"
              ? "Pangitaa ang imong barangay, pinakaduol nga estasyon sa pulis, district health center, ug hotline sa emerhensya."
              : "Search your barangay, locate your local police station precinct, district health center, and direct emergency dispatch contact."}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-4 text-xs font-semibold">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="block text-2xl font-black text-amber-400">{summary.total_barangays}</span>
              <span className="text-slate-200">Barangays</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="block text-2xl font-black text-blue-400">3</span>
              <span className="text-slate-200">Cong. Districts</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="block text-2xl font-black text-emerald-400">11</span>
              <span className="text-slate-200">Admin Districts</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="block text-2xl font-black text-red-400">24/7</span>
              <span className="text-slate-200">Central 911</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 flex-1 w-full">
        {/* Interactive District Vector Map */}
        <DavaoDistrictMap />

        {/* Search & Filters */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder={language === "ceb" ? "Pangitaa ang barangay (e.g. Bucana, Buhangin, Mintal)..." : "Search barangay (e.g. Bucana, Buhangin, Mintal)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Congressional District Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button
                onClick={() => { setSelectedDistrict("all"); setSelectedAdmin("all"); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedDistrict === "all"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                All Districts
              </button>
              <button
                onClick={() => { setSelectedDistrict(1); setSelectedAdmin("all"); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedDistrict === 1
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                District 1 (Poblacion &amp; Talomo)
              </button>
              <button
                onClick={() => { setSelectedDistrict(2); setSelectedAdmin("all"); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedDistrict === 2
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                District 2 (North &amp; Agdao)
              </button>
              <button
                onClick={() => { setSelectedDistrict(3); setSelectedAdmin("all"); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedDistrict === 3
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                District 3 (South &amp; Highlands)
              </button>
            </div>
          </div>

          {/* Sub-district filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
            <span className="font-semibold text-slate-400 mr-1">Admin District:</span>
            <button
              onClick={() => setSelectedAdmin("all")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                selectedAdmin === "all"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All
            </button>
            {administrative_districts
              .filter((d) => selectedDistrict === "all" || d.congressional_district === selectedDistrict)
              .map((admin) => (
                <button
                  key={admin.id}
                  onClick={() => setSelectedAdmin(admin.name)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                    selectedAdmin === admin.name
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {admin.name}
                </button>
              ))}
          </div>
        </div>

        {/* Floating Toast when copied */}
        {copiedNumber && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-xs font-semibold">Copied {copiedNumber} to clipboard!</span>
          </div>
        )}

        {/* Barangay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBarangays.map((b, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                    {b.name}
                  </h3>
                  <span className="shrink-0 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    Dist. {b.congressional_district}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{b.admin_district} District</span>
                  <span>&bull;</span>
                  <span>{b.type}</span>
                </div>

                <div className="space-y-1.5 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="text-blue-500">🛡️ Police:</span>
                    <span className="font-semibold">{b.police_precinct}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="text-red-500">🚑 Dispatch:</span>
                    <span className="font-semibold">Central 911 Station</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={`tel:${b.hotline.replace(/[^0-9]/g, "")}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs transition"
                >
                  Call Station
                </a>
                <button
                  onClick={() => copyToClipboard(b.hotline)}
                  className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold transition"
                  title="Copy Phone Number"
                >
                  {copiedNumber === b.hotline ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBarangays.length === 0 && (
          <div className="py-16 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="font-bold text-base text-slate-700 dark:text-slate-300">No barangays found</p>
            <p className="text-xs text-slate-400 mt-1">Try searching for a different neighborhood or resetting filters.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

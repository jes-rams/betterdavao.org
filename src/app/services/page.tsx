"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import servicesData from "@/data/services.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...servicesData.categories];

  const filteredServices = useMemo(() => {
    return servicesData.services.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.department.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            {language === "ceb" ? "Gipanghimatuod nga mga Portal" : "Verified Municipal E-Portals"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {language === "ceb" ? "Direktoryo sa mga Online Serbisyo sa Davao" : "Davao City Citizen E-Services Directory"}
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-light">
            {language === "ceb"
              ? "Diretsong mga link sa online business permits (eBPLS), building clearance, cedula, bayad sa buhis, ug Lingap assistance."
              : "Direct, verified links to official online licensing portals, building permits, tax payments, civil registry documents, and social assistance services."}
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <input
                type="text"
                placeholder={language === "ceb" ? "Pangitaa ang serbisyo (e.g. business permit, cedula, lingap)..." : "Search services (e.g. business permit, cedula, lingap, civil registry)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm border border-slate-200 dark:border-slate-700"
              />
              <svg
                className="w-5 h-5 text-slate-400 absolute left-4 top-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium px-1">
          <span>Showing {filteredServices.length} citizen service{filteredServices.length !== 1 ? "s" : ""}</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredServices.map((service: any) => (
              <div
                key={service.id}
                className="civic-card rounded-2xl flex flex-col justify-between overflow-hidden group"
              >
                {service.image && (
                  <div className="w-full h-44 bg-slate-200 dark:bg-slate-800 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  </div>
                )}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-100 dark:border-blue-900 uppercase tracking-wide">
                        {service.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {service.department}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h2>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.short_description}
                    </p>

                    {service.tip && (
                      <div className="bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl p-3 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <span className="font-bold shrink-0">💡 Citizen Tip:</span>
                        <span>{service.tip}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                    <a
                      href={service.action_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition"
                    >
                      {service.action_label} &rarr;
                    </a>

                    {service.tracking_url && (
                      <a
                        href={service.tracking_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-200 dark:border-slate-700 transition"
                      >
                        Track Status
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-300">No services found matching your query</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Try searching for keywords like "permit", "payment", or "hotline".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import budgetData from "@/data/budget.json";
import { useLanguage } from "@/context/LanguageContext";

export default function BudgetPage() {
  const { t, language } = useLanguage();
  const [citizenTax, setCitizenTax] = useState<number>(10000);
  const [activeTab, setActiveTab] = useState<"overview" | "allocations" | "calculator">("overview");

  const budget2024 = budgetData.budgets.find((b) => b.year === 2024)!;
  const budget2023 = budgetData.budgets.find((b) => b.year === 2023)!;

  // Proportions of the ₱12.735 Billion Budget
  const allocations = [
    { name: "City Mayor's Office & Public Security", amount: "₱4.0 Billion", pct: 31.4, color: "bg-blue-600", desc: "Barangay support, peace maintenance, civil safety, and administrative execution." },
    { name: "City Engineer's Office (Public Works)", amount: "₱2.0 Billion", pct: 15.7, color: "bg-indigo-600", desc: "Road networks, drainage systems, streetlighting, and municipal repairs." },
    { name: "Annual Development Fund (Capital Outlay)", amount: "₱1.6 Billion", pct: 12.6, color: "bg-amber-500", desc: "Long-term infrastructure, flood walls, multi-purpose facilities, and bridges." },
    { name: "City Social Welfare & Development (CSWDO)", amount: "₱845 Million", pct: 6.6, color: "bg-emerald-600", desc: "Lingap para sa Mahirap medical assistance, child nutrition, and senior citizen pensions." },
    { name: "Disaster Risk Reduction & Management (CDRRMO / 911)", amount: "₱826 Million", pct: 6.5, color: "bg-red-500", desc: "Central 911 emergency dispatch operations, search & rescue gear, and weather radar." },
    { name: "City Health Office (CHO)", amount: "₱812 Million", pct: 6.4, color: "bg-teal-500", desc: "District health clinics, free medicines, vaccinations, and maternal healthcare." },
    { name: "Other Essential Departments (Agri, Tourism, IT)", amount: "₱2.65 Billion", pct: 20.8, color: "bg-slate-500", desc: "Agricultural support, city planning, legal services, IT modernization, and sanitation." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Header Section */}
        <section className="relative py-16 text-center w-full px-4 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/landmarks/davao-city-hall.jpg"
              alt="Davao City Hall"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-blue-950/90"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <span>📊</span>
              {language === "ceb" ? "Katin-awan sa Panalapi sa Dakbayan" : "Civic Fiscal Transparency"}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === "ceb" ? "Pondo sa Davao: Asa Padulong ang Salapi sa Katawhan?" : "Davao City Fiscal Transparency & Public Budget"}
            </h1>
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-light">
              {language === "ceb"
                ? `Ang matag piso sa pondo sa dakbayan gikan sa buhis sa mga Dabawenyo. Aniay katin-awan sa ${budget2024.amount_formatted} nga pondo.`
                : `Every peso in the city budget originates from citizens and businesses. Here is a clear, plain-language breakdown of the ${budget2024.amount_formatted} budget for ${budget2024.year}.`}
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "overview"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            {language === "ceb" ? "Kinatibuk-ang Pagbahin" : "Overview & Growth"}
          </button>
          <button
            onClick={() => setActiveTab("allocations")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "allocations"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            {language === "ceb" ? "Gasto Matag Departamento" : "Department Allocations"}
          </button>
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "calculator"
                ? "bg-amber-500 text-slate-950 shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            🧮 {language === "ceb" ? "Kalkyuleytor sa Buhis" : "Citizen Tax Calculator"}
          </button>
        </div>

        {/* Tab 1: Overview & Year-over-Year Growth */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Year-over-Year Growth Card */}
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Year-over-Year Budget Growth</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    The {budget2024.year} budget saw an increase of 7.62% compared to {budget2023.year}, funding expanding social services, health clinics, and the ongoing public transport and flood-mitigation initiatives.
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                  <div className="text-center">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">{budget2023.year}</span>
                    <span className="block text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-400">{budget2023.amount_formatted}</span>
                  </div>
                  <div className="text-slate-300 dark:text-slate-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="text-center p-3.5 bg-blue-50 dark:bg-blue-950/50 rounded-xl border border-blue-200 dark:border-blue-900">
                    <span className="block text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">{budget2024.year}</span>
                    <span className="block text-2xl sm:text-3xl font-black text-blue-700 dark:text-blue-300">{budget2024.amount_formatted}</span>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 text-[11px] font-bold rounded-full">+7.62%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Fund Structure Visualizer */}
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Fund Classification Structure</h2>
              
              {/* Stacked Percentage Bar */}
              <div className="space-y-2">
                <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex">
                  <div style={{ width: "79.82%" }} className="bg-blue-600 h-full flex items-center justify-center text-[11px] font-bold text-white tracking-wide" title="General Fund: 79.82%">
                    General Fund (79.8%)
                  </div>
                  <div style={{ width: "19.04%" }} className="bg-amber-500 h-full flex items-center justify-center text-[11px] font-bold text-slate-950 tracking-wide" title="Annual Development Fund: 19.04%">
                    ADF (19.0%)
                  </div>
                  <div style={{ width: "1.14%" }} className="bg-slate-400 h-full" title="Special Accounts: 1.14%"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> General Fund: ₱10.12B</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Annual Dev Fund: ₱2.40B</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    General Fund (₱10.12 Billion &bull; 79.82%)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Dedicated to personal services (salaries of city nurses, doctors, traffic enforcers, engineers), day-to-day office operations, fuel for emergency vehicles, and public clinic medications.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Annual Development Fund (₱2.4 Billion &bull; 19.04%)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Mandatory 20% internal revenue allocation exclusively invested into long-lasting physical capital: barangay drainage, multi-purpose evacuation shelters, solar lighting, and bypass road works.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Department Allocations Breakdown */}
        {activeTab === "allocations" && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Department Allocations (2024 Approved Budget)</h2>
              <div className="space-y-4">
                {allocations.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-blue-600 dark:text-blue-400">{item.amount}</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {item.pct}%
                        </span>
                      </div>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.pct * 3}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Interactive Tax Contribution Calculator */}
        {activeTab === "calculator" && (
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-8 animate-in fade-in duration-150">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Citizen Transparency Tool</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Dabawenyo Tax Contribution Calculator
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Ever wondered where your local taxes go? Enter your estimated annual city tax contribution (Real Property Tax, business tax, or cedula fees) to see how your money funds essential city services.
              </p>
            </div>

            {/* Input Slider & Quick Presets */}
            <div className="max-w-xl mx-auto space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                Your Estimated Annual Local Taxes (PHP)
              </label>
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                ₱{citizenTax.toLocaleString()}
              </div>

              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={citizenTax}
                onChange={(e) => setCitizenTax(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />

              <div className="flex justify-center gap-2 pt-2">
                {[3000, 5000, 10000, 25000, 50000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setCitizenTax(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      citizenTax === preset
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                    }`}
                  >
                    ₱{preset >= 1000 ? `${preset / 1000}k` : preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Tangible Breakdown Results */}
            <div className="space-y-3 max-w-2xl mx-auto">
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                How Your ₱{citizenTax.toLocaleString()} Directly Serves Davao:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-1">
                  <span className="text-xs text-blue-800 dark:text-blue-300 font-semibold block">Public Works & Roads</span>
                  <span className="text-2xl font-black text-blue-700 dark:text-blue-300">
                    ₱{Math.round((citizenTax * 0.157)).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Paving roads and drainage maintenance</span>
                </div>

                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 space-y-1">
                  <span className="text-xs text-red-800 dark:text-red-300 font-semibold block">Central 911 & Disaster Response</span>
                  <span className="text-2xl font-black text-red-600 dark:text-red-300">
                    ₱{Math.round((citizenTax * 0.065)).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Emergency dispatch and rescue equipment</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 space-y-1">
                  <span className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold block">Lingap Social Welfare Aid</span>
                  <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                    ₱{Math.round((citizenTax * 0.066)).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Hospitalization aid and vulnerable community support</span>
                </div>

                <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 space-y-1">
                  <span className="text-xs text-teal-800 dark:text-teal-300 font-semibold block">Public Health & Free Medicines</span>
                  <span className="text-2xl font-black text-teal-700 dark:text-teal-300">
                    ₱{Math.round((citizenTax * 0.064)).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-500 block">District health clinics and vaccines</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

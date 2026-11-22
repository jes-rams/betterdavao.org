"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import budgetData from "@/data/budget.json";
import { useLanguage } from "@/context/LanguageContext";

interface AllocationItem {
  id: string;
  name: string;
  amount: string;
  amountNumber: number; // in Millions PHP
  pct: number;
  color: string;
  badgeColor: string;
  desc: string;
  icon: string;
}

const ALLOCATIONS: AllocationItem[] = [
  {
    id: "mayors-office",
    name: "City Mayor's Office & Public Security",
    amount: "₱4.00 Billion",
    amountNumber: 4000,
    pct: 31.4,
    color: "#2563eb", // blue-600
    badgeColor: "bg-blue-600",
    desc: "Barangay assistance funds, local peace preservation, civil security forces, and city administration.",
    icon: "🏛️"
  },
  {
    id: "public-works",
    name: "City Engineer's Office (Public Works)",
    amount: "₱2.00 Billion",
    amountNumber: 2000,
    pct: 15.7,
    color: "#4f46e5", // indigo-600
    badgeColor: "bg-indigo-600",
    desc: "Arterial road repairs, drainage networks, flood barriers, streetlighting, and public facilities.",
    icon: "🚧"
  },
  {
    id: "adf",
    name: "Annual Development Fund (Capital Outlay)",
    amount: "₱2.40 Billion",
    amountNumber: 2400,
    pct: 19.0,
    color: "#d97706", // amber-600
    badgeColor: "bg-amber-600",
    desc: "Mandatory 20% local development investment in long-term physical assets, bridges, and city bypasses.",
    icon: "🏗️"
  },
  {
    id: "social-welfare",
    name: "City Social Welfare & Lingap Aid",
    amount: "₱845 Million",
    amountNumber: 845,
    pct: 6.6,
    color: "#059669", // emerald-600
    badgeColor: "bg-emerald-600",
    desc: "Lingap para sa Mahirap computerized medical assistance, child nutrition, and senior citizen pensions.",
    icon: "🤝"
  },
  {
    id: "cdrrmo-911",
    name: "Disaster Risk Reduction & Central 911",
    amount: "₱826 Million",
    amountNumber: 826,
    pct: 6.5,
    color: "#dc2626", // red-600
    badgeColor: "bg-red-600",
    desc: "Central 911 emergency dispatch operations, automated weather radars, search & rescue gear, and river alarms.",
    icon: "🚑"
  },
  {
    id: "health",
    name: "City Health Office (Clinics & Medicine)",
    amount: "₱812 Million",
    amountNumber: 812,
    pct: 6.4,
    color: "#0d9488", // teal-600
    badgeColor: "bg-teal-600",
    desc: "District health centers, maternal and infant care, routine vaccines, and free pharmaceutical medicines.",
    icon: "🩺"
  },
  {
    id: "others",
    name: "Agriculture, Environment & City Operations",
    amount: "₱1.85 Billion",
    amountNumber: 1852,
    pct: 14.4,
    color: "#64748b", // slate-500
    badgeColor: "bg-slate-500",
    desc: "Support for rural cacao/durian farmers, CENRO sanitation, IT modernization, and traffic management.",
    icon: "🌱"
  }
];

export default function BudgetPage() {
  const { language } = useLanguage();
  const [citizenTax, setCitizenTax] = useState<number>(10000);
  const [hoveredSlice, setHoveredSlice] = useState<AllocationItem | null>(null);
  const [selectedAllocation, setSelectedAllocation] = useState<AllocationItem>(ALLOCATIONS[0]);

  const budget2024 = budgetData.budgets.find((b) => b.year === 2024)!;
  const budget2023 = budgetData.budgets.find((b) => b.year === 2023)!;

  const activeItem = hoveredSlice || selectedAllocation;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Header Hero */}
        <section className="relative py-16 text-center w-full px-6 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/landmarks/davao-city-hall.jpg"
              alt="Davao City Hall"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-blue-950/90"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <span>📊</span>
              {language === "ceb" ? "Katin-awan sa Panalapi sa Dakbayan" : "Fiscal Transparency Dashboard"}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === "ceb" ? "Pondo sa Davao: ₱12.7 Bilyon sa 2024" : "Davao City Budget: ₱12.7 Billion (2024)"}
            </h1>
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-light">
              {language === "ceb"
                ? "Matag piso sa pondo sa dakbayan gikan sa buhis sa katawhan. Aniay bukas ug transparent nga pagbahin sa panalapi sa Davao."
                : "A plain-language, interactive visualization of Davao City's municipal budget, approved appropriations, and citizen tax allocation."}
            </p>
          </div>
        </section>

        {/* Top KPI Cards (Tremor-Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Approved Budget</span>
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{budget2024.amount_formatted}</div>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
              <span>↑ +7.62%</span>
              <span className="text-slate-400 font-normal">vs {budget2023.year} ({budget2023.amount_formatted})</span>
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">General Fund</span>
            <div className="text-3xl font-black text-slate-900 dark:text-white">₱10.12B</div>
            <span className="text-xs text-slate-500 block">79.82% &bull; Salaries, Clinics, 911 Ops</span>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Annual Development Fund</span>
            <div className="text-3xl font-black text-amber-500">₱2.40B</div>
            <span className="text-xs text-slate-500 block">19.04% &bull; Capital Outlay &amp; Bridges</span>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Citizen Direct Cost</span>
            <div className="text-3xl font-black text-emerald-500">₱0.00</div>
            <span className="text-xs text-slate-500 block">Free 911 dispatch &amp; Lingap coverage</span>
          </div>
        </div>

        {/* Section 1: Interactive Donut & Department Allocation Explorer */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Interactive Expenditure Allocation Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Hover or click on any department sector below to inspect allocations and responsibilities.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              Approved Appropriations Ordinance
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* SVG Visual Ring / Donut Chart */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 select-none">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="currentColor" className="text-slate-100 dark:text-slate-800" strokeWidth="12" />

                  {/* Slices computed dynamically based on percentage */}
                  {ALLOCATIONS.reduce(
                    (acc, item, idx) => {
                      const strokeDasharray = `${(item.pct * 2.387).toFixed(1)} 238.7`;
                      const strokeDashoffset = -acc.offset;
                      const isHovered = activeItem.id === item.id;

                      acc.elements.push(
                        <circle
                          key={item.id}
                          cx="50"
                          cy="50"
                          r="38"
                          fill="transparent"
                          stroke={item.color}
                          strokeWidth={isHovered ? 15 : 12}
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          className="cursor-pointer transition-all duration-200"
                          onMouseEnter={() => setHoveredSlice(item)}
                          onMouseLeave={() => setHoveredSlice(null)}
                          onClick={() => setSelectedAllocation(item)}
                        />
                      );
                      acc.offset += item.pct * 2.387;
                      return acc;
                    },
                    { offset: 0, elements: [] as React.ReactNode[] }
                  ).elements}
                </svg>

                {/* Donut Center Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                  <span className="text-2xl">{activeItem.icon}</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white leading-none mt-1">
                    {activeItem.pct}%
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 max-w-[120px]">
                    {activeItem.amount}
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 text-center mt-3">
                Click any bar or slice to inspect details
              </span>
            </div>

            {/* Right: Allocation Cards & Selected Inspector */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    Selected Sector: {activeItem.pct}% of City Budget
                  </span>
                  <span className="text-base font-black text-blue-700 dark:text-blue-300">{activeItem.amount}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activeItem.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{activeItem.desc}</p>
              </div>

              {/* Stacked Progress Bars List */}
              <div className="space-y-2">
                {ALLOCATIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedAllocation(item)}
                    onMouseEnter={() => setHoveredSlice(item)}
                    onMouseLeave={() => setHoveredSlice(null)}
                    className={`w-full p-2.5 rounded-xl text-left border transition flex items-center justify-between gap-3 ${
                      activeItem.id === item.id
                        ? "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 shadow-xs"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.name}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200">{item.amount}</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md text-white" style={{ backgroundColor: item.color }}>
                        {item.pct}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dabawenyo Tax Contribution Calculator */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-900">
              🧮 Citizen Tax Transparency Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              See Where Your Local Taxes Go
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Enter your estimated annual city tax payment (Real Property Tax, business tax, or cedula fees) to see the exact peso breakdown of how you fund Davao City services.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">
              Your Annual Estimated City Taxes (PHP)
            </span>
            <div className="text-4xl sm:text-5xl font-black text-blue-600 dark:text-blue-400">
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
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100"
                  }`}
                >
                  ₱{preset >= 1000 ? `${preset / 1000}k` : preset}
                </button>
              ))}
            </div>
          </div>

          {/* Tangible Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-1">
              <span className="text-xs text-blue-800 dark:text-blue-300 font-semibold block">Public Roads &amp; Drainage</span>
              <span className="text-2xl font-black text-blue-700 dark:text-blue-300">
                ₱{Math.round(citizenTax * 0.157).toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block">Paving roads &amp; drainage repairs</span>
            </div>

            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 space-y-1">
              <span className="text-xs text-red-800 dark:text-red-300 font-semibold block">Central 911 &amp; Disaster</span>
              <span className="text-2xl font-black text-red-600 dark:text-red-300">
                ₱{Math.round(citizenTax * 0.065).toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block">Free 24/7 rescue &amp; dispatch</span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 space-y-1">
              <span className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold block">Lingap Medical Aid</span>
              <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                ₱{Math.round(citizenTax * 0.066).toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block">Hospital &amp; prescription subsidies</span>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 space-y-1">
              <span className="text-xs text-teal-800 dark:text-teal-300 font-semibold block">Health Clinics &amp; Vaccines</span>
              <span className="text-2xl font-black text-teal-700 dark:text-teal-300">
                ₱{Math.round(citizenTax * 0.064).toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block">Free district checkups &amp; shots</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

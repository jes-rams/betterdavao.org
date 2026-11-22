"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WeatherAlertBar() {
  const { language } = useLanguage();

  return (
    <section className="bg-slate-900 border-b border-slate-800 text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: River and Disaster Readiness */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {language === "ceb" ? "Kahimtang sa Panahon & Suba:" : "Davao River & Weather Status:"}
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <span>Davao River:</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
              Normal (Green Alert)
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-300">
            <span>Talomo River:</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
              Normal
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <span>Central 911 Dispatch:</span>
            <span className="text-emerald-400 font-semibold">Ready 24/7</span>
          </div>
        </div>

        {/* Right: Weather & Temp */}
        <div className="flex items-center gap-3 text-slate-300 text-[11px]">
          <span className="flex items-center gap-1">
            <span>🌤️</span>
            <span>Davao City &bull; 29°C</span>
          </span>
          <span className="hidden lg:inline text-slate-500">|</span>
          <span className="hidden lg:inline text-slate-400">
            {language === "ceb" ? "Gipanalipdan sa Bukid Apo batok Bagyo" : "Naturally Shielded by Mount Apo"}
          </span>
        </div>
      </div>
    </section>
  );
}

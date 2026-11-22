"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SunMedium, Radio, Activity } from "lucide-react";

export default function WeatherAlertBar() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#050a12] border-b border-slate-800/80 text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono">
        {/* Left: River and Disaster Readiness */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {language === "ceb" ? "Kahimtang sa Panahon & Suba:" : "Hydrological Telemetry:"}
          </div>

          <div className="flex items-center gap-2 text-slate-300 text-[11px]">
            <span className="text-slate-400">Davao River:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
              Stage 2.1m &bull; Normal
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-300 text-[11px]">
            <span className="text-slate-400">Talomo River:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
              Stage 1.8m &bull; Normal
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-300 text-[11px]">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Central 911 CAD:</span>
            <span className="text-emerald-400 font-semibold">Online 24/7</span>
          </div>
        </div>

        {/* Right: Weather & Temp */}
        <div className="flex items-center gap-3 text-slate-300 text-[11px]">
          <span className="flex items-center gap-1.5">
            <SunMedium className="w-3.5 h-3.5 text-amber-400" />
            <span>Davao City &bull; 29°C</span>
          </span>
          <span className="hidden lg:inline text-slate-600">|</span>
          <span className="hidden lg:inline text-slate-400 font-sans">
            {language === "ceb" ? "Gipanalipdan sa Bukid Apo batok Bagyo" : "Naturally Shielded by Mount Apo Basin"}
          </span>
        </div>
      </div>
    </section>
  );
}

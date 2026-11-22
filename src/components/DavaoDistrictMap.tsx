"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface DistrictInfo {
  id: number;
  name: string;
  subtitle: string;
  landArea: string;
  barangayCount: number;
  adminDistricts: string[];
  keyLandmarks: string[];
  color: string;
  hoverColor: string;
  bgBadge: string;
  textColor: string;
  description: string;
}

const DISTRICT_DETAILS: Record<number, DistrictInfo> = {
  1: {
    id: 1,
    name: "1st Congressional District",
    subtitle: "Urban Core, Historic Port & Poblacion",
    landArea: "115.8 sq km",
    barangayCount: 54,
    adminDistricts: ["Poblacion", "Talomo"],
    keyLandmarks: ["Davao City Hall", "San Pedro Cathedral", "Bankerohan Market", "Bucana Seaside", "Maa", "Matina"],
    color: "#2563eb", // blue-600
    hoverColor: "#1d4ed8",
    bgBadge: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    textColor: "text-blue-600 dark:text-blue-400",
    description: "The commercial, administrative, and historical heart of Davao City. Densely populated and bustling along the Davao Gulf coast with major medical centers, government buildings, and markets."
  },
  2: {
    id: 2,
    name: "2nd Congressional District",
    subtitle: "Northern Gateway, Ports & Agricultural Highlands",
    landArea: "898.3 sq km",
    barangayCount: 46,
    adminDistricts: ["Agdao", "Buhangin", "Bunawan", "Paquibato"],
    keyLandmarks: ["Davao International Airport", "Sasa Ferry Port", "Cabantian", "Paquibato Highlands", "Malabog"],
    color: "#059669", // emerald-600
    hoverColor: "#047857",
    bgBadge: "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    textColor: "text-emerald-600 dark:text-emerald-400",
    description: "Stretches from the international airport and industrial maritime seaports in Sasa and Bunawan up into the expansive rolling agricultural and forestry hills of Paquibato."
  },
  3: {
    id: 3,
    name: "3rd Congressional District",
    subtitle: "Mount Apo, Fruit Capital & Highland Ecotourism",
    landArea: "1,429.5 sq km",
    barangayCount: 82,
    adminDistricts: ["Toril", "Tugbok", "Calinan", "Baguio", "Marilog"],
    keyLandmarks: ["Mount Apo (2,954m)", "Philippine Eagle Center", "Malagos Chocolate Museum", "Eden Nature Park", "Marilog BuDa Highway"],
    color: "#d97706", // amber-600
    hoverColor: "#b45309",
    bgBadge: "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    textColor: "text-amber-600 dark:text-amber-400",
    description: "The largest district by geographical size (over 58% of Davao's land area). Home to Mount Apo, deep natural aquifers, lush cacao and durian plantations, and cool mountain highways."
  }
};

export default function DavaoDistrictMap() {
  const { language } = useLanguage();
  const [selectedDistrict, setSelectedDistrict] = useState<number>(1);
  const [hoveredDistrict, setHoveredDistrict] = useState<number | null>(null);

  const activeDistrictId = hoveredDistrict || selectedDistrict;
  const info = DISTRICT_DETAILS[activeDistrictId];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-1.5 border border-blue-100 dark:border-blue-900">
            <span>🗺️</span>
            {language === "ceb" ? "Mapa sa 3 Ka Kongresyonal nga Distrito" : "Interactive District & Geographic Map"}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {language === "ceb" ? "Dakbayan sa Davao: 2,443 km² sa 3 Ka Distrito" : "Davao City: 2,443.6 km² Across 3 Districts"}
          </h3>
        </div>

        {/* Quick district selector tabs */}
        <div className="flex gap-1.5">
          {[1, 2, 3].map((dId) => (
            <button
              key={dId}
              onClick={() => setSelectedDistrict(dId)}
              onMouseEnter={() => setHoveredDistrict(dId)}
              onMouseLeave={() => setHoveredDistrict(null)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeDistrictId === dId
                  ? dId === 1
                    ? "bg-blue-600 text-white shadow-xs scale-105"
                    : dId === 2
                    ? "bg-emerald-600 text-white shadow-xs scale-105"
                    : "bg-amber-600 text-white shadow-xs scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Dist. {dId}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left: Custom Vector SVG Map of Davao City's 3 Districts */}
        <div className="lg:col-span-6 relative flex items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80">
          <svg
            viewBox="0 0 500 520"
            className="w-full max-w-[420px] h-auto drop-shadow-md select-none transition-all duration-300"
          >
            <defs>
              <filter id="glow-dist1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2563eb" floodOpacity="0.4" />
              </filter>
              <filter id="glow-dist2" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#059669" floodOpacity="0.4" />
              </filter>
              <filter id="glow-dist3" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#d97706" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Gulf Water Backdrop / Coastline label */}
            <path
              d="M 330,320 Q 380,360 460,390 L 500,520 L 300,520 Z"
              fill="currentColor"
              className="text-blue-500/10 dark:text-blue-400/5"
            />
            <text x="380" y="450" className="text-[11px] font-bold fill-blue-500/40 dark:fill-blue-400/30 uppercase tracking-widest">
              Davao Gulf
            </text>

            {/* District 2 (North & Agdao / Paquibato / Bunawan) */}
            <path
              d="M 230,30 L 360,40 L 440,110 L 410,240 L 330,260 L 300,280 L 260,250 L 250,150 Z"
              fill={activeDistrictId === 2 ? "#059669" : "#10b981"}
              fillOpacity={activeDistrictId === 2 ? 0.9 : 0.45}
              stroke="#047857"
              strokeWidth={activeDistrictId === 2 ? 3 : 1.5}
              filter={activeDistrictId === 2 ? "url(#glow-dist2)" : undefined}
              className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
              onClick={() => setSelectedDistrict(2)}
              onMouseEnter={() => setHoveredDistrict(2)}
              onMouseLeave={() => setHoveredDistrict(null)}
            />
            <text
              x="330"
              y="140"
              textAnchor="middle"
              className="fill-white font-black text-sm pointer-events-none drop-shadow"
            >
              District 2
            </text>
            <text
              x="330"
              y="160"
              textAnchor="middle"
              className="fill-emerald-100 font-semibold text-[10px] pointer-events-none drop-shadow"
            >
              46 Barangays
            </text>

            {/* District 3 (Southwest & Highlands: Toril, Calinan, Marilog, Mount Apo) */}
            <path
              d="M 230,30 L 250,150 L 260,250 L 230,320 L 190,390 L 120,440 L 60,340 L 80,180 L 150,80 Z"
              fill={activeDistrictId === 3 ? "#d97706" : "#f59e0b"}
              fillOpacity={activeDistrictId === 3 ? 0.9 : 0.45}
              stroke="#b45309"
              strokeWidth={activeDistrictId === 3 ? 3 : 1.5}
              filter={activeDistrictId === 3 ? "url(#glow-dist3)" : undefined}
              className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
              onClick={() => setSelectedDistrict(3)}
              onMouseEnter={() => setHoveredDistrict(3)}
              onMouseLeave={() => setHoveredDistrict(null)}
            />
            <text
              x="160"
              y="230"
              textAnchor="middle"
              className="fill-white font-black text-sm pointer-events-none drop-shadow"
            >
              District 3
            </text>
            <text
              x="160"
              y="250"
              textAnchor="middle"
              className="fill-amber-100 font-semibold text-[10px] pointer-events-none drop-shadow"
            >
              82 Barangays
            </text>

            {/* District 1 (Poblacion & Talomo Coastal Urban Strip) */}
            <path
              d="M 260,250 L 300,280 L 330,260 L 340,330 L 280,390 L 220,400 L 230,320 Z"
              fill={activeDistrictId === 1 ? "#2563eb" : "#3b82f6"}
              fillOpacity={activeDistrictId === 1 ? 0.9 : 0.55}
              stroke="#1d4ed8"
              strokeWidth={activeDistrictId === 1 ? 3 : 1.5}
              filter={activeDistrictId === 1 ? "url(#glow-dist1)" : undefined}
              className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
              onClick={() => setSelectedDistrict(1)}
              onMouseEnter={() => setHoveredDistrict(1)}
              onMouseLeave={() => setHoveredDistrict(null)}
            />
            <text
              x="280"
              y="320"
              textAnchor="middle"
              className="fill-white font-black text-xs pointer-events-none drop-shadow"
            >
              District 1
            </text>
            <text
              x="280"
              y="336"
              textAnchor="middle"
              className="fill-blue-100 font-semibold text-[9px] pointer-events-none drop-shadow"
            >
              54 Barangays
            </text>

            {/* Mount Apo Peak Marker */}
            <g transform="translate(65, 300)">
              <polygon points="0,0 12,20 -12,20" fill="#dc2626" className="animate-bounce" />
              <text x="18" y="16" className="text-[10px] font-black fill-slate-800 dark:fill-slate-100">
                Mt. Apo (2,954m)
              </text>
            </g>
          </svg>
        </div>

        {/* Right: Dynamic District Details & Stats */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full border ${info.bgBadge}`}>
                District {info.id}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {info.landArea} Land Area
              </span>
            </div>

            <h4 className="text-2xl font-black text-slate-900 dark:text-white">
              {info.name}
            </h4>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {info.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {info.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                Total Barangays
              </span>
              <span className={`text-2xl font-black ${info.textColor}`}>
                {info.barangayCount}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Sub-districts: {info.adminDistricts.join(", ")}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                Emergency Readiness
              </span>
              <span className="text-2xl font-black text-red-600 dark:text-red-400">
                24/7
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Covered by Central 911 dispatch
              </span>
            </div>
          </div>

          {/* Landmarks Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Key Civic Centers &amp; Landmarks:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {info.keyLandmarks.map((lm, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                >
                  {lm}
                </span>
              ))}
            </div>
          </div>

          {/* Direct CTA to filter Barangays page */}
          <div className="pt-2">
            <Link
              href="/barangays"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-xs"
            >
              <span>Explore All {info.barangayCount} Barangays in District {info.id}</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

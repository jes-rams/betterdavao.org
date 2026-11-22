"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  icon: string;
}

function CounterItem({ end, prefix = "", suffix = "", decimals = 0, label, sublabel, icon }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <div className="bg-slate-900/90 border border-slate-700/80 hover:border-blue-500/60 p-4 sm:p-5 rounded-2xl shadow-lg flex items-center gap-3.5 transition-all duration-200">
      <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-2xl shrink-0 shadow-inner">
        {icon}
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-0.5 font-mono">
          <span>{prefix}</span>
          <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</span>
          <span>{suffix}</span>
        </div>
        <div className="text-xs font-bold text-slate-200 leading-tight mt-0.5">
          {label}
        </div>
        <div className="text-[11px] font-medium text-amber-300/90">
          {sublabel}
        </div>
      </div>
    </div>
  );
}

export default function AnimatedHeroCounters() {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto pt-6">
      <CounterItem
        end={12.7}
        decimals={1}
        prefix="₱"
        suffix="B"
        label={language === "ceb" ? "2024 Pondo sa Dakbayan" : "2024 Approved Budget"}
        sublabel="+7.62% YoY Fiscal Growth"
        icon="📊"
      />
      <CounterItem
        end={182}
        label={language === "ceb" ? "Total nga mga Barangay" : "Covered Barangays"}
        sublabel="Across 3 Cong. Districts"
        icon="🏛️"
      />
      <CounterItem
        end={2443}
        suffix=" km²"
        label={language === "ceb" ? "Gidak-on sa Yuta" : "City Land Area"}
        sublabel="Largest in the Philippines"
        icon="🏔️"
      />
      <CounterItem
        end={24}
        suffix="/7"
        label="Central 911 Hotline"
        sublabel="Zero-Cost Rapid Dispatch"
        icon="🚑"
      />
    </div>
  );
}

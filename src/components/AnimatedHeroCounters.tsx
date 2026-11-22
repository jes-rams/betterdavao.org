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
    <div className="glass-panel p-4 sm:p-5 rounded-2xl glow-card flex items-center gap-3.5 relative overflow-hidden group">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-400/30 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-baseline gap-0.5">
          <span>{prefix}</span>
          <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</span>
          <span>{suffix}</span>
        </div>
        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-tight mt-0.5">
          {label}
        </div>
        <div className="text-[10px] text-slate-400 dark:text-slate-500">
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

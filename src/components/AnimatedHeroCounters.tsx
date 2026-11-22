"use client";

import { useEffect, useState, ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, Building2, Mountain, ShieldAlert } from "lucide-react";

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  icon: ReactNode;
}

function CounterItem({ end, prefix = "", suffix = "", decimals = 0, label, sublabel, icon }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1600; // ms

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
    <div className="bg-slate-900/95 border border-slate-800 hover:border-amber-500/50 p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3.5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 group-hover:text-amber-300 group-hover:border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-0.5 font-mono">
          <span>{prefix}</span>
          <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</span>
          <span>{suffix}</span>
        </div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 leading-tight mt-0.5">
          {label}
        </div>
        <div className="text-[11px] font-mono text-amber-400/90 font-medium">
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
        icon={<Landmark className="w-5 h-5" />}
      />
      <CounterItem
        end={182}
        label={language === "ceb" ? "Total nga mga Barangay" : "Covered Barangays"}
        sublabel="Across 3 Cong. Districts"
        icon={<Building2 className="w-5 h-5" />}
      />
      <CounterItem
        end={2443}
        suffix=" km²"
        label={language === "ceb" ? "Gidak-on sa Yuta" : "City Land Area"}
        sublabel="Largest in the Philippines"
        icon={<Mountain className="w-5 h-5" />}
      />
      <CounterItem
        end={24}
        suffix="/7"
        label="Central 911 Hotline"
        sublabel="Zero-Cost Rapid Dispatch"
        icon={<ShieldAlert className="w-5 h-5" />}
      />
    </div>
  );
}

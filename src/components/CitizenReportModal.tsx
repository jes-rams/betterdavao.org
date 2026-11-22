"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ReportChannel {
  id: string;
  category: string;
  icon: string;
  department: string;
  hotline: string;
  formatted_phone: string;
  notes: string;
}

const CHANNELS: ReportChannel[] = [
  {
    id: "pothole",
    category: "Potholes & Damaged Roads",
    icon: "🚧",
    department: "City Engineer's Office (CEO)",
    hotline: "0822411000",
    formatted_phone: "(082) 241-1000",
    notes: "Report asphalt damage, broken curbs, or road hazards along city roads."
  },
  {
    id: "streetlight",
    category: "Streetlight Outages & Broken Bulbs",
    icon: "💡",
    department: "CEO Electrical Division / Davao Light",
    hotline: "0822293522",
    formatted_phone: "(082) 229-DLPC (3572)",
    notes: "Provide the pole number or street corner for faster crew dispatch."
  },
  {
    id: "water-leak",
    category: "Water Leaks & Pipe Bursts",
    icon: "💧",
    department: "Davao City Water District (DCWD)",
    hotline: "0822353293",
    formatted_phone: "(082) 235-DCWD (3293)",
    notes: "24/7 call center for water pipe leaks, low pressure, or meter repairs."
  },
  {
    id: "garbage",
    category: "Uncollected Garbage & Illegal Dumping",
    icon: "🗑️",
    department: "City Environment & Natural Resources (CENRO)",
    hotline: "0822272661",
    formatted_phone: "(082) 227-2661",
    notes: "Report missed garbage collection or commercial waste dumping."
  },
  {
    id: "noise",
    category: "Nighttime Noise & Disturbance",
    icon: "🔊",
    department: "Davao City Police Office (DCPO)",
    hotline: "0822241313",
    formatted_phone: "(082) 224-1313",
    notes: "Enforces 10:00 PM neighborhood quiet hours and loud exhaust pipe bans."
  },
  {
    id: "traffic",
    category: "Traffic Gridlock & Illegal Parking",
    icon: "🚗",
    department: "City Transport and Traffic Management (CTTMO)",
    hotline: "0822983838",
    formatted_phone: "(082) 298-3838",
    notes: "Dispatches traffic enforcers for blocked driveways and road congestion."
  }
];

export default function CitizenReportModal() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("pothole");
  const [copied, setCopied] = useState<string | null>(null);

  const activeChannel = CHANNELS.find((c) => c.id === selectedId) || CHANNELS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-xs transition"
        title="Citizen Action & Reporting Desk"
      >
        <span>📢</span>
        <span>{language === "ceb" ? "I-Report sa Dakbayan" : "Citizen Report Desk"}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div
            className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white flex items-center justify-between border-b border-blue-900/40">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">📢</span>
                <div>
                  <h3 className="font-bold text-base">
                    {language === "ceb" ? "I-Report sa Opisyal nga Departamento" : "Citizen Issue Router & Help Desk"}
                  </h3>
                  <p className="text-xs text-blue-200">
                    Direct verified hotlines to resolve public community concerns
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white text-base font-bold"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Select the issue you want to report:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CHANNELS.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => setSelectedId(ch.id)}
                      className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition ${
                        selectedId === ch.id
                          ? "bg-blue-50 dark:bg-blue-950 border-blue-600 dark:border-blue-500 text-blue-950 dark:text-blue-100 font-bold shadow-xs"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-xl">{ch.icon}</span>
                      <span className="text-xs leading-tight line-clamp-2">{ch.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Detail Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                      Responsible Office
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {activeChannel.department}
                    </h4>
                  </div>
                  <span className="text-2xl">{activeChannel.icon}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeChannel.notes}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${activeChannel.hotline}`}
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm transition"
                  >
                    📞 Call {activeChannel.formatted_phone}
                  </a>
                  <button
                    onClick={() => handleCopy(activeChannel.formatted_phone)}
                    className="py-2.5 px-4 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold text-xs hover:bg-slate-100 transition"
                  >
                    {copied === activeChannel.formatted_phone ? "✓ Copied" : "Copy Number"}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span>For life-threatening emergencies, dial 911 immediately.</span>
              <button
                onClick={() => setIsOpen(false)}
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

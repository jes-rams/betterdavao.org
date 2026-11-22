"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface SearchItem {
  id: string;
  title: string;
  category: "Emergency" | "Agenda" | "Life Is Here" | "Services" | "Projects" | "Council" | "Budget" | "Pages";
  description: string;
  url: string;
  badge?: string;
  actionText?: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Emergency
  {
    id: "911",
    title: "Central 911 Emergency Dispatch",
    category: "Emergency",
    description: "24/7 free medical, rescue, fire, and police emergency response across all districts.",
    url: "tel:911",
    badge: "Call 911",
    actionText: "Dial 911"
  },
  {
    id: "city-hall-trunk",
    title: "Davao City Hall Trunkline",
    category: "Emergency",
    description: "Official trunkline connecting all major city hall departments: (082) 241-1000.",
    url: "tel:0822411000",
    badge: "(082) 241-1000",
    actionText: "Call City Hall"
  },
  {
    id: "police-hotline",
    title: "Davao City Police Office (DCPO)",
    category: "Emergency",
    description: "Police headquarters and public safety emergency assistance: (082) 224-1313.",
    url: "tel:0822241313",
    badge: "(082) 224-1313",
    actionText: "Call Police"
  },
  {
    id: "cswdo-hotline",
    title: "City Social Welfare and Development (CSWDO)",
    category: "Emergency",
    description: "Emergency crisis intervention, Lingap assistance, and child/family welfare: (082) 227-1617.",
    url: "tel:0822271617",
    badge: "Social Welfare",
    actionText: "Call CSWDO"
  },

  // E-Services
  {
    id: "srv-ebpls",
    title: "Online Business Permit System (eBPLS)",
    category: "Services",
    description: "Apply for new business permits and process annual renewals online.",
    url: "/services",
    badge: "E-Service"
  },
  {
    id: "srv-obps",
    title: "Online Building Permit System (OBPS)",
    category: "Services",
    description: "Submit architectural plans and check building permit approval status.",
    url: "/services",
    badge: "E-Service"
  },
  {
    id: "srv-lingap",
    title: "Lingap para sa Mahirap Medical Assistance",
    category: "Services",
    description: "Hospitalization, medicine, and burial financial aid for qualified citizens.",
    url: "/services",
    badge: "Social Aid"
  },
  {
    id: "srv-cedula",
    title: "Online Cedula (Community Tax Certificate)",
    category: "Services",
    description: "Calculate and generate Community Tax Certificate issuance digitally.",
    url: "/services",
    badge: "E-Service"
  },
  {
    id: "srv-rpt",
    title: "Real Property Tax (RPT) Online Assessment",
    category: "Services",
    description: "View land/property tax assessments and pay online.",
    url: "/services",
    badge: "Tax"
  },

  // Priority Agenda
  {
    id: "agenda-poverty",
    title: "Poverty Alleviation (Priority 1)",
    category: "Agenda",
    description: "Targeted livelihood grants, skills training, and nutrition security.",
    url: "/agenda/poverty-alleviation"
  },
  {
    id: "agenda-infra",
    title: "Infrastructure & Connectivity (Priority 2)",
    category: "Agenda",
    description: "Coastal road, mountain bypass, and modern public transport network.",
    url: "/agenda/infrastructure-connectivity"
  },
  {
    id: "agenda-agri",
    title: "Agricultural Modernization & Food Security (Priority 3)",
    category: "Agenda",
    description: "Direct farmer-to-consumer logistics, cold storage, and cacao farming support.",
    url: "/agenda/agriculture-food-security"
  },
  {
    id: "agenda-health",
    title: "Health & Human Development (Priority 4)",
    category: "Agenda",
    description: "Modernizing district hospitals and expanding Lingap medical aid.",
    url: "/agenda/health-human-development"
  },
  {
    id: "agenda-education",
    title: "Education & Youth Empowerment (Priority 5)",
    category: "Agenda",
    description: "College educational assistance program (EBSU) and technical trade scholarships.",
    url: "/agenda/education-youth-empowerment"
  },
  {
    id: "agenda-traffic",
    title: "Traffic Modernization & Mobility (Priority 10)",
    category: "Agenda",
    description: "Davao High Priority Bus System (HPBS) and adaptive traffic signalization.",
    url: "/agenda/traffic-mobility"
  },
  {
    id: "agenda-disaster",
    title: "Disaster Preparedness & Climate Resilience (Priority 12)",
    category: "Agenda",
    description: "Central 911 dispatch expansion, river wall revetments, and geohazard mapping.",
    url: "/agenda/disaster-preparedness"
  },

  // Life Is Here
  {
    id: "life-apo",
    title: "Mount Apo (2,954m Peak)",
    category: "Life Is Here",
    description: "The highest mountain in the Philippines and ancestral home of indigenous peoples.",
    url: "/life-is-here/mount-apo"
  },
  {
    id: "life-water",
    title: "100% Potable Mountain Tap Water",
    category: "Life Is Here",
    description: "Davao City Water District (DCWD) deep aquifer drinking water rated among the world's cleanest.",
    url: "/life-is-here/potable-tap-water"
  },
  {
    id: "life-discipline",
    title: "Peace, Order & Nighttime Safety",
    category: "Life Is Here",
    description: "24/7 safe streets, strict speed limits, anti-smoking laws, and midnight liquor regulations.",
    url: "/life-is-here/peace-and-discipline"
  },
  {
    id: "life-eagle",
    title: "Philippine Eagle (Banog / Haribon)",
    category: "Life Is Here",
    description: "Global conservation center for the majestic national bird in Malagos, Baguio District.",
    url: "/life-is-here/philippine-eagle"
  },

  // Major Projects
  {
    id: "proj-tunnel",
    title: "Davao City Bypass Tunnel (45.5 km)",
    category: "Projects",
    description: "The first long-distance mountain road tunnel in the Philippines (ongoing).",
    url: "/projects"
  },
  {
    id: "proj-bridge",
    title: "Samal Island-Davao City Connector (SIDC Bridge)",
    category: "Projects",
    description: "3.98-kilometer marine bridge linking Davao City and the Island Garden City of Samal.",
    url: "/projects"
  },
  {
    id: "proj-bus",
    title: "Davao Public Transport Modernization (HPBS)",
    category: "Projects",
    description: "Comprehensive 672-kilometer modern bus network replacing legacy jeepneys.",
    url: "/projects"
  },

  // Core Pages
  {
    id: "page-council",
    title: "21st Sangguniang Panlungsod (City Council)",
    category: "Council",
    description: "Directory of 1st, 2nd, and 3rd District Councilors and Committee Chairs.",
    url: "/council"
  },
  {
    id: "page-budget",
    title: "Fiscal Budget Transparency (₱12.7 Billion)",
    category: "Budget",
    description: "Plain-language breakdown of Davao's annual development and general funds.",
    url: "/budget"
  },
  {
    id: "page-barangays",
    title: "182 Barangays & District Directory",
    category: "Pages",
    description: "Complete directory of Davao City's 182 barangays across 3 congressional districts.",
    url: "/barangays"
  },
  {
    id: "page-about",
    title: "About Better Davao Civic Platform",
    category: "Pages",
    description: "Mission, open data policy, and GitHub civic tech community information.",
    url: "/about"
  }
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { t } = useLanguage();

  // Listen to keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter items
  const filtered = useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS.slice(0, 8);
    const q = query.toLowerCase();
    return SEARCH_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [query]);

  // Reset selectedIndex when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filtered]);

  // Navigate on select
  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    setQuery("");
    if (item.url.startsWith("tel:")) {
      window.location.href = item.url;
    } else {
      router.push(item.url);
    }
  };

  // Keyboard navigation within list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <>
      {/* Global Search Button in UI if desired */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-700 transition"
        title="Quick Search (Ctrl+K / Cmd+K)"
      >
        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>{t("nav_search")}</span>
        <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded text-slate-400 font-mono">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-xs">
          <div
            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleListKeyDown}
          >
            {/* Input Bar */}
            <div className="relative border-b border-slate-200 dark:border-slate-800 flex items-center px-4">
              <svg
                className="w-5 h-5 text-slate-400 mr-3 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                type="text"
                placeholder="Search hotlines, services, ordinances, councilors, projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-4 text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No civic records matching &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${
                      selectedIndex === idx
                        ? "bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <div className="space-y-0.5 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{item.title}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          item.category === "Emergency"
                            ? "bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900"
                            : item.category === "Services"
                            ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    {item.badge && (
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Footer Hint */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-3">
                <span>Navigate: <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd></span>
                <span>Select: <kbd className="font-mono">↵</kbd></span>
                <span>Close: <kbd className="font-mono">esc</kbd></span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Better Davao Command Palette</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

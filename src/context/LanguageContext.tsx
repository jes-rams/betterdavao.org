"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ceb";

interface Translations {
  [key: string]: {
    en: string;
    ceb: string;
  };
}

export const translations: Translations = {
  // Navigation
  nav_dashboard: { en: "Dashboard", ceb: "Punoang Panid" },
  nav_services: { en: "E-Services", ceb: "Mga Serbisyo" },
  nav_projects: { en: "Projects", ceb: "Mga Proyekto" },
  nav_council: { en: "City Council", ceb: "Konseho" },
  nav_budget: { en: "Budget", ceb: "Pondo sa Dakbayan" },
  nav_barangays: { en: "Barangays", ceb: "Mga Barangay" },
  nav_about: { en: "About", ceb: "Bahin Kanamo" },
  nav_search: { en: "Search site...", ceb: "Pangitaa sa site..." },
  nav_call_911: { en: "Emergency 911", ceb: "Emerhensya 911" },

  // Hero Section
  hero_badge: {
    en: "Independent Civic Platform • Made by Dabawenyos",
    ceb: "Gawasnon nga Plataporma sa Komunidad • Hinimo sa Dabawenyo"
  },
  hero_title_1: { en: "A City Like No Other.", ceb: "Dakbayan nga Walay Pareho." },
  hero_title_2: { en: "Welcome to", ceb: "Maayong Pag-abot sa" },
  hero_desc: {
    en: "From the heights of Mount Apo and our 11 living cultural tribes to peaceful midnight streets and pure mountain tap water, Davao has always done things with pride and grit. Better Davao is an independent community space celebrating everything that makes our city special—while giving every citizen the transparent data to make our home even better.",
    ceb: "Gikan sa kinatas-ang tumoy sa Bukid Apo ug sa atong 11 ka tribo hangtod sa malinawong kadalanan sa tungang gabii ug lunsayng tubig sa kabukiran, ang Davao kanunayng mapagarbohon ug lig-on. Ang Better Davao usa ka gawasnon nga luna sa komunidad nga naghatag ug katin-awan sa datos sa dakbayan aron mas mapanindot pa ang atong panimalay."
  },
  hero_cta_life: { en: "Why Life Is Here →", ceb: "Nganong Ania ang Kinabuhi →" },
  hero_cta_agenda: { en: "12-Point Priority Agenda", ceb: "12-Puntong Prayoridad nga Agenda" },
  hero_hotline_title: { en: "Central 911 Emergency Hotline", ceb: "Sentral 911 Hotline sa Emerhensya" },
  hero_hotline_desc: {
    en: "Active 24/7 across all Davao districts for free medical, fire, search, and police emergencies.",
    ceb: "Abli 24/7 sa tibuok distrito sa Davao para sa libreng tabang medikal, sunog, ug kapulisan."
  },

  // Section Headers
  section_life_badge: { en: "Official City Slogan & Civic Reality", ceb: "Opisyal nga Slogan ug Kamatuoran sa Dakbayan" },
  section_life_title: { en: "Davao: Life Is Here", ceb: "Davao: Ang Kinabuhi Ania Dinhi" },
  section_agenda_badge: { en: "Strategic Roadmap", ceb: "Estratehikong Giya sa Pag-uswag" },
  section_agenda_title: { en: "12-Point Priority Agenda", ceb: "12-Puntong Prayoridad nga Agenda" },
  section_ordinances_badge: { en: "Civic Discipline & Safety", ceb: "Disiplina ug Kaluwasan sa Dakbayan" },
  section_ordinances_title: { en: "Landmark Ordinances", ceb: "Mahinungdanong mga Ordinansa" },
  section_leadership_badge: { en: "Executive & Legislative Leadership", ceb: "Ehekutibo ug Lehislatibong Pangulo" },
  section_leadership_title: { en: "City Leadership & 21st City Council", ceb: "Mga Pangulo sa Dakbayan ug Konseho" },
  section_budget_badge: { en: "Fiscal Responsibility", ceb: "Katin-awan sa Panalapi" },
  section_budget_title: { en: "Financial Transparency & Annual Budget", ceb: "Katin-awan sa Pondo sa Dakbayan" },

  // Common UI
  read_more: { en: "Inspect →", ceb: "Susiha →" },
  view_all: { en: "View All", ceb: "Tan-awa Tanan" },
  close: { en: "Close", ceb: "Isira" },
  search: { en: "Search", ceb: "Pangitaa" },
  copy: { en: "Copy", ceb: "Kopyaha" },
  copied: { en: "Copied!", ceb: "Nakopya na!" },
  ask_ai: { en: "Ask Davao AI", ceb: "Pangutan-a ang Davao AI" }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("betterdavao_lang") as Language;
    if (saved === "en" || saved === "ceb") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("betterdavao_lang", lang);
    }
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key].en;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

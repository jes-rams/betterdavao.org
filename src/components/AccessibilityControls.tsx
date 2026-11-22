"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AccessibilityControls() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    setMounted(true);
    // Read current font size from html
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    setFontSize(currentSize || 16);
  }, []);

  if (!mounted) return <div className="w-24 h-8"></div>;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ceb" : "en");
  };

  const changeFontSize = (delta: number) => {
    let newSize = fontSize + delta;
    if (newSize < 12) newSize = 12;
    if (newSize > 24) newSize = 24;
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  return (
    <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
      {/* Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="px-2 h-7 flex items-center justify-center rounded text-xs font-black tracking-wider uppercase bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-xs hover:bg-blue-50 dark:hover:bg-slate-600 transition"
        title={language === "en" ? "Switch to Sinugbuanong Binisaya" : "Switch to English"}
      >
        {language === "en" ? "🇵🇭 CEB" : "🇬🇧 EN"}
      </button>

      <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-0.5"></div>

      {/* Font Resizers */}
      <button
        onClick={() => changeFontSize(-1)}
        className="w-7 h-7 flex items-center justify-center rounded text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700 transition shadow-xs text-xs font-bold"
        title="Decrease Font Size"
      >
        A-
      </button>
      <button
        onClick={() => changeFontSize(1)}
        className="w-7 h-7 flex items-center justify-center rounded text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700 transition shadow-xs text-sm font-bold"
        title="Increase Font Size"
      >
        A+
      </button>

      <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-0.5"></div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-7 h-7 flex items-center justify-center rounded text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700 transition shadow-xs"
        title="Toggle Day/Night Mode"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

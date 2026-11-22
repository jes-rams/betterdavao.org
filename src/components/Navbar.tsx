"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccessibilityControls from "./AccessibilityControls";
import CitizenReportModal from "./CitizenReportModal";
import WeatherAlertBar from "./WeatherAlertBar";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav_dashboard") },
    { href: "/services", label: t("nav_services") },
    { href: "/barangays", label: t("nav_barangays") },
    { href: "/projects", label: t("nav_projects") },
    { href: "/budget", label: t("nav_budget") },
    { href: "/council", label: t("nav_council") },
    { href: "/about", label: t("nav_about") },
  ];

  return (
    <>
      {/* Live River & Weather Resilience Bar */}
      <WeatherAlertBar />

      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo & WIP Tag */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="w-9 h-9 rounded-lg bg-blue-900 dark:bg-blue-600 text-amber-400 flex items-center justify-center font-black text-xl shadow-xs group-hover:scale-105 transition-transform">
                  D
                </span>
                <div>
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white block leading-tight">
                    Better Davao
                  </span>
                  <span className="text-[10px] font-semibold text-blue-700 dark:text-blue-400 block tracking-wider uppercase">
                    Civic Portal
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-300 font-extrabold"
                        : "text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Controls: Report Desk, Accessibility, Emergency 911 CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="hidden lg:block">
                <CitizenReportModal />
              </div>

              <div className="hidden sm:block">
                <AccessibilityControls />
              </div>

              <a
                href="tel:911"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-xs hover:shadow transition"
                title="Call Davao Central 911"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                911
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2 shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-300"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 flex items-center justify-between">
              <CitizenReportModal />
              <div className="sm:hidden">
                <AccessibilityControls />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import CommandPalette from "@/components/CommandPalette";
import AskDavaoAI from "@/components/AskDavaoAI";
import PwaRegister from "@/components/PwaRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Davao City — Independent Civic Platform",
  description: "A community-driven digital transparency portal bringing local government data, emergency 911 dispatch, projects, and citizen services closer to the Davaoeños.",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/landmarks/davao-skyline.jpg",
    apple: "/images/landmarks/davao-skyline.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09101f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative bg-slate-50 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03] dark:opacity-[0.1]">
              <img src="/images/landmarks/mount-apo.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            {children}
            <CommandPalette />
            <AskDavaoAI />
            <PwaRegister />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

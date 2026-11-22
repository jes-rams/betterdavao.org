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
  metadataBase: new URL("https://betterdavao.org"),
  title: "Better Davao City — Independent Civic Platform",
  description: "A community-driven digital transparency portal bringing local government data, emergency 911 dispatch, projects, and citizen services closer to the Davaoeños.",
  keywords: [
    "Davao City",
    "Central 911",
    "Better Davao",
    "Davao City Council",
    "Davao Budget",
    "eBPLS Davao",
    "Lingap Para Sa Mahirap",
    "Davao Ordinances",
    "Mount Apo",
    "Kadayawan Festival",
    "182 Barangays"
  ],
  authors: [{ name: "Better Davao Civic Tech Volunteers" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/images/landmarks/davao-skyline.jpg",
    apple: "/images/landmarks/davao-skyline.jpg",
  },
  openGraph: {
    title: "Better Davao City — Independent Civic Platform",
    description: "Empowering Davaoeños through open government data, Central 911 emergency hotlines, and citizen e-services.",
    url: "https://betterdavao.org",
    siteName: "Better Davao City",
    images: [
      {
        url: "/images/landmarks/davao-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Better Davao City Civic Platform",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Davao City — Independent Civic Platform",
    description: "Empowering Davaoeños through open government data, Central 911 emergency hotlines, and citizen e-services.",
    images: ["/images/landmarks/davao-skyline.jpg"],
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
      <body className="min-h-full flex flex-col relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Davao City",
  description: "A community-driven digital transparency portal bringing local government data, projects, and services closer to the Davaoeños.",
};
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative bg-slate-50 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
        <ThemeProvider>
          <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03] dark:opacity-[0.1]">
            <img src="/images/landmarks/mount-apo.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

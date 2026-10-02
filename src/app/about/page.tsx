import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Better Davao City",
  description: "Learn about the mission, data integrity principles, and community contributors behind Better Davao City.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
            Our Mission & Methodology
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Empowering Davaoeños Through Open Civic Data
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Better Davao City is an independent digital public good built to bring municipal budgets, infrastructure tracking, 
            and citizen services closer to every resident.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-1">
        {/* Why We Built This */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Better Davao City?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Davao City is the economic, cultural, and educational heartbeat of Mindanao, spanning over 2,443 square kilometers 
            and 182 barangays. Yet for everyday citizens, finding clear data on multi-billion-peso city budgets, understanding ongoing 
            tunnel or bridge projects, or accessing emergency hotlines has historically required wading through fragmented PDFs, 
            disparate departmental pages, or slow government portals.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Better Davao City was created to solve this friction. By centralizing verified civic datasets into a clean, modern, 
            blazing-fast interface, we ensure that every Dabawenyo—from university students and local entrepreneurs to community 
            leaders—can easily inspect where public funds are allocated and access the public services they are entitled to.
          </p>
        </section>

        {/* Guiding Principles Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Our Guiding Pillars
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Plagiarism & Original Insight</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We never copy-paste bureaucratic PR releases. We extract verified public figures and write human-friendly, 
                plain-language explainers that clarify what municipal ordinances and budgets actually mean for daily life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Non-Partisan Transparency</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We have no political affiliations and receive zero government or corporate funding. Our sole commitment is 
                to transparency, accountability, and the public welfare of Davao City.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Lightweight & Accessible</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for speed with modern Next.js static architecture. The portal loads in milliseconds, 
                uses minimal mobile data, and works smoothly across low-end smartphones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 font-bold flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">100% Open Source</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All code, dataset schemas, and styles are openly hosted on GitHub. Anyone in the community can inspect, 
                audit, and contribute to the portal's evolution.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources & Verification */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Data Sources & Verification Protocol
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every piece of data on Better Davao City is cross-verified against officially published public disclosure records:
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&bull;</span>
              <span><strong>Annual Municipal Budgets:</strong> Commission on Audit (COA) Annual Audit Reports and official Davao City Council Appropriations Ordinances.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&bull;</span>
              <span><strong>Infrastructure Tracking:</strong> Department of Public Works and Highways (DPWH) Project Monitoring Reports and Department of Transportation (DOTr) updates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&bull;</span>
              <span><strong>Legislative Records:</strong> Sangguniang Panlungsod (City Council) published ordinances, public hearing notices, and executive orders.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">&bull;</span>
              <span><strong>Emergency Services:</strong> Davao Central 911 Command Center official communications and departmental rosters.</span>
            </li>
          </ul>
        </section>

        {/* Community & BetterGov Initiative */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 sm:p-10 rounded-2xl shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Part of the BetterGov.ph Civic Movement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Join the Davao Civic Tech Community
            </h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Better Davao City is built with pride by local developers and contributors as part of the nationwide 
            <a href="https://bettergov.ph" target="_blank" rel="noreferrer" className="text-blue-300 font-semibold underline ml-1 hover:text-white">
              BetterGov.ph
            </a> ecosystem. Whether you are a programmer, data researcher, writer, or proud Davaoeño, you can help keep this portal 
            accurate and up to date.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="https://github.com/jes-rams/betterdavao.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow transition"
            >
              Contribute on GitHub &rarr;
            </a>
            <a
              href="https://www.facebook.com/sensui.ramos"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition"
            >
              Connect with Maintainer &rarr;
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-transparent hover:bg-white/10 text-slate-200 font-semibold text-sm transition"
            >
              Back to Dashboard
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import agendaData from "../../../data/agenda.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agendaData.pillars.map((pillar) => ({
    slug: pillar.slug,
  }));
}

export default async function AgendaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pillarIndex = agendaData.pillars.findIndex((p) => p.slug === slug);

  if (pillarIndex === -1) {
    notFound();
  }

  const pillar = agendaData.pillars[pillarIndex];
  const allPillars = agendaData.pillars;
  const prevPillar =
    pillarIndex > 0 ? allPillars[pillarIndex - 1] : allPillars[allPillars.length - 1];
  const nextPillar =
    pillarIndex < allPillars.length - 1 ? allPillars[pillarIndex + 1] : allPillars[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-slate-900 text-white border-b border-slate-800 py-4 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition">
              Overview
            </Link>
            <span>/</span>
            <Link href="/agenda" className="hover:text-white transition">
              12-Point Priority Agenda
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-bold truncate">
              Pillar #{pillar.number}: {pillar.title}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-blue-600 text-amber-300 flex items-center justify-center font-black text-2xl shadow-md">
                {pillar.number}
              </span>
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
                Priority Development Pillar #{pillar.number}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {pillar.title}
            </h1>

            <p className="text-xl sm:text-2xl text-blue-200 leading-relaxed font-light max-w-3xl">
              {pillar.hero_headline}
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-4">
              <p className="text-base text-blue-100 leading-relaxed max-w-3xl">
                {pillar.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Strategic Context / Overview */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              Strategic Blueprint
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Civic Significance for Davao City
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {pillar.overview}
            </p>
          </section>

          {/* Key Initiatives */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Action Plan
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Key Municipal Initiatives &amp; Programs
            </h2>
            <div className="space-y-6">
              {pillar.key_initiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition-colors space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-black text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 flex items-start gap-2.5">
                        <span className="text-xs font-bold uppercase text-blue-800 tracking-wider shrink-0 mt-0.5">
                          Target Impact:
                        </span>
                        <span className="text-xs text-blue-900 font-medium leading-relaxed">
                          {item.target_impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Responsible City Departments */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Implementation
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Responsible City Departments &amp; Lead Agencies
            </h2>
            <div className="flex flex-wrap gap-3">
              {pillar.responsible_departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-slate-800 font-semibold text-sm shadow-2xs flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {dept}
                </div>
              ))}
            </div>
          </section>

          {/* Measurable Civic Indicators */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Accountability
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Civic Indicators &amp; Budget Context
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {pillar.civic_indicators.map((indicator, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs text-center"
                >
                  <span className="text-3xl font-black text-blue-700 block mb-1">
                    {indicator.metric}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {indicator.label}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How Citizens Can Participate */}
          <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                Citizen Watchdog Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                How Dabawenyos Can Monitor &amp; Access This Pillar
              </h2>
            </div>
            <p className="text-base text-blue-100 leading-relaxed">
              {pillar.citizen_action}
            </p>
          </section>

          {/* Navigation Between Pillars */}
          <section className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href={`/agenda/${prevPillar.slug}`}
                className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition shadow-xs"
              >
                &larr; Pillar #{prevPillar.number}: {prevPillar.title}
              </Link>
              <Link
                href="/agenda"
                className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm transition shadow-xs"
              >
                All 12 Priority Pillars
              </Link>
              <Link
                href={`/agenda/${nextPillar.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition shadow-xs"
              >
                Pillar #{nextPillar.number}: {nextPillar.title} &rarr;
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

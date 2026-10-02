import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import livabilityData from "../../../data/livability.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return livabilityData.livability_pillars.map((pillar) => ({
    slug: pillar.id,
  }));
}

export default async function PillarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pillarIndex = livabilityData.livability_pillars.findIndex(
    (p) => p.id === slug
  );

  if (pillarIndex === -1) {
    notFound();
  }

  const pillar = livabilityData.livability_pillars[pillarIndex];
  const allPillars = livabilityData.livability_pillars;
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
            <Link href="/life-is-here" className="hover:text-white transition">
              Davao: Life Is Here
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-bold truncate">{pillar.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-16 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
              {pillar.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {pillar.title}
            </h1>

            <p className="text-xl sm:text-2xl text-blue-200 leading-relaxed font-light max-w-3xl">
              {pillar.hero_headline}
            </p>

            {/* Key Stat Card */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-4">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-amber-400 block">
                  {pillar.stat}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                  {pillar.stat_label}
                </span>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20"></div>
              <p className="text-sm text-blue-100 max-w-md leading-relaxed">
                {pillar.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Featured Visual */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <div className="relative h-72 sm:h-96 w-full">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 text-white">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Davao Civic Landmark Asset
                </span>
                <p className="text-base sm:text-lg font-bold">{pillar.title}</p>
              </div>
            </div>
          </div>

          {/* Overview Narrative */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              Civic Analysis
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Understanding the Civic Reality
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {pillar.overview}
            </p>
          </section>

          {/* Key Ordinances, Policies & Systems */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Legal Framework &amp; Infrastructure
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              How Davao Makes It Work
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillar.ordinances_and_rules.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Measurable Real-World Impacts */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Measurable Outcomes
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Verified Real-World Impacts
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {pillar.measurable_impacts.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs text-center"
                >
                  <span className="text-3xl font-black text-blue-700 block mb-1">
                    {metric.metric}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {metric.label}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Citizen Tips */}
          <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                Practical Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Citizen Tips for Residents &amp; Newcomers
              </h2>
            </div>
            <ul className="space-y-4">
              {pillar.citizen_tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Navigation Between Pillars */}
          <section className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href={`/life-is-here/${prevPillar.id}`}
                className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition shadow-xs"
              >
                &larr; Previous: {prevPillar.title}
              </Link>
              <Link
                href="/life-is-here"
                className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm transition shadow-xs"
              >
                All 7 Livability Pillars
              </Link>
              <Link
                href={`/life-is-here/${nextPillar.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition shadow-xs"
              >
                Next: {nextPillar.title} &rarr;
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

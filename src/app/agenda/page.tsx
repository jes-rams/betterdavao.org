import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import agendaData from "../../data/agenda.json";

export default function AgendaIndexPage() {
  const { title, description, pillars } = agendaData;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-20 pb-16 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              Strategic Governance Roadmap
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl text-blue-200 font-light max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* 12 Pillars Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Explore the 12 Priority Development Pillars
            </h2>
            <p className="text-slate-600">
              Select any development pillar to inspect the municipal initiatives, responsible departments, budget indicators, and citizen monitoring guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Link
                key={pillar.number}
                href={`/agenda/${pillar.slug}`}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Pillar #{pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {pillar.responsible_departments?.[0] || "City Government"}
                  </span>
                  <span className="text-sm font-bold text-blue-700 group-hover:underline inline-flex items-center gap-1">
                    Inspect Blueprint &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Civic Callout */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
            <h3 className="text-2xl font-black">
              Connect the Agenda with the Public Budget
            </h3>
            <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every priority in the 12-Point Agenda is funded through Davao City's ₱12.7B annual municipal budget and the Annual Development Fund (ADF).
            </p>
            <div className="pt-2">
              <Link
                href="/budget"
                className="inline-block bg-white text-blue-950 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-md"
              >
                Explore ₱12.7B Budget Allocations &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import livabilityData from "../../data/livability.json";

export default function LifeIsHerePage() {
  const { slogan, subtitle, introduction, livability_pillars, citizen_quotes } =
    livabilityData;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-20 pb-16 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Official Slogan &amp; Civic Reality
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {slogan}
            </h1>

            <p className="text-xl sm:text-2xl text-blue-200 font-light max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {introduction}
            </p>
          </div>
        </section>

        {/* Pillars Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              The 7 Civic Pillars of Davao City's Livability
            </h2>
            <p className="text-slate-600">
              Select any card below to read the comprehensive civic analysis, landmark ordinances, and verified real-world impacts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {livability_pillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={`/life-is-here/${pillar.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {pillar.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-blue-900/90 backdrop-blur-xs text-amber-300 text-xs font-black px-3 py-1 rounded-lg">
                    {pillar.stat}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {pillar.stat_label}
                    </span>
                    <span className="text-sm font-bold text-blue-700 group-hover:underline inline-flex items-center gap-1">
                      Read Full Report &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Voices of Dabawenyos Section */}
          <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                Voices of Dabawenyos
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why People Choose to Live in Peaceful Davao City
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {citizen_quotes.map((q, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/15 flex flex-col justify-between"
                >
                  <p className="text-blue-100 text-sm italic leading-relaxed mb-4">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-sm text-white">{q.author}</div>
                    <div className="text-xs text-blue-300">{q.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

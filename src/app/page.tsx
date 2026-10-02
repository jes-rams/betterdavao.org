import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data Imports
import agendaData from "../data/agenda.json";
import ordinancesData from "../data/ordinances.json";
import budgetData from "../data/budget.json";
import officialsData from "../data/officials.json";
import contactData from "../data/contact.json";
import livabilityData from "../data/livability.json";

export default function Home() {
  const { pillars } = agendaData;
  const ordinances = ordinancesData.landmark_ordinances;
  const budget = budgetData.budgets[0];
  const { officials } = officialsData;
  const { contact_information } = contactData;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="bg-blue-950 text-white pt-24 pb-16 px-6 sm:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Work in Progress Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              Community Alpha - Work in Progress
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
              Open Data, Fiscal Transparency, and Civic Governance for Dabawenyos.
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mb-10 leading-relaxed font-light">
              An independent, community-driven civic watchdog portal for monitoring Davao City's public budget, infrastructure contracts, and legislative records.
            </p>

            {/* Fast Action CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/budget" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors border border-blue-500">
                Inspect ₱12.7B Budget &rarr;
              </Link>
              <Link href="/projects" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors border border-slate-700">
                Track Public Projects
              </Link>
              <Link href="/council" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors border border-slate-700">
                21st City Council
              </Link>
              <Link href="/about" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors border border-slate-700">
                Methodology &amp; Standards
              </Link>
            </div>

            {/* Direct 911 Banner */}
            <div className="inline-flex items-center gap-4 bg-red-600/20 border border-red-500/50 rounded-xl p-4 max-w-xl backdrop-blur-sm">
              <div className="bg-red-600 text-white font-black text-2xl px-3 py-2 rounded-lg shadow-inner">
                911
              </div>
              <div>
                <div className="text-red-200 font-bold uppercase text-xs tracking-wider">Emergency Hotline</div>
                <div className="text-white font-medium text-sm mt-0.5">Central 911 is active 24/7 in Davao City for medical, fire, and police emergencies.</div>
              </div>
            </div>
          </div>
          
          {/* Abstract Hero Background Element */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/3 translate-y-1/3">
            <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M45.7,-76.4C58.9,-69.1,69,-55.4,78.2,-41.2C87.4,-27,95.7,-12.3,95.8,2.5C95.8,17.2,87.6,31.9,78.6,46.1C69.5,60.3,59.6,73.9,46,81.4C32.4,88.9,15.1,90.3,0.5,89.5C-14.1,88.7,-28.3,85.6,-41.6,78.4C-54.8,71.2,-67.2,59.8,-75.7,46C-84.3,32.2,-89.1,16.1,-89.3,-0.1C-89.6,-16.3,-85.4,-32.5,-77.1,-46.8C-68.8,-61.2,-56.3,-73.5,-41.9,-79.8C-27.4,-86,-11.2,-86.3,3.7,-91.7C18.6,-97.1,32.5,-83.7,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 space-y-24">

          {/* 2. Slogan Showcase: Davao Life Is Here */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official City Slogan &amp; Civic Reality
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {livabilityData.slogan}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {livabilityData.introduction}
              </p>
            </div>

            {/* Livability Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {livabilityData.livability_pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={`/life-is-here/${pillar.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {pillar.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-blue-900/90 backdrop-blur-xs text-amber-300 text-xs font-black px-2.5 py-1 rounded-lg">
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
                      <span className="text-xs text-slate-500 font-medium">{pillar.stat_label}</span>
                      <span className="text-sm font-bold text-blue-700 group-hover:underline inline-flex items-center gap-1">
                        Read Full Details &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Voices of Dabawenyos */}
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Voices of Dabawenyos</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Why People Choose to Live in Peaceful Davao City
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {livabilityData.citizen_quotes.map((q, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/15 flex flex-col justify-between">
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
            </div>
          </section>

          {/* 3. 12 Priority Development Pillars */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{agendaData.title}</h2>
                <p className="text-slate-600 max-w-2xl">{agendaData.description}</p>
              </div>
              <Link href="/agenda" className="text-blue-700 font-bold hover:underline whitespace-nowrap text-sm inline-flex items-center gap-1">
                View All 12 Full Blueprints &rarr;
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.number}
                  href={`/agenda/${pillar.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-black text-lg shrink-0 transition-colors">
                      {pillar.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 leading-tight group-hover:text-blue-700 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3" title={pillar.summary}>
                        {pillar.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-end">
                    <span className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-0.5">
                      Inspect &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 4. Fiscal Transparency Snapshot (₱12.7B) */}
          <section>
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-10 lg:p-14 text-white">
                  <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    Fiscal Transparency
                  </div>
                  <h2 className="text-4xl font-extrabold mb-4">Davao City Budget ({budget.year})</h2>
                  <div className="text-6xl lg:text-7xl font-black text-amber-400 mb-6 drop-shadow-md">
                    {budget.amount_formatted}
                  </div>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
                    Explore how public funds are allocated across governance, infrastructure, and social services for the citizens of Davao.
                  </p>
                  <Link href="/budget" className="inline-block bg-white text-blue-950 px-8 py-3.5 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                    View Budget Breakdown
                  </Link>
                </div>
                <div className="p-10 lg:p-14 bg-slate-800/50 h-full flex flex-col justify-center border-l border-slate-700/50">
                  <h3 className="text-white font-bold mb-6 text-xl">High-Level Breakdown</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700">
                      <div className="flex justify-between items-end mb-2">
                        <div className="text-slate-300 font-medium">General Fund</div>
                        <div className="text-white font-bold text-xl">{budget.breakdown!.general_fund.amount_formatted}</div>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: budget.breakdown!.general_fund.percentage }}></div>
                      </div>
                      <div className="mt-2 text-xs text-slate-400 text-right">{budget.breakdown!.general_fund.percentage} of total</div>
                    </div>
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700">
                      <div className="flex justify-between items-end mb-2">
                        <div className="text-slate-300 font-medium">Annual Development Fund</div>
                        <div className="text-white font-bold text-xl">{budget.breakdown!.annual_development_fund.amount_formatted}</div>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5">
                        <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: budget.breakdown!.annual_development_fund.percentage }}></div>
                      </div>
                      <div className="mt-2 text-xs text-slate-400 text-right">{budget.breakdown!.annual_development_fund.percentage} of total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Landmark Public Safety & Civic Ordinances */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Landmark Civic Ordinances</h2>
              <p className="text-slate-600">Signature policies that shape public safety and discipline in Davao City.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ordinances.map((ord, idx) => (
                <div key={idx} className="bg-white border-l-4 border-blue-600 rounded-r-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="font-bold text-lg text-slate-900">{ord.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{ord.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. City Leadership & Legislative Council */}
          <section className="bg-blue-50 rounded-2xl p-8 sm:p-12 border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">City Leadership</h2>
                <p className="text-slate-600 max-w-2xl">
                  The executive officials governing the City Government of Davao for the {officialsData.term} term.
                </p>
              </div>
              <Link href="/council" className="inline-flex items-center justify-center bg-white border border-slate-300 text-slate-700 font-bold px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
                View 21st City Council
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-24 h-24 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div className="relative z-10">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">City Mayor</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{officials.mayor.name}</h3>
                  <p className="text-slate-500 text-sm">{officials.mayor.notes}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-24 h-24 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div className="relative z-10">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">City Vice Mayor</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{officials.vice_mayor.name}</h3>
                  <p className="text-slate-500 text-sm">{officials.vice_mayor.notes}</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Emergency 24/7 Hotline Block */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Need Assistance?</h2>
              <p className="text-slate-600">Contact official city hotlines for emergencies or administrative inquiries.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full md:w-auto">
              <a href={`tel:${contact_information.emergency_hotline}`} className="flex-1 sm:flex-none flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-100 hover:bg-red-100 transition-colors">
                <div className="bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl shadow-sm">
                  {contact_information.emergency_hotline}
                </div>
                <div>
                  <div className="text-red-900 font-bold">Central 911</div>
                  <div className="text-red-700 text-xs">24/7 Emergency Dispatch</div>
                </div>
              </a>
              <div className="flex-1 sm:flex-none flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="bg-slate-800 text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-900 font-bold">{contact_information.trunkline}</div>
                  <div className="text-slate-600 text-xs">City Hall Trunkline</div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

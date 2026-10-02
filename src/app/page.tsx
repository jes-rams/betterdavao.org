"use client";

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
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-16 px-6 sm:px-12 overflow-hidden bg-blue-950 text-white min-h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/landmarks/davao-skyline.jpg" alt="Davao Skyline" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/80 to-blue-950"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 space-y-8 w-full mt-10">
            {/* Community Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Independent Civic Platform &bull; Made by Dabawenyos
            </div>

            {/* Main Headline */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                A City Like No Other. <br />
                Welcome to <span className="text-amber-400">Better Davao</span>.
              </h1>
              <p className="text-lg sm:text-2xl text-blue-100 leading-relaxed font-light">
                From the heights of Mount Apo and our 11 living cultural tribes to peaceful midnight streets and pure mountain tap water, Davao has always done things with pride and grit. Better Davao is an independent community space celebrating everything that makes our city special—while giving every citizen the transparent data to make our home even better.
              </p>
            </div>

            {/* City Pride Highlights */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                🏔️ Mount Apo (2,954m Peak)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                🦅 Home of the Philippine Eagle
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                💧 100% Potable Mountain Tap Water
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                🚑 24/7 Zero-Cost Central 911
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                👑 Fruit &amp; Cacao Capital
              </span>
            </div>

            {/* Fast Action CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                href="/life-is-here"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3.5 rounded-xl font-black shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm sm:text-base"
              >
                Why Life Is Here &rarr;
              </Link>
              <Link
                href="/agenda"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold shadow-md transition-all border border-blue-500 text-sm sm:text-base"
              >
                12-Point Priority Agenda
              </Link>
            </div>

            {/* Direct 911 Banner */}
            <div className="inline-flex items-center gap-4 bg-red-600/20 border border-red-500/40 rounded-2xl p-4 max-w-xl backdrop-blur-md">
              <a
                href="tel:911"
                className="bg-red-600 hover:bg-red-500 text-white font-black text-2xl px-3.5 py-2 rounded-xl shadow-inner transition shrink-0"
                title="Call Central 911"
              >
                911
              </a>
              <div>
                <div className="text-red-300 font-extrabold uppercase text-xs tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                  Central 911 Emergency Hotline
                </div>
                <div className="text-white font-medium text-xs sm:text-sm mt-0.5 leading-snug">
                  Active 24/7 across all Davao districts for free medical, fire, search, and police emergencies.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Slogan Showcase: Davao Life Is Here */}
        <section className="relative py-20 px-6 sm:px-12 bg-emerald-50/90 border-b border-emerald-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/landmarks/kadayawan-festival.jpg" alt="Kadayawan" className="w-full h-full object-cover opacity-[0.03] mix-blend-multiply" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official City Slogan &amp; Civic Reality
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {livabilityData.slogan}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {livabilityData.introduction}
              </p>
            </div>

            {/* Livability Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {livabilityData.livability_pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={`/life-is-here/${pillar.id}`}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col"
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
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="/images/landmarks/peoples-park-durian-dome.jpg" alt="People's Park" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
              </div>
              <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Voices of Dabawenyos</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Why People Choose to Live in Peaceful Davao City
                </h3>
              </div>
              <div className="relative z-10 grid md:grid-cols-3 gap-6">
                {livabilityData.citizen_quotes.map((q, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 flex flex-col justify-between shadow-lg">
                    <p className="text-blue-50 text-sm italic leading-relaxed mb-4">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-bold text-sm text-white">{q.author}</div>
                      <div className="text-xs text-blue-200">{q.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. 12 Priority Development Pillars */}
        <section className="relative py-20 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{agendaData.title}</h2>
                <p className="text-slate-600 max-w-2xl">{agendaData.description}</p>
              </div>
              <Link href="/agenda" className="text-blue-700 font-bold hover:underline whitespace-nowrap text-sm inline-flex items-center gap-1">
                View All 12 Full Blueprints &rarr;
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pillars.map((pillar: any) => (
                <Link
                  key={pillar.number}
                  href={`/agenda/${pillar.slug}`}
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group flex flex-col hover:bg-white"
                >
                  {pillar.image && (
                    <div className="w-full h-32 overflow-hidden bg-slate-200 relative">
                      <img 
                        src={pillar.image} 
                        alt={pillar.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-blue-600/90 backdrop-blur-sm text-white flex items-center justify-center font-black text-sm shadow-sm">
                        {pillar.number}
                      </div>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div className="flex items-start gap-3">
                      {!pillar.image && (
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-black text-lg shrink-0 transition-colors">
                          {pillar.number}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3" title={pillar.summary}>
                          {pillar.summary}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-end">
                      <span className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-0.5">
                        Inspect &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Fiscal Transparency Snapshot (₱12.7B) */}
        <section className="relative py-20 px-6 sm:px-12 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/landmarks/davao-city-hall.jpg" alt="Davao City Hall" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950/90 to-slate-900/80"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-10 lg:p-14 text-white">
                  <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/50 text-blue-200 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
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
                <div className="p-10 lg:p-14 bg-slate-900/40 h-full flex flex-col justify-center border-l border-white/10">
                  <h3 className="text-white font-bold mb-6 text-xl">High-Level Breakdown</h3>
                  <div className="space-y-6">
                    <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                      <div className="flex justify-between items-end mb-2">
                        <div className="text-slate-300 font-medium">General Fund</div>
                        <div className="text-white font-bold text-xl">{budget.breakdown!.general_fund.amount_formatted}</div>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: budget.breakdown!.general_fund.percentage }}></div>
                      </div>
                      <div className="mt-2 text-xs text-slate-400 text-right">{budget.breakdown!.general_fund.percentage} of total</div>
                    </div>
                    <div className="bg-black/30 p-5 rounded-xl border border-white/5">
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
          </div>
        </section>

        {/* 5. Landmark Public Safety & Civic Ordinances */}
        <section className="relative py-20 px-6 sm:px-12 bg-blue-50/80 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/landmarks/san-pedro-cathedral.jpg" alt="San Pedro Cathedral" className="w-full h-full object-cover opacity-[0.04] mix-blend-multiply" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Landmark Civic Ordinances</h2>
              <p className="text-slate-600">Signature policies that shape public safety and discipline in Davao City.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ordinances.map((ord: any, idx: number) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  {ord.image && (
                    <div className="h-40 w-full overflow-hidden bg-slate-200 border-b border-slate-100">
                      <img src={ord.image} alt={ord.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`p-6 flex-1 ${!ord.image ? 'border-l-4 border-blue-600 rounded-l-xl' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      {!ord.image && (
                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      <h3 className="font-bold text-lg text-slate-900">{ord.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{ord.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. City Leadership & Legislative Council */}
        <section className="relative py-20 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-1/2 h-full z-0 opacity-20 pointer-events-none">
                <img src="/images/landmarks/philippine-eagle.jpg" alt="Philippine Eagle" className="w-full h-full object-cover object-left [mask-image:linear-gradient(to_right,transparent,black)]" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-3">City Leadership</h2>
                  <p className="text-slate-600 max-w-2xl">
                    The executive officials governing the City Government of Davao for the {officialsData.term} term.
                  </p>
                </div>
                <Link href="/council" className="inline-flex items-center justify-center bg-white border border-slate-300 text-slate-700 font-bold px-6 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors shadow-sm whitespace-nowrap">
                  View 21st City Council
                </Link>
              </div>
              
              <div className="relative z-10 grid sm:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">City Mayor</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{officials.mayor.name}</h3>
                    <p className="text-slate-500 text-sm">{officials.mayor.notes}</p>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">City Vice Mayor</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{officials.vice_mayor.name}</h3>
                    <p className="text-slate-500 text-sm">{officials.vice_mayor.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Emergency 24/7 Hotline Block */}
        <section className="relative py-16 px-6 sm:px-12 bg-slate-900 overflow-hidden text-white border-t border-slate-800">
          <div className="absolute inset-0 z-0">
            <img src="/images/landmarks/davao-coastal-road.jpg" alt="Davao Coastal Road" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-10 justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-extrabold text-white mb-3">Need Immediate Assistance?</h2>
                <p className="text-slate-300 text-lg">Contact official city hotlines for emergencies, search and rescue, or administrative inquiries. Available 24/7.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
                <a href={`tel:${contact_information.emergency_hotline}`} className="flex-1 sm:flex-none flex items-center gap-4 bg-red-600/20 p-5 rounded-2xl border border-red-500/30 hover:bg-red-600/30 transition-colors backdrop-blur-sm shadow-xl">
                  <div className="bg-red-600 text-white w-14 h-14 rounded-xl flex items-center justify-center font-black text-2xl shadow-inner">
                    {contact_information.emergency_hotline}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Central 911</div>
                    <div className="text-red-300 text-sm font-medium">Free Emergency Dispatch</div>
                  </div>
                </a>
                <div className="flex-1 sm:flex-none flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-sm shadow-xl">
                  <div className="bg-slate-800/80 text-white w-14 h-14 rounded-xl flex items-center justify-center shadow-inner border border-white/10">
                    <svg className="w-7 h-7 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{contact_information.trunkline}</div>
                    <div className="text-slate-300 text-sm font-medium">City Hall Trunkline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

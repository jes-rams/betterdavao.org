import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import budgetData from '../../data/budget.json';

export default function BudgetPage() {
  const budget2024 = budgetData.budgets.find(b => b.year === 2024)!;
  const budget2023 = budgetData.budgets.find(b => b.year === 2023)!;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Header Section */}
        <section className="relative py-16 text-center w-full px-4 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl">
          <div className="absolute inset-0 z-0">
            <img src="/images/landmarks/davao-city-hall.jpg" alt="Davao City Hall" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-blue-950/90"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
              Civic Transparency
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Davao City Fiscal Transparency &amp; Public Funds Overview
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Every peso in the city budget comes from taxpayers like you. Here is a clear, plain-language breakdown of the {budget2024.amount_formatted} budget for {budget2024.year}, explaining where public money goes and how it serves the Dabawenyos.
            </p>
          </div>
        </section>

        {/* Year-over-Year Growth Comparison */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Year-over-Year Budget Growth</h2>
              <p className="text-slate-600">
                The {budget2024.year} budget saw an increase of 7.62% compared to {budget2023.year}, intended to fund continuing infrastructure development and expanding social services.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="text-center">
                <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wide">{budget2023.year}</span>
                <span className="block text-2xl sm:text-3xl font-bold text-slate-700">{budget2023.amount_formatted}</span>
              </div>
              <div className="text-slate-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                <span className="block text-sm font-semibold text-blue-700 uppercase tracking-wide">{budget2024.year}</span>
                <span className="block text-2xl sm:text-3xl font-black text-blue-700">{budget2024.amount_formatted}</span>
                <span className="inline-block mt-1 px-2 py-0.5 bg-blue-200 text-blue-800 text-xs font-bold rounded-full">+7.62%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Breakdown Bars */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How is the Budget Divided?</h2>
            <p className="text-slate-600 max-w-2xl">
              The city budget is primarily divided into two main funds. The General Fund covers daily operations, while the Annual Development Fund (ADF) is strictly reserved for high-impact infrastructure and socio-economic projects.
            </p>
          </div>

          <div className="space-y-6">
            {/* General Fund */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">General Fund</h3>
                  <p className="text-sm text-slate-500">{budget2024.breakdown!.general_fund.description}</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black text-blue-700">{budget2024.breakdown!.general_fund.amount_formatted}</span>
                  <span className="text-sm font-bold text-slate-500">{budget2024.breakdown!.general_fund.percentage} of total</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '79.82%' }}></div>
              </div>
            </div>

            {/* Annual Development Fund */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Annual Development Fund (ADF)</h3>
                  <p className="text-sm text-slate-500">Reserved for major infrastructure, economic development, and environmental management.</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black text-amber-600">{budget2024.breakdown!.annual_development_fund.amount_formatted}</span>
                  <span className="text-sm font-bold text-slate-500">{budget2024.breakdown!.annual_development_fund.percentage} of total</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                <div className="bg-amber-500 h-4 rounded-full" style={{ width: '19.04%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Priority Department Allocations */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Priority Allocations</h2>
            <p className="text-slate-600 max-w-2xl">
              A breakdown of the departments receiving the largest share of public funds and the essential services they deliver to citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">City Mayor's Office</h3>
              <p className="text-2xl font-black text-blue-700 my-2">{budget2024.key_allocations!.city_mayors_office}</p>
              <p className="text-sm text-slate-600">Funds executive programs, administrative oversight, and special city-wide initiatives spanning education, peace and order, and public welfare.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">City Engineer's Office</h3>
              <p className="text-2xl font-black text-blue-700 my-2">{budget2024.key_allocations!.city_engineers_office}</p>
              <p className="text-sm text-slate-600">Responsible for the construction and maintenance of local roads, drainage systems, government buildings, and public infrastructure.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">City Social Welfare and Development (CSWDO)</h3>
              <p className="text-2xl font-black text-blue-700 my-2">{budget2024.key_allocations!.city_social_welfare_and_development}</p>
              <p className="text-sm text-slate-600">Delivers critical social services including the Lingap Para sa Mahirap financial assistance, senior citizen support, and crisis intervention.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">City Disaster Risk Reduction (CDRRMO)</h3>
              <p className="text-2xl font-black text-blue-700 my-2">{budget2024.key_allocations!.city_disaster_risk_reduction}</p>
              <p className="text-sm text-slate-600">Funds the Central 911 emergency response system, disaster preparedness, rescue operations, and climate adaptation programs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">City Health Office</h3>
              <p className="text-2xl font-black text-blue-700 my-2">{budget2024.key_allocations!.city_health_office}</p>
              <p className="text-sm text-slate-600">Supports public district health centers, vaccination programs, maternal care, and community disease prevention initiatives.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Infrastructure Projects (from ADF)</h3>
              <p className="text-2xl font-black text-amber-600 my-2">{budget2024.key_allocations!.infrastructure_projects}</p>
              <p className="text-sm text-slate-600">Specific capital outlays drawn from the development fund to build bridges, health clinics, and long-term civil works.</p>
            </div>
          </div>
        </section>

        {/* Citizen Participation & Accountability */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Citizen Guide */}
          <div className="relative bg-blue-900 text-white p-8 rounded-2xl shadow-md overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/images/landmarks/kadayawan-festival.jpg" alt="Kadayawan" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Citizen Participation Guide</h3>
            <p className="text-blue-200 mb-6">Your tax money, your voice. Here are ways you can participate in local governance and monitor public funds:</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <strong className="block text-white">Barangay Assembly Days</strong>
                  <span className="text-sm text-blue-200">Attend your local barangay assemblies held twice a year to hear financial reports and propose community projects.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <strong className="block text-white">City Council Budget Hearings</strong>
                  <span className="text-sm text-blue-200">Budget hearings are public records. Civil society organizations can observe the deliberations of the Sangguniang Panlungsod.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <strong className="block text-white">Monitor Infrastructure</strong>
                  <span className="text-sm text-blue-200">Check project billboards in your area. They must display the budget, contractor, and timeline as required by law.</span>
                </div>
              </li>
            </ul>
            </div>
          </div>

          {/* Accountability block */}
          <div className="bg-slate-100 p-8 rounded-2xl shadow-inner border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Transparency &amp; Accountability</h3>
            <p className="text-slate-600 mb-6">
              The Local Government Code mandates strict auditing and public disclosure of how city funds are managed. Verify the numbers through official national portals:
            </p>
            <div className="space-y-4">
              <a href="https://www.coa.gov.ph/" target="_blank" rel="noreferrer" className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group">
                <strong className="block text-slate-900 group-hover:text-blue-700 transition">Commission on Audit (COA) Reports &rarr;</strong>
                <span className="text-sm text-slate-500">Read the annual independent audit reports evaluating Davao City's financial statements and compliance.</span>
              </a>
              <a href="https://fdpp.dilg.gov.ph/" target="_blank" rel="noreferrer" className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group">
                <strong className="block text-slate-900 group-hover:text-blue-700 transition">DILG Full Disclosure Policy Portal &rarr;</strong>
                <span className="text-sm text-slate-500">Access submitted quarterly financial documents, procurement plans, and utilization reports of the city.</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import officialsData from '../data/officials.json';
import budgetData from '../data/budget.json';
import projectsData from '../data/projects.json';
import contactData from '../data/contact.json';

export default function Home() {
  const { officials } = officialsData;
  const latestBudget = budgetData.budgets[0];
  const { projects } = projectsData;
  const { contact_information } = contactData;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Work in Progress
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Better Davao City
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A community-driven digital transparency portal bringing local government data, projects, and services closer to the Davaoeños.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-12 py-12 space-y-16">
        
        {/* Officials Section */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-blue-900 pb-2 mb-6 text-blue-900">City Leadership</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-sm font-semibold uppercase text-slate-500 mb-1">City Mayor</h3>
              <p className="text-2xl font-bold text-slate-800">{officials.mayor.name}</p>
              <p className="text-sm text-slate-600 mt-2">{officials.mayor.notes}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-sm font-semibold uppercase text-slate-500 mb-1">Vice Mayor</h3>
              <p className="text-2xl font-bold text-slate-800">{officials.vice_mayor.name}</p>
              <p className="text-sm text-slate-600 mt-2">{officials.vice_mayor.notes}</p>
            </div>
          </div>
        </section>

        {/* Budget Section */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-blue-900 pb-2 mb-6 text-blue-900">Financial Transparency</h2>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-700">Annual Budget ({latestBudget.year})</h3>
                <p className="text-5xl font-black text-blue-600 mt-2">{latestBudget.amount_formatted}</p>
                <p className="text-slate-600 mt-2">{latestBudget.notes}</p>
              </div>
              <div className="mt-6 md:mt-0 p-4 bg-white rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="block text-sm text-slate-500 font-medium">Source</span>
                <span className="block font-semibold text-slate-800">{budgetData.source}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-blue-900 pb-2 mb-6 text-blue-900">Major Infrastructure Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.ongoing.slice(0, 4).map((project, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">ONGOING</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-800 text-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact & Emergency</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-slate-400 text-sm font-semibold uppercase mb-2">Emergency Hotline</h3>
              <p className="text-3xl font-black text-red-400">{contact_information.emergency_hotline}</p>
            </div>
            <div>
              <h3 className="text-slate-400 text-sm font-semibold uppercase mb-2">Trunkline</h3>
              <p className="text-xl font-bold">{contact_information.trunkline}</p>
              <p className="text-sm text-slate-300 mt-1">{contact_information.administrative_non_emergency}</p>
            </div>
            <div>
              <h3 className="text-slate-400 text-sm font-semibold uppercase mb-2">Address</h3>
              <p className="text-sm leading-relaxed">{contact_information.physical_address}</p>
              <a href={contact_information.website} target="_blank" rel="noreferrer" className="inline-block mt-3 text-blue-300 hover:text-blue-200 font-medium">
                Visit Official Website &rarr;
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>Built by the community for Davao City. Part of the <a href="https://bettergov.ph" className="text-blue-400 hover:underline">BetterGov.ph</a> initiative.</p>
      </footer>
    </div>
  );
}

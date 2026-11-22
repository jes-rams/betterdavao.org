import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import officialsData from "@/data/officials.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "City Council & Leadership | Better Davao City",
  description: "Explore the leadership directory and legislative representatives of the 21st Sangguniang Panlungsod of Davao City.",
};

export default function CouncilPage() {
  const { officials, source, term } = officialsData;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            Legislative &amp; Executive Branch &bull; {term}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            21st Sangguniang Panlungsod
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-light">
            The elected municipal councilors and executive leaders responsible for local ordinances, resolutions, 
            and citizen representation across Davao City&apos;s three legislative districts.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14 flex-1 w-full">
        {/* Executive Leaders */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            City Executive Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                City Mayor
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {officials.mayor.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {officials.mayor.notes}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                Vice Mayor &amp; Presiding Officer
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {officials.vice_mayor.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {officials.vice_mayor.notes}
              </p>
            </div>
          </div>
        </section>

        {/* District Councilors Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Elected District Councilors
            </h2>
            <a
              href="https://sp.davaocity.gov.ph/"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Official SP Portal &rarr;
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {officials.councilors.map((districtGroup, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-900">
                    {districtGroup.district}
                  </div>

                  <ul className="space-y-2.5">
                    {districtGroup.members.map((member, mIdx) => (
                      <li
                        key={mIdx}
                        className="text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>

                {districtGroup.notes && (
                  <p className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 italic">
                    {districtGroup.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Department Heads */}
        <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Key Administrative Department Heads
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block">City Administrator</span>
              <p className="font-bold text-slate-800 dark:text-slate-100 text-base mt-1">{officials.key_department_heads.city_administrator.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{officials.key_department_heads.city_administrator.office}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block">City Health Officer</span>
              <p className="font-bold text-slate-800 dark:text-slate-100 text-base mt-1">{officials.key_department_heads.city_health_officer.office}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{officials.key_department_heads.city_health_officer.notes}</p>
            </div>
          </div>
        </section>

        {/* Source Citation */}
        <div className="text-center text-xs text-slate-400">
          Source: {source} &bull; Cross-referenced from Sangguniang Panlungsod public records
        </div>
      </main>

      <Footer />
    </div>
  );
}

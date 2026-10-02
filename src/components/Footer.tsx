import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-lg">
                D
              </span>
              <span className="text-white font-extrabold text-xl tracking-tight">
                Better Davao City
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm pr-4">
              An independent, volunteer-led civic transparency initiative built for the citizens of Davao City. 
              We aggregate public datasets, legislative records, and official e-services to make local governance 
              open, understandable, and accessible to everyone.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400">Cost to the Taxpayers of Davao:</span>
              <span className="text-emerald-400 font-bold">₱0.00 (100% Volunteer Powered)</span>
            </div>
          </div>

          {/* Civic Sections */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Transparency
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Civic Dashboard
                </Link>
              </li>
              <li>
                <Link href="/budget" className="hover:text-white transition">
                  Annual Budget
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Major Projects
                </Link>
              </li>
              <li>
                <Link href="/council" className="hover:text-white transition">
                  21st City Council
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Our Mission & Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Public Accountability & Oversight */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Public Oversight
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.coa.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  COA Annual Audit Reports &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://fdpp.dilg.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  DILG Full Disclosure Portal &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://sp.davaocity.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  City Council SP Records &rarr;
                </a>
              </li>
              <li>
                <a href="tel:911" className="text-red-400 font-semibold hover:text-red-300 transition">
                  Central 911 Emergency
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Maintainers */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Community & Source
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/jes-rams/betterdavao.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub Repository &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://bettergov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  BetterGov.ph Network &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://lgu.bettergov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  BetterLGU Directory &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sensui.ramos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Lead Maintainer (Facebook) &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://davaocity.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-300 transition"
                >
                  Official City Website &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Better Davao City is a community-run public interest project. Not affiliated with or operated by the 
            City Government of Davao. All datasets cited from public disclosures and official publications.
          </p>
          <p className="shrink-0">
            Open Source under MIT License &bull; Davao City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

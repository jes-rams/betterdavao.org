import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms and Conditions | Better Davao City",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans dark:bg-slate-950 dark:text-slate-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 dark:text-white">Terms and Conditions</h1>
          <p className="text-slate-500 text-sm">Last updated: October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 dark:prose-invert">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Better Davao City. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">2. Independence from Local Government</h2>
            <p className="leading-relaxed">
              Better Davao City is an independent, volunteer-led civic transparency initiative. We are NOT affiliated with, endorsed by, or operated by the City Government of Davao or any of its departments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">3. Data Accuracy</h2>
            <p className="leading-relaxed">
              All datasets, legislative records, and official e-services linked on this site are aggregated from public disclosures and official publications. While we strive to keep information up to date, we make no guarantees about the completeness, reliability, or accuracy of this information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">4. Use of Service</h2>
            <p className="leading-relaxed">
              You agree to use this site only for lawful purposes. You must not use this site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

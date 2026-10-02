import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Better Davao City",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans dark:bg-slate-950 dark:text-slate-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 dark:prose-invert">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">1. Overview</h2>
            <p className="leading-relaxed">
              Your privacy is critically important to us. Better Davao City has a few fundamental principles regarding privacy and user data. We don't ask you for personal information unless we truly need it, and we don't share your personal information with anyone except to comply with the law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">2. Data Collection</h2>
            <p className="leading-relaxed">
              We do not require users to create an account or provide any personal information to access the civic resources on this website. Our website may collect basic, non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">3. External Links</h2>
            <p className="leading-relaxed">
              Our website contains links to official e-services and government portals. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">4. Cookies</h2>
            <p className="leading-relaxed">
              We may use local storage to save your user preferences (such as Dark Mode or Font Size settings). This data remains on your device and is not transmitted to our servers.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

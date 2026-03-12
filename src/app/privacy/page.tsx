import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Special_Elite']">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl mb-8 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl mb-3">Cookies</h2>
          <p className="text-sm leading-relaxed opacity-80">
            This website uses a small number of cookies to improve your browsing experience.
            We store a cookie consent preference so we don&apos;t ask you repeatedly, and we may
            use basic analytics cookies to understand how visitors use the site. No advertising
            or tracking cookies from third parties are used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-3">Your Data</h2>
          <p className="text-sm leading-relaxed opacity-80">
            We do not collect, sell, or share any personal data. If you contact us via the
            contact form, the information you provide is used solely to respond to your enquiry.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-3">Third-Party Links</h2>
          <p className="text-sm leading-relaxed opacity-80">
            This site may contain links to external websites (e.g. Instagram, podcast platforms).
            We are not responsible for the privacy practices of those sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-3">Questions?</h2>
          <p className="text-sm leading-relaxed opacity-80">
            If you have any questions about this policy, please{" "}
            <Link href="/contact" className="underline hover:opacity-70 transition-opacity">
              get in touch
            </Link>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

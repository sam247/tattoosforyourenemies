import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Special_Elite']">
      <Header />

      <main className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-6xl md:text-8xl mb-4">404</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-70">Page not found</p>
        <Link
          href="/home"
          className="underline text-lg hover:opacity-70 transition-opacity"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}

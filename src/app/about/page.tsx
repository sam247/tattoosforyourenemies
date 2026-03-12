import Image from "next/image";
import { Instagram } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import navAboutme from "@/assets/nav-aboutme.png";
import aboutPhoto from "@/assets/about-me-photo.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={navAboutme} alt="About Me" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-1/2 font-['Special_Elite'] text-base md:text-lg leading-relaxed">
            <p className="mb-6">Tattoos for Your Enemies started as a zine in 2010.</p>
            <p className="mb-6">
              The zine contained drawings that were so weird you would only wish them as tattoos on somebody you didn&apos;t like. From 2014 to the present they have been available as tattoos.
            </p>
            <p className="mb-8">Born in Hertfordshire, England, Jack is now based in Los Angeles, California.</p>
            <a href="https://instagram.com/tattoosforyourenemies" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">
              <Instagram size={28} strokeWidth={1.5} />
            </a>
          </div>
          <div className="md:w-1/2">
            <Image src={aboutPhoto} alt="Jack Watts - Photo Booth" className="w-full max-w-xs mx-auto object-contain" width={400} height={500} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

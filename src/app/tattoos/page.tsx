"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import navTattoos from "@/assets/nav-tattoos.png";

import tattoo01 from "@/assets/tattoo-01.jpg";
import tattoo02 from "@/assets/tattoo-02.jpg";
import tattoo03 from "@/assets/tattoo-03.jpg";
import tattoo04 from "@/assets/tattoo-04.jpg";
import tattoo05 from "@/assets/tattoo-05.jpg";
import tattoo06 from "@/assets/tattoo-06.jpeg";
import tattoo07 from "@/assets/tattoo-07.jpg";
import tattoo08 from "@/assets/tattoo-08.jpg";
import tattoo09 from "@/assets/tattoo-09.jpg";
import tattoo10 from "@/assets/tattoo-10.jpg";
import tattoo11 from "@/assets/tattoo-11.jpg";
import tattoo12 from "@/assets/tattoo-12.jpg";
import tattoo13 from "@/assets/tattoo-13.jpg";
import tattoo14 from "@/assets/tattoo-14.jpg";
import tattoo15 from "@/assets/tattoo-15.jpg";
import tattoo16 from "@/assets/tattoo-16.jpg";
import tattoo17 from "@/assets/tattoo-17.jpg";
import tattoo18 from "@/assets/tattoo-18.jpg";
import tattoo19 from "@/assets/tattoo-19.jpg";
import tattoo20 from "@/assets/tattoo-20.jpg";
import tattoo21 from "@/assets/tattoo-21.jpg";
import tattoo22 from "@/assets/tattoo-22.jpg";
import tattoo23 from "@/assets/tattoo-23.jpg";
import tattoo24 from "@/assets/tattoo-24.jpg";
import tattoo25 from "@/assets/tattoo-25.jpg";
import tattoo26 from "@/assets/tattoo-26.jpg";
import tattoo27 from "@/assets/tattoo-27.jpg";
import tattoo28 from "@/assets/tattoo-28.jpg";
import tattoo29 from "@/assets/tattoo-29.jpg";
import tattoo30 from "@/assets/tattoo-30.jpg";
import tattoo31 from "@/assets/tattoo-31.jpg";
import tattoo32 from "@/assets/tattoo-32.jpg";
import tattoo33 from "@/assets/tattoo-33.jpg";
import tattoo34 from "@/assets/tattoo-34.jpg";
import tattoo35 from "@/assets/tattoo-35.jpg";
import tattoo36 from "@/assets/tattoo-36.jpg";

import type { StaticImageData } from "next/image";

const tattooImages: StaticImageData[] = [
  tattoo01, tattoo02, tattoo03, tattoo04, tattoo05,
  tattoo06, tattoo07, tattoo08, tattoo09,
  tattoo10, tattoo11, tattoo12, tattoo13, tattoo14,
  tattoo15, tattoo16, tattoo17, tattoo18,
  tattoo19, tattoo20, tattoo21, tattoo22, tattoo23,
  tattoo24, tattoo25, tattoo26, tattoo27,
  tattoo28, tattoo29, tattoo30, tattoo31, tattoo32,
  tattoo33, tattoo34, tattoo35, tattoo36,
];

export default function TattoosPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={navTattoos} alt="Tattoos" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {tattooImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
            >
              <Image
                src={src}
                alt={`Tattoo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={tattooImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />

      <Footer />
    </div>
  );
}

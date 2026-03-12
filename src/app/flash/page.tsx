"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import navFlash from "@/assets/nav-flash.png";

import flash01 from "@/assets/flash-01.jpg";
import flash02 from "@/assets/flash-02.jpg";
import flash03 from "@/assets/flash-03.jpg";
import flash04 from "@/assets/flash-04.png";
import flash05 from "@/assets/flash-05.jpg";
import flash06 from "@/assets/flash-06.jpg";
import flash07 from "@/assets/flash-07.jpg";
import flash08 from "@/assets/flash-08.jpg";
import flash09 from "@/assets/flash-09.jpg";
import flash10 from "@/assets/flash-10.jpg";
import flash11 from "@/assets/flash-11.jpg";
import flash12 from "@/assets/flash-12.jpg";
import flash13 from "@/assets/flash-13.jpg";
import flash14 from "@/assets/flash-14.jpg";
import flash15 from "@/assets/flash-15.jpg";
import flash16 from "@/assets/flash-16.jpg";
import flash17 from "@/assets/flash-17.jpg";

import type { StaticImageData } from "next/image";

const flashImages: StaticImageData[] = [
  flash01, flash02, flash03, flash04, flash05, flash06, flash07, flash08,
  flash09, flash10, flash11, flash12, flash13, flash14, flash15, flash16, flash17,
];

export default function FlashPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={navFlash} alt="Flash" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {flashImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
            >
              <Image
                src={src}
                alt={`Flash ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={flashImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />

      <Footer />
    </div>
  );
}

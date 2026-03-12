"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

import navTattoos from "@/assets/nav-tattoos.png";
import navFlash from "@/assets/nav-flash.png";
import navIllustrations from "@/assets/nav-illustrations.png";
import toothMascot from "@/assets/tooth-mascot.jpg";
import viewMoreBtn from "@/assets/view-more-btn.png";

import tattoo01 from "@/assets/tattoo-01.jpg";
import tattoo02 from "@/assets/tattoo-02.jpg";
import tattoo03 from "@/assets/tattoo-03.jpg";
import tattoo04 from "@/assets/tattoo-04.jpg";
import tattoo05 from "@/assets/tattoo-05.jpg";
import tattoo06 from "@/assets/tattoo-06.jpeg";

import flash01 from "@/assets/flash-01.jpg";
import flash02 from "@/assets/flash-02.jpg";
import flash03 from "@/assets/flash-03.jpg";
import flash04 from "@/assets/flash-04.png";
import flash05 from "@/assets/flash-05.jpg";
import flash06 from "@/assets/flash-06.jpg";

import illusMural from "@/assets/illus-mural-commission.jpeg";
import illusKingKong from "@/assets/illus-king-kong-mural.jpeg";
import illusBackseatVinyl from "@/assets/illus-backseat-vinyl.jpeg";
import illusClubCoward from "@/assets/illus-club-coward.jpeg";
import illusBeePositive from "@/assets/illus-bee-positive-tote.jpg";
import illusEdgeBar from "@/assets/illus-edge-bar-mural.jpg";

import type { StaticImageData } from "next/image";

const tattooHomepageImages: StaticImageData[] = [tattoo01, tattoo02, tattoo03, tattoo04, tattoo05, tattoo06];
const flashHomepageImages: StaticImageData[] = [flash01, flash02, flash03, flash04, flash05, flash06];
const illusHomepageImages: StaticImageData[] = [illusMural, illusKingKong, illusBackseatVinyl, illusClubCoward, illusBeePositive, illusEdgeBar];

function ViewMoreLink({ to }: { to: string }) {
  return (
    <div className="text-center mt-6">
      <Link href={to} className="inline-block hover:opacity-70 transition-opacity">
        <Image src={viewMoreBtn} alt="View More" className="h-6 md:h-7 object-contain w-auto" width={120} height={28} />
      </Link>
    </div>
  );
}

function ImageGrid({
  images,
  altPrefix,
  onImageClick,
}: {
  images: StaticImageData[];
  altPrefix: string;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => onImageClick(i)}
          className="aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
        >
          <Image
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [activeLightbox, setActiveLightbox] = useState<{
    images: (StaticImageData | string)[];
    index: number;
  } | null>(null);

  const openLightbox = (images: StaticImageData[], index: number) =>
    setActiveLightbox({ images, index });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="flex justify-center py-6 px-4">
        <Image
          src={toothMascot}
          alt="Tooth Mascot"
          className="w-28 md:w-36 object-contain"
          width={144}
          height={144}
          priority
        />
      </section>

      <div className="h-8 md:h-12" />

      <section id="tattoos" className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-6">
          <Image src={navTattoos} alt="Tattoos" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
        </div>
        <ImageGrid
          images={tattooHomepageImages}
          altPrefix="Tattoo"
          onImageClick={(i) => openLightbox(tattooHomepageImages, i)}
        />
        <ViewMoreLink to="/tattoos" />
      </section>

      <section id="flash" className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-6">
          <Image src={navFlash} alt="Flash" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
        </div>
        <ImageGrid
          images={flashHomepageImages}
          altPrefix="Flash"
          onImageClick={(i) => openLightbox(flashHomepageImages, i)}
        />
        <ViewMoreLink to="/flash" />
      </section>

      <section id="illustrations" className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-6">
          <Image src={navIllustrations} alt="Illustrations" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
        </div>
        <ImageGrid
          images={illusHomepageImages}
          altPrefix="Illustration"
          onImageClick={(i) => openLightbox(illusHomepageImages, i)}
        />
        <ViewMoreLink to="/illustrations" />
      </section>

      {activeLightbox && (
        <Lightbox
          images={activeLightbox.images}
          currentIndex={activeLightbox.index}
          onClose={() => setActiveLightbox(null)}
          onChange={(i) =>
            setActiveLightbox((prev) => (prev ? { ...prev, index: i } : null))
          }
        />
      )}

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import navIllustrations from "@/assets/nav-illustrations.png";

import illusMural from "@/assets/illus-mural-commission.jpeg";
import illusKingKong from "@/assets/illus-king-kong-mural.jpeg";
import illusBackseatVinyl from "@/assets/illus-backseat-vinyl.jpeg";
import illusClubCoward from "@/assets/illus-club-coward.jpeg";
import illusBeePositive from "@/assets/illus-bee-positive-tote.jpg";
import illusEdgeBar from "@/assets/illus-edge-bar-mural.jpg";
import illusSaddleGoose from "@/assets/illus-saddle-goose-wine.jpg";
import illusTankToys from "@/assets/illus-tfye-tank-toys.jpg";
import illusAlpha1 from "@/assets/illus-alpha-jacket-1.jpg";
import illusAlpha2 from "@/assets/illus-alpha-jacket-2.jpg";
import illusAlpha3 from "@/assets/illus-alpha-jacket-3.jpg";
import illusAlpha4 from "@/assets/illus-alpha-jacket-4.jpg";
import illusAlpha5 from "@/assets/illus-alpha-jacket-5.jpg";
import illusAlpha6 from "@/assets/illus-alpha-jacket-6.jpg";
import illusAlpha7 from "@/assets/illus-alpha-jacket-7.jpg";
import illusAlpha8 from "@/assets/illus-alpha-jacket-8.jpg";
import illusBaseballFront from "@/assets/illus-baseball-card-front.jpg";
import illusBaseballBack from "@/assets/illus-baseball-card-back.jpg";
import illusBlackHerts from "@/assets/illus-black-herts-tshirt.jpg";
import illusFlatPluto1 from "@/assets/illus-flat-pluto-fw-1.jpg";
import illusFlatPluto3 from "@/assets/illus-flat-pluto-fw-3.jpg";
import illusFlatPluto4 from "@/assets/illus-flat-pluto-fw-4.jpg";
import illusFlatPluto5 from "@/assets/illus-flat-pluto-fw-5.jpg";
import illusFrankBruno from "@/assets/illus-frank-bruno-foundation.jpg";
import illusGhostRamp from "@/assets/illus-ghost-ramp-storefront.jpg";
import illusHoodbats from "@/assets/illus-hoodbats-tshirt.jpg";
import illusWovenBlanket from "@/assets/illus-woven-blanket.jpg";
import illusRoyalWarrant from "@/assets/illus-royal-warrant-pin.jpg";
import illusLpCafeBag from "@/assets/illus-lp-cafe-bag.jpg";
import illusPoltHerGeist from "@/assets/illus-polt-her-geist.jpg";
import illusRecordStoreDay from "@/assets/illus-record-store-day-poster.jpg";
import illusSaddleGoose2 from "@/assets/illus-saddle-goose-wine-2.jpg";
import illusSaddleGooseCorks from "@/assets/illus-saddle-goose-corks.jpg";
import illusSaddleGooseBottle from "@/assets/illus-saddle-goose-bottle.jpg";
import illusStrikeGently from "@/assets/illus-strike-gently-war-rug.jpg";
import illusTakeApart from "@/assets/illus-take-apart-your-head.jpg";
import illusToteBag2 from "@/assets/illus-tote-bag-2.jpg";
import illusToteBag6 from "@/assets/illus-tote-bag-6.jpg";
import illusToteBag9 from "@/assets/illus-tote-bag-9.jpg";
import illusToteBag11 from "@/assets/illus-tote-bag-11.jpg";
import illusZine1 from "@/assets/illus-tfye-zine-1.jpg";
import illusZine2 from "@/assets/illus-tfye-zine-2.jpg";
import illusZine3 from "@/assets/illus-tfye-zine-3.jpg";
import illusZine35 from "@/assets/illus-tfye-zine-3-5.jpg";
import illusZine4 from "@/assets/illus-tfye-zine-4.jpg";
import illusZine5 from "@/assets/illus-tfye-zine-5.jpg";
import illusZine6 from "@/assets/illus-tfye-zine-6.jpg";
import illusLongSleeve from "@/assets/illus-tfye-long-sleeve.jpg";
import illusTankToys2 from "@/assets/illus-tank-toys-2.jpg";
import illusEdgeBar2 from "@/assets/illus-edge-bar-mural-2.jpg";
import illusUllac from "@/assets/illus-ullac-collab.jpg";
import illusUllac2 from "@/assets/illus-ullac-collab-2.jpg";
import illusUllac3 from "@/assets/illus-ullac-collab-3.jpg";
import illusUllac4 from "@/assets/illus-ullac-collab-4.jpg";
import illusWavvesHoodie from "@/assets/illus-wavves-hoodie.jpg";
import illusWavvesJacket from "@/assets/illus-wavves-jacket.jpg";
import illusWavvesJacket2 from "@/assets/illus-wavves-jacket-2.jpg";
import illusWavvesRecord from "@/assets/illus-wavves-record.jpg";
import illusWavvesTshirt from "@/assets/illus-wavves-tshirt.jpg";
import illusGhostRampTee from "@/assets/illus-ghost-ramp-tee.jpg";

import type { StaticImageData } from "next/image";

const illustrations: { src: StaticImageData; caption: string }[] = [
  { src: illusMural, caption: "Automatic Drawing Mural Commission 2025" },
  { src: illusKingKong, caption: "King Kong Mural Commission 2024" },
  { src: illusBackseatVinyl, caption: "Backseat Vinyl Record Artwork 2025" },
  { src: illusClubCoward, caption: "Club Coward Record Artwork 2024" },
  { src: illusBeePositive, caption: "Bee Positive Tote Bag 2021" },
  { src: illusFlatPluto1, caption: "Flat Pluto x TFYE Fashion Week" },
  { src: illusFlatPluto3, caption: "Flat Pluto x TFYE Fashion Week" },
  { src: illusFlatPluto4, caption: "Flat Pluto x TFYE Fashion Week" },
  { src: illusFlatPluto5, caption: "Flat Pluto x TFYE Fashion Week" },
  { src: illusEdgeBar, caption: "The Edge Bar Mural" },
  { src: illusEdgeBar2, caption: "The Edge Bar Mural" },
  { src: illusGhostRamp, caption: "Ghost Ramp Store Front" },
  { src: illusGhostRampTee, caption: "Ghost Ramp T-Shirt" },
  { src: illusSaddleGoose, caption: "Saddle Goose Wine Design" },
  { src: illusSaddleGoose2, caption: "Saddle Goose Wine Design" },
  { src: illusSaddleGooseCorks, caption: "Saddle Goose Wine Corks" },
  { src: illusSaddleGooseBottle, caption: "Saddle Goose Wine Bottle" },
  { src: illusFrankBruno, caption: "Frank Bruno Mental Health Foundation" },
  { src: illusRoyalWarrant, caption: "Royal Warrant Pin" },
  { src: illusUllac, caption: "Ullac Collaboration" },
  { src: illusUllac2, caption: "Ullac Collaboration" },
  { src: illusUllac3, caption: "Ullac Collaboration" },
  { src: illusUllac4, caption: "Ullac Collaboration" },
  { src: illusWavvesHoodie, caption: "Wavves Hoodie" },
  { src: illusWavvesJacket, caption: "Wavves Jacket" },
  { src: illusWavvesJacket2, caption: "Wavves Jacket" },
  { src: illusWavvesRecord, caption: "Wavves Record Cover" },
  { src: illusWavvesTshirt, caption: "Wavves T-Shirt" },
  { src: illusWovenBlanket, caption: "Woven Blanket Design" },
  { src: illusStrikeGently, caption: "Strike Gently War Rug" },
  { src: illusLpCafeBag, caption: "LP Cafe Record Store Day Bag" },
  { src: illusRecordStoreDay, caption: "Record Store Day Poster 2018" },
  { src: illusTakeApart, caption: "Take Apart Your Head Event Flyer" },
  { src: illusPoltHerGeist, caption: "Polt Her Geist Band Merch" },
  { src: illusTankToys, caption: "TFYE Tank Toys" },
  { src: illusTankToys2, caption: "TFYE Tank Toys" },
  { src: illusBaseballFront, caption: "Baseball Business Cards (Front)" },
  { src: illusBaseballBack, caption: "Baseball Business Cards (Back)" },
  { src: illusBlackHerts, caption: "Black Herts Social Club T-Shirt" },
  { src: illusHoodbats, caption: "Hoodbats T-Shirt" },
  { src: illusLongSleeve, caption: "TFYE Long Sleeve 2017" },
  { src: illusToteBag2, caption: "TFYE Hand Drawn Tote Bag" },
  { src: illusToteBag6, caption: "TFYE Hand Drawn Tote Bag" },
  { src: illusToteBag9, caption: "TFYE Hand Drawn Tote Bag" },
  { src: illusToteBag11, caption: "TFYE Hand Drawn Tote Bag" },
  { src: illusZine1, caption: "TFYE Zine #1" },
  { src: illusZine2, caption: "TFYE Zine #2" },
  { src: illusZine3, caption: "TFYE Zine #3" },
  { src: illusZine35, caption: "TFYE Zine #3.5" },
  { src: illusZine4, caption: "TFYE Zine #4" },
  { src: illusZine5, caption: "TFYE Zine #5" },
  { src: illusZine6, caption: "TFYE Zine #6" },
  { src: illusAlpha1, caption: "Alpha Jackets 1" },
  { src: illusAlpha2, caption: "Alpha Jackets 2" },
  { src: illusAlpha3, caption: "Alpha Jackets 3" },
  { src: illusAlpha4, caption: "Alpha Jackets 4" },
  { src: illusAlpha5, caption: "Alpha Jackets 5" },
  { src: illusAlpha6, caption: "Alpha Jackets 6" },
  { src: illusAlpha7, caption: "Alpha Jackets 7" },
  { src: illusAlpha8, caption: "Alpha Jackets 8" },
];

const illustrationImages = illustrations.map((i) => i.src);
const illustrationCaptions = illustrations.map((i) => i.caption);

export default function IllustrationsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={navIllustrations} alt="Illustrations" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {illustrations.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative group cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5">
                <p className="text-white text-[10px] md:text-xs font-['Special_Elite'] text-center leading-tight">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={illustrationImages}
        captions={illustrationCaptions}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />

      <Footer />
    </div>
  );
}

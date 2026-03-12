"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import navArtshow from "@/assets/nav-artshow.png";

import artShowPoster from "@/assets/art-show-poster.jpg";
import signPainting1 from "@/assets/sign-painting-1.jpeg";
import signPainting2 from "@/assets/sign-painting-2.jpeg";
import signPainting3 from "@/assets/sign-painting-3.jpg";
import signPainting4 from "@/assets/sign-painting-4.jpg";
import signPainting5 from "@/assets/sign-painting-5.jpg";
import signPainting6 from "@/assets/sign-painting-6.jpg";
import signPainting7 from "@/assets/sign-painting-7.jpg";
import signPainting8 from "@/assets/sign-painting-8.jpg";

import photogramSmiles from "@/assets/photogram-smiles.jpg";
import photogramSmiles2 from "@/assets/photogram-smiles-2.jpg";
import photogramCharmer from "@/assets/photogram-charmer.jpg";
import photogramCharmer2 from "@/assets/photogram-charmer-2.jpg";
import photogramHooty from "@/assets/photogram-hooty.jpg";
import photogramHooty2 from "@/assets/photogram-hooty-2.jpg";
import photogramManInPub from "@/assets/photogram-man-in-pub.jpg";
import photogramManInPub2 from "@/assets/photogram-man-in-pub-2.jpg";
import photogramMatty from "@/assets/photogram-matty-the-clown.jpg";
import photogramMatty2 from "@/assets/photogram-matty-the-clown-2.jpg";
import photogramOldBill from "@/assets/photogram-old-bill.jpg";
import photogramOldBill2 from "@/assets/photogram-old-bill-2.jpg";

import gameboardStarHop from "@/assets/gameboard-star-hop.jpg";
import gameboardOnTheRightTrack from "@/assets/gameboard-on-the-right-track.jpg";
import gameboardBlackhole from "@/assets/gameboard-blackhole.jpg";
import gameboardFeedTheDonkey from "@/assets/gameboard-feed-the-donkey.jpg";
import gameboardFroggy from "@/assets/gameboard-froggy.jpg";

import autoDrawing1 from "@/assets/auto-drawing-1.jpg";
import autoDrawing2 from "@/assets/auto-drawing-2.jpg";
import autoDrawing3 from "@/assets/auto-drawing-3.jpg";
import autoDrawing4 from "@/assets/auto-drawing-4.jpg";
import autoDrawing5 from "@/assets/auto-drawing-5.jpg";
import autoDrawing6 from "@/assets/auto-drawing-6.jpg";
import autoDrawing7 from "@/assets/auto-drawing-7.jpg";
import autoDrawing8 from "@/assets/auto-drawing-8.jpg";
import autoDrawing9 from "@/assets/auto-drawing-9.jpg";
import autoDrawing10 from "@/assets/auto-drawing-10.jpg";
import eggBoySculpture from "@/assets/egg-boy-sculpture.jpg";

import type { StaticImageData } from "next/image";

const signPaintings: StaticImageData[] = [
  signPainting1, signPainting2, signPainting3, signPainting4,
  signPainting5, signPainting6, signPainting7, signPainting8,
];

const photograms: { src: StaticImageData; alt: string }[] = [
  { src: photogramSmiles, alt: "Smiles" },
  { src: photogramSmiles2, alt: "Smiles 2" },
  { src: photogramCharmer, alt: "The Charmer" },
  { src: photogramCharmer2, alt: "The Charmer 2" },
  { src: photogramHooty, alt: "Hooty" },
  { src: photogramHooty2, alt: "Hooty 2" },
  { src: photogramManInPub, alt: "Man in Pub" },
  { src: photogramManInPub2, alt: "Man in Pub 2" },
  { src: photogramMatty, alt: "Matty the Clown" },
  { src: photogramMatty2, alt: "Matty the Clown 2" },
  { src: photogramOldBill, alt: "Old Bill" },
  { src: photogramOldBill2, alt: "Old Bill 2" },
];

const autoDrawings: StaticImageData[] = [
  autoDrawing1, autoDrawing2, autoDrawing3, autoDrawing4, autoDrawing5,
  autoDrawing6, autoDrawing7, autoDrawing8, autoDrawing9, autoDrawing10,
];

const gameBoards: { src: StaticImageData; title: string; desc: string }[] = [
  { src: gameboardBlackhole, title: "Blackhole", desc: "Roll the dice to move your spaceship down the lines to reach the blackhole in the center. In rolling numbers 1-3, you will take 1 step backward. In rolling numbers 4-6, you will take two steps backward." },
  { src: gameboardFeedTheDonkey, title: "Feed The Donkey", desc: "Move diagonally from the corners into the center square by counting the dots. Once in the middle, collect the dots to bring back to the donkeys next to the corners. When the donkeys get full, rotate the board and start again." },
  { src: gameboardFroggy, title: "Froggy", desc: "Start with your frog in the corner circles, roll the dice to move onto and around the checkerboard road. Once you've been around the entire board 3 times you can advance to the middle circle. To win your frog must catch a fly." },
  { src: gameboardOnTheRightTrack, title: "On The Right Track", desc: "The goal of this game is to slide your train token along the black track until you reach a circle. If your token overshoots the circle you lose immediately. To win, your token must turn into a plane." },
  { src: gameboardStarHop, title: "Star Hop", desc: "Each player starts on a different star and they take turns rolling the dice. If a player rolls any number from 1-5, they will remain on their star. If a player rolls the number 6 they can rotate to the next star. The winner is the player who gets to the black circle in the center of the board first." },
];

const allArtShowImages: StaticImageData[] = [
  ...signPaintings,
  ...photograms.map((p) => p.src),
  ...gameBoards.map((g) => g.src),
  ...autoDrawings,
  eggBoySculpture,
];

export default function ArtShowPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);

  const signPaintingsOffset = 0;
  const photogramsOffset = signPaintings.length;
  const gameBoardsOffset = photogramsOffset + photograms.length;
  const autoDrawingsOffset = gameBoardsOffset + gameBoards.length;
  const eggBoyOffset = autoDrawingsOffset + autoDrawings.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={navArtshow} alt="Art Show" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
      </div>

      <section className="max-w-xl mx-auto px-6 mb-12">
        <div className="flex justify-center">
          <Image src={artShowPoster} alt="What Came First - Art Show Poster" className="w-full max-w-md object-contain" width={448} height={560} />
        </div>
        <div className="text-center mt-6 font-['Special_Elite']">
          <h2 className="text-xl md:text-2xl font-bold mb-2">What Came First</h2>
          <p className="text-sm md:text-base mb-1">TANNER RAMSEY and JACK WATTS</p>
          <p className="text-sm md:text-base text-muted-foreground">
            WANTS/NEEDS Gallery · 208 E. Main St. Ventura, CA · September 16, 2023 5-10pm
          </p>
        </div>
        <div className="mt-8 font-['Special_Elite'] text-sm md:text-base leading-relaxed text-center max-w-lg mx-auto">
          <p>
            An exhibition of sign paintings and illustrations by Tanner Ramsey and Jack Watts held at WANTS/NEEDS Gallery in Ventura, CA. The show featured original sign paintings, tattoo-inspired art, and collaborative works exploring the intersection of traditional tattooing and sign painting craftsmanship.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h3 className="text-center font-['Special_Elite'] text-lg md:text-xl mb-8">Sign Paintings</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {signPaintings.map((src, i) => (
            <button key={i} onClick={() => openLightbox(signPaintingsOffset + i)} className="aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative">
              <Image src={src} alt={`Sign Painting ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h3 className="text-center font-['Special_Elite'] text-lg md:text-xl mb-2">Found Object Photograms 2023</h3>
        <p className="text-center font-['Special_Elite'] text-sm text-muted-foreground mb-8">
          A series of photograms created using found objects arranged to form faces and characters, produced using traditional darkroom techniques.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photograms.map((item, i) => (
            <button key={i} onClick={() => openLightbox(photogramsOffset + i)} className="aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h3 className="text-center font-['Special_Elite'] text-lg md:text-xl mb-8">Game Boards 2023</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gameBoards.map((item, i) => (
            <div key={i}>
              <button onClick={() => openLightbox(gameBoardsOffset + i)} className="w-full aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative">
                <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
              </button>
              <p className="text-center font-['Special_Elite'] text-sm font-bold mt-2">{item.title}</p>
              <p className="text-center font-['Special_Elite'] text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h3 className="text-center font-['Special_Elite'] text-lg md:text-xl mb-8">Automatic Drawing Tiles 2023</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {autoDrawings.map((src, i) => (
            <button key={i} onClick={() => openLightbox(autoDrawingsOffset + i)} className="aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative">
              <Image src={src} alt={`Automatic Drawing ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-16">
        <h3 className="text-center font-['Special_Elite'] text-lg md:text-xl mb-2">Egg Boy 2023</h3>
        <p className="text-center font-['Special_Elite'] text-sm text-muted-foreground mb-8">Mixed media sculpture made with whimsy.</p>
        <button onClick={() => openLightbox(eggBoyOffset)} className="w-full flex justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <Image src={eggBoySculpture} alt="Egg Boy Sculpture" className="w-full max-w-sm object-contain" width={384} height={384} />
        </button>
      </section>

      <Lightbox
        images={allArtShowImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />

      <Footer />
    </div>
  );
}

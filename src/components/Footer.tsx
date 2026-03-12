import Image from "next/image";
import Link from "next/link";

import tattooCaravan from "@/assets/tattoo-caravan.png";

export default function Footer() {
  return (
    <footer className="mt-16 relative">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 L0,52 C80,58 140,28 240,32 C340,36 380,55 480,48 C560,42 620,18 720,22 C820,26 860,52 960,44 C1040,38 1100,14 1200,24 C1300,34 1360,54 1440,46 L1440,80 Z"
          fill="hsl(var(--footer-bg))"
        />
      </svg>
      <div className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-fg))] py-10 -mt-px">
        <div className="flex flex-col items-center gap-4">
          <Image src={tattooCaravan} alt="Tattoo Caravan" className="w-16 md:w-20 object-contain" width={80} height={80} />
          <div className="flex gap-4 text-xs tracking-wider">
            <Link href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="underline hover:text-white transition-colors">Contact</Link>
            <a href="https://betterranking.co.uk/?utm_source=customer&utm_medium=tattoosforyourenemies&utm_campaign=links&utm_id=footer" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Website By Better Ranking</a>
          </div>
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Tattoos For Your Enemies. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

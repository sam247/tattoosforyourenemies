"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, X } from "lucide-react";

import titleLogo from "@/assets/title-logo.jpg";
import mobileMenuIcon from "@/assets/mobile-menu-icon.png";
import { navItems } from "@/lib/nav-items";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex flex-row md:flex-col justify-between md:justify-start items-center pt-6 pb-2 px-4">
        <Link href="/home" className="shrink-0 mb-0 md:mb-2">
          <Image src={titleLogo} alt="Tattoos For Your Enemies" className="w-full max-w-[180px] md:max-w-md" width={400} height={120} />
        </Link>
        <a
          href="https://instagram.com/tattoosforyourenemies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-muted-foreground transition-colors shrink-0 mb-0 md:mb-4"
        >
          <Instagram size={46} strokeWidth={1.5} />
        </a>

        <nav className="hidden md:flex items-center justify-center gap-4 md:gap-6 w-full max-w-3xl flex-nowrap">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.alt} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={item.src} alt={item.alt} className="h-4 md:h-5 w-auto object-contain" width={80} height={20} />
              </a>
            ) : (
              <Link key={item.alt} href={item.href} className="hover:opacity-70 transition-opacity">
                <Image src={item.src} alt={item.alt} className="h-4 md:h-5 w-auto object-contain" width={80} height={20} />
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden shrink-0 hover:opacity-70 transition-opacity"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Image src={mobileMenuIcon} alt="Menu" className="h-8 w-auto object-contain" width={32} height={32} />
        </button>
      </header>

      <div className="border-t border-foreground/20 mx-6 md:mx-20 my-3" />

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8 p-8">
          <button
            className="absolute top-6 right-6 text-foreground hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src={item.src} alt={item.alt} className="h-6 w-auto object-contain" width={96} height={24} />
              </a>
            ) : (
              <Link
                key={item.alt}
                href={item.href}
                className="hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src={item.src} alt={item.alt} className="h-6 w-auto object-contain" width={96} height={24} />
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
}

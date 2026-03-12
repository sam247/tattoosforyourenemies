import navTattoos from "@/assets/nav-tattoos.png";
import navIllustrations from "@/assets/nav-illustrations.png";
import navFlash from "@/assets/nav-flash.png";
import navArtshow from "@/assets/nav-artshow.png";
import navPodcast from "@/assets/nav-podcast.png";
import navAboutme from "@/assets/nav-aboutme.png";
import navShop from "@/assets/nav-shop.png";

import type { StaticImageData } from "next/image";

export interface NavItem {
  src: StaticImageData;
  alt: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { src: navTattoos, alt: "Tattoos", href: "/tattoos" },
  { src: navIllustrations, alt: "Illustrations", href: "/illustrations" },
  { src: navFlash, alt: "Flash", href: "/flash" },
  { src: navArtshow, alt: "Art Show", href: "/art-show" },
  { src: navPodcast, alt: "Podcast", href: "/podcast" },
  { src: navAboutme, alt: "About Me", href: "/about" },
  { src: navShop, alt: "Shop", href: "https://tattoosforyourenemies.bigcartel.com/", external: true },
];

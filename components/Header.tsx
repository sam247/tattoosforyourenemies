import Link from "next/link";

const NAV = "/images/nav";

const navItems = [
  { src: `${NAV}/Tattoos_Title-removebg-preview-768x146.png`, alt: "Tattoos", href: "/tattoos" },
  { src: `${NAV}/Illustrations-Title.png`, alt: "Illustrations", href: "/illustrations" },
  { src: `${NAV}/Flash_Title-removebg-preview-300x77.png`, alt: "Flash", href: "/flash" },
  { src: `${NAV}/4-2.png`, alt: "Art Show", href: "/art-show" },
  { src: `${NAV}/PODCAST-title.png`, alt: "Podcast", href: "/podcast" },
  { src: `${NAV}/About-me-Title.png`, alt: "About Me", href: "/about" },
  { src: `${NAV}/Shop-Title.png`, alt: "Shop", href: "/shop" },
];

export function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6">
        <Link
          href="/"
          className="block transition-all duration-300 hover:opacity-90 hover:drop-shadow-[0_0_16px_rgba(0,0,0,0.12)]"
        >
          <img
            src="/Tattoos-for-your-Enemies-Title-EDITED-2048x541.jpg"
            alt="Tattoos For Your Enemies"
            className="h-auto w-full max-w-[320px] md:max-w-[400px]"
          />
        </Link>
        <a
          href="https://instagram.com/tattoosforyourenemies"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
          aria-label="Instagram"
        >
          <svg
            className="h-6 w-6 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <nav className="flex flex-nowrap items-center justify-center gap-3 overflow-x-auto py-2 md:gap-4 md:overflow-visible">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-all duration-300 hover:opacity-80 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.15)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-7 w-auto shrink-0 md:h-8"
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

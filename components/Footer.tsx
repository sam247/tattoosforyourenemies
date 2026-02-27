import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4">
        <div className="transition-shadow duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          <svg
            className="h-12 w-auto text-white"
            viewBox="0 0 80 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 20 L30 20 L35 15 L45 15 L50 20 L70 20" />
            <rect x="15" y="8" width="50" height="24" rx="2" />
            <circle cx="25" cy="20" r="2" />
            <circle cx="55" cy="20" r="2" />
          </svg>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          <Link href="/privacy" className="transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
            Privacy Policy
          </Link>
          <Link href="/contact" className="transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
            Contact
          </Link>
          <a
            href="https://betterranking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
          >
            Website By Better Ranking
          </a>
        </div>
        <p className="text-center text-xs text-white/60">
          © 2023 Tattoos For Your Enemies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

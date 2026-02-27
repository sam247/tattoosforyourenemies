import Image from "next/image";
import { aboutImages } from "@/lib/images";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-4xl">
        About Me
      </h1>
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-lg leading-relaxed text-black/90">
          <p>
            Tattoos for Your Enemies started as a zine in 2010.
          </p>
          <p>
            The zine contained drawings that were so weird you would only wish
            them as tattoos on somebody you didn&apos;t like. From 2014 to the
            present they have been available as tattoos.
          </p>
          <p>
            Born in Hertfordshire, England, Jack is now based in Los Angeles,
            California.
          </p>
          <a
            href="https://instagram.com/tattoosforyourenemies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-70"
            aria-label="Instagram"
          >
            <svg
              className="mt-4 h-8 w-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {aboutImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden border border-black/20 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={src}
                alt=""
                width={400}
                height={512}
                className="h-auto w-full object-cover [filter:sepia(0.4)]"
                unoptimized
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

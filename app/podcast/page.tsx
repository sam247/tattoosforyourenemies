import Image from "next/image";
import { podcastImages } from "@/lib/images";

export default function PodcastPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-center text-3xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-4xl">
        Podcast
      </h1>
      <p className="mb-8 text-center font-serif text-xl italic text-red-700 md:text-2xl">
        Tattoo Traditions
      </p>
      <div className="mx-auto mb-8 max-w-md">
        <div className="overflow-hidden border border-black/20 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          <Image
            src={podcastImages.illustration}
            alt="Tattoo Traditions"
            width={724}
            height={1024}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </div>
      <p className="mb-12 text-center text-gray-600">
        &ldquo;Preserving and exploring tattoo history&rdquo;
      </p>
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-lg leading-relaxed text-black/90">
          <p>
            Tattoo Traditions is a podcast dedicated to the history of tattooing
            and those that have made significant contributions towards it.
          </p>
          <p>
            Created by Jack Watts in 2020, each episode features an interview
            with an artist about their life and career. The series is focussed
            around tattooing pre 1980&apos;s and is a snapshot into what
            tattooing was like at that time.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://open.spotify.com/show/tattootraditions"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="Spotify"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
            <a
              href="https://podcasts.apple.com/podcast/tattoo-traditions"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="Apple Podcasts"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 3v10l7-5-7-5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative max-w-sm">
            <div className="overflow-hidden border-4 border-white bg-white p-2 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(0,0,0,0.15)]">
              <div className="absolute -top-2 left-4 font-serif text-sm italic text-gray-600">
                MAY 1970
              </div>
              <Image
                src={podcastImages.polaroid}
                alt=""
                width={400}
                height={512}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

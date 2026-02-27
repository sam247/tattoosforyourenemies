import Image from "next/image";
import { artShowImages } from "@/lib/images";

export default function ArtShowPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-4xl">
        Art Show
      </h1>

      <section className="mb-16">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden border border-black/20 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            <Image
              src={artShowImages.featured}
              alt="What Came First"
              width={587}
              height={1024}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
          <p className="mt-4 text-center text-lg font-medium">What Came First</p>
          <p className="mt-1 text-center text-sm text-gray-600">
            Acrylic on canvas, 24″ x 30″ | Price Upon Request | © Tattoos For
            Your Enemies, 2026
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-4 text-justify text-gray-600">
        <p>
          This art show features work by Sam Pettiford and Darren Harrison,
          presented as part of Scribble & Groove.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-center text-lg font-medium text-gray-600">
          Darren Harrison: 2023
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            "/images/snoopy-bootleg-prints-300x236.jpg",
            "/images/folk-animals-A4-300x213.jpg",
            "/images/saddle-goose-wine-design-3-300x300.jpg",
            "/images/flat-pluto-fashion-week-3-241x300.jpg",
            "/images/flat-pluto-fashion-week-4-242x300.jpg",
            "/images/flat-pluto-fashion-week-5-241x300.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden border border-black/20 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={src}
                alt=""
                width={300}
                height={300}
                className="h-auto w-full object-cover"
                unoptimized
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-center text-lg font-medium text-gray-600">
          Geometric & Abstract Works
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            "/images/Automatic-Drawing-1-240x300.jpg",
            "/images/Automatic-Drawing-3-240x300.jpg",
            "/images/Automatic-Drawing-5-240x300.jpg",
            "/images/Automatic-Drawing-7-240x300.jpg",
            "/images/leopard-and-panther-199x300.jpg",
            "/images/Sign-Painting-2-240x300.jpeg",
          ].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden border border-black/20 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={src}
                alt=""
                width={300}
                height={300}
                className="h-auto w-full object-cover"
                unoptimized
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

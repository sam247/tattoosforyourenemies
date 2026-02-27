import Image from "next/image";
import Link from "next/link";
import { homeImages } from "@/lib/images";

function SectionGrid({
  title,
  images,
  viewMoreHref,
  titleAlign = "center",
}: {
  title: string;
  images: string[];
  viewMoreHref: string;
  titleAlign?: "center" | "left";
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2
        className={`mb-8 text-2xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-3xl ${
          titleAlign === "left" ? "text-left" : "text-center"
        }`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden border border-black/20 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.12)]"
          >
            <Image
              src={src}
              alt=""
              width={400}
              height={500}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href={viewMoreHref}
          className="inline-block text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.2)]"
        >
          View More
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="overflow-hidden border border-black/10 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(0,0,0,0.08)]">
          <Image
            src={homeImages.hero}
            alt="Tattoos For Your Enemies"
            width={1229}
            height={1536}
            className="h-auto w-full object-contain"
            unoptimized
            priority
          />
        </div>
      </section>

      <SectionGrid
        title="Tattoos"
        images={homeImages.tattoos}
        viewMoreHref="/tattoos"
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <h2 className="min-w-[200px] text-2xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-3xl">
            Flash
          </h2>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {homeImages.flash.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden border border-black/20 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src={src}
                    alt=""
                    width={400}
                    height={500}
                    className="h-auto w-full object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/flash"
                className="inline-block text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.2)]"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionGrid
        title="Illustrations"
        images={homeImages.illustrations}
        viewMoreHref="/illustrations"
      />
    </div>
  );
}

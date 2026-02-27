import Image from "next/image";
import { homeImages } from "@/lib/images";

export default function FlashPage() {
  const images = [
    ...homeImages.flash,
    "/images/Automatic-Drawing-1-768x960.jpg",
    "/images/Automatic-Drawing-2-768x960.jpg",
    "/images/Automatic-Drawing-4-768x960.jpg",
    "/images/Automatic-Drawing-5-768x960.jpg",
    "/images/Automatic-Drawing-6-768x960.jpg",
    "/images/Automatic-Drawing-8-768x960.jpg",
    "/images/TFYE_ZINE_6-1028x1536.jpg",
    "/images/Primitive-Fragments-flash-book-cover-1-1448x2048.jpg",
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-4xl">
        Flash
      </h1>
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
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

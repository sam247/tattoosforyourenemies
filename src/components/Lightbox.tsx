"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type ImageSrc = StaticImageData | string;

interface LightboxProps {
  images: ImageSrc[];
  captions?: string[];
  currentIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function Lightbox({
  images,
  captions,
  currentIndex,
  onClose,
  onChange,
}: LightboxProps) {
  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onChange]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onChange]);

  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, handlePrev, handleNext, onClose]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-6 text-white text-3xl md:text-4xl font-light hover:opacity-70 z-10 p-2"
        onClick={onClose}
      >
        ✕
      </button>
      <button
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-5xl md:text-6xl hover:opacity-70 z-10 p-2"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
      >
        ‹
      </button>
      <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        {typeof currentImage === "string" ? (
          <img
            src={currentImage}
            alt={captions?.[currentIndex] || `Image ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-[85vw] md:max-w-[70vw] object-contain"
          />
        ) : (
          <div className="relative max-h-[80vh] max-w-[85vw] md:max-w-[70vw] aspect-auto">
            <Image
              src={currentImage}
              alt={captions?.[currentIndex] || `Image ${currentIndex + 1}`}
              className="object-contain max-h-[80vh] w-auto h-auto"
              width={currentImage.width}
              height={currentImage.height}
              sizes="85vw"
            />
          </div>
        )}
        {captions?.[currentIndex] && (
          <p className="text-white/80 text-sm font-['Special_Elite'] mt-3 text-center">
            {captions[currentIndex]}
          </p>
        )}
      </div>
      <button
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-5xl md:text-6xl hover:opacity-70 z-10 p-2"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
      >
        ›
      </button>
      <div className="absolute bottom-4 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

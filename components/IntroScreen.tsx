"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "tfye-entered";

export function IntroScreen({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
      setHasEntered(true);
      setShowIntro(false);
    }, 900);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const entered = sessionStorage.getItem(STORAGE_KEY);
    if (entered === "1") {
      setHasEntered(true);
      return;
    }
    setShowIntro(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showIntro) return;
    const onEnded = () => handleEnter();
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [showIntro, handleEnter]);

  if (!showIntro) return <>{children}</>;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          ref={videoRef}
          src="/video/intro.mp4"
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <button
            onClick={handleEnter}
            className="rounded border-2 border-white bg-transparent px-8 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Enter
          </button>
        </div>
      </div>
      {children}
    </>
  );
}

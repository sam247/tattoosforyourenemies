"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import enterButton from "@/assets/enter-button.png";

// Video: Option A = from public. Option B = set NEXT_PUBLIC_SPLASH_VIDEO_URL to a Vercel Blob URL.
const SPLASH_VIDEO_SRC =
  process.env.NEXT_PUBLIC_SPLASH_VIDEO_URL ?? "/videos/splash-video.mp4";

export default function SplashPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[80vh] object-cover md:w-[70vw] md:h-auto md:max-w-[1000px] md:object-contain"
        src={SPLASH_VIDEO_SRC}
      />
      <button
        onClick={() => router.push("/home")}
        className="mt-4 md:mt-6 hover:opacity-80 transition-opacity"
      >
        <Image src={enterButton} alt="Enter Site" className="h-12 md:h-16 w-auto" width={120} height={64} />
      </button>
    </div>
  );
}

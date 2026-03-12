import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import navPodcast from "@/assets/nav-podcast.png";
import podcastLogo from "@/assets/podcast-logo.png";
import podcastPhoto from "@/assets/podcast-photo.png";

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={navPodcast} alt="Podcast" className="h-8 md:h-10 object-contain w-auto" width={160} height={40} />
      </div>

      <div className="flex justify-center mb-12">
        <Image src={podcastLogo} alt="Tattoo Traditions" className="w-64 md:w-80 object-contain h-auto" width={320} height={120} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-1/2 font-['Special_Elite'] text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              Tattoo Traditions is a podcast dedicated to the history of tattooing and those that have made significant contributions towards it.
            </p>
            <p className="mb-8">
              Created by Jack Watts in 2020, each episode features an interview with an artist about their life and career. The series is focussed around tattooing pre 1980&apos;s and is a snapshot into what tattooing was like at that time.
            </p>
            <div className="flex gap-4 items-center">
              <a href="https://open.spotify.com/show/7MqVyb0ejNG7bRwfukknpk?si=afa86920de42437a" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a href="https://podcasts.apple.com/gb/podcast/tattoo-traditions/id1533863193" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2 0 2.796-.34 1.7-1.08 3.13-2.264 4.392-1.608 1.685-3.72 2.587-6.056 2.587-2.336 0-4.448-.902-6.056-2.587-1.224-1.272-1.912-2.619-2.264-4.392-.12-.59-.12-2.2 0-2.796.34-1.7 1.08-3.13 2.264-4.392 1.608-1.685 3.72-2.587 6.056-2.587zm-.054 3.024c-.834.006-1.654.18-2.395.558a5.075 5.075 0 00-2.602 3.156c-.186.63-.228 1.752-.09 2.394.18.84.546 1.578 1.09 2.208.36.42.366.42.306.81-.036.24-.198 1.17-.36 2.07-.162.9-.282 1.65-.27 1.668.018.018.636-.282 1.374-.666l1.338-.696.336.09c.468.126 1.65.132 2.124.012 1.74-.438 3.12-1.746 3.594-3.408.186-.63.228-1.752.09-2.394a5.005 5.005 0 00-2.602-3.156c-.726-.378-1.578-.558-2.933-.646zm.054 1.728a3.1 3.1 0 012.196.912c.594.594.888 1.224.978 2.088.066.654-.024 1.134-.318 1.728-.396.798-1.128 1.386-1.998 1.608-.318.078-.942.078-1.26 0a3.103 3.103 0 01-1.998-1.608c-.294-.594-.384-1.074-.318-1.728.09-.864.384-1.494.978-2.088A3.1 3.1 0 0111.865 7.32zm-.066 3.504c-.522 0-.96.438-.96.96 0 .324.162.618.438.798.168.108.198.174.198.474 0 .312.006.336.192.42.246.114.498.114.744 0 .186-.084.192-.108.192-.42 0-.3.03-.366.198-.474a.967.967 0 00.438-.798c0-.522-.438-.96-.96-.96h-.48z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src={podcastPhoto} alt="Tony The Ted - May 1970" className="w-full max-w-sm mx-auto object-contain" width={384} height={480} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

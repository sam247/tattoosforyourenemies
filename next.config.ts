import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // allow symlinked site_images
  },
};

export default nextConfig;

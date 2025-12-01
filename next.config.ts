// next.config.ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <<< add this
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" }
    ]
  },
};

export default nextConfig;

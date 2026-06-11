import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gateway.fxhash.xyz",
      },
      {
        protocol: "https",
        hostname: "media.fxhash.xyz",
      },
    ],
  },
};

export default nextConfig;

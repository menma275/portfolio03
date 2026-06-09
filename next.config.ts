import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    // @ts-expect-error: viewTransitions is an alternative flag name used in some Next.js versions
    viewTransitions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gateway.fxhash.xyz',
      },
      {
        protocol: 'https',
        hostname: 'media.fxhash.xyz',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/pages/terms-and-conditions",
        destination: "/legal/terms",
        permanent: true,
      },
      {
        source: "/pages/privacy-policy",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/pages/return-policy",
        destination: "/legal/returns",
        permanent: true,
      },
      {
        source: "/pages/refund-policy",
        destination: "/legal/returns",
        permanent: true,
      },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/returns", destination: "/legal/returns", permanent: true },
      { source: "/press", destination: "/media", permanent: true },
    ];
  },
  images: {
    qualities: [75, 85],
    remotePatterns: [
      { protocol: "https", hostname: "saukhyampads.org" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },
};

export default nextConfig;

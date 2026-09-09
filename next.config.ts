import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.arfanahmed.tech",
      },
    ],
  },
};

export default nextConfig;


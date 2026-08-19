import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.arfanahmed.tech",
      },
    ],
  },
};

export default nextConfig;


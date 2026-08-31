import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    
  },
  allowedDevOrigins: [
    "*.ngrok-free.app",
  ],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/my_portfolio" : "", // Adjust for your repo name
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "www.mygreatlearning.com",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
      },
      {
        protocol: "https",
        hostname: "brm-workforce.oracle.com",
      }
    ],
  },
};

export default nextConfig;

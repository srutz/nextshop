import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 2,
    /*
    staleTimes: {
      dynamic: 180,  // dynamic pages
      static: 180,  // static pages
    },
    */
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;

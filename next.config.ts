import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yrrzp4zqlhg33gdn.public.blob.vercel-storage.com",
      },
      {
        protocol: "https", 
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/freightdesk",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

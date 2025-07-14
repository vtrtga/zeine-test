import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
    images: {
    domains: ['cdn.dummyjson.com', 'http2.mlstatic.com', 'i.ibb.co'],
  },
};

export default nextConfig;

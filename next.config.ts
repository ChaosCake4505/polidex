import type { NextConfig } from "next";
module.exports = {
  eslint: { ignoreDuringBuilds: true },
};

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    // Configure SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  // Configure Turbopack (stable version)
  turbopack: {
    rules: {
      // Configure SVG handling for Turbopack
      '*.svg': ['@svgr/webpack']
    }
  }
};

export default nextConfig;

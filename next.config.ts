import type { NextConfig } from "next";
import { createSecureHeaders } from "next-secure-headers";
import withBundleAnalyzer from "@next/bundle-analyzer";

/**
 * Bundle Analyzer Setup (optional)
 * Run with: ANALYZE=true npm run build
 */
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
//   swcMinify: true,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "ucarecdn.com" },
      { protocol: "https", hostname: "lomwqwq633.ucarecd.net" },
    ],
  },

  eslint: {
    // Temporary: ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
   experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default withAnalyzer(nextConfig);

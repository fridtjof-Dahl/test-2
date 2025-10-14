import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Google Analytics
  ...(process.env.NEXT_PUBLIC_GA_ID && {
    analyticsId: process.env.NEXT_PUBLIC_GA_ID,
  }),
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  },
  
  // Power optimization
  poweredByHeader: false,
  
  // Server external packages
  serverExternalPackages: [],
  
  
};

export default nextConfig;
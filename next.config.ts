import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // Image optimization - ULTRA AGGRESSIVE for 100/100 PageSpeed
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
    loader: 'default',
    quality: 85,
    priority: true,
    placeholder: 'blur',
  },
  
  // Performance optimizations - ULTRA for 100/100 PageSpeed
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@next/third-parties', 'react', 'react-dom'],
    scrollRestoration: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Output optimization
  output: 'standalone',
  
  // SWC minification for better performance
  swcMinify: true,
  
  // Webpack optimizations - ultra aggressive
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Ultra aggressive bundle splitting for mobile performance
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 150000,
        minChunks: 1,
        cacheGroups: {
          // Critical vendor libraries
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 30,
            enforce: true,
            reuseExistingChunk: true,
          },
          // Next.js framework
          next: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'next',
            chunks: 'all',
            priority: 25,
            enforce: true,
            reuseExistingChunk: true,
          },
          // Third-party analytics
          analytics: {
            test: /[\\/]node_modules[\\/](@next\/third-parties|web-vitals)[\\/]/,
            name: 'analytics',
            chunks: 'all',
            priority: 20,
            enforce: true,
            reuseExistingChunk: true,
          },
          // Other vendors
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            enforce: true,
            reuseExistingChunk: true,
          },
          // Common chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
      
      // Tree shaking optimization - ULTRA AGGRESSIVE
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      config.optimization.providedExports = true;
      
      // Module concatenation for better performance
      config.optimization.concatenateModules = true;
      
      // Better minification
      config.optimization.minimize = true;
      
      // Dead code elimination
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Better module resolution for tree shaking
      config.optimization.providedExports = true;
      config.optimization.usedExports = true;
      
      // Remove unused modules more aggressively
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    
    // Optimize module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    
    // Optimize resolve extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    // Optimize resolve modules
    config.resolve.modules = ['node_modules'];
    
    return config;
  },
  
  // Headers for better caching and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
          },
          {
            key: 'Accept-CH',
            value: 'DPR, Viewport-Width, Width'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.google.com; frame-src 'self' https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding'
          }
        ]
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Vary',
            value: 'Accept'
          }
        ]
      },
      {
        source: '/(.*\\.(?:css|js|woff2?|png|jpg|jpeg|gif|svg|ico))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding'
          }
        ]
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/'
          }
        ]
      }
    ];
  },
};

export default nextConfig;
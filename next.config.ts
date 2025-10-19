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
  },
  
  // Performance optimizations - ULTRA for 100/100 PageSpeed
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  
  // Experimental features for better performance - ULTRA-OPTIMIZED for 100/100 PageSpeed
  experimental: {
    optimizePackageImports: ['@next/third-parties', 'react', 'react-dom'],
    scrollRestoration: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
    optimizeServerReact: true,
  },
  
  // External packages for server components
  serverExternalPackages: ['@sendgrid/mail', 'nodemailer'],
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Output optimization
  output: 'standalone',
  
  // Webpack optimizations - ultra aggressive
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // ULTRA-AGGRESSIVE bundle splitting for 100/100 PageSpeed
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 5000,
        maxSize: 100000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          // Critical vendor libraries - highest priority
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 40,
            enforce: true,
            reuseExistingChunk: true,
            maxSize: 50000,
          },
          // Next.js framework
          next: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'next',
            chunks: 'all',
            priority: 35,
            enforce: true,
            reuseExistingChunk: true,
            maxSize: 80000,
          },
          // Third-party analytics - lower priority
          analytics: {
            test: /[\\/]node_modules[\\/](@next\/third-parties|web-vitals)[\\/]/,
            name: 'analytics',
            chunks: 'async',
            priority: 20,
            enforce: true,
            reuseExistingChunk: true,
            maxSize: 30000,
          },
          // UI libraries
          ui: {
            test: /[\\/]node_modules[\\/](@headlessui|@heroicons)[\\/]/,
            name: 'ui',
            chunks: 'all',
            priority: 25,
            enforce: true,
            reuseExistingChunk: true,
            maxSize: 40000,
          },
          // Other vendors
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            enforce: true,
            reuseExistingChunk: true,
            maxSize: 60000,
          },
          // Common chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
            enforce: true,
            maxSize: 50000,
          },
          // Default
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            maxSize: 40000,
          },
        },
      };
      
      // ULTRA-AGGRESSIVE tree shaking for 100/100 PageSpeed
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      config.optimization.providedExports = true;
      
      // Module concatenation for better performance
      config.optimization.concatenateModules = true;
      
      // Better minification with Terser
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        ...config.optimization.minimizer,
        new (require('terser-webpack-plugin'))({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
            },
            mangle: {
              safari10: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ];
      
      // Performance optimizations
      config.optimization.moduleIds = 'deterministic';
      config.optimization.chunkIds = 'deterministic';
      config.optimization.runtimeChunk = 'single';
      
      // Better module resolution
      config.resolve.symlinks = false;
      config.resolve.cacheWithContext = false;
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
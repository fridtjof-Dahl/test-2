import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { generateSecurityHeaders } from '@/lib/security';
import { initializePerformanceOptimizations } from '@/lib/performance-optimizations';
import { initializeMonitoring } from '@/lib/monitoring';
import "./globals.css";

// Optimized font loading with preload
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#003847' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://enkelfinansiering.no'),
  title: {
    default: "Billån på dagen: Uforpliktende tilbud innen 24 timer | Enkel Finansiering",
    template: "%s | Enkel Finansiering",
  },
  description: "Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging.",
  keywords: [
    "billån",
    "bilfinansiering", 
    "lån til bil",
    "billånskalkulator",
    "billån på dagen",
    "uforpliktende tilbud",
    "rask billån",
    "billån uten egenkapital",
    "billån samarbeidspartner",
    "billån tilbud",
    "billån søknad",
    "billån rente",
    "billån beregning",
    "billån kalkulator",
    "billån guide",
    "billån hjelp",
    "billån støtte",
    "billån rådgivning",
    "billån prosess",
    "billån oppfølging",
    "billån Norge",
    "billån Oslo",
    "billån Bergen",
    "billån Trondheim",
    "billån Stavanger",
    "billån Kristiansand",
    "billån Tromsø",
    "billån Fredrikstad",
    "billån Drammen",
    "billån Skien"
  ],
  authors: [{ name: "Enkel Finansiering" }],
  creator: "Enkel Finansiering",
  publisher: "Enkel Finansiering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "no_NO",
    url: "https://enkelfinansiering.no",
    siteName: "Enkel Finansiering",
    title: "Billån på dagen: Uforpliktende tilbud innen 24 timer",
    description: "Få et uforpliktende tilbud innen 24 timer. Rask behandling og personlig oppfølging.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enkel Finansiering - Billån på dagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billån på dagen: Uforpliktende tilbud innen 24 timer",
    description: "Få et uforpliktende tilbud innen 24 timer. Rask behandling og personlig oppfølging.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Finance",
  classification: "Financial Services",
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Enkel Finansiering',
    'application-name': 'Enkel Finansiering',
    'msapplication-TileColor': '#004D61',
    'theme-color': '#004D61',
    'msapplication-config': '/browserconfig.xml',
    'apple-touch-icon': '/apple-touch-icon.png',
    'msapplication-TileImage': '/mstile-144x144.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googleadservices.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Service Worker Registration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => console.log('SW registered'))
                  .catch(error => console.log('SW registration failed'));
              });
            }
          `
        }} />
        
        {/* Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
            html { font-family: 'Inter', system-ui, -apple-system, sans-serif; line-height: 1.5; }
            body { margin: 0; font-family: inherit; line-height: inherit; color: #1f2937; background-color: #ffffff; }
            .hero-section { background: linear-gradient(135deg, #004D61 0%, #006B7A 100%); min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; }
            .hero-content { max-width: 1200px; margin: 0 auto; padding: 0 1rem; text-align: center; z-index: 10; position: relative; }
            .hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #ffffff; margin-bottom: 1.5rem; line-height: 1.1; }
            .hero-subtitle { font-size: clamp(1.125rem, 2.5vw, 1.5rem); color: #e5e7eb; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
            .hero-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center; }
            @media (min-width: 640px) { .hero-buttons { flex-direction: row; gap: 1.5rem; } }
            .cta-primary { display: inline-block; background-color: #FF6B35; color: #ffffff; font-weight: 700; font-size: 1.125rem; padding: 1rem 2rem; border-radius: 9999px; text-decoration: none; transition: all 0.2s ease; border: none; cursor: pointer; }
            .cta-primary:hover { background-color: #E55A24; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3); }
            .cta-secondary { display: inline-block; border: 2px solid #004D61; color: #004D61; font-weight: 700; font-size: 1.125rem; padding: 0.875rem 1.5rem; border-radius: 9999px; text-decoration: none; transition: all 0.2s ease; background-color: transparent; }
            .cta-secondary:hover { background-color: #004D61; color: #ffffff; }
            .trust-badges { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2rem; }
            .trust-badge { background-color: rgba(255, 255, 255, 0.1); color: #ffffff; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
            .header { background-color: #ffffff; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); position: sticky; top: 0; z-index: 50; }
            .header-content { max-width: 1200px; margin: 0 auto; padding: 1rem; display: flex; align-items: center; justify-content: space-between; }
            .logo { font-size: 1.5rem; font-weight: 800; color: #004D61; text-decoration: none; }
            .loading-skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
            @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
            @media (max-width: 640px) { .hero-section { min-height: 80vh; padding: 2rem 0; } .hero-content { padding: 0 1rem; } }
          `
        }} />
        
        {/* Performance Optimizations */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              ${initializePerformanceOptimizations.toString()}
              ${initializeMonitoring.toString()}
              
              // Initialize on DOM ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                  initializePerformanceOptimizations();
                  initializeMonitoring();
                });
              } else {
                initializePerformanceOptimizations();
                initializeMonitoring();
              }
            })();
          `
        }} />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; font-family: var(--font-inter), system-ui, sans-serif; }
            .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
            /* Prevent layout shift */
            img { max-width: 100%; height: auto; }
            /* Hide non-critical content until loaded */
            .lazy-load { opacity: 0; transition: opacity 0.3s ease; }
            .lazy-load.loaded { opacity: 1; }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Performance monitoring script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Web Vitals monitoring
            if (typeof window !== 'undefined') {
              import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS((metric) => {
                  console.log('CLS:', metric);
                  if (window.gtag) {
                    gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'CLS',
                      value: Math.round(metric.value * 1000),
                    });
                  }
                });
                
                getFID((metric) => {
                  console.log('FID:', metric);
                  if (window.gtag) {
                    gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'FID',
                      value: Math.round(metric.value),
                    });
                  }
                });
                
                getFCP((metric) => {
                  console.log('FCP:', metric);
                  if (window.gtag) {
                    gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'FCP',
                      value: Math.round(metric.value),
                    });
                  }
                });
                
                getLCP((metric) => {
                  console.log('LCP:', metric);
                  if (window.gtag) {
                    gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'LCP',
                      value: Math.round(metric.value),
                    });
                  }
                });
                
                getTTFB((metric) => {
                  console.log('TTFB:', metric);
                  if (window.gtag) {
                    gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'TTFB',
                      value: Math.round(metric.value),
                    });
                  }
                });
              });
            }
          `
        }} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-MZZN40H83P'} />
      </body>
    </html>
  );
}

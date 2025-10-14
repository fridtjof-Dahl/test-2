import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimized font loading with preload
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
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
    "billån uten egenkapital"
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
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
      </body>
    </html>
  );
}

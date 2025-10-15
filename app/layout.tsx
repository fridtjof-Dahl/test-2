import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import "./critical.css";
import ServiceWorkerScript from '@/components/ServiceWorkerScript';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Billån på dagen: Uforpliktende tilbud innen 24 timer | Enkel Finansiering",
    template: "%s | Enkel Finansiering"
  },
  description: "Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging. 100% gratis.",
  keywords: [
    'billån',
    'billån på dagen',
    'billånskalkulator',
    'billån uten egenkapital',
    'elbil lån',
    'grønt billån',
    'finansiering bil',
    'lån til bil',
    'billån rente',
    'billån 2025'
  ],
  authors: [{ name: 'Enkel Finansiering' }],
  creator: 'Enkel Finansiering',
  publisher: 'Enkel Finansiering',
  metadataBase: new URL('https://enkelfinansiering.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'no_NO',
    url: 'https://enkelfinansiering.no',
    siteName: 'Enkel Finansiering',
    title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer',
    description: 'Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging. 100% gratis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enkel Finansiering - Billån på dagen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer',
    description: 'Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging. 100% gratis.',
    images: ['/og-image.jpg'],
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'finance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${inter.className} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* DNS Prefetch for external resources - optimized order */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//analytics.google.com" />
        
        {/* Preconnect to critical origins - fonts first */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to analytics - lower priority */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Preload critical fonts - only the most essential weights */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preload critical CSS - inline critical styles instead */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            *{box-sizing:border-box}*::before,*::after{box-sizing:border-box}
            html{font-size:16px;line-height:1.6;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
            body{margin:0;font-family:'Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#1f2937;background-color:#ffffff;font-feature-settings:'cv02','cv03','cv04','cv11';font-variant-ligatures:common-ligatures;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            .hero-gradient{background:linear-gradient(135deg,#e8f4f8 0%,#d1f4e0 50%,#e8f8f0 100%)}
            .text-5xl{font-size:3rem;line-height:1.1;font-weight:700}
            .text-6xl{font-size:3.75rem;line-height:1.1;font-weight:700}
            .text-7xl{font-size:4.5rem;line-height:1.1;font-weight:700}
            .bg-\\[#FF6B35\\]{background-color:#FF6B35}
            .hover\\:bg-\\[#E55A24\\]:hover{background-color:#E55A24}
            .text-white{color:#ffffff}
            .font-bold{font-weight:700}
            .px-12{padding-left:3rem;padding-right:3rem}
            .py-3{padding-top:0.75rem;padding-bottom:0.75rem}
            .py-4{padding-top:1rem;padding-bottom:1rem}
            .rounded-full{border-radius:9999px}
            .transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
            .transform{transform:translateZ(0)}
            .hover\\:scale-105:hover{transform:scale(1.05)}
            .shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}
            .max-w-7xl{max-width:80rem}
            .mx-auto{margin-left:auto;margin-right:auto}
            .px-4{padding-left:1rem;padding-right:1rem}
            .py-20{padding-top:5rem;padding-bottom:5rem}
            .py-28{padding-top:7rem;padding-bottom:7rem}
            .grid{display:grid}
            .lg\\:grid-cols-2{grid-template-columns:repeat(1,minmax(0,1fr))}
            @media (min-width:1024px){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}
            .gap-12{gap:3rem}
            .items-center{align-items:center}
            .text-center{text-align:center}
            @media (min-width:1024px){.lg\\:text-left{text-align:left}}
            .text-\\[#004D61\\]{color:#004D61}
            .text-xl{font-size:1.25rem;line-height:1.75rem}
            .text-2xl{font-size:1.5rem;line-height:2rem}
            .text-gray-700{color:#374151}
            .mb-6{margin-bottom:1.5rem}
            .mb-8{margin-bottom:2rem}
            @media (min-width:640px){.sm\\:text-6xl{font-size:3.75rem;line-height:1.1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}
            @media (min-width:1024px){.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1.1}.lg\\:text-left{text-align:left}.lg\\:justify-start{justify-content:flex-start}}
          `
        }} />
        
        {/* Prefetch important pages - only after critical resources */}
        <link rel="prefetch" href="/kalkulator" />
        <link rel="prefetch" href="/kontakt" />
        
        {/* Resource hints for better performance */}
        <link rel="preload" href="/sw.js" as="script" />
        
        {/* Google Tag Manager - optimized loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T22X3C9X');`
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-MZZN40H83P'} 
        />
        <ServiceWorkerScript />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T22X3C9X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}

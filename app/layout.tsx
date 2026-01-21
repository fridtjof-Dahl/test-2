import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import "./critical.css";
import ServiceWorkerScript from '@/components/ServiceWorkerScript';
import CookieBanner from '@/components/CookieBanner';
// import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Critical for CLS prevention
  preload: true, // Preload for LCP optimization
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  variable: '--font-inter',
  weight: ['400', '600', '700'], // Only load necessary weights
  adjustFontFallback: true, // Prevent layout shift
  // Ultra-optimized font loading for 100/100 PageSpeed
  style: 'normal',
});

export const metadata: Metadata = {
  title: {
    default: "Billån på dagen: Uforpliktende tilbud innen 24 timer | Enkel Finansiering",
    template: "%s | Enkel Finansiering"
  },
  description: "Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging. 100% gratis. Tilgjengelig i hele Norge - Oslo, Bergen, Trondheim, Stavanger og resten av landet.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
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
    'billån 2026',
    'billån Norge',
    'billån Oslo',
    'billån Bergen',
    'billån Trondheim',
    'billån Stavanger',
    'billån Tromsø',
    'billån Kristiansand',
    'billån Drammen',
    'billån Fredrikstad',
    'billån Sandnes',
    'billån Asker',
    'billån Bærum',
    'billån samarbeidspartner',
    'billån uforpliktende',
    'billån rask behandling',
    'billån kalkulator',
    'billån søknad',
    'billån rente 2026',
    'billån uten egenkapital 2026',
    'billån fullfinansiering',
    'billån 100% finansiering',
    'billån online',
    'billån søknad online',
    'billån beste rente',
    'billån sammenligning',
    'billån beregning',
    'billån månedskostnad',
    'billån kredittvurdering',
    'billån godkjent',
    'billån raskt svar',
    'billån 24 timer'
  ],
  authors: [{ name: 'Enkel Finansiering', url: 'https://enkelfinansiering.no' }],
  creator: 'Enkel Finansiering',
  publisher: 'Enkel Finansiering',
  metadataBase: new URL('https://enkelfinansiering.no'),
  alternates: {
    canonical: '/',
    languages: {
      'no-NO': 'https://enkelfinansiering.no',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'no_NO',
    url: 'https://enkelfinansiering.no',
    siteName: 'Enkel Finansiering',
    title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer',
    description: 'Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging. 100% gratis. Tilgjengelig i hele Norge - Oslo, Bergen, Trondheim, Stavanger og resten av landet.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enkel Finansiering - Billån på dagen',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer',
    description: 'Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging. 100% gratis. Tilgjengelig i hele Norge.',
    images: ['/og-image.jpg'],
    creator: '@enkelfinansiering',
    site: '@enkelfinansiering',
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
  other: {
    'theme-color': '#004D61',
    'msapplication-TileColor': '#004D61',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Enkel Finansiering',
    'application-name': 'Enkel Finansiering',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${inter.className} ${inter.variable}`} suppressHydrationWarning={true}>
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
        
        {/* Preload critical fonts - ULTRA-OPTIMIZED for 100/100 PageSpeed */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* ULTRA-OPTIMIZED Critical CSS for 100/100 PageSpeed */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *{box-sizing:border-box}*::before,*::after{box-sizing:border-box}
            html{font-size:16px;line-height:1.6;-webkit-text-size-adjust:100%;scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
            body{margin:0;font-family:var(--font-inter),system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#1f2937;background:#fff;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-display:swap;will-change:auto;contain:layout style;overflow-x:hidden;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}
            .hero-gradient{background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f0f9ff 100%)}
            .text-4xl{font-size:2.25rem;line-height:1.1;font-weight:700}
            .text-5xl{font-size:3rem;line-height:1.1;font-weight:700}
            .text-6xl{font-size:3.75rem;line-height:1.1;font-weight:700}
            .text-7xl{font-size:4.5rem;line-height:1.1;font-weight:700}
            .bg-\\[#FF6B35\\]{background:#FF6B35}
            .hover\\:bg-\\[#E55A24\\]:hover{background:#E55A24}
            .text-white{color:#fff}
            .font-bold{font-weight:700}
            .font-medium{font-weight:500}
            .px-12{padding-left:3rem;padding-right:3rem}
            .py-3{padding-top:0.75rem;padding-bottom:0.75rem}
            .py-4{padding-top:1rem;padding-bottom:1rem}
            .rounded-full{border-radius:9999px}
            .max-w-7xl{max-width:80rem}
            .mx-auto{margin-left:auto;margin-right:auto}
            .px-4{padding-left:1rem;padding-right:1rem}
            .py-20{padding-top:5rem;padding-bottom:5rem}
            .py-28{padding-top:7rem;padding-bottom:7rem}
            .grid{display:grid}
            .items-center{align-items:center}
            .text-center{text-align:center}
            .text-\\[#004D61\\]{color:#004D61}
            .text-xl{font-size:1.25rem;line-height:1.75rem}
            .text-2xl{font-size:1.5rem;line-height:2rem}
            .text-gray-600{color:#4b5563}
            .text-gray-700{color:#374151}
            .mb-6{margin-bottom:1.5rem}
            .mb-8{margin-bottom:2rem}
            .mb-10{margin-bottom:2.5rem}
            .focus\\:outline-none:focus{outline:none}
            .focus\\:ring-4:focus{box-shadow:0 0 0 4px rgba(255,107,53,0.3)}
            .transition-all{transition:all 0.3s ease}
            .transform{transform:translateZ(0)}
            .hover\\:scale-105:hover{transform:scale(1.05)}
            .shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}
            .shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}
            .gap-12{gap:3rem}
            .gap-6{gap:1.5rem}
            .gap-4{gap:1rem}
            .gap-2{gap:0.5rem}
            .flex{display:flex}
            .flex-wrap{flex-wrap:wrap}
            .justify-center{justify-content:center}
            .justify-start{justify-content:flex-start}
            .items-center{align-items:center}
            .inline-flex{display:inline-flex}
            .w-4{width:1rem}
            .h-4{height:1rem}
            .w-5{width:1.25rem}
            .h-5{height:1.25rem}
            .bg-\\[#10B981\\]{background:#10B981}
            .bg-\\[#004D61\\]{background:#004D61}
            .rounded-full{border-radius:9999px}
            .text-xs{font-size:0.75rem;line-height:1rem}
            .text-sm{font-size:0.875rem;line-height:1.25rem}
            .leading-tight{line-height:1.25}
            .leading-relaxed{line-height:1.625}
            .max-w-2xl{max-width:42rem}
            .min-h-\\[56px\\]{min-height:3.5rem}
            .px-8{padding-left:2rem;padding-right:2rem}
            .py-4{padding-top:1rem;padding-bottom:1rem}
            .border-2{border-width:2px}
            .border-\\[#004D61\\]{border-color:#004D61}
            .hover\\:border-\\[#006B7D\\]:hover{border-color:#006B7D}
            .hover\\:bg-gray-50:hover{background-color:#f9fafb}
            .bg-white{background-color:#fff}
            .shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)}
            .hover\\:shadow-lg:hover{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}
            .focus\\:ring-\\[#004D61\\]\\/30:focus{box-shadow:0 0 0 4px rgba(0,77,97,0.3)}
            .group:hover .group-hover\\:translate-x-1{transform:translateX(0.25rem)}
            .group:hover .group-hover\\:rotate-12{transform:rotate(12deg)}
            .transition-transform{transition:transform 0.3s ease}
            .duration-300{transition-duration:0.3s}
            .hidden{display:none}
            .lg\\:block{display:block}
            .lg\\:grid-cols-2{grid-template-columns:repeat(1,minmax(0,1fr))}
            .lg\\:text-left{text-align:left}
            .lg\\:justify-start{justify-content:flex-start}
            .sm\\:text-5xl{font-size:3rem;line-height:1.1}
            .sm\\:text-6xl{font-size:3.75rem;line-height:1.1}
            .sm\\:text-2xl{font-size:1.5rem;line-height:2rem}
            .sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
            .sm\\:flex-row{flex-direction:row}
            .md\\:py-28{padding-top:7rem;padding-bottom:7rem}
            .lg\\:px-8{padding-left:2rem;padding-right:2rem}
            .lg\\:text-7xl{font-size:4.5rem;line-height:1.1}
            .lg\\:text-left{text-align:left}
            .lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
            .lg\\:justify-start{justify-content:flex-start}
            .lg\\:block{display:block}
            @media (min-width:640px){.sm\\:text-5xl{font-size:3rem;line-height:1.1}.sm\\:text-6xl{font-size:3.75rem;line-height:1.1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:flex-row{flex-direction:row}}
            @media (min-width:768px){.md\\:py-28{padding-top:7rem;padding-bottom:7rem}}
            @media (min-width:1024px){.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1.1}.lg\\:text-left{text-align:left}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:justify-start{justify-content:flex-start}.lg\\:block{display:block}}
          `
        }} />
        
        {/* Prefetch important pages - only after critical resources */}
        <link rel="prefetch" href="/kalkulator" />
        <link rel="prefetch" href="/kontakt" />
        <link rel="prefetch" href="/billan" />
        
        {/* Resource hints for better performance */}
        <link rel="preload" href="/sw.js" as="script" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Google Tag Manager - ULTRA-OPTIMIZED for 100/100 PageSpeed */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T22X3C9X');`}
        </Script>
        
        {/* Google Analytics Consent Mode - ULTRA-OPTIMIZED */}
        <Script id="ga-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500,
            });
            gtag('js', new Date());
          `}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <CookieBanner />
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

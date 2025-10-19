import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import ImprovedHero from '@/components/ImprovedHero';

// ULTRA-OPTIMIZED lazy loading for 100/100 PageSpeed
const LoanCalculator = dynamic(() => import('@/components/LoanCalculator'), {
  loading: () => <div className="py-16 bg-gray-50"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-white rounded-2xl shadow-xl p-8 h-96"></div></div></div>
});
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96"></div></div></div>
});
const DarkBenefits = dynamic(() => import('@/components/DarkBenefits'), {
  loading: () => <div className="py-24 bg-gradient-to-br from-[#003847] via-[#004D61] to-[#003847]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96"></div></div></div>
});
const MultiStepForm = dynamic(() => import('@/components/MultiStepForm'), {
  loading: () => <div className="py-20 bg-gray-50"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96"></div></div></div>
});
const TrustSignals = dynamic(() => import('@/components/TrustSignals'), {
  loading: () => <div className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96"></div></div></div>
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-20 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96"></div></div></div>
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="bg-gray-900 text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-32"></div></div></div>
});

export const metadata = {
  title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer | Enkel Finansiering',
  description: 'Få et uforpliktende tilbud på billån innen 24 timer. Rask behandling og personlig oppfølging. 100% gratis.',
  keywords: 'billån på dagen, billån Norge, billån uten egenkapital, billån kalkulator, billån rente, billån søknad, billån samarbeidspartner, billån 24 timer, billån uforpliktende, billån rask behandling',
  openGraph: {
    title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer',
    description: 'Få et uforpliktende tilbud på billån innen 24 timer. Rask behandling og personlig oppfølging. 100% gratis.',
    type: 'website',
    url: 'https://enkelfinansiering.no',
    siteName: 'Enkel Finansiering',
    locale: 'nb_NO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer',
    description: 'Få et uforpliktende tilbud på billån innen 24 timer. Rask behandling og personlig oppfølging. 100% gratis.',
  },
  alternates: {
    canonical: '/',
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
  other: {
    'theme-color': '#004D61',
    'msapplication-TileColor': '#004D61',
  },
};

const faqItems = [
  {
    question: "Hva er billån?",
    answer: "Billån er et forbrukslån som brukes spesifikt til å finansiere kjøp av bil. Det kan være både ny og brukt bil, og lånet kan dekke hele eller deler av kjøpesummen."
  },
  {
    question: "Hvordan søker jeg billån?",
    answer: "Vår samarbeidspartner kontakter deg, og du får et uforpliktende tilbud innen 24 timer."
  },
  {
    question: "Hvilken rente kan jeg forvente på billån?",
    answer: "Typisk rente ligger mellom 7,8% og 9,2%."
  },
  {
    question: "Kan jeg få billån uten egenkapital?",
    answer: "Ja, det er mulig å få 100% finansiering på billån. Vår samarbeidspartner vurderer hver søknad individuelt og kan tilby fullfinansiering dersom kredittvurderingen tillater det."
  },
  {
    question: "Hvor lang tid tar det å få svar på søknaden?",
    answer: "Du får som regel svar på din søknad samme dag eller innen 24 timer. Når du har akseptert et tilbud, kan pengene overleveres til selger kort tid etter."
  },
  {
    question: "Koster det noe å søke?",
    answer: "Nei, tjenesten vår er 100% gratis og uforpliktende. Du betaler ingenting for å søke, og du er ikke forpliktet til å akseptere noen av tilbudene du får."
  },
  {
    question: "Hvilke banker samarbeider dere med?",
    answer: "Vi samarbeider med en etablert bank som tilbyr billån. Vår samarbeidspartner gir deg et tilpasset tilbud basert på din situasjon og behov."
  },
  {
    question: "Påvirker søknaden kredittscore min?",
    answer: "Når du søker gjennom oss, gjøres det en myk kredittvurdering som ikke påvirker kredittscore din. Først når du velger å akseptere et tilbud og signerer avtalen, gjøres det en hard kredittsjekk."
  },
  {
    question: "Kan jeg betale ned lånet før tiden?",
    answer: "Ja, de fleste billån kan nedbetales før tiden. Noen banker kan ha et gebyr for førtidig innfrielse, men dette varierer. Vi anbefaler å sjekke vilkårene i lånetilbudet."
  },
  {
    question: "Hva skjer hvis jeg ikke får godkjent lån?",
    answer: "Hvis vår samarbeidspartner ikke godkjenner søknaden din, får du beskjed om dette. Vi kan gi deg råd om hva du kan gjøre for å forbedre mulighetene dine, som å øke egenkapitalen eller forbedre kredittscore."
  }
];

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Enkel Finansiering",
      "description": "Norges enkleste vei til billån. Vi hjelper deg med å finne det beste lånetilbudet.",
      "url": "https://enkelfinansiering.no",
      "logo": "https://enkelfinansiering.no/favicon.svg",
      "foundingDate": "2020",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+47-960-07-981",
        "contactType": "customer service",
        "availableLanguage": "Norwegian",
        "areaServed": "NO"
      },
      "sameAs": [
        "https://enkelfinansiering.no"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Billån på dagen",
        "description": "Få et uforpliktende tilbud på billån innen 24 timer",
        "price": "0",
        "priceCurrency": "NOK",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-15",
        "validThrough": "2025-12-31"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NO"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Enkel Finansiering",
      "url": "https://enkelfinansiering.no",
      "description": "Billån på dagen - Uforpliktende tilbud innen 24 timer",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://enkelfinansiering.no/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ImprovedHero />
      <LoanCalculator />
      <HowItWorks />
      <DarkBenefits />
      <MultiStepForm />
      <TrustSignals />
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billån" />
      <Footer />
    </main>
  );
}
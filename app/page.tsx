import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import ImprovedHero from '@/components/ImprovedHero';
import ErrorBoundary from '@/components/ErrorBoundary';
import LazyWrapper from '@/components/LazyWrapper';

// Lazy load non-critical components
const LoanCalculator = dynamic(() => import('@/components/LoanCalculator'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
});

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
});

const DarkBenefits = dynamic(() => import('@/components/DarkBenefits'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
});

const MultiStepForm = dynamic(() => import('@/components/MultiStepForm'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
});

const TrustSignals = dynamic(() => import('@/components/TrustSignals'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />,
});

export const metadata = {
  title: 'Billån på dagen: Uforpliktende tilbud innen 24 timer | Enkel Finansiering',
  description: 'Billån gjort enkelt. Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging.',
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

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hvordan søker jeg billån?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vår samarbeidspartner kontakter deg, og du får et uforpliktende tilbud innen 24 timer."
      }
    },
    {
      "@type": "Question",
      "name": "Hvilken rente kan jeg forvente på billån?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typisk rente ligger mellom 7,8% og 9,2%."
      }
    }
  ]
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Hjem",
      "item": "https://enkelfinansiering.no/"
    }
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Enkel Finansiering",
  "url": "https://enkelfinansiering.no/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://enkelfinansiering.no/sok?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-white">
        <Header />
        <ImprovedHero />
        
        {/* Critical above-the-fold content loads immediately */}
        <LazyWrapper fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />}>
          <LoanCalculator />
        </LazyWrapper>
        
        <LazyWrapper fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />}>
          <HowItWorks />
        </LazyWrapper>
        
        <LazyWrapper fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />}>
          <DarkBenefits />
        </LazyWrapper>
        
        <LazyWrapper fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />}>
          <MultiStepForm />
        </LazyWrapper>
        
        <LazyWrapper fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />}>
          <TrustSignals />
        </LazyWrapper>
        
        <LazyWrapper fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-2xl" />}>
          <FAQ items={faqItems} title="Ofte stilte spørsmål om billån" />
        </LazyWrapper>
        
        {/* Structured data scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        
        <LazyWrapper fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <Footer />
        </LazyWrapper>
      </main>
    </ErrorBoundary>
  );
}


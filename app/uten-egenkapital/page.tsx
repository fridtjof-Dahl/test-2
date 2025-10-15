import { Metadata } from 'next';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import DarkBenefits from '@/components/DarkBenefits';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Billån Uten Egenkapital 2025 - 100% Finansiering Bil | Enkel Finansiering',
  description: 'Få billån uten egenkapital med 100% finansiering. Fullfinansiering bil, lån til bil uten egenkapital. Uforpliktende tilbud innen 24 timer. Gratis søknad.',
  keywords: [
    'billån uten egenkapital',
    'fullfinansiering bil',
    '100% finansiering bil',
    'lån til bil uten egenkapital',
    'finansiering bil uten egenkapital',
    'kjøpe bil uten egenkapital',
    'billån 100% finansiering',
    'billån ingen egenkapital',
    'billån uten egenandel',
    'fullfinansiering billån',
    'billån uten egenkapital 2025',
    'billån uten egenkapital rente',
    'billån uten egenkapital krav',
    'billån uten egenkapital bank'
  ],
  openGraph: {
    title: 'Billån Uten Egenkapital 2025 - 100% Finansiering Bil',
    description: 'Få billån uten egenkapital med 100% finansiering. Fullfinansiering bil, lån til bil uten egenkapital. Uforpliktende tilbud innen 24 timer.',
    url: 'https://enkelfinansiering.no/uten-egenkapital',
    siteName: 'Enkel Finansiering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/uten-egenkapital',
  },
  other: {
    'article:published_time': '2025-01-15T00:00:00.000Z',
    'article:modified_time': '2025-01-15T00:00:00.000Z',
  },
};

const faqItems = [
  {
    question: "Kan jeg få billån uten egenkapital?",
    answer: "Ja, det er fullt mulig å få billån uten egenkapital. Mange banker tilbyr 100% finansiering, men renten kan være noe høyere enn hvis du har egenkapital."
  },
  {
    question: "Hva er kravene for å få billån uten egenkapital?",
    answer: "Du må ha fast inntekt, god kredittverdighet og være over 18 år. Bankene vil vurdere din betalingsevne og kredittscore før de godkjenner lånet."
  },
  {
    question: "Er renten høyere uten egenkapital?",
    answer: "Ja, renten er ofte noe høyere når du låner 100% av kjøpesummen. Dette fordi vår samarbeidspartner tar større risiko. Men du kan fortsatt få en konkurransedyktig rente."
  },
  {
    question: "Hvor mye kan jeg låne uten egenkapital?",
    answer: "Det avhenger av din inntekt og betalingsevne. Vår samarbeidspartner låner ut opptil 5-6 ganger brutto månedsinntekt, men dette vurderes individuelt."
  },
  {
    question: "Hvilke banker tilbyr billån uten egenkapital?",
    answer: "Vår samarbeidspartner tilbyr billån uten egenkapital. Vi sender søknaden din til vår samarbeidspartner, som gir deg et tilpasset tilbud basert på din situasjon."
  },
  {
    question: "Må jeg ha kaskoforsikring ved 100% finansiering?",
    answer: "Ja, vår samarbeidspartner krever kaskoforsikring når du låner 100% av bilens verdi. Dette er for å sikre investeringen i tilfelle ulykke eller skade."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Billån Uten Egenkapital 2025",
  "description": "Få billån uten egenkapital med 100% finansiering. Fullfinansiering bil, lån til bil uten egenkapital.",
  "url": "https://enkelfinansiering.no/uten-egenkapital",
  "mainEntity": {
    "@type": "Service",
    "name": "Billån Uten Egenkapital",
    "description": "100% finansiering av bil uten egenkapital",
    "provider": {
      "@type": "Organization",
      "name": "Enkel Finansiering"
    },
    "offers": {
      "@type": "Offer",
      "name": "Billån uten egenkapital",
      "description": "100% finansiering av bil",
      "price": "0",
      "priceCurrency": "NOK"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hjem",
        "item": "https://enkelfinansiering.no"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Billån Uten Egenkapital",
        "item": "https://enkelfinansiering.no/uten-egenkapital"
      }
    ]
  }
};

export default function UtenEgenkapitalPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8F8F0] to-[#D1F4E0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#10B981] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            100% finansiering • Ingen egenkapital
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
            Billån uten egenkapital
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Drømmer du om ny bil, men mangler egenkapital? Vi hjelper deg med <strong>100% finansiering</strong> og 
            <strong> fullfinansiering bil</strong>. Få et uforpliktende tilbud innen 24 timer.
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">100% finansiering</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Ingen egenkapital</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Rask behandling</span>
            </div>
          </div>

          <a 
            href="#lead-form" 
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            Søk billån uten egenkapital →
          </a>
        </div>
      </section>

      <HowItWorks />
      <DarkBenefits />
      <MultiStepForm />
      <TrustSignals />
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billån uten egenkapital" />
      <Footer />
    </main>
  );
}

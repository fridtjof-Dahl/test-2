import { Metadata } from 'next';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import DarkBenefits from '@/components/DarkBenefits';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Billån Uten Egenkapital 2026: 100% Finansiering | Beste Rente',
  description: 'Billån uten egenkapital? Få 100% finansiering på bil. Fullfinansiering uten egenkapital. Uforpliktende tilbud innen 24 timer. Gratis søknad. Tilgjengelig i hele Norge.',
  keywords: [
    'billån uten egenkapital',
    'billån uten egenkapital Oslo',
    'billån uten egenkapital Bergen',
    'billån uten egenkapital Trondheim',
    'billån uten egenkapital Stavanger',
    'fullfinansiering bil',
    '100% finansiering bil',
    'lån til bil uten egenkapital',
    'finansiering bil uten egenkapital',
    'kjøpe bil uten egenkapital',
    'billån 100% finansiering',
    'billån ingen egenkapital',
    'billån uten egenandel',
    'fullfinansiering billån',
    'billån uten egenkapital 2026',
    'billån uten egenkapital rente',
    'billån uten egenkapital krav',
    'billån uten egenkapital bank',
    'billån uten egenkapital Norge',
    'billån uten egenkapital online'
  ],
  openGraph: {
    title: 'Billån Uten Egenkapital 2026 - 100% Finansiering Bil',
    description: 'Få billån uten egenkapital med 100% finansiering. Fullfinansiering bil, lån til bil uten egenkapital. Uforpliktende tilbud innen 24 timer. Tilgjengelig i hele Norge.',
    url: 'https://enkelfinansiering.no/uten-egenkapital',
    siteName: 'Enkel Finansiering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/uten-egenkapital',
  },
  other: {
    'article:published_time': '2026-01-15T00:00:00.000Z',
    'article:modified_time': '2026-01-15T00:00:00.000Z',
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
  "name": "Billån Uten Egenkapital 2026",
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
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
              Billån uten egenkapital
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">
              100% finansiering av bil
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Drømmer du om ny bil, men mangler egenkapital? Vi hjelper deg med <strong>100% finansiering</strong> og 
              <strong> fullfinansiering bil</strong>. 
              <span className="font-semibold text-[#FF6B35]"> Få et uforpliktende tilbud innen 24 timer.</span>
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#lead-form" 
                className="group inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 min-h-[56px]"
              >
                <span>Søk billån uten egenkapital</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/kalkulator"
                className="group inline-flex items-center gap-2 bg-white text-[#004D61] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-[#004D61] hover:border-[#006B7D] shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#004D61]/30 min-h-[56px]"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Prøv kalkulatoren</span>
              </a>
            </div>
          </div>
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

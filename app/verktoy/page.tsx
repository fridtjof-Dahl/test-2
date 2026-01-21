import type { Metadata } from 'next';
import VerktoyLayout from '@/components/verktoy/VerktoyLayout';
import VerktoyCard from '@/components/verktoy/VerktoyCard';
import VerktoyButton from '@/components/verktoy/VerktoyButton';

export const metadata: Metadata = {
  title: 'Billån Verktøy 2026: Kalkulatorer og Sammenlignere | Enkel Finansiering',
  description: 'Utforsk våre avanserte billån verktøy. Sammenlign lånetilbud, beregn egenkapital sparing, estimer bilverdi og mye mer. Alle verktøy er 100% gratis.',
  keywords: [
    'billån verktøy',
    'billån kalkulator',
    'billån sammenligning',
    'bilverdi estimator',
    'billån vs leasing',
    'rente trend',
    'refinansiering kalkulator',
    'skatt avskrivning',
    'egenkapital sparing',
    'billån beregning'
  ],
  openGraph: {
    title: 'Billån Verktøy 2026: Kalkulatorer og Sammenlignere',
    description: 'Utforsk våre avanserte billån verktøy. Sammenlign lånetilbud, beregn egenkapital sparing, estimer bilverdi og mye mer.',
    type: 'website',
    url: 'https://enkelfinansiering.no/verktoy',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/verktoy',
  },
};

const tools = [
  {
    id: 'compare-loans',
    title: 'Sammenlign billån',
    description: 'Sammenlign vilkår og totalkostnad for ulike billån. Finn det som passer best for deg.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/sammenlign',
    features: ['Renter og gebyrer', 'Effektiv totalkostnad', 'Enkel oversikt'],
    color: 'teal'
  },
  {
    id: 'car-value-estimator',
    title: 'Bilverdi Estimator',
    description: 'Estimer bilens verdi basert på merke, modell, år og kilometerstand. Få en realistisk markedsverdi for din bil.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/verktoy/bilverdi-estimator',
    features: ['Markedsverdi estimering', 'Historisk verdiutvikling', 'Sammenligning med lignende biler'],
    color: 'blue'
  },
  {
    id: 'loan-vs-lease',
    title: 'Billån vs Leasing',
    description: 'Sammenlign billån og leasing side ved side. Se totalkostnad, fleksibilitet og fordelene med hver løsning.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '/verktoy/billan-vs-leasing',
    features: ['Totalkostnad sammenligning', 'Fleksibilitet analyse', 'Personlig anbefaling'],
    color: 'green'
  },
  {
    id: 'what-can-i-afford',
    title: 'Hva kan jeg kjøpe?',
    description: 'Beregn hvor mye du kan låne basert på din inntekt og økonomi. Få realistiske forventninger til bilkjøp.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    href: '/verktoy/hva-kan-jeg-kjope',
    features: ['Inntektsbasert beregning', 'Månedlig betalingsevne', 'Bilpris anbefalinger'],
    color: 'orange'
  },
  {
    id: 'refinancing-calculator',
    title: 'Refinansiering Kalkulator',
    description: 'Beregn om det lønner seg å refinansiere ditt eksisterende billån. Se potensielle besparelser og kostnader.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    href: '/verktoy/refinansiering-kalkulator',
    features: ['Besparelse beregning', 'Innfrielseskostnader', 'ROI analyse'],
    color: 'teal'
  },
  {
    id: 'tax-depreciation',
    title: 'Skatt og Avskrivning',
    description: 'Beregn skattefordeler og avskrivninger for bedriftsbiler. Optimaliser din skattesituasjon.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/verktoy/skatt-avskrivning',
    features: ['Skatteregning beregning', 'Avskrivningsplan', 'Bedriftsbil optimalisering'],
    color: 'indigo'
  }
];

export default function VerktoyPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Verktøy' }
  ];

  return (
    <VerktoyLayout
      title="Billån Verktøy"
      description="Utforsk våre avanserte billån verktøy. Sammenlign lånetilbud, beregn egenkapital sparing, estimer bilverdi og mye mer. Alle verktøy er 100% gratis og uforpliktende."
      breadcrumbItems={breadcrumbItems}
    >

      {/* Tools Grid */}
      <section id="tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004D61] mb-4">
              Våre Verktøy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Velg det verktøyet som passer best for din situasjon. Alle verktøy er utviklet av 
              våre eksperter for å gi deg de beste resultatene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <VerktoyCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                href={tool.href}
                features={tool.features}
                color={tool.color as any}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#004D61] to-[#006B7D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klar til å finne ditt perfekte billån?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Våre eksperter hjelper deg med å finne det beste lånetilbudet for din situasjon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VerktoyButton 
              href="#lead-form" 
              variant="primary"
            >
              Søk billån nå
            </VerktoyButton>
            <VerktoyButton 
              href="/kontakt" 
              variant="secondary"
            >
              Kontakt oss
            </VerktoyButton>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Billån Verktøy",
            "description": "Avanserte verktøy for billån beregning og sammenligning",
            "url": "https://enkelfinansiering.no/verktoy",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "NOK"
            },
            "provider": {
              "@type": "Organization",
              "name": "Enkel Finansiering",
              "url": "https://enkelfinansiering.no"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no" },
              { "@type": "ListItem", "position": 2, "name": "Verktøy", "item": "https://enkelfinansiering.no/verktoy" }
            ]
          })
        }}
      />
    </VerktoyLayout>
  );
}
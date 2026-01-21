import type { Metadata } from 'next';
import Header from '@/components/Header';
import SimpleLoanCalculator from '@/components/SimpleLoanCalculator';
import HowItWorks from '@/components/HowItWorks';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Billånskalkulator 2026: Beregn Billån Gratis | Månedskostnad & Rente',
  description: 'Beregn billån gratis med vår kalkulator. Se nøyaktig månedskostnad, renter og totalkostnad. Sammenlign scenarier. 100% gratis. Tilgjengelig for alle i Norge.',
  keywords: [
    'billånskalkulator',
    'billån kalkulator',
    'billån beregning',
    'billån kostnad beregning',
    'billån rente kalkulator',
    'billån månedskostnad',
    'billån estimat',
    'billån oversikt',
    'billån beregning 2026',
    'billån kalkulator Norge',
    'billån kalkulator Oslo',
    'billån kalkulator Bergen',
    'billån kalkulator Trondheim',
    'billån kalkulator Stavanger',
    'gratis billånskalkulator',
    'billån kalkulator gratis',
    'billån rente beregning',
    'billån nedbetaling kalkulator',
    'billån egenkapital kalkulator',
    'billån sammenligning',
    'billån kostnad oversikt',
    'billån rente 2026',
    'billån beregning online',
    'billån kalkulator mobil',
    'billån kalkulator online',
    'billån beregning gratis'
  ],
  openGraph: {
    title: 'Billånskalkulator 2026: Gratis Beregning av Billån',
    description: 'Beregn billån gratis med vår avanserte kalkulator. Se nøyaktig månedskostnad, renter og totalkostnad for ditt billån.',
    type: 'website',
    url: 'https://enkelfinansiering.no/kalkulator',
    images: [
      {
        url: 'https://enkelfinansiering.no/og-kalkulator.jpg',
        width: 1200,
        height: 630,
        alt: 'Billånskalkulator - Beregn billån gratis'
      }
    ],
    siteName: 'Enkel Finansiering'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billånskalkulator 2026: Gratis Beregning av Billån',
    description: 'Beregn billån gratis med vår avanserte kalkulator. Se nøyaktig månedskostnad, renter og totalkostnad.',
    images: ['https://enkelfinansiering.no/og-kalkulator.jpg']
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/kalkulator',
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
    'application-name': 'Enkel Finansiering Kalkulator',
    'msapplication-TileColor': '#004D61',
    'theme-color': '#004D61',
  }
};

const faqItems = [
  {
    question: "Hvordan fungerer billånskalkulatoren?",
    answer: "Vår avanserte billånskalkulator beregner nøyaktig månedskostnad basert på lånebeløp, egenkapital, nedbetalingstid og gjeldende renter. Du kan justere alle parametrene i sanntid for å se hvordan det påvirker månedskostnaden og totalkostnaden."
  },
  {
    question: "Er billånskalkulatoren nøyaktig?",
    answer: "Kalkulatoren gir et svært nøyaktig estimat basert på gjeldende markedsrenter. Den faktiske renten du får tilbud om, settes individuelt av vår samarbeidspartner etter en kredittvurdering. For et nøyaktig tilbud, anbefaler vi å sende inn en uforpliktende søknad."
  },
  {
    question: "Hva påvirker månedskostnaden på billån?",
    answer: "Månedskostnaden påvirkes av fire hovedfaktorer: lånebeløp, rente, nedbetalingstid og eventuelle gebyrer. Høyere egenkapital gir lavere lånebeløp og dermed lavere månedskostnad. Kortere nedbetalingstid gir høyere månedskostnad, men lavere totalkostnad."
  },
  {
    question: "Hva er forskjellen på nominell og effektiv rente?",
    answer: "Nominell rente er den rene lånerenten, mens effektiv rente inkluderer alle kostnader som etableringsgebyr, termingebyr og andre avgifter. Effektiv rente gir det mest realistiske bildet av totalkostnaden og er det du bør sammenligne når du vurderer ulike lånetilbud."
  },
  {
    question: "Hvor mye egenkapital bør jeg ha for billån?",
    answer: "Det anbefales å ha minst 10-20% egenkapital for å få gunstigere rente og bedre lånevilkår. Men det er mulig å få billån uten egenkapital (100% finansiering), selv om renten da kan være noe høyere. Vår kalkulator viser deg forskjellen."
  },
  {
    question: "Hva er beste nedbetalingstid for billån?",
    answer: "Det avhenger av din økonomi og mål. Kortere nedbetalingstid gir høyere månedskostnad, men lavere totalkostnad på grunn av mindre renter. Lengre nedbetalingstid gir lavere månedskostnad, men høyere totalkostnad. Bruk kalkulatoren for å finne balansen."
  },
  {
    question: "Inkluderer kalkulatoren alle kostnader?",
    answer: "Kalkulatoren viser hovedsakelig renter og avdrag. Noen banker har etableringsgebyr, termingebyr og andre kostnader som ikke er inkludert i dette estimatet. Disse vil fremgå av det endelige lånetilbudet fra vår samarbeidspartner."
  },
  {
    question: "Kan jeg stole på resultatet fra billånskalkulatoren?",
    answer: "Vår kalkulator gir et svært godt estimat basert på gjeldende markedsrenter. Det endelige tilbudet fra bankene kan variere noe, men kalkulatoren gir deg et utmerket utgangspunkt for å planlegge økonomien din og sammenligne ulike scenarier."
  },
  {
    question: "Hvorfor er vår billånskalkulator bedre enn andre?",
    answer: "Vår kalkulator er oppdatert med gjeldende markedsrenter, har en intuitiv brukeropplevelse, og gir deg detaljerte resultater inkludert effektiv rente og totalkostnad. Du kan også sammenligne ulike scenarier side ved side for å finne det beste alternativet."
  },
  {
    question: "Kan jeg bruke kalkulatoren på mobil?",
    answer: "Ja, vår billånskalkulator er fullt responsiv og fungerer perfekt på alle enheter - mobil, tablet og desktop. Du kan beregne billån hvor som helst, når som helst."
  }
];

export default function KalkulatorPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Billånskalkulator' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section - Clean and Modern like billån-siden */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
              Billånskalkulator
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">
              Beregn billån gratis og få nøyaktig oversikt
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Bruk vår avanserte kalkulator for å få et nøyaktig estimat på månedskostnad, renter og totalkostnad. 
              <span className="font-semibold text-[#FF6B35]"> Juster parametrene og se resultatet øyeblikkelig.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#calculator" 
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 min-h-[56px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Prøv kalkulatoren
              </a>
              <a 
                href="#lead-form" 
                className="inline-flex items-center gap-2 bg-white text-[#004D61] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-all border-2 border-[#004D61] hover:border-[#006B7D] focus:outline-none focus:ring-4 focus:ring-[#004D61]/30 shadow-lg hover:shadow-xl min-h-[56px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Søk billån nå
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section - Clean Design */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004D61] mb-4">
              Prøv vår billånskalkulator
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Beregn din månedlige kostnad før du leser videre. 
              <span className="font-semibold text-[#FF6B35]">100% gratis og uforpliktende.</span>
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <SimpleLoanCalculator />
          </div>
        </div>
      </section>

      {/* Quick Navigation - Simplified */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#004D61] mb-4">
              Hva vil du vite?
            </h2>
            <p className="text-gray-600 text-sm">Klikk på et emne for å lese mer</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { 
                title: "Hvordan beregnes billån?", 
                href: "#hvordan-beregnes",
                icon: (
                  <svg className="w-8 h-8 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: "Hva påvirker kostnaden?", 
                href: "#faktorer",
                icon: (
                  <svg className="w-8 h-8 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              { 
                title: "Ofte stilte spørsmål", 
                href: "#faq",
                icon: (
                  <svg className="w-8 h-8 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#004D61] hover:shadow-lg transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-[#004D61]/30 cursor-pointer"
                role="button"
                aria-label={`Les mer om ${item.title}`}
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#004D61] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 group-hover:text-[#004D61] transition-colors duration-300">
                  Les mer →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information Only */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hvordan beregnes billån - Simplified */}
          <section id="hvordan-beregnes" className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Hvordan beregnes billån?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Beregningsformel:</h3>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-700 font-mono">
                      Månedskostnad = (Lånebeløp × Månedlig rente × (1 + Månedlig rente)^Antall måneder) / 
                      ((1 + Månedlig rente)^Antall måneder - 1)
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Faktorer:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Lånebeløp (kjøpesum - egenkapital)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Rente (årlig rente ÷ 12)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Nedbetalingstid (år × 12)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Gebyrer (etablering, termingebyr)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Faktorer som påvirker kostnaden - Simplified */}
          <section id="faktorer" className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Hva påvirker kostnaden?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Hovedfaktorer:</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Lånebeløp</h4>
                      <p className="text-sm text-gray-600">Høyere lånebeløp = høyere månedskostnad</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Rente</h4>
                      <p className="text-sm text-gray-600">Lavere rente = lavere kostnad</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Nedbetalingstid:</h3>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Kortere tid:</span>
                        <span className="font-semibold text-[#FF6B35]">Høyere månedskostnad</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Lengre tid:</span>
                        <span className="font-semibold text-[#004D61]">Lavere månedskostnad</span>
                      </div>
                          <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                            <svg className="w-3 h-3 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Kortere nedbetalingstid gir lavere totalkostnad
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* FAQ Section - Simplified */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={faqItems} title="Ofte stilte spørsmål om billånskalkulator" />
        </div>
      </section>

      {/* Final CTA - light and readable */}
      <section id="lead-form" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004D61] mb-4">Klar til å søke om billån?</h2>
            <p className="text-lg md:text-xl text-gray-600">Få et uforpliktende tilbud innen 24 timer. Gratis, raskt og profesjonelt.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200">
            <MultiStepForm />
          </div>
        </div>
      </section>


      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Billånskalkulator 2026",
          "description": "Gratis billånskalkulator for å beregne månedskostnad, renter og totalkostnad for billån",
          "url": "https://enkelfinansiering.no/kalkulator",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "NOK"
          },
          "featureList": [
            "Sanntids beregning av billån",
            "Juster kjøpesum, egenkapital og nedbetalingstid",
            "Vis månedskostnad og totalkostnad",
            "Beregn effektiv rente",
            "Responsiv design for alle enheter"
          ],
          "provider": {
            "@type": "Organization",
            "name": "Enkel Finansiering",
            "url": "https://enkelfinansiering.no"
          }
        }) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no/" },
            { "@type": "ListItem", "position": 2, "name": "Billånskalkulator", "item": "https://enkelfinansiering.no/kalkulator" }
          ]
        }) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
        }) }}
      />
      
      <Footer />
    </main>
  );
}


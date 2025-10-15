import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';
import MultiStepForm from '@/components/MultiStepForm';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Elbil Lån 2025 - Billån til Elbil & Hybrid | Enkel Finansiering',
  description: 'Få billån til elbil og hybridbil med spesialrenter. Lån til Tesla, Audi e-tron, Polestar og andre elbiler. Grønt billån med lave renter. Uforpliktende tilbud innen 24 timer.',
  keywords: [
    'elbil lån',
    'grønt billån',
    'lån til elbil',
    'finansiering elbil',
    'billån elbil',
    'lån til hybridbil',
    'billån hybrid',
    'billån tesla',
    'billån audi e-tron',
    'billån polestar',
    'elbil finansiering',
    'hybrid lån',
    'grønt lån bil',
    'elbil rente',
    'billån elbil 2025',
    'finansiering tesla',
    'lån til elbil 2025',
    'billån elbil rente',
    'elbil lån rente',
    'hybridbil lån'
  ],
  openGraph: {
    title: 'Elbil Lån 2025 - Billån til Elbil & Hybrid',
    description: 'Få billån til elbil og hybridbil med spesialrenter. Lån til Tesla, Audi e-tron, Polestar og andre elbiler.',
    url: 'https://enkelfinansiering.no/elbil-lan',
    siteName: 'Enkel Finansiering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/elbil-lan',
  },
  other: {
    'article:published_time': '2025-01-15T00:00:00.000Z',
    'article:modified_time': '2025-01-15T00:00:00.000Z',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Elbil Lån 2025",
  "description": "Få billån til elbil og hybridbil med spesialrenter. Lån til Tesla, Audi e-tron, Polestar og andre elbiler.",
  "url": "https://enkelfinansiering.no/elbil-lan",
  "mainEntity": {
    "@type": "Service",
    "name": "Elbil Lån",
    "description": "Billån til elbil og hybridbil med spesialrenter",
    "provider": {
      "@type": "Organization",
      "name": "Enkel Finansiering"
    },
    "offers": {
      "@type": "Offer",
      "name": "Elbil Lån",
      "description": "Billån til elbil og hybridbil",
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
        "name": "Elbil Lån",
        "item": "https://enkelfinansiering.no/elbil-lan"
      }
    ]
  }
};

const faqItems = [
  {
    question: "Hva er elbil lån?",
    answer: "Elbil lån er spesialiserte billån for elbiler og hybridbiler. Mange banker tilbyr lavere renter for elbiler som en del av grønn finansiering, siden elbiler er mer miljøvennlige."
  },
  {
    question: "Får jeg lavere rente på elbil lån?",
    answer: "Ja, vår samarbeidspartner tilbyr spesialrenter for elbiler og hybridbiler. Elbil lån har ofte lavere rente enn vanlige billån, med renter fra 7,5% for elbiler."
  },
  {
    question: "Hvilke elbiler kan jeg få lån til?",
    answer: "Du kan få lån til alle elbiler og hybridbiler, inkludert Tesla, Audi e-tron, Polestar, BMW i3, Nissan Leaf, Hyundai Ioniq og mange flere. Vi tilbyr finansiering for alle merker og modeller."
  },
  {
    question: "Hva er grønt billån?",
    answer: "Grønt billån er et miljøvennlig lån som gir lavere renter for elbiler og hybridbiler. Dette er en del av bankenes bærekraftige finansiering for å oppmuntre til kjøp av miljøvennlige kjøretøy."
  },
  {
    question: "Kan jeg få lån til brukt elbil?",
    answer: "Ja, du kan få lån til både nye og brukte elbiler. Vår samarbeidspartner tilbyr finansiering for elbiler i alle aldre, men renten kan variere basert på bilens alder og tilstand."
  },
  {
    question: "Hvor mye kan jeg låne til elbil?",
    answer: "Du kan låne opptil 100% av bilens verdi, men det avhenger av din inntekt og kredittverdighet. Vår samarbeidspartner låner ut opptil 5-6 ganger brutto månedsinntekt for elbil lån."
  }
];

export default function ElbilLanPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Grønt billån • Spesialrenter
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Elbil Lån 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Få <strong>billån til elbil og hybridbil</strong> med spesialrenter. 
              <span className="font-semibold text-green-600"> Låne til Tesla, Audi e-tron, Polestar og andre elbiler.</span>
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Spesialrenter elbil</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Alle elbilmerker</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Grønt billån</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
              <a 
                href="#lead-form" 
                className="btn-primary text-lg"
              >
                Søk elbil lån nå →
              </a>
              <a
                href="#calculator"
                className="btn-secondary text-lg"
              >
                Beregn elbil lån
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beregn elbil lån
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Se hvor mye du kan låne til elbil og beregn månedlig betaling med vår kalkulator
            </p>
          </div>
          <LoanCalculator />
        </div>
      </section>

      {/* Elbil brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vi finansierer alle elbilmerker
            </h2>
            <p className="text-xl text-gray-600">
              Få lån til Tesla, Audi e-tron, Polestar og mange flere
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Tesla', logo: '🚗' },
              { name: 'Audi e-tron', logo: '🚗' },
              { name: 'Polestar', logo: '🚗' },
              { name: 'BMW i3', logo: '🚗' },
              { name: 'Nissan Leaf', logo: '🚗' },
              { name: 'Hyundai Ioniq', logo: '🚗' },
              { name: 'Volkswagen ID', logo: '🚗' },
              { name: 'Mercedes EQC', logo: '🚗' },
              { name: 'Kia e-Niro', logo: '🚗' },
              { name: 'Ford Mustang Mach-E', logo: '🚗' },
              { name: 'Skoda Enyaq', logo: '🚗' },
              { name: 'Cupra Born', logo: '🚗' }
            ].map((brand, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{brand.logo}</div>
                <h3 className="font-semibold text-gray-900">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elbil rates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elbil lån renter 2025
            </h2>
            <p className="text-xl text-gray-600">
              Spesialrenter for elbiler og hybridbiler
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ny elbil</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">7,5%</div>
                <p className="text-gray-600">Fra 7,5% nominell rente</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brukt elbil</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">8,0%</div>
                <p className="text-gray-600">Fra 8,0% nominell rente</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hybridbil</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">7,8%</div>
                <p className="text-gray-600">Fra 7,8% nominell rente</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              *Renter kan variere basert på kredittvurdering og lånevilkår
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fordeler med elbil lån
            </h2>
            <p className="text-xl text-gray-600">
              Hvorfor velge elbil lån hos oss
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lavere renter</h3>
              <p className="text-gray-600">Spesialrenter for elbiler og hybridbiler. Fra 7,5% nominell rente for nye elbiler.</p>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alle merker</h3>
              <p className="text-gray-600">Vi finansierer alle elbilmerker: Tesla, Audi e-tron, Polestar, BMW i3 og mange flere.</p>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Grønt billån</h3>
              <p className="text-gray-600">Miljøvennlig finansiering som oppmuntrer til kjøp av elbiler og hybridbiler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klar for elbil lån?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Få et uforpliktende tilbud på elbil lån innen 24 timer. Spesialrenter for elbiler og hybridbiler.
          </p>
          <a 
            href="#lead-form" 
            className="inline-block bg-white text-green-600 font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Søk elbil lån nå →
          </a>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Søk om elbil lån nå
            </h2>
            <p className="text-xl text-gray-600">
              Fyll ut skjemaet og få et uforpliktende tilbud på elbil lån innen 24 timer
            </p>
          </div>
          <MultiStepForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={faqItems} title="Ofte stilte spørsmål om elbil lån" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';
import MultiStepForm from '@/components/MultiStepForm';

export const metadata: Metadata = {
  title: 'Billånskalkulator 2025 - Beregn Billån Rente & Månedlig Betaling',
  description: 'Beregn billån med vår gratis billånskalkulator. Sammenlign renter, månedlig betaling og få det beste billånet. 100% gratis og uforpliktende.',
  keywords: [
    'billånskalkulator',
    'lånekalkulator bil',
    'hva koster billån',
    'beregne billån',
    'billån rente',
    'rente billån',
    'beste billån',
    'billigste billån',
    'sammenligne billån',
    'lav rente billån',
    'beste rente billån',
    'billån beregning',
    'billån kalkulator',
    'billån rente kalkulator'
  ],
  openGraph: {
    title: 'Billånskalkulator 2025 - Beregn Billån Rente & Månedlig Betaling',
    description: 'Beregn billån med vår gratis billånskalkulator. Sammenlign renter, månedlig betaling og få det beste billånet.',
    url: 'https://enkelfinansiering.no/billan-kalkulator',
    siteName: 'Enkel Finansiering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/billan-kalkulator',
  },
  other: {
    'article:published_time': '2025-01-15T00:00:00.000Z',
    'article:modified_time': '2025-01-15T00:00:00.000Z',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Billånskalkulator 2025",
  "description": "Beregn billån med vår gratis billånskalkulator. Sammenlign renter, månedlig betaling og få det beste billånet.",
  "url": "https://enkelfinansiering.no/billan-kalkulator",
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "Billånskalkulator",
    "description": "Gratis billånskalkulator for å beregne rente og månedlig betaling",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
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
        "name": "Billånskalkulator",
        "item": "https://enkelfinansiering.no/billan-kalkulator"
      }
    ]
  }
};

export default function BillanKalkulatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Billånskalkulator 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Beregn billån rente, månedlig betaling og sammenlign tilbud. 
              <span className="font-semibold text-blue-600"> 100% gratis og uforpliktende.</span>
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Gratis kalkulator</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Aktuelle renter</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Sammenlign tilbud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoanCalculator />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Slik fungerer billånskalkulatoren
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vår billånskalkulator hjelper deg å finne det beste billånet ved å sammenligne renter og beregne månedlige betalinger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Velg lånebeløp</h3>
              <p className="text-gray-600">Angi hvor mye du vil låne og nedbetalingstid. Kalkulatoren viser automatisk månedlig betaling.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sammenlign renter</h3>
              <p className="text-gray-600">Se aktuelle renter og sammenlign ulike lånetilbud for å finne det beste alternativet.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Søk om lån</h3>
              <p className="text-gray-600">Få uforpliktende tilbud innen 24 timer. Ingen bindinger før du signerer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current rates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aktuelle billån renter 2025
            </h2>
            <p className="text-xl text-gray-600">
              Sammenlign renter fra vår samarbeidspartner
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ny bil</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">7,8%</div>
                <p className="text-gray-600">Fra 7,8% nominell rente</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bruktbil</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,2%</div>
                <p className="text-gray-600">Fra 8,2% nominell rente</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Elbil/Hybrid</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">7,5%</div>
                <p className="text-gray-600">Fra 7,5% nominell rente</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              *Renter kan variere basert på kredittvurdering og lånevilkår
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klar for å søke om billån?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Få et uforpliktende tilbud innen 24 timer. 100% gratis og ingen bindinger.
          </p>
          <a 
            href="#lead-form" 
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Søk billån nå →
          </a>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Søk om billån nå
            </h2>
            <p className="text-xl text-gray-600">
              Fyll ut skjemaet og få et uforpliktende tilbud innen 24 timer
            </p>
          </div>
          <MultiStepForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

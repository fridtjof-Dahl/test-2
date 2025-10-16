import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Sammenlign Billån | Lånetilbud Sammenligning | Enkel Finansiering',
  description: 'Sammenlign billån fra ulike långivere. Se månedskostnad, totalkostnad og effektiv rente side ved side. Få det beste tilbudet.',
  keywords: [
    'sammenlign billån',
    'billån sammenligning',
    'lånetilbud sammenligning',
    'billån sammenlign',
    'billån tilbud',
    'billån renter',
    'billån kalkulator',
    'billån sammenligningsverktøy'
  ],
  openGraph: {
    title: 'Sammenlign Billån | Lånetilbud Sammenligning',
    description: 'Sammenlign billån fra ulike långivere. Se månedskostnad, totalkostnad og effektiv rente side ved side.',
    type: 'website',
    url: 'https://enkelfinansiering.no/sammenlign',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/sammenlign',
  },
};

const lenders = [
  {
    name: 'DNB Bank',
    logo: '/lenders/dnb.png',
    interestRate: 7.2,
    effectiveRate: 7.8,
    monthlyPayment: 12450,
    totalCost: 747000,
    features: ['Ingen etableringsgebyr', 'Fleksibel nedbetaling', '24/7 kundeservice'],
    pros: ['Lav rente', 'God kundeservice', 'Fleksible vilkår'],
    cons: ['Strenge krav', 'Langsom behandling'],
    rating: 4.3,
    reviews: 2847
  },
  {
    name: 'Nordea Bank',
    logo: '/lenders/nordea.png',
    interestRate: 7.5,
    effectiveRate: 8.1,
    monthlyPayment: 12680,
    totalCost: 760800,
    features: ['Rask behandling', 'Digital signering', 'Mobilbank'],
    pros: ['Rask prosess', 'Moderne løsninger', 'Bred tilgjengelighet'],
    cons: ['Høyere rente', 'Begrenset fleksibilitet'],
    rating: 4.1,
    reviews: 1923
  },
  {
    name: 'Handelsbanken',
    logo: '/lenders/handelsbanken.png',
    interestRate: 7.8,
    effectiveRate: 8.4,
    monthlyPayment: 12920,
    totalCost: 775200,
    features: ['Personlig rådgivning', 'Ingen skjulte kostnader', 'Fleksibel termin'],
    pros: ['Personlig service', 'Transparente vilkår', 'God rådgivning'],
    cons: ['Høyere kostnad', 'Begrenset digitalisering'],
    rating: 4.4,
    reviews: 1456
  },
  {
    name: 'SpareBank 1',
    logo: '/lenders/sparebank1.png',
    interestRate: 8.1,
    effectiveRate: 8.7,
    monthlyPayment: 13150,
    totalCost: 789000,
    features: ['Lokalt engasjement', 'Fleksible vilkår', 'Rask godkjenning'],
    pros: ['Lokalt fokus', 'Fleksible løsninger', 'Rask behandling'],
    cons: ['Høyere rente', 'Begrenset geografisk dekning'],
    rating: 4.0,
    reviews: 892
  }
];

const comparisonFeatures = [
  {
    title: 'Rentebetegnelse',
    description: 'Sammenlign nominell og effektiv rente for å se den reelle kostnaden'
  },
  {
    title: 'Månedlige Betalinger',
    description: 'Se hvor mye du betaler hver måned med ulike långivere'
  },
  {
    title: 'Totalkostnad',
    description: 'Beregn total kostnad over hele låneperioden'
  },
  {
    title: 'Etableringsgebyr',
    description: 'Sammenlign etableringsgebyrer og andre engangskostnader'
  },
  {
    title: 'Fleksibilitet',
    description: 'Se hvilke långivere som tilbyr fleksible nedbetalingsløsninger'
  },
  {
    title: 'Kundeservice',
    description: 'Vurder kundeservice og tilgjengelighet'
  }
];

export default function SammenlignPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Sammenlign' }
  ];

  return (
    <>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#004D61]">Sammenlign billån side ved side</span>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse delay-300"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
                Sammenlign Billån
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">
                Få det beste tilbudet for din situasjon
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Sammenlign billån fra ulike långivere side ved side. Se månedskostnad, totalkostnad og effektiv rente. 
                <span className="font-semibold text-[#FF6B35]"> Få det beste tilbudet for din situasjon.</span>
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Comparison Table */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-x-auto">
              <h2 className="text-3xl font-bold text-[#004D61] mb-8 text-center">Billån Sammenligning</h2>
              
              <div className="min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Långiver</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Nominell Rente</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Effektiv Rente</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Månedlig Betaling</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Totalkostnad</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Vurdering</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Handling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lenders.map((lender, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-6 px-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-lg">{lender.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{lender.name}</div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(lender.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                                <span className="text-sm text-gray-600 ml-2">({lender.reviews})</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="text-2xl font-bold text-[#004D61]">{lender.interestRate}%</span>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="text-lg font-semibold text-gray-700">{lender.effectiveRate}%</span>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="text-xl font-bold text-gray-900">{lender.monthlyPayment.toLocaleString()} kr</span>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <span className="text-lg font-semibold text-gray-700">{lender.totalCost.toLocaleString()} kr</span>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex flex-col gap-1">
                            <div className="text-sm text-green-600 font-semibold">
                              {lender.pros.slice(0, 2).join(', ')}
                            </div>
                            <div className="text-sm text-red-600">
                              {lender.cons.slice(0, 1).join(', ')}
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <button className="bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105">
                            Søk nå
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Comparison Features */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#004D61] mb-12 text-center">Hva sammenligner vi?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comparisonFeatures.map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E55A25] rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D61] mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Compare */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-[#004D61] mb-8 text-center">Slik sammenligner du billån</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#004D61] mb-6">1. Fokuser på effektiv rente</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Den effektive renten inkluderer alle gebyrer og viser den reelle kostnaden på lånet. 
                    Dette er det viktigste tallet å sammenligne.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-[#004D61] mb-6">2. Se på totalkostnad</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Beregn total kostnad over hele låneperioden. En lavere månedlig betaling kan 
                    bety høyere totalkostnad hvis låneperioden er lengre.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#004D61] mb-6">3. Vurder fleksibilitet</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sjekk om du kan betale ekstra, endre nedbetalingstid eller refinansiere 
                    uten store kostnader.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-[#004D61] mb-6">4. Sammenlign kundeservice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    God kundeservice kan være verdt litt ekstra kostnad, spesielt hvis du 
                    trenger hjelp underveis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Klar til å finne ditt beste billån?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Vår samarbeidspartner hjelper deg med å finne det perfekte lånetilbudet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#lead-form" 
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Søk billån nå
                </a>
                <a 
                  href="/kalkulator" 
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 border border-white/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Prøv kalkulatoren
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

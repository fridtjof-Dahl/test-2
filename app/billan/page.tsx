import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ScrollToTop from '@/components/ScrollToTop';
import ReadingProgress from '@/components/ReadingProgress';
import dynamic from 'next/dynamic';
import LoanCalculator from '@/components/LoanCalculator';

// Lazily load heavier client components for better initial performance
const MultiStepForm = dynamic(() => import('@/components/MultiStepForm'));
const FAQ = dynamic(() => import('@/components/FAQ'));

export const metadata: Metadata = {
  title: 'Billån i Norge - Alt du trenger å vite | Enkel Finansiering',
  description: 'Alt du trenger å vite om billån i Norge. Lær om renter, egenkapital og hvordan du får best tilbud. Få et uforpliktende tilbud innen 24 timer.',
  keywords: 'billån, billån uten egenkapital, billån rente, billån kalkulator, billån norge',
};

export default function BillanGuidePage() {
  const faqItems = [
    {
      question: "Hva er forskjellen på nominell og effektiv rente?",
      answer: "Nominell rente er grunnrenten på lånet, mens effektiv rente inkluderer alle gebyrer som etableringsgebyr og termingebyr. Den effektive renten gir deg den reelle kostnaden på lånet og er det du bør sammenligne når du vurderer ulike tilbud."
    },
    {
      question: "Hvor lang nedbetalingstid kan jeg ha på billån?",
      answer: "For nye biler kan du få inntil 10 års nedbetalingstid. For bruktbiler avhenger nedbetalingstiden av bilens alder - jo eldre bil, desto kortere nedbetalingstid. Dette er fordi banken må sikre at lånet nedbetales før bilen blir for gammel."
    },
    {
      question: "Kan jeg innfri billånet mitt tidligere?",
      answer: "Ja, du kan når som helst innfri lånet helt eller delvis uten ekstra kostnad. Dette kan være smart hvis du får bedre økonomi eller vil selge bilen."
    },
    {
      question: "Hva skjer hvis jeg vil selge bilen før lånet er nedbetalt?",
      answer: "Du må innfri lånet samtidig som du selger bilen. Dette gjøres vanligvis ved at kjøper betaler til banken først, som så sletter pantet, før resten av pengene overføres til deg."
    },
    {
      question: "Kan jeg få billån med betalingsanmerkning?",
      answer: "Det er svært vanskelig å få billån med aktiv betalingsanmerkning, men ikke umulig. Noen långivere kan vurdere søknaden din individuelt, spesielt hvis anmerkningen er gammel eller av mindre beløp. Kontakt oss for veiledning."
    },
    {
      question: "Trenger jeg kaskoforsikring på billån?",
      answer: "Ja, de fleste banker krever kaskoforsikring når du tar opp billån, spesielt ved høy belåningsgrad. Dette er for å sikre bankens investering i tilfelle ulykke eller skade. For eldre og billigere biler kan du få kaskofritt billån."
    },
    {
      question: "Hva er grønt billån?",
      answer: "Grønt billån er et spesialtilbud for kjøp av miljøvennlige biler som elbiler og ladbare hybrider. Du får lavere rente som en belønning for å velge miljøvennlig. Renten kan være opptil 1-2% lavere enn standard billån."
    },
    {
      question: "Hvor mye egenkapital trenger jeg?",
      answer: "Du kan få billån helt uten egenkapital (100% finansiering), men 20-35% egenkapital gir ofte de beste betingelsene med lavere rente. Jo mer egenkapital, desto lavere risiko for banken og bedre vilkår for deg."
    },
    {
      question: "Hva er forskjellen på billån og forbrukslån?",
      answer: "Billån har pant i bilen og gir derfor mye lavere rente (typisk 6-8%). Forbrukslån er usikret og har høyere rente (typisk 10-20%). Velg alltid billån hvis du skal kjøpe bil."
    },
    {
      question: "Kan jeg få billån til bruktbil?",
      answer: "Ja, du kan få billån til både ny og brukt bil. Bruktbil kan ha noe høyere rente og kortere nedbetalingstid, avhengig av bilens alder. Biler eldre enn 10-15 år kan være vanskeligere å finansiere."
    }
  ];

  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Billån Guide' }
  ];

  return (
    <>
      <Header />
      <ReadingProgress />
      <main className="min-h-screen bg-white">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Hero Section - Clean and Modern */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#004D61]">Komplett guide til billån i Norge</span>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse delay-300"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
                Billån i Norge
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">
                Alt du trenger å vite
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Fra søknad til signering - en komplett guide til billån i Norge. 
                <span className="font-semibold text-[#FF6B35]"> Få et uforpliktende tilbud innen 24 timer.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Prøv kalkulatoren
                </a>
                <a 
                  href="#lead-form" 
                  className="inline-flex items-center gap-2 bg-white text-[#004D61] hover:bg-gray-50 font-semibold px-8 py-4 rounded-full transition-all border-2 border-[#004D61] hover:border-[#006B7D] focus:outline-none focus:ring-4 focus:ring-[#004D61]/30"
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
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-6 shadow-sm border border-gray-200">
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Interaktiv kalkulator</span>
              </div>
              
              <h2 className="text-3xl font-bold text-[#004D61] mb-4">
                Prøv vår billånskalkulator
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Beregn din månedlige kostnad før du leser videre. 
                <span className="font-semibold text-[#FF6B35]">100% gratis og uforpliktende.</span>
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <LoanCalculator />
            </div>
          </div>
        </section>

        {/* Quick Navigation - Simplified */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#004D61] mb-4">
                Hva vil du vite?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  title: "Hva koster det?", 
                  href: "#hva-koster",
                  icon: (
                    <svg className="w-8 h-8 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                { 
                  title: "Hvordan søke?", 
                  href: "#hvordan-soke",
                  icon: (
                    <svg className="w-8 h-8 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#004D61] hover:shadow-lg transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-[#004D61]/30"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#004D61] transition-colors duration-300">
                    {item.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Information Only */}
        <article className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Hvordan søke - Simplified */}
            <section id="hvordan-soke" className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Hvordan søke om billån</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">5 enkle steg:</h3>
                    <div className="space-y-4">
                      {[
                        { step: 1, title: "Finn bilen", desc: "Registreringsnummer og pris klart" },
                        { step: 2, title: "Fyll ut skjema", desc: "Vi sender til samarbeidspartner" },
                        { step: 3, title: "Motta tilbud", desc: "Innen 24 timer" },
                        { step: 4, title: "Signer med BankID", desc: "Digitalt og trygt" },
                        { step: 5, title: "Hent bilen", desc: "Vi overfører pengene" }
                      ].map((item) => (
                        <div key={item.step} className="flex gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#004D61] text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Du trenger:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Fødselsnummer
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        BankID
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Inntektsinformasjon
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Registreringsnummer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Hva koster det - Simplified */}
            <section id="hva-koster" className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Hva koster et billån?</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Rentetyper:</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Nominell rente</h4>
                        <p className="text-sm text-gray-600">Den grunnleggende renten på lånet</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Effektiv rente</h4>
                        <p className="text-sm text-gray-600">Nominell rente + alle gebyrer (den reelle kostnaden)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Eksempel (300 000 kr, 7 år):</h3>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Nominell rente:</span>
                        <span className="font-semibold">9.2%</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Effektiv rente:</span>
                        <span className="font-semibold">10.1%</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Månedskostnad:</span>
                        <span className="font-bold text-[#FF6B35] text-lg">4 850 kr</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Totalkostnad:</span>
                        <span className="font-semibold">407 400 kr</span>
                      </div>
                    </div>
                        <p className="text-sm text-gray-600 mt-4 flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Bruk kalkulatoren øverst for å beregne ditt eget lån
                        </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="my-12">
              <div className="bg-[#004D61] rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Klar til å søke om billån?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Få et uforpliktende tilbud innen 24 timer. Gratis, raskt og profesjonelt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="#lead-form" 
                    className="inline-block bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                  >
                    Søk billån nå
                  </a>
                  <a 
                    href="#calculator" 
                    className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30"
                  >
                    Prøv kalkulatoren først
                  </a>
                </div>
              </div>
            </section>

          </div>
        </article>


        {/* Final CTA */}
        <section id="lead-form" className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D61] mb-4">Klar til å søke om billån?</h2>
              <p className="text-lg md:text-xl text-gray-600">Få et uforpliktende tilbud innen 24 timer. Gratis, raskt og profesjonelt.</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 rounded-full px-5 py-2 border border-blue-100">
                <svg className="w-5 h-5 text-[#004D61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-[#004D61]">100% gratis og uforpliktende</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200">
              <MultiStepForm />
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
             
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Billån i Norge - Alt du trenger å vite",
            "description": "Alt du trenger å vite om billån i Norge. Lær om renter, egenkapital, grønt billån og hvordan du får best tilbud.",
            "author": {
              "@type": "Organization",
              "name": "Enkel Finansiering"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Enkel Finansiering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://enkelfinansiering.no/logo.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://enkelfinansiering.no/billan"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Hjem",
                  "item": "https://enkelfinansiering.no/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Alt du trenger å vite",
                  "item": "https://enkelfinansiering.no/billan"
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
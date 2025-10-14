import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Om oss | Enkel Finansiering',
  description: 'Vi samarbeider med profesjonelle bilforhandlere for å gjøre bilkjøp enkelt og trygt. Rask behandling og god oppfølgning.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#004D61] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Om oss
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-4 leading-tight">
            Om Enkel Finansiering
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Vi gjør bilkjøp enkelt, trygt og raskt – fra første samtale til bilen står klar. 
            Vårt mål er å gi deg en sømløs finansieringsopplevelse med rask behandling og personlig oppfølgning.
          </p>
        </div>
      </section>

      {/* Message Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Vi samarbeider med profesjonelle bilforhandlere for å gjøre det lettere for privatpersoner å kjøpe 
              drømmebilen sin raskt og enkelt. Med raske svar og tett oppfølgning gjennom hele bilkjøpsprosessen, 
              sørger vi for at du føler deg trygg fra start til mål.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are / Our story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#004D61] mb-4">Hvem vi er</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Enkel Finansiering ble startet med en enkel idé: å gjøre bilfinansiering oversiktlig og
                tilgjengelig for alle. Vi så at mange opplevde prosessen som uoversiktlig og tidkrevende, og
                ønsket å tilby en bedre vei – med tydelig informasjon, raske svar og god personlig service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vår misjon er å koble kundene med riktige løsninger gjennom konkurrerende tilbud og tett samarbeid
                med profesjonelle bilforhandlere. Vår visjon er at bilkjøp skal oppleves like trygt som å kjøpe
                noe på nett – enkelt, forutsigbart og effektivt.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#004D61] mb-6">Vår misjon og visjon</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#004D61] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gjøre bilfinansiering enklere og mer transparent
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#004D61] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sikre konkurransedyktige vilkår gjennom flere samarbeidspartnere
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#004D61] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Gjøre prosessen trygg gjennom tydelighet og god oppfølgning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004D61] mb-10 text-center">Hvordan vi jobber</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7l2 12h10l2-12M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Samarbeid med forhandlere</h3>
              <p className="text-gray-700">Vi jobber tett med profesjonelle bilforhandlere for å sikre effektive prosesser og gode løsninger.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Rask behandling</h3>
              <p className="text-gray-700">Vi gir deg et uforpliktende tilbud innen 24 timer og holder deg oppdatert.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#10B981] mb-2">God oppfølgning</h3>
              <p className="text-gray-700">Du får personlig kontakt og støtte gjennom hele bilkjøpsprosessen.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Personlig service</h3>
              <p className="text-gray-700">Vi tilpasser prosessen etter dine behov og mål, ikke omvendt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004D61] mb-10 text-center">Våre verdier</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Trygghet</h3>
              <p className="text-gray-700">Klare prosesser, forutsigbarhet og trygg finansiering fra start til mål.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Enkelhet</h3>
              <p className="text-gray-700">En smidig opplevelse med tydelige steg og hjelp når du trenger det.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Hastighet</h3>
              <p className="text-gray-700">Rask behandling og korte beslutningslinjer for effektive avklaringer.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Personlig service</h3>
              <p className="text-gray-700">Du får en ekte samtalepartner som forstår dine behov og prioriteringer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004D61] mb-10 text-center">Tall som bygger tillit</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="text-4xl font-bold text-[#004D61] mb-2">10 000+</div>
              <div className="text-gray-700">fornøyde kunder</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">24 t</div>
              <div className="text-gray-700">gjennomsnittlig svartid</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="text-4xl font-bold text-[#10B981] mb-2">100+</div>
              <div className="text-gray-700">samarbeidspartnere</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-gray-700">i kundetilfredshet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team (optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004D61] mb-4">Våre eksperter står klare til å hjelpe deg</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Vi er et dedikert team som hjelper deg med å finne riktig finansiering. 
              Ta kontakt så tar vi en uforpliktende prat om dine behov og muligheter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D61] mb-6">Klar til å finne drømmebilen?</h2>
          <p className="text-lg text-gray-700 mb-8">Send en uforpliktende søknad – vi tar resten.</p>
          <a 
            href="/#lead-form" 
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Søk billån nå
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no/" },
            { "@type": "ListItem", "position": 2, "name": "Om oss", "item": "https://enkelfinansiering.no/om-oss" }
          ]
        }) }}
      />
      <Footer />
    </main>
  );
}



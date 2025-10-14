import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billån på dagen – Kampanje | Enkel Finansiering',
  description: 'Billån på dagen: Få et uforpliktende tilbud innen 24 timer og kom raskt i gang. Enkel søknad, personlig oppfølging og konkurransedyktige vilkår.',
};

export default function CampaignBillanPaDagen() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#FFF4E6] to-[#FFE4CC] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Billån på dagen
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-4 leading-tight">
            Raskt og enkelt – kom i gang i dag
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Få et uforpliktende tilbud innen 24 timer. 100% gratis å søke.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a 
              href="/#lead-form" 
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
            >
              Søk billån nå →
            </a>
            <a 
              href="/kalkulator" 
              className="inline-block border-2 border-[#004D61] text-[#004D61] hover:bg-[#004D61] hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all"
            >
              Prøv kalkulatoren
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Tilbud innen 24 timer</h3>
              <p className="text-gray-700">Rask behandling med tydelige svar, slik at du kan handle raskt.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Uforpliktende og gratis</h3>
              <p className="text-gray-700">Sammenlign alternativer og velg først når du er trygg.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#004D61] mb-2">Personlig oppfølging</h3>
              <p className="text-gray-700">Få hjelp av våre eksperter gjennom hele prosessen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#004D61] mb-2">10 000+</div>
              <div className="text-gray-700">fornøyde kunder</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#004D61] mb-2">24 t</div>
              <div className="text-gray-700">gjennomsnittlig svartid</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#004D61] mb-2">100+</div>
              <div className="text-gray-700">samarbeidspartnere</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#004D61] mb-2">4.8/5</div>
              <div className="text-gray-700">i kundetilfredshet</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004D61] mb-4">Klar til å komme i gang?</h2>
          <p className="text-lg text-gray-700 mb-8">Send inn en uforpliktende søknad – vi svarer innen 24 timer.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a 
              href="/#lead-form" 
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Søk billån nå
            </a>
            <a 
              href="/kalkulator" 
              className="inline-block border-2 border-[#004D61] text-[#004D61] hover:bg-[#004D61] hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all"
            >
              Prøv kalkulatoren
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no/" },
            { "@type": "ListItem", "position": 2, "name": "Billån på dagen", "item": "https://enkelfinansiering.no/kampanje/billan-pa-dagen" }
          ]
        }) }}
      />

      <Footer />
    </main>
  );
}



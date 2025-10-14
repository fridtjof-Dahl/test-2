import Header from '@/components/Header';
import LoanCalculator from '@/components/LoanCalculator';
import HowItWorks from '@/components/HowItWorks';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billånskalkulator 2025: Beregn hva lånet koster | Enkel Finansiering',
  description: 'Prøv vår enkle billånskalkulator. Se estimert månedskostnad, renter og gebyrer for ditt billån. Få full oversikt over kostnadene før du søker.',
};

const faqItems = [
  {
    question: "Hvordan fungerer billånskalkulatoren?",
    answer: "Kalkulatoren beregner estimert månedskostnad basert på lånebeløp, egenkapital, nedbetalingstid og en gjennomsnittlig rente. Du kan justere alle parametrene for å se hvordan det påvirker månedskostnaden."
  },
  {
    question: "Er kalkulatoren nøyaktig?",
    answer: "Kalkulatoren gir et estimat basert på gjennomsnittlige renter. Den faktiske renten du får tilbud om, settes individuelt av bankene etter en kredittvurdering. For et nøyaktig tilbud, anbefaler vi å sende inn en søknad."
  },
  {
    question: "Hva påvirker månedskostnaden på billån?",
    answer: "Månedskostnaden påvirkes av lånebeløp, rente, nedbetalingstid og eventuelle gebyrer. Høyere egenkapital gir lavere lånebeløp og dermed lavere månedskostnad."
  },
  {
    question: "Hva er forskjellen på nominell og effektiv rente?",
    answer: "Nominell rente er den rene lånerenten, mens effektiv rente inkluderer alle kostnader som etableringsgebyr, termingebyr og andre avgifter. Effektiv rente gir det mest realistiske bildet av totalkostnaden."
  },
  {
    question: "Hvor mye egenkapital bør jeg ha?",
    answer: "Det anbefales å ha minst 10-20% egenkapital for å få gunstigere rente. Men det er mulig å få billån uten egenkapital, selv om renten da kan være noe høyere."
  },
  {
    question: "Hva er beste nedbetalingstid for billån?",
    answer: "Det avhenger av din økonomi. Kortere nedbetalingstid gir høyere månedskostnad, men lavere totalkostnad. Lengre nedbetalingstid gir lavere månedskostnad, men høyere totalkostnad på grunn av mer renter."
  },
  {
    question: "Inkluderer kalkulatoren alle kostnader?",
    answer: "Kalkulatoren viser hovedsakelig renter og avdrag. Noen banker har etableringsgebyr, termingebyr og andre kostnader som ikke er inkludert i dette estimatet. Disse vil fremgå av det endelige lånetilbudet."
  },
  {
    question: "Kan jeg stole på resultatet fra kalkulatoren?",
    answer: "Kalkulatoren gir et godt estimat, men det endelige tilbudet fra bankene kan variere. Bruk kalkulatoren som et utgangspunkt for å planlegge økonomien din."
  }
];

export default function KalkulatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#004D61] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Gratis kalkulator
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
            Billånskalkulator
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bruk vår enkle kalkulator for å få et estimat på den månedlige kostnaden for ditt billån. 
            Juster kjøpesum, egenkapital og nedbetalingstid for å finne en plan som passer din økonomi.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <LoanCalculator />

      {/* Understanding Results */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#004D61] mb-8 text-center">
            Forstå resultatet fra kalkulatoren
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="text-lg leading-relaxed text-center">
              Kalkulatoren gir deg et estimat basert på gjennomsnittlige renter. Den endelige renten du får tilbud om, 
              settes individuelt av bankene etter en kredittvurdering. For å få et nøyaktig tilbud, anbefaler vi å 
              sende inn en uforpliktende søknad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#004D61] mb-3">
                Månedskostnad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dette er beløpet du betaler hver måned. Det inkluderer både avdrag og renter. 
                Husk at noen banker også har termingebyr som kommer i tillegg.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#FF6B35] mb-3">
                Totalkostnad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dette er det totale beløpet du betaler over hele låneperioden, inkludert alle renter. 
                Jo kortere nedbetalingstid, desto lavere totalkostnad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#10B981] mb-3">
                Rentekostnad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dette er hvor mye du betaler i renter over hele låneperioden. Lavere rente og kortere 
                nedbetalingstid gir lavere rentekostnad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="mb-4">
                <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3">
                Effektiv rente
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Effektiv rente inkluderer alle kostnader og gir det mest realistiske bildet av hva 
                lånet faktisk koster deg. Sammenlign alltid effektiv rente når du vurderer tilbud.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#lead-form" 
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Søk nå og få et nøyaktig lånetilbud
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Multi-step Form */}
      <MultiStepForm />

      {/* Trust Signals */}
      <TrustSignals />

      {/* FAQ */}
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billånskalkulator" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no/" },
            { "@type": "ListItem", "position": 2, "name": "Kalkulator", "item": "https://enkelfinansiering.no/kalkulator" }
          ]
        }) }}
      />
      <Footer />
    </main>
  );
}


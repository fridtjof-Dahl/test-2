import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import DarkBenefits from '@/components/DarkBenefits';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billån på dagen: Få raskt svar innen 24 timer | Enkel Finansiering',
  description: 'Trenger du billån raskt? Få et uforpliktende tilbud innen 24 timer og rask overlevering. Søk nå!',
};

const faqItems = [
  {
    question: "Hvor raskt kan jeg få billån?",
    answer: "Du får som regel svar på din søknad samme dag eller innen 24 timer. Når du har akseptert et tilbud og signert avtalen, kan pengene være overlevert til selger samme dag eller neste virkedag."
  },
  {
    question: "Hva trengs for å få svar samme dag?",
    answer: "Du må ha BankID, dokumentasjon på inntekt og være over 18 år. Søk tidlig på dagen for best sjanse for svar samme dag."
  },
  {
    question: "Kan jeg kjøpe bilen samme dag?",
    answer: "Ja, hvis du søker tidlig og får raskt svar fra vår samarbeidspartner, kan pengene være overlevert til selger samme dag, og du kan kjøre hjem med bilen."
  },
  {
    question: "Hvorfor er dere så raske?",
    answer: "Vi bruker digital søknadsprosess og vår samarbeidspartner har automatiserte kredittvurderingssystemer. Dette gjør at hele prosessen går mye raskere enn tradisjonell lånesøknad."
  },
  {
    question: "Koster det ekstra å få rask behandling?",
    answer: "Nei, rask behandling er standard hos oss. Tjenesten er 100% gratis og uforpliktende."
  },
  {
    question: "Hva hvis jeg søker sent på dagen?",
    answer: "Vår samarbeidspartner behandler søknader i åpningstiden. Hvis du søker sent, kan du få svar neste virkedag."
  }
];

export default function PaDagenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-6 py-3 mb-8 border border-orange-100">
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#004D61]">Rask behandling • Svar innen 24 timer</span>
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse delay-300"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
              Billån på dagen
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">
              Få finansiering raskt
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Har du funnet drømmebilen og trenger finansiering raskt? Med vårt effektive system får du et uforpliktende 
              tilbud innen 24 timer, og bilen kan være din kort tid etter.
              <span className="font-semibold text-[#FF6B35]"> 100% gratis og uforpliktende.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#lead-form" 
                className="group inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 min-h-[56px]"
              >
                <span>Søk billån nå</span>
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
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billån på dagen" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no/" },
            { "@type": "ListItem", "position": 2, "name": "Billån på dagen", "item": "https://enkelfinansiering.no/pa-dagen" }
          ]
        }) }}
      />
      <Footer />
    </main>
  );
}

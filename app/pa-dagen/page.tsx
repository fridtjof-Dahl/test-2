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
      <section className="relative bg-gradient-to-br from-[#FFF4E6] to-[#FFE4CC] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Rask behandling
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
            Billån på dagen
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Har du funnet drømmebilen og trenger finansiering raskt? Med vårt effektive system får du et uforpliktende 
            tilbud innen 24 timer, og bilen kan være din kort tid etter.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a 
              href="#lead-form" 
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

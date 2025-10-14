import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import DarkBenefits from '@/components/DarkBenefits';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billån på dagen: Få raskt svar og penger samme dag | Enkel Finansiering',
  description: 'Trenger du billån raskt? Få svar på søknaden din samme dag og pengene overleveres raskt. Søk nå og kjøp bilen i dag!',
};

const faqItems = [
  {
    question: "Hvor raskt kan jeg få billån?",
    answer: "De fleste banker gir svar innen 1-4 timer. Når du har akseptert et tilbud og signert avtalen, kan pengene være overlevert til selger samme dag eller neste virkedag."
  },
  {
    question: "Hva trengs for å få svar samme dag?",
    answer: "Du må ha BankID, dokumentasjon på inntekt og være over 18 år. Søk tidlig på dagen for best sjanse for svar samme dag."
  },
  {
    question: "Kan jeg kjøpe bilen samme dag?",
    answer: "Ja, hvis du søker tidlig og får raskt svar fra bankene, kan pengene være overlevert til selger samme dag, og du kan kjøre hjem med bilen."
  },
  {
    question: "Hvorfor er dere så raske?",
    answer: "Vi bruker digital søknadsprosess og bankene har automatiserte kredittvurderingssystemer. Dette gjør at hele prosessen går mye raskere enn tradisjonell lånesøknad."
  },
  {
    question: "Koster det ekstra å få rask behandling?",
    answer: "Nei, rask behandling er standard hos oss. Tjenesten er 100% gratis og uforpliktende."
  },
  {
    question: "Hva hvis jeg søker sent på dagen?",
    answer: "Bankene behandler søknader i åpningstiden. Hvis du søker sent, kan du få svar neste virkedag."
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
            Har du funnet drømmebilen og trenger finansiering raskt? Med vårt effektive system får du svar på søknaden 
            din samme dag, og bilen kan være din innen 24 timer.
          </p>
          <a 
            href="#lead-form" 
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            Søk billån nå →
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004D61] mb-4">
              Fra søknad til overlevering
            </h2>
            <p className="text-xl text-gray-600">
              Se hvor raskt det går
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-2xl font-bold text-[#FF6B35]">0 min</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#FF6B35] rounded-full mt-2"></div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-bold text-[#004D61] mb-2">Du sender søknaden</h3>
                <p className="text-gray-600">Fyll ut vårt enkle skjema med BankID</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-2xl font-bold text-[#FF6B35]">2 min</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#FF6B35] rounded-full mt-2"></div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-bold text-[#004D61] mb-2">Vi sender til bankene</h3>
                <p className="text-gray-600">Søknaden din sendes automatisk til våre partnerbanker</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-2xl font-bold text-[#FF6B35]">1-4 timer</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#FF6B35] rounded-full mt-2"></div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-bold text-[#004D61] mb-2">Du mottar tilbud</h3>
                <p className="text-gray-600">Bankene vurderer søknaden og sender deg tilbud samme dag</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-2xl font-bold text-[#FF6B35]">5 min</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#FF6B35] rounded-full mt-2"></div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-bold text-[#004D61] mb-2">Du signerer med BankID</h3>
                <p className="text-gray-600">Velg beste tilbud og signer avtalen digitalt</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-2xl font-bold text-[#10B981]">24 timer</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#10B981] rounded-full mt-2"></div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-bold text-[#004D61] mb-2">Pengene overleveres raskt</h3>
                <p className="text-gray-600">Du kan kjøpe bilen samme dag eller neste virkedag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <DarkBenefits />
      <MultiStepForm />
      <TrustSignals />
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billån på dagen" />
      <Footer />
    </main>
  );
}

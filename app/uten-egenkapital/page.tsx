import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import DarkBenefits from '@/components/DarkBenefits';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billån uten egenkapital: 100% finansiering | Enkel Finansiering',
  description: 'Trenger du billån uten egenkapital? Vi hjelper deg med 100% finansiering. Få et uforpliktende tilbud innen 24 timer. Gratis og uforpliktende.',
};

const faqItems = [
  {
    question: "Kan jeg få billån uten egenkapital?",
    answer: "Ja, det er fullt mulig å få billån uten egenkapital. Mange banker tilbyr 100% finansiering, men renten kan være noe høyere enn hvis du har egenkapital."
  },
  {
    question: "Hva er kravene for å få billån uten egenkapital?",
    answer: "Du må ha fast inntekt, god kredittverdighet og være over 18 år. Bankene vil vurdere din betalingsevne og kredittscore før de godkjenner lånet."
  },
  {
    question: "Er renten høyere uten egenkapital?",
    answer: "Ja, renten er ofte noe høyere når du låner 100% av kjøpesummen. Dette fordi vår samarbeidspartner tar større risiko. Men du kan fortsatt få en konkurransedyktig rente."
  },
  {
    question: "Hvor mye kan jeg låne uten egenkapital?",
    answer: "Det avhenger av din inntekt og betalingsevne. Vår samarbeidspartner låner ut opptil 5-6 ganger brutto månedsinntekt, men dette vurderes individuelt."
  },
  {
    question: "Hvilke banker tilbyr billån uten egenkapital?",
    answer: "Vår samarbeidspartner tilbyr billån uten egenkapital. Vi sender søknaden din til vår samarbeidspartner, som gir deg et tilpasset tilbud basert på din situasjon."
  },
  {
    question: "Må jeg ha kaskoforsikring ved 100% finansiering?",
    answer: "Ja, vår samarbeidspartner krever kaskoforsikring når du låner 100% av bilens verdi. Dette er for å sikre investeringen i tilfelle ulykke eller skade."
  }
];

export default function UtenEgenkapitalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8F8F0] to-[#D1F4E0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#10B981] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            100% finansiering
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
            Billån uten egenkapital
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Drømmer du om ny bil, men mangler egenkapital? Vi hjelper deg med 100% finansiering. 
            Få et uforpliktende tilbud innen 24 timer.
          </p>
          <a 
            href="#lead-form" 
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            Søk billån uten egenkapital →
          </a>
        </div>
      </section>

      <HowItWorks />
      <DarkBenefits />
      <MultiStepForm />
      <TrustSignals />
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billån uten egenkapital" />
      <Footer />
    </main>
  );
}

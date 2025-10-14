import Header from '@/components/Header';
import ImprovedHero from '@/components/ImprovedHero';
import LoanCalculator from '@/components/LoanCalculator';
import HowItWorks from '@/components/HowItWorks';
import DarkBenefits from '@/components/DarkBenefits';
import MultiStepForm from '@/components/MultiStepForm';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billån: Søk hos flere banker og få beste rente | Enkel Finansiering',
  description: 'Trenger du billån? Hos Enkel Finansiering kan du søke hos flere banker med én gratis søknad. Få raskt svar, lav rente og personlig hjelp. Søk i dag!',
};

const faqItems = [
  {
    question: "Hva er billån?",
    answer: "Billån er et forbrukslån som brukes spesifikt til å finansiere kjøp av bil. Det kan være både ny og brukt bil, og lånet kan dekke hele eller deler av kjøpesummen."
  },
  {
    question: "Hvordan søker jeg billån?",
    answer: "Du fyller ut vårt enkle skjema med informasjon om ønsket lånebeløp og nedbetalingstid. Vi sender søknaden til flere banker samtidig, og du får tilbud tilbake samme dag."
  },
  {
    question: "Hvilken rente kan jeg forvente på billån?",
    answer: "Renten varierer fra bank til bank og avhenger av din kredittverdighet. Typisk ligger renten på billån mellom 3-8%. Ved å la flere banker konkurrere om deg, sikrer du deg den laveste renten."
  },
  {
    question: "Kan jeg få billån uten egenkapital?",
    answer: "Ja, det er mulig å få 100% finansiering på billån. Mange banker tilbyr dette, men renten kan være noe høyere enn hvis du har egenkapital. Vi hjelper deg å finne banker som tilbyr fullfinansiering."
  },
  {
    question: "Hvor lang tid tar det å få svar på søknaden?",
    answer: "De fleste banker gir svar innen 1-4 timer. I mange tilfeller får du tilbud samme dag som du søker. Når du har akseptert et tilbud, kan pengene være overlevert til selger innen 24 timer."
  },
  {
    question: "Koster det noe å søke?",
    answer: "Nei, tjenesten vår er 100% gratis og uforpliktende. Du betaler ingenting for å søke, og du er ikke forpliktet til å akseptere noen av tilbudene du får."
  },
  {
    question: "Hvilke banker samarbeider dere med?",
    answer: "Vi samarbeider med de fleste banker i Norge som tilbyr billån. Dette inkluderer både store og små banker, slik at du får et bredt utvalg av tilbud å velge mellom."
  },
  {
    question: "Påvirker søknaden kredittscore min?",
    answer: "Når du søker gjennom oss, gjøres det en myk kredittvurdering som ikke påvirker kredittscore din. Først når du velger å akseptere et tilbud og signerer avtalen, gjøres det en hard kredittsjekk."
  },
  {
    question: "Kan jeg betale ned lånet før tiden?",
    answer: "Ja, de fleste billån kan nedbetales før tiden. Noen banker kan ha et gebyr for førtidig innfrielse, men dette varierer. Vi anbefaler å sjekke vilkårene i lånetilbudet."
  },
  {
    question: "Hva skjer hvis jeg ikke får godkjent lån?",
    answer: "Hvis ingen av bankene godkjenner søknaden din, får du beskjed om dette. Vi kan gi deg råd om hva du kan gjøre for å forbedre mulighetene dine, som å øke egenkapitalen eller forbedre kredittscore."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ImprovedHero />
      <LoanCalculator />
      <HowItWorks />
      <DarkBenefits />
      <MultiStepForm />
      <TrustSignals />
      <FAQ items={faqItems} title="Ofte stilte spørsmål om billån" />
      <Footer />
    </main>
  );
}


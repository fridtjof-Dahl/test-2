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
    answer: "Vår samarbeidspartner kontakter deg, og du får et uforpliktende tilbud innen 24 timer."
  },
  {
    question: "Hvilken rente kan jeg forvente på billån?",
    answer: "Typisk rente ligger mellom 7,8% og 9,2%."
  },
  {
    question: "Kan jeg få billån uten egenkapital?",
    answer: "Ja, det er mulig å få 100% finansiering på billån. Mange banker tilbyr dette, men renten kan være noe høyere enn hvis du har egenkapital. Vi hjelper deg å finne banker som tilbyr fullfinansiering."
  },
  {
    question: "Hvor lang tid tar det å få svar på søknaden?",
    answer: "De fleste banker gir svar innen 1-4 timer. Vanligvis får du et uforpliktende tilbud innen 24 timer. Når du har akseptert et tilbud, kan pengene overleveres til selger kort tid etter."
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

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hvordan søker jeg billån?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vår samarbeidspartner kontakter deg, og du får et uforpliktende tilbud innen 24 timer."
      }
    },
    {
      "@type": "Question",
      "name": "Hvilken rente kan jeg forvente på billån?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typisk rente ligger mellom 7,8% og 9,2%."
      }
    }
  ]
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Hjem",
      "item": "https://enkelfinansiering.no/"
    }
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Enkel Finansiering",
  "url": "https://enkelfinansiering.no/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://enkelfinansiering.no/sok?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <Footer />
    </main>
  );
}


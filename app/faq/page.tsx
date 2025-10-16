import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Ofte Stilte Spørsmål om Billån | FAQ | Enkel Finansiering',
  description: 'Få svar på alle spørsmål om billån, renter, egenkapital, søknadsprosess og mer. Komplett FAQ med ekspertsvar fra Enkel Finansiering.',
  keywords: [
    'billån FAQ',
    'billån spørsmål',
    'billån svar',
    'billån hjelp',
    'billån veiledning',
    'billån ekspertsvar',
    'billån ofte stilte spørsmål',
    'billån hjelp og støtte'
  ],
  openGraph: {
    title: 'Ofte Stilte Spørsmål om Billån | FAQ',
    description: 'Få svar på alle spørsmål om billån, renter, egenkapital, søknadsprosess og mer.',
    type: 'website',
    url: 'https://enkelfinansiering.no/faq',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/faq',
  },
};

const faqCategories = [
  {
    title: 'Grunnleggende om Billån',
    questions: [
      {
        question: 'Hva er et billån?',
        answer: 'Et billån er et lån som er sikret med pant i bilen du kjøper. Dette betyr at banken har rett til å overta bilen hvis du ikke betaler lånet. Fordi lånet er sikret, får du mye lavere rente enn på usikrede lån som forbrukslån.'
      },
      {
        question: 'Hva er forskjellen mellom billån og forbrukslån?',
        answer: 'Billån har pant i bilen og gir derfor lavere rente (typisk 6-8%). Forbrukslån er usikret og har høyere rente (typisk 10-20%). Billån er alltid det beste valget når du skal kjøpe bil.'
      },
      {
        question: 'Hvor mye kan jeg låne til bil?',
        answer: 'Du kan låne opptil 100% av bilens verdi, men 20-35% egenkapital gir ofte de beste betingelsene. Belåningsgraden avhenger av bilens alder, merke og din økonomiske situasjon.'
      }
    ]
  },
  {
    title: 'Renter og Kostnader',
    questions: [
      {
        question: 'Hva er nominell rente?',
        answer: 'Nominell rente er grunnrenten på lånet uten gebyrer. Dette er den renten som brukes til å beregne månedlige betalinger.'
      },
      {
        question: 'Hva er effektiv rente?',
        answer: 'Effektiv rente inkluderer alle gebyrer som etableringsgebyr og termingebyr. Denne renten viser den reelle kostnaden på lånet og er det du bør sammenligne når du vurderer ulike tilbud.'
      },
      {
        question: 'Hvilke gebyrer kan jeg forvente?',
        answer: 'Vanlige gebyrer inkluderer etableringsgebyr (0-5000 kr), termingebyr (0-50 kr per termin), og eventuelt innfrielsesgebyr hvis du betaler lånet tidlig.'
      }
    ]
  },
  {
    title: 'Søknadsprosess',
    questions: [
      {
        question: 'Hvor lang tid tar det å få svar på billånsøknad?',
        answer: 'Vår samarbeidspartner gir deg et uforpliktende tilbud innen 24 timer. Den faktiske godkjenningen kan ta 1-3 virkedager avhengig av kompleksiteten i søknaden.'
      },
      {
        question: 'Hvilke dokumenter trenger jeg?',
        answer: 'Du trenger ID, inntektsdokumenter (lønnslipp eller selvangivelse), og informasjon om bilen du skal kjøpe. For selvstendig næringsdrivende kan det kreves årsregnskap.'
      },
      {
        question: 'Kan jeg søke om billån uten egenkapital?',
        answer: 'Ja, du kan få billån helt uten egenkapital (100% finansiering). Dette kan imidlertid gi høyere rente og strengere krav til inntekt og kredittscore.'
      }
    ]
  },
  {
    title: 'Bil og Sikkerhet',
    questions: [
      {
        question: 'Trenger jeg kaskoforsikring på billån?',
        answer: 'De fleste banker krever kaskoforsikring ved høy belåningsgrad. For eldre og billigere biler kan du få kaskofritt billån. Dette sparer deg for tusenvis av kroner årlig.'
      },
      {
        question: 'Kan jeg selge bilen før lånet er nedbetalt?',
        answer: 'Ja, men du må innfri lånet samtidig. Dette gjøres vanligvis ved at kjøper betaler til banken først, som så sletter pantet, før resten overføres til deg.'
      },
      {
        question: 'Hvilke biler kvalifiserer for billån?',
        answer: 'De fleste biler kvalifiserer, men alder og verdi påvirker betingelsene. Biler eldre enn 10-15 år kan være vanskeligere å finansiere, og billigere biler kan ha kortere nedbetalingstid.'
      }
    ]
  },
  {
    title: 'Refinansiering og Endringer',
    questions: [
      {
        question: 'Kan jeg refinansiere billånet mitt?',
        answer: 'Ja, du kan refinansiere til en annen bank med bedre rente. Dette kan spare deg for tusenvis av kroner. Sjekk om din nåværende bank har innfrielsesgebyr før du refinansierer.'
      },
      {
        question: 'Kan jeg betale ekstra på billånet?',
        answer: 'Ja, du kan når som helst betale ekstra eller innfri lånet helt uten ekstra kostnad. Dette kan redusere rentekostnadene betydelig.'
      },
      {
        question: 'Hva skjer hvis jeg ikke kan betale billånet?',
        answer: 'Kontakt banken umiddelbart hvis du får betalingsproblemer. De kan tilby betalingsutsettelse eller omlegging. I verste fall kan banken ta bilen i beslag og selge den for å dekke gjelden.'
      }
    ]
  }
];

export default function FAQPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'FAQ' }
  ];

  return (
    <>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/50">
              <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Ekspertsvar</span>
            </div>
            
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#004D61] via-[#006B7D] to-[#004D61] bg-clip-text text-transparent mb-6">
              Ofte Stilte Spørsmål
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Få svar på alle spørsmål om billån, renter, egenkapital og mer. 
              <span className="font-semibold text-[#FF6B35]"> Komplett FAQ med ekspertsvar.</span>
            </p>
          </div>

          {/* FAQ Content */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <h2 className="text-3xl font-bold text-[#004D61] mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Fant du ikke svaret du lette etter?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Våre eksperter hjelper deg gjerne med alle spørsmål om billån
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kontakt oss
                </a>
                <a 
                  href="#lead-form" 
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 border border-white/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Søk billån
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

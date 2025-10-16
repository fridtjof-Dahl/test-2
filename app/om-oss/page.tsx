import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Om Enkel Finansiering | Vår Historie og Misjon | Billån Eksperter',
  description: 'Lær mer om Enkel Finansiering, vår historie og misjon. Vi hjelper norske bilkjøpere med å finne det beste billånet siden 2020.',
  keywords: [
    'om enkel finansiering',
    'billån eksperter',
    'finansiering historie',
    'billån samarbeidspartner',
    'norsk billån',
    'billån team',
    'finansiering misjon'
  ],
  openGraph: {
    title: 'Om Enkel Finansiering | Vår Historie og Misjon',
    description: 'Lær mer om Enkel Finansiering, vår historie og misjon. Vi hjelper norske bilkjøpere med å finne det beste billånet.',
    type: 'website',
    url: 'https://enkelfinansiering.no/om-oss',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/om-oss',
  },
};

const teamMembers = [
  {
    name: 'Fridtjof Hansen',
    role: 'Grunnlegger & CEO',
    bio: 'Over 10 års erfaring fra finansbransjen. Tidligere ansatt i store norske banker med spesialisering på billån og kredittvurdering.',
    image: '/team/fridtjof.jpg',
    expertise: ['Billån', 'Kredittvurdering', 'Banking']
  },
  {
    name: 'Sarah Chen',
    role: 'Finansanalytiker',
    bio: 'Ekspert på rentemarkeder og låneberegninger. Hjelper kunder med å forstå komplekse finansielle produkter på en enkel måte.',
    image: '/team/sarah.jpg',
    expertise: ['Renteanalyse', 'Låneberegning', 'Markedsanalyse']
  },
  {
    name: 'Erik Johansen',
    role: 'Kundesuksess Manager',
    bio: 'Dedikert til å sikre at hver kunde får den beste opplevelsen. Spesialisert på å matche kunder med riktige lånetilbud.',
    image: '/team/erik.jpg',
    expertise: ['Kundeservice', 'Lånematching', 'Prosesstilpasning']
  }
];

const milestones = [
  {
    year: '2020',
    title: 'Grunnlagt',
    description: 'Enkel Finansiering ble grunnlagt med visjonen om å gjøre billån enkelt og transparent for alle norske bilkjøpere.'
  },
  {
    year: '2021',
    title: '1000 Kunder',
    description: 'Vi hjalp våre første 1000 kunder med å finne det perfekte billånet. Dette bekreftet at vår tilnærming fungerte.'
  },
  {
    year: '2022',
    title: 'Samarbeidspartner',
    description: 'Etablerte strategisk samarbeid med ledende norsk bank for å kunne tilby de beste lånevilkårene til våre kunder.'
  },
  {
    year: '2023',
    title: 'Verktøy Plattform',
    description: 'Lanserte vår avanserte verktøy-plattform med kalkulatorer og sammenligningsverktøy for bedre kundeopplevelse.'
  },
  {
    year: '2024',
    title: '10,000+ Kunder',
    description: 'Nådd milepælen med over 10,000 fornøyde kunder som har fått hjelp med billån gjennom vår plattform.'
  },
  {
    year: '2025',
    title: 'Fremtiden',
    description: 'Fortsetter innovasjonen med nye verktøy, bedre teknologier og utvidet samarbeid for å gjøre billån enda enklere.'
  }
];

export default function OmOssPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Om oss' }
  ];

  return (
    <>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#004D61]">Vår historie siden 2020</span>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse delay-300"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
                Om Enkel Finansiering
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-8">
                Norges enkleste vei til billån
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Vi hjelper norske bilkjøpere med å finne det beste billånet siden 2020. 
                <span className="font-semibold text-[#FF6B35]"> Over 10,000 fornøyde kunder kan ikke ta feil.</span>
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Vår Historie */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-[#004D61] mb-8 text-center">Vår Historie</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Enkel Finansiering ble grunnlagt i 2020 med en enkel visjon: å gjøre billån enkelt og transparent for alle norske bilkjøpere. 
                Vi så at mange kunder sliter med å forstå komplekse lånevilkår og finne de beste tilbudene i markedet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                I dag hjelper vi over 10,000 kunder årlig med å finne det perfekte billånet. Vår plattform kombinerer 
                ekspertise fra finansbransjen med moderne teknologi for å gi deg den beste mulige opplevelsen.
              </p>
            </div>
          </section>

          {/* Milepæler */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#004D61] mb-12 text-center">Vår Reise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-4">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-[#004D61] mb-3">{milestone.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hvordan vi jobber */}
          <section className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
              <h2 className="text-4xl font-bold text-[#004D61] mb-8 text-center">Hvordan vi jobber</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#E55A25] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D61] mb-4">Transparent</h3>
                  <p className="text-gray-700">Vi forklarer alt på en enkel måte. Ingen skjulte kostnader eller overraskelser.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D61] mb-4">Raskt</h3>
                  <p className="text-gray-700">Få svar innen 24 timer. Vår samarbeidspartner behandler søknader raskt og effektivt.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D61] mb-4">Personlig</h3>
                  <p className="text-gray-700">Hver kunde får personlig oppfølging og tilpassede løsninger for deres situasjon.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Våre Verdier */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#004D61] mb-12 text-center">Våre Verdier</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#004D61] mb-4">Kundefokus</h3>
                <p className="text-gray-700 leading-relaxed">
                  Våre kunder står alltid i sentrum. Vi lytter til dine behov og tilpasser vår tjeneste for å gi deg den beste mulige opplevelsen.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#004D61] mb-4">Integritet</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi jobber alltid med høyest etiske standarder. Ingen skjulte kostnader, ingen overraskelser - bare ærlig og transparent service.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#004D61] mb-4">Innovasjon</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi bruker moderne teknologi og kontinuerlig forbedring for å gjøre billån-prosessen enklere og mer effektiv.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#004D61] mb-4">Ekspertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vårt team har dyp kunnskap om finansbransjen og hjelper deg med å ta de beste beslutningene for din økonomi.
                </p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#004D61] mb-12 text-center">Vårt Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D61] mb-2">{member.name}</h3>
                  <p className="text-[#FF6B35] font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-[#E8F4F8] text-[#004D61] text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tall som bygger tillit */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-12 text-center">Tall som bygger tillit</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-lg opacity-90">Fornøyde kunder</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24t</div>
                  <div className="text-lg opacity-90">Svar på søknader</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.9/5</div>
                  <div className="text-lg opacity-90">Kundetilfredshet</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-lg opacity-90">Godkjenningsrate</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
              <h2 className="text-3xl font-bold text-[#004D61] mb-4">
                Klar til å finne ditt perfekte billån?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                La oss hjelpe deg med å finne det beste lånetilbudet for din situasjon
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#lead-form" 
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Søk billån nå
                </a>
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#004D61] font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg border border-[#004D61]/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kontakt oss
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
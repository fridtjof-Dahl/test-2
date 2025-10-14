export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Du sparer penger',
      description: 'Ved å la bankene konkurrere om deg, sikrer du deg den laveste mulige renten.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#10B981"/>
          <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M24 18v12M18 24h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Du sparer tid',
      description: 'Glem alt av papirarbeid og møter. Én søknad er alt som skal til.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#3B82F6"/>
          <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M24 18v6l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Trygt og enkelt',
      description: 'Vi bruker BankID for sikker identifisering og signering.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#8B5CF6"/>
          <rect x="18" y="20" width="12" height="10" rx="1" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M20 20v-3a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Personlig hjelp',
      description: 'Våre erfarne rådgivere er tilgjengelige for å hjelpe deg med å velge riktig lån.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#F59E0B"/>
          <circle cx="24" cy="20" r="5" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M14 34c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: '100% gratis',
      description: 'Tjenesten er helt kostnadsfri og uforpliktende.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#EF4444"/>
          <path d="M18 26l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Raskt svar',
      description: 'Få svar på søknaden din innen 24 timer.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#06B6D4"/>
          <path d="M24 14l-2 10h8l-6 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004D61] mb-4">
            Trygt og enkelt
          </h2>
          <p className="text-xl text-gray-600">
            Vi gjør billån enkelt, trygt og lønnsomt
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#004D61] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#lead-form" 
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Få et uforpliktende tilbud
          </a>
        </div>
      </div>
    </section>
  );
}


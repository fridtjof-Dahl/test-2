export default function DarkBenefits() {
  const benefits = [
    {
      title: 'Tilbud innen 24 timer',
      description: 'Få et uforpliktende tilbud innen 24 timer fra vår samarbeidspartner – enkelt og forutsigbart.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#10B981" opacity="0.2"/>
          <path d="M32 16L40 28H24L32 16Z" fill="#10B981"/>
          <rect x="28" y="28" width="8" height="20" fill="#10B981"/>
          <path d="M20 40L32 28L44 40" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Du har 100% kontroll',
      description: 'Du bestemmer selv om du vil akseptere tilbudet. Ingen forpliktelser før du har signert kjøpsavtale og lånedokumenter med BankID.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#10B981" opacity="0.2"/>
          <path d="M24 32l6 6 10-12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="16" stroke="#10B981" strokeWidth="2"/>
        </svg>
      )
    },
    // Removed previous point 3 entirely
    {
      title: 'Du bestemmer lånegrad',
      description: 'Velg selv om du vil kjøpe med egenkapital eller ikke. Søknader kan sendes inn med kr 0 i egenkapital, og behandling avgjør om det trengs egenandel.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#10B981" opacity="0.2"/>
          <rect x="20" y="24" width="24" height="16" rx="2" stroke="#10B981" strokeWidth="2"/>
          <circle cx="32" cy="32" r="4" fill="#10B981"/>
          <path d="M32 20v4M32 40v4" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#003847] via-[#004D61] to-[#003847]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Derfor velger kunder oss
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Vi hjelper kunder å realisere sin drømmebil – raskt og enkelt.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center w-full max-w-sm h-full flex flex-col rounded-2xl border border-white/10 p-6 md:p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-white/20">
              <div className="flex justify-center mb-5 md:mb-6">
                {benefit.icon}
              </div>
              <div className="flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#10B981] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed mt-1 md:mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function DarkBenefits() {
  const benefits = [
    {
      title: 'Tilbud innen 24 timer',
      description: 'Få et uforpliktende tilbud innen 24 timer fra vår samarbeidspartner – enkelt og forutsigbart.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Du har 100% kontroll',
      description: 'Du bestemmer selv om du vil akseptere tilbudet. Ingen forpliktelser før du har signert kjøpsavtale og lånedokumenter med BankID.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Du bestemmer lånegrad',
      description: 'Velg selv om du vil kjøpe med egenkapital eller ikke. Søknader kan sendes inn med kr 0 i egenkapital, og behandling avgjør om det trengs egenandel.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative hero-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004D61] mb-6">
            Derfor velger kunder oss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi hjelper kunder å realisere sin drømmebil - raskt og enkelt
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 h-full">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#004D61] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#004D61] mb-4 text-center group-hover:text-[#FF6B35] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
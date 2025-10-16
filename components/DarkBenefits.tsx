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
    <section className="relative bg-gradient-to-br from-[#004D61] via-[#006B7D] to-[#003847] py-32 md:py-36 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#FF6B35]/20 to-[#E55A24]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Minimal, responsive fades */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-sm font-semibold text-white">⭐ Kundeanbefalinger</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Derfor velger kunder oss
          </h2>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Vi hjelper kunder å realisere sin drømmebil – raskt og enkelt ✨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-white/30 h-full relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#004D61]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#E55A24] rounded-3xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#004D61] mb-6 text-center group-hover:text-[#FF6B35] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#FF6B35]/20 to-[#E55A24]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#004D61] to-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft fade to white to ensure perfect transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-0"></div>
    </section>
  );
}
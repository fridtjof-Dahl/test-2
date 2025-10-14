export default function DarkBenefits() {
  const benefits = [
    {
      title: 'Få bud fra hele Norge',
      description: 'Vi sender søknaden din til flere banker samtidig, slik at de konkurrerer om å gi deg det beste tilbudet.',
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
      description: 'Du bestemmer selv om du vil akseptere tilbudet. Ingen forpliktelser før du har signert avtalen med BankID.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#10B981" opacity="0.2"/>
          <path d="M24 32l6 6 10-12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="16" stroke="#10B981" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Maksimal eksponering',
      description: 'Vi sørger for at søknaden din når ut til både store og små banker, slik at du får det bredeste utvalget av tilbud.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#10B981" opacity="0.2"/>
          <circle cx="32" cy="32" r="4" fill="#10B981"/>
          <circle cx="32" cy="32" r="12" stroke="#10B981" strokeWidth="2" opacity="0.6"/>
          <circle cx="32" cy="32" r="20" stroke="#10B981" strokeWidth="2" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Du bestemmer minstepris',
      description: 'Sett din egen minstepris og vi jobber for å finne et tilbud som matcher dine forventninger og behov.',
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
    <section className="py-24 bg-[#003847]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Derfor velger tusenvis Enkel Finansiering
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Vi har hjulpet over 10 000 nordmenn med å finne det beste billånet. Her er hvorfor de valgte oss.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
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
              <p className="text-blue-100 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


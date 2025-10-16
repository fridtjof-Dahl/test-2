export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Fyll ut søknaden',
      description: 'Det tar kun 2 minutter å fylle ut vårt enkle, digitale skjema med grunnleggende informasjon.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="12" fill="#E8F4F8"/>
          <path d="M20 24h24M20 32h24M20 40h16" stroke="#004D61" strokeWidth="3" strokeLinecap="round"/>
          <rect x="16" y="16" width="32" height="36" rx="2" stroke="#004D61" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Motta tilbud',
      description: 'Vi sender søknaden din til vår samarbeidspartner. Du mottar et tilbud innen kort tid.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="12" fill="#FFF4E6"/>
          <rect x="16" y="24" width="32" height="24" rx="2" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M16 28h32" stroke="#FF6B35" strokeWidth="2"/>
          <path d="M24 20l8 8 8-8" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Velg lån og kjøp bil',
      description: 'Velg det billånet som passer deg best og signer avtalen digitalt med BankID. Vår partner hjelper deg med hele kjøpet.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="12" fill="#E8F8F0"/>
          <path d="M44 28L28 44L20 36" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="16" stroke="#10B981" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#FF6B35] rounded-full opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#004D61] rounded-full opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FF6B35] text-white rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-sm font-semibold">✨ Enkelt og raskt</span>
          </div>
          <h2 className="text-5xl font-bold text-[#004D61] mb-6">
            Slik fungerer det
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            3 enkle steg til din nye bil 🚗
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Clean number badge */}
              <div className="absolute -top-6 -right-6 z-20 w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 border-4 border-white">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>

              {/* Clean card design */}
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full relative">
                <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#004D61] mb-6 text-center group-hover:text-[#FF6B35] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#FF6B35] text-3xl font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


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
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#FF6B35]/10 to-[#E55A24]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#004D61]/10 to-[#006B7D]/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/50">
            <span className="text-sm font-semibold text-[#004D61]">✨ Enkelt og raskt</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#004D61] via-[#006B7D] to-[#004D61] bg-clip-text text-transparent mb-6">
            Slik fungerer det
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            3 enkle steg til din nye bil 🚗
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Enhanced number badge with animation */}
              <div className="absolute -top-6 -right-6 z-20 w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E55A24] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-4 border-white">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>

              {/* Enhanced card with better visual appeal */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-4 border border-white/50 h-full relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#004D61]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
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
                
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#FF6B35]/20 to-[#E55A24]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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


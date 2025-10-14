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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004D61] mb-4">
            Slik fungerer det
          </h2>
          <p className="text-xl text-gray-600">
            3 enkle steg til finansiering
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div className="mb-6 flex justify-center">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-[#004D61] mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
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


'use client';

import { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanAmount: 250000,
    loanTerm: 5,
    name: '',
    email: '',
    phone: '',
    registrationNumber: '',
    adUrl: ''
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Takk for søknaden! Vi kontakter deg snart.');
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004D61] mb-2">
              Søk om billån nå
            </h2>
            <p className="text-gray-600">
              Steg {step} av {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-[#FF6B35] h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span className={step >= 1 ? 'text-[#FF6B35] font-semibold' : ''}>Lånebeløp</span>
              <span className={step >= 2 ? 'text-[#FF6B35] font-semibold' : ''}>Nedbetalingstid</span>
              <span className={step >= 3 ? 'text-[#FF6B35] font-semibold' : ''}>Kontaktinfo</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Loan Amount */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-[#004D61] mb-4">
                    Hvor mye vil du låne?
                  </label>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[#FF6B35] mb-2">
                      {formData.loanAmount.toLocaleString('nb-NO')} kr
                    </div>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>50 000 kr</span>
                    <span>1 000 000 kr</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Loan Term */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-[#004D61] mb-4">
                    Hvor lang nedbetalingstid ønsker du?
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((years) => (
                      <button
                        key={years}
                        type="button"
                        onClick={() => setFormData({ ...formData, loanTerm: years })}
                        className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                          formData.loanTerm === years
                            ? 'bg-[#FF6B35] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {years} år
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Estimert månedskostnad:</strong> {Math.round((formData.loanAmount * 1.05) / (formData.loanTerm * 12)).toLocaleString('nb-NO')} kr/mnd
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      *Beregnet med 5% rente. Faktisk rente settes av banken.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Fullt navn
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="Ola Nordmann"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    E-postadresse
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="ola@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="123 45 678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Registreringsnummer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.registrationNumber}
                    onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value.toUpperCase() })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="AB12345"
                    maxLength={7}
                  />
                  <p className="text-xs text-gray-500 mt-1">Registreringsnummer på bilen du ønsker lån til</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Lenke til annonse <span className="text-gray-400">(valgfritt)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.adUrl}
                    onChange={(e) => setFormData({ ...formData, adUrl: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="https://finn.no/..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Hvis du har funnet bilen på Finn.no eller lignende</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
                >
                  ← Tilbake
                </button>
              )}
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-4 px-6 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Neste steg →
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Send søknad →
                </button>
              )}
            </div>

            {/* Micro-copy */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                💡 Tar kun 2 minutter • Ingen kredittvurdering før du godkjenner
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


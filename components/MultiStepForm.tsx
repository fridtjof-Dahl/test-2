'use client';

import { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    itemPrice: 300000,
    loanAmount: 250000,
    loanTerm: 10,
    name: '',
    email: '',
    phone: '',
    registrationNumber: '',
    kilometers: '',
    warranty: 'none',
    adUrl: '',
    consent: false,
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

  const interestRate = 0.092; // 9.2% nominell
  const monthlyRate = interestRate / 12;
  const months = Math.max(1, formData.loanTerm * 12);
  const principal = Math.max(0, formData.loanAmount);
  const monthlyPayment = principal > 0
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    : 0;

  const warranties = {
    none: { label: 'Ingen garanti', price: 0 },
    y1: { label: '1 år', price: 11700 },
    y2: { label: '2 år', price: 18720 },
    y3: { label: '3 år', price: 24570 },
  } as const;

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
            {/* Step 1: Item price and Loan Amount */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-[#004D61] mb-4">
                    Gjenstandspris
                  </label>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[#FF6B35] mb-2">
                      {formData.itemPrice.toLocaleString('nb-NO')} kr
                    </div>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={formData.itemPrice}
                    onChange={(e) => setFormData({ ...formData, itemPrice: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>50 000 kr</span>
                    <span>1 000 000 kr</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-[#004D61] mb-4">
                    Lånebeløp
                  </label>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[#FF6B35] mb-2">
                      {formData.loanAmount.toLocaleString('nb-NO')} kr
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={formData.itemPrice}
                    step="10000"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>0 kr</span>
                    <span>{formData.itemPrice.toLocaleString('nb-NO')} kr</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Egenkapital:</strong> {(Math.max(0, formData.itemPrice - formData.loanAmount)).toLocaleString('nb-NO')} kr
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Loan Term slider */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-[#004D61] mb-4">Nedbetalingstid</label>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    step={1}
                    value={formData.loanTerm}
                    onChange={(e) => setFormData({ ...formData, loanTerm: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>0 år</span>
                    <span>{formData.loanTerm} år</span>
                    <span>10 år</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Estimert månedskostnad:</strong> {Math.round(monthlyPayment).toLocaleString('nb-NO')} kr/mnd
                    </p>
                    <p className="text-xs text-gray-600 mt-1">Beregnet med 9,2% nominell rente</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info and vehicle details */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Fullt navn <span className="text-red-500">*</span>
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
                    E-postadresse <span className="text-red-500">*</span>
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
                    Telefonnummer <span className="text-red-500">*</span>
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
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">Kilometerstand <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={formData.kilometers}
                    onChange={(e) => setFormData({ ...formData, kilometers: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="124 000"
                  />
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
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">Bruktbilgaranti <span className="text-gray-400">(valgfritt)</span></label>
                  <select
                    value={formData.warranty}
                    onChange={(e) => setFormData({ ...formData, warranty: e.target.value as any })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                  >
                    <option value="none">Ingen garanti (kr 0)</option>
                    <option value="y1">1 år (kr 11 700)</option>
                    <option value="y2">2 år (kr 18 720)</option>
                    <option value="y3">3 år (kr 24 570)</option>
                  </select>
                  <div className="mt-2 text-sm text-gray-700">
                    <p><strong>Totalpris for garanti:</strong> {warranties[formData.warranty as keyof typeof warranties].price.toLocaleString('nb-NO')} kr</p>
                    <p><strong>Månedspris inkludert i lån:</strong> {Math.round((warranties[formData.warranty as keyof typeof warranties].price * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)) || 0).toLocaleString('nb-NO')} kr/mnd</p>
                    <a href="https://fragus.com/media/bg2hjdc3/gosafe-premium-no-2502.pdf" target="_blank" rel="noopener noreferrer" className="text-[#004D61] underline text-xs">Vilkår for bruktbilgaranti</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 text-[#FF6B35] border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    Jeg godkjenner å bli kontaktet i forbindelse med innsending av lånesøknad.
                  </label>
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
              <p className="text-sm text-gray-600">💡 Tar kun 2 minutter</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


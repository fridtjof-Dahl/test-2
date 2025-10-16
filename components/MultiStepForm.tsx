'use client';

import { useState, useCallback, memo, useMemo } from 'react';
import { useLoanCalculation } from './hooks/useLoanCalculation';
import { useFormValidation } from './hooks/useFormValidation';
import { FormData, WARRANTIES, WarrantyType } from './types/form';
import { trackFormSubmission, trackConversion } from '@/lib/analytics';

const INITIAL_FORM_DATA: FormData = {
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
};

const MultiStepForm = memo(function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  // Use optimized loan calculation
  const calculation = useLoanCalculation({
    loanAmount: formData.loanAmount,
    downPayment: formData.itemPrice - formData.loanAmount,
    loanTerm: formData.loanTerm,
    interestRate: 0.092
  });

  // Form validation
  const { errors, isValid } = useFormValidation(formData, step);

  const handleNext = useCallback(() => {
    if (step < totalSteps && isValid) {
      setStep(step + 1);
    }
  }, [step, totalSteps, isValid]);

  const handleBack = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
    }
  }, [step]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/loan-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Track successful form submission with fixed value
        trackFormSubmission('loan-application', true, 4000); // Fixed value for loan applications
        trackConversion('loan_application', 4000);
        
        alert(`Takk for søknaden! ${result.message}`);
        // Reset form
        setFormData(INITIAL_FORM_DATA);
        setStep(1);
      } else {
        // Track failed form submission
        trackFormSubmission('loan-application', false);
        alert(`Feil: ${result.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Track failed form submission
      trackFormSubmission('loan-application', false);
      alert('Noe gikk galt. Prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  }, [isValid, formData]);

  const updateFormData = useCallback((updates: Partial<FormData>) => {
    setFormData(prev => {
      const newData = { ...prev, ...updates };
      
      // Auto-adjust loan amount if it exceeds item price
      if (updates.itemPrice !== undefined && newData.loanAmount > newData.itemPrice) {
        newData.loanAmount = newData.itemPrice;
      }
      
      return newData;
    });
  }, []);

  return (
    <section id="lead-form" className="py-20 bg-gray-50" aria-labelledby="form-heading" aria-describedby="form-description">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 id="form-heading" className="text-3xl font-bold text-[#004D61] mb-2">
              Søk om billån nå
            </h2>
            <p id="form-description" className="text-gray-600">
              Steg {step} av {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={`Fremgang: ${step} av ${totalSteps} steg`}>
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
                    onChange={(e) => updateFormData({ itemPrice: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                    aria-label="Kjøpesum for bilen"
                    aria-valuemin={50000}
                    aria-valuemax={1000000}
                    aria-valuenow={formData.itemPrice}
                    aria-valuetext={`${formData.itemPrice.toLocaleString('nb-NO')} kroner`}
                    role="slider"
                    tabIndex={0}
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
                    onChange={(e) => updateFormData({ loanAmount: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                    aria-label="Lånebeløp"
                    aria-valuemin={0}
                    aria-valuemax={formData.itemPrice}
                    aria-valuenow={formData.loanAmount}
                    aria-valuetext={`${formData.loanAmount.toLocaleString('nb-NO')} kroner`}
                    role="slider"
                    tabIndex={0}
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
                    onChange={(e) => updateFormData({ loanTerm: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                    aria-label="Nedbetalingstid i år"
                    aria-valuemin={0}
                    aria-valuemax={10}
                    aria-valuenow={formData.loanTerm}
                    aria-valuetext={`${formData.loanTerm} år`}
                    role="slider"
                    tabIndex={0}
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>0 år</span>
                    <span>{formData.loanTerm} år</span>
                    <span>10 år</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Estimert månedskostnad:</strong> {calculation.monthlyPayment.toLocaleString('nb-NO')} kr/mnd
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
                    onChange={(e) => updateFormData({ name: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#FF6B35]'
                    }`}
                    placeholder="Ola Nordmann"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    E-postadresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#FF6B35]'
                    }`}
                    placeholder="ola@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Telefonnummer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData({ phone: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-[#FF6B35]'
                    }`}
                    placeholder="123 45 678"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Registreringsnummer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.registrationNumber}
                    onChange={(e) => updateFormData({ registrationNumber: e.target.value.toUpperCase() })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.registrationNumber ? 'border-red-500' : 'border-gray-200 focus:border-[#FF6B35]'
                    }`}
                    placeholder="AB12345"
                    maxLength={7}
                  />
                  <p className="text-xs text-gray-500 mt-1">Registreringsnummer på bilen du ønsker lån til</p>
                  {errors.registrationNumber && <p className="text-red-500 text-sm mt-1">{errors.registrationNumber}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">Kilometerstand <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={formData.kilometers}
                    onChange={(e) => updateFormData({ kilometers: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.kilometers ? 'border-red-500' : 'border-gray-200 focus:border-[#FF6B35]'
                    }`}
                    placeholder="124 000"
                  />
                  {errors.kilometers && <p className="text-red-500 text-sm mt-1">{errors.kilometers}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">
                    Lenke til annonse <span className="text-gray-400">(valgfritt)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.adUrl}
                    onChange={(e) => updateFormData({ adUrl: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                    placeholder="https://finn.no/..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Hvis du har funnet bilen på Finn.no eller lignende</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004D61] mb-2">Bruktbilgaranti <span className="text-gray-400">(valgfritt)</span></label>
                  <select
                    value={formData.warranty}
                    onChange={(e) => updateFormData({ warranty: e.target.value as WarrantyType })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                  >
                    <option value="none">Ingen garanti (kr 0)</option>
                    <option value="y1">1 år (kr 11 700)</option>
                    <option value="y2">2 år (kr 18 720)</option>
                    <option value="y3">3 år (kr 24 570)</option>
                  </select>
                  <div className="mt-2 text-sm text-gray-700">
                    <p><strong>Totalpris for garanti:</strong> {WARRANTIES[formData.warranty].price.toLocaleString('nb-NO')} kr</p>
                    <p><strong>Månedspris inkludert i lån:</strong> {Math.round((WARRANTIES[formData.warranty].price * calculation.effectiveRate / 12) / (1 - Math.pow(1 + calculation.effectiveRate / 12, -formData.loanTerm * 12)) || 0).toLocaleString('nb-NO')} kr/mnd</p>
                    <a href="https://fragus.com/media/bg2hjdc3/gosafe-premium-no-2502.pdf" target="_blank" rel="noopener noreferrer" className="text-[#004D61] underline text-xs">Vilkår for bruktbilgaranti</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => updateFormData({ consent: e.target.checked })}
                    className="mt-1 h-4 w-4 text-[#FF6B35] border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    Jeg godkjenner å bli kontaktet i forbindelse med innsending av lånesøknad.
                  </label>
                  {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors min-h-[56px] leading-tight"
                >
                  ← Tilbake
                </button>
              )}
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isValid}
                  className={`flex-1 py-4 px-6 font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg min-h-[56px] leading-tight ${
                    isValid 
                      ? 'bg-[#FF6B35] hover:bg-[#E55A24] text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Neste steg →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`flex-1 py-4 px-6 font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg min-h-[56px] leading-tight ${
                    isValid && !isSubmitting
                      ? 'bg-[#10B981] hover:bg-[#059669] text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Sender...' : 'Send søknad →'}
                </button>
              )}
            </div>

            {/* Micro-copy */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Tar kun 2 minutter
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default MultiStepForm;


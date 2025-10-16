'use client';

import { useState, useMemo } from 'react';

export default function SimpleLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(50000);
  const [years, setYears] = useState(5);
  
  const calculation = useMemo(() => {
    const principal = Math.max(0, loanAmount - downPayment);
    const monthlyRate = 0.092 / 12; // 9.2% annual rate
    const months = Math.max(1, years * 12);
    
    if (principal <= 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
    }

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest)
    };
  }, [loanAmount, downPayment, years]);

  return (
    <section 
      className="py-16 bg-gray-50" 
      aria-labelledby="calculator-heading" 
      aria-describedby="calculator-description"
      role="region"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="calculator-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Billånskalkulator
          </h2>
          <p id="calculator-description" className="text-lg text-gray-600">
            Beregn estimert månedskostnad for ditt billån. Bruk sliderne for å justere parametrene.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label htmlFor="loan-amount" className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Kjøpesum</span>
                <span className="text-blue-600 font-bold" aria-live="polite">{loanAmount.toLocaleString('nb-NO')} kr</span>
              </label>
              <input
                id="loan-amount"
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="Kjøpesum for bilen"
                aria-valuemin={50000}
                aria-valuemax={1000000}
                aria-valuenow={loanAmount}
                aria-valuetext={`${loanAmount.toLocaleString('nb-NO')} kroner`}
                role="slider"
                tabIndex={0}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50 000 kr</span>
                <span>1 000 000 kr</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label htmlFor="down-payment" className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Egenkapital</span>
                <span className="text-blue-600 font-bold" aria-live="polite">{downPayment.toLocaleString('nb-NO')} kr</span>
              </label>
              <input
                id="down-payment"
                type="range"
                min="0"
                max={loanAmount}
                step="10000"
                value={downPayment}
                onChange={(e) => setDownPayment(Math.min(Number(e.target.value), loanAmount))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="Egenkapital for bilen"
                aria-valuemin={0}
                aria-valuemax={loanAmount}
                aria-valuenow={downPayment}
                aria-valuetext={`${downPayment.toLocaleString('nb-NO')} kroner`}
                role="slider"
                tabIndex={0}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0 kr</span>
                <span>{loanAmount.toLocaleString('nb-NO')} kr</span>
              </div>
            </div>

            {/* Loan Period */}
            <div>
              <label htmlFor="loan-period" className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Nedbetalingstid</span>
                <span className="text-blue-600 font-bold" aria-live="polite">{years} år</span>
              </label>
              <input
                id="loan-period"
                type="range"
                min="1"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="Nedbetalingstid for lånet"
                aria-valuemin={1}
                aria-valuemax={10}
                aria-valuenow={years}
                aria-valuetext={`${years} år`}
                role="slider"
                tabIndex={0}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 år</span>
                <span>10 år</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-blue-200" role="region" aria-labelledby="result-heading">
            <div className="text-center">
              <h3 id="result-heading" className="text-sm text-gray-600 mb-2">Estimert månedskostnad</h3>
              <p className="text-4xl font-bold text-blue-600" aria-live="polite">
                {calculation.monthlyPayment.toLocaleString('nb-NO')} kr
              </p>
              <div className="text-xs text-gray-500 mt-3" role="complementary" aria-label="Låneinformasjon">
                <p>Lånebeløp: {(loanAmount - downPayment).toLocaleString('nb-NO')} kr</p>
                <p>Rente: 9.2% | Total: {calculation.totalPayment.toLocaleString('nb-NO')} kr</p>
                <p className="mt-1">Beregnet med 9,2% nominell rente</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="#lead-form" 
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px] leading-tight focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
              aria-label="Søk billån nå - går til søknadsskjema"
            >
              Søk billån nå →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(50000);
  const [years, setYears] = useState(5);
  
  // Simplified calculation with estimated interest rate
  const interestRate = 0.074; // 7.4% annual interest (nominell rente)
  const monthlyRate = interestRate / 12;
  const months = years * 12;
  const principal = loanAmount - downPayment;
  
  const monthlyPayment = principal > 0 
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1)
    : 0;

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Billånskalkulator
          </h2>
          <p className="text-lg text-gray-600">
            Beregn estimert månedskostnad for ditt billån
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Kjøpesum</span>
                <span className="text-blue-600 font-bold">{loanAmount.toLocaleString('nb-NO')} kr</span>
              </label>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50 000 kr</span>
                <span>1 000 000 kr</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Egenkapital</span>
                <span className="text-blue-600 font-bold">{downPayment.toLocaleString('nb-NO')} kr</span>
              </label>
              <input
                type="range"
                min="0"
                max={loanAmount}
                step="10000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0 kr</span>
                <span>{loanAmount.toLocaleString('nb-NO')} kr</span>
              </div>
            </div>

            {/* Loan Period */}
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Nedbetalingstid</span>
                <span className="text-blue-600 font-bold">{years} år</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 år</span>
                <span>10 år</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-blue-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Estimert månedskostnad</p>
              <p className="text-4xl font-bold text-blue-600">
                {Math.round(monthlyPayment).toLocaleString('nb-NO')} kr
              </p>
              <p className="text-xs text-gray-500 mt-3">
                Lånebeløp: {(loanAmount - downPayment).toLocaleString('nb-NO')} kr | Rente: {(interestRate * 100).toFixed(1)}% | Total: {(monthlyPayment * months).toLocaleString('nb-NO')} kr
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="#lead-form" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all"
            >
              Søk nå og få nøyaktig tilbud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { useState, useCallback, memo, useEffect, useMemo } from 'react';
import { useLoanCalculation } from './hooks/useLoanCalculation';
import { trackButtonClick, trackCalculatorUsage } from '@/lib/analytics';

const LoanCalculator = memo(function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(50000);
  const [years, setYears] = useState(5);
  
  const calculation = useLoanCalculation({
    loanAmount,
    downPayment,
    loanTerm: years,
    interestRate: 0.092
  });

  // Track when calculator is opened
  useEffect(() => {
    trackCalculatorUsage('open');
  }, []);

  const handleLoanAmountChange = useCallback((value: number) => {
    setLoanAmount(value);
    // Auto-adjust down payment if it exceeds loan amount
    if (downPayment > value) {
      setDownPayment(Math.max(0, value - 10000));
    }
    // Track calculator usage
    trackCalculatorUsage('calculate');
  }, [downPayment]);

  const handleDownPaymentChange = useCallback((value: number) => {
    setDownPayment(Math.min(value, loanAmount));
    // Track calculator usage
    trackCalculatorUsage('calculate');
  }, [loanAmount]);

  const handleYearsChange = useCallback((value: number) => {
    setYears(value);
    // Track calculator usage
    trackCalculatorUsage('calculate');
  }, []);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="calculator-heading" aria-describedby="calculator-description">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="calculator-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Billånskalkulator
          </h2>
          <p id="calculator-description" className="text-lg text-gray-600">
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
                onChange={(e) => handleLoanAmountChange(Number(e.target.value))}
                onInput={(e) => handleLoanAmountChange(Number((e.target as HTMLInputElement).value))}
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
                onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                onInput={(e) => handleDownPaymentChange(Number((e.target as HTMLInputElement).value))}
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
                onChange={(e) => handleYearsChange(Number(e.target.value))}
                onInput={(e) => handleYearsChange(Number((e.target as HTMLInputElement).value))}
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
                {calculation.monthlyPayment.toLocaleString('nb-NO')} kr
              </p>
              <p className="text-xs text-gray-500 mt-3">
                Lånebeløp: {(loanAmount - downPayment).toLocaleString('nb-NO')} kr | Rente: {(calculation.effectiveRate * 100).toFixed(1)}% | Total: {calculation.totalPayment.toLocaleString('nb-NO')} kr
              </p>
              <p className="text-xs text-gray-500 mt-1">Beregnet med 9,2% nominell rente</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="#lead-form" 
              onClick={() => trackButtonClick('sok_billan_na', 'calculator')}
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px] leading-tight"
            >
              Søk billån nå →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default LoanCalculator;


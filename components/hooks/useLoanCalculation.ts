import { useMemo } from 'react';

export interface LoanCalculationParams {
  loanAmount: number;
  downPayment: number;
  loanTerm: number; // in years
  interestRate?: number;
}

export interface LoanCalculationResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  effectiveRate: number;
}

export function useLoanCalculation({
  loanAmount,
  downPayment,
  loanTerm,
  interestRate = 0.092
}: LoanCalculationParams): LoanCalculationResult {
  return useMemo(() => {
    const principal = Math.max(0, loanAmount - downPayment);
    const monthlyRate = interestRate / 12;
    const months = Math.max(1, loanTerm * 12);
    
    if (principal <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        effectiveRate: 0
      };
    }

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    const effectiveRate = interestRate; // Simplified - could include fees

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      effectiveRate
    };
  }, [loanAmount, downPayment, loanTerm, interestRate]);
}

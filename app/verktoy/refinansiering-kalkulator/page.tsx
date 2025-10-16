'use client';

import { useState, useCallback, useEffect } from 'react';
import VerktoyLayout from '@/components/verktoy/VerktoyLayout';

interface RefinancingData {
  currentLoanAmount: number;
  currentInterestRate: number;
  currentMonthlyPayment: number;
  currentRemainingTerm: number;
  
  newInterestRate: number;
  newTerm: number;
  newMonthlyPayment: number;
  newTotalCost: number;
  
  savings: {
    monthly: number;
    total: number;
    percentage: number;
  };
  
  breakEvenMonths: number;
  recommendation: 'refinance' | 'keep' | 'depends';
  recommendationReason: string;
}

export default function RefinancingCalculatorPage() {
  const [data, setData] = useState<RefinancingData>({
    currentLoanAmount: 300000,
    currentInterestRate: 9.5,
    currentMonthlyPayment: 0,
    currentRemainingTerm: 5,
    
    newInterestRate: 7.8,
    newTerm: 5,
    newMonthlyPayment: 0,
    newTotalCost: 0,
    
    savings: {
      monthly: 0,
      total: 0,
      percentage: 0
    },
    
    breakEvenMonths: 0,
    recommendation: 'depends',
    recommendationReason: ''
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const calculateLoan = (principal: number, monthlyRate: number, months: number) => {
    if (principal <= 0 || monthlyRate <= 0) return { monthlyPayment: 0, totalPayment: 0 };
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = monthlyPayment * months;
    return { monthlyPayment: Math.round(monthlyPayment), totalPayment: Math.round(totalPayment) };
  };

  const calculateRefinancing = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      // Enhanced refinancing calculation with detailed cost analysis
      
      // Calculate current loan
      const currentMonthlyRate = data.currentInterestRate / 100 / 12;
      const currentMonths = data.currentRemainingTerm * 12;
      const currentLoan = calculateLoan(data.currentLoanAmount, currentMonthlyRate, currentMonths);
      
      // Calculate new loan
      const newMonthlyRate = data.newInterestRate / 100 / 12;
      const newMonths = data.newTerm * 12;
      const newLoan = calculateLoan(data.currentLoanAmount, newMonthlyRate, newMonths);
      
      // Calculate comprehensive refinancing costs
      const establishmentFee = 2500; // New loan establishment fee
      const earlyRepaymentFee = data.currentLoanAmount * 0.01; // 1% of remaining balance
      const appraisalFee = 2000; // Car appraisal fee
      const legalFees = 1500; // Legal documentation
      const totalRefinancingCost = establishmentFee + earlyRepaymentFee + appraisalFee + legalFees;
      
      // Calculate savings
      const monthlySavings = currentLoan.monthlyPayment - newLoan.monthlyPayment;
      const totalSavings = currentLoan.totalPayment - newLoan.totalPayment - totalRefinancingCost;
      const savingsPercentage = (totalSavings / currentLoan.totalPayment) * 100;
      
      // Calculate break-even point
      const breakEvenMonths = monthlySavings > 0 ? Math.ceil(totalRefinancingCost / monthlySavings) : 0;
      
      // Calculate ROI (Return on Investment)
      const roi = totalSavings > 0 ? (totalSavings / totalRefinancingCost) * 100 : 0;
      
      // Enhanced recommendation logic
      let recommendation: 'refinance' | 'keep' | 'depends' = 'depends';
      let recommendationReason = '';
      
      const factors = [];
      
      if (totalSavings > 20000) {
        factors.push('Betydelige besparelser');
      }
      if (breakEvenMonths < 6) {
        factors.push('Rask break-even');
      }
      if (roi > 200) {
        factors.push('Høy ROI');
      }
      if (monthlySavings > 2000) {
        factors.push('Høy månedlig besparelse');
      }
      if (data.currentRemainingTerm > 2) {
        factors.push('Lang tid igjen på lånet');
      }
      
      if (factors.length >= 3 && totalSavings > 10000) {
        recommendation = 'refinance';
        recommendationReason = `Refinansiering anbefales: ${factors.slice(0, 3).join(', ')}`;
      } else if (totalSavings > 5000 && breakEvenMonths < 18) {
        recommendation = 'refinance';
        recommendationReason = `Moderate besparelser med akseptabel break-even (${breakEvenMonths} måneder)`;
      } else if (totalSavings < 3000 || breakEvenMonths > 36) {
        recommendation = 'keep';
        recommendationReason = 'For små besparelser eller for lang break-even til å rettferdiggjøre refinansiering';
      } else {
        recommendation = 'depends';
        recommendationReason = 'Avhenger av dine prioriteringer og planer';
      }
      
      setData(prev => ({
        ...prev,
        currentMonthlyPayment: currentLoan.monthlyPayment,
        newMonthlyPayment: newLoan.monthlyPayment,
        newTotalCost: newLoan.totalPayment,
        savings: {
          monthly: Math.round(monthlySavings),
          total: Math.round(totalSavings),
          percentage: Math.round(savingsPercentage * 10) / 10
        },
        breakEvenMonths,
        recommendation,
        recommendationReason
      }));
      
      setIsCalculating(false);
    }, 1000);
  }, [data.currentLoanAmount, data.currentInterestRate, data.currentRemainingTerm, 
      data.newInterestRate, data.newTerm]);

  useEffect(() => {
    calculateRefinancing();
  }, [calculateRefinancing]);

  const updateData = (field: keyof RefinancingData, value: number) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Verktøy', href: '/verktoy' },
    { label: 'Refinansiering Kalkulator' }
  ];

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'refinance': return 'bg-green-50 border-green-200 text-green-800';
      case 'keep': return 'bg-red-50 border-red-200 text-red-800';
      default: return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    }
  };

  const getRecommendationLabel = (recommendation: string) => {
    switch (recommendation) {
      case 'refinance': return 'Anbefaling: Refinansier';
      case 'keep': return 'Anbefaling: Behold nåværende lån';
      default: return 'Anbefaling: Avhenger av situasjon';
    }
  };

  return (
    <VerktoyLayout
      title="Refinansiering Kalkulator"
      description="Beregn hvor mye du kan spare ved å refinansiere billånet ditt. Se potensielle besparelser og når det lønner seg."
      breadcrumbItems={breadcrumbItems}
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Refinansiering analyse</span>
          </div>
          
          <h1 className="text-5xl font-bold text-[#004D61] mb-6">
            Refinansiering Kalkulator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Se om du kan spare penger ved å refinansiere billånet ditt. 
            Sammenlign nåværende lån med nye tilbud og finn ut om det lønner seg.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              {/* Current Loan */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Nåværende lån</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gjenstående lånebeløp
                    </label>
                    <input
                      type="number"
                      value={data.currentLoanAmount}
                      onChange={(e) => updateData('currentLoanAmount', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nåværende rente (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={data.currentInterestRate}
                      onChange={(e) => updateData('currentInterestRate', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gjenstående nedbetalingstid (år)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={data.currentRemainingTerm}
                      onChange={(e) => updateData('currentRemainingTerm', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* New Loan */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Nytt lån</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ny rente (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={data.newInterestRate}
                      onChange={(e) => updateData('newInterestRate', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ny nedbetalingstid (år)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={data.newTerm}
                      onChange={(e) => updateData('newTerm', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {isCalculating ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Beregner refinansiering...</p>
                </div>
              ) : (
                <>
                  {/* Comparison */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                    <h3 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Sammenligning</h3>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                          {data.currentMonthlyPayment.toLocaleString('nb-NO')} kr
                        </div>
                        <div className="text-sm text-gray-600">Nåværende månedskostnad</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {data.newMonthlyPayment.toLocaleString('nb-NO')} kr
                        </div>
                        <div className="text-sm text-gray-600">Ny månedskostnad</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className={`text-2xl font-bold ${data.savings.monthly > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {data.savings.monthly > 0 ? '+' : ''}{data.savings.monthly.toLocaleString('nb-NO')} kr
                      </div>
                      <div className="text-sm text-gray-600">Forskjell per måned</div>
                    </div>
                  </div>

                  {/* Savings Analysis */}
                  <div className="card-elegant card-interactive rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Besparelser</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Månedlig besparelse:</span>
                        <span className={`font-semibold ${data.savings.monthly > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {data.savings.monthly > 0 ? '+' : ''}{data.savings.monthly.toLocaleString('nb-NO')} kr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total besparelse:</span>
                        <span className={`font-semibold ${data.savings.total > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {data.savings.total > 0 ? '+' : ''}{data.savings.total.toLocaleString('nb-NO')} kr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Besparelse i %:</span>
                        <span className={`font-semibold ${data.savings.percentage > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {data.savings.percentage > 0 ? '+' : ''}{data.savings.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Break-even Analysis */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Break-even analyse</h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {data.breakEvenMonths} måneder
                      </div>
                      <div className="text-sm text-gray-600">Tid til break-even</div>
                      <div className="text-xs text-gray-500 mt-1">
                        (Basert på 5 000 kr refinansieringskostnad)
                      </div>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className={`rounded-2xl p-6 border-2 ${getRecommendationColor(data.recommendation)}`}>
                    <h4 className="text-lg font-bold text-[#004D61] mb-4 text-center">
                      {getRecommendationLabel(data.recommendation)}
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      {data.recommendationReason}
                    </p>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#004D61]">
                        {Math.abs(data.savings.total).toLocaleString('nb-NO')} kr
                      </div>
                      <div className="text-sm text-gray-600">
                        {data.savings.total > 0 ? 'Du sparer' : 'Du betaler mer'}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Refinancing Tips */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
            Tips for refinansiering
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Sjekk alle kostnader</h3>
                  <p className="text-gray-700">Inkluder etableringsgebyr, termingebyr og eventuelle innfrielsesgebyr fra nåværende lån.</p>
                </div>
              </div>
            </div>

            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Sammenlign flere tilbud</h3>
                  <p className="text-gray-700">Ikke aksepter det første tilbudet. Sammenlign minst 3-4 banker for å finne beste rente.</p>
                </div>
              </div>
            </div>

            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Timing er viktig</h3>
                  <p className="text-gray-700">Refinansier når rentene faller eller når du har forbedret kredittscore.</p>
                </div>
              </div>
            </div>

            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Vurder nedbetalingstid</h3>
                  <p className="text-gray-700">Kortere nedbetalingstid gir høyere månedskostnad, men lavere totalkostnad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Refinance */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
            Når bør du refinansiere?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Refinansier når:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Rentene har falt betydelig (minst 1-2%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Du har forbedret kredittscore</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Du kan spare minst 10 000 kr totalt</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Break-even er under 18 måneder</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Du planlegger å beholde bilen lenge</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Ikke refinansier når:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Besparelsene er under 5 000 kr totalt</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Break-even er over 24 måneder</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Du planlegger å selge bilen snart</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Innfrielsesgebyret er for høyt</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Du har betalingsproblemer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#004D61] to-[#006B7D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klar til å refinansiere?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Få et uforpliktende tilbud på refinansiering fra vår samarbeidspartner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kalkulator"
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Prøv kalkulatoren
            </a>
            <a 
              href="/verktoy"
              className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm border border-white/30"
            >
              Se alle verktøy
            </a>
          </div>
        </div>
      </section>

    </VerktoyLayout>
  );
}

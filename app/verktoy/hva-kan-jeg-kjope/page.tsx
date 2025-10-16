'use client';

import { useState, useCallback, useEffect } from 'react';
import VerktoyLayout from '@/components/verktoy/VerktoyLayout';

interface AffordabilityData {
  monthlyIncome: number;
  monthlyExpenses: number;
  downPayment: number;
  loanTerm: number;
  interestRate: number;
  maxCarPrice: number;
  maxLoanAmount: number;
  monthlyPayment: number;
  debtToIncomeRatio: number;
  recommendedCarPrice: number;
  safetyMargin: number;
}

interface CarSuggestion {
  brand: string;
  model: string;
  year: string;
  price: number;
  monthlyPayment: number;
  image: string;
  features: string[];
  category: 'budget' | 'mid-range' | 'premium';
}

export default function WhatCanIAffordPage() {
  const [data, setData] = useState<AffordabilityData>({
    monthlyIncome: 50000,
    monthlyExpenses: 25000,
    downPayment: 100000,
    loanTerm: 5,
    interestRate: 8.5,
    maxCarPrice: 0,
    maxLoanAmount: 0,
    monthlyPayment: 0,
    debtToIncomeRatio: 0,
    recommendedCarPrice: 0,
    safetyMargin: 0
  });

  const [carSuggestions, setCarSuggestions] = useState<CarSuggestion[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateAffordability = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      // Enhanced affordability calculation with multiple factors
      
      // Calculate disposable income
      const disposableIncome = data.monthlyIncome - data.monthlyExpenses;
      
      // Calculate maximum monthly payment (conservative approach)
      const maxMonthlyPayment = Math.min(
        data.monthlyIncome * 0.35, // Max 35% of gross income
        disposableIncome * 0.7,    // Max 70% of disposable income
        disposableIncome - 10000   // Leave 10k for unexpected expenses
      );
      
      // Calculate maximum loan amount
      const monthlyRate = data.interestRate / 100 / 12;
      const loanMonths = data.loanTerm * 12;
      
      let maxLoanAmount = 0;
      if (monthlyRate > 0) {
        maxLoanAmount = (maxMonthlyPayment * (Math.pow(1 + monthlyRate, loanMonths) - 1)) / 
          (monthlyRate * Math.pow(1 + monthlyRate, loanMonths));
      } else {
        maxLoanAmount = maxMonthlyPayment * loanMonths;
      }
      
      // Add additional costs (insurance, maintenance, fuel)
      const additionalMonthlyCosts = maxLoanAmount * 0.02; // 2% of loan amount
      const adjustedMaxPayment = maxMonthlyPayment - additionalMonthlyCosts;
      
      // Recalculate with adjusted payment
      if (monthlyRate > 0) {
        maxLoanAmount = (adjustedMaxPayment * (Math.pow(1 + monthlyRate, loanMonths) - 1)) / 
          (monthlyRate * Math.pow(1 + monthlyRate, loanMonths));
      } else {
        maxLoanAmount = adjustedMaxPayment * loanMonths;
      }
      
      const maxCarPrice = maxLoanAmount + data.downPayment;
      
      // Calculate recommended price with safety margins
      const safetyMargin = maxCarPrice * 0.15; // 15% safety margin
      const recommendedCarPrice = maxCarPrice - safetyMargin;
      
      // Calculate debt-to-income ratio
      const debtToIncomeRatio = (adjustedMaxPayment / data.monthlyIncome) * 100;
      
      // Calculate affordability score (0-100)
      const affordabilityScore = Math.min(100, Math.max(0, 
        ((disposableIncome - adjustedMaxPayment) / disposableIncome) * 100
      ));
      
      setData(prev => ({
        ...prev,
        maxCarPrice: Math.round(maxCarPrice),
        maxLoanAmount: Math.round(maxLoanAmount),
        monthlyPayment: Math.round(adjustedMaxPayment),
        debtToIncomeRatio: Math.round(debtToIncomeRatio * 10) / 10,
        recommendedCarPrice: Math.round(recommendedCarPrice),
        safetyMargin: Math.round(safetyMargin)
      }));
      
      // Generate enhanced car suggestions
      generateCarSuggestions(Math.round(recommendedCarPrice));
      setIsCalculating(false);
    }, 1200);
  }, [data.monthlyIncome, data.monthlyExpenses, data.downPayment, data.loanTerm, data.interestRate]);

  const generateCarSuggestions = (budget: number) => {
    const suggestions: CarSuggestion[] = [
      // Budget cars (60-80% of budget)
      {
        brand: 'Volkswagen',
        model: 'Golf',
        year: '2020-2022',
        price: Math.round(budget * 0.7),
        monthlyPayment: Math.round((budget * 0.7 - data.downPayment) * 0.02),
        image: '🚗',
        features: ['1.0 TSI', 'Automatisk', 'LED-lykter'],
        category: 'budget'
      },
      {
        brand: 'Toyota',
        model: 'Corolla',
        year: '2019-2021',
        price: Math.round(budget * 0.65),
        monthlyPayment: Math.round((budget * 0.65 - data.downPayment) * 0.02),
        image: '🚙',
        features: ['Hybrid', 'Automatisk', 'Lavt drivstoffforbruk'],
        category: 'budget'
      },
      {
        brand: 'Ford',
        model: 'Focus',
        year: '2020-2022',
        price: Math.round(budget * 0.75),
        monthlyPayment: Math.round((budget * 0.75 - data.downPayment) * 0.02),
        image: '🚘',
        features: ['1.0 EcoBoost', 'Manuell', 'Apple CarPlay'],
        category: 'budget'
      },
      
      // Mid-range cars (80-100% of budget)
      {
        brand: 'BMW',
        model: '3-serie',
        year: '2018-2020',
        price: Math.round(budget * 0.9),
        monthlyPayment: Math.round((budget * 0.9 - data.downPayment) * 0.02),
        image: '🚗',
        features: ['2.0 Diesel', 'Automatisk', 'Xenon-lykter'],
        category: 'mid-range'
      },
      {
        brand: 'Audi',
        model: 'A4',
        year: '2019-2021',
        price: Math.round(budget * 0.85),
        monthlyPayment: Math.round((budget * 0.85 - data.downPayment) * 0.02),
        image: '🚙',
        features: ['2.0 TDI', 'Quattro', 'Virtual Cockpit'],
        category: 'mid-range'
      },
      {
        brand: 'Volvo',
        model: 'V60',
        year: '2018-2020',
        price: Math.round(budget * 0.88),
        monthlyPayment: Math.round((budget * 0.88 - data.downPayment) * 0.02),
        image: '🚘',
        features: ['D4 Diesel', 'Automatisk', 'Pilot Assist'],
        category: 'mid-range'
      },
      
      // Premium cars (100-120% of budget)
      {
        brand: 'Mercedes-Benz',
        model: 'C-klasse',
        year: '2017-2019',
        price: Math.round(budget * 1.1),
        monthlyPayment: Math.round((budget * 1.1 - data.downPayment) * 0.02),
        image: '🚗',
        features: ['C220d', 'Automatisk', 'LED-lykter'],
        category: 'premium'
      },
      {
        brand: 'BMW',
        model: '5-serie',
        year: '2016-2018',
        price: Math.round(budget * 1.05),
        monthlyPayment: Math.round((budget * 1.05 - data.downPayment) * 0.02),
        image: '🚙',
        features: ['520d', 'xDrive', 'HUD'],
        category: 'premium'
      }
    ];
    
    setCarSuggestions(suggestions);
  };

  useEffect(() => {
    calculateAffordability();
  }, [calculateAffordability]);

  const updateData = (field: keyof AffordabilityData, value: number) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Verktøy', href: '/verktoy' },
    { label: 'Hva kan jeg kjøpe?' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'budget': return 'bg-green-50 border-green-200 text-green-800';
      case 'mid-range': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'premium': return 'bg-purple-50 border-purple-200 text-purple-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'budget': return 'Budget';
      case 'mid-range': return 'Mellomklasse';
      case 'premium': return 'Premium';
      default: return 'Ukjent';
    }
  };

  return (
    <VerktoyLayout
      title="Hva kan jeg kjøpe?"
      description="Beregn hvor mye du kan låne basert på inntekt og utgifter. Få konkrete bilforslag som passer din økonomi."
      breadcrumbItems={breadcrumbItems}
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Kjøpekraft kalkulator</span>
          </div>
          
          <h1 className="text-5xl font-bold text-[#004D61] mb-6">
            Hva kan jeg kjøpe?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Finn ut hvor mye du kan låne basert på inntekt og utgifter. 
            Få konkrete bilforslag som passer din økonomi.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              {/* Income & Expenses */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Økonomi</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Månedlig inntekt (brutto)
                    </label>
                    <input
                      type="number"
                      value={data.monthlyIncome}
                      onChange={(e) => updateData('monthlyIncome', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Månedlige faste utgifter
                    </label>
                    <input
                      type="number"
                      value={data.monthlyExpenses}
                      onChange={(e) => updateData('monthlyExpenses', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Inkluder husleie, mat, forsikring, strøm, etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Loan Details */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Låneopplysninger</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Egenkapital
                    </label>
                    <input
                      type="number"
                      value={data.downPayment}
                      onChange={(e) => updateData('downPayment', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nedbetalingstid (år)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={data.loanTerm}
                      onChange={(e) => updateData('loanTerm', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rente (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={data.interestRate}
                      onChange={(e) => updateData('interestRate', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {isCalculating ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Beregner kjøpekraft...</p>
                </div>
              ) : (
                <>
                  {/* Main Result */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                    <h3 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Din kjøpekraft</h3>
                    
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">
                        {data.recommendedCarPrice.toLocaleString('nb-NO')} kr
                      </div>
                      <div className="text-gray-600">Anbefalt bilpris</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {data.maxCarPrice.toLocaleString('nb-NO')} kr
                        </div>
                        <div className="text-sm text-gray-600">Maksimal bilpris</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {data.monthlyPayment.toLocaleString('nb-NO')} kr
                        </div>
                        <div className="text-sm text-gray-600">Månedlig betaling</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700 mb-2">
                        {data.debtToIncomeRatio}%
                      </div>
                      <div className="text-sm text-gray-600">Gjeldsgrad</div>
                    </div>
                  </div>

                  {/* Safety Info */}
                  <div className="card-elegant card-interactive rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Sikkerhetsmargin</h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">
                        {data.safetyMargin.toLocaleString('nb-NO')} kr
                      </div>
                      <div className="text-sm text-gray-600">Buffer for uforutsette utgifter</div>
                    </div>
                  </div>

                  {/* Financial Health */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Økonomisk helse</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Disponibel inntekt:</span>
                        <span className="font-semibold">
                          {(data.monthlyIncome - data.monthlyExpenses).toLocaleString('nb-NO')} kr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maksimal lånebetaling:</span>
                        <span className="font-semibold">
                          {data.monthlyPayment.toLocaleString('nb-NO')} kr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gjenstående etter lånebetaling:</span>
                        <span className="font-semibold">
                          {(data.monthlyIncome - data.monthlyExpenses - data.monthlyPayment).toLocaleString('nb-NO')} kr
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Car Suggestions */}
      {carSuggestions.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
              Bilforslag for din økonomi
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carSuggestions.map((car, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{car.image}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(car.category)}`}>
                      {getCategoryLabel(car.category)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#004D61] mb-2">
                    {car.brand} {car.model}
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    {car.year} • {car.price.toLocaleString('nb-NO')} kr
                  </div>
                  
                  <div className="text-lg font-bold text-emerald-600 mb-4">
                    {car.monthlyPayment.toLocaleString('nb-NO')} kr/mnd
                  </div>
                  
                  <div className="space-y-1">
                    {car.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
            Tips for å øke kjøpekraften
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Spar mer egenkapital</h3>
                  <p className="text-gray-700">Jo mer egenkapital, desto lavere månedskostnad og bedre rente.</p>
                </div>
              </div>
            </div>

            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Reduser faste utgifter</h3>
                  <p className="text-gray-700">Se over abonnementer og faste kostnader for å frigjøre mer penger.</p>
                </div>
              </div>
            </div>

            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Forbedre kredittscore</h3>
                  <p className="text-gray-700">Betale regninger i tide og redusere eksisterende gjeld gir bedre rente.</p>
                </div>
              </div>
            </div>

            <div className="card-elegant card-interactive rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004D61] mb-2">Vent på rett tidspunkt</h3>
                  <p className="text-gray-700">Rentene varierer - vurder å vente hvis de er høye.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#004D61] to-[#006B7D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klar til å søke om billån?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Få et uforpliktende tilbud basert på din kjøpekraft.
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

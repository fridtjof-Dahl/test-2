'use client';

import { useState, useCallback, useEffect } from 'react';
import VerktoyLayout from '@/components/verktoy/VerktoyLayout';

interface ComparisonData {
  carPrice: number;
  downPayment: number;
  loanTerm: number;
  interestRate: number;
  monthlyLoanPayment: number;
  totalLoanCost: number;
  
  // Leasing
  leaseDownPayment: number;
  leaseTerm: number;
  monthlyLeasePayment: number;
  leaseMileage: number;
  excessMileageRate: number;
  totalLeaseCost: number;
  
  // Comparison
  monthlyDifference: number;
  totalDifference: number;
  breakEvenMonths: number;
  recommendation: 'loan' | 'lease' | 'depends';
  recommendationReason: string;
}

export default function LoanVsLeasePage() {
  const [data, setData] = useState<ComparisonData>({
    carPrice: 400000,
    downPayment: 80000,
    loanTerm: 5,
    interestRate: 8.5,
    monthlyLoanPayment: 0,
    totalLoanCost: 0,
    
    leaseDownPayment: 40000,
    leaseTerm: 3,
    monthlyLeasePayment: 0,
    leaseMileage: 15000,
    excessMileageRate: 2.5,
    totalLeaseCost: 0,
    
    monthlyDifference: 0,
    totalDifference: 0,
    breakEvenMonths: 0,
    recommendation: 'depends',
    recommendationReason: ''
  });

  const calculateLoan = (principal: number, monthlyRate: number, months: number) => {
    if (principal <= 0) return { monthlyPayment: 0, totalPayment: 0 };
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = monthlyPayment * months;
    return { monthlyPayment: Math.round(monthlyPayment), totalPayment: Math.round(totalPayment) };
  };

  const calculateComparison = useCallback(() => {
    // Enhanced loan calculation
    const loanPrincipal = data.carPrice - data.downPayment;
    const monthlyRate = data.interestRate / 100 / 12;
    const loanMonths = data.loanTerm * 12;
    const loanCalculation = calculateLoan(loanPrincipal, monthlyRate, loanMonths);
    
    // Add loan fees
    const establishmentFee = 2500;
    const totalLoanCost = loanCalculation.totalPayment + data.downPayment + establishmentFee;
    
    // Enhanced lease calculation (more realistic)
    const carValue = data.carPrice;
    const residualValue = carValue * (0.6 - (data.leaseTerm - 2) * 0.05); // 60% after 2 years, decreasing
    const depreciation = carValue - residualValue;
    const moneyFactor = 0.0025; // Equivalent to 6% APR
    const monthlyLeasePayment = (depreciation / (data.leaseTerm * 12)) + 
      ((carValue + residualValue) * moneyFactor);
    
    // Add lease fees
    const acquisitionFee = 3000;
    const dispositionFee = 2000;
    const baseLeaseCost = (monthlyLeasePayment * data.leaseTerm * 12) + 
      data.leaseDownPayment + acquisitionFee + dispositionFee;
    
    // Calculate excess mileage costs
    const expectedMileage = data.leaseMileage * data.leaseTerm;
    const excessMileageCost = Math.max(0, (expectedMileage - 45000) * data.excessMileageRate);
    const totalLeaseCost = baseLeaseCost + excessMileageCost;
    
    const monthlyDifference = loanCalculation.monthlyPayment - monthlyLeasePayment;
    const totalDifference = totalLoanCost - totalLeaseCost;
    const breakEvenMonths = monthlyDifference !== 0 ? 
      Math.ceil(Math.abs(totalDifference) / Math.abs(monthlyDifference)) : 0;
    
    // Enhanced recommendation logic
    let recommendation: 'loan' | 'lease' | 'depends' = 'depends';
    let recommendationReason = '';
    
    const loanAdvantages = [];
    const leaseAdvantages = [];
    
    // Analyze advantages
    if (totalDifference < -20000) {
      loanAdvantages.push('Betydelig billigere over tid');
    }
    if (monthlyDifference < -1500) {
      loanAdvantages.push('Lavere månedlige kostnader');
    }
    if (data.loanTerm <= 4) {
      loanAdvantages.push('Rask eierskap');
    }
    
    if (totalDifference > 20000) {
      leaseAdvantages.push('Billigere over tid');
    }
    if (monthlyDifference > 1500) {
      leaseAdvantages.push('Lavere månedlige kostnader');
    }
    if (data.leaseTerm <= 3) {
      leaseAdvantages.push('Fleksibilitet til å bytte bil');
    }
    if (data.leaseMileage <= 12000) {
      leaseAdvantages.push('Perfekt for lav kjøreaktivitet');
    }
    
    // Make recommendation
    if (loanAdvantages.length > leaseAdvantages.length && Math.abs(totalDifference) > 15000) {
      recommendation = 'loan';
      recommendationReason = `Billån anbefales: ${loanAdvantages.slice(0, 2).join(', ')}`;
    } else if (leaseAdvantages.length > loanAdvantages.length && Math.abs(totalDifference) > 15000) {
      recommendation = 'lease';
      recommendationReason = `Leasing anbefales: ${leaseAdvantages.slice(0, 2).join(', ')}`;
    } else {
      recommendation = 'depends';
      recommendationReason = 'Begge alternativer er omtrent like dyre. Vurder din kjørevaner, økonomi og behov for fleksibilitet.';
    }
    
    setData(prev => ({
      ...prev,
      monthlyLoanPayment: loanCalculation.monthlyPayment,
      totalLoanCost: Math.round(totalLoanCost),
      monthlyLeasePayment: Math.round(monthlyLeasePayment),
      totalLeaseCost: Math.round(totalLeaseCost),
      monthlyDifference: Math.round(monthlyDifference),
      totalDifference: Math.round(totalDifference),
      breakEvenMonths,
      recommendation,
      recommendationReason
    }));
  }, [data.carPrice, data.downPayment, data.loanTerm, data.interestRate, 
      data.leaseDownPayment, data.leaseTerm, data.leaseMileage, data.excessMileageRate]);

  useEffect(() => {
    calculateComparison();
  }, [calculateComparison]);

  const updateData = (field: keyof ComparisonData, value: number) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Verktøy', href: '/verktoy' },
    { label: 'Billån vs Leasing' }
  ];

  const prosCons = {
    loan: {
      pros: [
        'Du eier bilen etter nedbetaling',
        'Ingen kilometerbegrensninger',
        'Kan modifisere bilen som ønsket',
        'Lavere totalkostnad over tid',
        'Fleksibel nedbetalingstid'
      ],
      cons: [
        'Høyere månedskostnad',
        'Større egenkapital krav',
        'Du bærer verditapet',
        'Ansvar for vedlikehold og reparasjoner'
      ]
    },
    lease: {
      pros: [
        'Lavere månedskostnad',
        'Mindre egenkapital krav',
        'Ingen bekymring for verditap',
        'Ofte inkludert service',
        'Enkelt å bytte bil'
      ],
      cons: [
        'Kilometerbegrensninger',
        'Høyere totalkostnad',
        'Ingen eierskap',
        'Bøter for skader og overkilometer',
        'Mindre fleksibilitet'
      ]
    }
  };

  return (
    <VerktoyLayout
      title="Billån vs Leasing"
      description="Sammenlign total kostnad for billån vs leasing. Se break-even punkt og få anbefalinger basert på kjøremønster og behov."
      breadcrumbItems={breadcrumbItems}
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Kostnadssammenligning</span>
          </div>
          
          <h1 className="text-5xl font-bold text-[#004D61] mb-6">
            Billån vs Leasing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sammenlign total kostnad for billån vs leasing. Se break-even punkt og få anbefalinger 
            basert på kjøremønster og behov.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              {/* Car Info */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Bilinformasjon</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bilens kjøpesum
                    </label>
                    <input
                      type="number"
                      value={data.carPrice}
                      onChange={(e) => updateData('carPrice', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Loan Info */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Billån</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Egenkapital
                    </label>
                    <input
                      type="number"
                      value={data.downPayment}
                      onChange={(e) => updateData('downPayment', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Lease Info */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Leasing</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Egenkapital
                    </label>
                    <input
                      type="number"
                      value={data.leaseDownPayment}
                      onChange={(e) => updateData('leaseDownPayment', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Leasingperiode (år)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={data.leaseTerm}
                      onChange={(e) => updateData('leaseTerm', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Årlig kilometer
                    </label>
                    <input
                      type="number"
                      value={data.leaseMileage}
                      onChange={(e) => updateData('leaseMileage', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Overkilometer pris (kr/km)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={data.excessMileageRate}
                      onChange={(e) => updateData('excessMileageRate', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {/* Comparison Results */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
                <h3 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Sammenligning</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {data.monthlyLoanPayment.toLocaleString('nb-NO')} kr
                    </div>
                    <div className="text-sm text-gray-600">Billån per måned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {data.monthlyLeasePayment.toLocaleString('nb-NO')} kr
                    </div>
                    <div className="text-sm text-gray-600">Leasing per måned</div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className={`text-2xl font-bold ${data.monthlyDifference > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {data.monthlyDifference > 0 ? '+' : ''}{data.monthlyDifference.toLocaleString('nb-NO')} kr
                  </div>
                  <div className="text-sm text-gray-600">Forskjell per måned</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">
                      {data.totalLoanCost.toLocaleString('nb-NO')} kr
                    </div>
                    <div className="text-xs text-gray-600">Total billån</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">
                      {data.totalLeaseCost.toLocaleString('nb-NO')} kr
                    </div>
                    <div className="text-xs text-gray-600">Total leasing</div>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className={`rounded-2xl p-8 border-2 ${
                data.recommendation === 'loan' ? 'bg-blue-50 border-blue-200' :
                data.recommendation === 'lease' ? 'bg-green-50 border-green-200' :
                'bg-yellow-50 border-yellow-200'
              }`}>
                <h4 className="text-xl font-bold text-[#004D61] mb-4 text-center">
                  {data.recommendation === 'loan' ? 'Anbefaling: Billån' :
                   data.recommendation === 'lease' ? 'Anbefaling: Leasing' :
                   'Anbefaling: Avhenger av behov'}
                </h4>
                <p className="text-gray-700 text-center mb-4">
                  {data.recommendationReason}
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#004D61]">
                    {Math.abs(data.totalDifference).toLocaleString('nb-NO')} kr
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.totalDifference > 0 ? 'Billån er billigere' : 'Leasing er billigere'}
                  </div>
                </div>
              </div>

              {/* Break-even Analysis */}
              <div className="card-elegant card-interactive rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#004D61] mb-4">Break-even analyse</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Break-even tid:</span>
                    <span className="font-semibold">
                      {data.breakEvenMonths > 0 ? `${data.breakEvenMonths} måneder` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Årlig kilometer:</span>
                    <span className="font-semibold">{data.leaseMileage.toLocaleString('nb-NO')} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Overkilometer kostnad:</span>
                    <span className="font-semibold">{data.excessMileageRate} kr/km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
            Fordeler og ulemper
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Billån */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Billån</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-600 mb-3">Fordeler</h4>
                <ul className="space-y-2">
                  {prosCons.loan.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-3">Ulemper</h4>
                <ul className="space-y-2">
                  {prosCons.loan.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Leasing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Leasing</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-600 mb-3">Fordeler</h4>
                <ul className="space-y-2">
                  {prosCons.lease.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-3">Ulemper</h4>
                <ul className="space-y-2">
                  {prosCons.lease.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#004D61] to-[#006B7D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klar til å velge finansiering?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bruk vår billånskalkulator for å få et nøyaktig tilbud på billån.
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

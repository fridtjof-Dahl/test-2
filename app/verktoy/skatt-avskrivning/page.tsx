'use client';

import { useState, useCallback, useEffect } from 'react';
import VerktoyLayout from '@/components/verktoy/VerktoyLayout';

interface TaxDepreciationData {
  carPrice: number;
  businessUsePercentage: number;
  depreciationMethod: 'linear' | 'declining';
  depreciationPeriod: number;
  taxRate: number;
  
  annualDepreciation: number;
  totalDepreciation: number;
  remainingValue: number;
  taxSavings: number;
  
  monthlyTaxSavings: number;
  effectiveCost: number;
  recommendation: string;
}

export default function TaxDepreciationPage() {
  const [data, setData] = useState<TaxDepreciationData>({
    carPrice: 500000,
    businessUsePercentage: 80,
    depreciationMethod: 'linear',
    depreciationPeriod: 5,
    taxRate: 22,
    
    annualDepreciation: 0,
    totalDepreciation: 0,
    remainingValue: 0,
    taxSavings: 0,
    
    monthlyTaxSavings: 0,
    effectiveCost: 0,
    recommendation: ''
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const calculateDepreciation = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      // Enhanced depreciation calculation with Norwegian tax rules
      const businessValue = data.carPrice * (data.businessUsePercentage / 100);
      
      let annualDepreciation = 0;
      let totalDepreciation = 0;
      let remainingValue = data.carPrice;
      let depreciationSchedule: { year: number; depreciation: number; remainingValue: number }[] = [];
      
      if (data.depreciationMethod === 'linear') {
        // Linear depreciation (most common for cars in Norway)
        annualDepreciation = businessValue / data.depreciationPeriod;
        totalDepreciation = annualDepreciation * data.depreciationPeriod;
        remainingValue = data.carPrice - totalDepreciation;
        
        // Create depreciation schedule
        for (let year = 1; year <= data.depreciationPeriod; year++) {
          const yearDepreciation = annualDepreciation;
          const yearRemainingValue = data.carPrice - (yearDepreciation * year);
          depreciationSchedule.push({
            year,
            depreciation: Math.round(yearDepreciation),
            remainingValue: Math.round(Math.max(0, yearRemainingValue))
          });
        }
      } else {
        // Declining balance depreciation (200% method)
        const rate = 2 / data.depreciationPeriod;
        let currentValue = businessValue;
        
        for (let year = 1; year <= data.depreciationPeriod; year++) {
          const yearlyDepreciation = Math.min(currentValue * rate, currentValue);
          totalDepreciation += yearlyDepreciation;
          currentValue -= yearlyDepreciation;
          
          depreciationSchedule.push({
            year,
            depreciation: Math.round(yearlyDepreciation),
            remainingValue: Math.round(Math.max(0, data.carPrice - totalDepreciation))
          });
        }
        
        annualDepreciation = totalDepreciation / data.depreciationPeriod;
        remainingValue = data.carPrice - totalDepreciation;
      }
      
      // Calculate tax benefits
      const taxSavings = totalDepreciation * (data.taxRate / 100);
      const monthlyTaxSavings = taxSavings / (data.depreciationPeriod * 12);
      const effectiveCost = data.carPrice - taxSavings;
      
      // Calculate additional tax benefits (VAT, fuel, maintenance)
      const vatSavings = data.carPrice * 0.25 * (data.businessUsePercentage / 100); // 25% VAT on business portion
      const annualFuelSavings = 15000 * (data.businessUsePercentage / 100) * (data.taxRate / 100); // Estimated fuel costs
      const annualMaintenanceSavings = 8000 * (data.businessUsePercentage / 100) * (data.taxRate / 100); // Estimated maintenance
      
      const totalAnnualTaxSavings = (taxSavings / data.depreciationPeriod) + annualFuelSavings + annualMaintenanceSavings;
      const totalTaxSavings = taxSavings + (vatSavings * (data.taxRate / 100)) + (annualFuelSavings * data.depreciationPeriod) + (annualMaintenanceSavings * data.depreciationPeriod);
      
      // Enhanced recommendation with specific advice
      let recommendation = '';
      const recommendations = [];
      
      if (data.businessUsePercentage >= 90) {
        recommendations.push('Utmerket næringsandel - maksimale skattefordeler');
      } else if (data.businessUsePercentage >= 80) {
        recommendations.push('Høy næringsandel - betydelige skattefordeler');
      } else if (data.businessUsePercentage >= 60) {
        recommendations.push('Moderat næringsandel - gode skattefordeler');
      } else if (data.businessUsePercentage >= 40) {
        recommendations.push('Lav næringsandel - begrensede skattefordeler');
      } else {
        recommendations.push('Meget lav næringsandel - minimale skattefordeler');
      }
      
      if (data.depreciationMethod === 'linear' && data.depreciationPeriod <= 5) {
        recommendations.push('Lineær avskrivning over 5 år er optimal for biler');
      }
      
      if (totalTaxSavings > data.carPrice * 0.3) {
        recommendations.push('Betydelige skattebesparelser - anbefales for bedriftskjøp');
      }
      
      if (data.businessUsePercentage < 50) {
        recommendations.push('Vurder å øke næringsbruken for bedre skattefordeler');
      }
      
      recommendation = recommendations.join('. ') + '.';
      
      setData(prev => ({
        ...prev,
        annualDepreciation: Math.round(annualDepreciation),
        totalDepreciation: Math.round(totalDepreciation),
        remainingValue: Math.round(remainingValue),
        taxSavings: Math.round(totalTaxSavings),
        monthlyTaxSavings: Math.round(totalAnnualTaxSavings / 12),
        effectiveCost: Math.round(data.carPrice - totalTaxSavings),
        recommendation
      }));
      
      setIsCalculating(false);
    }, 1000);
  }, [data.carPrice, data.businessUsePercentage, data.depreciationMethod, 
      data.depreciationPeriod, data.taxRate]);

  useEffect(() => {
    calculateDepreciation();
  }, [calculateDepreciation]);

  const updateData = (field: keyof TaxDepreciationData, value: number | string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Verktøy', href: '/verktoy' },
    { label: 'Skatt og Avskrivning' }
  ];

  const depreciationMethods = [
    { value: 'linear', label: 'Lineær avskrivning' },
    { value: 'declining', label: 'Saldo avskrivning' }
  ];

  return (
    <VerktoyLayout
      title="Skatt og Avskrivning"
      description="Beregn skattemessig avskrivning for firmabil. Se hvor mye du kan trekke fra i skatt og optimaliser skattesituasjonen din."
      breadcrumbItems={breadcrumbItems}
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Skattemessig avskrivning</span>
          </div>
          
          <h1 className="text-5xl font-bold text-[#004D61] mb-6">
            Skatt og Avskrivning
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Beregn skattemessig avskrivning for firmabil. Se hvor mye du kan spare på skatt 
            og hva den effektive kostnaden blir for bedriften.
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Næringsandel (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.businessUsePercentage}
                      onChange={(e) => updateData('businessUsePercentage', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Hvor stor del av bilen brukes til næring
                    </p>
                  </div>
                </div>
              </div>

              {/* Depreciation Settings */}
              <div className="card-elegant card-interactive rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#004D61] mb-6">Avskrivningsinnstillinger</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Avskrivningsmetode
                    </label>
                    <select
                      value={data.depreciationMethod}
                      onChange={(e) => updateData('depreciationMethod', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
                    >
                      {depreciationMethods.map(method => (
                        <option key={method.value} value={method.value}>{method.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Avskrivningsperiode (år)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={data.depreciationPeriod}
                      onChange={(e) => updateData('depreciationPeriod', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selskapskattesats (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={data.taxRate}
                      onChange={(e) => updateData('taxRate', Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {isCalculating ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Beregner avskrivning...</p>
                </div>
              ) : (
                <>
                  {/* Main Results */}
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200">
                    <h3 className="text-2xl font-bold text-[#004D61] mb-6 text-center">Avskrivningsresultater</h3>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-violet-600 mb-2">
                          {data.annualDepreciation.toLocaleString('nb-NO')} kr
                        </div>
                        <div className="text-sm text-gray-600">Årlig avskrivning</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {data.totalDepreciation.toLocaleString('nb-NO')} kr
                        </div>
                        <div className="text-sm text-gray-600">Total avskrivning</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {data.taxSavings.toLocaleString('nb-NO')} kr
                      </div>
                      <div className="text-sm text-gray-600">Skattespare</div>
                    </div>
                  </div>

                  {/* Cost Analysis */}
                  <div className="card-elegant card-interactive rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Kostnadsanalyse</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Opprinnelig kostnad:</span>
                        <span className="font-semibold">{data.carPrice.toLocaleString('nb-NO')} kr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Skattespare:</span>
                        <span className="font-semibold text-green-600">-{data.taxSavings.toLocaleString('nb-NO')} kr</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-bold text-[#004D61]">
                          <span>Effektiv kostnad:</span>
                          <span>{data.effectiveCost.toLocaleString('nb-NO')} kr</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Benefits */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Månedlige fordeler</h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {data.monthlyTaxSavings.toLocaleString('nb-NO')} kr
                      </div>
                      <div className="text-sm text-gray-600">Månedlig skattespare</div>
                      <div className="text-xs text-gray-500 mt-1">
                        (Over {data.depreciationPeriod} år)
                      </div>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                    <h4 className="text-lg font-bold text-[#004D61] mb-4">Anbefaling</h4>
                    <p className="text-gray-700 text-sm">{data.recommendation}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Depreciation Methods */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
            Avskrivningsmetoder
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#004D61] mb-6">Lineær avskrivning</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Bilen avskrives med like store beløp hvert år over avskrivningsperioden.
                </p>
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Formel:</h4>
                  <p className="text-sm text-blue-700 font-mono">
                    Årlig avskrivning = (Kjøpesum × Næringsandel) ÷ Avskrivningsperiode
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enkel og forutsigbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Best for biler med jevn verdifall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mest vanlig metode</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#004D61] mb-6">Saldo avskrivning</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Bilen avskrives med høyere beløp i begynnelsen og lavere beløp mot slutten.
                </p>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Formel:</h4>
                  <p className="text-sm text-purple-700 font-mono">
                    Årlig avskrivning = Gjenstående verdi × (2 ÷ Avskrivningsperiode)
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Høyere avskrivning i begynnelsen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Best for biler med raskt verdifall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mer kompleks beregning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#004D61] mb-12 text-center">
            Skatteregler for firmabil
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#004D61] mb-6">Krav til avskrivning</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Bilen må brukes i næringsvirksomhet</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Næringsandel må dokumenteres</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Maksimal avskrivningsperiode er 5 år</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Kjøretøyregistrering på firmaet</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#004D61] mb-6">Dokumentasjonskrav</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Kjøpsdokumenter og kvitteringer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Kjørelogg for næringsbruk</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Avskrivningsberegninger</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Årsregnskap og skattemelding</span>
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
            Trenger du hjelp med firmabil?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Få veiledning om finansiering og skattemessige aspekter ved firmabil.
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

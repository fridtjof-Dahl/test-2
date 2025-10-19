'use client';

import { memo } from 'react';
import { trackButtonClick } from '@/lib/analytics';

const ImprovedHero = memo(function ImprovedHero() {
  return (
    <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FF6B35] rounded-full px-6 py-3 mb-8">
              <span className="text-white text-xs font-bold">•</span>
              <span className="text-sm font-medium text-white">Rask behandling</span>
              <span className="text-white text-xs font-bold">•</span>
              <span className="text-sm font-medium text-white">Svar innen 24 timer</span>
              <span className="text-white text-xs font-bold">•</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004D61] mb-6 leading-tight">
              Få billån på dagen
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Få et uforpliktende tilbud innen 24 timer.
              <span className="font-semibold text-[#FF6B35]"> 100% gratis.</span>
            </p>
            
            {/* Feature indicators - simple text with icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#10B981] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-[#004D61] font-medium">100% gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#004D61] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-[#004D61] font-medium">Rask behandling</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="#lead-form" 
                onClick={() => trackButtonClick('sok_billan_na', 'hero')}
                className="group inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 min-h-[56px]"
              >
                <span>Søk billån nå</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/kalkulator"
                onClick={() => trackButtonClick('proev_kalkulatoren', 'hero')}
                className="group inline-flex items-center gap-2 bg-white text-[#004D61] hover:bg-gray-50 font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-[#004D61] hover:border-[#006B7D] shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#004D61]/30 min-h-[56px]"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Prøv kalkulatoren</span>
              </a>
            </div>
          </div>

          {/* Right Column - Professional Illustration */}
          <div className="hidden lg:block">
            <div className="relative max-w-lg mx-auto">
              {/* Floating elements for professional look */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#E55A24] rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-20 -left-4 w-6 h-6 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-20 -right-8 w-4 h-4 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-full animate-bounce delay-700"></div>
              
              {/* Professional car illustration */}
              <svg viewBox="0 0 500 400" className="w-full h-auto max-h-96 drop-shadow-2xl" aria-hidden="true">
                <defs>
                  <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#004D61"/>
                    <stop offset="100%" stopColor="#003847"/>
                  </linearGradient>
                  <linearGradient id="moneyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>
                </defs>
                
                {/* Background circles for depth */}
                <circle cx="250" cy="200" r="180" fill="#FFF4E6" opacity="0.5"/>
                <circle cx="250" cy="200" r="140" fill="#E8F8F0" opacity="0.5"/>
                
                {/* Car illustration */}
                <g transform="translate(150, 180)">
                  {/* Car body with gradient */}
                  <rect x="0" y="30" width="200" height="60" rx="10" fill="url(#carGradient)"/>
                  <rect x="20" y="10" width="160" height="40" rx="8" fill="#003847"/>
                  
                  {/* Windows */}
                  <rect x="30" y="15" width="60" height="30" rx="4" fill="#E8F4F8"/>
                  <rect x="110" y="15" width="60" height="30" rx="4" fill="#E8F4F8"/>
                  
                  {/* Wheels */}
                  <circle cx="50" cy="90" r="20" fill="#1F2937"/>
                  <circle cx="50" cy="90" r="12" fill="#6B7280"/>
                  <circle cx="150" cy="90" r="20" fill="#1F2937"/>
                  <circle cx="150" cy="90" r="12" fill="#6B7280"/>
                </g>
                
                {/* Money/Check icon with gradient */}
                <g transform="translate(320, 100)">
                  <rect x="0" y="0" width="80" height="50" rx="6" fill="url(#moneyGradient)"/>
                  <circle cx="40" cy="25" r="12" fill="white"/>
                  <text x="40" y="30" textAnchor="middle" fill="#10B981" fontSize="16" fontWeight="bold">kr</text>
                </g>
                
                {/* Checkmark badge */}
                <g transform="translate(100, 80)">
                  <circle cx="0" cy="0" r="25" fill="#10B981"/>
                  <path d="M-8 0 L-3 5 L8 -6" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                
                {/* Happy person icon */}
                <g transform="translate(380, 250)">
                  <circle cx="0" cy="0" r="30" fill="#FF6B35"/>
                  <circle cx="-8" cy="-5" r="3" fill="white"/>
                  <circle cx="8" cy="-5" r="3" fill="white"/>
                  <path d="M-12 5 Q0 15 12 5" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
});

export default ImprovedHero;
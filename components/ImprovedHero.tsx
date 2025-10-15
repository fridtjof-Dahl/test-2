'use client';

import { memo } from 'react';
import { trackButtonClick } from '@/lib/analytics';

const ImprovedHero = memo(function ImprovedHero() {
  return (
        <section className="relative hero-gradient py-20 md:py-28 overflow-hidden" role="banner" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Rask behandling • Svar innen 24 timer
            </div>
            
            <h1 id="hero-heading" className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#004D61] mb-6 leading-tight">
              Få billån på dagen
            </h1>
            
            <p id="hero-description" className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Få et uforpliktende tilbud innen 24 timer.<br />
              100% gratis.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8" role="list" aria-label="Tjenestefordeler">
              <div className="flex items-center gap-2" role="listitem">
                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">100% gratis</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Rask behandling</span>
              </div>
              
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8" role="group" aria-label="Handlinger">
            <a 
              href="#lead-form" 
              onClick={() => trackButtonClick('sok_billan_na', 'hero')}
              className="btn-primary text-lg"
              aria-describedby="hero-description"
            >
              Søk billån nå →
            </a>
            <a
              href="/kalkulator"
              onClick={() => trackButtonClick('proev_kalkulatoren', 'hero')}
              className="btn-secondary text-lg"
              aria-label="Prøv lånekalkulatoren"
            >
              Prøv kalkulatoren
            </a>
            </div>

          </div>

          {/* Right Column - Optimized Illustration */}
          <div className="hidden lg:block">
            <div className="relative max-w-md mx-auto">
              {/* Optimized SVG with better performance */}
              <svg viewBox="0 0 500 400" className="w-full h-auto max-h-96" aria-hidden="true">
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
                
                {/* Background circles */}
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

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
});

export default ImprovedHero;


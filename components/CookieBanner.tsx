'use client';

import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        // Show immediately
        setIsVisible(true);
        console.log('Cookie banner should be visible now');
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'accepted');
      // Update Google Analytics consent
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
        });
      }
    }
    handleClose();
  };

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'rejected');
      // Update Google Analytics consent
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
        });
      }
    }
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        aria-hidden="true"
      />
      
      {/* Cookie Banner */}
      <div 
        className="cookie-banner fixed z-[9999] bg-white border-2 border-[#004D61]"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        aria-modal="true"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h3 
                id="cookie-banner-title"
                className="text-xl font-bold text-[#004D61] mb-3 leading-tight"
              >
                🍪 Vi bruker informasjonskapsler
              </h3>
              <p 
                id="cookie-banner-description"
                className="text-base text-gray-700 leading-relaxed"
              >
                Vi bruker informasjonskapsler for å forbedre din opplevelse på vår nettside, 
                analysere trafikk og personalisere innhold. Du kan velge hvilke informasjonskapsler 
                du vil tillate.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-6 py-3 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 min-h-[48px] touch-manipulation"
                aria-label="Kun tillat nødvendige informasjonskapsler"
              >
                Kun nødvendige
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-3 text-base font-semibold text-white bg-[#FF6B35] hover:bg-[#E55A24] active:bg-[#D1491F] rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#FF6B35] focus:ring-opacity-50 min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl"
                aria-label="Godta alle informasjonskapsler"
              >
                Godta alle
              </button>
            </div>
          </div>
          
          {/* Additional info link */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Les mer om vår bruk av informasjonskapsler i vår{' '}
              <a 
                href="/personvern" 
                className="text-[#004D61] hover:text-[#FF6B35] underline underline-offset-2 font-medium transition-colors duration-200"
                aria-label="Les personvernpolicy for informasjonskapsler"
              >
                personvernpolicy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
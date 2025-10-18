'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setIsVisible(true);
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
    setIsVisible(false);
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
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg" style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#004D61] mb-2">
              Vi bruker informasjonskapsler
            </h3>
            <p className="text-sm text-gray-600">
              Vi bruker informasjonskapsler for å forbedre din opplevelse på vår nettside. 
              Du kan velge hvilke informasjonskapsler du vil tillate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Kun nødvendige
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-medium text-white bg-[#FF6B35] hover:bg-[#E55A24] rounded-lg transition-colors"
            >
              Godta alle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
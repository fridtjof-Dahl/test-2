'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
          setIsVisible(true);
        } else {
          const savedPreferences = JSON.parse(consent);
          setPreferences(savedPreferences);
          // Update Google Analytics consent mode
          updateConsentMode(savedPreferences);
        }
      } catch (error) {
        console.error('Error with localStorage:', error);
        // If localStorage fails (like in incognito), show banner
        setIsVisible(true);
      }
    }
  }, []);

  const updateConsentMode = (prefs: CookiePreferences) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
      updateConsentMode(allAccepted);
    }
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
      updateConsentMode(onlyNecessary);
    }
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(preferences));
      updateConsentMode(preferences);
    }
    setIsVisible(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  // Always show banner if localStorage is not available (like in incognito)
  if (!isVisible && typeof window !== 'undefined') {
    try {
      localStorage.getItem('test');
    } catch {
      // localStorage not available, show banner
      setIsVisible(true);
    }
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      <div className="absolute inset-0 bg-black/50 pointer-events-auto" onClick={() => setIsVisible(false)}></div>
      <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 max-w-4xl w-full pointer-events-auto">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#004D61] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#004D61] mb-2">
                  Vi respekterer ditt personvern
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Vi bruker informasjonskapsler for å forbedre din opplevelse på vår nettside.
                  Nødvendige informasjonskapsler er alltid aktive, men du kan velge om du vil
                  tillate statistikk og markedsføring.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                  >
                    Godta alle
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    Kun nødvendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="border border-[#004D61] text-[#004D61] hover:bg-[#004D61] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#004D61]/30"
                  >
                    Innstillinger
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#004D61]">
                Cookie-innstillinger
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Administrer dine preferanser for informasjonskapsler.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Nødvendige</h4>
                  <p className="text-gray-600 text-sm">Disse er essensielle for at nettsiden skal fungere.</p>
                </div>
                <label className="relative inline-flex items-center cursor-not-allowed">
                  <input type="checkbox" checked={preferences.necessary} disabled className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004D61]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Statistikk</h4>
                  <p className="text-gray-600 text-sm">Hjelper oss å forstå hvordan besøkende bruker nettsiden.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6B35]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Markedsføring</h4>
                  <p className="text-gray-600 text-sm">Brukes for å vise relevante annonser.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6B35]"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={handleSaveSettings}
                className="bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
              >
                Lagre innstillinger
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                Avbryt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
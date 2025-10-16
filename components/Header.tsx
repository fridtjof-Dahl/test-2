'use client';

import Link from 'next/link';
import Image from 'next/image';
import { memo, useState, useCallback } from 'react';
import { trackButtonClick } from '@/lib/analytics';

const Header = memo(function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-[#004D61] hover:text-[#003847] transition" aria-label="Enkel Finansiering - Hjem">
            <div className="w-10 h-10 flex-shrink-0">
              <Image
                src="/favicon.svg"
                alt="Enkel Finansiering logo"
                width={40}
                height={40}
                priority
                className="block"
              />
            </div>
            <span>Enkel Finansiering</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Hovednavigasjon">
            <Link href="/" className="text-gray-700 hover:text-[#FF6B35] transition font-medium" aria-current="page">
              Hjem
            </Link>
            <Link href="/billan" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
              Alt du trenger å vite
            </Link>
            <Link href="/kalkulator" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
              Kalkulator
            </Link>
            {/* Sammenlign fjernet fra header */}
            <Link href="/kontakt" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
              Kontakt
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <a 
            href="#lead-form" 
            onClick={() => trackButtonClick('sok_billan', 'header')}
            className="hidden md:inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 min-h-[48px]"
            aria-label="Søk om billån"
          >
            Søk billån
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-lg text-gray-700 hover:text-[#FF6B35] hover:bg-gray-100 transition-all focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 min-h-[48px] min-w-[48px]"
            aria-label="Åpne navigasjonsmeny"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobilnavigasjon">
              {/* Main Navigation */}
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-3 px-4 rounded-lg hover:bg-gray-50 flex items-center gap-3 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Hjem
              </Link>
              
              <Link 
                href="/billan" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-3 px-4 rounded-lg hover:bg-gray-50 flex items-center gap-3 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Alt du trenger å vite
              </Link>

              {/* Kalkulator & Verktøy Dropdown */}
              <div className="border-l-2 border-[#FF6B35] pl-4 ml-4">
                <div className="text-sm font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Kalkulator & Verktøy
                </div>
                <div className="space-y-1">
                  <Link 
                    href="/kalkulator" 
                    className="text-gray-600 hover:text-[#FF6B35] transition text-sm py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                    Billånskalkulator
                  </Link>
                  <Link 
                    href="/verktoy" 
                    className="text-gray-600 hover:text-[#FF6B35] transition text-sm py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                    Alle verktøy
                  </Link>
                  <Link 
                    href="/verktoy/bilverdi-estimator" 
                    className="text-gray-600 hover:text-[#FF6B35] transition text-sm py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Bilverdi Estimator
                  </Link>
                  <Link 
                    href="/verktoy/billan-vs-leasing" 
                    className="text-gray-600 hover:text-[#FF6B35] transition text-sm py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Billån vs Leasing
                  </Link>
                  <Link 
                    href="/verktoy/rente-trender" 
                    className="text-gray-600 hover:text-[#FF6B35] transition text-sm py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Rente Trend
                  </Link>
                </div>
              </div>

              {/* Sammenlign fjernet fra mobilmeny */}

              <Link 
                href="/kontakt" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-3 px-4 rounded-lg hover:bg-gray-50 flex items-center gap-3 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kontakt
              </Link>

              {/* CTA Button */}
              <a 
                href="#lead-form" 
                onClick={() => {
                  trackButtonClick('sok_billan', 'mobile-menu');
                  closeMobileMenu();
                }}
                className="bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-4 rounded-full transition text-center mt-4 flex items-center justify-center gap-2"
                aria-label="Søk om billån"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Søk billån
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;


'use client';

import Link from 'next/link';
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
          <Link href="/" className="text-2xl font-bold text-[#004D61] hover:text-[#003847] transition" aria-label="Enkel Finansiering - Hjem">
            Enkel Finansiering
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Hovednavigasjon">
            <Link href="/" className="text-gray-700 hover:text-[#FF6B35] transition font-medium" aria-current="page">
              Hjem
            </Link>
            <Link href="/kalkulator" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
              Kalkulator
            </Link>
            <Link href="/pa-dagen" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
              Billån på dagen
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
              Kontakt
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <a 
            href="#lead-form" 
            onClick={() => trackButtonClick('sok_billan', 'header')}
            className="hidden md:inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-2 rounded-full transition"
            aria-label="Søk om billån"
          >
            Søk billån
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#FF6B35] hover:bg-gray-100 transition-colors"
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
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobilnavigasjon">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Hjem
              </Link>
              <Link 
                href="/kalkulator" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Kalkulator
              </Link>
              <Link 
                href="/pa-dagen" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Billån på dagen
              </Link>
              <Link 
                href="/kontakt" 
                className="text-gray-700 hover:text-[#FF6B35] transition font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
              <a 
                href="#lead-form" 
                onClick={() => {
                  trackButtonClick('sok_billan', 'mobile-menu');
                  closeMobileMenu();
                }}
                className="bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-3 rounded-full transition text-center mt-4"
                aria-label="Søk om billån"
              >
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


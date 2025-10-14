'use client';

import Link from 'next/link';
import { memo } from 'react';
import { trackButtonClick } from '@/lib/analytics';

const Header = memo(function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center md:justify-between">
          <Link href="/" className="text-2xl font-bold text-[#004D61] hover:text-[#003847] transition">
            Enkel Finansiering
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#FF6B35] transition font-medium">
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
          <a 
            href="#lead-form" 
            onClick={() => trackButtonClick('sok_billan', 'header')}
            className="hidden md:inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Søk billån
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;


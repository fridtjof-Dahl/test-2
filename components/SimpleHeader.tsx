'use client';

import Link from 'next/link';

export default function SimpleHeader() {
  return (
    <header style={{ 
      background: 'white', 
      border: '2px solid red', 
      padding: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#004D61' }}>
          Enkel Finansiering
        </Link>
        
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link href="/" style={{ color: '#374151', textDecoration: 'none' }}>
            Hjem
          </Link>
          <Link href="/billan" style={{ color: '#374151', textDecoration: 'none' }}>
            Alt du trenger å vite
          </Link>
          <Link href="/kalkulator" style={{ color: '#374151', textDecoration: 'none' }}>
            Kalkulator
          </Link>
          <Link href="/kontakt" style={{ color: '#374151', textDecoration: 'none' }}>
            Kontakt
          </Link>
        </nav>
        
        <a 
          href="#lead-form" 
          style={{ 
            background: '#FF6B35', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Søk billån
        </a>
      </div>
    </header>
  );
}

/**
 * SEO Utilities for Enkel Finansiering
 * Contains geographic data and SEO helpers for local search optimization
 */

export const NORWEGIAN_CITIES = [
  'Oslo',
  'Bergen',
  'Trondheim',
  'Stavanger',
  'Tromsø',
  'Kristiansand',
  'Drammen',
  'Fredrikstad',
  'Sandnes',
  'Asker',
  'Bærum',
  'Tønsberg',
  'Moss',
  'Haugesund',
  'Arendal',
  'Bodø',
  'Ålesund',
  'Hamar',
  'Larvik',
  'Halden'
] as const;

export const GEO_KEYWORDS = {
  base: [
    'billån',
    'billån på dagen',
    'billånskalkulator',
    'billån uten egenkapital',
    'billån rente',
    'billån 2026',
    'billån Norge',
    'billån online',
    'billån søknad',
    'billån beste rente',
    'billån sammenligning',
    'billån beregning',
    'billån månedskostnad',
    'billån kredittvurdering',
    'billån godkjent',
    'billån raskt svar',
    'billån 24 timer',
    'billån uforpliktende',
    'billån rask behandling',
    'billån samarbeidspartner',
    'billån kalkulator',
    'billån søknad online',
    'billån fullfinansiering',
    'billån 100% finansiering',
    'elbil lån',
    'grønt billån',
    'finansiering bil',
    'lån til bil'
  ],
  local: (city: string) => [
    `billån ${city}`,
    `billån ${city.toLowerCase()}`,
    `billån i ${city}`,
    `billån i ${city.toLowerCase()}`,
    `billån ${city} 2026`,
    `billån uten egenkapital ${city}`,
    `billån kalkulator ${city}`,
    `billån beste rente ${city}`,
    `billån ${city} online`,
    `billån søknad ${city}`
  ]
};

/**
 * Generate local SEO keywords for a specific city
 */
export function getLocalKeywords(city: string): string[] {
  return [
    ...GEO_KEYWORDS.base,
    ...GEO_KEYWORDS.local(city)
  ];
}

/**
 * Generate description with geographic targeting
 */
export function getLocalDescription(baseDescription: string, cities?: string[]): string {
  const cityList = cities && cities.length > 0 
    ? cities.slice(0, 5).join(', ') 
    : 'Oslo, Bergen, Trondheim, Stavanger';
  
  return `${baseDescription} Tilgjengelig i hele Norge - ${cityList} og resten av landet.`;
}

/**
 * Generate structured data for LocalBusiness with geographic targeting
 */
export function getLocalBusinessSchema(cities: string[] = NORWEGIAN_CITIES.slice(0, 10)) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Enkel Finansiering",
    "description": "Norges enkleste vei til billån. Vi hjelper deg med å finne det beste lånetilbudet. Tilgjengelig i hele Norge.",
    "url": "https://enkelfinansiering.no",
    "logo": "https://enkelfinansiering.no/favicon.svg",
    "foundingDate": "2020",
    "serviceType": "Billån",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Norge"
      },
      ...cities.map(city => ({
        "@type": "City",
        "name": city
      }))
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47-960-07-981",
      "contactType": "customer service",
      "availableLanguage": ["Norwegian", "Norwegian Bokmål"],
      "areaServed": "NO"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO",
      "addressLocality": "Norge"
    }
  };
}

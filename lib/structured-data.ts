// Structured Data (JSON-LD) for better SEO

export interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    availableLanguage: string;
  };
  sameAs?: string[];
}

export interface Service {
  name: string;
  description: string;
  provider: Organization;
  areaServed: string;
  serviceType: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export function generateOrganizationSchema(org: Organization) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": org.name,
    "url": org.url,
    "logo": org.logo,
    "description": org.description,
    "address": org.address ? {
      "@type": "PostalAddress",
      "streetAddress": org.address.streetAddress,
      "addressLocality": org.address.addressLocality,
      "addressRegion": org.address.addressRegion,
      "postalCode": org.address.postalCode,
      "addressCountry": org.address.addressCountry
    } : undefined,
    "contactPoint": org.contactPoint ? {
      "@type": "ContactPoint",
      "telephone": org.contactPoint.telephone,
      "contactType": org.contactPoint.contactType,
      "availableLanguage": org.contactPoint.availableLanguage
    } : undefined,
    "sameAs": org.sameAs || []
  };
}

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": generateOrganizationSchema(service.provider),
    "areaServed": service.areaServed,
    "serviceType": service.serviceType,
    "offers": service.offers ? {
      "@type": "Offer",
      "price": service.offers.price,
      "priceCurrency": service.offers.priceCurrency,
      "availability": service.offers.availability
    } : undefined
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateWebSiteSchema(siteUrl: string, searchUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": searchUrl
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateLocalBusinessSchema(business: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours: string[];
  priceRange: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": business.description,
    "url": business.url,
    "telephone": business.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.streetAddress,
      "addressLocality": business.address.addressLocality,
      "addressRegion": business.address.addressRegion,
      "postalCode": business.address.postalCode,
      "addressCountry": business.address.addressCountry
    },
    "openingHours": business.openingHours,
    "priceRange": business.priceRange
  };
}

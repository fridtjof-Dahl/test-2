// Advanced SEO techniques

/**
 * Generate dynamic meta tags based on page content
 */
export function generateDynamicMetaTags(pageData: {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
}) {
  const baseUrl = 'https://enkelfinansiering.no';
  
  return {
    title: `${pageData.title} | Enkel Finansiering`,
    description: pageData.description,
    keywords: pageData.keywords.join(', '),
    canonical: `${baseUrl}${pageData.canonicalUrl}`,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${baseUrl}${pageData.canonicalUrl}`,
      type: 'website',
      images: pageData.ogImage ? [{ url: pageData.ogImage }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: pageData.ogImage ? [pageData.ogImage] : undefined
    }
  };
}

/**
 * Generate breadcrumb data for better navigation
 */
export function generateBreadcrumbs(currentPath: string) {
  const pathSegments = currentPath.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Hjem', url: '/' }];
  
  let currentUrl = '';
  pathSegments.forEach(segment => {
    currentUrl += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({ name, url: currentUrl });
  });
  
  return breadcrumbs;
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
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

/**
 * Generate local business structured data
 */
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Enkel Finansiering",
    "description": "Vi hjelper deg med billån på dagen. Få et uforpliktende tilbud innen 24 timer.",
    "url": "https://enkelfinansiering.no",
    "telephone": "+47 960 07 981",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Norge"
    }
  };
}

/**
 * Generate article structured data for blog posts
 */
export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Enkel Finansiering",
      "logo": {
        "@type": "ImageObject",
        "url": "https://enkelfinansiering.no/logo.png"
      }
    },
    "image": article.image || "https://enkelfinansiering.no/og-image.jpg"
  };
}

/**
 * Generate review structured data
 */
export function generateReviewStructuredData(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Enkel Finansiering",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
}

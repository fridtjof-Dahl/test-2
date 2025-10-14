// Advanced resource hints for optimal loading

/**
 * Generate critical resource hints
 */
export function generateResourceHints() {
  if (typeof window === 'undefined') return '';

  const hints = [
    // DNS prefetch for external domains
    '<link rel="dns-prefetch" href="//fonts.googleapis.com">',
    '<link rel="dns-prefetch" href="//fonts.gstatic.com">',
    '<link rel="dns-prefetch" href="//www.google-analytics.com">',
    '<link rel="dns-prefetch" href="//www.googletagmanager.com">',
    '<link rel="dns-prefetch" href="//www.googleadservices.com">',
    '<link rel="dns-prefetch" href="//googleads.g.doubleclick.net">',
    
    // Preconnect to critical origins
    '<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link rel="preconnect" href="https://www.google-analytics.com" crossorigin>',
    
    // Preload critical fonts
    '<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>',
    
    // Preload critical CSS
    '<link rel="preload" href="/styles/critical.css" as="style">',
    
    // Preload critical JavaScript
    '<link rel="modulepreload" href="/_next/static/chunks/pages/_app.js">',
    
    // Preload critical images
    '<link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg">',
    
    // Prefetch likely next pages
    '<link rel="prefetch" href="/kalkulator">',
    '<link rel="prefetch" href="/kontakt">',
    '<link rel="prefetch" href="/pa-dagen">',
  ];

  return hints.join('\n');
}

/**
 * Dynamic resource hints based on user behavior
 */
export function addDynamicResourceHints() {
  if (typeof window === 'undefined') return;

  // Prefetch on hover
  const links = document.querySelectorAll('a[href^="/"]');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const href = link.getAttribute('href');
      if (href && !document.querySelector(`link[href="${href}"]`)) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    });
  });

  // Preload images on scroll
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

/**
 * Critical resource loading strategy
 */
export function loadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Load critical CSS immediately
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'stylesheet';
  criticalCSS.href = '/styles/critical.css';
  criticalCSS.media = 'all';
  document.head.appendChild(criticalCSS);

  // Load non-critical CSS after page load
  window.addEventListener('load', () => {
    const nonCriticalCSS = document.createElement('link');
    nonCriticalCSS.rel = 'stylesheet';
    nonCriticalCSS.href = '/styles/non-critical.css';
    nonCriticalCSS.media = 'all';
    document.head.appendChild(nonCriticalCSS);
  });
}

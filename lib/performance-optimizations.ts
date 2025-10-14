// Advanced performance optimizations

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
    { href: '/manifest.json', as: 'manifest' },
    { href: '/sw.js', as: 'script' }
  ];

  criticalResources.forEach(({ href, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    if (as === 'font') link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImages() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Optimize scroll performance
 */
export function optimizeScrollPerformance() {
  if (typeof window === 'undefined') return;

  let ticking = false;

  function updateScrollPosition() {
    // Add scroll-based optimizations here
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Prefetch next page resources
 */
export function prefetchNextPage() {
  if (typeof window === 'undefined') return;

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
}

/**
 * Optimize third-party scripts
 */
export function optimizeThirdPartyScripts() {
  if (typeof window === 'undefined') return;

  // Delay non-critical scripts
  setTimeout(() => {
    // Load Google Analytics after page load
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        send_page_view: false
      });
    }
  }, 1000);
}

/**
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations() {
  preloadCriticalResources();
  lazyLoadImages();
  optimizeScrollPerformance();
  prefetchNextPage();
  optimizeThirdPartyScripts();
}

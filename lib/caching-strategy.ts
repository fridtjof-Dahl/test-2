// Advanced caching strategy for optimal performance

/**
 * Service Worker caching strategies
 */
export const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: 'cache-first',
  // Network first for API calls
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate for dynamic content
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  // Network only for critical requests
  NETWORK_ONLY: 'network-only',
  // Cache only for offline fallbacks
  CACHE_ONLY: 'cache-only',
} as const;

/**
 * Cache configuration for different resource types
 */
export const CACHE_CONFIG = {
  // Static assets (CSS, JS, images)
  static: {
    strategy: CACHE_STRATEGIES.CACHE_FIRST,
    maxAge: 31536000, // 1 year
    maxEntries: 100,
  },
  // API responses
  api: {
    strategy: CACHE_STRATEGIES.NETWORK_FIRST,
    maxAge: 300, // 5 minutes
    maxEntries: 50,
  },
  // HTML pages
  pages: {
    strategy: CACHE_STRATEGIES.STALE_WHILE_REVALIDATE,
    maxAge: 3600, // 1 hour
    maxEntries: 20,
  },
  // Images
  images: {
    strategy: CACHE_STRATEGIES.CACHE_FIRST,
    maxAge: 2592000, // 30 days
    maxEntries: 200,
  },
} as const;

/**
 * Generate cache key for resources
 */
export function generateCacheKey(url: string, version: string = 'v1'): string {
  const urlObj = new URL(url);
  return `${version}::${urlObj.pathname}${urlObj.search}`;
}

/**
 * Check if resource should be cached
 */
export function shouldCache(url: string): boolean {
  const urlObj = new URL(url);
  
  // Don't cache API routes in development
  if (process.env.NODE_ENV === 'development' && urlObj.pathname.startsWith('/api/')) {
    return false;
  }
  
  // Cache static assets
  if (urlObj.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff2?|ttf|eot)$/)) {
    return true;
  }
  
  // Cache HTML pages
  if (urlObj.pathname === '/' || urlObj.pathname.match(/^\/[^.]*$/)) {
    return true;
  }
  
  return false;
}

/**
 * Get cache strategy for resource type
 */
export function getCacheStrategy(url: string): string {
  const urlObj = new URL(url);
  
  // API routes
  if (urlObj.pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // Static assets
  if (urlObj.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff2?|ttf|eot)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // HTML pages
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
}

/**
 * Browser cache headers
 */
export function getCacheHeaders(resourceType: keyof typeof CACHE_CONFIG): Record<string, string> {
  const config = CACHE_CONFIG[resourceType];
  
  return {
    'Cache-Control': `public, max-age=${config.maxAge}`,
    'ETag': `"${Date.now()}"`,
    'Vary': 'Accept-Encoding',
  };
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/styles/critical.css', as: 'style' },
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
    { href: '/og-image.jpg', as: 'image' },
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
 * Intelligent prefetching based on user behavior
 */
export function setupIntelligentPrefetching() {
  if (typeof window === 'undefined') return;

  let prefetchTimeout: NodeJS.Timeout;

  // Prefetch on link hover
  document.addEventListener('mouseover', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
    
    if (link && !link.dataset.prefetched) {
      clearTimeout(prefetchTimeout);
      prefetchTimeout = setTimeout(() => {
        prefetchPage(link.href);
        link.dataset.prefetched = 'true';
      }, 100);
    }
  });

  // Prefetch on scroll (for images)
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src && !img.dataset.loaded) {
          img.src = img.dataset.src;
          img.dataset.loaded = 'true';
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Prefetch a page
 */
function prefetchPage(url: string) {
  if (document.querySelector(`link[href="${url}"]`)) return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
}

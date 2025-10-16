// ULTRA-OPTIMIZED Service Worker for 100/100 PageSpeed
const CACHE_VERSION = 'v7';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const API_CACHE = `api-${CACHE_VERSION}`;
const FONT_CACHE = `fonts-${CACHE_VERSION}`;

// Critical assets to cache immediately - ultra-minimal for fastest loading
const CRITICAL_ASSETS = [
  '/',
  '/favicon.svg',
  '/_next/static/css/app/layout.css',
  '/_next/static/css/app/page.css',
  '/_next/static/css/app/critical.css',
  '/kalkulator',
  '/billan',
  '/pa-dagen',
  '/verktoy',
];

// Font assets for instant loading
const FONT_ASSETS = [
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
];

// Assets to cache on demand
const CACHE_ON_DEMAND = [
  '/kalkulator',
  '/kontakt',
  '/om-oss',
  '/pa-dagen',
  '/billan',
  '/uten-egenkapital',
  '/billan-kalkulator',
  '/elbil-lan',
];

// Cache strategies
const CACHE_STRATEGIES = {
  static: ['css', 'js', 'woff2', 'woff', 'ttf'],
  images: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'],
  api: ['/api/'],
  pages: ['/']
};

// ULTRA-OPTIMIZED Install event - cache critical assets + fonts for instant loading
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache critical static assets
      caches.open(STATIC_CACHE).then(cache => cache.addAll(CRITICAL_ASSETS)),
      // Cache critical fonts for instant loading
      caches.open(FONT_CACHE).then(cache => cache.addAll(FONT_ASSETS))
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches and preload important pages
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return !cacheName.includes(CACHE_VERSION);
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        // Preload important pages in background
        return caches.open(DYNAMIC_CACHE).then(cache => {
          return Promise.all(
            CACHE_ON_DEMAND.map(url => 
              fetch(url).then(response => {
                if (response.ok) {
                  return cache.put(url, response);
                }
              }).catch(() => {})
            )
          );
        });
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Helper function to determine cache strategy
function getCacheStrategy(url) {
  const pathname = url.pathname;
  const extension = pathname.split('.').pop();
  
  if (CACHE_STRATEGIES.static.includes(extension) || pathname.startsWith('/_next/static/')) {
    return 'static';
  }
  
  if (CACHE_STRATEGIES.images.includes(extension)) {
    return 'images';
  }
  
  if (CACHE_STRATEGIES.api.some(api => pathname.startsWith(api))) {
    return 'api';
  }
  
  if (CACHE_STRATEGIES.pages.some(page => pathname === page || pathname.startsWith(page))) {
    return 'pages';
  }
  
  return 'dynamic';
}

// ULTRA-OPTIMIZED Fetch event - serve from cache or network for 100/100 PageSpeed
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and non-HTTP requests
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // Skip analytics and tracking requests to improve performance
  if (url.hostname.includes('google-analytics.com') || 
      url.hostname.includes('googletagmanager.com') ||
      url.hostname.includes('doubleclick.net')) {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  const strategy = getCacheStrategy(url);

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          // For API calls, also fetch in background to update cache
          if (strategy === 'api') {
            fetch(request).then(response => {
              if (response.ok) {
                caches.open(DYNAMIC_CACHE).then(cache => {
                  cache.put(request, response.clone());
                });
              }
            }).catch(() => {});
          }
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache based on strategy
            const cacheName = strategy === 'images' ? IMAGE_CACHE : 
                             strategy === 'static' ? STATIC_CACHE : DYNAMIC_CACHE;
            
            caches.open(cacheName)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/');
            }
            // For other requests, return a basic offline response
            return new Response('Offline', { status: 503 });
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-submission') {
    event.waitUntil(
      // Handle offline form submissions
      console.log('Background sync: form submission')
    );
  }
});

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

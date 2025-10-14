// Performance monitoring and analytics

/**
 * Web Vitals monitoring
 */
export function reportWebVitals(metric: any) {
  if (typeof window === 'undefined') return;

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      name: metric.name,
      value: Math.round(metric.value),
      delta: Math.round(metric.delta),
      id: metric.id,
    });
  }

  // Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        timestamp: Date.now(),
        url: window.location.href
      })
    }).catch(() => {}); // Silent fail
  }
}

/**
 * Error tracking
 */
export function trackError(error: Error, context?: string) {
  if (typeof window === 'undefined') return;

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      context: context || 'unknown'
    });
  }

  // Send to custom error tracking
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
        context: context || 'unknown',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      })
    }).catch(() => {}); // Silent fail
  }
}

/**
 * Performance metrics tracking
 */
export function trackPerformanceMetrics() {
  if (typeof window === 'undefined') return;

  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'page_load',
        value: loadTime
      });
    }
  });

  // Track first paint
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-paint') {
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'first_paint',
              value: entry.startTime
            });
          }
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });
  }
}

/**
 * User engagement tracking
 */
export function trackUserEngagement() {
  if (typeof window === 'undefined') return;

  let engagementTime = 0;
  let lastActiveTime = Date.now();
  let isActive = true;

  // Track active time
  const updateEngagement = () => {
    if (isActive) {
      engagementTime += Date.now() - lastActiveTime;
    }
    lastActiveTime = Date.now();
  };

  // Track when user becomes active
  ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, () => {
      if (!isActive) {
        isActive = true;
        lastActiveTime = Date.now();
      }
      updateEngagement();
    }, { passive: true });
  });

  // Track when user becomes inactive
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isActive = false;
      updateEngagement();
    } else {
      isActive = true;
      lastActiveTime = Date.now();
    }
  });

  // Send engagement data on page unload
  window.addEventListener('beforeunload', () => {
    updateEngagement();
    if (window.gtag) {
      window.gtag('event', 'engagement_time', {
        value: Math.round(engagementTime / 1000) // Convert to seconds
      });
    }
  });
}

/**
 * Initialize all monitoring
 */
export function initializeMonitoring() {
  trackPerformanceMetrics();
  trackUserEngagement();
}

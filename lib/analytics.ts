// Analytics and performance monitoring utilities

export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'web-vitals',
        metric,
        url: window.location.href,
        timestamp: Date.now(),
      }),
    }).catch(() => {
      // Silently fail if analytics endpoint is not available
    });
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', eventName, parameters);
  }
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
}

// Performance monitoring
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
  
  return end - start;
}

// Resource loading monitoring
export function monitorResourceLoading() {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        
        // Log slow resources
        if (resource.duration > 1000) {
          console.warn(`Slow resource: ${resource.name} took ${resource.duration}ms`);
        }
      }
    }
  });

  observer.observe({ entryTypes: ['resource'] });
}

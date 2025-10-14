// Performance monitoring utilities

export function measurePerformance(name: string, fn: () => void) {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    
    console.log(`${name} took ${end - start} milliseconds`);
    
    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: name,
        value: Math.round(end - start)
      });
    }
  } else {
    fn();
  }
}

export function measureAsyncPerformance<T>(
  name: string, 
  fn: () => Promise<T>
): Promise<T> {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    return fn().then(result => {
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
      
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: name,
          value: Math.round(end - start)
        });
      }
      
      return result;
    });
  } else {
    return fn();
  }
}

export function reportWebVitals(metric: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      name: metric.name,
      value: Math.round(metric.value),
      delta: Math.round(metric.delta),
      id: metric.id,
    });
  }
}

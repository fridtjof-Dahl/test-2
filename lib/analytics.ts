// Analytics event tracking utilities - direct Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Track custom events
export function trackEvent(event: GAEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
}

// Track form submissions
export function trackFormSubmission(formType: 'contact' | 'loan-application', success: boolean = true, value?: number) {
  // Track in Google Analytics
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'engagement',
    label: formType,
    value: value,
  });

  // Track in GTM dataLayer
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: success ? 'form_submit_success' : 'form_submit_error',
      form_type: formType,
      success: success,
      form_value: value,
      currency: 'NOK',
    });
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}_${location}`,
  });
}

// Track calculator interactions
export function trackCalculatorUsage(action: 'open' | 'calculate' | 'cta_click') {
  trackEvent({
    action: 'calculator_interaction',
    category: 'engagement',
    label: action,
  });
}

// Track page views (if needed for SPA navigation)
export function trackPageView(pageName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
}

// Track conversion events
export function trackConversion(conversionType: 'lead_generation' | 'loan_application', value?: number) {
  // Track in Google Analytics
  trackEvent({
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: value,
  });

  // Track in GTM dataLayer for Google Ads
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'conversion',
      conversion_type: conversionType,
      conversion_value: value,
      currency: 'NOK',
    });
  }
}
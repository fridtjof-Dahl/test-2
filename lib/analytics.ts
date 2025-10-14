// Google Analytics event tracking utilities

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
export function trackFormSubmission(formType: 'contact' | 'loan-application', success: boolean = true) {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'engagement',
    label: formType,
  });
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
  trackEvent({
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: value,
  });
}
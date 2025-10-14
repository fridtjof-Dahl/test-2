// Google Ads conversion tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Initialize Google Ads conversion tracking
 */
export function initializeGoogleAds(conversionId: string) {
  if (typeof window === 'undefined') return;

  // Load Google Ads script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', conversionId);
}

/**
 * Track a conversion event
 */
export function trackConversion(
  conversionId: string,
  conversionLabel: string,
  value?: number,
  currency: string = 'NOK'
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${conversionId}/${conversionLabel}`,
    value: value,
    currency: currency,
  });
}

/**
 * Track lead generation conversion
 */
export function trackLeadConversion(conversionId: string, value?: number) {
  trackConversion(conversionId, 'lead_generation', value);
}

/**
 * Track loan application conversion
 */
export function trackLoanApplicationConversion(conversionId: string, loanAmount: number) {
  trackConversion(conversionId, 'loan_application', loanAmount);
}

/**
 * Track calculator usage
 */
export function trackCalculatorConversion(conversionId: string) {
  trackConversion(conversionId, 'calculator_usage');
}

/**
 * Track contact form submission
 */
export function trackContactConversion(conversionId: string) {
  trackConversion(conversionId, 'contact_form');
}

// Google Tag Manager implementation

// GTM types are handled by @next/third-parties

// GTM is initialized directly in layout.tsx

/**
 * Push custom events to GTM
 */
export function pushGTMEvent(eventName: string, parameters: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formType: 'contact' | 'loan-application', success: boolean = true) {
  pushGTMEvent('form_submission', {
    form_type: formType,
    success: success,
    timestamp: new Date().toISOString()
  });
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName: string, location: string) {
  pushGTMEvent('button_click', {
    button_name: buttonName,
    location: location,
    timestamp: new Date().toISOString()
  });
}

/**
 * Track calculator interactions
 */
export function trackCalculatorUsage(action: 'open' | 'calculate' | 'cta_click') {
  pushGTMEvent('calculator_interaction', {
    action: action,
    timestamp: new Date().toISOString()
  });
}

/**
 * Track page views
 */
export function trackPageView(pageName: string, pagePath: string) {
  pushGTMEvent('page_view', {
    page_name: pageName,
    page_path: pagePath,
    timestamp: new Date().toISOString()
  });
}

/**
 * Track conversions
 */
export function trackConversion(conversionType: 'lead_generation' | 'loan_application', value?: number) {
  pushGTMEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: 'NOK',
    timestamp: new Date().toISOString()
  });
}

// Additional tracking functions can be added here as needed

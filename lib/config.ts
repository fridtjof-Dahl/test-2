// Configuration for form submissions and integrations

export const FORM_CONFIG = {
  // Email recipients
  contact: {
    primary: 'vainio@panther.no',
    admin: 'kontakt@enkelfinansiering.no',
    backup: 'fridtjof@visionmedia.no',
  },
  
  loanApplications: {
    primary: 'vainio@panther.no',
    admin: 'kontakt@enkelfinansiering.no',
    backup: 'fridtjof@visionmedia.no',
  },

  // Email service configuration
  email: {
    service: process.env.EMAIL_SERVICE || 'smtp',
    apiKey: process.env.EMAIL_API_KEY,
    fromEmail: process.env.FROM_EMAIL || 'kontakt@enkelfinansiering.no',
  },

  // Form settings
  settings: {
    // Auto-responder settings
    autoResponder: {
      enabled: true,
      subject: 'Takk for din henvendelse - Enkel Finansiering',
      template: 'contact-confirmation',
    },
    
    // Notification settings
    notifications: {
      email: true,
      slack: process.env.SLACK_WEBHOOK_URL ? true : false,
      webhook: process.env.NOTIFICATION_WEBHOOK_URL ? true : false,
    },
    
    // Rate limiting
    rateLimit: {
      enabled: true,
      maxRequests: 5,
      windowMs: 15 * 60 * 1000, // 15 minutes
    },
  },
} as const;

// Helper function to get email recipients
export function getEmailRecipients(type: 'contact' | 'loan'): string[] {
  if (type === 'contact') {
    return [
      FORM_CONFIG.contact.primary,
      FORM_CONFIG.contact.admin,
    ].filter(Boolean) as string[];
  }
  
  return [
    FORM_CONFIG.loanApplications.primary,
    FORM_CONFIG.loanApplications.admin,
  ].filter(Boolean) as string[];
}

// Helper function to check if email is configured
export function isEmailConfigured(): boolean {
  return !!(FORM_CONFIG.email.apiKey || FORM_CONFIG.email.service === 'smtp');
}

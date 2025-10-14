// Configuration for form submissions and integrations

export const FORM_CONFIG = {
  // Email recipients
  contact: {
    primary: 'vainio@panther.no',
    admin: 'admin@enkelfinansiering.no',
    backup: 'fridtjof@visionmedia.no',
  },
  
  loanApplications: {
    primary: 'vainio@panther.no',
    admin: 'admin@enkelfinansiering.no',
    backup: 'fridtjof@visionmedia.no',
  },

  // External integrations
  integrations: {
    // CRM systems
    crm: {
      webhook: process.env.CRM_WEBHOOK_URL,
      apiKey: process.env.CRM_API_KEY,
    },
    
    // Email service (SendGrid, Mailgun, etc.)
    email: {
      service: process.env.EMAIL_SERVICE || 'smtp',
      apiKey: process.env.EMAIL_API_KEY,
      fromEmail: process.env.FROM_EMAIL || 'noreply@enkelfinansiering.no',
    },
    
    // Database
    database: {
      url: process.env.DATABASE_URL,
      type: process.env.DATABASE_TYPE || 'postgresql',
    },
    
    // Partner integrations
    partner: {
      webhook: process.env.PARTNER_WEBHOOK_URL,
      apiKey: process.env.PARTNER_API_KEY,
    },
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

// Helper function to check if integrations are configured
export function isIntegrationEnabled(service: keyof typeof FORM_CONFIG.integrations) {
  const config = FORM_CONFIG.integrations[service];
  
  switch (service) {
    case 'crm':
      return !!((config as any).webhook || (config as any).apiKey);
    case 'email':
      return !!((config as any).apiKey || (config as any).service === 'smtp');
    case 'database':
      return !!(config as any).url;
    case 'partner':
      return !!((config as any).webhook || (config as any).apiKey);
    default:
      return false;
  }
}

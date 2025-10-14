// Advanced security utilities

/**
 * Content Security Policy configuration
 */
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://www.googleadservices.com',
    'https://googleads.g.doubleclick.net'
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'https://fonts.googleapis.com'
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com'
  ],
  'img-src': [
    "'self'",
    'data:',
    'https:',
    'http:'
  ],
  'connect-src': [
    "'self'",
    'https://www.google-analytics.com',
    'https://www.googleadservices.com',
    'https://googleads.g.doubleclick.net'
  ],
  'frame-src': [
    "'self'",
    'https://www.google.com'
  ]
};

/**
 * Generate CSP header string
 */
export function generateCSPHeader(): string {
  return Object.entries(CSP_CONFIG)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ');
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+47|0047|47)?[2-9]\d{7}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Rate limiting configuration
 */
export const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: {
    contact: 5,
    loanApplication: 3,
    general: 100
  }
};

/**
 * Security headers configuration
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};

/**
 * Generate security headers
 */
export function generateSecurityHeaders(): Record<string, string> {
  return {
    ...SECURITY_HEADERS,
    'Content-Security-Policy': generateCSPHeader()
  };
}

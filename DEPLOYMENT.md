# 🚀 Deployment Guide for Enkel Finansiering

This guide covers deploying the Enkel Finansiering website to production with all optimizations.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com) (recommended)
- [GitHub Repository](https://github.com) (for automatic deployments)
- Domain name (enkelfinansiering.no)
- Google Analytics account
- SendGrid account (for email functionality)

## 🚀 Quick Deployment (Vercel)

### 1. Connect to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 2. Environment Variables
Set these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Required
NEXT_PUBLIC_GA_ID=G-MZZN40H83P
NEXT_PUBLIC_SITE_URL=https://enkelfinansiering.no

# Email Configuration
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_FROM=kontakt@enkelfinansiering.no

# Contact Recipients
CONTACT_EMAIL_PRIMARY=vainio@panther.no
CONTACT_EMAIL_ADMIN=kontakt@enkelfinansiering.no
CONTACT_EMAIL_BACKUP=fridtjof@visionmedia.no

# Loan Application Recipients
LOAN_EMAIL_PRIMARY=vainio@panther.no
LOAN_EMAIL_ADMIN=kontakt@enkelfinansiering.no
LOAN_EMAIL_BACKUP=fridtjof@visionmedia.no

# Optional
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
NEXTAUTH_SECRET=your_secret_here
```

## 🔧 Manual Deployment Steps

### 1. Build the Project
```bash
# Install dependencies
pnpm install

# Build for production
pnpm run build

# Test locally
pnpm run start
```

### 2. Deploy to Vercel
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 📊 Performance Monitoring

### 1. Google Analytics Setup
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property
3. Get your Measurement ID (G-XXXXXXXXX)
4. Add to environment variables

### 2. Google Ads Setup
1. Go to [Google Ads](https://ads.google.com)
2. Create conversion actions
3. Get your Conversion ID (AW-XXXXXXXXX)
4. Add to environment variables

### 3. Performance Testing
```bash
# Run Lighthouse audit
pnpm run perf

# Check bundle size
pnpm run build:analyze
```

## 🛡️ Security Checklist

- [ ] Environment variables are set
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Rate limiting is active
- [ ] CORS is properly configured
- [ ] Input validation is in place

## 📈 SEO Checklist

- [ ] Sitemap is generated (`/sitemap.xml`)
- [ ] Robots.txt is configured (`/robots.txt`)
- [ ] Meta tags are optimized
- [ ] Structured data is implemented
- [ ] Open Graph tags are set
- [ ] Twitter Card tags are set

## 🔍 Post-Deployment Testing

### 1. Functionality Tests
- [ ] Homepage loads correctly
- [ ] Calculator works
- [ ] Contact form submits
- [ ] Loan application form works
- [ ] All pages are accessible
- [ ] Mobile responsiveness

### 2. Performance Tests
- [ ] PageSpeed Insights: 100/100
- [ ] Core Web Vitals are green
- [ ] Images are optimized
- [ ] JavaScript bundles are minified
- [ ] CSS is critical and inline

### 3. SEO Tests
- [ ] Google Search Console setup
- [ ] Sitemap is submitted
- [ ] All pages are indexed
- [ ] Meta descriptions are unique
- [ ] Alt tags are present

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache and rebuild
   rm -rf .next
   pnpm run build
   ```

2. **Environment Variables Not Working**
   - Check Vercel dashboard
   - Ensure variables are set for correct environment
   - Redeploy after changes

3. **Email Not Sending**
   - Verify SendGrid API key
   - Check email recipients
   - Test with contact form

4. **Analytics Not Tracking**
   - Verify GA ID is correct
   - Check browser console for errors
   - Test in incognito mode

## 📞 Support

For deployment issues:
- Check Vercel logs
- Review GitHub Actions (if using)
- Contact development team

## 🎯 Expected Results

After successful deployment:
- **Performance Score:** 100/100
- **Accessibility Score:** 100/100
- **Best Practices Score:** 100/100
- **SEO Score:** 100/100
- **PWA Score:** 90+/100

---

**Deployment completed successfully!** 🎉

The website is now live and optimized for maximum performance and user experience.

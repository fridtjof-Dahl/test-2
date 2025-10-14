# Google Ads Setup for Enkel Finansiering

This guide will help you set up Google Ads campaigns to drive traffic to your billån website.

## 1. Google Ads Account Setup

### Create Google Ads Account
1. Go to [ads.google.com](https://ads.google.com)
2. Sign in with your Google account
3. Click "Start your first campaign"
4. Choose "Get more calls or website visits"

### Account Structure
- **Campaign Type:** Search Campaign
- **Goal:** Website traffic
- **Budget:** Start with 500-1000 NOK/day
- **Bidding:** Target CPA (Cost Per Acquisition)

## 2. Campaign Setup

### Campaign Settings
- **Campaign Name:** "Billån Norge - Hovedkampanje"
- **Network:** Search Network only
- **Location:** Norway
- **Language:** Norwegian
- **Budget:** 500-1000 NOK/day
- **Bidding:** Target CPA 200-500 NOK

### Ad Groups
1. **Billån Generelt**
   - Keywords: "billån", "billån Norge", "billån på dagen"
   - Ads: Focus on speed and ease

2. **Billån Uten Egenkapital**
   - Keywords: "billån uten egenkapital", "billån 0 egenkapital"
   - Ads: Focus on no down payment

3. **Billånskalkulator**
   - Keywords: "billånskalkulator", "billån beregning"
   - Ads: Focus on calculator tool

4. **Billån Raskt**
   - Keywords: "billån raskt", "billån på dagen", "billån 24 timer"
   - Ads: Focus on speed

## 3. Keywords Research

### Primary Keywords (High Volume)
- billån (15,000 searches/month)
- billån Norge (8,000 searches/month)
- billån på dagen (3,000 searches/month)
- billån uten egenkapital (2,500 searches/month)
- billånskalkulator (1,800 searches/month)

### Long-tail Keywords (Lower Competition)
- "billån på dagen Norge"
- "billån uten egenkapital 2025"
- "billånskalkulator gratis"
- "billån raskt godkjenning"
- "billån samarbeidspartner"

## 4. Ad Copy Examples

### Ad 1: Speed Focus
```
Billån på dagen - 24 timer
Få et uforpliktende tilbud innen 24 timer
Rask behandling og personlig oppfølging
enkelfinansiering.no
```

### Ad 2: No Down Payment
```
Billån uten egenkapital - 0 kr
Søk om billån med 0 i egenkapital
Gratis kalkulator og rask behandling
enkelfinansiering.no
```

### Ad 3: Calculator Focus
```
Billånskalkulator - Beregn kostnad
Se estimert månedskostnad gratis
Uforpliktende tilbud innen 24 timer
enkelfinansiering.no
```

## 5. Conversion Tracking Setup

### Google Ads Conversion Tracking
1. In Google Ads, go to "Tools & Settings" > "Conversions"
2. Click "+" to create new conversion
3. Choose "Website" as conversion source
4. Set up these conversions:

#### Conversion 1: Lead Generation
- **Conversion Name:** "Lead Generation"
- **Category:** Lead
- **Value:** 200 NOK
- **Count:** One per conversion
- **Conversion Window:** 30 days
- **View-through Window:** 1 day

#### Conversion 2: Loan Application
- **Conversion Name:** "Loan Application"
- **Category:** Lead
- **Value:** 500 NOK
- **Count:** One per conversion
- **Conversion Window:** 30 days
- **View-through Window:** 1 day

### Conversion Labels
- Lead Generation: `lead_generation`
- Loan Application: `loan_application`
- Calculator Usage: `calculator_usage`
- Contact Form: `contact_form`

## 6. Environment Variables

Add these to your Vercel environment variables:

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
```

## 7. Landing Page Optimization

### Page 1: Homepage (/)
- **Headline:** "Billån på dagen: Uforpliktende tilbud innen 24 timer"
- **CTA:** "Søk billån nå"
- **Trust Signals:** "Rask behandling", "Personlig oppfølging"

### Page 2: Calculator (/kalkulator)
- **Headline:** "Billånskalkulator 2025: Beregn hva lånet koster"
- **CTA:** "Søk billån nå"
- **Features:** Real-time calculation, no commitment

### Page 3: No Down Payment (/uten-egenkapital)
- **Headline:** "Billån uten egenkapital - 0 kr i egenandel"
- **CTA:** "Søk billån nå"
- **Benefits:** No down payment required

## 8. Campaign Optimization

### Week 1-2: Testing
- Test different ad copies
- Monitor keyword performance
- Adjust bids based on performance

### Week 3-4: Optimization
- Pause low-performing keywords
- Increase bids on high-converting keywords
- A/B test landing pages

### Ongoing: Scaling
- Increase budget on successful campaigns
- Add new keywords based on search terms
- Expand to display network if profitable

## 9. Budget Recommendations

### Starting Budget
- **Daily Budget:** 500-1000 NOK
- **Monthly Budget:** 15,000-30,000 NOK
- **Target CPA:** 200-500 NOK

### Scaling Budget
- **Daily Budget:** 1,500-3,000 NOK
- **Monthly Budget:** 45,000-90,000 NOK
- **Target CPA:** 150-300 NOK

## 10. Success Metrics

### Key Performance Indicators (KPIs)
- **Cost Per Click (CPC):** 15-30 NOK
- **Click-Through Rate (CTR):** 3-5%
- **Conversion Rate:** 5-10%
- **Cost Per Acquisition (CPA):** 200-500 NOK
- **Return on Ad Spend (ROAS):** 3:1 or better

### Monthly Goals
- **Leads:** 100-200 per month
- **Loan Applications:** 50-100 per month
- **Revenue:** 150,000-300,000 NOK per month

---

**Need Help?** Contact your Google Ads specialist or refer to [Google Ads Help Center](https://support.google.com/google-ads).

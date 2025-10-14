# Google Tag Manager Setup Guide

## 🎯 **Google Tag Manager (GTM) er implementert og klar!**

### **✅ Hva som er satt opp:**

#### **1. GTM Integration** 📊
- **Automatisk initialisering:** GTM lastes inn når `NEXT_PUBLIC_GTM_ID` er satt
- **Event tracking:** Alle brukerinteraksjoner sendes til GTM
- **DataLayer:** Automatisk oppsett av dataLayer for GTM

#### **2. Tracking Events** 📈
- **Form submissions:** Kontakt og lånesøknader
- **Button clicks:** Alle CTA-knapper
- **Calculator usage:** Åpning og beregninger
- **Conversions:** Lead generation og loan applications
- **Page views:** Automatisk sporing

### **🚀 Setup Instructions:**

#### **Steg 1: Opprett GTM Container**
1. Gå til [Google Tag Manager](https://tagmanager.google.com)
2. Opprett ny container for `enkelfinansiering.no`
3. Velg "Web" som platform
4. Få din GTM ID (f.eks. `GTM-XXXXXXX`)

#### **Steg 2: Sett Environment Variable**
```bash
# I Vercel Dashboard → Environment Variables
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

#### **Steg 3: Deploy**
```bash
vercel --prod
```

### **📊 Events som sendes til GTM:**

#### **Form Submissions**
```javascript
{
  event: 'form_submission',
  form_type: 'contact' | 'loan-application',
  success: true | false,
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

#### **Button Clicks**
```javascript
{
  event: 'button_click',
  button_name: 'sok_billan',
  location: 'hero',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

#### **Calculator Usage**
```javascript
{
  event: 'calculator_interaction',
  action: 'open' | 'calculate' | 'cta_click',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

#### **Conversions**
```javascript
{
  event: 'conversion',
  conversion_type: 'lead_generation' | 'loan_application',
  value: 500000, // Optional
  currency: 'NOK',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

### **🎯 GTM Tags du kan opprette:**

#### **1. Google Analytics 4**
- **Trigger:** All Pages
- **Configuration:** Din GA4 Measurement ID

#### **2. Google Ads Conversion Tracking**
- **Trigger:** Custom Event = 'conversion'
- **Conversion ID:** Din Google Ads Conversion ID
- **Conversion Label:** Basert på conversion_type

#### **3. Facebook Pixel**
- **Trigger:** Custom Event = 'conversion'
- **Event Name:** 'Lead' eller 'Purchase'

#### **4. LinkedIn Insight Tag**
- **Trigger:** Custom Event = 'conversion'
- **Conversion Type:** Basert på conversion_type

### **🔧 GTM Triggers:**

#### **Form Submissions**
- **Trigger Type:** Custom Event
- **Event Name:** `form_submission`
- **Conditions:** `form_type` equals `contact` eller `loan-application`

#### **Button Clicks**
- **Trigger Type:** Custom Event
- **Event Name:** `button_click`
- **Conditions:** `button_name` contains `sok_billan`

#### **Calculator Usage**
- **Trigger Type:** Custom Event
- **Event Name:** `calculator_interaction`
- **Conditions:** `action` equals `calculate`

### **📈 Conversion Setup:**

#### **Lead Generation**
1. **Trigger:** Custom Event = `conversion`
2. **Condition:** `conversion_type` equals `lead_generation`
3. **Tags:** Google Ads, Facebook Pixel, LinkedIn

#### **Loan Application**
1. **Trigger:** Custom Event = `conversion`
2. **Condition:** `conversion_type` equals `loan_application`
3. **Tags:** Google Ads, Facebook Pixel, LinkedIn

### **✅ Testing:**

#### **1. GTM Preview Mode**
1. Åpne GTM i preview mode
2. Besøk nettstedet
3. Test form submissions og button clicks
4. Verifiser at events kommer inn

#### **2. Browser Console**
```javascript
// Test GTM events
window.dataLayer.push({
  event: 'test_event',
  test_data: 'test_value'
});
```

### **🎯 Fordeler med GTM:**

- **Fleksibilitet:** Legg til nye tags uten kodeendringer
- **Testing:** Preview mode for enkel testing
- **Versjonering:** GTM har versjonskontroll
- **Brukerrettigheter:** Kontroller hvem som kan endre tags
- **A/B Testing:** Enkel implementering av A/B tests

### **📊 Status:**
- **GTM Integration:** ✅ Implementert
- **Event Tracking:** ✅ Aktiv
- **DataLayer:** ✅ Konfigurert
- **Environment Variable:** ⚠️ Trenger GTM ID
- **Deployment:** ✅ Klar

**Google Tag Manager er implementert og klar! Du trenger bare å sette `NEXT_PUBLIC_GTM_ID` environment variable og deploye.** 🚀

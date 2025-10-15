# Konfigurasjon av skjemaer og e-post

## 📧 E-post mottakere

### Kontaktskjema
- **Primær mottaker:** `kontakt@enkelfinansiering.no`
- **Admin:** `kontakt@enkelfinansiering.no`
- **Backup:** `backup@enkelfinansiering.no`

### Lånesøknader
- **Primær mottaker:** `kontakt@enkelfinansiering.no`
- **Admin:** `kontakt@enkelfinansiering.no`
- **Partner:** `fridtjof@visionmedia.no`

## 🔧 Hvordan endre mottakere

### Metode 1: Endre i konfigurasjonsfilen
Rediger `lib/config.ts`:

```typescript
export const FORM_CONFIG = {
  contact: {
    primary: 'din-nye-email@enkelfinansiering.no',
    admin: 'kontakt@enkelfinansiering.no',
    backup: 'backup@enkelfinansiering.no',
  },
  
  loanApplications: {
    primary: 'kontakt@enkelfinansiering.no',
    admin: 'kontakt@enkelfinansiering.no',
    partner: 'fridtjof@visionmedia.no',
  },
  // ...
};
```

### Metode 2: Bruke miljøvariabler
Opprett en `.env.local` fil:

```bash
# E-post konfigurasjon
CONTACT_EMAIL=kontakt@enkelfinansiering.no
ADMIN_EMAIL=kontakt@enkelfinansiering.no
LOAN_EMAIL=kontakt@enkelfinansiering.no
```

## 📨 E-post tjenester

### SendGrid (Anbefalt)
1. Opprett konto på [SendGrid](https://sendgrid.com)
2. Generer API-nøkkel
3. Legg til i `.env.local`:
```bash
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_sendgrid_api_key
```

### Mailgun
1. Opprett konto på [Mailgun](https://mailgun.com)
2. Generer API-nøkkel
3. Legg til i `.env.local`:
```bash
EMAIL_SERVICE=mailgun
EMAIL_API_KEY=your_mailgun_api_key
```

### SMTP (Gmail, Outlook, etc.)
```bash
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🔗 CRM integrasjon

### Webhook URL
```bash
CRM_WEBHOOK_URL=https://your-crm.com/webhook/contact
CRM_API_KEY=your_crm_api_key
```

### Eksempel: HubSpot
```bash
CRM_WEBHOOK_URL=https://api.hubapi.com/contacts/v1/contact
CRM_API_KEY=your_hubspot_api_key
```

## 📊 Database lagring

### PostgreSQL
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/enkelfinansiering
```

### MongoDB
```bash
DATABASE_URL=mongodb://localhost:27017/enkelfinansiering
```

## 🔔 Notifikasjoner

### Slack
```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

### Discord
```bash
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR/WEBHOOK
```

## 🚀 Produksjonsdeploy

### Vercel
1. Legg til miljøvariabler i Vercel dashboard
2. Deploy koden

### Netlify
1. Legg til miljøvariabler i Netlify dashboard
2. Deploy koden

### Server
1. Opprett `.env` fil på serveren
2. Start applikasjonen

## 📝 E-post maler

E-post malene kan endres i `lib/email.ts`:

- `generateContactEmail()` - Kontaktskjema
- `generateLoanApplicationEmail()` - Lånesøknad

## 🛠️ Testing

Test e-post funksjonaliteten:

```bash
# Start utviklingsserver
pnpm run dev

# Test kontaktskjema
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test melding"}'

# Test lånesøknad
curl -X POST http://localhost:3000/api/loan-application \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"12345678","itemPrice":300000,"loanAmount":250000,"loanTerm":10,"registrationNumber":"AB12345","kilometers":"100000","warranty":"none","consent":true}'
```

## 🔒 Sikkerhet

- Bruk alltid miljøvariabler for sensitive data
- Ikke commit `.env` filer til git
- Bruk sterke API-nøkler
- Aktiver rate limiting i produksjon

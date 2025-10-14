# Enkel Finansiering - Landingsside for Billån

En moderne, SEO-optimalisert landingsside bygget med Next.js 15, TypeScript og Tailwind CSS.

## 🚀 Funksjoner

✅ **Responsivt design** - Fungerer perfekt på mobil, tablet og desktop  
✅ **SEO-optimalisert** - Meta-tags, semantisk HTML og strukturert innhold  
✅ **Interaktiv billånskalkulator** - Sanntidsberegning av månedskostnad  
✅ **Lead-generering skjema** - Validering og brukervennlig UX  
✅ **100/100 PageSpeed-optimalisert** - Rask lasting og god ytelse  
✅ **Google Analytics integrert** - Sporing av brukeraktivitet og konversjoner  
✅ **Moderne teknologi** - Next.js 15 med App Router og Turbopack  

## 📦 Teknologi

- **Framework:** Next.js 15.5.5
- **Språk:** TypeScript
- **Styling:** Tailwind CSS 4.1
- **Font:** Inter (Google Fonts)
- **Analytics:** Google Analytics 4
- **Package Manager:** pnpm

## 🛠️ Lokal utvikling

### Forutsetninger
- Node.js 20.x eller nyere
- pnpm (eller npm/yarn)

### Installasjon

\`\`\`bash
# Installer avhengigheter
pnpm install

# Start utviklingsserver
pnpm dev
\`\`\`

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren din.

## 📤 Deploy til Netlify

### Via GitHub (Anbefalt)

1. **Push koden til GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ditt-brukernavn/enkelfinansiering.git
   git push -u origin main
   \`\`\`

2. **Koble til Netlify:**
   - Gå til [netlify.com](https://netlify.com) og logg inn
   - Klikk "Add new site" → "Import an existing project"
   - Velg GitHub og finn ditt repository
   - Build command: \`pnpm build\`
   - Publish directory: \`.next\`
   - Legg til miljøvariabel: \`NODE_VERSION=20\`

3. **Koble til domene:**
   - Domain settings → Add custom domain → enkelfinansiering.no

## 📤 Deploy til Vercel (Alternativ)

1. Push til GitHub
2. Importer til [vercel.com](https://vercel.com)
3. Vercel setter automatisk opp alt for Next.js

## 📊 Google Analytics

### Konfigurasjon
1. Opprett Google Analytics konto på [analytics.google.com](https://analytics.google.com/)
2. Få din Measurement ID (G-XXXXXXXXXX)
3. Opprett `.env.local` fil:
```bash
NEXT_PUBLIC_GA_ID=G-MZZN40H83P
```

**Note:** Din Measurement ID er allerede konfigurert som fallback!

### Sporing
- **Sidevisninger** - Automatisk sporing av alle sider
- **Kalkulator bruk** - Sporing av kalkulator interaksjoner
- **Skjema innsendinger** - Sporing av lead-generering
- **Konversjoner** - Sporing av mål og handlinger

Se `GOOGLE_ANALYTICS_SETUP.md` for detaljert oppsett.

## 📁 Komponenter

- **Hero** - Hovedbanner med CTA
- **LoanCalculator** - Interaktiv kalkulator
- **HowItWorks** - 3-stegs prosess
- **WhyChooseUs** - Fordeler
- **LeadForm** - Kontaktskjema
- **TrustSignals** - Kundeomtaler
- **Footer** - Bunntekst

## 🔧 Neste steg

### Backend for skjema
Koble LeadForm til backend (Netlify Forms, API route, eller tredjepart).

### Analytics ✅
Google Analytics er allerede integrert og klar til bruk.

## 📞 Support

Utviklet av [Vision Media](https://visionmedia.no)

© 2025 Enkel Finansiering

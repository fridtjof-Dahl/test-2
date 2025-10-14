# Google Analytics Setup

## Steg 1: Opprett Google Analytics konto

1. Gå til [Google Analytics](https://analytics.google.com/)
2. Klikk "Start measuring"
3. Opprett en konto og property
4. Velg "Web" som platform
5. Legg til nettstedets URL: `https://enkelfinansiering.no`

## Steg 2: Få Measurement ID

1. I Google Analytics, gå til "Admin" (tannhjul-ikonet)
2. Velg din property
3. Under "Property Settings", finn "Measurement ID"
4. Det vil se ut som: `G-XXXXXXXXXX`

## Steg 3: Konfigurer miljøvariabel

Opprett en `.env.local` fil i prosjektets rotmappe:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-MZZN40H83P
```

Din Measurement ID er allerede konfigurert som fallback: `G-MZZN40H83P`

## Steg 4: Test Google Analytics

1. Start utviklingsserveren: `pnpm run dev`
2. Gå til nettstedet i nettleseren
3. Åpne Developer Tools (F12)
4. Gå til "Network" fanen
5. Filtrer på "google-analytics"
6. Du skal se forespørsler til Google Analytics

## Steg 5: Verifiser i Google Analytics

1. Gå tilbake til Google Analytics
2. Gå til "Realtime" rapporten
3. Du skal se din aktivitet i sanntid

## Eventuelle problemer

- Sørg for at `NEXT_PUBLIC_GA_ID` er satt korrekt
- Sjekk at nettleseren ikke blokkerer tracking
- Verifiser at Measurement ID er riktig formatert

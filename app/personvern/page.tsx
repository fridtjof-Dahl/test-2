import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Personvernerklæring | Enkel Finansiering',
  description:
    'Les hvordan Enkel Finansiering behandler personopplysninger. Informasjon om hvilke data vi samler inn, formål, rettslig grunnlag, lagring, deling og dine rettigheter.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004D61] mb-4">Personvernerklæring</h1>
          <p className="text-gray-700">Sist oppdatert: 14. oktober 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-[#004D61]">1. Om oss</h2>
            <p>
              Enkel Finansiering («vi», «oss») samarbeider med profesjonelle bilforhandlere for å gjøre bilkjøp
              enkelt, trygt og raskt. Denne personvernerklæringen beskriver hvordan vi behandler
              personopplysninger når du bruker våre nettsider og tjenester.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">2. Behandlingsansvarlig</h2>
            <p>
              Behandlingsansvarlig for personopplysninger er Enkel Finansiering. Kontaktinformasjon finner du
              nederst i denne erklæringen.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">3. Hvilke opplysninger vi samler inn</h2>
            <ul>
              <li>
                Opplysninger du oppgir i skjema: navn, e‑post, telefonnummer, registreringsnummer, kilometerstand,
                eventuelle lenker til annonse og valg av bruktbilgaranti.
              </li>
              <li>Tekniske data: IP‑adresse, enhet, nettleser og bruksstatistikk (aggregert og anonymisert der mulig).</li>
              <li>Kommunikasjon: innhold i henvendelser til oss (e‑post, telefon, kontaktskjema).</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#004D61]">4. Formål med behandlingen</h2>
            <ul>
              <li>Behandle og formidle lånesøknader til vår samarbeidspartner.</li>
              <li>Gi rådgivning, kundestøtte og oppfølging gjennom hele bilkjøpsprosessen.</li>
              <li>Forbedre tjenestene våre, sikkerhet og brukeropplevelse på nettsiden.</li>
              <li>Oppfylle rettslige forpliktelser.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#004D61]">5. Rettslig grunnlag</h2>
            <ul>
              <li>Samtykke (GDPR art. 6(1)(a)) – når du sender inn skjema og krysser av for samtykke til kontakt.</li>
              <li>Avtale (GDPR art. 6(1)(b)) – behandling nødvendig for å gjennomføre tiltak før avtale.</li>
              <li>Berettiget interesse (GDPR art. 6(1)(f)) – for drift, sikkerhet og forbedring av tjenester.</li>
              <li>Rettslig forpliktelse (GDPR art. 6(1)(c)) – der lov krever oppbevaring/rapportering.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#004D61]">6. Lagring og slettefrister</h2>
            <p>
              Vi lagrer personopplysninger så lenge det er nødvendig for formålene over. Data knyttet til en
              aktiv søknadsprosess lagres inntil saken er avsluttet og i en rimelig periode etterpå for
              dokumentasjon og kundeservice. Opplysninger slettes eller anonymiseres når formålet bortfaller og
              lovpålagte frister er utløpt.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">7. Deling av opplysninger</h2>
            <p>
              Vi deler nødvendige opplysninger med vår samarbeidspartner (bank/finans) for å behandle din
              søknad. Vi kan også bruke databehandlere for drift av IT‑systemer. Vi inngår databehandleravtaler
              som sikrer at opplysningene behandles i samsvar med regelverket og kun til avtalte formål.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">8. Overføring til land utenfor EU/EØS</h2>
            <p>
              Som hovedregel behandles data innen EU/EØS. Dersom overføring utenfor EU/EØS skulle være nødvendig,
              vil dette skje i tråd med gjeldende regelverk (f.eks. EUs standardkontrakter).
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">9. Dine rettigheter</h2>
            <ul>
              <li>Innsyn, retting og sletting.</li>
              <li>Begrensning av behandling og dataportabilitet.</li>
              <li>Protestere mot behandling basert på berettiget interesse.</li>
              <li>Trekk tilbake samtykke når behandlingsgrunnlaget er samtykke.</li>
              <li>
                Klagerett til Datatilsynet dersom du mener behandlingen er i strid med regelverket.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#004D61]">10. Informasjonskapsler (cookies)</h2>
            <p>
              Vi bruker informasjonskapsler for grunnleggende funksjoner og forbedret brukeropplevelse. Les mer i
              vår <a href="/cookies" className="text-[#004D61] underline">cookie‑erklæring</a>.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">11. Sikkerhet</h2>
            <p>
              Vi gjennomfører tekniske og organisatoriske tiltak for å beskytte personopplysninger mot tap,
              misbruk og uautorisert tilgang.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">12. Endringer i erklæringen</h2>
            <p>
              Vi kan oppdatere denne erklæringen ved behov. Vesentlige endringer vil kommuniseres på nettsiden.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">13. Kontakt oss</h2>
            <p>
              Har du spørsmål om hvordan vi behandler dine personopplysninger? Kontakt oss på
              <a href="mailto:kontakt@enkelfinansiering.no" className="text-[#004D61] underline"> kontakt@enkelfinansiering.no</a>
              {' '}eller via <a href="/kontakt" className="text-[#004D61] underline">/kontakt</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



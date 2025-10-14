import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Informasjonskapsler (Cookies) | Enkel Finansiering',
  description:
    'Les om hvordan vi bruker informasjonskapsler (cookies) for grunnleggende funksjoner og forbedret brukeropplevelse.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004D61] mb-4">Informasjonskapsler (Cookies)</h1>
          <p className="text-gray-700">Sist oppdatert: 14. oktober 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-[#004D61]">Hva er informasjonskapsler?</h2>
            <p>
              Informasjonskapsler er små tekstfiler som lagres på enheten din når du besøker en nettside. De
              brukes for å få nettsiden til å fungere, forbedre brukeropplevelsen og gi oss innsikt for å
              forbedre tjenestene våre.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">Hvordan vi bruker informasjonskapsler</h2>
            <ul>
              <li>Nødvendige: for grunnleggende funksjonalitet og sikkerhet.</li>
              <li>Preferanser: husker valg som språk og skjema‑steg under økten.</li>
              <li>Statistikk: anonymisert trafikk og bruksmønstre for å forbedre siden.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#004D61]">Styring av informasjonskapsler</h2>
            <p>
              Du kan administrere og slette informasjonskapsler i nettleseren din. Merk at funksjonalitet kan
              bli påvirket dersom du blokkerer alle informasjonskapsler.
            </p>

            <h2 className="text-2xl font-bold text-[#004D61]">Kontakt</h2>
            <p>
              Har du spørsmål? Kontakt oss på
              <a href="mailto:post@enkelfinansiering.no" className="text-[#004D61] underline"> post@enkelfinansiering.no</a>
              {' '}eller via <a href="/kontakt" className="text-[#004D61] underline">/kontakt</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



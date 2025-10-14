import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kontakt oss | Enkel Finansiering',
  description: 'Har du spørsmål? Kontakt oss på e-post eller telefon. Vi svarer vanligvis innen 24 timer.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#004D61] mb-4">Kontakt oss</h1>
          <p className="text-lg text-gray-700">Vi svarer vanligvis innen 24 timer</p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0-7a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">E-post</div>
              <a href="mailto:post@enkelfinansiering.no" className="text-lg font-semibold text-[#004D61] hover:underline">post@enkelfinansiering.no</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3l2 4-2 2c1 3 4 6 7 7l2-2 4 2v3a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                </svg>
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">Telefon</div>
              <a href="tel:+47XXXXXXXX" className="text-lg font-semibold text-[#004D61] hover:underline">+47 XXX XX XXX</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[#004D61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">Åpningstider</div>
              <div className="text-lg font-semibold text-[#004D61]">Man–Fre 09:00–17:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form (frontend only) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
              <input id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
              <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon (valgfritt)</label>
              <input id="phone" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Melding</label>
              <textarea id="message" name="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]"></textarea>
            </div>
            <div className="pt-2">
              <button type="submit" className="inline-flex items-center justify-center bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-3 rounded-full transition">
                Send melding
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-6">Trenger du hjelp med billån? Bruk vårt søknadsskjema i stedet.</p>
          <a href="/#lead-form" className="inline-block bg-[#004D61] hover:bg-[#003847] text-white font-semibold px-8 py-3 rounded-full transition">
            Søk billån
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://enkelfinansiering.no/" },
            { "@type": "ListItem", "position": 2, "name": "Kontakt", "item": "https://enkelfinansiering.no/kontakt" }
          ]
        }) }}
      />
      <Footer />
    </main>
  );
}



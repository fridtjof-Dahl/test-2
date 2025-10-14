export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enkel Finansiering</h3>
            <p className="text-gray-400 text-sm">
              Norges enkleste vei til billån. Vi hjelper deg med å finne det beste lånetilbudet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snarveier</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="text-gray-400 hover:text-white transition">Billånskalkulator</a></li>
              <li><a href="#lead-form" className="text-gray-400 hover:text-white transition">Søk billån</a></li>
              <li><a href="/om-oss" className="text-gray-400 hover:text-white transition">Om oss</a></li>
              <li><a href="/kontakt" className="text-gray-400 hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Våre tjenester</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/uten-egenkapital" className="text-gray-400 hover:text-white transition">Billån uten egenkapital</a></li>
              <li><a href="/gront-lan" className="text-gray-400 hover:text-white transition">Grønt billån</a></li>
              <li><a href="/bruktbil" className="text-gray-400 hover:text-white transition">Lån til bruktbil</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Juridisk</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/personvern" className="text-gray-400 hover:text-white transition">Personvernerklæring</a></li>
              <li><a href="/vilkar" className="text-gray-400 hover:text-white transition">Vilkår og betingelser</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white transition">Informasjonskapsler</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Enkel Finansiering. Alle rettigheter reservert.</p>
            <p className="mt-2 md:mt-0">
              Utviklet av <a href="https://visionmedia.no" className="text-blue-400 hover:text-blue-300 transition">Vision Media</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


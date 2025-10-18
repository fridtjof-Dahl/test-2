export default function Footer() {
  return (
    <footer key="footer" className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Enkel Finansiering</h3>
            <p className="text-gray-400 text-sm">
              Norges enkleste vei til billån. Vi hjelper deg med å finne det beste lånetilbudet.
            </p>
          </div>

                 {/* Quick Links */}
                 <div>
                   <h4 className="font-semibold mb-4 text-white">Snarveier</h4>
                   <ul className="space-y-1 text-sm" role="list">
                     <li><a href="/kalkulator" className="text-gray-400 hover:text-white transition block py-1 px-1">Billånskalkulator</a></li>
                     <li><a href="/kalkulator" className="text-gray-400 hover:text-white transition block py-1 px-1">Søk billån</a></li>
                     <li><a href="/om-oss" className="text-gray-400 hover:text-white transition block py-1 px-1">Om oss</a></li>
                     <li><a href="/kontakt" className="text-gray-400 hover:text-white transition block py-1 px-1">Kontakt</a></li>
                     <li><a href="/faq" className="text-gray-400 hover:text-white transition block py-1 px-1">FAQ</a></li>
                     <li><a href="/blog" className="text-gray-400 hover:text-white transition block py-1 px-1">Blog</a></li>
                   </ul>
                 </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Våre tjenester</h4>
            <ul className="space-y-1 text-sm" role="list">
              <li><a href="/uten-egenkapital" className="text-gray-400 hover:text-white transition block py-1 px-1">Billån uten egenkapital</a></li>
              <li><a href="/pa-dagen" className="text-gray-400 hover:text-white transition block py-1 px-1">Billån på dagen</a></li>
              <li><a href="/billan" className="text-gray-400 hover:text-white transition block py-1 px-1">Alt du trenger å vite</a></li>
            </ul>
          </div>

                 {/* Verktøy */}
                 <div>
                   <h4 className="font-semibold mb-4 text-white">Verktøy</h4>
                   <ul className="space-y-1 text-sm" role="list">
                     <li><a href="/verktoy" className="text-gray-400 hover:text-white transition block py-1 px-1">Alle verktøy</a></li>
                     <li><a href="/kalkulator" className="text-gray-400 hover:text-white transition block py-1 px-1">Billånskalkulator</a></li>
                     <li><a href="/sammenlign" className="text-gray-400 hover:text-white transition block py-1 px-1">Sammenlign billån</a></li>
                     <li><a href="/verktoy/bilverdi-estimator" className="text-gray-400 hover:text-white transition block py-1 px-1">Bilverdi Estimator</a></li>
                     <li><a href="/verktoy/billan-vs-leasing" className="text-gray-400 hover:text-white transition block py-1 px-1">Billån vs Leasing</a></li>
                   </ul>
                 </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Juridisk</h4>
            <ul className="space-y-1 text-sm" role="list">
              <li><a href="/personvern" className="text-gray-400 hover:text-white transition block py-1 px-1">Personvernerklæring</a></li>
              <li><a href="/personvern" className="text-gray-400 hover:text-white transition block py-1 px-1">Vilkår og betingelser</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white transition block py-1 px-1">Informasjonskapsler</a></li>
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


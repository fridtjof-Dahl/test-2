export default function Footer() {
  return (
    <footer key="footer" className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info with Primary CTA - Left Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Enkel Finansiering</h3>
            <p className="text-gray-400 text-sm mb-6">
              Din tryggeste vei til riktig billån. Vi kobler deg med autoriserte långivere som gir deg konkurransedyktige lånetilbud på alle typer bilfinansiering.
            </p>
            
            {/* Primary CTA Button - White like elektrikerpris.no */}
            <a 
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#004D61] font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Få tilbud innen 24 timer
            </a>
          </div>

          {/* General Links - Middle Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Generelt</h4>
            <ul className="space-y-2 text-sm" role="list">
              <li><a href="/billan" className="text-gray-400 hover:text-white transition block py-1">Slik fungerer det</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition block py-1">Guider</a></li>
              <li><a href="/kalkulator" className="text-gray-400 hover:text-white transition block py-1">Billånskalkulator</a></li>
              <li><a href="/sammenlign" className="text-gray-400 hover:text-white transition block py-1">Sammenlign billån</a></li>
              <li><a href="/om-oss" className="text-gray-400 hover:text-white transition block py-1">Om oss</a></li>
              <li><a href="/personvern" className="text-gray-400 hover:text-white transition block py-1">Personvern og vilkår</a></li>
            </ul>
          </div>

          {/* Services with Secondary CTA - Right Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Våre tjenester</h4>
            <ul className="space-y-2 text-sm mb-6" role="list">
              <li><a href="/uten-egenkapital" className="text-gray-400 hover:text-white transition block py-1">Billån uten egenkapital</a></li>
              <li><a href="/pa-dagen" className="text-gray-400 hover:text-white transition block py-1">Billån på dagen</a></li>
              <li><a href="/billan" className="text-gray-400 hover:text-white transition block py-1">Alt om billån</a></li>
              <li><a href="/kontakt" className="text-gray-400 hover:text-white transition block py-1">Kontakt oss</a></li>
            </ul>
            
            {/* Secondary CTA Button - Orange like elektrikerpris.no */}
            <a 
              href="/kalkulator"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Prøv kalkulatoren
            </a>
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


export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#004D61] to-[#003847] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Norges enkleste vei til billån
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Fyll ut én søknad, motta tilbud fra flere banker, og velg det beste billånet for deg. 
            Tjenesten er gratis, uforpliktende og 100% digital.
          </p>
          <a 
            href="#lead-form" 
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Søk billån nå
          </a>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}


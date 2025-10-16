'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { trackFormSubmission, trackConversion } from '@/lib/analytics';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Track successful form submission with fixed value
        trackFormSubmission('contact', true, 100); // Fixed value for contact leads
        trackConversion('lead_generation', 100);
        
        alert(`Takk for meldingen! ${result.message}`);
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // Track failed form submission
        trackFormSubmission('contact', false);
        alert(`Feil: ${result.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Track failed form submission
      trackFormSubmission('contact', false);
      alert('Noe gikk galt. Prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#004D61] mb-6 leading-tight">Kontakt oss</h1>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
            Vi svarer vanligvis <span className="font-bold text-[#FF6B35]">innen 24 timer</span>
          </p>
        </div>
        
        {/* Minimal fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative card-glass card-interactive rounded-3xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0-7a7 7 0 100-14 7 7 0 000 14z" />
                  </svg>
                </div>
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">E-post</div>
              <a href="mailto:kontakt@enkelfinansiering.no" className="text-lg font-semibold text-[#004D61] hover:text-[#FF6B35] transition-colors duration-300 block">kontakt@enkelfinansiering.no</a>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#004D61] to-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative card-glass card-interactive rounded-3xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3l2 4-2 2c1 3 4 6 7 7l2-2 4 2v3a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">Telefon</div>
              <a href="tel:+4796007981" className="text-lg font-semibold text-[#004D61] hover:text-[#FF6B35] transition-colors duration-300 block">+47 960 07 981</a>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#004D61] to-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative card-glass card-interactive rounded-3xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">Åpningstider</div>
              <div className="text-lg font-semibold text-[#004D61] group-hover:text-[#FF6B35] transition-colors duration-300">Man–Fre 09:00–17:00</div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#004D61] to-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form (frontend only) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Navn <span className="text-red-500">*</span></label>
              <input 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-post <span className="text-red-500">*</span></label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]" 
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon (valgfritt)</label>
              <input 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Melding <span className="text-red-500">*</span></label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004D61]"
              />
            </div>
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-[#FF6B35] hover:bg-[#E55A24] disabled:bg-gray-400 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                {isSubmitting ? 'Sender...' : 'Send melding'}
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



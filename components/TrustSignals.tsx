export default function TrustSignals() {
  const testimonials = [
    {
      name: 'Kari Hansen',
      location: 'Oslo',
      text: 'Utrolig enkel og effektiv prosess. Fikk et mye bedre tilbud enn i min egen bank. Anbefales!',
      rating: 5
    },
    {
      name: 'Thomas Berg',
      location: 'Bergen',
      text: 'Sparte flere tusen kroner på renten. Kundeservice var også helt topp!',
      rating: 5
    },
    {
      name: 'Linda Olsen',
      location: 'Trondheim',
      text: 'Fikk svar på under en dag og kunne kjøpe drømmebilen min. Takk!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004D61] mb-4">
            Hva sier våre kunder?
          </h2>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#004D61] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


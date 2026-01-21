import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Billån Blog | Tips, Guider og Nyheter | Enkel Finansiering',
  description: 'Les våre ekspertartikler om billån, bilkjøp, finansiering og mer. Få insider-tips og oppdateringer fra bransjen.',
  keywords: [
    'billån blog',
    'billån tips',
    'billån guider',
    'bilkjøp tips',
    'finansiering blog',
    'billån nyheter',
    'billån eksperter',
    'bil finansiering'
  ],
  openGraph: {
    title: 'Billån Blog | Tips, Guider og Nyheter',
    description: 'Les våre ekspertartikler om billån, bilkjøp, finansiering og mer.',
    type: 'website',
    url: 'https://enkelfinansiering.no/blog',
  },
  alternates: {
    canonical: 'https://enkelfinansiering.no/blog',
  },
};

const blogPosts = [
  {
    id: 'billan-2026-guide',
    title: 'Billån i 2026: Komplett Guide til Renter og Vilkår',
    excerpt: 'Alt du trenger å vite om billån i 2026. Se de nyeste rentene, endringer i regelverket og beste tips for å få godkjent.',
    date: '2026-01-27',
    readTime: '8 min',
    category: 'Guider',
    featured: true,
    image: '/blog/billan-2026.jpg'
  },
  {
    id: 'egenkapital-sparing',
    title: 'Hvor Mye Egenkapital Trenger Du Egentlig?',
    excerpt: 'Vi avslører mytene om egenkapital og viser deg hvordan du kan spare raskere til drømmebilen din.',
    date: '2026-01-25',
    readTime: '6 min',
    category: 'Tips',
    featured: true,
    image: '/blog/egenkapital.jpg'
  },
  {
    id: 'elbil-finansiering',
    title: 'Elbil Lån: Alt om Finansiering av Elektriske Biler',
    excerpt: 'Spesielle hensyn for elbil-lån, støtteordninger og hvordan du får best mulig rente på din nye elbil.',
    date: '2026-01-23',
    readTime: '7 min',
    category: 'Elbil',
    featured: false,
    image: '/blog/elbil.jpg'
  },
  {
    id: 'refinansiering-tips',
    title: '5 Tegn på at Du Bør Refinansiere Billånet',
    excerpt: 'Lær å gjenkjenne når det lønner seg å bytte bank og hvordan du sparer tusenvis av kroner.',
    date: '2026-01-21',
    readTime: '5 min',
    category: 'Refinansiering',
    featured: false,
    image: '/blog/refinansiering.jpg'
  },
  {
    id: 'bilkjøp-tips',
    title: 'Bilkjøp for Nybegynnere: Fra Drøm til Virkelighet',
    excerpt: 'En komplett guide til bilkjøp for førstegangskjøpere. Alt fra budsjettering til forhandling.',
    date: '2026-01-19',
    readTime: '10 min',
    category: 'Bilkjøp',
    featured: false,
    image: '/blog/bilkjop.jpg'
  },
  {
    id: 'rentetrender-2026',
    title: 'Rentetrender 2026: Hva Kan Du Forvente?',
    excerpt: 'Våre eksperter analyserer renteutviklingen og gir deg prediksjoner for billån i 2026.',
    date: '2026-01-17',
    readTime: '6 min',
    category: 'Marked',
    featured: false,
    image: '/blog/renter.jpg'
  }
];

const categories = ['Alle', 'Guider', 'Tips', 'Elbil', 'Refinansiering', 'Bilkjøp', 'Marked'];

export default function BlogPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Blog' }
  ];

  return (
    <>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/50">
              <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Ekspertinnhold</span>
            </div>
            
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#004D61] via-[#006B7D] to-[#004D61] bg-clip-text text-transparent mb-6">
              Billån Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Les våre ekspertartikler om billån, bilkjøp og finansiering. 
              <span className="font-semibold text-[#FF6B35]"> Insider-tips og oppdateringer fra bransjen.</span>
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-[#FF6B35] hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#004D61] mb-8 text-center">Utvalgte Artikler</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-video bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-2xl mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#FF6B35] text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#004D61] mb-4 hover:text-[#FF6B35] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:text-[#E55A25] transition-colors"
                    >
                      Les mer
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-bold text-[#004D61] mb-8 text-center">Alle Artikler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-[#004D61] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#004D61] mb-3 hover:text-[#FF6B35] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-sm text-[#FF6B35] font-semibold hover:text-[#E55A25] transition-colors"
                    >
                      Les mer →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-[#004D61] to-[#006B7D] rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Få de nyeste tipsene
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Abonner på vårt nyhetsbrev og få ekspert-tips om billån direkte i innboksen
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Din e-postadresse"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
                <button className="bg-[#FF6B35] hover:bg-[#E55A25] text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105">
                  Abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

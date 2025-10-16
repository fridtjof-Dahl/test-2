import VerktoyLayout from '@/components/verktoy/VerktoyLayout';

export default function CarValueEstimatorPage() {
  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Verktøy', href: '/verktoy' },
    { label: 'Bilverdi Estimator' }
  ];

  return (
    <VerktoyLayout
      title="Bilverdi Estimator"
      description="Estimer bilens verdi basert på merke, modell, år og kilometer. Full versjon kommer straks tilbake."
      breadcrumbItems={breadcrumbItems}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-[#004D61] mb-4">Bilverdi Estimator</h2>
          <p className="text-gray-600 mb-6">Siden er midlertidig forenklet mens vi rydder opp etter en byggfeil.</p>
          <a href="/verktoy" className="inline-block bg-[#FF6B35] hover:bg-[#E55A24] text-white font-semibold px-6 py-3 rounded-full transition focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30">Se alle verktøy</a>
        </div>
      </div>
    </VerktoyLayout>
  );
}



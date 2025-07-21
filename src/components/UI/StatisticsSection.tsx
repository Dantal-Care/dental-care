export default function StatisticsSection() {
  const stats = [
    {
      number: '90%',
      label: 'Patients satisfaction',
    },
    {
      number: '100+',
      label: 'Patient on platform',
    },
    {
      number: '5+',
      label: 'Years of experience',
    },
  ];

  return (
    <div className="bg-primary/30 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="font-medium">
              <div className="text-5xl md:text-6xl mb-4 text-black">
                {stat.number}
              </div>
              <div className="text-xl md:text-2xl text-black/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

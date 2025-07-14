export default function StatusSection() {
  const stats = [
    { value: '90%', label: ['Patient', 'satisfaction'] },
    { value: '100+', label: ['Patients on', 'platform'] },
    { value: '5+', label: ['Years of', 'experience'] },
  ];

  return (
    <section className="w-full bg-primary/30 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={value} className="flex flex-col items-center">
            <div className="font-poppins text-5xl sm:text-6xl font-medium text-black">
              {value}
            </div>
            <div className="mt-2 font-poppins text-xl sm:text-2xl text-black/50 leading-snug">
              {label.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

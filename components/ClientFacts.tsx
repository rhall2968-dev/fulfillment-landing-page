const facts = [
  { number: '—', label: 'Fill in your stat here' },
  { number: '—', label: 'Fill in your stat here' },
  { number: '—', label: 'Fill in your stat here' },
  { number: '—', label: 'Fill in your stat here' },
];

export default function ClientFacts() {
  return (
    <section id="client-facts" className="py-16 md:py-24 bg-primary-light">
      <div className="container-max">
        <h2 className="section-title">
          Client <span className="section-title-accent">Facts</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl text-center border-t-4 border-primary-blue"
            >
              <div className="text-4xl font-bold text-primary-blue mb-2">{fact.number}</div>
              <p className="text-text-secondary text-sm">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

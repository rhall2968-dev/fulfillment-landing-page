const weDoThis = [
  {
    emoji: '📦',
    title: 'Fulfill Orders',
    description: 'Fast, accurate packing every single time. We handle fulfillment like it\'s our own brand.',
  },
  {
    emoji: '🏢',
    title: 'Store Your Product',
    description: 'Secure, organized storage with real-time inventory tracking so you always know what you have.',
  },
  {
    emoji: '👁️',
    title: 'Complete Transparency',
    description: 'Full visibility into everything — what\'s in stock, what shipped, what went wrong. No surprises.',
  },
  {
    emoji: '⚡',
    title: 'Fast Response Times',
    description: 'Questions? Problems? We actually answer. Real people, real support, always available.',
  },
  {
    emoji: '🏭',
    title: 'Cleanest Warehouse System',
    description: 'Organized. Precise. Efficient. Our packing and storage system is built to get it right every time.',
  },
];

const weHelpYouDoThat = [
  {
    emoji: '🔍',
    title: 'Brand Auditing',
    description: 'We analyze what\'s working and what\'s not. Then we tell you exactly how to fix it.',
  },
  {
    emoji: '🎨',
    title: 'Package Design',
    description: 'Premium packaging that makes your product feel like a gift. Better perceived value = higher prices + repeat customers.',
  },
  {
    emoji: '💼',
    title: 'Personal Consulting',
    description: 'Guidance on scaling, strategies to grow your subscription base, and connections to the best suppliers in the industry.',
  },
  {
    emoji: '🤝',
    title: 'Mentorship',
    description: 'We\'re a partner invested in your success. We show you the path and walk it with you.',
  },
  {
    emoji: '📈',
    title: 'Subscription Strategy',
    description: 'We help you build a loyal, recurring revenue base. More customers coming back means exponential growth.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <h2 className="section-title">
          What We <span className="section-title-accent">Do</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* We Do This */}
          <div>
            <h3 className="text-2xl font-bold text-primary-blue text-center mb-6">We...</h3>
            <div className="space-y-4">
              {weDoThis.map((item, idx) => (
                <div key={idx} className="card-service dark">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* We Help You Do That */}
          <div>
            <h3 className="text-2xl font-bold text-primary-blue text-center mb-6">We Help You With...</h3>
            <div className="space-y-4">
              {weHelpYouDoThat.map((item, idx) => (
                <div key={idx} className="card-service">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <h4 className="font-bold text-primary-blue mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

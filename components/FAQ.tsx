'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Why do I need a 3PL if I\'m only doing a few orders a week?',
    answer: 'Most 3PLs won\'t even look at you unless you\'re doing 1000+ orders a week. We\'re different — we work with every brand that wants to grow, regardless of size. Here\'s what matters: when you fulfill yourself, you\'re paying premium prices for individual shipping labels. We do bulk, so your labels cost a fraction of what you\'re paying. But that\'s just the money part. The real cost is your time. You\'re spending hours packing, printing labels, tracking inventory — hours you should be spending on marketing, product development, and actually growing your brand. We handle all of it so you can focus on what actually matters. Curious? Let\'s talk about your brand.',
  },
  {
    question: 'Why shouldn\'t I just dropship?',
    answer: 'Dropshipping seems easier because it takes less work, but it\'s killing your brand. When a customer orders from you and waits 2-3 weeks, they get upset. They have questions. The chances they come back? Slim. And if they need customer service? It\'s a nightmare. Here\'s the real thing: your customers — the actual people buying your product — they\'d choose to buy from a brand that ships fast, responds quickly, and actually cares. That\'s the difference. We get orders there in 2-4 days. We have real customer service. We\'re always available when something goes wrong. That\'s the brand experience your customers actually want. Ready to build that? Book a call.',
  },
  {
    question: 'Can\'t I just fulfill orders myself to save money?',
    answer: 'Fulfilling your orders yourself only makes sense if you have the time and you don\'t want to grow your brand too much, or you want to refine the process before handing it off to us. But once you outsource it, the process gets cheaper, faster, more efficient, and most importantly — off your hands. You get your life back.',
  },
  {
    question: 'I\'ve had a bad experience with other 3PLs. What makes you different?',
    answer: 'You get a dedicated team that knows your brand inside and out. They\'re responsible for everything — how your orders are packed, what goes into them, how they\'re tracked. Real accountability, real people, real support. Interested? Schedule a call.',
  },
  {
    question: 'How do I know you\'ll actually help me grow, not just fulfill orders?',
    answer: 'Because your growth is literally our growth. If your brand succeeds, we send out more orders, make better margins, and build a long-term partnership. We\'re not just a vendor you hire and forget about — we\'re a partner who\'s invested in your success. We\'ll connect you with the best suppliers, help with payment processing issues, guide your packaging strategy, and be there as you scale. Think of us as a friend in the industry who has both the interest and the capability to help you win. Let\'s see if we\'re the right fit. Book a call.',
  },
  {
    question: 'What\'s the onboarding process like?',
    answer: 'Simple. You sign. You get your product and materials to our warehouse. We connect to your store and boom — we\'re live. No long setup processes, no hoops to jump through. That\'s it.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-primary-light">
      <div className="container-max">
        <h2 className="section-title">
          Frequently Asked <span className="section-title-accent">Questions</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-border-light overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold text-text-main hover:bg-primary-light transition-colors flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className={`text-primary-blue text-xl transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white border-t border-border-light text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text: "[Testimonial text goes here]",
    author: "[Client Name]",
    role: "[Company/Role]",
  },
  {
    text: "[Testimonial text goes here]",
    author: "[Client Name]",
    role: "[Company/Role]",
  },
  {
    text: "[Testimonial text goes here]",
    author: "[Client Name]",
    role: "[Company/Role]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <h2 className="section-title">
          What Our <span className="section-title-accent">Clients</span> Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-service">
              <p className="italic text-text-secondary mb-4">"{testimonial.text}"</p>
              <div className="font-semibold text-text-main">{testimonial.author}</div>
              <div className="text-sm text-primary-blue mt-1">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

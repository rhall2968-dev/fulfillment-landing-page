export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-primary-light py-16 md:py-24 text-center">
      <div className="container-max max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
          Fulfillment<span className="text-primary-blue">Max</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8">We build brands through fulfillment</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

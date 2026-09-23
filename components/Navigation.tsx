export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="container-max">
        <div className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold text-primary-blue">FulfillmentMax</div>
          <ul className="hidden md:flex gap-8 text-text-main">
            <li>
              <a href="#contact" className="hover:text-primary-blue transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-primary-blue transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#what-we-do" className="hover:text-primary-blue transition-colors">
                What We Do
              </a>
            </li>
            <li>
              <a href="#client-facts" className="hover:text-primary-blue transition-colors">
                Facts
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary-blue transition-colors">
                FAQ
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <button className="text-primary-blue text-2xl">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

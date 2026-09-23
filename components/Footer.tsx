export default function Footer() {
  return (
    <footer className="bg-text-main text-white py-8 text-center">
      <div className="container-max">
        <p className="mb-2">&copy; 2024 FulfillmentMax. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#contact" className="text-primary-blue hover:underline">
            Contact
          </a>
          <a href="#" className="text-primary-blue hover:underline">
            Privacy
          </a>
          <a href="#" className="text-primary-blue hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

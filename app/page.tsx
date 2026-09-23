import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import WhatWeDo from '@/components/WhatWeDo';
import ClientFacts from '@/components/ClientFacts';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Contact />
      <Testimonials />
      <WhatWeDo />
      <ClientFacts />
      <FAQ />
      <Footer />
    </main>
  );
}

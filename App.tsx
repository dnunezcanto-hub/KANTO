import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-lime selection:text-brand-dark">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
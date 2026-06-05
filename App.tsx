import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-lime-400 selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <BestSellers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
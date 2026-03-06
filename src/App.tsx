import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-snow font-sans text-graphite selection:bg-terracotta selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

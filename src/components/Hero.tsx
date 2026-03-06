import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-white/90 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Estudante de Arquitetura & Urbanismo
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            Projetando <br className="hidden md:block" />
            <span className="italic font-light">espaços com propósito</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a 
              href="#portfolio" 
              className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors"
            >
              Ver Projetos
            </a>
            <a 
              href="#about" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-colors"
            >
              Conheça meu perfil
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

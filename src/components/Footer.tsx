import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-graphite text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-wide mb-2">
              Jamylly Kelly<span className="text-terracotta">.</span>
            </h2>
            <p className="text-white/60 text-sm font-light">
              Estudante de Arquitetura & Urbanismo
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:contato@exemplo.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-colors">
              <Mail size={18} />
            </a>
          </div>

          <div className="md:text-right text-white/40 text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Jamylly Kelly.</p>
            <p>Todos os direitos reservados.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

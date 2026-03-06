import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-snow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1541888078082-5161821101e3?q=80&w=1974&auto=format&fit=crop" 
                alt="Jamylly Kelly" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-l border-t border-terracotta rounded-tl-3xl z-[-1]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-graphite mb-6">
              Sobre mim
            </h2>
            <div className="w-12 h-1 bg-terracotta mb-8"></div>
            
            <div className="space-y-6 text-graphite/80 leading-relaxed font-light">
              <p>
                Olá! Sou a Jamylly Kelly, estudante de Arquitetura e Urbanismo. 
                Sou apaixonada por transformar ideias em espaços que melhoram a qualidade de vida 
                das pessoas, unindo estética, funcionalidade e sustentabilidade.
              </p>
              <p>
                Tenho um interesse especial por <strong>Design de Interiores</strong> e <strong>Projetos Residenciais</strong>, 
                buscando sempre criar ambientes acolhedores e com personalidade. Acredito que a arquitetura 
                é uma ferramenta poderosa para contar histórias.
              </p>
              <p>
                Atualmente, estou em busca de uma oportunidade de <strong>estágio</strong> onde eu possa 
                aplicar meus conhecimentos teóricos na prática, aprender com profissionais experientes 
                e contribuir ativamente para o desenvolvimento de projetos criativos e inovadores.
              </p>
            </div>

            <div className="mt-10">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 border border-graphite text-graphite hover:bg-graphite hover:text-white px-6 py-3 rounded-sm text-sm uppercase tracking-widest transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert("O download do PDF do currículo/portfólio iniciaria aqui.");
                }}
              >
                <Download size={18} />
                Baixar Currículo (PDF)
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

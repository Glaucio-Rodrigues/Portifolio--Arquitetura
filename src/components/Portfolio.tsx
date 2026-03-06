import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Residência Horizonte',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    software: 'Revit + V-Ray + Photoshop',
  },
  {
    id: 2,
    title: 'Café Botânico',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    software: 'SketchUp + Lumion',
  },
  {
    id: 3,
    title: 'Apartamento Minimal',
    category: 'Interiores',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    software: 'SketchUp + V-Ray',
  },
  {
    id: 4,
    title: 'Praça da Luz',
    category: 'Urbanismo',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
    software: 'AutoCAD + Photoshop',
  },
  {
    id: 5,
    title: 'Loja Conceito',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop',
    software: 'Revit + Enscape',
  },
  {
    id: 6,
    title: 'Estúdio Criativo',
    category: 'Interiores',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    software: 'SketchUp + V-Ray',
  },
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Interiores', 'Urbanismo'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-snow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-graphite mb-4">Projetos</h2>
            <div className="w-12 h-1 bg-terracotta"></div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-2 md:gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${
                  activeFilter === category 
                    ? 'bg-graphite text-white' 
                    : 'bg-white text-graphite/70 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-4">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-sm text-graphite text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl text-graphite mb-1 group-hover:text-terracotta transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-graphite/50 font-light">
                    {project.software}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

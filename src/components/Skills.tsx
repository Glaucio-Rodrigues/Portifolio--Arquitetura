import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'AutoCAD', level: 'Avançado', icon: '📐' },
  { name: 'SketchUp', level: 'Avançado', icon: '🏠' },
  { name: 'Revit (BIM)', level: 'Intermediário', icon: '🏢' },
  { name: 'V-Ray', level: 'Intermediário', icon: '💡' },
  { name: 'Photoshop', level: 'Avançado', icon: '🎨' },
  { name: 'Illustrator', level: 'Básico', icon: '✒️' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-graphite mb-4">Ferramentas & Softwares</h2>
          <p className="text-graphite/60 font-light max-w-2xl mx-auto">
            Domínio técnico para transformar conceitos em representações visuais precisas e encantadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-snow border border-gray-100 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group"
            >
              <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</span>
              <h3 className="font-medium text-graphite mb-1">{skill.name}</h3>
              <span className="text-[10px] text-terracotta uppercase tracking-wider font-semibold">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    period: '2020 — PRESENT',
    role: 'Lead Software Engineer',
    company: 'TechStream Corp',
    description: 'Architected a real-time data processing engine that handles over 500k events per second. Reduced operational costs by 40% through infrastructure optimization and serverless migration.',
  },
  {
    period: '2017 — 2020',
    role: 'Senior Full-Stack Developer',
    company: 'FinNova Systems',
    description: 'Developed high-security financial dashboards using React and Node.js. Led a team of 6 developers and implemented standardized testing patterns, increasing code coverage to 90%.',
  },
  {
    period: '2014 — 2017',
    role: 'Software Engineer',
    company: 'BuildWise Digital',
    description: 'Maintained and scaled e-commerce platforms for major retail clients. Optimized database queries resulting in a 30% improvement in page load times.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-16">EXPERIENCE.</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{exp.period}</span>
              </div>
              <div className="md:col-span-9 border-l border-slate-800 pl-8 pb-8 relative">
                {/* Timeline dot */}
                <div className="absolute top-0 -left-[5px] size-[9px] bg-primary rounded-full"></div>
                
                <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                <p className="text-primary font-bold text-sm mb-4 tracking-wide">{exp.company}</p>
                <p className="text-slate-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

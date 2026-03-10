import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">ABOUT ME.</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              A dedicated engineer with over 3 years of experience in Computer Engineering.
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I specialize in building robust backend systems and intuitive frontend experiences. My approach combines deep technical expertise with a strong focus on business objectives and user needs.
              </p>
              <p>
                Based in Mangaldan, I've led technical teams at high-growth startups and established tech giants, consistently delivering high-impact software that scales to millions of users.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

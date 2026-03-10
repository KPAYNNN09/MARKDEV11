import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
                MARKDEV. <br/>
                <span className="text-primary">specializing in scalable systems.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                A dedicated engineer with over 3 years of experience in Computer Engineering.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded font-bold tracking-[0.2em] text-xs hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                VIEW PROJECTS.
              </button>
              <button className="border border-slate-700 px-8 py-4 rounded font-bold tracking-[0.2em] text-xs hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                DOWNLOAD CV.
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 shadow-2xl relative z-10">
              <img 
                src="/profile.png" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-xl -z-0"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}

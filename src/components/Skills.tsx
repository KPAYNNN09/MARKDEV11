import React from 'react';
import { motion } from 'motion/react';
import { Layout, Terminal, Globe, Cloud } from 'lucide-react';

const skills = [
  {
    icon: <Layout className="text-primary" size={32} />,
    title: 'Engineering',
    description: 'PCB Design, IoT Systems, Circuit Analysis, Computer Technician',
  },
  {
    icon: <Terminal className="text-primary" size={32} />,
    title: 'Development',
    description: 'C/C++, Python, Verilog, JavaScript, TypeScript, HTML/CSS',
  },
  {
    icon: <Globe className="text-primary" size={32} />,
    title: 'Hardware',
    description: 'Arduino, ESP32, Raspberry Pi, Sensors & Actuators, Microcontrollers',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-12">CORE SKILLS.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-primary/50 transition-all group"
            >
              <div className="mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {skill.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{skill.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

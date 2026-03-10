import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck } from 'lucide-react';

const certs = [
  { title: 'Cisco Packet Tracer', issuer: 'CISCO' },
  { title: 'Interaction Design', issuer: 'HCI INSTITUTE' },
  { title: 'Nielsen Norman UX', issuer: 'NN GROUP' },
  { title: 'Design Leadership', issuer: 'GENERAL ASSEMBLY' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-12">CERTIFICATIONS.</h2>
        <div className="flex flex-wrap gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 px-6 py-4 bg-slate-800/40 rounded-lg border border-slate-800 hover:border-primary/30 transition-all cursor-default"
            >
              <BadgeCheck className="text-primary flex-shrink-0" size={20} />
              <div className="flex flex-col">
                <span className="font-bold text-xs tracking-wide">{cert.title}</span>
                <span className="text-[10px] text-slate-500 tracking-wider font-bold uppercase mt-1">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

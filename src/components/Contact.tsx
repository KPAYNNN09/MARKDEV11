import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 size-64 bg-primary/10 blur-[100px] rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">CONTACT.</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Let's build something exceptional.
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                I'm currently open to new opportunities and interesting projects. Reach out and let's start a conversation.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="https://www.facebook.com/markivan.malaque.1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer hover:text-primary transition-colors">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Facebook size={20} />
                  </div>
                  <span className="font-bold text-slate-200 group-hover:text-primary transition-colors">Mark Mark</span>
                </a>
                <div className="flex items-center gap-5 group">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold text-slate-200">malaquemarkivanpermison@gmail.com</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bold text-slate-200">Mangaldan</span>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-bold text-[10px] tracking-widest transition-all placeholder:text-slate-600"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-bold text-[10px] tracking-widest transition-all placeholder:text-slate-600"
                />
                <textarea 
                  placeholder="HOW CAN I HELP?" 
                  rows={4}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-bold text-[10px] tracking-widest transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-lg font-bold tracking-[0.3em] text-[10px] hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
                SEND MESSAGE.
                <Send size={14} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

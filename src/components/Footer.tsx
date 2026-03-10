import React from 'react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <Code2 size={14} />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">MD.</span>
          </div>

          <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase text-center">
            © {currentYear} Software Engineer Portfolio. Designed for excellence.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-primary transition-colors group">
              <Github size={18} className="group-hover:scale-110 transition-transform" />
              <span className="sr-only">Github</span>
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors group">
              <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

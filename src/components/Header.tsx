import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'ABOUT.', href: '#about' },
  { name: 'SKILLS.', href: '#skills' },
  { name: 'EXPERIENCE.', href: '#experience' },
  { name: 'CERTIFICATIONS.', href: '#certifications' },
  { name: 'PROJECTS.', href: '#projects' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'glass h-16' : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 bg-primary rounded flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Code2 size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">MD.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold tracking-[0.2em] text-slate-400 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 bg-primary text-white text-[10px] font-bold tracking-[0.2em] rounded hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            CONTACT.
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background-dark border-b border-slate-800 py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold tracking-[0.2em] text-slate-400 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-primary text-white text-center text-sm font-bold tracking-[0.2em] rounded"
            >
              CONTACT.
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

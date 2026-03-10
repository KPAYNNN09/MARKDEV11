import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

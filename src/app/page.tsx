import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Projects from '@/components/organisms/Projects';
import Skills from '@/components/organisms/Skills';
import Contact from '@/components/organisms/Contact';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
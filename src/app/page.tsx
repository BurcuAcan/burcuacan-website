"use client";

import { useState, useEffect, useCallback, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Projects from '@/components/organisms/Projects';
import Skills from '@/components/organisms/Skills';
import Contact from '@/components/organisms/Contact';
import Footer from '@/components/organisms/Footer';

const SectionWrapper = memo(({ id, children, onInView }: { id: string, children: React.ReactNode, onInView: (id: string) => void }) => {
  const { ref, inView } = useInView({ 
    threshold: 0, 
    rootMargin: "-50% 0px -50% 0px"
  });

  useEffect(() => {
    if (inView) {
      onInView(id);
    }
  }, [inView, id, onInView]);

  return <div id={id} ref={ref}>{children}</div>;
});

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleInView = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <Header activeSection={activeSection} />
      <main>
        <SectionWrapper id="hero" onInView={handleInView}><Hero /></SectionWrapper>
        <SectionWrapper id="about" onInView={handleInView}><About /></SectionWrapper>
        <SectionWrapper id="projects" onInView={handleInView}><Projects /></SectionWrapper>
        <SectionWrapper id="skills" onInView={handleInView}><Skills /></SectionWrapper>
        <SectionWrapper id="contact" onInView={handleInView}><Contact /></SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}


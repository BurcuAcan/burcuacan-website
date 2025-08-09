"use client";

import { useState, useEffect, useCallback, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Projects from '@/components/organisms/Projects';
import Skills from '@/components/organisms/Skills';
import Contact from '@/components/organisms/Contact';
import ScrollToTopButton from '@/components/atoms/ScrollToTopButton';
import Footer from '@/components/organisms/Footer';

const SectionWrapper = memo(({ id, children, onInView, className }: { id: string, children: React.ReactNode, onInView: (id: string) => void, className?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      onInView(id);
    }
  }, [inView, id, onInView]);

  return <section id={id} ref={ref} className={className}>{children}</section>;
});
SectionWrapper.displayName = 'SectionWrapper';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleInView = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  const scrollToTop = () => {
    console.log('scrollToTop function called');
    const main = document.querySelector('main');

    if (main) {
      const computedStyle = getComputedStyle(main);
      const isMainScrollable = computedStyle.overflowY === 'scroll';

      if (isMainScrollable) {
        console.log('main is scrollable, using main.scrollTo');
        main.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        console.log('main is not scrollable, using window.scrollTo');
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } else {
      console.log('main element not found, using window.scrollTo (fallback)');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <Header activeSection={activeSection} />
      <main>
        <SectionWrapper id="hero" onInView={handleInView}><Hero /></SectionWrapper>
        <SectionWrapper id="about" onInView={handleInView}><About /></SectionWrapper>
        <SectionWrapper id="projects" onInView={handleInView}><Projects /></SectionWrapper>
        <SectionWrapper id="skills" onInView={handleInView}><Skills /></SectionWrapper>
        <SectionWrapper id="contact" onInView={handleInView}><Contact /></SectionWrapper>
        <Footer />
      </main>
      {/* <ScrollToTopButton isVisible={activeSection !== 'hero'} onClick={() => (console.log("deneme"))} /> */}
      <ScrollToTopButton isVisible={activeSection !== 'hero'} onClick={scrollToTop} />
    </div>
  );
}


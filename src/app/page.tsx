"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Projects from '@/components/organisms/Projects';
import Skills from '@/components/organisms/Skills';
import Contact from '@/components/organisms/Contact';
import Footer from '@/components/organisms/Footer';
import ScrollToTopButton from '@/components/atoms/ScrollToTopButton';

// Section wrapper to track visibility with controlled scroll handling
function SectionWrapper({ id, children, onInView }: { id: string, children: React.ReactNode, onInView: (id: string) => void }) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Section'ın %50'si görünür olmalı
    rootMargin: '-20% 0px -20% 0px', // Daha büyük margin ile daha az hassas
  });

  useEffect(() => {
    if (inView) {
      onInView(id);
    }
  }, [inView, id, onInView]);

  return <section id={id} ref={ref}>{children}</section>;
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTime = useRef(0);
  const sectionUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSectionInView = useCallback((sectionId: string) => {
    const now = Date.now();

    if (now - lastScrollTime.current < 400) {
      if (sectionUpdateTimeoutRef.current) {
        clearTimeout(sectionUpdateTimeoutRef.current);
      }

      sectionUpdateTimeoutRef.current = setTimeout(() => {
        setActiveSection(sectionId);
        lastScrollTime.current = Date.now();
      }, 200);
      return;
    }

    setActiveSection(sectionId);
    lastScrollTime.current = now;
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollToTop(scrollY > 10);

      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (sectionUpdateTimeoutRef.current) {
        clearTimeout(sectionUpdateTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main className={`overflow-x-hidden h-screen overflow-y-scroll snap-y snap-container transition-all duration-300 ${isScrolling ? 'snap-none' : 'snap-proximity'
      }`}>
      <Header activeSection={activeSection} />

      <SectionWrapper id="hero" onInView={handleSectionInView}>
        <div className="snap-start">
          <Hero />
        </div>
      </SectionWrapper>

      <SectionWrapper id="about" onInView={handleSectionInView}>
        <div className="snap-start">
          <About />
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" onInView={handleSectionInView}>
        <div className="snap-start">
          <Projects />
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" onInView={handleSectionInView}>
        <div className="snap-start">
          <Skills />
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" onInView={handleSectionInView}>
        <div className="snap-start">
          <Contact />
        </div>
      </SectionWrapper>

      <Footer />

      <ScrollToTopButton isVisible={showScrollToTop} onClick={scrollToTop} />
    </main>
  );
}
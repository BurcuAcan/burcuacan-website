import { memo } from 'react';
import Link from 'next/link';
import { ThemeToggleButton } from '@/components/atoms/ThemeToggleButton';

interface HeaderProps {
  activeSection: string;
}

const Header = memo(({ activeSection }: HeaderProps) => {
  const getLinkClass = (section: string) => {
    return `hover:text-sky-500 transition-colors duration-300 ${activeSection === section ? 'text-sky-500' : ''
      }`;
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const main = document.querySelector('main');

    if (element && main) {
      const originalSnapType = getComputedStyle(main).scrollSnapType;
      main.style.scrollSnapType = 'none';

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        main.style.scrollSnapType = originalSnapType;
      }, 1000);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="cursor-pointer">Burcu Acan</a>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-6">
            <li><a href="#hero" className={getLinkClass('hero')} onClick={(e) => handleScrollTo(e, 'hero')}>Anasayfa</a></li>
            <li><a href="#about" className={getLinkClass('about')} onClick={(e) => handleScrollTo(e, 'about')}>Hakkımda</a></li>
            <li><a href="#projects" className={getLinkClass('projects')} onClick={(e) => handleScrollTo(e, 'projects')}>Projelerim</a></li>
            <li><a href="#skills" className={getLinkClass('skills')} onClick={(e) => handleScrollTo(e, 'skills')}>Yeteneklerim</a></li>
            <li><a href="#contact" className={getLinkClass('contact')} onClick={(e) => handleScrollTo(e, 'contact')}>İletişim</a></li>
          </ul>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
});

export default Header;

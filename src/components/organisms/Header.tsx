import { memo } from 'react';
import ThemeToggleButton from '@/components/atoms/ThemeToggleButton';

interface HeaderProps {
  activeSection: string;
}

const Header = memo(({ activeSection }: HeaderProps) => {
  const getLinkClass = (section: string) => {
    return `hover:text-primary transition-colors duration-300 ${activeSection === section ? 'text-primary' : 'text-foreground'
      }`;
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-foreground">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="cursor-pointer hover:text-primary transition-colors">Burcu Acan</a>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-6 text-foreground">
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
Header.displayName = 'Header';

export default Header;

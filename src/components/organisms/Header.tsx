import { memo } from 'react';
import Link from 'next/link';
import { ThemeToggleButton } from '@/components/atoms/ThemeToggleButton';

interface HeaderProps {
  activeSection: string;
}

const Header = memo(({ activeSection }: HeaderProps) => {
  const getLinkClass = (section: string) => {
    return `hover:text-sky-500 transition-colors duration-300 ${
      activeSection === section ? 'text-sky-500' : ''
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">Burcu Acan</Link>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-6">
            <li><Link href="#hero" className={getLinkClass('hero')}>Anasayfa</Link></li>
            <li><Link href="#about" className={getLinkClass('about')}>Hakkımda</Link></li>
            <li><Link href="#projects" className={getLinkClass('projects')}>Projelerim</Link></li>
            <li><Link href="#skills" className={getLinkClass('skills')}>Yeteneklerim</Link></li>
            <li><Link href="#contact" className={getLinkClass('contact')}>İletişim</Link></li>
          </ul>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
});

export default Header;

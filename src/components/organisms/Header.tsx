import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">Burcu Acan</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="hover:text-sky-500 transition-colors duration-300">Hakkımda</Link></li>
            <li><Link href="#projects" className="hover:text-sky-500 transition-colors duration-300">Projelerim</Link></li>
            <li><Link href="#skills" className="hover:text-sky-500 transition-colors duration-300">Yeteneklerim</Link></li>
            <li><Link href="#contact" className="hover:text-sky-500 transition-colors duration-300">İletişim</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

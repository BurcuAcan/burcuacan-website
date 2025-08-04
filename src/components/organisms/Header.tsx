import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Burcu Acan</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:text-gray-400">Hakkımda</Link></li>
            <li><Link href="#projects" className="hover:text-gray-400">Projelerim</Link></li>
            <li><Link href="#skills" className="hover:text-gray-400">Yeteneklerim</Link></li>
            <li><Link href="#contact" className="hover:text-gray-400">İletişim</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

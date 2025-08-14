const Footer = () => {
  return (
    <footer className="py-8 h-[10vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="glass-dark backdrop-blur-md border-t border-white/10 h-full relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-full">
          <p className="text-slate-300 text-sm mb-4 md:mb-0">
            &copy; 2025 Burcu Acan. Tüm hakları saklıdır.
          </p>
          <div className="text-slate-400 text-sm">
            Modern web technologies ile ❤️ ile geliştirildi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
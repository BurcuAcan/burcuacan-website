const Footer = () => {
  return (
    <footer className="py-8 h-[10vh] bg-gradient-to-br from-white to-slate-50 dark:from-slate-850 dark:to-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-600 text-xs dark:text-slate-600 mb-4 md:mb-0 ">
          &copy; 2025 Burcu Acan. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
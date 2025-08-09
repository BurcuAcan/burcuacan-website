import { Plane } from 'lucide-react';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const ScrollToTopButton = ({ isVisible, onClick }: ScrollToTopButtonProps) => {
  return (
    <button
      type="button"
      className={`fixed bottom-8 right-8 bg-sky-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:bg-sky-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      onClick={onClick}
      aria-label="Go to top"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }} // Add this to prevent interaction when hidden
    >
      <Plane className="w-6 h-6 -rotate-45" />
    </button>
  );
};

export default ScrollToTopButton;
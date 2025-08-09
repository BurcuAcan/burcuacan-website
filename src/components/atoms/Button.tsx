import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: any) => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  target?: string; // Add target prop
  rel?: string;   // Add rel prop
  download?: string; // Add download prop
}

const Button = ({ children, onClick, className, href, variant = 'primary', target, rel, download }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300";

  const variants = {
    primary: "bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-sky-500/50",
    secondary: "bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200",
  };

  const finalClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={finalClasses} target={target} rel={rel} download={download}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};

export default Button;

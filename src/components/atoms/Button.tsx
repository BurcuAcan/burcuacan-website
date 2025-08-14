import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void;
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
    primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50",
    secondary: "bg-transparent hover:bg-secondary border-2 border-border text-foreground hover:text-secondary-foreground",
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

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button = ({ children, onClick, className, href }: ButtonProps) => {
  const baseClasses = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

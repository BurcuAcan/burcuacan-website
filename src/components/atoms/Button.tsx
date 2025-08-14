import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'glass' | 'gradient';
  target?: string;
  rel?: string;
  download?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  children,
  onClick,
  className,
  href,
  variant = 'primary',
  target,
  rel,
  download,
  size = 'md'
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95";

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };

  const variants = {
    primary: "gradient-primary hover:opacity-90 text-inverse shadow-lg hover:shadow-xl hover:shadow-primary-500/25",
    secondary: "glass-modern border-primary text-primary hover:bg-white/20 dark:hover:bg-white/10",
    glass: "glass-modern text-primary hover:bg-white/20 dark:hover:bg-white/10",
    gradient: "gradient-primary text-inverse shadow-lg hover:shadow-xl hover:opacity-90"
  };

  const finalClasses = `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;

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

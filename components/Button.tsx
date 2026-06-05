import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  icon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon = true, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-lime-400 text-black hover:bg-lime-300 border border-transparent",
    outline: "bg-transparent text-white border border-white/20 hover:border-lime-400 hover:text-lime-400",
    text: "bg-transparent text-white hover:text-lime-400 px-0",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className={`ml-2 h-4 w-4 ${variant === 'primary' ? 'text-black' : 'currentColor'}`} />}
    </button>
  );
};

export default Button;
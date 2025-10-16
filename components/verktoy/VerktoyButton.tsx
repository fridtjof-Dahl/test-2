'use client';

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

interface VerktoyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
}

export default function VerktoyButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  href,
  className = '',
  ...props 
}: VerktoyButtonProps) {
  const baseClasses = "font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "bg-[#FF6B35] hover:bg-[#E55A25] text-white shadow-lg hover:shadow-xl focus:ring-[#FF6B35]",
    secondary: "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 focus:ring-white/50",
    outline: "bg-white/90 hover:bg-white text-[#004D61] border-2 border-[#004D61] hover:border-[#FF6B35] hover:text-[#FF6B35] focus:ring-[#004D61]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const widthClasses = fullWidth ? "w-full" : "";
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}
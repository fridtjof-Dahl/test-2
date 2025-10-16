'use client';

import { ReactNode } from 'react';

interface VerktoyResultProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function VerktoyResult({ 
  title, 
  value, 
  subtitle, 
  icon, 
  color = 'primary',
  size = 'md',
  className = ''
}: VerktoyResultProps) {
  const colorClasses = {
    primary: 'text-[#004D61]',
    secondary: 'text-[#FF6B35]',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600'
  };
  
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };
  
  return (
    <div className={`text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E8F4F8] to-[#D1F4E0] rounded-2xl flex items-center justify-center text-[#004D61]">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {title}
      </h3>
      
      <div className={`font-bold ${colorClasses[color]} ${sizeClasses[size]} mb-2`}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      
      {subtitle && (
        <p className="text-sm text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface VerktoyCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  features: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'indigo';
  className?: string;
}

export default function VerktoyCard({ 
  title,
  description,
  icon,
  href,
  features,
  color,
  className = ''
}: VerktoyCardProps) {
  const colorClasses = {
    blue: 'verktoy-icon-blue',
    green: 'verktoy-icon-green',
    purple: 'verktoy-icon-purple',
    orange: 'verktoy-icon-orange',
    teal: 'verktoy-icon-teal',
    indigo: 'verktoy-icon-indigo'
  };

  return (
    <Link href={href} className={`verktoy-card group ${className}`}>
      <div className="text-center">
        <div className={`verktoy-icon ${colorClasses[color]} mx-auto group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-[#004D61] mb-3 group-hover:text-[#FF6B35] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-1">
          {features.map((feature, index) => (
            <div key={index} className="verktoy-feature">
              {feature}
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
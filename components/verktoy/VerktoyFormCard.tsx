'use client';

import { ReactNode } from 'react';

interface VerktoyFormCardProps {
  children: ReactNode;
  className?: string;
}

export default function VerktoyFormCard({ 
  children,
  className = ''
}: VerktoyFormCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

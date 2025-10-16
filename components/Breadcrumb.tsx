'use client';

import Link from 'next/link';
import { memo } from 'react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="text-[#004D61] hover:text-[#FF6B35] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;

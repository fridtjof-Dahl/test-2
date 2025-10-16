'use client';

import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
// CSS styles are handled by Tailwind classes

interface VerktoyLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  breadcrumbItems: Array<{ label: string; href?: string }>;
}

export default function VerktoyLayout({ 
  children, 
  title, 
  description, 
  breadcrumbItems 
}: VerktoyLayoutProps) {
  return (
    <>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/50">
              <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Interaktivt verktøy</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#004D61] via-[#006B7D] to-[#004D61] bg-clip-text text-transparent mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          </div>
          
          {children}
        </div>
      </main>
      <Footer key="verktoy-footer" />
    </>
  );
}

'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function LazyWrapper({ 
  children, 
  fallback = null, 
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${hasLoaded ? 'loaded' : 'lazy-load'}`}
    >
      {isVisible ? children : fallback}
    </div>
  );
}

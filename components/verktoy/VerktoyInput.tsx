'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface VerktoyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const VerktoyInput = forwardRef<HTMLInputElement, VerktoyInputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-xl transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent
            ${error 
              ? 'border-red-300 bg-red-50 focus:ring-red-500' 
              : 'border-gray-300 bg-white hover:border-gray-400 focus:border-[#FF6B35]'
            }
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

VerktoyInput.displayName = 'VerktoyInput';

export default VerktoyInput;

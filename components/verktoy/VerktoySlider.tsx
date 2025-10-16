'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface VerktoySliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  formatValue?: (value: number) => string;
}

const VerktoySlider = forwardRef<HTMLInputElement, VerktoySliderProps>(
  ({ 
    label, 
    value, 
    min, 
    max, 
    step = 1, 
    unit = '', 
    formatValue,
    className = '',
    ...props 
  }, ref) => {
    const displayValue = formatValue ? formatValue(value) : `${value.toLocaleString()}${unit}`;
    
    return (
      <div className="space-y-3">
        {label && (
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              {label}
            </label>
            <span className="text-lg font-bold text-[#004D61]">
              {displayValue}
            </span>
          </div>
        )}
        <div className="relative">
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className={`
              w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2
              slider-thumb
              ${className}
            `}
            style={{
              background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((value - min) / (max - min)) * 100}%, #E5E7EB ${((value - min) / (max - min)) * 100}%, #E5E7EB 100%)`
            }}
            {...props}
          />
        </div>
      </div>
    );
  }
);

VerktoySlider.displayName = 'VerktoySlider';

export default VerktoySlider;

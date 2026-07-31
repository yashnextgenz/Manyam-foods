'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`glass-card rounded-xl overflow-hidden transition-all duration-500 border ${
              isOpen 
                ? 'border-primary/30 shadow-lg shadow-primary/5' 
                : 'border-light-gray/20 dark:border-white/10 hover:border-primary/20'
            }`}
          >
            {/* Gradient left border */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
              style={{ background: 'linear-gradient(to bottom, var(--color-primary), #2D8F6F)' }}
            />
            
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-dark-text dark:text-dark-text-light hover:text-primary transition-colors relative"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base pr-4">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-medium-text dark:text-dark-text-muted flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'rotate-180 text-primary' : ''}`} 
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-6 pb-4 text-medium-text dark:text-dark-text-muted text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

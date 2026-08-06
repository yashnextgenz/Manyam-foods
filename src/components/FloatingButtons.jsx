'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      {/* Back to Top with progress ring */}
      <div className="relative group">
        {/* Tooltip */}
        <span className="absolute -top-8 right-0 bg-dark-text dark:bg-gray-200 text-white dark:text-gray-900 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Back to top
        </span>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`relative w-11 h-11 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 border-2 border-light-gray/50 dark:border-white/15 rounded-full shadow-lg dark:shadow-black/30 flex items-center justify-center text-dark-text dark:text-dark-text-light hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 ${
            showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <ArrowUp className="w-5 h-5 relative z-10" />
          {/* Progress ring SVG */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="rgba(74, 124, 89, 0.1)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#4A7C59"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>
        </button>
      </div>

      {/* WhatsApp */}
      <div className="relative group">
        {/* Tooltip */}
        <span className="absolute -top-8 right-0 bg-dark-text dark:bg-gray-200 text-white dark:text-gray-900 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
        <a
          href="https://wa.me/919177418031?text=Hi%20Manyam%20Foods%2C%20I%27m%20interested%20in%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative group/whatsapp w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl hover:scale-110 transition-all duration-500 hover:-translate-y-0.5"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] opacity-0 group-hover/whatsapp:opacity-100" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
          <MessageCircle className="w-7 h-7 relative z-10" />
        </a>
      </div>
    </div>

  )
}

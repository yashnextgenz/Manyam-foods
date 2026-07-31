'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] h-[3px] transition-all duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 rounded-full blur-sm opacity-60"
        style={{
          width: `${Math.max(progress, 2)}%`,
          background: 'linear-gradient(90deg, #4A7C59, #2D8F6F, #5E9A6E)',
          transition: 'width 150ms ease-out',
        }}
      />
      {/* Crisp main line */}
      <div
        className="relative h-full rounded-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #4A7C59, #2D8F6F, #5E9A6E)',
          transition: 'width 150ms ease-out',
        }}
      />
      {/* Bright tip */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm shadow-primary/50"
        style={{
          left: `${progress}%`,
          marginLeft: '-4px',
          opacity: progress > 2 && progress < 98 ? 1 : 0,
          transition: 'left 150ms ease-out, opacity 0.3s ease',
        }}
      />
    </div>
  );
}

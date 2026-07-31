'use client';

import { useEffect, useRef, useState } from 'react';

export default function QualityBar({ value, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="w-full h-2.5 bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: isVisible ? `${value}%` : '0%',
          background: `linear-gradient(90deg, var(--color-primary) 0%, #2D8F6F 100%)`,
          boxShadow: isVisible ? '0 0 8px rgba(74, 124, 89, 0.4)' : 'none',
        }}
      />
    </div>
  );
}

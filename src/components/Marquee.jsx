'use client';

import { useEffect, useRef, useState } from 'react';

export default function Marquee({ children, speed = 30, direction = 'left', pauseOnHover = true, className = '' }) {
  const containerRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(speed);

  useEffect(() => {
    if (containerRef.current) {
      const contentWidth = containerRef.current.scrollWidth / 2;
      setAnimationDuration(contentWidth / (speed * 0.5));
    }
  }, [speed, children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={pauseOnHover ? () => setAnimationDuration(9999) : undefined}
      onMouseLeave={pauseOnHover ? () => setAnimationDuration(speed) : undefined}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10 pointer-events-none" aria-hidden="true" />

      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${animationDuration}s linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        <div aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

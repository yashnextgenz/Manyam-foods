'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    scale: 'scale(0.95)',
    fade: 'none',
  };

  const transform = isVisible ? 'none' : (transforms[direction] || transforms.up);
  const opacity = isVisible ? 1 : 0;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
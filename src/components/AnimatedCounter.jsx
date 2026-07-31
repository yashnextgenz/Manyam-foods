'use client';

import { useEffect, useRef, useState } from 'react';

/* Ease-out-expo: fast start, smooth deceleration */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* Slight overshoot spring: goes ~3% past target then settles */
function overshootEase(t) {
  if (t < 0.6) {
    return easeOutExpo(t / 0.6) * 1.03;
  }
  const settle = (t - 0.6) / 0.4;
  return 1.03 - 0.03 * easeOutExpo(settle);
}

export default function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const startAnimation = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const rawT = Math.min(elapsed / duration, 1);
      const easedT = overshootEase(rawT);
      const current = Math.round(numericValue * easedT);
      setCount(current);
      if (rawT < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(numericValue);
      }
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Small delay to avoid race conditions with React hydration / mount */
    const timer = setTimeout(() => {
      /* If already animated (e.g. by the observer below firing quickly), bail */
      if (hasAnimated.current) return;

      /* Immediately check if the element is already in the viewport */
      const rect = el.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0;

      if (isVisible) {
        startAnimation();
        return;
      }

      /* Otherwise, set up IntersectionObserver as a fallback */
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

'use client';

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
import { Droplets } from 'lucide-react';

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const isClient = useIsClient();
  const minDelayReached = useRef(false);
  const pageLoaded = useRef(false);

  const fadingRef = useRef(false);

  const tryHide = useCallback(() => {
    if (minDelayReached.current && pageLoaded.current && !fadingRef.current) {
      fadingRef.current = true;
      // Use a microtask to avoid synchronous setState in effect
      queueMicrotask(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 600);
      });
    }
  }, []);

  useEffect(() => {
    // Minimum display time: 1.5s
    const minTimer = setTimeout(() => {
      minDelayReached.current = true;
      tryHide();
    }, 1500);

    // Page loaded listener
    const handleLoad = () => {
      pageLoaded.current = true;
      tryHide();
    };

    if (document.readyState === 'complete') {
      pageLoaded.current = true;
      // Schedule outside the synchronous effect body
      setTimeout(tryHide, 0);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [tryHide]);

  // SSR guard: render a lightweight placeholder on server
  if (!isClient) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4A7C59',
        }}
        suppressHydrationWarning
      />
    );
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`preloader-overlay ${isFading ? 'preloader-fade-out' : ''}`}
      suppressHydrationWarning
      aria-hidden="true"
    >
      <div className="preloader-content">
        {/* Water ripple rings */}
        <div className="preloader-ripple-container">
          <span className="preloader-ripple" />
          <span className="preloader-ripple" style={{ animationDelay: '0.4s' }} />
          <span className="preloader-ripple" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Logo icon */}
        <div className="preloader-icon-wrapper">
          <Droplets className="preloader-icon" strokeWidth={1.5} size={48} />
        </div>

        {/* Brand text */}
        <div className="preloader-text">Manyam Foods</div>

        {/* Loading bar */}
        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" />
        </div>
      </div>
    </div>
  );
}

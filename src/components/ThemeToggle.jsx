'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore, useState, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};
function getMountedSnapshot() { return true; }
function getServerSnapshot() { return false; }

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, getMountedSnapshot, getServerSnapshot);
  const [isRotating, setIsRotating] = useState(false);

  const toggleTheme = () => {
    setIsRotating(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsRotating(false), 500);
  };

  if (!mounted) {
    return (
      <button
        className="relative w-9 h-9 rounded-full bg-white/50 backdrop-blur-md border border-light-gray/30 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-light-gray/30 dark:border-white/15 flex items-center justify-center hover:bg-white/70 dark:hover:bg-white/20 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`relative w-4 h-4 transition-all duration-500 ${
          isRotating
            ? 'rotate-[360deg] scale-0'
            : isDark
              ? 'rotate-0 scale-100'
              : 'rotate-0 scale-100'
        }`}
        style={{
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
        }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-primary-light" strokeWidth={2.5} />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" strokeWidth={2.5} />
        )}
      </div>
      {/* Subtle glow ring on hover */}
      <span
        className={`absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark
            ? 'shadow-[0_0_12px_rgba(94,154,110,0.3)]'
            : 'shadow-[0_0_12px_rgba(245,158,11,0.3)]'
        }`}
      />
    </button>
  );
}

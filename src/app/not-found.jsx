'use client';

import Link from 'next/link';
import { Home, Phone, Droplets, Package, Wrench, Info } from 'lucide-react';

const popularPages = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Services', href: '/services', icon: Wrench },
  { name: 'About', href: '/about', icon: Info },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden py-16">
      {/* Animated water droplets falling in background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="water-droplet" style={{ left: '10%', animationDuration: '8s', animationDelay: '0s' }} />
        <div className="water-droplet" style={{ left: '25%', animationDuration: '12s', animationDelay: '2s', width: '4px', height: '6px' }} />
        <div className="water-droplet" style={{ left: '40%', animationDuration: '10s', animationDelay: '4s' }} />
        <div className="water-droplet" style={{ left: '55%', animationDuration: '9s', animationDelay: '1s', width: '5px', height: '7px' }} />
        <div className="water-droplet" style={{ left: '70%', animationDuration: '11s', animationDelay: '3s' }} />
        <div className="water-droplet" style={{ left: '85%', animationDuration: '13s', animationDelay: '5s', width: '3px', height: '5px' }} />
        <div className="water-droplet" style={{ left: '15%', animationDuration: '14s', animationDelay: '6s', width: '4px', height: '6px' }} />
        <div className="water-droplet" style={{ left: '60%', animationDuration: '7s', animationDelay: '7s' }} />
        <div className="water-droplet" style={{ left: '35%', animationDuration: '15s', animationDelay: '8s', width: '5px', height: '8px' }} />
        <div className="water-droplet" style={{ left: '80%', animationDuration: '10s', animationDelay: '9s' }} />
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-xl w-full relative z-10 text-center animate-fade-in">
        {/* Animated bouncing water droplet SVG */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-20 h-20 mx-auto mb-6" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="dropGrad" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A7C59" />
                  <stop offset="1" stopColor="#2D8F6F" />
                </linearGradient>
              </defs>
              <path
                d="M40 6C40 6 14 36 14 50C14 64.4 25.6 76 40 76C54.4 76 66 64.4 66 50C66 36 40 6 40 6Z"
                fill="url(#dropGrad)"
                opacity="0.9"
              />
              <ellipse cx="30" cy="44" rx="6" ry="8" fill="white" opacity="0.25" />
            </svg>
          </div>
        </div>

        {/* 404 number with animated gradient */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1
            className="text-7xl md:text-9xl font-extrabold gradient-text-animated leading-none select-none"
            aria-label="404"
          >
            404
          </h1>
        </div>

        {/* Heading */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-text dark:text-dark-text-light mt-4">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-medium-text dark:text-dark-text-muted mt-4 leading-relaxed max-w-md mx-auto">
            The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons */}
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/"
              className="focus-ring-animated inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 btn-shimmer overflow-hidden"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="focus-ring-animated inline-flex items-center gap-2 border-2 border-primary text-primary dark:text-primary-light px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="border-t border-light-gray dark:border-dark-border my-8" />
        </div>

        {/* Popular Pages */}
        <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <p className="text-xs font-bold uppercase tracking-wider text-medium-text dark:text-dark-text-muted mb-4">
            Popular Pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {popularPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.name}
                  href={page.href}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-light-green/30 dark:bg-white/[0.04] hover:bg-primary/10 dark:hover:bg-primary/15 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-medium text-dark-text dark:text-dark-text-light">{page.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

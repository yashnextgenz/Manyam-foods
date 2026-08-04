'use client';
import Image from "next/image";


import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Droplets, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const id = requestAnimationFrame(closeMenu);
    return () => cancelAnimationFrame(id);
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-primary/5 dark:shadow-black/20'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-light-gray/50 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 group"
            aria-label="Manyam Foods - Home"
          >
          
            <div className="flex items-center gap-2">
  <Image
    src="/images/image.png" // Place your logo in the public folder
    alt="Manyam Foods Logo"
    width={42}
    height={42}
    className="h-10 w-10 sm:h-12 sm:w-12 object-contain flex-shrink-0"
  />

  <div className="flex min-w-0 flex-col">
    <span className="truncate text-base sm:text-lg font-bold text-[text-[#123B6D] leading-tight">
      Manyam Foods
    </span>
    <span className="truncate text-[9px] sm:text-[10px] text-medium-text dark:text-dark-text-muted tracking-wider uppercase leading-tight">
      Private Limited
    </span>
  </div>
</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`relative py-2 px-3 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-[#123B6D]'
                        : 'text-dark-text dark:text-dark-text-light group-hover:text-[#123B6D]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#123B6D] to-[#123B6D] rounded-full origin-left scale-x-100 transition-transform duration-300" />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#123B6D] to-[#123B6D] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
       
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#123B6D] to-[#123B6D] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 cta-pulse btn-shimmer overflow-hidden"
            >
              Request New Enquiry
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10 transition-all duration-300`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className={`w-6 h-5 flex flex-col justify-center gap-[5px] ${isOpen ? 'hamburger-open' : ''}`}>
                <span className={`hamburger-line block w-full h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'bg-primary' : 'bg-dark-text dark:bg-dark-text-light'}`} />
                <span className={`hamburger-line block w-full h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'bg-primary' : 'bg-dark-text dark:bg-dark-text-light'}`} />
                <span className={`hamburger-line block w-full h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'bg-primary' : 'bg-dark-text dark:bg-dark-text-light'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 ${
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 pt-8 bg-white">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 inline-flex items-center justify-between ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-dark-text dark:text-dark-text-light hover:bg-light-green dark:hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-50 ml-auto" />
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-light-gray/20 dark:border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 btn-shimmer overflow-hidden"
              >
                Request New Enquiry
              </Link>
            </div>
            <div className="mt-8 p-4 bg-light-green/30 dark:bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/10 dark:border-primary/20">
              <p className="text-sm font-semibold text-primary">Contact Us</p>
              <p className="text-sm text-medium-text dark:text-dark-text-muted mt-1">+91 9441116552</p>
              <p className="text-sm text-medium-text dark:text-dark-text-muted">manyamfoods45@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
    </nav>
  );
}

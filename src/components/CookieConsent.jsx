'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function CookieConsent() {
  const [status, setStatus] = useState('hidden');

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('manyam-cookie-consent');
      if (consent) {
        setStatus('dismissed');
      } else {
        setStatus('visible');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('manyam-cookie-consent', 'accepted');
    setStatus('dismissed');
  };

  const handleDecline = () => {
    localStorage.setItem('manyam-cookie-consent', 'declined');
    setStatus('dismissed');
  };

  if (status === 'dismissed') return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 ${
        status === 'visible' ? 'consent-enter' : ''
      }`}
    >
      <div className="mx-auto max-w-4xl glass-card bg-primary/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-primary/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/10">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield className="w-5 h-5 text-white/80" />
          </div>
          <div className="text-white text-sm leading-relaxed">
            <p>
              We use cookies to enhance your experience. By continuing to visit
              this site you agree to our use of cookies.{' '}
              <Link
                href="/contact"
                className="underline underline-offset-2 hover:text-primary-light transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-3 shrink-0 sm:self-center">
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 bg-gradient-to-r from-white to-white/90 text-primary font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-white/20 transition-all duration-300 btn-shimmer overflow-hidden"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

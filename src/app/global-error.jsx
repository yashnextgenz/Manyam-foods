'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Droplets } from 'lucide-react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="font-montserrat text-dark-text dark:text-dark-text-light bg-white dark:bg-dark-bg antialiased min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Droplets className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-dark-text dark:text-dark-text-light mb-4">
            Something went wrong
          </h1>
          <p className="text-medium-text dark:text-dark-text-muted mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error occurred. Please try again or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

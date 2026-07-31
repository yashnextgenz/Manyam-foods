import Button from './Button';
import { ArrowRight } from 'lucide-react';

export default function CTA({ title, subtitle, ctaText, ctaHref, variant = 'green' }) {
  const isGreen = variant === 'green';

  return (
    <section
      className={`relative py-16 md:py-20 px-4 overflow-hidden ${
        isGreen ? 'bg-primary' : 'bg-light-green'
      }`}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: isGreen
            ? 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(74,124,89,0.3) 25%, rgba(45,143,111,0.2) 50%, rgba(74,124,89,0.3) 75%, rgba(255,255,255,0.02) 100%)'
            : 'linear-gradient(135deg, rgba(74,124,89,0.03) 0%, rgba(74,124,89,0.1) 25%, rgba(45,143,111,0.08) 50%, rgba(74,124,89,0.1) 75%, rgba(74,124,89,0.03) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 8s ease infinite',
        }}
      />

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/5 rounded-full" style={{ animation: 'gentle-bounce 5s ease-in-out infinite' }} />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full" style={{ animation: 'gentle-bounce 6s ease-in-out infinite 1s' }} />
        <div className="absolute top-10 left-10 w-3 h-3 bg-white/10 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-white/8 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 1s' }} />
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-white/15 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-white/5 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 3s' }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-3 bg-white/10 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-2 bg-white/8 rounded-full" style={{ animation: 'float 10s ease-in-out infinite 1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.02] rounded-full" style={{ animation: 'gentle-bounce 7s ease-in-out infinite 2s' }} />
      </div>

      {/* Water shimmer layer */}
      <div className="absolute inset-0 water-shimmer pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="glass-card-dark rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Inner decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/10 rounded-tl-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/10 rounded-br-3xl" aria-hidden="true" />

          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight relative z-10 ${
              isGreen ? 'text-white' : 'text-dark-text'
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed relative z-10 ${
                isGreen ? 'text-white/80' : 'text-medium-text'
              }`}
            >
              {subtitle}
            </p>
          )}
          {/* Decorative dots below subtitle */}
          {subtitle && (
            <div className="flex items-center justify-center gap-1.5 mt-5" aria-hidden="true">
              <div className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-white/60' : 'bg-primary/50'}`} style={{ animation: 'subtle-pulse 2s ease-in-out infinite 0s' }} />
              <div className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-white/40' : 'bg-primary/35'}`} style={{ animation: 'subtle-pulse 2s ease-in-out infinite 0.3s' }} />
              <div className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-white/25' : 'bg-primary/20'}`} style={{ animation: 'subtle-pulse 2s ease-in-out infinite 0.6s' }} />
            </div>
          )}
          {ctaText && ctaHref && (
            <div className="mt-8 relative z-10">
              <div style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Button
                  variant={isGreen ? 'white' : 'primary'}
                  size="lg"
                  href={ctaHref}
                  className="group/btn"
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

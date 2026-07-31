import Image from 'next/image';
import Button from './Button';
import WaterDropParticles from './WaterDropParticles';
import { ChevronDown } from 'lucide-react';

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  overlay = true,
  height = 'full',
}) {
  const heightClass =
    height === 'full' ? 'min-h-[90vh]' : 'min-h-[70vh]';

  return (
    <section className={`relative w-full ${heightClass} flex items-center overflow-hidden`}>
     

      {/* Background */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2563EB]t" />
          {/* Animated gradient overlay using gradient-shift */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.12) 75%, rgba(255,255,255,0.05) 100%)',
              backgroundSize: '400% 400%',
              animation: 'gradient-shift 8s ease infinite',
            }}
          />
          {/* Animated water-like pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-white/20 rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
            <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-white/15 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 1s' }} />
            <div className="absolute bottom-[10%] left-[30%] w-48 h-48 bg-white/20 rounded-full blur-3xl" style={{ animation: 'float 7s ease-in-out infinite 2s' }} />
          </div>
          {/* Parallax floating elements at different speeds */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[15%] left-[8%] w-2 h-3 bg-white/25 rounded-full" style={{ animation: 'float 12s ease-in-out infinite' }} />
            <div className="absolute top-[25%] right-[12%] w-3 h-4 bg-white/20 rounded-full" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
            <div className="absolute top-[55%] left-[18%] w-1.5 h-2 bg-white/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 1s' }} />
            <div className="absolute top-[70%] right-[25%] w-2 h-2.5 bg-white/20 rounded-full" style={{ animation: 'float 14s ease-in-out infinite 3s' }} />
            <div className="absolute top-[35%] left-[65%] w-1.5 h-2 bg-white/15 rounded-full" style={{ animation: 'float 11s ease-in-out infinite 4s' }} />
            <div className="absolute top-[80%] left-[45%] w-2 h-3 bg-white/20 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 5s' }} />
            <div className="absolute top-[10%] left-[50%] w-2 h-2 bg-white/18 rounded-full" style={{ animation: 'float 13s ease-in-out infinite 1.5s' }} />
            <div className="absolute top-[45%] right-[40%] w-1 h-1.5 bg-white/25 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 3.5s' }} />
          </div>
          {/* Decorative water ripple circles */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-[20%] left-[15%] w-24 h-24 rounded-full border border-white/10"
              style={{ animation: 'water-ripple 4s ease-out infinite' }}
            />
            <div
              className="absolute top-[60%] right-[20%] w-20 h-20 rounded-full border border-white/10"
              style={{ animation: 'water-ripple 5s ease-out infinite 1.5s' }}
            />
            <div
              className="absolute bottom-[25%] left-[50%] w-16 h-16 rounded-full border border-white/10"
              style={{ animation: 'water-ripple 4.5s ease-out infinite 3s' }}
            />
            <div
              className="absolute top-[35%] right-[40%] w-28 h-28 rounded-full border border-white/[0.07]"
              style={{ animation: 'water-ripple 6s ease-out infinite 2s' }}
            />
            <div
              className="absolute bottom-[40%] left-[70%] w-12 h-12 rounded-full border border-white/[0.08]"
              style={{ animation: 'water-ripple 3.5s ease-out infinite 4s' }}
            />
          </div>
        </div>
      )}

      {/* Enhanced Overlay with gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30" />
      )}


      {/* Decorative Elements with parallax depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl" style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`max-w-3xl ${height === 'full' ? 'py-20' : 'py-12'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wide leading-tight text-white animate-fade-in text-shadow-lg">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">{title}</span>
          </h1>
          {subtitle && (
            <p className="text-white/90 text-base md:text-lg lg:text-xl mt-4 md:mt-6 max-w-2xl leading-relaxed animate-slide-up text-shadow-sm">
              {subtitle}
            </p>
          )}
          {/* Animated underline below subtitle */}
          {subtitle && (
            <div className="mt-3 h-[2px] bg-gradient-to-r from-white/60 via-white/30 to-transparent rounded-full" style={{ animation: 'underline-grow 0.8s ease-out 0.6s forwards', width: 0 }} aria-hidden="true" />
          )}
          {ctaText && ctaHref && (
            <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="white" size="lg" href={ctaHref}>
                {ctaText}
              </Button>
              
            </div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/50" />
          </div>
        </div>
      )}
    </section>
  );
}

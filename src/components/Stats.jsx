'use client';

import AnimatedCounter from './AnimatedCounter';
import WaterDropParticles from './WaterDropParticles';

export default function Stats({ stats }) {
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary to-primary-dark py-14 md:py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(45,143,111,0.15) 25%, rgba(255,255,255,0.02) 50%, rgba(74,124,89,0.15) 75%, rgba(255,255,255,0.02) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 10s ease infinite',
        }}
      />

      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" className="w-full h-[40px] wave-animated" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,0 L0,0 Z" fill="white" fillOpacity="0.08" />
        </svg>
      </div>

      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full" />
      </div>
      {/* Water Drop Particles */}
      <div className="absolute inset-0 opacity-25">
        <WaterDropParticles count={10} color="white" />
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" className="w-full h-[40px] wave-animated" style={{ animationDelay: '1s' }} preserveAspectRatio="none">
          <path d="M0,0 C480,40 960,0 1440,40 L1440,40 L0,40 Z" fill="white" fillOpacity="0.08" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-card-dark rounded-xl p-4 md:p-6 transition-all duration-500 group-hover:scale-105">
                <p className="text-3xl md:text-5xl font-extrabold text-white tabular-nums" style={{ animation: 'stat-glow 3s ease-in-out infinite', animationDelay: `${index * 0.5}s` }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} prefix={stat.prefix || ''} />
                </p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-3 mb-2 group-hover:w-14 group-hover:via-white/70 transition-all duration-500" />
                <p className="text-sm text-white/75 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
              {/* Decorative water line between stats (visible on lg) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

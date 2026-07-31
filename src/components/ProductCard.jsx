'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Droplets, GlassWater, CircleDot, Sparkles, Eye } from 'lucide-react';

const productIcons = {
  'Packaged Water': Droplets,
  'Beverages': GlassWater,
  'New Products': Sparkles,
};

const productColors = {
  'Packaged Water': 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50',
  'Beverages': 'from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50',
  'New Products': 'from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50',
};

const badgeGradients = {
  'Packaged Water': 'from-blue-500 to-cyan-500',
  'Beverages': 'from-orange-500 to-amber-500',
  'New Products': 'from-purple-500 to-pink-500',
};

export default function ProductCard({ name, image, category, description, onClick }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const Icon = productIcons[category] || CircleDot;
  const colorClass = productColors[category] || 'from-light-green to-green-50 dark:from-primary/10 dark:to-primary/5';
  const badgeGradient = badgeGradients[category] || 'from-primary to-primary-dark';

  const handleClick = () => {
    if (onClick) onClick({ name, category, description });
  };

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`View details for ${name}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-light-gray/30 dark:border-white/10 transition-all duration-500 hover:-translate-y-3 group cursor-pointer ripple relative"
      style={{
        transform: `perspective(800px) rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg)`,
        transition: 'transform 0.3s ease-out, box-shadow 0.5s ease, border-color 0.5s ease',
      }}
    >
      {/* Image Container */}
      <div className={`aspect-[4/3] bg-gradient-to-br ${colorClass} flex items-center justify-center relative overflow-hidden`}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="relative">
            {/* Pulse ring effect */}
            <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
            <Icon className="w-14 h-14 text-primary/40 dark:text-primary/30 group-hover:text-primary/60 dark:group-hover:text-primary/50 transition-colors duration-300 relative z-10" />
          </div>
        )}
        {/* Category badge with gradient */}
     
    
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-dark-text dark:text-dark-text-light group-hover:text-primary transition-colors duration-300">{name}</h3>
        {description && (
          <p className="text-sm hidden sm:block text-medium-text dark:text-dark-text-muted mt-2 leading-relaxed line-clamp-3">{description}</p>
        )}
        {/* Bottom progress bar */}
        <div className="h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
}

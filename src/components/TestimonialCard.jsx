import { Star } from 'lucide-react';

export default function TestimonialCard({ name, role, quote, avatar, rating = 5 }) {
  return (
    <div className="glass-card testimonial-gradient-border rounded-2xl shadow-sm hover:shadow-xl p-6 md:p-8 relative border border-light-gray/20 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
      {/* Stars with gradient */}
      <div className="flex gap-1 mb-4 group-hover/stars:scale-105 transition-transform duration-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 transition-transform duration-200 ${
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'text-gray-200 dark:text-gray-700 fill-gray-200 dark:fill-gray-700'
            }`}
            style={i < rating ? {
              filter: 'drop-shadow(0 0 3px rgba(245, 158, 11, 0.3))',
            } : undefined}
          />
        ))}
      </div>

      {/* Decorative Quote Mark */}
      <span className="absolute top-8 left-5 text-8xl font-serif text-primary/[0.06] dark:text-primary/[0.08] leading-none select-none pointer-events-none group-hover:text-primary/[0.1] dark:group-hover:text-primary/[0.12] transition-colors duration-500" aria-hidden="true">
        &ldquo;
      </span>

      {/* Quote Text */}
      <p className="text-medium-text dark:text-dark-text-muted leading-relaxed mt-2 text-sm md:text-base relative z-10 group-hover:text-dark-text dark:group-hover:text-dark-text-light transition-colors duration-300">{quote}</p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-light-gray/30 dark:border-white/10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0 overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-105">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-white font-bold text-lg">
              {name ? name.charAt(0).toUpperCase() : '?'}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-dark-text dark:text-dark-text-light text-sm group-hover:text-primary transition-colors duration-300">{name}</p>
          {role && <p className="text-xs text-primary font-medium mt-0.5">{role}</p>}
        </div>
      </div>
    </div>
  );
}

import { CheckCircle } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, features = [] }) {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 border border-light-gray/20 dark:border-white/10 group tilt-hint relative overflow-hidden">
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-light-green to-green-100 dark:from-primary/15 dark:to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300 group-hover:scale-110 icon-breathe">
          {Icon && <Icon className="w-6 h-6 text-primary" />}
        </div>
        <h3 className="text-xl font-bold mt-5 text-dark-text dark:text-dark-text-light group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-medium-text dark:text-dark-text-muted mt-2 leading-relaxed text-sm">{description}</p>
        {features.length > 0 && (
          <ul className="mt-4 space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-dark-text dark:text-dark-text-light">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
'use client';

import { MessageSquare, Users, TrendingUp, Mail } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const defaultStats = {
  totalSubmissions: 0,
  weekSubmissions: 0,
  totalSubscribers: 0,
  weekSubscribers: 0,
};

const statCards = [
  {
    key: 'totalSubmissions',
    label: 'Total Submissions',
    icon: MessageSquare,
    color: 'from-primary to-primary-dark',
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary dark:text-primary-light',
    trend: '+12%',
  },
  {
    key: 'weekSubmissions',
    label: "This Week's Submissions",
    icon: TrendingUp,
    color: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-500/10 dark:bg-amber-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    trend: '+8%',
  },
  {
    key: 'totalSubscribers',
    label: 'Total Subscribers',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    trend: '+23%',
  },
  {
    key: 'weekSubscribers',
    label: "This Week's Subscribers",
    icon: Mail,
    color: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-500/10 dark:bg-rose-500/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
    trend: '+5%',
  },
];

export default function DashboardStats({ stats = defaultStats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {statCards.map((card) => {
        const Icon = card.icon;
        const value = stats[card.key] || 0;
        return (
          <div
            key={card.key}
            className="glass-card rounded-2xl p-5 hover-lift group shimmer-sweep transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-xs font-medium text-medium-text dark:text-dark-text-muted uppercase tracking-wider">
                  {card.label}
                </p>
                <p className="text-3xl font-bold text-dark-text dark:text-dark-text-light tabular-nums">
                  <AnimatedCounter value={String(value)} />
                </p>
                {card.trend && (
                  <span className="text-xs text-emerald-500 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    {card.trend}
                  </span>
                )}
              </div>
              <div className={`w-11 h-11 ${card.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
            </div>
            {/* Bottom accent bar */}
            <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </div>
        );
      })}
    </div>
  );
}

export function DashboardStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="glass-card rounded-2xl p-5 animate-pulse"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-3 flex-1">
              <div className="h-3 w-28 bg-light-gray/60 dark:bg-white/10 rounded-full" />
              <div className="h-8 w-20 bg-light-gray/60 dark:bg-white/10 rounded" />
            </div>
            <div className="w-11 h-11 bg-light-gray/50 dark:bg-white/8 rounded-xl" />
          </div>
          <div className="mt-4 h-1 w-16 bg-light-gray/40 dark:bg-white/6 rounded-full" />
        </div>
      ))}
    </div>
  );
}

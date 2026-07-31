import Link from 'next/link';

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 btn-shimmer overflow-hidden',
  secondary:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5',
  outline:
    'border border-light-gray dark:border-white/20 text-dark-text dark:text-dark-text-light hover:border-primary hover:text-primary hover:shadow-sm hover:-translate-y-0.5',
  white:
    'bg-white text-primary hover:bg-light-green dark:bg-gray-100 dark:text-primary dark:hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 active:scale-[0.97]';
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
    >
      {children}
    </button>
  );
}

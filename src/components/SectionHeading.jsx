export default function SectionHeading({ title, subtitle, centered = true, light = false, tag }) {
  return (
    <div className={`${centered ? 'text-center mx-auto' : 'text-left'} mb-12 md:mb-16`}>
      {tag && (
        <span className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/20 dark:border-primary/30 mb-4">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true" />
          {tag}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider leading-tight ${
          light ? 'text-white' : 'text-dark-text dark:text-dark-text-light'
        }`
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm md:text-base mt-3 max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-medium-text dark:text-dark-text-muted'}`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-10 bg-gradient-to-r from-primary to-primary-light rounded-full" aria-hidden="true" />
        <div className="h-1 w-5 bg-gradient-to-r from-primary/50 to-transparent rounded-full" aria-hidden="true" />
        <div className="h-1 w-2.5 bg-primary/20 rounded-full" aria-hidden="true" />
      </div>
    </div>
  );
}

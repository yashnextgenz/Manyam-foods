export default function FeatureCard({ title, description, index = 0 }) {
  return (
    <div
      className="glass-card h-full flex flex-col rounded-2xl p-6 md:p-8 text-center group transition-all duration-500 hover:-translate-y-2 shimmer-sweep relative border-l-4 border-l-transparent hover:border-l-primary overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Top decorative gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Left gradient border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-teal-500 to-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Background glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

      <h3 className="text-lg font-bold mt-5 text-dark-text dark:text-dark-text-light group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-medium-text dark:text-dark-text-muted group-hover:text-dark-text dark:group-hover:text-dark-text-light transition-colors duration-500 flex-grow">
        {description}
      </p>
    </div>
  );
}
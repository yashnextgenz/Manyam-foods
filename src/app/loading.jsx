export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Navbar placeholder */}
      <div className="h-20 bg-light-gray/30 dark:bg-white/5 animate-pulse" />

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-10 bg-light-gray/30 dark:bg-white/8 rounded w-1/3 mb-8" />
          <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-2/3 mb-4" />
          <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-1/2 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-light-gray/30 dark:border-white/10 p-6">
                <div className="h-40 bg-light-gray/30 dark:bg-white/8 rounded-lg mb-4" />
                <div className="h-5 bg-light-gray/30 dark:bg-white/8 rounded w-3/4 mb-3" />
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-full mb-2" />
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero skeleton */}
      <div className="relative h-[50vh] bg-gradient-to-br from-primary/20 via-primary/10 to-light-green dark:to-primary/20">
        <div className="absolute inset-0 bg-dark-text/5 dark:bg-white/5 animate-pulse" />\n        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="animate-pulse">
            <div className="h-4 w-32 bg-white/40 rounded-full mb-4" />
            <div className="h-10 w-80 bg-white/30 rounded-xl mb-3" />
            <div className="h-5 w-96 bg-white/20 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          {/* Search bar skeleton */}
          <div className="max-w-md mx-auto mb-10">
            <div className="h-12 bg-light-gray/30 dark:bg-white/8 rounded-xl" />
          </div>

          {/* Filter tabs skeleton */}
          <div className="flex gap-3 justify-center mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-28 bg-light-gray/30 dark:bg-white/8 rounded-full" />
            ))}
          </div>

          {/* Product grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-light-gray/40 to-light-gray/20 dark:from-white/8 dark:to-white/5" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-5 w-16 bg-primary/15 dark:bg-primary/20 rounded-full" />
                  </div>
                  <div className="h-5 bg-light-gray/30 dark:bg-white/8 rounded-lg w-3/4 mb-3" />
                  <div className="h-3.5 bg-light-gray/20 dark:bg-white/5 rounded w-full mb-2" />
                  <div className="h-3.5 bg-light-gray/20 dark:bg-white/5 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

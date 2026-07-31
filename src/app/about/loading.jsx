export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero skeleton */}
      <div className="h-[50vh] bg-light-gray/30 dark:bg-white/5 animate-pulse" />

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          {/* Section heading */}
          <div className="h-8 bg-light-gray/30 dark:bg-white/8 rounded w-1/4 mx-auto mb-4" />
          <div className="h-1 bg-light-gray/30 dark:bg-white/8 rounded w-16 mx-auto mb-12" />

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-full mb-4" />
              <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-5/6 mb-4" />
              <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-4/6 mb-8" />
              <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-full mb-4" />
              <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-3/4" />
            </div>
            <div>
              <div className="h-64 bg-light-gray/30 dark:bg-white/8 rounded-2xl mb-4" />
              <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-2/3" />
            </div>
          </div>

          {/* More content blocks */}
          <div className="mt-16 space-y-6">
            <div className="h-8 bg-light-gray/30 dark:bg-white/8 rounded w-1/3 mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-2xl border border-light-gray/30 dark:border-white/10">
                  <div className="h-12 w-12 bg-light-gray/30 dark:bg-white/8 rounded-full mx-auto mb-4" />
                  <div className="h-5 bg-light-gray/30 dark:bg-white/8 rounded w-3/4 mx-auto mb-3" />
                  <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-full mb-2" />
                  <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

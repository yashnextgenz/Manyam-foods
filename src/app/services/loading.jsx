export default function ServicesLoading() {
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

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-light-gray/30 dark:border-white/10 p-8 text-center">
                <div className="h-16 w-16 bg-light-gray/30 dark:bg-white/8 rounded-full mx-auto mb-6" />
                <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-3/4 mx-auto mb-4" />
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-full mb-3" />
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-5/6 mb-3" />
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-2/3" />
              </div>
            ))}
          </div>

          {/* Process section skeleton */}
          <div className="mt-20">
            <div className="h-8 bg-light-gray/30 dark:bg-white/8 rounded w-1/3 mx-auto mb-12" />
            <div className="flex justify-between gap-4 max-w-3xl mx-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-light-gray/30 dark:bg-white/8 rounded-full mb-3" />
                  <div className="h-3 bg-light-gray/30 dark:bg-white/8 rounded w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

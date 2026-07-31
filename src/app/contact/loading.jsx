export default function ContactLoading() {
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

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-light-gray/30 dark:border-white/10 p-6 text-center">
                <div className="h-12 w-12 bg-light-gray/30 dark:bg-white/8 rounded-full mx-auto mb-4" />
                <div className="h-5 bg-light-gray/30 dark:bg-white/8 rounded w-1/2 mx-auto mb-2" />
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-3/4 mx-auto" />
              </div>
            ))}
          </div>

          {/* Form skeleton */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-light-gray/30 dark:border-white/10 p-8">
            <div className="h-6 bg-light-gray/30 dark:bg-white/8 rounded w-1/3 mb-8" />
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-16 mb-2" />
                  <div className="h-12 bg-light-gray/30 dark:bg-white/8 rounded-lg" />
                </div>
                <div>
                  <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-12 mb-2" />
                  <div className="h-12 bg-light-gray/30 dark:bg-white/8 rounded-lg" />
                </div>
              </div>
              <div>
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-10 mb-2" />
                <div className="h-12 bg-light-gray/30 dark:bg-white/8 rounded-lg" />
              </div>
              <div>
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-20 mb-2" />
                <div className="h-12 bg-light-gray/30 dark:bg-white/8 rounded-lg" />
              </div>
              <div>
                <div className="h-4 bg-light-gray/30 dark:bg-white/8 rounded w-24 mb-2" />
                <div className="h-32 bg-light-gray/30 dark:bg-white/8 rounded-lg" />
              </div>
              <div className="h-12 bg-light-gray/30 dark:bg-white/8 rounded-lg w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

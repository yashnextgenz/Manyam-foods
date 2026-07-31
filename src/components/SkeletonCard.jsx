export default function SkeletonCard({ className = '' }) {
  return (
    <div className={`animate-pulse rounded-2xl border border-light-gray/30 bg-white overflow-hidden ${className}`}>
      <div className="aspect-[4/3] bg-light-gray/60" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-24 bg-light-gray/60 rounded-full" />
        <div className="h-5 w-36 bg-light-gray/60 rounded" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-light-gray/40 rounded" />
          <div className="h-3 w-3/4 bg-light-gray/40 rounded" />
        </div>
      </div>
    </div>
  );
}

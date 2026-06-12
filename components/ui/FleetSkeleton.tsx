export function FleetSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="glass-card animate-pulse overflow-hidden rounded-xl"
        >
          <div className="h-[60%] min-h-[220px] bg-white/5" />
          <div className="space-y-3 p-5">
            <div className="h-6 w-2/3 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-4/5 rounded bg-white/10" />
            <div className="h-11 w-full rounded-lg bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

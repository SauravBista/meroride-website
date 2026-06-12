export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-green-light border-t-transparent" />
        <p className="text-sm text-white/70">Loading MeroRide…</p>
      </div>
    </div>
  );
}

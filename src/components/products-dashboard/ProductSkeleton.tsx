'use client';

export default function ProductSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800" />
      <div className="space-y-3 p-4">
        <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-3 w-full rounded bg-slate-100 dark:bg-slate-800/60" />
        <div className="flex justify-between pt-2">
          <div className="h-5 w-16 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-9 w-24 rounded-lg bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}

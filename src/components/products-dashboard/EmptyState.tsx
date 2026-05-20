'use client';

import { PackageSearch, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  onReset: () => void;
}

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="mb-4 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
        <PackageSearch size={40} className="text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No products found</h3>
      <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
        Try adjusting your search or filters. We search across names, categories, tags, and descriptions on all pages.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
      >
        <RotateCcw size={16} />
        Reset all filters
      </button>
    </motion.div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { getCatalogBrands, getCatalogCategories } from '@/data/catalog';
import type { ProductFilters as Filters } from '@/types/catalog';

const CATEGORY_LABELS: Record<string, string> = {
  starter: 'Starter Packs',
  daily: 'Daily Use',
  heavy: 'Heavy Flow',
  teen: 'Teen',
  value: 'Value Packs',
};

interface FilterDrawerProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  filters: Filters;
  priceBounds: { min: number; max: number };
  onChange: (patch: Partial<Filters>) => void;
  onReset: () => void;
}

export function FilterTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      <SlidersHorizontal size={16} />
      Filters
    </button>
  );
}

export default function FilterDrawer({
  open, onClose, filters, priceBounds, onChange, onReset,
}: Omit<FilterDrawerProps, 'onOpen'>) {
  const brands = getCatalogBrands();
  const categories = getCatalogCategories();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-label="Close filters"
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed inset-y-0 left-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-5 shadow-2xl lg:hidden dark:bg-slate-950"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters</h2>
              <button type="button" onClick={onClose} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="mb-2 text-xs font-bold uppercase text-slate-500">Category</h3>
                {categories.map(cat => (
                  <label key={cat} className="mb-2 flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat)}
                      onChange={() => {
                        const next = filters.categories.includes(cat)
                          ? filters.categories.filter(c => c !== cat)
                          : [...filters.categories, cat];
                        onChange({ categories: next });
                      }}
                    />
                    {CATEGORY_LABELS[cat]}
                  </label>
                ))}
              </section>

              <section>
                <h3 className="mb-2 text-xs font-bold uppercase text-slate-500">Brand</h3>
                {brands.map(brand => (
                  <label key={brand} className="mb-2 flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => {
                        const next = filters.brands.includes(brand)
                          ? filters.brands.filter(b => b !== brand)
                          : [...filters.brands, brand];
                        onChange({ brands: next });
                      }}
                    />
                    {brand}
                  </label>
                ))}
              </section>

              <section>
                <h3 className="mb-2 text-xs font-bold uppercase text-slate-500">
                  Price ₹{filters.priceMin} – ₹{filters.priceMax}
                </h3>
                <input
                  type="range"
                  min={priceBounds.min}
                  max={priceBounds.max}
                  value={filters.priceMax}
                  onChange={e => onChange({ priceMax: Number(e.target.value) })}
                  className="w-full accent-emerald-600"
                />
              </section>

              <section className="space-y-2">
                {[
                  { key: 'inStockOnly' as const, label: 'In stock' },
                  { key: 'featuredOnly' as const, label: 'Featured' },
                  { key: 'trendingOnly' as const, label: 'Trending' },
                  { key: 'newestOnly' as const, label: 'New arrivals' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters[key]}
                      onChange={e => onChange({ [key]: e.target.checked })}
                    />
                    {label}
                  </label>
                ))}
              </section>

              <select
                value={filters.sort}
                onChange={e => onChange({ sort: e.target.value as Filters['sort'] })}
                className="w-full rounded-xl border px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <option value="popular">Popular</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">High to Low</option>
              </select>

              <button
                type="button"
                onClick={() => { onReset(); onClose(); }}
                className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white"
              >
                Apply & reset
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

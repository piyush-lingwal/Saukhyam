'use client';

import { getCatalogBrands, getCatalogCategories } from '@/data/catalog';
import type { ProductFilters as Filters } from '@/types/catalog';

const CATEGORY_LABELS: Record<string, string> = {
  starter: 'Starter Packs',
  daily: 'Daily Use',
  heavy: 'Heavy Flow',
  teen: 'Teen',
  value: 'Value Packs',
};

interface ProductFiltersProps {
  filters: Filters;
  priceBounds: { min: number; max: number };
  onChange: (patch: Partial<Filters>) => void;
  onReset: () => void;
}

export default function ProductFilters({ filters, priceBounds, onChange, onReset }: ProductFiltersProps) {
  const brands = getCatalogBrands();
  const categories = getCatalogCategories();

  const toggleCategory = (cat: typeof categories[number]) => {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter(c => c !== cat)
      : [...filters.categories, cat];
    onChange({ categories: next });
  };

  const toggleBrand = (brand: string) => {
    const next = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onChange({ brands: next });
  };

  return (
    <aside className="hidden w-72 shrink-0 space-y-6 lg:block">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">Filters</h2>
        <button type="button" onClick={onReset} className="text-xs font-medium text-emerald-600 hover:underline">
          Reset
        </button>
      </div>

      <FilterSection title="Category">
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              {CATEGORY_LABELS[cat] ?? cat}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Brand">
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              {brand}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title={`Price: ₹${filters.priceMin} – ₹${filters.priceMax}`}>
        <div className="space-y-3">
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            value={filters.priceMin}
            onChange={e => onChange({ priceMin: Math.min(Number(e.target.value), filters.priceMax - 1) })}
            className="w-full accent-emerald-600"
          />
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            value={filters.priceMax}
            onChange={e => onChange({ priceMax: Math.max(Number(e.target.value), filters.priceMin + 1) })}
            className="w-full accent-emerald-600"
          />
        </div>
      </FilterSection>

      <FilterSection title="Rating">
        <div className="space-y-2">
          {[4, 3, 2, 0].map(r => (
            <label key={r} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === r}
                onChange={() => onChange({ minRating: r })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
              {r === 0 ? 'All ratings' : `${r}+ stars`}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Quick filters">
        <div className="space-y-2">
          {[
            { key: 'inStockOnly' as const, label: 'In stock only' },
            { key: 'featuredOnly' as const, label: 'Featured products' },
            { key: 'trendingOnly' as const, label: 'Trending products' },
            { key: 'newestOnly' as const, label: 'Newest arrivals' },
          ].map(({ key, label }) => (
            <label key={key} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <input
                type="checkbox"
                checked={filters[key]}
                onChange={e => onChange({ [key]: e.target.checked })}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              {label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Sort by">
        <select
          value={filters.sort}
          onChange={e => onChange({ sort: e.target.value as Filters['sort'] })}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <option value="popular">Popular</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </FilterSection>
    </aside>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">{title}</h3>
      {children}
    </div>
  );
}
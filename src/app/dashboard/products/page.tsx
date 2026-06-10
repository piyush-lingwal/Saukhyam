'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardShell from '@/components/dashboard/DashboardShell';
import AnalyticsWidgets from '@/components/dashboard/AnalyticsWidgets';
import ProductSearch from '@/components/products-dashboard/ProductSearch';
import ProductFilters from '@/components/products-dashboard/ProductFilters';
import FilterDrawer, { FilterTrigger } from '@/components/products-dashboard/FilterDrawer';
import ProductGrid from '@/components/products-dashboard/ProductGrid';
import Pagination from '@/components/products-dashboard/Pagination';
import { useProductCatalog } from '@/hooks/useProductCatalog';

export default function DashboardProductsPage() {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const {
    filters,
    updateFilters,
    resetFilters,
    paginatedProducts,
    currentPage,
    totalPages,
    totalCount,
    isLoading,
    goToPage,
    priceBounds,
  } = useProductCatalog();

  return (
    <DashboardShell
      title="Products"
      subtitle="Browse, search, and filter your entire catalog"
    >
      <AnalyticsWidgets />

      <div className="mt-8 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ProductSearch
            value={filters.search}
            onChange={search => updateFilters({ search })}
          />
          <div className="flex items-center gap-3">
            <FilterTrigger onOpen={() => setFilterDrawerOpen(true)} />
            <select
              value={filters.sort}
              onChange={e => updateFilters({ sort: e.target.value as typeof filters.sort })}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium dark:border-slate-700 dark:bg-slate-900 dark:text-white lg:hidden"
              aria-label="Sort products"
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">High to Low</option>
            </select>
          </div>
        </div>

        <FilterDrawer
          open={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(false)}
          filters={filters}
          priceBounds={priceBounds}
          onChange={updateFilters}
          onReset={resetFilters}
        />

        <div id="products-grid-anchor" className="flex gap-8">
          <ProductFilters
            filters={filters}
            priceBounds={priceBounds}
            onChange={updateFilters}
            onReset={resetFilters}
          />

          <div className="min-w-0 flex-1 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{totalCount}</span> products
                {filters.search && (
                  <span> matching &quot;{filters.search}&quot;</span>
                )}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage + filters.sort + totalCount}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ProductGrid
                  products={paginatedProducts}
                  isLoading={isLoading}
                  onReset={resetFilters}
                />
              </motion.div>
            </AnimatePresence>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalCount={totalCount}
              onPageChange={goToPage}
            />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

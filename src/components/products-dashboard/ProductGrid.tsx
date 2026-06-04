'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import EmptyState from './EmptyState';
import QuickViewModal from './QuickViewModal';
import type { CatalogProduct } from '@/types/catalog';

interface ProductGridProps {
  products: CatalogProduct[];
  isLoading: boolean;
  onReset: () => void;
}

export default function ProductGrid({ products, isLoading, onReset }: ProductGridProps) {
  const [quickView, setQuickView] = useState<CatalogProduct | null>(null);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <EmptyState onReset={onReset} />;
  }

  return (
    <>
      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickView}
            />
          ))}
        </div>
      </AnimatePresence>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}

'use client';

import { useMemo, useState, useCallback, useEffect } from 'react';
import { catalogProducts, getPriceBounds } from '@/data/catalog';
import type { CatalogProduct, ProductFilters, SortOption } from '@/types/catalog';
import { DEFAULT_FILTERS, PRODUCTS_PER_PAGE } from '@/types/catalog';
import { useDebounce } from '@/hooks/useDebounce';

const bounds = getPriceBounds();

function matchesSearch(product: CatalogProduct, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q) ||
    product.brand.toLowerCase().includes(q) ||
    product.tags.some(t => t.toLowerCase().includes(q)) ||
    product.features.some(f => f.toLowerCase().includes(q))
  );
}

function sortProducts(items: CatalogProduct[], sort: SortOption): CatalogProduct[] {
  const copy = [...items];
  switch (sort) {
    case 'newest':
      return copy.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case 'popular':
      return copy.sort((a, b) => b.reviewCount * b.rating - a.reviewCount * a.rating);
    case 'price-asc':
      return copy.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return copy.sort((a, b) => b.price - a.price);
    default:
      return copy;
  }
}

function applyFilters(products: CatalogProduct[], filters: ProductFilters): CatalogProduct[] {
  return products.filter(p => {
    if (!matchesSearch(p, filters.search)) return false;
    if (filters.categories.length && !filters.categories.includes(p.category)) return false;
    if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
    if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
    if (filters.inStockOnly && !p.inStock) return false;
    if (p.rating < filters.minRating) return false;
    if (filters.featuredOnly && !p.featured) return false;
    if (filters.trendingOnly && !p.trending) return false;
    if (filters.newestOnly && !p.isNew) return false;
    return true;
  });
}

export function useProductCatalog() {
  const [filters, setFilters] = useState<ProductFilters>({
    ...DEFAULT_FILTERS,
    priceMin: bounds.min,
    priceMax: bounds.max,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState<CatalogProduct[]>([]);

  const debouncedSearch = useDebounce(filters.search, 250);

  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => {
      setAllProducts(catalogProducts);
      setIsLoading(false);
    }, 350);
    return () => clearTimeout(t);
  }, []);

  const filteredProducts = useMemo(() => {
    const withSearch = { ...filters, search: debouncedSearch };
    const filtered = applyFilters(allProducts, withSearch);
    return sortProducts(filtered, filters.sort);
  }, [allProducts, filters, debouncedSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [totalPages, currentPage]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const updateFilters = useCallback((patch: Partial<ProductFilters>) => {
    setFilters(prev => ({ ...prev, ...patch }));
    setCurrentPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      ...DEFAULT_FILTERS,
      priceMin: bounds.min,
      priceMax: bounds.max,
    });
    setCurrentPage(1);
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    if (typeof window !== 'undefined') {
      document.getElementById('products-grid-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [totalPages]);

  return {
    filters,
    updateFilters,
    resetFilters,
    filteredProducts,
    paginatedProducts,
    currentPage,
    totalPages,
    totalCount: filteredProducts.length,
    isLoading,
    goToPage,
    priceBounds: bounds,
  };
}

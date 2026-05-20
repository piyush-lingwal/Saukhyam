import type { Product } from '@/data/products';

export type CatalogCategory = Product['category'];
export type SortOption = 'newest' | 'popular' | 'price-asc' | 'price-desc';

export interface CatalogProduct extends Product {
  baseSlug: string;
  brand: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  featured: boolean;
  trending: boolean;
  createdAt: string;
}

export interface ProductFilters {
  search: string;
  categories: CatalogCategory[];
  brands: string[];
  priceMin: number;
  priceMax: number;
  inStockOnly: boolean;
  minRating: number;
  featuredOnly: boolean;
  trendingOnly: boolean;
  newestOnly: boolean;
  sort: SortOption;
}

export const DEFAULT_FILTERS: ProductFilters = {
  search: '',
  categories: [],
  brands: [],
  priceMin: 0,
  priceMax: 2000,
  inStockOnly: false,
  minRating: 0,
  featuredOnly: false,
  trendingOnly: false,
  newestOnly: false,
  sort: 'popular',
};

export const PRODUCTS_PER_PAGE = 9;

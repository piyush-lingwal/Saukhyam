import { products } from '@/data/products';
import type { CatalogProduct } from '@/types/catalog';

const BRANDS = ['Saukhyam', 'Aarogya Naturals', 'EcoFemme', 'Banana Fiber Co.'] as const;

const TAG_POOL = [
  'reusable', 'banana-fiber', 'eco-friendly', 'chemical-free', 'organic-cotton',
  'heavy-flow', 'starter', 'travel', 'teen', 'postpartum', 'value-pack',
  'leak-proof', 'breathable', 'handcrafted', 'rural-women', 'sustainable',
];

function hashSeed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

function pickTags(id: string, category: string, features: string[]): string[] {
  const seed = hashSeed(id);
  const base = new Set<string>([category, ...features.slice(0, 2).map(f => f.toLowerCase().replace(/\s+/g, '-'))]);
  for (let i = 0; base.size < 5 && i < TAG_POOL.length; i++) {
    if ((seed + i) % 3 === 0) base.add(TAG_POOL[(seed + i) % TAG_POOL.length]);
  }
  return Array.from(base).slice(0, 6);
}

const VARIANT_SUFFIXES = [
  { suffix: '', priceOffset: 0 },
  { suffix: ' — Deluxe Edition', priceOffset: 80 },
  { suffix: ' — Travel Size', priceOffset: -40 },
];

/** API-ready catalog: base products × variants for rich pagination demos */
export function buildCatalog(): CatalogProduct[] {
  const items: CatalogProduct[] = [];
  let index = 0;

  for (const product of products) {
    for (const variant of VARIANT_SUFFIXES) {
      const id = variant.suffix ? `${product.id}${variant.suffix.replace(/\s+/g, '-').toLowerCase()}` : product.id;
      const seed = hashSeed(id);
      const brand = BRANDS[seed % BRANDS.length];
      const rating = 3.5 + (seed % 15) / 10;
      const reviewCount = 12 + (seed % 240);
      const inStock = seed % 7 !== 0;
      const stockCount = inStock ? 5 + (seed % 95) : 0;
      const daysAgo = index * 3 + (seed % 20);
      const createdAt = new Date(Date.now() - daysAgo * 86400000).toISOString();

      items.push({
        ...product,
        id,
        baseSlug: product.slug,
        slug: variant.suffix
          ? `${product.slug}-${variant.suffix.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}`
          : product.slug,
        name: product.name + variant.suffix,
        price: Math.max(299, product.price + variant.priceOffset),
        comparePrice: product.comparePrice ?? (seed % 4 === 0 ? product.price + 120 : undefined),
        brand,
        tags: pickTags(id, product.category, product.features),
        rating: Math.min(5, Math.round(rating * 10) / 10),
        reviewCount,
        inStock,
        stockCount,
        featured: Boolean(product.isPopular || seed % 5 === 0),
        trending: Boolean(product.isPopular || seed % 6 === 1),
        isNew: product.isNew ?? daysAgo < 30,
        createdAt,
      });
      index++;
    }
  }

  return items;
}

export const catalogProducts = buildCatalog();

export function getCatalogBrands(): string[] {
  return [...new Set(catalogProducts.map(p => p.brand))].sort();
}

export function getCatalogCategories(): CatalogProduct['category'][] {
  return [...new Set(catalogProducts.map(p => p.category))];
}

export function getPriceBounds(): { min: number; max: number } {
  const prices = catalogProducts.map(p => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

/** Replace with fetch('/api/products') in production */
export async function fetchCatalogProducts(): Promise<CatalogProduct[]> {
  await new Promise(r => setTimeout(r, 400));
  return catalogProducts;
}

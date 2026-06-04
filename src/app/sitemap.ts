import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

const BASE = 'https://saukhyampads.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* ── Static pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/science`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/impact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    /* Programs */
    { url: `${BASE}/programs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/programs/heal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/programs/care`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/programs/reach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/programs/buddy-program`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/programs/sports-women`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/programs/satellite-centres`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/programs/states`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    /* Media */
    { url: `${BASE}/media`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/media/newsroom`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/media/press-releases`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/media/brand-story`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/media/awards`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/media/press-kit`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/media/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    /* Legal */
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/returns`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  /* ── Dynamic product pages ── */
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}

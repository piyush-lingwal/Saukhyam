import type { BlogCategory } from '@/types/blog';

export const BLOG_CATEGORIES: { key: BlogCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All Stories' },
  { key: 'community', label: 'Community' },
  { key: 'science', label: 'Science' },
  { key: 'sustainability', label: 'Sustainability' },
  { key: 'stories', label: 'Personal Stories' },
];

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  community: '#22c55e',
  science: '#3b82f6',
  sustainability: '#10b981',
  stories: '#f59e0b',
};

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  community: 'Community',
  science: 'Science',
  sustainability: 'Sustainability',
  stories: 'Personal Stories',
};

/** Curated Pexels images — nature, women, wellness, rural themes */
export const BLOG_IMAGES = [
  'https://images.pexels.com/photos/6646668/pexels-photo-6646668.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646669/pexels-photo-6646669.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646670/pexels-photo-6646670.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646671/pexels-photo-6646671.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646672/pexels-photo-6646672.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646673/pexels-photo-6646673.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646674/pexels-photo-6646674.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646675/pexels-photo-6646675.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646676/pexels-photo-6646676.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3825583/pexels-photo-3825583.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3822863/pexels-photo-3822863.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=1600',
] as const;

export const AUTHORS = [
  { name: 'Priya Sharma', role: 'Community Lead', bio: 'Priya leads rural outreach across 9 Indian states.' },
  { name: 'Meena Pillai', role: 'Program Coordinator', bio: 'Meena coordinates coastal programmes in Tamil Nadu and Kerala.' },
  { name: 'Anjali Rao', role: 'Brand Ambassador', bio: 'Anjali switched to reusables in 2022 and advocates for HEAL.' },
  { name: 'Dr. Rekha Nair', role: 'Health Research', bio: 'Dr. Nair studies banana fiber and menstrual health outcomes.' },
  { name: 'Anju Bist', role: 'Managing Director', bio: 'Pad-woman of India, recognized by NITI Aayog among 75 Women Transforming India.' },
  { name: 'Sunita Devi', role: 'Field Ambassador', bio: 'Sunita trains women in Uttar Pradesh and Bihar on pad care.' },
  { name: 'Kavitha Menon', role: 'Sustainability Lead', bio: 'Kavitha tracks environmental impact across Saukhyam programmes.' },
] as const;

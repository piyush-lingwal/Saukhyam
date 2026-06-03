import type { BlogCategory } from '@/types/blog';



export const BLOG_CATEGORIES: { key: BlogCategory | 'all'; label: string }[] = [

  { key: 'all', label: 'All Stories' },

  { key: 'heal', label: 'HEAL' },

  { key: 'care', label: 'CARE' },

  { key: 'reach', label: 'REACH' },

];



export const CATEGORY_COLORS: Record<BlogCategory, string> = {

  heal: '#a01a6b',

  care: '#dc1464',

  reach: '#0d9488',

};



export const CATEGORY_LABELS: Record<BlogCategory, string> = {

  heal: 'HEAL',

  care: 'CARE',

  reach: 'REACH',

};



import { BLOG_EDITORIAL_IMAGES } from './linkedinPostMedia';



/** LinkedIn editorial photos only — no product/pack imagery from the shop */

export const BLOG_IMAGES = BLOG_EDITORIAL_IMAGES;



export const AUTHORS = [

  { name: 'Priya Sharma', role: 'REACH Program Lead', bio: 'Priya leads rural outreach across 9 Indian states.' },

  { name: 'Meena Pillai', role: 'Program Coordinator', bio: 'Meena coordinates coastal programmes in Tamil Nadu and Kerala.' },

  { name: 'Anjali Rao', role: 'Brand Ambassador', bio: 'Anjali switched to reusables in 2022 and advocates for HEAL.' },

  { name: 'Dr. Rekha Nair', role: 'Health Research', bio: 'Dr. Nair studies banana fiber and menstrual health outcomes.' },

  { name: 'Anju Bist', role: 'Managing Director', bio: 'Pad-woman of India, recognized by NITI Aayog among 75 Women Transforming India.' },

  { name: 'Sunita Devi', role: 'Field Ambassador', bio: 'Sunita trains women in Uttar Pradesh and Bihar on pad care.' },

  { name: 'Kavitha Menon', role: 'CARE Program Lead', bio: 'Kavitha leads campus sustainability across Saukhyam programmes.' },

] as const;



/** First N posts on /blog are sourced from Saukhyam Foundation / Anju Bist LinkedIn */

export const LINKEDIN_POST_COUNT = 14;


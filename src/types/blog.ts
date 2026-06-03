export type BlogCategory = 'heal' | 'care' | 'reach';

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; style: 'bullet' | 'number'; items: string[] }
  | { type: 'callout'; variant: 'info' | 'success' | 'warning'; title?: string; text: string };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  excerpt: string;
  excerptHi: string;
  image: string;
  coverAlt?: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  authorBio?: string;
  tags: string[];
  featured?: boolean;
  /** Original LinkedIn post URL when content is adapted from social */
  sourceUrl?: string;
  content: BlogBlock[];
}

export const BLOG_POSTS_PER_PAGE = 9;

import type { BlogBlock, BlogCategory } from '@/types/blog';

export function buildArticleContent(opts: {
  lede: string;
  context: string;
  section1Title: string;
  section1Body: string;
  quote?: { text: string; attribution?: string };
  bullets?: string[];
  section2Title: string;
  section2Body: string;
  imageSrc: string;
  imageAlt: string;
  callout?: { variant: 'info' | 'success' | 'warning'; title?: string; text: string };
  closing: string;
}): BlogBlock[] {
  const blocks: BlogBlock[] = [
    { type: 'paragraph', text: opts.lede },
    { type: 'paragraph', text: opts.context },
    { type: 'heading', level: 2, text: opts.section1Title },
    { type: 'paragraph', text: opts.section1Body },
  ];

  if (opts.quote) {
    blocks.push({ type: 'quote', text: opts.quote.text, attribution: opts.quote.attribution });
  }

  if (opts.bullets?.length) {
    blocks.push({ type: 'list', style: 'bullet', items: opts.bullets });
  }

  blocks.push(
    { type: 'heading', level: 2, text: opts.section2Title },
    { type: 'paragraph', text: opts.section2Body },
    { type: 'image', src: opts.imageSrc, alt: opts.imageAlt, caption: opts.imageAlt },
  );

  if (opts.callout) {
    blocks.push({
      type: 'callout',
      variant: opts.callout.variant,
      title: opts.callout.title,
      text: opts.callout.text,
    });
  }

  blocks.push(
    { type: 'heading', level: 2, text: 'What Comes Next' },
    { type: 'paragraph', text: opts.closing },
  );

  return blocks;
}

export interface PostTemplate {
  slug: string;
  title: string;
  titleHi: string;
  excerpt: string;
  excerptHi: string;
  category: BlogCategory;
  tags: string[];
  readTime: string;
  authorIndex: number;
  imageIndex: number;
  daysAgo: number;
  lede: string;
  context: string;
  section1Title: string;
  section1Body: string;
  quote?: { text: string; attribution?: string };
  bullets?: string[];
  section2Title: string;
  section2Body: string;
  callout?: { variant: 'info' | 'success' | 'warning'; title?: string; text: string };
  closing: string;
}

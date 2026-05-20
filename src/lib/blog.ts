import { blogPosts } from '@/data/blog';
import type { BlogCategory, BlogPost } from '@/types/blog';
import { BLOG_POSTS_PER_PAGE } from '@/types/blog';

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatBlogDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function filterBlogPosts(
  posts: BlogPost[],
  opts: { category: BlogCategory | 'all'; query: string },
): BlogPost[] {
  const q = opts.query.trim().toLowerCase();
  return posts.filter(p => {
    if (opts.category !== 'all' && p.category !== opts.category) return false;
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );
  });
}

export function paginatePosts<T>(items: T[], page: number, perPage = BLOG_POSTS_PER_PAGE) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    currentPage: safePage,
    totalPages,
    totalCount: items.length,
  };
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const same = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category);
  const others = blogPosts.filter(p => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...others].slice(0, limit);
}

'use client';

import { useMemo, useState, useCallback } from 'react';
import { blogPosts } from '@/data/blog';
import type { BlogCategory } from '@/types/blog';
import { BLOG_POSTS_PER_PAGE } from '@/types/blog';
import { filterBlogPosts, paginatePosts } from '@/lib/blog';
import { useDebounce } from '@/hooks/useDebounce';

export function useBlogCatalog() {
  const [category, setCategory] = useState<BlogCategory | 'all'>('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 250);
  const isLoading = query !== debouncedQuery;

  const featured = useMemo(() => blogPosts.find((p) => p.featured), []);

  const listPosts = useMemo(() => {
    const nonFeatured = blogPosts.filter((p) => !p.featured);
    return filterBlogPosts(nonFeatured, { category, query: debouncedQuery });
  }, [category, debouncedQuery]);

  const pagination = useMemo(
    () => paginatePosts(listPosts, page, BLOG_POSTS_PER_PAGE),
    [listPosts, page],
  );

  const setCategoryAndReset = useCallback((c: BlogCategory | 'all') => {
    setCategory(c);
    setPage(1);
  }, []);

  const setQueryAndReset = useCallback((q: string) => {
    setQuery(q);
    setPage(1);
  }, []);

  const goToPage = useCallback((p: number) => {
    setPage(p);
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return {
    featured,
    posts: pagination.items,
    category,
    setCategory: setCategoryAndReset,
    query,
    setQuery: setQueryAndReset,
    page: pagination.currentPage,
    totalPages: pagination.totalPages,
    totalCount: pagination.totalCount,
    isLoading,
    goToPage,
  };
}

'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/app/blog/page.module.css';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

function pageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | 'ellipsis')[] = [1];
  if (current > 3) pages.push('ellipsis');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
  if (current < total - 2) pages.push('ellipsis');
  pages.push(total);
  return pages;
}

export default function BlogPagination({ currentPage, totalPages, totalCount, onPageChange }: BlogPaginationProps) {
  if (totalPages <= 1) return null;
  const pages = pageNumbers(currentPage, totalPages);

  return (
    <nav className={styles.pagination} aria-label="Blog pagination">
      <p className={styles.paginationInfo}>
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> · {totalCount} stories
      </p>
      <div className={styles.paginationControls}>
        <button
          type="button"
          className={styles.pageBtn}
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        <AnimatePresence mode="popLayout">
          {pages.map((p, idx) =>
            p === 'ellipsis' ? (
              <span key={`e-${idx}`} className={styles.pageEllipsis}>…</span>
            ) : (
              <motion.button
                key={p}
                layout
                type="button"
                className={`${styles.pageNum} ${p === currentPage ? styles.pageNumActive : ''}`}
                onClick={() => onPageChange(p)}
                aria-current={p === currentPage ? 'page' : undefined}
              >
                {p}
              </motion.button>
            )
          )}
        </AnimatePresence>
        <button
          type="button"
          className={styles.pageBtn}
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </nav>
  );
}

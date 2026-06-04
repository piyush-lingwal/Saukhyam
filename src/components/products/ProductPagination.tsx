'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductPagination.module.css';

interface ProductPaginationProps {
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

export default function ProductPagination({
  currentPage,
  totalPages,
  totalCount,
  onPageChange,
}: ProductPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = pageNumbers(currentPage, totalPages);

  return (
    <nav className={styles.pagination} aria-label="Products pagination">
      <p className={styles.paginationInfo}>
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> · {totalCount} products
      </p>
      <div className={styles.paginationControls}>
        <button
          type="button"
          className={styles.pageBtn}
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>
        {pages.map((p, idx) =>
          p === 'ellipsis' ? (
            <span key={`e-${idx}`} className={styles.pageEllipsis} aria-hidden="true">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={`${styles.pageNum} ${p === currentPage ? styles.pageNumActive : ''}`}
              onClick={() => onPageChange(p)}
              aria-current={p === currentPage ? 'page' : undefined}
              aria-label={`Go to page ${p}`}
            >
              {p}
            </button>
          )
        )}
        <button
          type="button"
          className={styles.pageBtn}
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
}

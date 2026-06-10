'use client';

import styles from '@/app/blog/page.module.css';

export default function BlogSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className={styles.blogGrid}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonBody}>
            <div className={styles.skeletonLine} style={{ width: '40%' }} />
            <div className={styles.skeletonLine} style={{ width: '85%' }} />
            <div className={styles.skeletonLine} style={{ width: '100%' }} />
            <div className={styles.skeletonLine} style={{ width: '60%' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

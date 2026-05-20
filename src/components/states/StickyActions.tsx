'use client';

import Link from 'next/link';
import { Heart, Share2, ArrowUp } from 'lucide-react';
import styles from '@/app/programs/states/statePage.module.css';

export default function StickyActions() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title: document.title, url: window.location.href });
    }
  };

  return (
    <div className={styles.stickyActions} aria-label="Quick actions">
      <button type="button" className={styles.stickyBtn} onClick={scrollTop} aria-label="Back to top">
        <ArrowUp size={20} />
      </button>
      <button type="button" className={styles.stickyBtn} onClick={share} aria-label="Share page">
        <Share2 size={18} />
      </button>
      <Link href="/contact" className={styles.stickyBtn} aria-label="Donate or contact">
        <Heart size={18} />
      </Link>
    </div>
  );
}

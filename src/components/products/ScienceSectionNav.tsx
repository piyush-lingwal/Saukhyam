'use client';

import Link from 'next/link';
import { Layers, Ban, Sparkles, FlaskConical } from 'lucide-react';
import styles from './ScienceSectionNav.module.css';

const sections = [
  { id: 'layers', label: 'Pad Layers', icon: Layers },
  { id: 'comparison', label: 'Comparison', icon: Ban },
  { id: 'benefits', label: 'Why Switch', icon: Sparkles },
  { id: 'research', label: 'Research', icon: FlaskConical },
] as const;

/** Compact in-page section jumps — sits inside content, not between hero and body */
export default function ScienceSectionNav() {
  return (
    <nav className={styles.nav} aria-label="Jump to section">
      {sections.map(({ id, label, icon: Icon }) => (
        <a key={id} href={`#${id}`} className={styles.link}>
          <Icon size={14} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

/** Subtle cross-link for product pages → science */
export function SciencePageLink({ className }: { className?: string }) {
  return (
    <Link href="/science" className={className ?? styles.pageLink}>
      Why banana fiber? Read the science
    </Link>
  );
}

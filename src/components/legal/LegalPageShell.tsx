import Link from 'next/link';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import type { LegalTocItem } from '@/data/legal/types';
import styles from './legal-page-shell.module.css';

const RELATED_POLICIES = [
  { href: '/legal/terms', label: 'Terms & Conditions' },
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/returns', label: 'Returns & Refunds' },
] as const;

type LegalPageShellProps = {
  badgeIcon: LucideIcon;
  badgeLabel: string;
  title: string;
  lead: string;
  lastUpdated: string;
  lastUpdatedIso: string;
  toc: LegalTocItem[];
  currentPath: string;
  children: React.ReactNode;
  heroCta?: { href: string; label: string };
};

export default function LegalPageShell({
  badgeIcon: BadgeIcon,
  badgeLabel,
  title,
  lead,
  lastUpdated,
  lastUpdatedIso,
  toc,
  currentPath,
  children,
  heroCta,
}: LegalPageShellProps) {
  const related = RELATED_POLICIES.filter((p) => p.href !== currentPath);

  return (
    <main id="main-content" className={styles.page} tabIndex={-1}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <header className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>

          <span className={styles.badge}>
            <BadgeIcon size={16} aria-hidden="true" />
            {badgeLabel}
          </span>

          <h1>{title}</h1>
          <p className={styles.introLead}>{lead}</p>

          {heroCta && (
            <div className={styles.heroCtas}>
              <Link href={heroCta.href} className={styles.primaryCta}>
                {heroCta.label}
              </Link>
            </div>
          )}
        </div>
      </header>

      <section className={styles.content} aria-label={`${title} details`}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.toc} aria-label="On this page">
              <p id="toc-label" className={styles.tocTitle}>
                On this page
              </p>
              <nav className={styles.tocNav} aria-labelledby="toc-label">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                    {item.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className={styles.articleColumn}>
              <article className={styles.card}>
                <p className={styles.updated}>
                  Last updated: <time dateTime={lastUpdatedIso}>{lastUpdated}</time>
                </p>
                {children}
              </article>

              <footer className={styles.relatedStrip} aria-label="Related policies">
                <span className={styles.relatedLabel}>Also see</span>
                <div className={styles.relatedLinks}>
                  {related.map((item, index) => (
                    <span key={item.href} className={styles.relatedGroup}>
                      {index > 0 && <span className={styles.relatedDot} aria-hidden="true">·</span>}
                      <Link href={item.href} className={styles.relatedLink}>
                        {item.label}
                      </Link>
                    </span>
                  ))}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

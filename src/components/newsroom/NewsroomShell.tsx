'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { NEWSROOM_NAV, type NewsroomSlug } from '@/data/newsroom/navigation';
import m from './media.module.css';

type NewsroomShellProps = {
  activeSlug: NewsroomSlug;
  title: string;
  lead: string;
  children: React.ReactNode;
  showSidebar?: boolean;
  hideHeader?: boolean;
};

export default function NewsroomShell({
  activeSlug,
  title,
  lead,
  children,
  showSidebar = true,
  hideHeader = false,
}: NewsroomShellProps) {
  const pathname = usePathname();
  const subNav = NEWSROOM_NAV.filter((n) => n.slug !== 'hub');

  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'media';
    return () => {
      delete document.documentElement.dataset.pageTheme;
    };
  }, []);

  if (hideHeader) {
    return <>{children}</>;
  }

  return (
    <div className={m.mediaPage}>
      <header className={m.subHero}>
        <div className="container">
          <nav aria-label="Breadcrumb" className={m.subHeroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden />
            <Link href="/media">Media & Press</Link>
            {activeSlug !== 'hub' && (
              <>
                <ChevronRight size={14} aria-hidden />
                <span style={{ color: 'white', fontWeight: 600 }}>{title}</span>
              </>
            )}
          </nav>
          <h1 className={m.subHeroTitle}>{title}</h1>
          {lead ? <p className={m.subHeroLead}>{lead}</p> : null}
        </div>
      </header>

      {showSidebar ? (
        <div className={`container ${m.shellBody}`}>
          <div className={m.shellGrid}>
            <aside>
              <p className={m.sideEyebrow}>Sections</p>
              <nav aria-label="Newsroom sections" className={m.sideNav}>
                {subNav.map((item) => {
                  const active = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${m.sideLink} ${active ? m.sideLinkActive : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <Icon size={16} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </aside>
            <div style={{ minWidth: 0 }}>{children}</div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

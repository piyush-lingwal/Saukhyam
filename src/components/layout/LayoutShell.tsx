'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <a href="#main-content" className="sr-only" style={{
        position: 'absolute',
        top: '-100%',
        left: '16px',
        zIndex: 9999,
        padding: '12px 24px',
        background: 'var(--green-700)',
        color: 'white',
        borderRadius: 'var(--radius-md)',
        fontWeight: 600,
        fontSize: '0.875rem',
        textDecoration: 'none',
        transition: 'top 0.2s ease',
      }}
      onFocus={(e) => { e.currentTarget.style.top = '16px'; e.currentTarget.style.position = 'fixed'; }}
      onBlur={(e) => { e.currentTarget.style.top = '-100%'; e.currentTarget.style.position = 'absolute'; }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

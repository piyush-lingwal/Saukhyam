'use client';

import { SiteThemeProvider } from '@/context/SiteThemeContext';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <SiteThemeProvider>{children}</SiteThemeProvider>;
}

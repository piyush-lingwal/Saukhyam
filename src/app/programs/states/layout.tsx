'use client';

import { SiteThemeProvider } from '@/context/SiteThemeContext';

export default function StatesLayout({ children }: { children: React.ReactNode }) {
  return <SiteThemeProvider>{children}</SiteThemeProvider>;
}

'use client';

import { SiteThemeProvider } from '@/context/SiteThemeContext';

export default function StatesExperienceLayout({ children }: { children: React.ReactNode }) {
  return <SiteThemeProvider>{children}</SiteThemeProvider>;
}

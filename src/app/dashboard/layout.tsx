'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { NotificationProvider } from '@/context/NotificationContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </WishlistProvider>
    </ThemeProvider>
  );
}

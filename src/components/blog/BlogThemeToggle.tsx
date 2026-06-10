'use client';

import { Moon, Sun } from 'lucide-react';
import { useSiteTheme } from '@/context/SiteThemeContext';
import styles from '@/app/blog/page.module.css';

export default function BlogThemeToggle() {
  const { theme, toggleTheme } = useSiteTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

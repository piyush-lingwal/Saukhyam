'use client';

import { Menu, Search, Bell } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Breadcrumbs from './Breadcrumbs';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick: () => void;
}

export default function DashboardHeader({ title, subtitle, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className="min-w-0">
            <Breadcrumbs />
            <h1 className="truncate text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{title}</h1>
            {subtitle && (
              <p className="hidden truncate text-sm text-slate-500 sm:block dark:text-slate-400">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex dark:border-slate-700 dark:bg-slate-900">
            <Search size={16} className="text-slate-400" />
            <span className="text-sm text-slate-400">Quick search…</span>
            <kbd className="rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-500 shadow-sm dark:bg-slate-800">⌘K</kbd>
          </div>
          <button
            type="button"
            className="relative rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-950" />
          </button>
          <ThemeToggle />
          <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white sm:flex">
            SK
          </div>
        </div>
      </div>
    </header>
  );
}

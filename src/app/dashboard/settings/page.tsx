'use client';

import DashboardShell from '@/components/dashboard/DashboardShell';
import ThemeToggle from '@/components/dashboard/ThemeToggle';

export default function SettingsPage() {
  return (
    <DashboardShell title="Settings" subtitle="Dashboard preferences">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold">Appearance</h2>
        <p className="mt-1 text-sm text-slate-500">Toggle dark / light mode</p>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </div>
    </DashboardShell>
  );
}

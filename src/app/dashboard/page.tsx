'use client';

import Link from 'next/link';
import { ArrowRight, Package } from 'lucide-react';
import DashboardShell from '@/components/dashboard/DashboardShell';
import AnalyticsWidgets from '@/components/dashboard/AnalyticsWidgets';

export default function DashboardOverviewPage() {
  return (
    <DashboardShell
      title="Dashboard Overview"
      subtitle="Monitor your store performance at a glance"
    >
      <AnalyticsWidgets />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Quick actions</h2>
          <p className="mt-1 text-sm text-slate-500">Manage your product catalog</p>
          <Link
            href="/dashboard/products"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
          >
            <Package size={18} />
            View all products
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-lg">
          <h2 className="text-lg font-bold">Premium Product Dashboard</h2>
          <p className="mt-2 text-sm text-emerald-50/90">
            9 products per page · live search · advanced filters · quick view · wishlist · dark mode
          </p>
          <ul className="mt-4 space-y-1 text-sm text-emerald-50/80">
            <li>• Search across name, category, tags & description</li>
            <li>• Animated pagination with page indicators</li>
            <li>• Responsive filter drawer on mobile</li>
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}

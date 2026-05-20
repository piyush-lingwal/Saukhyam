'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const labelMap: Record<string, string> = {
  dashboard: 'Dashboard',
  products: 'Products',
  analytics: 'Analytics',
  orders: 'Orders',
  customers: 'Customers',
  notifications: 'Alerts',
  settings: 'Settings',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
      <Link href="/dashboard" className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400">
        <Home size={12} />
      </Link>
      {segments.slice(1).map((seg, i, arr) => (
        <span key={seg} className="flex items-center gap-1">
          <ChevronRight size={12} className="text-slate-300 dark:text-slate-600" />
          {i === arr.length - 1 ? (
            <span className="font-medium text-slate-700 dark:text-slate-200">{labelMap[seg] ?? seg}</span>
          ) : (
            <Link href={`/dashboard/${seg}`} className="hover:text-emerald-600 capitalize dark:hover:text-emerald-400">
              {labelMap[seg] ?? seg}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

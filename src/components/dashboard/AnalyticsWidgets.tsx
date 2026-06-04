'use client';

import { TrendingUp, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const widgets = [
  { label: 'Total Revenue', value: '₹4.2L', change: '+12.5%', icon: DollarSign, color: 'emerald' },
  { label: 'Products', value: '36', change: '+3 new', icon: Package, color: 'blue' },
  { label: 'Orders', value: '1,284', change: '+8.2%', icon: ShoppingCart, color: 'violet' },
  { label: 'Conversion', value: '3.8%', change: '+0.4%', icon: TrendingUp, color: 'amber' },
];

const colorMap: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
  blue: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
  violet: 'bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400',
  amber: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
};

export default function AnalyticsWidgets() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {widgets.map((w, i) => (
        <motion.div
          key={w.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.35 }}
          className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{w.label}</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{w.value}</p>
              <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{w.change}</p>
            </div>
            <div className={`rounded-xl p-2.5 ${colorMap[w.color]}`}>
              <w.icon size={20} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

'use client';

import DashboardShell from '@/components/dashboard/DashboardShell';
import AnalyticsWidgets from '@/components/dashboard/AnalyticsWidgets';

export default function AnalyticsPage() {
  return (
    <DashboardShell title="Analytics" subtitle="Sales and traffic insights">
      <AnalyticsWidgets />
      <p className="mt-8 text-sm text-slate-500">Detailed charts coming soon.</p>
    </DashboardShell>
  );
}

'use client';

import DashboardShell from '@/components/dashboard/DashboardShell';

export default function NotificationsPage() {
  return (
    <DashboardShell title="Alerts" subtitle="System and order notifications">
      <p className="text-sm text-slate-500">Notification center - integrate with your backend.</p>
    </DashboardShell>
  );
}

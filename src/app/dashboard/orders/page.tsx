'use client';

import DashboardShell from '@/components/dashboard/DashboardShell';

export default function OrdersPage() {
  return (
    <DashboardShell title="Orders" subtitle="Manage customer orders">
      <p className="text-sm text-slate-500">Order management module — connect your API here.</p>
    </DashboardShell>
  );
}

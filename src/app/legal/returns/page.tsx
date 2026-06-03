import type { Metadata } from 'next';
import { PackageOpen } from 'lucide-react';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalProse, { LegalContactBlock } from '@/components/legal/LegalProse';
import { returnsSections, returnsToc } from '@/data/legal/returnsSections';
import shellStyles from '@/components/legal/legal-page-shell.module.css';

const PAGE_DESCRIPTION =
  'Return and refund policy for Saukhyam Reusable Pads: 30-day unused returns, programme guarantees, and straightforward support.';

const SITE_ORIGIN = 'https://saukhyampads.org';

export const metadata: Metadata = {
  title: 'Returns & Refunds | Saukhyam Reusable Pads',
  description: PAGE_DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}/legal/returns` },
};

export default function ReturnsRefundPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Returns & Refund Policy | Saukhyam Reusable Pads',
      description: PAGE_DESCRIPTION,
      isPartOf: { '@type': 'WebSite', name: 'Saukhyam Reusable Pads', url: `${SITE_ORIGIN}/` },
      dateModified: '2026-05-23',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Returns & Refunds',
          item: `${SITE_ORIGIN}/legal/returns`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <LegalPageShell
        badgeIcon={PackageOpen}
        badgeLabel="Orders & Support"
        title="Returns & Refund Policy"
        lead="We stand behind our reusable pads. Here is how standard returns, wellness programme guarantees, and refunds work, in plain language with no runaround."
        lastUpdated="May 23, 2026"
        lastUpdatedIso="2026-05-23"
        toc={returnsToc}
        currentPath="/legal/returns"
        heroCta={{ href: '/contact', label: 'Start a return or ask a question' }}
      >
        <div className={shellStyles.callout} role="note">
          <p>
            <strong>30-day window:</strong> Most unused items in original packaging may be returned
            within 30 days of delivery. Selected programmes may include additional satisfaction
            guarantees. See the product page for details.
          </p>
        </div>
        <LegalProse sections={returnsSections} />
        <LegalContactBlock />
      </LegalPageShell>
    </>
  );
}

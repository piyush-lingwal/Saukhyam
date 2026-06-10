import type { Metadata } from 'next';
import { Scale } from 'lucide-react';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalProse, { LegalContactBlock } from '@/components/legal/LegalProse';
import { termsSections, termsToc } from '@/data/legal/termsSections';

const SITE_ORIGIN = 'https://saukhyampads.org';

const PAGE_DESCRIPTION =
  'Terms and conditions for using saukhyampads.org, placing orders, and engaging with Ayurarogya Saukhyam Foundation (Saukhyam Reusable Pads).';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Saukhyam Reusable Pads',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/legal/terms` },
};

export default function TermsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions | Saukhyam Reusable Pads',
    description: PAGE_DESCRIPTION,
    isPartOf: { '@type': 'WebSite', name: 'Saukhyam Reusable Pads', url: `${SITE_ORIGIN}/` },
    dateModified: '2026-05-23',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <LegalPageShell
        badgeIcon={Scale}
        badgeLabel="Legal & Governance"
        title="Terms & Conditions"
        lead="Clear rules for shopping, browsing, and connecting with Saukhyam online, written for real people, grounded in Indian law, and aligned with our mission of dignified, sustainable menstrual care."
        lastUpdated="May 23, 2026"
        lastUpdatedIso="2026-05-23"
        toc={termsToc}
        currentPath="/legal/terms"
      >
        <LegalProse sections={termsSections} />
        <LegalContactBlock />
      </LegalPageShell>
    </>
  );
}

import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalProse, { LegalContactBlock } from '@/components/legal/LegalProse';
import { privacySections, privacyToc } from '@/data/legal/privacySections';

const SITE_ORIGIN = 'https://saukhyampads.org';

const PAGE_DESCRIPTION =
  'Privacy policy for saukhyampads.org: how Ayurarogya Saukhyam Foundation collects, uses, and protects your personal information.';

export const metadata: Metadata = {
  title: 'Privacy Policy | Saukhyam Reusable Pads',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/legal/privacy` },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      badgeIcon={ShieldCheck}
      badgeLabel="Privacy & Trust"
      title="Privacy Policy"
      lead="We treat your data with the same care we bring to our products: clear purpose, minimal collection, and respect for your choices."
      lastUpdated="May 23, 2026"
      lastUpdatedIso="2026-05-23"
      toc={privacyToc}
      currentPath="/legal/privacy"
      heroCta={{ href: 'mailto:info@saukhyampads.org', label: 'Email privacy questions' }}
    >
      <LegalProse sections={privacySections} />
      <LegalContactBlock />
    </LegalPageShell>
  );
}

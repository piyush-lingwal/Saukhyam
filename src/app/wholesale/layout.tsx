import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Orders & Institutional Partnerships',
  description:
    'Partner with Saukhyam for bulk orders and institutional menstrual health programs. Schools, NGOs, CSR teams, government departments, SHGs, hospitals, and community organizations — we support sustainable menstrual health across India.',
  openGraph: {
    title: 'Bulk Orders & Institutional Partnerships | Saukhyam',
    description:
      '30+ lakh women & girls reached. Request a bulk order or partner with Saukhyam for awareness sessions, workshops, and HEAL, CARE & REACH programs.',
  },
};

export default function WholesaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}

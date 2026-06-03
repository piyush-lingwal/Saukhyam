'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { pressKitAssets } from '@/data/newsroom/pressKit';
import NewsletterCTA from '../NewsletterCTA';
import m from '../media.module.css';

const iconFor = (id: string) => (id === 'logo' || id === 'photos' ? ImageIcon : FileText);

export default function PressKitView() {
  return (
    <div className={m.viewStack}>
      <p className={prog.sectionDesc} style={{ maxWidth: '42rem' }}>
        Download official Saukhyam assets for editorial use. Credit Saukhyam Foundation; do not alter logo proportions without approval.
      </p>

      <div className={prog.stepsGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 'var(--space-4)' }}>
        {pressKitAssets.map((asset, i) => {
          const Icon = iconFor(asset.id);
          return (
            <motion.a
              key={asset.id}
              href={asset.href}
              className={prog.stepCard}
              style={{ textDecoration: 'none', color: 'inherit' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className={m.exploreIcon}>
                <Icon size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: 'var(--space-4)' }}>{asset.title}</h3>
              <p style={{ flex: 1, marginTop: 'var(--space-2)' }}>{asset.description}</p>
              <div style={{ marginTop: 'var(--space-4)', display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                <span>{asset.format} · {asset.size}</span>
                <Download size={16} style={{ color: 'var(--color-primary)' }} />
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className={prog.stepCard} style={{ padding: 'var(--space-5)', background: 'var(--green-50)' }}>
        Need custom assets?{' '}
        <Link href="/contact" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
          Contact our press team
        </Link>
      </div>

      <NewsletterCTA compact />
    </div>
  );
}

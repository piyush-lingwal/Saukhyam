'use client';

import dynamic from 'next/dynamic';
import { ExternalLink } from 'lucide-react';
import styles from './ContactMap.module.css';

export const SAUKHYAM_MAPS_URL = 'https://maps.app.goo.gl/TpchAEPtd5a9MLWA6';

const ContactMapInner = dynamic(() => import('./ContactMapInner'), {
  ssr: false,
  loading: () => <div className={styles.mapPlaceholder} aria-label="Loading map" />,
});

export default function ContactMap() {
  return (
    <div className={styles.mapShell}>
      <a
        href={SAUKHYAM_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.openMapsBtn}
      >
        <ExternalLink size={15} aria-hidden />
        Visit Us
      </a>
      <div className={styles.mapFrame}>
        <ContactMapInner />
      </div>
    </div>
  );
}

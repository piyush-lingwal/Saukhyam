import Link from 'next/link';
import type { LegalSection } from '@/data/legal/types';
import styles from './legal-page-shell.module.css';

function renderInlineLinks(text: string) {
  const email = 'info@saukhyampads.org';
  const parts = text.split(email);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a key={`mail-${i}`} href={`mailto:${email}`} className={styles.inlineLink}>
            {email}
          </a>,
        ]
      : [part],
  );
}

export default function LegalProse({ sections }: { sections: LegalSection[] }) {
  return (
    <div className={styles.prose}>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`h-${section.id}`}>
          <h2 id={`h-${section.id}`}>{section.title}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i}>{renderInlineLinks(paragraph)}</p>
          ))}
          {section.list &&
            (section.list.type === 'ol' ? (
              <ol className={styles.numbered}>
                {section.list.items.map((item) => (
                  <li key={item}>{renderInlineLinks(item)}</li>
                ))}
              </ol>
            ) : (
              <ul className={styles.bullet}>
                {section.list.items.map((item) => (
                  <li key={item}>{renderInlineLinks(item)}</li>
                ))}
              </ul>
            ))}
        </section>
      ))}
    </div>
  );
}

export function LegalContactBlock() {
  return (
    <address className={styles.contactCard}>
      <p className={styles.contactTitle}>Saukhyam Reusable Pads</p>
      <p>
        Saukhyam House, Mata Amritanandamayi Math
        <br />
        Amritapuri PO, Kollam, Kerala 690546
      </p>
      <p>
        <a href="tel:+916282103073" className={styles.inlineLink}>
          +91 6282 103 073
        </a>
        {' · '}
        <a href="mailto:info@saukhyampads.org" className={styles.inlineLink}>
          info@saukhyampads.org
        </a>
      </p>
      <p>
        Questions about orders or policies?{' '}
        <Link href="/contact" className={styles.inlineLink}>
          Contact us
        </Link>
      </p>
    </address>
  );
}

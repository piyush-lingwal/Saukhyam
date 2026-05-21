'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import type { ResearchStudy } from '@/data/research';
import styles from './ResearchAccordion.module.css';

type ResearchAccordionProps = {
  studies: ResearchStudy[];
  timelineColor: 'green' | 'navy';
  startNumber?: number;
};

export default function ResearchAccordion({
  studies,
  timelineColor,
  startNumber = 1,
}: ResearchAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={styles.list} role="list">
      {studies.map((study, index) => {
        const isOpen = openId === study.id;
        const displayNum = study.number ?? startNumber + index;

        return (
          <article
            key={study.id}
            className={`${styles.card} ${styles[timelineColor]} ${isOpen ? styles.open : ''}`}
            role="listitem"
          >
            <button
              type="button"
              className={styles.trigger}
              onClick={() => setOpenId(isOpen ? null : study.id)}
              aria-expanded={isOpen}
              aria-controls={`study-panel-${study.id}`}
            >
              <span className={styles.num}>{displayNum}</span>
              <span className={styles.triggerBody}>
                <span className={styles.title}>{study.title}</span>
                <span className={styles.meta}>
                  <span className={styles.journalChip}>{study.journal}</span>
                  <span className={styles.year}>{study.year}</span>
                </span>
              </span>
              <ChevronDown size={20} className={styles.chevron} aria-hidden="true" />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`study-panel-${study.id}`}
                  className={styles.panel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.summary}>{study.summary}</p>
                    <div className={styles.citation}>
                      <span className={styles.authors}>{study.authors}</span>
                      <span className={styles.journalLine}>
                        {study.journal}, {study.year}
                      </span>
                    </div>
                    {study.paperUrl && (
                      <a
                        href={study.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.paperLink}
                      >
                        Read Full Paper
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

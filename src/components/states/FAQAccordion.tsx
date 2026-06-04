'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { StateFAQ } from '@/types/statePage';
import styles from '@/app/programs/states/statePage.module.css';

export default function FAQAccordion({ faqs }: { faqs: StateFAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, i) => (
        <div key={i} className={styles.faqItem}>
          <button
            type="button"
            className={styles.faqQuestion}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {faq.question}
            <ChevronDown size={18} style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: '0.25s' }} />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

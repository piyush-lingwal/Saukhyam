'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight } from 'lucide-react';
import styles from '@/app/products/page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BananaFiberCtaSection() {
  return (
    <section className={styles.bananaFiberCta} aria-labelledby="banana-fiber-cta-heading">
      <div className="container">
        <motion.div
          className={styles.bananaFiberCtaInner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <h2 id="banana-fiber-cta-heading" className={styles.bananaFiberCtaTitle}>
            Curious About Banana Fiber?
          </h2>
          <p className={styles.bananaFiberCtaDesc}>
            Saukhyam pads use India&apos;s first reusable absorbent core made from banana pseudostem
            fiber — chemical-free, naturally antimicrobial, and gentle on sensitive skin. Explore how
            agricultural waste becomes healing technology.
          </p>
          <Link href="/science" className={styles.bananaFiberCtaBtn}>
            <Leaf size={18} aria-hidden />
            <span>Explore Banana Fiber Science</span>
            <ArrowRight size={18} aria-hidden className={styles.bananaFiberCtaBtnArrow} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

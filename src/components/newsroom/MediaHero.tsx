'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Newspaper } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { fadeInUp, stagger } from './mediaMotion';
import m from './media.module.css';

export default function MediaHero() {
  return (
    <section className={`${prog.hero} ${prog.heroPress}`} aria-labelledby="media-hero-title">
      <div className="container">
        <motion.div
          className={prog.heroContent}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span variants={fadeInUp} className={prog.heroLabel}>
            <Newspaper size={16} aria-hidden />
            Media & Press
          </motion.span>
          <motion.h1 id="media-hero-title" variants={fadeInUp} className={prog.heroTitle}>
            Stories of dignity,{' '}
            <span className={prog.heroAccent}>science & impact</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className={prog.heroDesc}>
            Press coverage, brand assets, and field photography for journalists and partners
            covering menstrual wellness and banana fiber innovation across India.
          </motion.p>
          <motion.div variants={fadeInUp} className={m.heroActions}>
            <Link href="/media/press-kit" className={m.heroBtnPrimary}>
              <Download size={16} aria-hidden />
              Download press kit
            </Link>
            <Link href="#workflow" className={m.heroBtnGhost}>
              How we work with media
              <ArrowRight size={16} aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

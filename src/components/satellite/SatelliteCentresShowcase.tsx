'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SatelliteCentresShowcase.module.css';

const stateCentres = [
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    description:
      'Two satellite centers operate in Burhanpur District. The women working here are part of self-help groups constituted by Ajeevika, the State Rural Livelihood Mission of Madhya Pradesh.',
    mapSrc: '/images/satellite/map-madhya-pradesh.png',
    mapAlt: 'Map of India with Madhya Pradesh highlighted as a satellite production centre',
    caption: 'Satellite production centre — Madhya Pradesh',
    reverse: false,
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description:
      'In the tribal district of Nandurbar, training was provided to a group of 10 women who have continuously produced Saukhyam pads under the aegis of a Farmers Producer Company and the NGO BAIF.',
    mapSrc: '/images/satellite/map-maharashtra.png',
    mapAlt: 'Map of India with Maharashtra highlighted as a satellite production centre',
    caption: 'Satellite production centre — Maharashtra',
    reverse: true,
  },
  {
    id: 'odisha',
    name: 'Odisha',
    description:
      'Our newest satellite production centers are being set up in Kalahandi and Angul districts of Odisha in partnership with Amrita Jan Shikshan Sansthan.',
    mapSrc: '/images/satellite/map-odisha.png',
    mapAlt: 'Map of India with Odisha highlighted as a satellite production centre',
    caption: 'Satellite production centre — Odisha',
    reverse: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function SatelliteCentresShowcase() {
  return (
    <div className={styles.showcase}>
      <motion.div
        className={styles.intro}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.h2 className={styles.introTitle} variants={fadeUp}>
          Satellite Production Centers
        </motion.h2>
        <motion.p className={styles.introText} variants={fadeUp}>
          Satellite Production Centers provide rural women with a means of employment close to their
          homes. In India, the khadi industry provides income to about 5 lakh rural households.
          Similarly, the large-scale manufacturing of reusable menstrual pads has the potential to
          create lakhs of jobs.
        </motion.p>
      </motion.div>

      <div className={styles.stateList}>
        {stateCentres.map((centre) => (
          <motion.article
            key={centre.id}
            id={`centre-${centre.id}`}
            className={`${styles.stateRow} ${centre.reverse ? styles.stateRowReverse : ''}`}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              className={styles.stateContent}
              variants={centre.reverse ? fadeRight : fadeLeft}
            >
              <h3 className={styles.stateName}>{centre.name}</h3>
              <p className={styles.stateDesc}>{centre.description}</p>
            </motion.div>

            <motion.figure
              className={styles.mapFigure}
              variants={centre.reverse ? fadeLeft : fadeRight}
            >
              <div className={styles.mapFrame}>
                <Image
                  src={centre.mapSrc}
                  alt={centre.mapAlt}
                  width={640}
                  height={720}
                  className={styles.mapImage}
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
              <figcaption className={styles.mapCaption}>{centre.caption}</figcaption>
            </motion.figure>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

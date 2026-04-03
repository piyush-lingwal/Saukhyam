'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Microscope, Layers, ShieldAlert, HeartPulse, Stethoscope, 
  FlaskConical, AlertTriangle, CheckCircle2, ShoppingBag, 
  BookOpen, Dna, Activity, Search
} from 'lucide-react';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const toxicFindings = [
  { 
    title: 'Endocrine Disruptors', 
    desc: 'Phthalates, VOCs, and Dioxins are absorbed through highly permeable vaginal mucosal tissues.',
    ref: 'BJOG (2024) / PLOS ONE' 
  },
  { 
    title: 'Heavy Metal Load', 
    desc: 'Arsenic, Lead, Cadmium, and Mercury found in popular brands across 7 countries, including India.',
    ref: 'Env. Tech & Innovation (2024)' 
  },
  { 
    title: 'Pesticide Residues', 
    desc: 'Significant pesticide concentrations in mass-market pads linked to hormonal imbalances.',
    ref: 'Kumar et al. (2024)' 
  },
  { 
    title: 'Toluene & Microplastics', 
    desc: 'Testing confirms Toluene presence and microplastic shedding in commercial disposable pads.',
    ref: 'J. Hazardous Materials (2025)' 
  }
];

const researchLibrary = [
  { journal: 'Environment International (2025)', topic: 'Chemical characterization (phthalates, parabens) in intimate care.' },
  { journal: 'Journal of Hazardous Materials (2025)', topic: 'Safety assessment: Toluene, microplastics, and cytotoxicity.' },
  { journal: 'BJOG: Int. J. of Obs & Gyn (2024)', topic: 'Systematic review of chemicals in menstrual products.' },
  { journal: 'Environment International (2024)', topic: 'Tampons as a source of exposure to metal(loids) like Lead.' },
  { journal: 'Int. J. of Gynaecology & Obstetrics (2024)', topic: 'Systematic review: BPA exposure and PCOS in humans.' },
  { journal: 'Reproductive BioMedicine Online (2025)', topic: 'EDC mechanisms: BPA exposure and PCOS-like phenotypes.' }
];

export default function SciencePage() {
  return (
    <div className={styles.sciencePage}>
      {/* ── Hero: Medical Validation ── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className={styles.heroLabel}>
              <Stethoscope size={14} />
              The Bio-Medical Case
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Science Behind <span className={styles.heroAccent}>Hormonal Health</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Moving beyond sustainability to address the systemic chemical threat in menstrual care. 
              Validated by 2025 peer-reviewed research.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: The Hidden Crisis ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.crisisGrid}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className={styles.sectionLabel}><AlertTriangle size={14} /> The Silent Threat</span>
              <h2 className={styles.sectionTitle}>Toxins in Disposables</h2>
              <p className={styles.sectionDesc}>
                Recent research confirms that disposable pads contain hazardous compounds 
                that bypass the skin barrier through mucosal absorption.
              </p>
              
              <div className={styles.findingsList}>
                {toxicFindings.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className={styles.findingItem}>
                    <ShieldAlert className={styles.findingIcon} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc} <span>— {item.ref}</span></p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.pcosCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <HeartPulse size={40} className={styles.pcosIcon} />
              <h3>The PCOS & Fertility Link</h3>
              <p>
                Clinical reviews show a direct correlation between Endocrine Disrupting Chemical (EDC) 
                exposure and PCOS phenotypes, including ovarian dysfunction and irregular cycles.
              </p>
              <div className={styles.pcosBadge}>2025 Clinical Update</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Molecular Defense ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.solutionGrid}>
             <motion.div 
              className={styles.moleculeVisual}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.moleculeGraphic}>
                <Dna size={80} />
                <span>Naturally Antimicrobial</span>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <span className={styles.sectionLabel}><FlaskConical size={14} /> The Molecular Solution</span>
              <h2 className={styles.sectionTitle}>Banana Fiber Engineering</h2>
              <p className={styles.sectionDesc}>
                Our pads utilize the molecular structure of banana fiber, 
                naturally rich in Pathogenesis-Related (PR) proteins.
              </p>
              <ul className={styles.benefitList}>
                <li><strong>Zero EDC Exposure:</strong> 100% chemical-free, eliminating Phthalates and BPA risks.</li>
                <li><strong>Heavy Metal Free:</strong> Sourcing ensures no Lead, Arsenic, or Mercury contamination.</li>
                <li><strong>Natural Sterilization:</strong> Resists bacterial growth without chemical agents.</li>
                <li><strong>Breathable Barrier:</strong> Prevents the "greenhouse effect" caused by plastic backings.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Research Archive ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <span className={styles.sectionLabel}><BookOpen size={14} /> Research Library</span>
            <h2 className={styles.sectionTitle}>Peer-Reviewed Clinical Evidence</h2>
            <p className={styles.sectionDescCenter}>
              We provide transparency through data. These high-impact studies from 2024-2025 form the 
              basis of our medical outreach.
            </p>
          </div>

          <div className={styles.libraryGrid}>
            {researchLibrary.map((paper, i) => (
              <motion.div key={i} className={styles.paperCard} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Activity size={18} className={styles.paperIcon} />
                <div>
                  <h5>{paper.journal}</h5>
                  <p>{paper.topic}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <h2>Heal Your Period Today</h2>
            <p>
              Remove daily toxic exposure and experience the healing power of banana fiber.
            </p>
            <Link href="/products" className={styles.ctaBtn}>
              <ShoppingBag size={20} /> View Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

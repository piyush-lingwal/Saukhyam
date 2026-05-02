'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  TbHeartbeat,
  TbCalendarStats,
  TbStars,
  TbShieldCheck,
  TbLeaf,
  TbCalendarTime,
  TbCertificate,
  TbFlask,
  TbAlertTriangle,
  TbClipboardList,
  TbArrowBack,
  TbAward,
  TbCircleCheck,
  TbSparkles,
  TbQuestionMark,
  TbBolt,
  TbCheck,
  TbArrowRight,
  TbPlus,
} from 'react-icons/tb';
import styles from '../program.module.css';
import heal from './heal.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Data ─────────────────────────────────────────────────────── */

const stats = [
  { value: '77%', label: 'Reported Pain Reduction' },
  { value: '81%', label: 'Cycle Regularity Improved' },
  { value: '92%', label: 'Continued Beyond 6 Months' },
  { value: '74%', label: 'Complete Shift in 3 Months' },
];

const challengeCards = [
  {
    icon: TbLeaf,
    step: 'Step 1',
    title: 'Make the Switch',
    desc: 'Stop using disposable sanitary napkins. Make a 100% shift to Saukhyam reusable pads. If you cannot switch immediately, follow the 2-3-4 formula to transition gradually over 3 months.',
  },
  {
    icon: TbCalendarTime,
    step: 'Step 2',
    title: '6 Months. That\'s All.',
    desc: 'Give your body a full 6 months - either a 3-month gradual transition followed by 3 months of complete reusable use, or the full 6 months using Saukhyam exclusively.',
  },
  {
    icon: TbCertificate,
    step: 'Step 3',
    title: 'Money Back. No Questions.',
    desc: 'If your period problems have not reduced or improved - not even a little - return your pads, even used, and we will refund your money completely. No questions asked.',
  },
];

const scienceSteps = [
  {
    step: '01',
    title: 'Chemicals in Disposable Pads',
    desc: 'Conventional disposable pads contain dioxins, phthalates, volatile organic compounds (VOCs), superabsorbent polymers, fragrances, and synthetic bleaching residues - all confirmed or suspected endocrine disruptors. Peer-reviewed studies from 2024 (BJOG) and 2025 (Journal of Materials Science) found them in every tested pad brand.',
  },
  {
    step: '02',
    title: 'Direct Bloodstream Entry',
    desc: 'Unlike food, what enters the vaginal area bypasses the liver\'s first-pass metabolism. Vaginal tissue is highly vascular and absorptive. Even trace amounts are absorbed directly into the bloodstream during 4–6 days every cycle - month after month, for decades.',
  },
  {
    step: '03',
    title: 'Hormonal Disruption',
    desc: 'These endocrine disruptors mimic estrogen and interfere with the hypothalamic-pituitary-ovarian (HPO) axis - the body\'s core hormonal regulator. This is strongly linked to PCOS, irregular cycles, heavy bleeding, severe cramps, acne, and in some cases, fertility challenges.',
  },
  {
    step: '04',
    title: 'Remove the Source. Heal.',
    desc: 'The menstrual cycle is a tightly regulated, self-correcting system. Remove the primary chemical source - disposable pads - and many women find the body begins to restore its natural hormonal rhythm. No medication. No procedure. Just removing what was causing the disruption.',
  },
];

const healingStories = [
  {
    name: 'Laxmi Thrylokya',
    role: 'HEAL Challenge Participant',
    condition: 'PCOS',
    initial: 'L',
    quote: 'She didn\'t know she had PCOS. Irregular periods, stubborn acne, fatigue, unexpected weight gain. Doctors said "lose weight". Friends said "just hormones." Until someone told her to check what was in her sanitary napkin. She switched to a reusable pad. Within 3 months, something shifted. Periods became more regular. Skin cleared. Energy returned.',
    outcome: '3 months - Cycles regularised, acne cleared, energy returned',
  },
  {
    name: 'Dr. Priyanka',
    role: 'State Director, UP - Saukhyam Foundation',
    condition: 'Irregular Cycles',
    initial: 'P',
    quote: 'As a doctor, I tried Tranexa and hormonal medicines. Nothing really changed. Then I switched to Saukhyam in December 2024. After more than a year, my cycles became more regular. The discomfort reduced. The anxiety eased. When I learned about pad chemicals entering the bloodstream directly, it made sense. Remove the exposure. Let the body heal.',
    outcome: '6 months - Regular cycles, reduced discomfort, no medication',
  },
  {
    name: 'Arola Thonger',
    role: 'Nurse & Satellite Centre Founder, Nagaland',
    condition: 'Irregular Periods',
    initial: 'A',
    quote: 'A nurse in Nagaland who kept seeing irregular periods, discomfort, and fertility concerns in the women she treated. It was also personal - she had irregular periods herself. One small shift: disposable to Saukhyam reusable. Within 6–7 months, her periods became regular and cramps reduced. No medication. Just the switch.',
    outcome: '6–7 months - Regular periods, reduced cramps, no medication',
  },
  {
    name: 'Virginie',
    role: 'HEAL Challenge Participant',
    condition: 'Endometriosis',
    initial: 'V',
    quote: 'A 5 cm ovarian cyst had been detected. Five years after switching to Saukhyam - combined with yoga and dietary changes - the cyst reduced to 2 cm with no medication required. Periods are now nearly normal. Structural conditions may not fully resolve, but the overall experience can become significantly better.',
    outcome: '5 years - Cyst reduced 5cm → 2cm, nearly normal periods',
  },
];

const formulaSteps = [
  {
    month: 'Month 1',
    days: '2',
    label: 'days with reusables',
    tip: 'Start on your lightest flow days - usually the last 2 days of your cycle. Use at home, when comfortable.',
  },
  {
    month: 'Month 2',
    days: '3',
    label: 'days with reusables',
    tip: 'Extend to 3 days. You can still use disposables on the remaining days of the cycle.',
  },
  {
    month: 'Month 3',
    days: '4+',
    label: 'days with reusables',
    tip: 'Cover most of your cycle. By now many feel ready to make a complete shift.',
  },
];

const refundCards = [
  {
    num: '1',
    icon: TbClipboardList,
    title: 'Enroll Before You Begin',
    desc: 'Fill a short form at purchase describing your period problems. This establishes your baseline for the healing journey.',
  },
  {
    num: '2',
    icon: TbArrowBack,
    title: 'Return Used Pads',
    desc: 'If after 6 months your problems haven\'t improved, mail your used pads back to us. No judgment, no awkwardness.',
  },
  {
    num: '3',
    icon: TbAward,
    title: 'Full Refund. Guaranteed.',
    desc: 'We process your complete refund. No fine print, no conditions beyond an honest 6-month attempt with reusable pads.',
  },
];

const faqItems = [
  {
    q: 'Will the HEAL Challenge work with any reusable pad, or only Saukhyam?',
    a: 'The core principle - removing chemical exposure - will work with any high-quality reusable pad that is cotton-cloth based and has natural, toxin-free materials. In fact, it should work with any reusable period product. However, Saukhyam is the only product we have 2+ years of documented case studies with. We can only guarantee refunds for our own product.',
  },
  {
    q: 'What if I have a structural condition like endometriosis or fibroids?',
    a: 'Structural conditions will not completely resolve from a pad switch alone - and we are honest about this. However, your overall period experience (pain levels, regularity, discomfort) is very likely to improve. The experience gets better even if the underlying condition needs separate medical attention.',
  },
  {
    q: 'What role do environmental toxins play in PCOS?',
    a: 'Nobody knows the exact cause of PCOS. What science does confirm is that endocrine-disrupting chemicals (dioxins, phthalates, VOCs) interfere with the hormonal systems that regulate the menstrual cycle. The vaginal route of absorption is especially significant because these chemicals bypass the liver and enter the bloodstream directly. Even small trace amounts can have a disproportionate hormonal effect.',
  },
  {
    q: 'Do I need to make a 100% shift from day one?',
    a: 'Ideally yes - healing depends on completely removing the chemical source. But if you cannot switch all at once, use the 2-3-4 formula: 2 days in Month 1, 3 in Month 2, 4+ in Month 3. Allow 3 months for transition + 3 months of complete usage = the full 6-month challenge.',
  },
  {
    q: 'What if my periods are very irregular and I skip months?',
    a: 'The HEAL Challenge works even for highly irregular cycles. Whenever your period arrives, use reusable pads. The goal is to accumulate at least 2–3 full cycles of reusable use within 6 months. Even if periods come every 2–3 months, the window is designed to give you enough opportunity to see results.',
  },
  {
    q: 'What about nutrition, exercise, and sleep?',
    a: 'All lifestyle factors contribute to hormonal balance, and we encourage healthy habits. But we are not nutrition or exercise experts, and we do not prescribe these as part of the HEAL Challenge. Our focus is the one intervention that is most overlooked and most impactful: removing the primary environmental toxin source from your period routine.',
  },
  {
    q: 'How do I officially enroll, and how does the refund process work?',
    a: 'Before you purchase Saukhyam pads for the HEAL Challenge, fill in the enrollment form describing your period problems. If after 6 months you wish to claim a refund, fill in the return form and mail your used pads back to us. We process a full refund. These forms can be accessed from the Enroll in HEAL Challenge section above.',
  },
];

/* ── Component ───────────────────────────────────────────────── */

export default function HealPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  // Activate HEAL brand theme on <html> so Navbar & Footer update automatically.
  // Cleaned up when user navigates away.
  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'heal';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, []);

  return (
    <div className={heal.healPage}>

      {/* ── 1. Hero ── */}
      <section className={heal.heroSection}>

        {/* ── Split content: text left, logo right ── */}
        <motion.div
          className={heal.heroInner}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left: text content */}
          <motion.div variants={stagger} className={heal.heroContent}>
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className={heal.heroEyebrow}>
              The 6-Month Money-Back Challenge
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className={heal.heroHeadline}>
              Period Problems?
              <span className={heal.heroHeadlineAccent}>There&apos;s a Real Fix.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p variants={fadeInUp} className={heal.heroSubcopy}>
              Switch to Saukhyam reusable pads for 6 months.
              Period problems not better? Return your pads - even used - for a full refund.
            </motion.p>

            {/* CTAs */}
          </motion.div>

          {/* Right: logo pill */}
          <motion.div variants={fadeInUp} className={heal.heroLogoPill}>
            <Image
              src="/HealLogo/HEAL logo RGB_Horizontal with tag line.png"
              alt="HEAL - Health, Environment & Active Living"
              width={320}
              height={80}
              className={heal.heroLogo}
              priority
            />
          </motion.div>
        </motion.div>

        {/* ── Stats shelf pinned to the bottom edge ── */}
        <motion.div
          className={heal.heroStatsShelf}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={heal.heroStatItem}>
            <TbHeartbeat size={18} className={heal.heroStatIcon} />
            <span className={heal.heroStatNum}>77%</span>
            <span className={heal.heroStatLabel}>Reported pain reduction</span>
          </div>
          <div className={heal.heroStatItem}>
            <TbCalendarStats size={18} className={heal.heroStatIcon} />
            <span className={heal.heroStatNum}>81%</span>
            <span className={heal.heroStatLabel}>Cycle regularity improved</span>
          </div>
          <div className={heal.heroStatItem}>
            <TbStars size={18} className={heal.heroStatIcon} />
            <span className={heal.heroStatNum}>92%</span>
            <span className={heal.heroStatLabel}>Continued beyond 6 months</span>
          </div>
          <div className={heal.heroStatItem}>
            <TbCalendarTime size={18} className={heal.heroStatIcon} />
            <span className={heal.heroStatNum}>74%</span>
            <span className={heal.heroStatLabel}>Complete shift in 3 months</span>
          </div>
        </motion.div>

      </section>


      {/* ── 3. How It Works - Immersive Vertical Journey ── */}
      <section className={heal.challengeSection}>
        {/* Ambient background blobs */}
        <div className={heal.challengeBlobA} aria-hidden="true" />
        <div className={heal.challengeBlobB} aria-hidden="true" />

        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {/* ── Section Header ── */}
            <motion.div variants={fadeInUp} className={heal.journeyHeader}>
              <div className={heal.sectionBadge}>
                <TbBolt size={14} />
                How It Works
              </div>
              <h2 className={heal.journeyTitle}>
                The HEAL Challenge
                <span className={heal.journeyTitleAccent}> in 3 Steps</span>
              </h2>
              <p className={heal.journeySubtitle}>
                One of the most powerful interventions in women&apos;s health - and the simplest.
                No pills. No procedures. No side effects.
              </p>
            </motion.div>

            {/* ── Vertical Journey Cards ── */}
            <div className={heal.journeyTrack}>

              {/* ── Step 1 ── */}
              <motion.div
                variants={fadeInUp}
                className={`${heal.journeyCard} ${heal.journeyCardStep1}`}
              >
                {/* Left accent strip with step number */}
                <div className={heal.journeyAccent}>
                  <span className={heal.journeyStepBadge}>Step 1</span>
                  <span className={heal.journeyBigNum}>01</span>
                  <div className={heal.journeyIconCircle}>
                    <TbLeaf size={26} />
                  </div>
                </div>

                {/* Right content pane */}
                <div className={heal.journeyContent}>
                  <h3 className={heal.journeyCardTitle}>Make the Switch</h3>
                  <p className={heal.journeyCardDesc}>
                    Stop using disposable sanitary napkins. Make a 100% shift to Saukhyam reusable pads.
                    If you cannot switch immediately, follow the 2-3-4 formula (explained in Step 2) to transition gradually over 3 months.
                  </p>

                  {/* Key insight chip */}
                  <div className={heal.journeyInsight}>
                    <TbCheck size={15} className={heal.journeyInsightIcon} />
                    <span>Remove the #1 overlooked source of hormonal disruption</span>
                  </div>

                  {/* Inline mini-stat */}
                  <div className={heal.journeyMiniStats}>
                    <div className={heal.journeyMiniStat}>
                      <span className={heal.journeyMiniNum}>100%</span>
                      <span className={heal.journeyMiniLabel}>Chemical-free switch</span>
                    </div>
                    <div className={heal.journeyMiniDivider} />
                    <div className={heal.journeyMiniStat}>
                      <span className={heal.journeyMiniNum}>2-3-4</span>
                      <span className={heal.journeyMiniLabel}>Gradual formula available</span>
                    </div>
                  </div>

                  <a href="#science" className={heal.journeyScrollLink}>
                    Why does switching work? <TbArrowRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* ── Connector ── */}
              <div className={heal.journeyConnector} aria-hidden="true">
                <div className={heal.journeyConnectorLine} />
                <div className={heal.journeyConnectorDot} />
                <div className={heal.journeyConnectorLine} />
              </div>

              {/* ── Step 2 ── */}
              <motion.div
                variants={fadeInUp}
                className={`${heal.journeyCard} ${heal.journeyCardStep2}`}
              >
                {/* Left accent strip */}
                <div className={heal.journeyAccent}>
                  <span className={heal.journeyStepBadge}>Step 2</span>
                  <span className={heal.journeyBigNum}>02</span>
                  <div className={heal.journeyIconCircle}>
                    <TbCalendarTime size={26} />
                  </div>
                </div>

                {/* Right content pane */}
                <div className={heal.journeyContent}>
                  <h3 className={heal.journeyCardTitle}>6 Months. That&apos;s All.</h3>
                  <p className={heal.journeyCardDesc}>
                    Give your body a full 6 months - either a 3-month gradual transition followed by
                    3 months of complete reusable use, or the full 6 months using Saukhyam exclusively.
                  </p>

                  <div className={heal.journeyInsight}>
                    <TbCheck size={15} className={heal.journeyInsightIcon} />
                    <span>Your body needs uninterrupted time to self-correct</span>
                  </div>

                  {/* Timeline pill row */}
                  <div className={heal.journeyTimeline}>
                    <div className={heal.journeyTimelinePill}>
                      <span className={heal.journeyTimelineNum}>3</span>
                      <span>months transition</span>
                    </div>
                    <TbPlus size={16} className={heal.journeyTimelineArrow} />
                    <div className={heal.journeyTimelinePill}>
                      <span className={heal.journeyTimelineNum}>3</span>
                      <span>months complete use</span>
                    </div>
                    <TbArrowRight size={16} className={heal.journeyTimelineArrow} />
                    <div className={`${heal.journeyTimelinePill} ${heal.journeyTimelinePillFinal}`}>
                      <span>✦ Healing</span>
                    </div>
                  </div>

                  <a href="#formula" className={heal.journeyScrollLink}>
                    Can&apos;t switch all at once? See the 2-3-4 Formula <TbArrowRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* ── Connector ── */}
              <div className={heal.journeyConnector} aria-hidden="true">
                <div className={heal.journeyConnectorLine} />
                <div className={heal.journeyConnectorDot} />
                <div className={heal.journeyConnectorLine} />
              </div>

              {/* ── Step 3 ── */}
              <motion.div
                variants={fadeInUp}
                className={`${heal.journeyCard} ${heal.journeyCardStep3}`}
              >
                {/* Left accent strip */}
                <div className={heal.journeyAccent}>
                  <span className={heal.journeyStepBadge}>Step 3</span>
                  <span className={heal.journeyBigNum}>03</span>
                  <div className={heal.journeyIconCircle}>
                    <TbCertificate size={26} />
                  </div>
                </div>

                {/* Right content pane */}
                <div className={heal.journeyContent}>
                  <h3 className={heal.journeyCardTitle}>Money Back. No Questions.</h3>
                  <p className={heal.journeyCardDesc}>
                    If your period problems have not reduced or improved,
                    return your pads, even used, and we will refund your money completely.
                    No questions asked.
                  </p>

                  <div className={heal.journeyInsight}>
                    <TbCheck size={15} className={heal.journeyInsightIcon} />
                    <span>0.7% refund claims in 2+ years of the HEAL Challenge</span>
                  </div>

                  <div className={heal.journeyMiniStats}>
                    <div className={heal.journeyMiniStat}>
                      <span className={heal.journeyMiniNum}>0.7%</span>
                      <span className={heal.journeyMiniLabel}>Refund claims ever</span>
                    </div>
                    <div className={heal.journeyMiniDivider} />
                    <div className={heal.journeyMiniStat}>
                      <span className={heal.journeyMiniNum}>100%</span>
                      <span className={heal.journeyMiniLabel}>Money-back if no results</span>
                    </div>
                  </div>

                  <a href="#refund" className={heal.journeyScrollLink}>
                    How does the refund process work? <TbArrowRight size={14} />
                  </a>
                </div>
              </motion.div>

            </div>{/* end journeyTrack */}

            {/* ── Ready to Take the HEAL Challenge ── */}
            <motion.div variants={fadeInUp} className={heal.journeyCtaBanner}>
              <h2 className={heal.journeyCtaTitle}>Ready to Take the HEAL Challenge?</h2>
              <p className={heal.journeyCtaDesc}>
                6 months. A complete switch to Saukhyam reusable pads. A full refund if your period
                problems don&apos;t improve. Join hundreds of thousands who have already healed.
              </p>
              <div className={heal.dualCta}>
                <a href="#refund" className={heal.ctaBtnPrimary}>
                  <TbLeaf size={18} />
                  Start the HEAL Challenge
                  <TbArrowRight size={18} />
                </a>
                <a href="#faq" className={heal.ctaBtnSecondary}>
                  <TbQuestionMark size={18} />
                  Frequently Asked Questions
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── 4. Why It Works - Science ── */}
      <section id="science" className={heal.scienceSection}>
        {/* Background texture layer */}
        <div className={heal.scienceBg} aria-hidden="true" />

        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {/* ── Header ── */}
            <motion.div variants={fadeInUp} className={heal.scienceHeader}>
              <div className={heal.scienceBadge}>
                <TbFlask size={14} />
                The Science
              </div>
              <h2 className={heal.scienceTitle}>Why Switching Heals</h2>
              <p className={heal.scienceSubtitle}>
                PCOS is a silent pandemic affecting 6 crore Indian women. One of its most
                overlooked triggers is the daily exposure to hormone-disrupting chemicals
                through disposable pads. Here is the chain:
              </p>
            </motion.div>

            {/* ── Science Bento Grid ── */}
            <motion.div variants={stagger} className={heal.scienceBento}>

              {/* Card 01 - Chemicals (wide) */}
              <motion.div variants={fadeInUp} className={`${heal.scienceBentoCard} ${heal.scienceBentoCardA}`}>
                <span className={heal.scienceBentoWatermark}>01</span>
                <div className={heal.scienceBentoInner}>
                  <div className={heal.scienceBentoTag}>The Source</div>
                  <h3 className={heal.scienceBentoTitle}>Chemicals in Disposable Pads</h3>
                  <p className={heal.scienceBentoDesc}>
                    Conventional disposable pads contain dioxins, phthalates, VOCs, superabsorbent
                    polymers, fragrances, and synthetic bleaching residues - all confirmed or suspected
                    endocrine disruptors. Found in every tested brand.
                  </p>
                  <div className={heal.scienceChips}>
                    {['Dioxins', 'Phthalates', 'VOCs', 'Fragrances', 'Bleach Residues'].map(c => (
                      <span key={c} className={heal.scienceChip}>{c}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 02 - Bloodstream (tall) */}
              <motion.div variants={fadeInUp} className={`${heal.scienceBentoCard} ${heal.scienceBentoCardB}`}>
                <span className={heal.scienceBentoWatermark}>02</span>
                <div className={heal.scienceBentoInner}>
                  <div className={heal.scienceBentoTag}>The Route</div>
                  <h3 className={heal.scienceBentoTitle}>Direct Bloodstream Entry</h3>
                  <p className={heal.scienceBentoDesc}>
                    Vaginal tissue is highly vascular. Unlike food, chemicals here bypass
                    the liver&apos;s first-pass metabolism and enter the bloodstream directly.
                  </p>
                  <div className={heal.scienceStatPill}>
                    <span className={heal.scienceStatPillNum}>4–6</span>
                    <span>days per cycle, every month, for decades</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 03 - Hormonal Disruption (tall) */}
              <motion.div variants={fadeInUp} className={`${heal.scienceBentoCard} ${heal.scienceBentoCardC}`}>
                <span className={heal.scienceBentoWatermark}>03</span>
                <div className={heal.scienceBentoInner}>
                  <div className={heal.scienceBentoTag}>The Damage</div>
                  <h3 className={heal.scienceBentoTitle}>Hormonal Disruption</h3>
                  <p className={heal.scienceBentoDesc}>
                    Endocrine disruptors mimic estrogen and interfere with the HPO axis -
                    the body&apos;s core hormonal regulator.
                  </p>
                  <div className={heal.scienceChips}>
                    {['PCOS', 'Irregular Cycles', 'Heavy Bleeding', 'Severe Cramps', 'Infertility'].map(c => (
                      <span key={c} className={`${heal.scienceChip} ${heal.scienceChipWarning}`}>{c}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 04 - Remove Source. Heal. (wide) */}
              <motion.div variants={fadeInUp} className={`${heal.scienceBentoCard} ${heal.scienceBentoCardD}`}>
                <span className={heal.scienceBentoWatermark}>04</span>
                <div className={heal.scienceBentoInner}>
                  <div className={heal.scienceBentoTag}>The Resolution</div>
                  <h3 className={heal.scienceBentoTitle}>Remove the Source.<br />Heal.</h3>
                  <p className={heal.scienceBentoDesc}>
                    The menstrual cycle is a tightly regulated, self-correcting system. Remove
                    the primary chemical source - disposable pads - and many women find the body
                    begins to restore its natural hormonal rhythm.
                  </p>
                  <div className={heal.scienceOutcome}>
                    <TbCheck size={16} className={heal.scienceOutcomeIcon} />
                    <span>No medication. No procedure. Just removing the source.</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>


            {/* ── PCOS Callout ── */}
            <motion.div variants={fadeInUp} className={heal.pcosCallout}>
              <div className={heal.pcosCalloutLeft}>
                <div className={heal.pcosCalloutIcon}>
                  <TbAlertTriangle size={26} />
                </div>
                <div>
                  <div className={heal.pcosCalloutEyebrow}>Clinical Insight</div>
                  <h3 className={heal.pcosCalloutTitle}>
                    Fertility &amp; PCOS -<br />What Doctors Are Now Seeing
                  </h3>
                </div>
              </div>
              <p className={heal.pcosCalloutDesc}>
                70–80% of women with ovulation-related infertility have PCOS. Fertility doctors
                working with Saukhyam Foundation are now prescribing reusable menstrual products
                as a first-line intervention - before pills or procedures - and reporting real results:
                more regular periods, PCOS symptoms reducing, and in many cases, natural conception.
              </p>
              <div className={heal.pcosCalloutStat}>
                <span className={heal.pcosCalloutStatNum}>₹10<small>/mo</small></span>
                <span className={heal.pcosCalloutStatLabel} style={{ color: '#0d9488', fontSize: '0.68rem', marginBottom: '4px' }}>for reusable pads</span>
                <span className={heal.pcosCalloutStatLabel}>vs ₹15,000–5,00,000 for fertility treatment</span>
              </div>
            </motion.div>

            {/* ── Citation Strip ── */}
            <motion.div variants={fadeInUp} className={heal.citationStrip}>
              <span className={heal.citationStripLabel}>Peer-reviewed sources:</span>
              <div className={heal.citations}>
                <span className={heal.citation}>
                  <strong>2025</strong> - Journal of Materials Science: Dioxins, VOCs &amp; phthalates confirmed in sanitary pads
                </span>
                <div className={heal.citationDot} />
                <span className={heal.citation}>
                  <strong>2024</strong> - BJOG Systematic Review: Endocrine disruptors found in every tested pad and tampon
                </span>
                <div className={heal.citationDot} />
                <Link href="/science" className={`${heal.citation} ${heal.citationLink}`}>
                  Read all research <ArrowRight size={11} />
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* ── 5. 2-3-4 Formula ── */}
      <section id="formula" className={heal.formulaSection}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeInUp} className={heal.formulaHeader}>
              <div className={heal.sectionBadge}>Gradual Transition</div>
              <h2 className={styles.sectionTitle}>The 2-3-4 Formula</h2>
              <p className={heal.formulaSubtitle}>
                Can&apos;t switch 100% from day one? That&apos;s okay. Use this gradual approach
                to build confidence over 3 months - then complete your switch and start
                your healing clock. The full 6-month challenge still applies.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={heal.formulaTimeline}>
              {formulaSteps.map((step, idx) => (
                <Fragment key={step.month}>
                  <motion.div variants={fadeInUp} className={heal.formulaStep}>
                    <div className={heal.formulaStepNum}>{['A','B','C'][idx]}</div>
                    <div className={heal.formulaStepMonth}>{step.month}</div>
                    <div className={heal.formulaStepDays}>{step.days}</div>
                    <div className={heal.formulaStepLabel}>{step.label}</div>
                    <p className={heal.formulaStepTip}>{step.tip}</p>
                  </motion.div>
                  {idx < formulaSteps.length - 1 && (
                    <div className={heal.formulaConnector}>
                      <ArrowRight size={22} />
                    </div>
                  )}
                </Fragment>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className={heal.formulaNote}>
              <p>
                <strong>After Month 3:</strong> You are ready for a complete shift. Use Saukhyam
                for every day of your period - for at least 3 more months. This gives your body
                the uninterrupted, chemical-free environment it needs to self-correct.
                Total: 3 months transition + 3 months complete usage ={' '}
                <strong>the full 6-month HEAL Challenge.</strong>
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── 6. Sign Up / Refund Promise ── */}
      <section id="refund" className={heal.refundSection}>
        <div className="container">
          <motion.div
            className={heal.refundSectionInner}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeInUp} className={heal.refundZeroClaims}>
              <TbShieldCheck size={17} />
              0.7% refund claims in 2+ years of running the HEAL Challenge
            </motion.div>

            <motion.h2 variants={fadeInUp} className={heal.refundTitle}>
              Start the HEAL Challenge
            </motion.h2>
            <motion.p variants={fadeInUp} className={heal.refundSubtitle}>
              We are confident enough in this challenge to offer a full, no-questions-asked
              refund. Here is exactly how it works:
            </motion.p>

            <motion.div variants={stagger} className={heal.refundGrid}>
              {refundCards.map((card) => (
                <motion.div key={card.title} variants={fadeInUp} className={heal.refundCard}>
                  <div className={heal.refundCardNum}>{card.num}</div>
                  <div className={heal.refundCardIcon}>
                    <card.icon size={22} />
                  </div>
                  <h3 className={heal.refundCardTitle}>{card.title}</h3>
                  <p className={heal.refundCardDesc}>{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className={heal.refundDisclaimer}>
              Note: Structural conditions such as endometriosis, uterine fibroids, or polyps
              may not fully resolve from a product switch alone. However, your overall period
              experience - pain, regularity, comfort - is very likely to improve. The refund
              applies when period problems do not get better in any measurable way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Start CTA strip ── */}
      <div className={heal.formulaCtaWrap}>
        <Link href="/products" className={heal.formulaCtaBtn}>
          <TbLeaf size={18} />
          Start the HEAL Challenge
          <TbArrowRight size={18} />
        </Link>
      </div>

      {/* ── 7. Real Healing Stories ── */}
      <section className={heal.storiesSection}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeInUp} className="section-header">
              <div className={heal.sectionBadge}><TbHeartbeat size={15} /> Real Stories</div>
              <h2 className={styles.sectionTitle}>Real Healing. Documented.</h2>
              <p className={styles.sectionDesc}>
                These are not testimonials written for a website. They are living case studies
                from women who shared their journeys publicly - every one of them asked the
                same question we are asking you to consider.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={heal.storiesGrid}>
              {healingStories.map((story) => (
                <motion.div key={story.name} variants={fadeInUp} className={heal.storyCard}>
                  <div className={heal.storyCardTop}>
                    <span className={heal.storyConditionBadge}>
                      <TbCircleCheck size={13} /> {story.condition}
                    </span>
                    <span className={heal.storyQuoteMark}>&ldquo;</span>
                  </div>
                  <p className={heal.storyQuote}>{story.quote}</p>
                  <div className={heal.storyOutcome}>
                    <TbSparkles size={15} />
                    {story.outcome}
                  </div>
                  <div className={heal.storyAuthor}>
                    <div className={heal.storyAvatar}>{story.initial}</div>
                    <div>
                      <div className={heal.storyName}>{story.name}</div>
                      <div className={heal.storyRole}>{story.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}
            >
              <Link href="/testimonials" className={styles.outlineBtn}>
                Read All Healing Stories <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section id="faq" className={heal.faqSection}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeInUp} className="section-header">
              <div className={heal.sectionBadge}><TbQuestionMark size={14} /> Questions</div>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>
                Everything you need to know before taking the HEAL Challenge.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={heal.faqList}>
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`${heal.faqItem} ${openFaq === idx ? heal.open : ''}`}
                >
                  <button
                    className={heal.faqQuestion}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {item.q}
                    <ChevronDown size={18} className={heal.faqChevron} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className={heal.faqAnswer}>
                          <p>{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}


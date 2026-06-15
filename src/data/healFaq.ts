export type HealFAQCategory =
  | 'about'
  | 'menstrual-health'
  | 'cycle'
  | 'period-problems'
  | 'pcos'
  | 'hormones'
  | 'products'
  | 'heal-challenge'
  | 'concerns'
  | 'stories'
  | 'medical'
  | 'environment'
  | 'community'
  | 'research'
  | 'platform'
  | 'vision';

export interface HealFAQItem {
  id: string;
  category: HealFAQCategory;
  question: string;
  paragraphs: string[];
  bullets?: string[];
}

export const healFaqCategories: { id: HealFAQCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'heal-challenge', label: 'HEAL Challenge' },
  { id: 'about', label: 'About Saukhyam' },
  { id: 'menstrual-health', label: 'Menstrual Health' },
  { id: 'cycle', label: 'Your Cycle' },
  { id: 'period-problems', label: 'Period Problems' },
  { id: 'pcos', label: 'PCOS & Hormones' },
  { id: 'hormones', label: 'Endocrine Disruption' },
  { id: 'products', label: 'Disposable vs Reusable' },
  { id: 'concerns', label: 'Concerns & Myths' },
  { id: 'stories', label: 'User Stories' },
  { id: 'medical', label: 'Medical Help' },
  { id: 'environment', label: 'Environment' },
  { id: 'community', label: 'Community' },
  { id: 'research', label: 'Research' },
  { id: 'platform', label: 'HEAL Platform' },
  { id: 'vision', label: 'Data & Vision' },
];

export const healFaqItems: HealFAQItem[] = [
  /* ── About Saukhyam ── */
  {
    id: 'ab-1',
    category: 'about',
    question: 'What is Saukhyam Foundation?',
    paragraphs: [
      'Saukhyam Foundation is an NGO working at the intersection of menstrual health, sustainability, and women\'s dignity. Saukhyam\'s flagship innovation, Saukhyam Reusable Pads, is recognised as the world\'s first reusable sanitary pad using banana fibre as an absorbent.',
      'Inspired by Amma, Sri Mata Amritanandamayi Devi, Saukhyam has consistently pursued menstrual solutions that are safe for the body, non-polluting for the environment, and empowering for women.',
    ],
  },
  {
    id: 'ab-2',
    category: 'about',
    question: 'What are CARE, REACH, and HEAL?',
    paragraphs: ['Our work is anchored in three flagship initiatives:'],
    bullets: [
      'CARE (Campus Action for Reusable Essentials) — focused on college campuses',
      'REACH (Rural Empowerment and Community Health) — focused on rural beneficiaries',
      'HEAL (Health.Environment.Active Living.) — focused on girls experiencing menstrual disorders',
    ],
  },
  {
    id: 'ab-3',
    category: 'about',
    question: 'What recognition has Saukhyam received?',
    paragraphs: ['Saukhyam\'s innovation and impact have received national and international recognition, including:'],
    bullets: [
      'Women Transforming India Award by NITI Aayog (2022)',
      'Red Shakti Award (2023)',
      'Impact Innovation Award at IIT Global Conference (2024)',
      'Sheroes Award from Kerala Women\'s Commission (2024)',
      'Sustainability & Eco-Impact Award at the Annual MHM Conference (2025)',
      'Rural Healthcare Organization of the Year Award, Uttarakhand (2025)',
      'Shreyas Award from Rotary International (2026)',
    ],
  },

  /* ── HEAL Challenge ── */
  {
    id: 'hc-0',
    category: 'heal-challenge',
    question: 'What is the HEAL program?',
    paragraphs: [
      'HEAL stands for Health, Environment and Active Living. It is a structured 6-month program for girls and women struggling with irregular periods, painful periods, heavy bleeding, and other menstrual health challenges.',
      'At the heart of HEAL is a simple shift: moving from disposable menstrual products to reusable alternatives. Many sanitary napkins contain chemicals that affect our body month after month. HEAL seeks to eliminate that exposure and create the conditions for the body to heal naturally.',
    ],
  },
  {
    id: 'hc-1',
    category: 'heal-challenge',
    question: 'What is the HEAL Challenge?',
    paragraphs: [
      'The HEAL Challenge is one of the most powerful interventions in women\'s health — and the simplest. No pills. No procedures. No side effects.',
      'If you have period problems, switch to Saukhyam reusable pads for 6 months. If your period problems do not get better, return your pads — even used — for a full refund. No questions asked.',
    ],
  },
  {
    id: 'hc-1b',
    category: 'heal-challenge',
    question: 'What is the impact of the HEAL Challenge to date?',
    paragraphs: ['Documented outcomes from 2+ years of the HEAL Challenge include:'],
    bullets: [
      '5,00,000+ women healed',
      '77% reported pain reduction',
      '81% cycle regularity improved',
      '92% continued beyond 6 months',
      '74% complete shift in 3 months',
      'Only 0.7% refund claims ever',
    ],
  },
  {
    id: 'hc-1c',
    category: 'heal-challenge',
    question: 'How does the HEAL Challenge work?',
    paragraphs: ['The HEAL Challenge works in 3 steps:'],
    bullets: [
      'Step 1 — Make the Switch: Stop using disposable sanitary napkins. Make a 100% shift to Saukhyam reusable pads. If you cannot switch immediately, follow the 2-3-4 formula to transition gradually over 3 months. Remove the #1 overlooked source of hormonal disruption.',
      'Step 2 — 6 Months. That\'s All: Give your body a full 6 months — either a 3-month gradual transition followed by 3 months of complete reusable use, or the full 6 months using Saukhyam exclusively. Your body needs uninterrupted time to self-correct.',
      'Step 3 — Money Back. No Questions: If your period problems have not reduced or improved, return your pads, even used, and we will refund your money completely. No questions asked.',
    ],
  },
  {
    id: 'hc-1d',
    category: 'heal-challenge',
    question: 'How can I join the HEAL Challenge?',
    paragraphs: [
      'Joining is simple: buy Saukhyam reusable pads from the website or platform, fill a short form about your current period health and problems, and start using the pads for 6 months.',
      'You can either switch completely from the beginning or gradually transition using the 2-3-4 approach. Support is available throughout the process.',
    ],
  },
  {
    id: 'hc-1e',
    category: 'heal-challenge',
    question: 'Who should join HEAL?',
    paragraphs: [
      'HEAL is designed for girls and women with irregular periods, painful periods, heavy bleeding, and other menstrual health challenges — or anyone who wants to understand their body better.',
    ],
  },
  {
    id: 'hc-1f',
    category: 'heal-challenge',
    question: 'Does HEAL replace a doctor?',
    paragraphs: [
      'No. HEAL is a structured 6-month program that supports girls and women on their menstrual health journey through education and a transition to reusable menstrual products.',
      'HEAL is designed to complement, not replace, medical care. Participants with severe symptoms or existing medical conditions should seek advice from a qualified healthcare professional.',
    ],
  },
  {
    id: 'hc-1g',
    category: 'heal-challenge',
    question: 'What results can I expect from HEAL?',
    paragraphs: [
      'Many girls and women who have completed the HEAL Challenge report benefits such as reduced pain, improved cycle regularity, fewer rashes, and more comfortable periods.',
      'HEAL is backed with a results guarantee. If your period problems do not improve, simply return your Saukhyam pads — even if they have been used — and receive a full refund. No questions asked.',
      'Over 99% of HEAL participants have chosen to continue with the program. In more than 2 years of implementation, only 0.7% have requested a refund.',
    ],
  },
  {
    id: 'hc-1h',
    category: 'heal-challenge',
    question: 'Can teenagers join HEAL?',
    paragraphs: [
      'Yes. HEAL is suitable for teenagers and can help them understand their cycles early and build healthy habits.',
    ],
  },
  {
    id: 'hc-1i',
    category: 'heal-challenge',
    question: 'Is HEAL scientifically backed?',
    paragraphs: [
      'HEAL was scientifically designed in consultation with gynecologists and researchers.',
      'If repeated exposure to chemicals in disposable menstrual products contributes to period problems, then removing that exposure may help the body restore its natural hormonal balance. That is why HEAL begins with a complete shift to reusable menstrual products.',
    ],
  },
  {
    id: 'hc-1j',
    category: 'heal-challenge',
    question: 'What is the 2-3-4 Formula?',
    paragraphs: [
      'The 2-3-4 Formula is a gradual transition plan for women who are not ready to switch completely to reusable pads immediately.',
    ],
    bullets: [
      'Month 1 — 2 Days: Use reusable pads for the last two days of your period (usually lighter flow days)',
      'Month 2 — 3 Days: Increase usage to three days of your menstrual cycle',
      'Month 3 — 4+ Days: Use reusable pads for four or more days; many women feel comfortable making a complete transition',
      'After Month 3: Switch fully to Saukhyam reusable pads for every day of your period and continue for at least three more months to complete the six-month HEAL Challenge',
    ],
  },
  {
    id: 'hc-1k',
    category: 'heal-challenge',
    question: 'Why does switching to reusables work?',
    paragraphs: [
      'The HEAL Challenge is based on the belief that one overlooked contributor to menstrual health issues is prolonged exposure to certain chemicals found in disposable sanitary pads. These substances may affect the body\'s natural hormonal balance over time.',
    ],
    bullets: [
      'Source — Many disposable pads contain fragrances, bleaching residues, plastics, and other synthetic substances that may act as endocrine disruptors',
      'Route — Pads remain in close contact with the body for several days each month, throughout a woman\'s reproductive years',
      'Impact — Hormonal disruption may contribute to irregular periods, painful cramps, heavy bleeding, and symptoms associated with PCOS/PMOS',
      'Resolution — By replacing disposable pads with reusable alternatives, the body may better support its natural menstrual rhythm',
    ],
  },
  {
    id: 'hc-2',
    category: 'heal-challenge',
    question: 'Why is the challenge 6 months?',
    paragraphs: [
      'Because the body works in cycles. One cycle is roughly one month, and hormonal patterns take time to adjust. Meaningful change often requires multiple cycles (3–6 months).',
      'The 6-month period allows for transition (first 2–3 months) and observation (next 3 months).',
    ],
  },
  {
    id: 'hc-3',
    category: 'heal-challenge',
    question: 'Why is a 100% shift required?',
    paragraphs: [
      'Partial use means mixed exposure and inconsistent inputs, which makes it difficult to observe patterns and see real change. A full shift ensures clarity of cause and effect.',
    ],
  },
  {
    id: 'hc-4',
    category: 'heal-challenge',
    question: 'What if I use disposables sometimes?',
    paragraphs: [
      'Occasional use may disrupt consistency and slow down progress. It does not cancel everything, but it reduces the clarity of outcomes. That is why full commitment is encouraged.',
    ],
  },
  {
    id: 'hc-5',
    category: 'heal-challenge',
    question: 'What is the refund policy?',
    paragraphs: [
      'HEAL offers a refund guarantee: if you do not see improvement, you can return the pads and receive a refund — even if the pads have been used. This is designed to remove financial risk and build trust.',
    ],
  },
  {
    id: 'hc-6',
    category: 'heal-challenge',
    question: 'Can I return used pads?',
    paragraphs: [
      'Yes. This is a unique part of the program. The idea is that you should not hesitate to try because of fear of loss. The guarantee reflects confidence in the process.',
    ],
  },
  {
    id: 'hc-7',
    category: 'heal-challenge',
    question: 'Are there any conditions for refund?',
    paragraphs: ['Typical conditions include:'],
    bullets: [
      'Completing the 6-month duration',
      'Maintaining reasonable consistency',
      'Tracking your cycles',
    ],
  },
  {
    id: 'hc-8',
    category: 'heal-challenge',
    question: 'How do I claim the refund?',
    paragraphs: [
      'The process is designed to be simple: submit a request on the website, return products, and receive your refund. No complex procedures — the focus is on trust.',
    ],
  },
  {
    id: 'hc-9',
    category: 'heal-challenge',
    question: 'Will the HEAL Challenge work with any reusable pad, or only Saukhyam?',
    paragraphs: [
      'The core principle — removing chemical exposure — will work with any high-quality reusable pad that is cotton-cloth based and uses natural, toxin-free materials. It should work with any reusable period product.',
      'However, Saukhyam is the only product we have 2+ years of documented case studies with. We can only guarantee refunds for our own product.',
    ],
  },
  {
    id: 'hc-10',
    category: 'heal-challenge',
    question: 'What if I have a structural condition like endometriosis or fibroids?',
    paragraphs: [
      'Structural conditions will not completely resolve from a pad switch alone — and we are honest about this. However, your overall period experience (pain levels, regularity, discomfort) is very likely to improve. The experience gets better even if the underlying condition needs separate medical attention.',
    ],
  },
  {
    id: 'hc-11',
    category: 'heal-challenge',
    question: 'Do I need to make a 100% shift from day one?',
    paragraphs: [
      'Ideally yes — healing depends on completely removing the chemical source. But if you cannot switch all at once, use the 2-3-4 formula: 2 days in Month 1, 3 in Month 2, 4+ in Month 3. Allow 3 months for transition + 3 months of complete usage = the full 6-month challenge.',
    ],
  },
  {
    id: 'hc-12',
    category: 'heal-challenge',
    question: 'What if my periods are very irregular and I skip months?',
    paragraphs: [
      'The HEAL Challenge works even for highly irregular cycles. Whenever your period arrives, use reusable pads. The goal is to accumulate at least 2–3 full cycles of reusable use within 6 months. Even if periods come every 2–3 months, the window is designed to give you enough opportunity to see results.',
    ],
  },
  {
    id: 'hc-13',
    category: 'heal-challenge',
    question: 'What about nutrition, exercise, and sleep?',
    paragraphs: [
      'All lifestyle factors contribute to hormonal balance, and we encourage healthy habits. But we are not nutrition or exercise experts, and we do not prescribe these as part of the HEAL Challenge.',
      'Our focus is the one intervention that is most overlooked and most impactful: removing the primary environmental toxin source from your period routine.',
    ],
  },
  {
    id: 'hc-14',
    category: 'heal-challenge',
    question: 'How do I officially enroll, and how does the refund process work?',
    paragraphs: [
      'Before you purchase Saukhyam pads for the HEAL Challenge, fill in the enrollment form describing your period problems. If after 6 months you wish to claim a refund, fill in the return form and mail your used pads back to us. We process a full refund. These forms can be accessed from the Enroll in HEAL Challenge section on this page.',
    ],
  },

  /* ── Menstrual Health ── */
  {
    id: 'mh-1',
    category: 'menstrual-health',
    question: 'What is menstruation?',
    paragraphs: [
      'Menstruation is the monthly shedding of the uterine lining when pregnancy does not occur. Every month, the body prepares for the possibility of pregnancy by building a soft, nutrient-rich lining inside the uterus. If fertilization does not happen, the body releases this lining — that release is what we experience as a period.',
      'It is not a "waste removal process" like urine or feces. It is part of a reproductive cycle designed to support life.',
    ],
  },
  {
    id: 'mh-2',
    category: 'menstrual-health',
    question: 'Understanding the menstrual cycle',
    paragraphs: [
      'The menstrual cycle is not just "bleeding days." It is a continuous hormonal cycle that typically lasts 21–35 days with four phases:',
    ],
    bullets: [
      'Menstrual phase – bleeding occurs',
      'Follicular phase – body prepares an egg',
      'Ovulation – egg is released',
      'Luteal phase – body prepares for possible pregnancy',
    ],
  },
  {
    id: 'mh-3',
    category: 'menstrual-health',
    question: 'Why do periods happen every month?',
    paragraphs: [
      'Periods happen because the body is preparing for pregnancy every month. If pregnancy does not occur, hormone levels drop, the uterine lining is no longer needed, and the body sheds it. Menstruation is a sign of an active reproductive system, not a malfunction.',
    ],
  },
  {
    id: 'mh-4',
    category: 'menstrual-health',
    question: 'At what age do periods usually start?',
    paragraphs: [
      'Most girls begin menstruating between 10 and 15 years of age. This first period is called menarche. However, an early start (before 10) or late start (after 15–16) may need attention, especially if accompanied by other symptoms.',
    ],
  },
  {
    id: 'mh-5',
    category: 'menstrual-health',
    question: 'When do periods stop (menopause)?',
    paragraphs: [
      'Periods usually stop between 45 and 55 years of age. This stage is called menopause, when ovaries stop releasing eggs and hormone levels decline. Before menopause, many women experience perimenopause, where cycles become irregular.',
    ],
  },
  {
    id: 'mh-6',
    category: 'menstrual-health',
    question: 'Is it normal to feel different during periods?',
    paragraphs: [
      'Yes — and this is often misunderstood. Hormonal fluctuations can affect mood, energy levels, appetite, and sleep. This is not "imaginary" — it is biological. However, extreme emotional distress or severe symptoms may need attention.',
    ],
  },
  {
    id: 'mh-7',
    category: 'menstrual-health',
    question: 'Why do some girls have more problems than others?',
    paragraphs: ['Menstrual health varies due to:'],
    bullets: [
      'Hormonal balance — each person\'s hormone levels and sensitivity differ',
      'Lifestyle factors — diet, sleep, stress, physical activity',
      'Environmental exposure — certain chemicals like endocrine disruptors may affect hormonal balance',
      'Product choice — what you use during periods may influence comfort and exposure',
    ],
  },
  {
    id: 'mh-8',
    category: 'menstrual-health',
    question: 'Are periods supposed to be painful?',
    paragraphs: [
      'This is one of the biggest misconceptions. Mild discomfort is common. Severe pain is not normal.',
      'If pain stops daily activity, requires frequent medication, or worsens over time, it may indicate an underlying issue. Pain is a signal, not something to normalize.',
      'Many girls who have switched to reusable pads have reported that their cramps eased considerably over a period of 3–4 months.',
    ],
  },
  {
    id: 'mh-9',
    category: 'menstrual-health',
    question: 'What is a healthy period?',
    paragraphs: ['A healthy period is typically:'],
    bullets: [
      'Regular (predictable cycle)',
      'Manageable (no severe pain)',
      'Balanced (not too heavy or too light)',
      'Short (3–7 days)',
    ],
  },
  {
    id: 'mh-10',
    category: 'menstrual-health',
    question: 'Can periods tell us about overall health?',
    paragraphs: [
      'Yes — periods are often called a "monthly report card" of health. Changes in your cycle can indicate hormonal imbalance, nutritional deficiencies, stress levels, or underlying conditions like PCOS.',
      'For example: irregular cycles may signal hormonal imbalance; heavy bleeding may indicate an underlying issue; missed periods may reflect systemic stress or imbalance.',
    ],
  },

  /* ── Your Cycle ── */
  {
    id: 'cy-1',
    category: 'cycle',
    question: 'What is a normal menstrual cycle length?',
    paragraphs: [
      'A normal menstrual cycle is typically between 21 and 35 days long. Day 1 is the first day of bleeding, and the cycle ends the day before the next period begins. Variation is normal, but persistent irregularity would require attention.',
    ],
  },
  {
    id: 'cy-1b',
    category: 'cycle',
    question: 'Is a 28-day cycle the only normal cycle?',
    paragraphs: [
      'No. Menstrual cycles between 21 and 35 days are generally considered normal. Many people assume 28 days is standard, but the key is predictability over time, not perfection.',
    ],
  },
  {
    id: 'cy-2',
    category: 'cycle',
    question: 'What are the four phases of the menstrual cycle?',
    paragraphs: ['The menstrual cycle includes four interconnected phases:'],
    bullets: [
      'Menstrual phase – bleeding occurs, hormones are low',
      'Follicular phase – body prepares an egg, estrogen rises',
      'Ovulation phase – egg is released, peak fertility',
      'Luteal phase – progesterone rises; if no pregnancy, hormones drop and the next period begins',
    ],
  },
  {
    id: 'cy-3',
    category: 'cycle',
    question: 'What is ovulation and why is it important?',
    paragraphs: [
      'Ovulation is when the ovary releases an egg. It is the central event of the cycle. Regular ovulation indicates healthy hormonal function.',
      'If ovulation does not occur regularly, cycles may become irregular and hormonal imbalance may increase. Many menstrual problems are actually ovulation problems in disguise.',
    ],
  },
  {
    id: 'cy-4',
    category: 'cycle',
    question: 'How do hormones affect my cycle?',
    paragraphs: [
      'Estrogen builds the uterine lining, increases energy and mood, and is dominant in the first half of the cycle. Progesterone stabilizes the lining, supports calmness, and is dominant in the second half.',
      'When these hormones are balanced, cycles are regular and symptoms are minimal. When disrupted, irregular periods, pain, and mood changes can follow.',
    ],
  },
  {
    id: 'cy-5',
    category: 'cycle',
    question: 'Why does my cycle change sometimes?',
    paragraphs: [
      'Cycle changes can happen due to stress, travel, illness, sleep disruption, or dietary changes. Occasional variation is normal, but frequent changes indicate underlying imbalance.',
    ],
  },
  {
    id: 'cy-6',
    category: 'cycle',
    question: 'How do I calculate my cycle length?',
    paragraphs: [
      'Mark Day 1 as the first day of bleeding. Count until the day before your next period. That number is your cycle length. For example: Day 1 on Jan 1, next period on Jan 29 = 28-day cycle. Tracking this over months reveals patterns.',
    ],
  },
  {
    id: 'cy-7',
    category: 'cycle',
    question: 'What is considered a regular vs irregular cycle?',
    paragraphs: [
      'A regular cycle has consistent length (within 2–3 days variation) and predictable timing. An irregular cycle is unpredictable, frequently missed, or widely varying in length.',
      'Irregularity is one of the earliest signs of hormonal imbalance, stress overload, or conditions like PCOS.',
    ],
  },
  {
    id: 'cy-8',
    category: 'cycle',
    question: 'How does stress affect my cycle?',
    paragraphs: [
      'Stress affects the cycle through the brain-hormone connection. The hypothalamus controls hormone release and ovulation timing. When stress increases, cortisol rises and hormonal signals get disrupted.',
      'This can lead to delayed periods, missed ovulation, and irregular cycles. Your cycle is highly sensitive to your environment.',
    ],
  },
  {
    id: 'cy-9',
    category: 'cycle',
    question: 'Why tracking your cycle changes everything',
    paragraphs: [
      'Tracking is not just recording dates. It helps you understand patterns, triggers, and improvements — such as pain reducing over months, cycles becoming regular, or mood stabilizing.',
      'This is exactly why HEAL emphasizes tracking. What gets tracked gets understood. What gets understood can improve.',
    ],
  },

  /* ── Period Problems ── */
  {
    id: 'pp-1',
    category: 'period-problems',
    question: 'Why are my periods irregular?',
    paragraphs: [
      'Irregular periods can occur due to hormonal imbalances, stress, lifestyle factors, PCOS/PMOS, and other health conditions. Cycles that are unpredictable, inconsistent in timing, or sometimes skipped altogether are often early signs that something is off internally.',
    ],
  },
  {
    id: 'pp-1b',
    category: 'period-problems',
    question: 'My periods come after 40 days. Is that normal?',
    paragraphs: [
      'Menstrual cycles longer than 35 days would be considered irregular and would warrant further evaluation, especially if this happens repeatedly.',
    ],
  },
  {
    id: 'pp-3',
    category: 'period-problems',
    question: 'Why are my periods painful?',
    paragraphs: [
      'Period pain can have many causes. It is also extremely common — in our studies, nearly 3 out of 4 menstruators reported experiencing moderate to severe cramps.',
      'Many girls participating in HEAL have reported that their cramps reduced within a few months of switching to reusable menstrual products. If your periods are consistently painful, it may be worth taking a closer look at the products and practices that are part of your menstrual routine.',
      'For some girls and women, period pain may be linked to conditions such as dysmenorrhea, endometriosis, fibroids, or PMOS/PCOS. If your pain is severe or interfering with daily life, it is important to consult a healthcare professional.',
    ],
  },
  {
    id: 'pp-3b',
    category: 'period-problems',
    question: 'I get severe cramps every month. What should I do?',
    paragraphs: [
      'Extremely severe cramps may be a sign of dysmenorrhea or another underlying condition. If your pain is severe, please consult a healthcare professional.',
      'In our studies, nearly 3 out of 4 menstruators reported experiencing moderate to severe cramps. Many HEAL participants report that cramps reduce within a few months of switching to reusables. If your periods are consistently painful, it may be worth rethinking the menstrual products you use every month.',
    ],
  },
  {
    id: 'pp-2',
    category: 'period-problems',
    question: 'Why are my periods delayed?',
    paragraphs: ['Common reasons include:'],
    bullets: [
      'Stress — even emotional stress can delay ovulation',
      'Hormonal imbalance — if ovulation is delayed, periods are delayed',
      'Lifestyle changes — travel, sleep disruption, diet shifts',
      'Underlying conditions such as PCOS',
    ],
  },

  {
    id: 'pp-4',
    category: 'period-problems',
    question: 'What causes heavy or prolonged bleeding?',
    paragraphs: [
      'Heavy bleeding may include soaking pads every 1–2 hours, bleeding beyond 7 days, or large clots. Possible causes include hormonal imbalance, fibroids, thyroid issues, or PCOS.',
      'Heavy bleeding can lead to fatigue and iron deficiency.',
    ],
  },
  {
    id: 'pp-5',
    category: 'period-problems',
    question: 'Why do I feel weak or tired during periods?',
    paragraphs: ['Fatigue during periods can happen due to:'],
    bullets: [
      'Blood loss, especially in heavy periods',
      'Hormonal drop — estrogen and progesterone decrease',
      'Nutritional factors — iron deficiency is common',
      'Poor sleep or stress',
    ],
  },
  {
    id: 'pp-6',
    category: 'period-problems',
    question: 'Why are my periods suddenly different?',
    paragraphs: [
      'Many girls say "My periods were fine earlier… now something has changed." Changes can be triggered by lifestyle shifts, stress, diet, or environmental exposure. The body is dynamic, but sudden and sustained changes are signals, not coincidences.',
    ],
  },
  {
    id: 'pp-7',
    category: 'period-problems',
    question: 'Why do we sometimes miss periods?',
    paragraphs: [
      'Missing a period can happen due to stress, hormonal imbalance, extreme weight changes, PCOS, or illness. If occasional, it is not always concerning. If frequent, it needs deeper understanding.',
    ],
  },

  /* ── PCOS ── */
  {
    id: 'pc-1',
    category: 'pcos',
    question: 'What is PCOS?',
    paragraphs: [
      'PCOS, now known as PMOS, is a hormonal condition that can lead to irregular periods and other menstrual health problems. The full form of PCOS is Polycystic Ovary Syndrome. PMOS is Polyendocrine Metabolic Ovarian Syndrome.',
      'The HEAL Challenge was designed to support girls and women experiencing these kinds of conditions.',
    ],
  },
  {
    id: 'pc-1b',
    category: 'pcos',
    question: 'What is PMOS?',
    paragraphs: [
      'PMOS is the new name of PCOS. It is a hormonal condition that can lead to irregular periods and other menstrual health problems. The full form of PMOS is Polyendocrine Metabolic Ovarian Syndrome.',
      'The HEAL Challenge was designed to support girls and women experiencing these kinds of conditions.',
    ],
  },
  {
    id: 'pc-2',
    category: 'pcos',
    question: 'What are early signs of PCOS/PMOS?',
    paragraphs: ['Common early signs include:'],
    bullets: [
      'Irregular or missed periods',
      'Painful periods',
      'Abnormally heavy bleeding',
      'Acne',
      'Unwanted facial hair',
      'Weight gain',
      'Difficulty conceiving',
    ],
  },
  {
    id: 'pc-3',
    category: 'pcos',
    question: 'Why is PCOS so common today?',
    paragraphs: ['Possible contributing factors include:'],
    bullets: [
      'Lifestyle changes — processed food, sedentary routines, poor sleep',
      'Chronic stress disrupting hormonal signaling',
      'Environmental exposure — endocrine-disrupting chemicals (EDCs)',
      'Increased awareness and diagnosis',
    ],
  },
  {
    id: 'pc-4',
    category: 'pcos',
    question: 'Can PCOS/PMOS be cured?',
    paragraphs: [
      'Doctors say there is no single "cure" for PCOS/PMOS. But many girls and women are able to successfully manage their symptoms and improve their menstrual health through lifestyle changes and interventions like the HEAL Challenge.',
      'Many experience improvements in cycle regularity, period pain, heavy bleeding, and other symptoms. You can also work with a qualified healthcare professional to determine the best approach for your individual situation.',
    ],
  },
  {
    id: 'pc-4b',
    category: 'pcos',
    question: 'Does PCOS/PMOS always mean ovarian cysts?',
    paragraphs: [
      'No. Not everyone with PCOS/PMOS has ovarian cysts. PCOS/PMOS is a hormonal condition. Many girls with PCOS/PMOS have irregular periods or other symptoms even when ovarian cysts are not present.',
    ],
  },
  {
    id: 'pc-5',
    category: 'pcos',
    question: 'Can PCOS improve naturally?',
    paragraphs: ['Symptoms may improve with:'],
    bullets: [
      'Lifestyle changes and better metabolic health',
      'Reduced stress',
      'Improved hormonal balance',
      'Reducing exposure to certain chemicals',
    ],
  },
  {
    id: 'pc-6',
    category: 'pcos',
    question: 'Is irregular period always PCOS?',
    paragraphs: [
      'No. Irregular periods can be caused by stress, lifestyle changes, thyroid issues, or temporary hormonal fluctuations. PCOS is just one possible cause, not the only one.',
    ],
  },
  {
    id: 'pc-7',
    category: 'pcos',
    question: 'What role do environmental toxins play in PCOS/PMOS?',
    paragraphs: [
      'Nobody knows the exact cause of PCOS/PMOS. What science does confirm is that endocrine-disrupting chemicals (dioxins, phthalates, VOCs) interfere with the hormonal systems that regulate the menstrual cycle.',
      'The vaginal route of absorption is especially significant because these chemicals bypass the liver and enter the bloodstream directly. Even small trace amounts can have a disproportionate hormonal effect.',
      'Research increasingly shows higher exposure to endocrine disruptors is associated with PCOS/PMOS.',
    ],
  },
  {
    id: 'pc-8',
    category: 'pcos',
    question: 'What lifestyle changes help PCOS?',
    paragraphs: ['Key areas include:'],
    bullets: [
      'Nutrition — balanced, whole foods support hormone health',
      'Physical activity — improves insulin sensitivity',
      'Sleep — regulates hormonal cycles',
      'Stress management — reduces hormonal disruption',
      'Reducing exposure — limiting contact with potential endocrine disruptors',
    ],
  },

  /* ── Endocrine Disruption ── */
  {
    id: 'ho-1',
    category: 'hormones',
    question: 'What are hormones?',
    paragraphs: [
      'Hormones are chemical messengers in the body. They travel through the bloodstream and tell different organs what to do. Estrogen and progesterone regulate the menstrual cycle; insulin regulates blood sugar; cortisol responds to stress.',
      'Even small changes in hormone levels can have noticeable effects because hormones work in precise balance, not in isolation.',
    ],
  },
  {
    id: 'ho-2',
    category: 'hormones',
    question: 'What are endocrine disruptors?',
    paragraphs: [
      'Endocrine disruptors are chemicals that interfere with normal hormone function. They mimic hormones, block hormone signals, or alter the way hormones are produced, transported, or used by the body.',
      'Research has identified known endocrine-disrupting chemicals in disposable sanitary napkins. HEAL is based on the hypothesis that reducing repeated exposure to such chemicals helps support better menstrual health.',
    ],
  },
  {
    id: 'ho-2b',
    category: 'hormones',
    question: 'Do disposable pads contain chemicals?',
    paragraphs: [
      'Yes. Many studies have detected chemicals such as phthalates, volatile organic compounds (VOCs), and dioxins in disposable sanitary napkins. Many of these chemicals are known endocrine disruptors.',
      'They originate from the materials used to manufacture the pad, including plastics, adhesives, fragrances, and absorbent gels. At HEAL, we believe girls and women deserve full transparency about the products they use every month.',
    ],
  },
  {
    id: 'ho-2c',
    category: 'hormones',
    question: 'Can disposable pads affect hormones?',
    paragraphs: [
      'Many chemicals found in sanitary napkins are known endocrine disruptors. Studies suggest that repeated exposure to these endocrine-disrupting chemicals would affect hormonal balance over time.',
    ],
  },
  {
    id: 'ho-3',
    category: 'hormones',
    question: 'Where do these chemicals come from?',
    paragraphs: [
      'Endocrine disruptors are present in everyday life: plastics, cosmetics, personal care products, food packaging, pesticides, and menstrual products. Exposure is often low-dose but continuous.',
    ],
  },
  {
    id: 'ho-4',
    category: 'hormones',
    question: 'How do these chemicals enter the body?',
    paragraphs: ['There are multiple pathways:'],
    bullets: [
      'Skin absorption — from products applied on the body',
      'Inhalation — from air, sprays, fragrances',
      'Ingestion — through food and water',
      'Mucosal absorption — especially important for menstrual health; the vaginal area is highly permeable and substances can enter directly into the bloodstream, bypassing some natural detox pathways',
    ],
  },
  {
    id: 'ho-5',
    category: 'hormones',
    question: 'Can reducing exposure improve health?',
    paragraphs: [
      'In many cases, reducing exposure can support hormonal balance, reduce unnecessary stress on the body, and allow natural regulatory systems to function better. This does not mean instant change, but over time the body may respond positively.',
    ],
  },
  {
    id: 'ho-6',
    category: 'hormones',
    question: 'How long does it take for hormones to rebalance?',
    paragraphs: [
      'There is no fixed timeline. Hormonal systems take time because they operate in cycles and changes are gradual. For menstrual health, one cycle is roughly one month, and meaningful patterns are often seen over 3–6 cycles. This is why programs like HEAL are designed for 6 months.',
    ],
  },

  /* ── Disposable vs Reusable ── */
  {
    id: 'pr-1',
    category: 'products',
    question: 'Which is safer: disposable or reusable?',
    paragraphs: [
      'Safety depends on multiple factors. Disposable pads contain synthetic materials and may include chemical residues. Reusable pads are typically made from natural fabrics with minimal chemical processing.',
      'From a material exposure perspective, reusable options generally involve fewer synthetic inputs. However, safety also depends on how products are used and maintained.',
    ],
  },
  {
    id: 'pr-2',
    category: 'products',
    question: 'Which is more cost-effective?',
    paragraphs: [
      'Disposable pads involve recurring monthly cost and continuous purchase. Reusable pads are a one-time purchase used for years. Over 3–5 years, reusable products are significantly more economical.',
    ],
  },
  {
    id: 'pr-3',
    category: 'products',
    question: 'Which is more comfortable?',
    paragraphs: [
      'Comfort is subjective, but patterns emerge. Disposable pads may feel dry initially but can feel plastic-like over time and may cause irritation. Reusable pads offer a softer fabric feel, more breathability, and adapt to body movement. Many users report improved comfort after switching, though an initial adjustment period is common.',
    ],
  },
  {
    id: 'pr-4',
    category: 'products',
    question: 'Do reusables reduce rashes?',
    paragraphs: [
      'Rashes can occur due to moisture retention, friction, or material sensitivity. Reusable pads are breathable and reduce moisture buildup. Many users experience reduction in rashes and irritation.',
    ],
  },
  {
    id: 'pr-5',
    category: 'products',
    question: 'Are reusables environmentally better?',
    paragraphs: [
      'Disposable pads are single-use, contain plastic, and contribute to landfill waste. Reusable pads are used for years and generate minimal waste. One user switching can prevent hundreds of pads from entering landfills.',
    ],
  },
  {
    id: 'pr-6',
    category: 'products',
    question: 'Why are reusables not widely adopted yet?',
    paragraphs: [
      'The barriers are not technical — they are habit, perception, awareness, and social conditioning. Common beliefs like "washing is dirty," "it will leak," or "it is inconvenient" are perception barriers, not product barriers.',
    ],
  },

  /* ── Concerns & Myths ── */
  {
    id: 'cm-1',
    category: 'concerns',
    question: 'Are reusable pads hygienic?',
    paragraphs: [
      'Absolutely. Reusable pads offer the safest, most comfortable, and totally hygienic way to manage periods. Saukhyam pads are used by more than 30 lakh girls and women across India. Most users say that washing and caring for them is much easier than they initially expected.',
      'At HEAL, we believe periods don\'t need chemicals, fragrances, or synthetic materials. With a simple wash-and-reuse routine, reusable pads can comfortably become a part of your monthly cycle.',
    ],
  },
  {
    id: 'cm-2',
    category: 'concerns',
    question: 'How do I wash reusable pads?',
    paragraphs: ['It\'s very simple:'],
    bullets: [
      'Rinse the pad in normal tap water after use. You can also soak it for a few minutes before rinsing',
      'Wash it by hand using soap, just as you would wash your other undergarments',
      'Do not use a brush. Reusable pads do not generally stain, and vigorous brushing can damage the delicate cotton fabric',
      'Dry the pad completely before storing it. Sunlight is ideal, but open-air drying works well too',
      'Store it in a clean, dry place until the next cycle',
    ],
  },
  {
    id: 'cm-2b',
    category: 'concerns',
    question: 'What if I feel uncomfortable washing reusable pads?',
    paragraphs: [
      'That\'s completely normal. Menstrual blood is what nourished us when we were in our mother\'s womb. It is not a waste product like urine or feces. It does not smell.',
      'If you have spent your entire life using disposable products, the idea of washing a menstrual pad can feel unfamiliar at first. The good news is that most users find the process much easier than they expected. Handling and washing a reusable pad is no different from washing any other undergarment.',
    ],
  },
  {
    id: 'cm-3',
    category: 'concerns',
    question: 'Do reusable pads smell?',
    paragraphs: [
      'No. In fact, this is one of the biggest surprises for new users.',
      'Many girls and women may spend their entire lives thinking periods naturally smell bad. When they switch to reusables, they realize the nasty odor they associated with periods was never the period itself — it was the disposable sanitary napkin.',
    ],
  },
  {
    id: 'cm-4',
    category: 'concerns',
    question: 'Are reusable pads expensive?',
    paragraphs: [
      'Quite the opposite. While reusable pads cost more upfront, they help reduce recurring spending on menstrual products by up to 90%.',
      'Think of it like buying a reusable water bottle — it costs more than a disposable bottle on day one, but it saves money every time you refill it. The same is true for reusable pads: the investment is made once, then they can be used again and again for years.',
    ],
  },
  {
    id: 'cm-4b',
    category: 'concerns',
    question: 'Is drying reusable pads in sunlight safe?',
    paragraphs: [
      'Absolutely. Sunlight offers one of the best ways to dry reusable pads. But if direct sunlight is not available, drying them in a well-ventilated area works fine. The most important thing is to ensure the pad is completely dry before storing or reusing it.',
    ],
  },
  {
    id: 'cm-5',
    category: 'concerns',
    question: 'Are disposables more convenient?',
    paragraphs: [
      'Yes — disposables are designed for immediate convenience with no washing or reuse. But convenience comes with recurring cost, waste, repeated exposure, and rashes. Reusable products trade short-term convenience for long-term benefits.',
    ],
  },
  {
    id: 'cm-6',
    category: 'concerns',
    question: 'Do reusables really work?',
    paragraphs: [
      'Many users report improved comfort, reduced irritation, and better overall experience. Many also observe improvements in cycle patterns. Results are gradual and vary by individual.',
    ],
  },

  /* ── User Stories (detailed case studies version) ── */
  {
    id: 'us-1',
    category: 'stories',
    question: 'Have people actually seen improvements with HEAL?',
    paragraphs: [
      'Most girls and women who have completed the HEAL Challenge report benefits such as reduced pain, improved cycle regularity, fewer rashes, and more comfortable periods. The key is to make a 100% shift to reusable menstrual products and stay consistent.',
      'Across users who have used Saukhyam for 6 months to 8+ years, improvements are real but gradual. Experiences vary, but the direction is consistent.',
    ],
  },
  {
    id: 'us-5',
    category: 'stories',
    question: 'How long does it take to notice changes?',
    paragraphs: [
      'Some girls notice improvements within a few months, while for others it can take 4–6 months. The key is to make a 100% shift to reusable menstrual products and stay consistent. The sooner you make the switch, the sooner your healing begins.',
      'Rashes and irritation are often the first improvements, sometimes visible within weeks.',
    ],
  },
  {
    id: 'us-2',
    category: 'stories',
    question: 'Can period pain really reduce?',
    paragraphs: [
      'Many users began with severe, life-disrupting pain — some required hospital injections or 3–4 painkillers per day. After switching, pain reduced significantly and in some cases disappeared completely.',
      'Others report pain that is not zero but far more manageable without heavy medication.',
    ],
  },
  {
    id: 'us-3',
    category: 'stories',
    question: 'Can periods become regular again?',
    paragraphs: [
      'Users with gaps of months between cycles reported that within 6 months, periods became completely regular without medication. In long-term users, regularity was sustained over years.',
    ],
  },
  {
    id: 'us-4',
    category: 'stories',
    question: 'Are there PCOS improvement stories?',
    paragraphs: [
      'Several users with PCOS shared long-term outcomes including reduced pain, improved cycle frequency, and reduction in symptoms like acne and hair fall. In one case, cysts reduced significantly and eventually became cyst-free on ultrasound.',
    ],
  },

  {
    id: 'us-6',
    category: 'stories',
    question: 'What about users who didn\'t see full change?',
    paragraphs: [
      'Not every user reported complete elimination of all symptoms. Some still have pain but find it manageable, or underlying conditions still exist. But even then, comfort improved significantly and dependency on medication reduced.',
      'These are real lived experiences across ages 22 to 47, different conditions, and different geographies — not clinical trials, but real change in real lives.',
    ],
  },

  /* ── Medical Help ── */
  {
    id: 'md-1',
    category: 'medical',
    question: 'When should I see a doctor?',
    paragraphs: [
      'While many menstrual concerns can improve with awareness and lifestyle changes, some situations require medical evaluation. Consider seeing a doctor if your periods are consistently irregular, you experience severe pain, or symptoms interfere with daily life.',
    ],
  },
  {
    id: 'md-2',
    category: 'medical',
    question: 'What symptoms are considered serious?',
    paragraphs: ['Certain symptoms should not be ignored:'],
    bullets: [
      'Severe or worsening pain',
      'Very heavy bleeding (soaking frequently)',
      'Bleeding lasting more than 7–8 days',
      'Missed periods for several months (not due to pregnancy)',
    ],
  },
  {
    id: 'md-3',
    category: 'medical',
    question: 'Can I combine HEAL with medical treatment?',
    paragraphs: [
      'Yes. HEAL can complement medical care by improving awareness, supporting lifestyle changes, and enabling tracking. It is not a replacement — it is a support system.',
    ],
  },
  {
    id: 'md-4',
    category: 'medical',
    question: 'What is the role of a doctor vs self-care?',
    paragraphs: [
      'Doctors help with diagnosis, treatment, and medical management. Self-care (like HEAL) helps with awareness, daily habits, and consistency. The best outcomes often come from combining both.',
    ],
  },
  {
    id: 'md-4b',
    category: 'medical',
    question: 'I have severe bleeding and feel dizzy. What should I do?',
    paragraphs: [
      'Severe bleeding and dizziness would require urgent medical attention. You should contact a healthcare professional immediately.',
    ],
  },

  /* ── Environment ── */
  {
    id: 'en-1',
    category: 'environment',
    question: 'How much menstrual waste does one person create?',
    paragraphs: [
      'A menstruator may use approximately 8,000–12,000 disposable sanitary napkins during their lifetime. This translates to over 100 kg of menstrual waste.',
    ],
  },
  {
    id: 'en-2',
    category: 'environment',
    question: 'How long do disposable pads take to decompose?',
    paragraphs: [
      'Disposable pads can take hundreds of years to decompose because plastic does not break down easily and materials are layered and processed. Pads used today may remain in landfills for generations.',
    ],
  },
  {
    id: 'en-3',
    category: 'environment',
    question: 'What is the carbon footprint of sanitary pads?',
    paragraphs: [
      'The environmental impact comes from raw material extraction, manufacturing, packaging, transportation, and disposal. Each stage contributes to carbon emissions.',
      'One girl who shifts to reusable menstrual products prevents the emission of 5.8 kg carbon dioxide equivalent annually, every year for the rest of her menstruating lifetime.',
    ],
  },
  {
    id: 'en-4',
    category: 'environment',
    question: 'Can one person really make a difference by switching?',
    paragraphs: [
      'Your periods are yours. If switching helps you experience more comfortable periods and freedom from period problems, then that one decision can make a big difference over your menstruating lifetime.',
      'The environmental impact is a bonus. What is good for our bodies is what is good for the planet too. One girl who shifts to reusable menstrual products prevents the emission of 5.8 kg carbon dioxide equivalent annually.',
    ],
  },
  {
    id: 'en-5b',
    category: 'environment',
    question: 'Are reusable products better for the environment?',
    paragraphs: [
      'Yes. Reusable menstrual products are a climate-positive solution. A single reusable pad can replace hundreds of disposable sanitary napkins over its lifetime, significantly reducing the amount of waste sent to landfills.',
      'By choosing reusables, you are not only reducing your environmental footprint but also helping create a more sustainable future for generations to come.',
    ],
  },
  {
    id: 'en-5',
    category: 'environment',
    question: 'How does HEAL connect health and climate?',
    paragraphs: [
      'HEAL sits at the intersection of personal health and environmental sustainability. By shifting products and habits, individual health may improve while environmental impact reduces — creating a dual benefit system.',
    ],
  },

  /* ── Community ── */
  {
    id: 'co-1',
    category: 'community',
    question: 'Can I connect with other users?',
    paragraphs: [
      'Yes. One of the most powerful parts of this journey is realizing you are not alone. Many users share similar concerns, face similar challenges, and go through similar transitions.',
    ],
  },
  {
    id: 'co-2',
    category: 'community',
    question: 'Is there a support community?',
    paragraphs: [
      'Yes. HEAL offers WhatsApp-based community support where users can ask questions and share experiences. As part of CARE, we also regularly do offline workshops on college campuses.',
    ],
  },
  {
    id: 'co-3',
    category: 'community',
    question: 'Can I ask questions anonymously?',
    paragraphs: [
      'Yes. Users can send questions to our doctors. Answers will be provided in your DMs. You can also send your question or experience to the admin who will post it anonymously in the community.',
    ],
  },
  {
    id: 'co-4',
    category: 'community',
    question: 'Can I share my story?',
    paragraphs: [
      'Absolutely. Sharing your story helps others relate, builds trust, and inspires action. Many movements grow through shared experience, not just information.',
    ],
  },

  /* ── Research ── */
  {
    id: 'rs-1',
    category: 'research',
    question: 'What does research say about menstrual products?',
    paragraphs: [
      'Recent peer-reviewed studies have consistently found that disposable menstrual products contain multiple chemical compounds including phthalates, parabens, volatile organic compounds (VOCs), heavy metals, and microplastics.',
      'Several large reviews confirm that exposure pathways exist through skin and mucosal absorption.',
    ],
  },
  {
    id: 'rs-2',
    category: 'research',
    question: 'What kinds of chemicals are found?',
    paragraphs: ['Research has identified:'],
    bullets: [
      'Phthalates (used in plastics and adhesives)',
      'Bisphenols (BPA-like compounds)',
      'VOCs (e.g., toluene)',
      'Heavy metals (lead, cadmium, arsenic)',
      'Microplastic particles',
    ],
  },
  {
    id: 'rs-2b',
    category: 'research',
    question: 'What high-risk chemicals are found in disposable pads?',
    paragraphs: ['Research from 11 peer-reviewed studies reports:'],
    bullets: [
      'Phthalates — endocrine disruptors linked to early puberty, irregular cycles, and ovarian dysfunction',
      'Dioxins — carcinogenic compounds from chlorine bleaching of pad materials',
      'VOCs (Toluene etc.) — volatile organic compounds causing headaches, dizziness, and hormonal disruption',
      'BPA (Bisphenol A) — linked to PCOS/PMOS in 22 human studies',
      'Heavy metals — lead, cadmium, arsenic, mercury; neurotoxic and accumulate in the body over time',
    ],
  },
  {
    id: 'rs-2c',
    category: 'research',
    question: 'What moderate-risk chemicals are found in disposable pads?',
    paragraphs: ['Additional compounds identified in research include:'],
    bullets: [
      'Parabens — preservatives that mimic estrogen; linked to hormonal imbalance',
      'Pesticide residues — found in Indian brands; linked to chronic inflammation and infertility',
      'Microplastics — shed from pad surfaces during use; long-term effects under study',
      'Fragrances — synthetic chemicals causing allergic reactions and skin sensitization',
      'SAP (Super Absorbent Polymers) — synthetic gel that creates a humid, bacteria-friendly environment',
    ],
  },
  {
    id: 'rs-6',
    category: 'research',
    question: 'What does the scientific evidence show?',
    paragraphs: ['Recent scientific research on disposable sanitary napkins includes:'],
    bullets: [
      '11 peer-reviewed studies published in leading journals including BJOG, Environment International, and PLOS ONE',
      '8 countries tested — heavy metals identified in pads from China, Japan, South Korea, India, USA, UK, Australia, and Germany',
      '22 human studies on BPA–PCOS/PMOS link — most reporting higher BPA exposure among women with PCOS/PMOS',
      'Higher chemical load in Indian pads — Indian brands reported higher concentrations compared with products from the US, EU, and Japan',
    ],
  },
  {
    id: 'rs-3',
    category: 'research',
    question: 'What does India-specific research show?',
    paragraphs: [
      'India-focused studies highlight the presence of pesticide residues and heavy metals, with higher concentrations of certain chemicals compared to global benchmarks. These have been associated with hormonal imbalance, inflammation, and reproductive health concerns.',
    ],
  },
  {
    id: 'rs-4',
    category: 'research',
    question: 'Are these effects proven conclusively?',
    paragraphs: [
      'Current scientific position: there is strong evidence of exposure, established endocrine disruption mechanisms, and growing association with reproductive issues. However, direct causal clinical proof specific to pads is still evolving.',
      'The precautionary approach suggests: if a risk is plausible and exposure is avoidable, it is reasonable to reduce unnecessary exposure.',
    ],
  },
  {
    id: 'rs-5',
    category: 'research',
    question: 'What is the precautionary principle?',
    paragraphs: [
      'The precautionary principle suggests that if something may pose a risk, it is reasonable to reduce exposure even if full scientific certainty is not yet established. This principle is widely used in public health and environmental policy.',
    ],
  },

  /* ── HEAL Platform ── */
  {
    id: 'pl-1',
    category: 'platform',
    question: 'What does the HEAL platform do?',
    paragraphs: [
      'HEAL is your period wellness companion. Many of us know more about skincare routines than about what makes for healthy, comfortable periods. HEAL is here to help change that.',
      'Through HEAL, you can learn more about menstrual health and period problems, get answers to your questions, and take part in the HEAL Challenge. Whether you\'re dealing with cramps, irregular cycles, heavy flow, or simply want to understand your body better, HEAL is here to support you on your journey.',
    ],
  },
  {
    id: 'pl-2',
    category: 'platform',
    question: 'What features are available?',
    paragraphs: ['Key features include:'],
    bullets: [
      'Reminders',
      'Progress dashboard',
      'Guided journey with phased content',
    ],
  },
  {
    id: 'pl-3',
    category: 'platform',
    question: 'Is the platform easy to use?',
    paragraphs: [
      'Yes — it is on WhatsApp, a platform we are already used to. It focuses on simplicity, minimal inputs, and intuitive flow. Users report feeling guided, not overwhelmed.',
    ],
  },
  {
    id: 'pl-4',
    category: 'platform',
    question: 'Is my data safe?',
    paragraphs: [
      'We take data privacy very seriously. User data is securely stored, protected, and not shared without consent. You are safe and in control.',
    ],
  },

  {
    id: 'pl-5',
    category: 'platform',
    question: 'Can HEAL help with nutrition advice?',
    paragraphs: [
      'Nutrition and lifestyle can influence menstrual health, but HEAL is not qualified to provide expert nutrition advice. For personalized recommendations, it is best to consult a qualified nutritionist or healthcare professional.',
    ],
  },
  {
    id: 'pl-6',
    category: 'platform',
    question: 'What should I do after 2 months of the HEAL Challenge?',
    paragraphs: [
      'If you are following the 2-3-4 formula, Month 2 means using reusable pads for 3 days of your cycle. Continue building consistency — the full 6-month challenge includes transition time plus complete reusable use to give your body enough time to respond.',
    ],
  },

  /* ── Data & Vision ── */
  {
    id: 'dv-1',
    category: 'vision',
    question: 'What data does HEAL collect?',
    paragraphs: [
      'HEAL collects structured, user-reported data such as:',
      'Individually, this helps users understand their own bodies. Collectively, it creates a powerful dataset.',
    ],
    bullets: [
      'Cycle length',
      'Pain levels',
      'Flow patterns',
      'Mood and energy',
      'Product usage',
    ],
  },
  {
    id: 'dv-2',
    category: 'vision',
    question: 'How is this data used?',
    paragraphs: ['Data is used to:'],
    bullets: [
      'Identify patterns',
      'Track improvements',
      'Understand trends',
    ],
  },
  {
    id: 'dv-3',
    category: 'vision',
    question: 'Can this data support research?',
    paragraphs: ['Yes. Aggregated data can help:'],
    bullets: [
      'Identify common patterns',
      'Explore links between lifestyle, exposure, and symptoms',
      'Support future studies — especially in areas where existing research is limited',
    ],
  },
  {
    id: 'dv-3b',
    category: 'vision',
    question: 'Can this improve healthcare systems?',
    paragraphs: ['Over time, structured data can:'],
    bullets: [
      'Inform healthcare providers',
      'Highlight unmet needs',
      'Support better interventions',
    ],
  },
  {
    id: 'dv-3c',
    category: 'vision',
    question: 'How does HEAL scale impact?',
    paragraphs: [
      'Impact scales through more users, more data, and more awareness. Each participant contributes to a larger understanding. As participation grows, insights become stronger.',
    ],
  },
  {
    id: 'dv-3d',
    category: 'vision',
    question: 'Can this influence policy?',
    paragraphs: [
      'Yes — over time. Data can highlight trends, support advocacy, and inform policy decisions. This is especially relevant for menstrual health, product safety, and environmental impact.',
    ],
  },
  {
    id: 'dv-3e',
    category: 'vision',
    question: 'Can users contribute to research?',
    paragraphs: [
      'Yes. Every user who tracks consistently and participates in the program is contributing to a growing body of knowledge. This makes users participants, not just recipients.',
    ],
  },
  {
    id: 'dv-4',
    category: 'vision',
    question: 'What is the long-term vision of HEAL?',
    paragraphs: [
      'The long-term vision includes building one of the largest menstrual health datasets, improving awareness at scale, enabling preventive health systems, and ultimately changing how menstrual health is understood and managed.',
    ],
  },
  {
    id: 'dv-5',
    category: 'vision',
    question: 'What makes this approach different?',
    paragraphs: [
      'Most systems operate at the individual level or institutional level. HEAL connects both: individual experience → collective insight → systemic change.',
      'For a long time, menstrual health has been personal, data has been limited, and conversations have been fragmented. HEAL creates visibility, structure, and connection — from one cycle, one person, to a shared understanding.',
    ],
  },
  {
    id: 'dv-6',
    category: 'vision',
    question: 'What begins as tracking your own cycle can become...',
    paragraphs: [
      'What begins as tracking your own cycle can become contributing to a larger shift in how we understand health, environment, and the connection between them.',
    ],
  },
];

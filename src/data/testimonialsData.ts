export interface TestimonialItem {
  id: string;
  name: string;
  occupation: string;
  age: number;
  primaryCondition: string;
  duration: string;
  tags: string[];
  headline: string;
  summary: string;
  pdfUrl: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'story-sujata-nambiar',
    name: 'Sujata Nambiar',
    occupation: 'PhD Scholar',
    age: 46,
    primaryCondition: 'PCOS',
    duration: '4 Years',
    tags: ['PCOS / PMOS', 'Heavy Flow', 'Period Cramps', 'Irregular Periods', 'Rashes & Irritation', 'General Health', 'Long-term', 'All Users'],
    headline: 'From Severe PCOS and Chronic Cramps to Natural Cycle Regularity',
    summary: 'I suffered from severe PCOS for nearly 15 years. My periods were extremely irregular, often accompanied by 20 days of continuous heavy bleeding, painful cramps that caused blackouts, and severe skin rashes from plastic disposable pads. My life revolved around managing pain. After switching to Saukhyam reusable banana-fiber pads, the transformation has been unbelievable. Within three years of consistent use, the painful rashes disappeared entirely, my period cramps reduced to a minimum, and my cycle became regular. Most importantly, my recent ultrasound showed that my ovaries are completely cyst-free.',
    pdfUrl: '/testimonials/sujata_nambiar.pdf'
  },
  {
    id: 'story-laxmi-trylokya',
    name: 'Laxmi Trylokya',
    occupation: 'Software Engineer',
    age: 28,
    primaryCondition: 'PCOS / PMOS',
    duration: '4 Years',
    tags: ['PCOS / PMOS', 'Irregular Periods', 'Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term', 'All Users'],
    headline: 'Overcoming Decades of PCOS Pain and Regaining Skin Comfort',
    summary: 'Every period was a nightmare. I struggled with irregular cycles, severe abdominal pain that stiffened my body, acne, and hair fall. The plastic disposable pads made it worse, causing constant skin irritation and rashes. Since making the switch to Saukhyam pads four years ago, my health has completely turned around. The soft banana-fiber pads are incredibly gentle on my skin, and the painful rashes have disappeared. My periods are now more regular, and my period cramps have become minimal. I no longer dread my menstrual cycle.',
    pdfUrl: '/testimonials/laxmi_trylokya.pdf'
  },
  {
    id: 'story-virginie-manusree',
    name: 'Virginie / Manusree',
    occupation: 'Yoga Teacher',
    age: 34,
    primaryCondition: 'Endometriosis',
    duration: '5 Years',
    tags: ['Endometriosis', 'Heavy Flow', 'Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Significant Endometriosis Relief and Reduction in Ovarian Cyst Size',
    summary: 'I was diagnosed with endometriosis and had a painful 5 cm cyst on my ovary. My periods were incredibly heavy and painful, requiring constant medication. Five years ago, I switched to Saukhyam reusable pads and integrated yoga and dietary adjustments. Today, the ovarian cyst has shrunk from 5 cm to 2 cm, and I am completely off all painkillers. My menstrual flow has normalized, and my periods are almost pain-free. Switching to chemical-free banana-fiber pads allowed my body to recover its natural balance.',
    pdfUrl: '/testimonials/virginie_manusree.pdf'
  },
  {
    id: 'story-shikha',
    name: 'Shikha',
    occupation: 'Primary School Teacher',
    age: 31,
    primaryCondition: 'Heavy Flow',
    duration: '3 Years',
    tags: ['Heavy Flow', 'Irregular Periods', 'Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Heavy Bleeding and Irregular Cycles Stabilized Naturally',
    summary: 'I struggled with heavy flow and irregular periods for years, which made my work as a teacher highly challenging. The constant worry about leaks, combined with painful cramps, left me exhausted. After switching to Saukhyam pads three years ago, I noticed a dramatic reduction in my period pain. My cycles became regular, and the excessive bleeding normalized. The high absorption of natural banana fiber gave me the confidence to carry out my teaching sessions without any discomfort or anxiety.',
    pdfUrl: '/testimonials/shikha.pdf'
  },
  {
    id: 'story-manorama',
    name: 'Manorama',
    occupation: 'Homemaker',
    age: 42,
    primaryCondition: 'Heavy Flow',
    duration: '4 Years',
    tags: ['Heavy Flow', 'Irregular Periods', 'Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Reclaiming Daily Energy and Finding Relief from Heavy Periods',
    summary: 'My periods were extremely heavy and irregular, often lasting for more than a week. I had to deal with severe abdominal cramps that prevented me from handling household chores. After my friend recommended Saukhyam reusable pads, I decided to make a complete switch. Within a few months, my cramps reduced significantly, and the duration of my heavy flow returned to a healthy 4-5 days. The absence of synthetic chemicals in Saukhyam pads has improved my overall energy levels during periods.',
    pdfUrl: '/testimonials/manorama.pdf'
  },
  {
    id: 'story-sunumol',
    name: 'Sunumol',
    occupation: 'Registered Nurse',
    age: 29,
    primaryCondition: 'Period Cramps',
    duration: '2 Years',
    tags: ['Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term', 'All Users'],
    headline: 'Pain-Free Cycles and Total Freedom from Plastic Pad Rashes',
    summary: 'Before my pregnancy, my period pain was so intense that I frequently needed hospital visits for pain relief injections. Disposable pads also caused constant itching and skin peeling. Since switching to Saukhyam pads two years ago, my experience has transformed. I am completely pain-free and barely even notice when my period begins. The itching and rashes have vanished. As a nurse, I highly recommend Saukhyam pads because they are free from synthetic super-absorbents and chemical toxins.',
    pdfUrl: '/testimonials/sunumol.pdf'
  },
  {
    id: 'story-mimasa-rawat',
    name: 'Mimasa Rawat',
    occupation: 'Corporate Consultant',
    age: 25,
    primaryCondition: 'Irregular Periods',
    duration: '2 Years',
    tags: ['Irregular Periods', 'General Health', 'Long-term', 'All Users'],
    headline: 'Natural Cycle Restoration and Elimination of Chemical Rashes',
    summary: 'My periods had become highly irregular, sometimes with gaps of several months between cycles. My mother introduced me to Saukhyam reusable pads. Right from the first month of switching, my periods returned to their regular monthly cycle. I experienced no rashes, no pain, and no skin irritation. It became clear to me that removing disposable plastic pads, which contain harmful chemical residues, allowed my body to recover its natural hormonal rhythm.',
    pdfUrl: '/testimonials/mimasa_rawat.pdf'
  },
  {
    id: 'story-dr-priyanka-yadav',
    name: 'Dr Priyanka Yadav',
    occupation: 'Medical Doctor',
    age: 32,
    primaryCondition: 'Irregular Periods',
    duration: '6 Months',
    tags: ['Irregular Periods', 'General Health', 'Recent', 'All Users'],
    headline: "A Medical Doctor's Journey to Regular Cycles Without Medication",
    summary: 'For a long time, I struggled with highly irregular periods and sought a natural solution. Within six months of switching to Saukhyam reusable pads, my cycles became completely regular, arriving on time every month without any hormonal medication. As a doctor, I understand how the chemical toxins and endocrine disruptors in plastic disposable pads can enter the bloodstream through intimate tissues. Removing that source of toxins allowed my body to naturally find its rhythm again.',
    pdfUrl: '/testimonials/dr_priyanka_yadav.pdf'
  },
  {
    id: 'story-dharni-halwe',
    name: 'Dharni Halwe',
    occupation: 'College Student',
    age: 21,
    primaryCondition: 'Period Cramps',
    duration: '6 Months',
    tags: ['Period Cramps', 'General Health', 'Recent', 'All Users'],
    headline: 'Dramatic Reduction in Painkiller Dependency Within Six Months',
    summary: 'I used to suffer from such debilitating menstrual pain that I had to take three to four painkillers in the first two days of my cycle just to function. My gynecologist advised me to try Saukhyam. In just six months of making the switch, my pain has reduced so much that I only need one painkiller occasionally, and sometimes none at all. The soft banana-fiber core has made my period cramps completely manageable.',
    pdfUrl: '/testimonials/dharni_halwe.pdf'
  },
  {
    id: 'story-dr-jagrati-kiran-naagar',
    name: 'Dr Jagrati Kiran Naagar',
    occupation: 'Gynecologist',
    age: 38,
    primaryCondition: 'Heavy Flow',
    duration: '8 Months',
    tags: ['Heavy Flow', 'Period Cramps', 'General Health', 'Recent', 'All Users'],
    headline: 'Gynecologist Verifies Reduced Bleeding and Safe Material Health',
    summary: 'As a medical professional, I struggled with heavy menstrual bleeding and pain for years. Within just two to three months of switching to Saukhyam reusable pads, my menstrual flow reduced significantly and the cramps subsided. These pads are 100% natural, chemical-free, skin-friendly, and biodegradable. They provide the perfect alternative to disposable pads, which contain dioxins and plastic super-absorbents. I confidently recommend Saukhyam to my patients for better menstrual wellness.',
    pdfUrl: '/testimonials/dr_jagrati_kiran_naagar.pdf'
  },
  {
    id: 'story-parvathy',
    name: 'Parvathy',
    occupation: 'Research Associate',
    age: 35,
    primaryCondition: 'Irregular Periods',
    duration: '8 Years',
    tags: ['Irregular Periods', 'General Health', 'Long-term', 'All Users'],
    headline: 'Steady Cycle Regularity Reclaimed After Post-Childbirth Issues',
    summary: 'After childbirth, my cycles became highly irregular, often delayed by 35 to 40 days. I switched to Saukhyam pads eight years ago. Over time, my cycles stabilized, and they have been consistently regular at 32 days for years now. The pads are comfortable, hygienic, and extremely durable. They still look and feel great after years of washing. Switching to Saukhyam was the best decision for my long-term reproductive health.',
    pdfUrl: '/testimonials/parvathy.pdf'
  },
  {
    id: 'story-sarada-jayan',
    name: 'Sarada Jayan',
    occupation: 'Educator',
    age: 40,
    primaryCondition: 'Period Cramps',
    duration: '5 Years',
    tags: ['Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Comfort and Cramp Relief Achieved Through Natural Fiber Care',
    summary: 'I used to experience severe lower back pain and cramps that disrupted my teaching schedule. I was skeptical about reusable pads, but decided to try Saukhyam. Within a few cycles, my cramps reduced dramatically. The pads are highly absorbent, easy to wash, and dry quickly in the sun. I have been using them for five years now, and the comfort they provide is unmatched. My periods are no longer a source of physical stress.',
    pdfUrl: '/testimonials/sarada_jayan.pdf'
  },
  {
    id: 'story-nandini',
    name: 'Nandini',
    occupation: 'IT Professional',
    age: 27,
    primaryCondition: 'General Health',
    duration: '6 Years',
    tags: ['General Health', 'Long-term', 'All Users'],
    headline: 'Essential Menstrual Comfort and Sustainable Health Upgrade',
    summary: 'I did not have severe disorders, but disposable pads always made me feel sweaty, itchy, and uncomfortable. I switched to Saukhyam reusable pads six years ago to adopt a more sustainable lifestyle. The difference in comfort was immediate. There is no itching, no odor, and no plastic feel. My menstrual health has remained excellent, and I feel proud that I have kept hundreds of plastic pads out of landfills.',
    pdfUrl: '/testimonials/nandini.pdf'
  },
  {
    id: 'story-deepthi',
    name: 'Deepthi',
    occupation: 'Creative Designer',
    age: 29,
    primaryCondition: 'Rashes & Irritation',
    duration: '8 Years',
    tags: ['Rashes & Irritation', 'Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Chronic Rashes and Recurring UTIs Permanently Resolved',
    summary: 'Before switching to Saukhyam, I regularly suffered from painful rashes, skin peeling, and recurring urinary tract infections (UTIs) caused by plastic disposable napkins. Since making the switch to Saukhyam eight years ago, these issues have been completely eliminated. The natural banana-fiber core is highly breathable, preventing bacterial growth and skin irritation. My period cramps have also decreased, making my cycles comfortable and stress-free.',
    pdfUrl: '/testimonials/deepthi.pdf'
  },
  {
    id: 'story-arathi-pradeep',
    name: 'Arathi Pradeep',
    occupation: 'Architect',
    age: 33,
    primaryCondition: 'Period Cramps',
    duration: '6 Years',
    tags: ['Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Completely Pain-Free Menstruation and Unhindered Active Lifestyle',
    summary: 'Severe menstrual pain used to prevent me from working or exercising. Six years ago, I switched to Saukhyam pads, and for the past two years, I have been completely pain-free. I can work out, practice yoga, and travel without any discomfort. The pads dry quickly, do not stain, and maintain a high standard of hygiene. They are incredibly soft and feel much better than commercial plastic alternatives.',
    pdfUrl: '/testimonials/arathi_pradeep.pdf'
  },
  {
    id: 'story-amritha',
    name: 'Amritha',
    occupation: 'Scientist',
    age: 30,
    primaryCondition: 'Heavy Flow',
    duration: '6 Years',
    tags: ['Heavy Flow', 'Period Cramps', 'General Health', 'Long-term', 'All Users'],
    headline: 'Normalizing Heavy Flow and Eliminating Debilitating Leg Cramps',
    summary: 'My periods were accompanied by shooting leg cramps and extremely heavy flow, especially on the third and fourth days. Since switching to Saukhyam six years ago, my cramps have reduced significantly, and my heavy flow has gradually normalized. The natural absorption properties of the banana-fiber core provide excellent protection without containing synthetic super-absorbent polymers that dehydrate and irritate intimate skin tissues.',
    pdfUrl: '/testimonials/amritha.pdf'
  },
  {
    id: 'story-bhanu-samykya',
    name: 'Bhanu Samykya',
    occupation: 'College Professor',
    age: 37,
    primaryCondition: 'Heavy Flow',
    duration: '5 Years',
    tags: ['Heavy Flow', 'Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term', 'All Users'],
    headline: 'Finding Complete Relief from Excessive Bleeding and Skin Friction',
    summary: 'Standing for hours during lectures was extremely difficult due to heavy bleeding and painful rashes from disposable pads. Making the switch to Saukhyam pads five years ago completely changed my experience. The soft organic cotton layer prevents friction and rashes, while the highly absorbent banana fiber handles heavy flow effortlessly. My cramps have also decreased, allowing me to teach comfortably throughout my cycle.',
    pdfUrl: '/testimonials/bhanu_samykya.pdf'
  },
  {
    id: 'story-hemalatha',
    name: 'Hemalatha',
    occupation: 'Bank Manager',
    age: 45,
    primaryCondition: 'Period Cramps',
    duration: '5 Years',
    tags: ['Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term', 'All Users'],
    headline: 'Six Months to Zero Cramps and Complete Skin Comfort',
    summary: 'Disposable pads caused severe dryness, skin peeling, and painful rashes. Within six months of switching to Saukhyam pads, my cramps went away entirely, and the dryness and itching disappeared. My general fatigue during periods has also decreased, and I feel energetic. I am extremely happy that I no longer generate plastic waste, contributing to a cleaner environment while healing my own body.',
    pdfUrl: '/testimonials/hemalatha.pdf'
  },
  {
    id: 'story-divya',
    name: 'Divya',
    occupation: 'Content Creator',
    age: 26,
    primaryCondition: 'Rashes & Irritation',
    duration: '3 Years',
    tags: ['Rashes & Irritation', 'General Health', 'Long-term', 'All Users'],
    headline: 'Headache and Skin Sensitivity Issues Resolved via Natural Hygiene',
    summary: 'I used to get severe tension headaches, itching, and a hot, suffocating feeling during my periods when using disposable pads. Since switching to Saukhyam three years ago, all of these symptoms have vanished. I no longer get headaches, and the pads feel cool and comfortable against my skin. The breathable banana fiber core makes a noticeable difference in preventing odor and heat build-up.',
    pdfUrl: '/testimonials/divya.pdf'
  },
  {
    id: 'story-anamika',
    name: 'Anamika',
    occupation: 'MBA Student',
    age: 23,
    primaryCondition: 'PCOS / Ovarian Cysts',
    duration: '4 Years',
    tags: ['PCOS / Ovarian Cysts', 'General Health', 'Long-term', 'All Users'],
    headline: 'Regulating Cycles and Navigating PCOS with Organic Alternatives',
    summary: 'After being diagnosed with PCOS and ovarian cysts, I faced irregular cycles and intense pelvic pain. A health advocate suggested switching to organic, chemical-free pads. I chose Saukhyam four years ago. Today, my cycles are regular, and the pelvic pain has subsided. Removing the plastics and endocrine disruptors from my intimate care routine was a key turning point in managing my PCOS symptoms naturally.',
    pdfUrl: '/testimonials/anamika.pdf'
  }
];

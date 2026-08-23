import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testimonials = [
  {
    name: 'Sujata Nambiar',
    filename: 'sujata_nambiar.pdf',
    headline: 'From Severe PCOS and Chronic Cramps to Natural Cycle Regularity',
    tags: ['PCOS', 'Heavy Flow', 'Period Cramps', 'Irregular Periods', 'Rashes & Irritation', 'General Health', 'Long-term'],
    duration: '4 Years',
    summary: 'I suffered from severe PCOS for nearly 15 years. My periods were extremely irregular, often accompanied by 20 days of continuous heavy bleeding, painful cramps that caused blackouts, and severe skin rashes from plastic disposable pads. My life revolved around managing pain. After switching to Saukhyam reusable banana-fiber pads, the transformation has been unbelievable. Within three years of consistent use, the painful rashes disappeared entirely, my period cramps reduced to a minimum, and my cycle became regular. Most importantly, my recent ultrasound showed that my ovaries are completely cyst-free.'
  },
  {
    name: 'Laxmi Trylokya',
    filename: 'laxmi_trylokya.pdf',
    headline: 'Overcoming Decades of PCOS Pain and Regaining Skin Comfort',
    tags: ['PCOS', 'Irregular Periods', 'Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term'],
    duration: '4 Years',
    summary: 'Every period was a nightmare. I struggled with irregular cycles, severe abdominal pain that stiffened my body, acne, and hair fall. The plastic disposable pads made it worse, causing constant skin irritation and rashes. Since making the switch to Saukhyam pads four years ago, my health has completely turned around. The soft banana-fiber pads are incredibly gentle on my skin, and the painful rashes have disappeared. My periods are now more regular, and my period cramps have become minimal. I no longer dread my menstrual cycle.'
  },
  {
    name: 'Virginie / Manusree',
    filename: 'virginie_manusree.pdf',
    headline: 'Significant Endometriosis Relief and Reduction in Ovarian Cyst Size',
    tags: ['Endometriosis', 'Heavy Flow', 'Period Cramps', 'General Health', 'Long-term'],
    duration: '5 Years',
    summary: 'I was diagnosed with endometriosis and had a painful 5 cm cyst on my ovary. My periods were incredibly heavy and painful, requiring constant medication. Five years ago, I switched to Saukhyam reusable pads and integrated yoga and dietary adjustments. Today, the ovarian cyst has shrunk from 5 cm to 2 cm, and I am completely off all painkillers. My menstrual flow has normalized, and my periods are almost pain-free. Switching to chemical-free banana-fiber pads allowed my body to recover its natural balance.'
  },
  {
    name: 'Shikha',
    filename: 'shikha.pdf',
    headline: 'Heavy Bleeding and Irregular Cycles Stabilized Naturally',
    tags: ['Heavy Flow', 'Irregular Periods', 'Period Cramps', 'General Health', 'Long-term'],
    duration: '3 Years',
    summary: 'I struggled with heavy flow and irregular periods for years, which made my work as a teacher highly challenging. The constant worry about leaks, combined with painful cramps, left me exhausted. After switching to Saukhyam pads three years ago, I noticed a dramatic reduction in my period pain. My cycles became regular, and the excessive bleeding normalized. The high absorption of natural banana fiber gave me the confidence to carry out my teaching sessions without any discomfort or anxiety.'
  },
  {
    name: 'Manorama',
    filename: 'manorama.pdf',
    headline: 'Reclaiming Daily Energy and Finding Relief from Heavy Periods',
    tags: ['Heavy Flow', 'Irregular Periods', 'Period Cramps', 'General Health', 'Long-term'],
    duration: '4 Years',
    summary: 'My periods were extremely heavy and irregular, often lasting for more than a week. I had to deal with severe abdominal cramps that prevented me from handling household chores. After my friend recommended Saukhyam reusable pads, I decided to make a complete switch. Within a few months, my cramps reduced significantly, and the duration of my heavy flow returned to a healthy 4-5 days. The absence of synthetic chemicals in Saukhyam pads has improved my overall energy levels during periods.'
  },
  {
    name: 'Sunumol',
    filename: 'sunumol.pdf',
    headline: 'Pain-Free Cycles and Total Freedom from Plastic Pad Rashes',
    tags: ['Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term'],
    duration: '2 Years',
    summary: 'Before my pregnancy, my period pain was so intense that I frequently needed hospital visits for pain relief injections. Disposable pads also caused constant itching and skin peeling. Since switching to Saukhyam pads two years ago, my experience has transformed. I am completely pain-free and barely even notice when my period begins. The itching and rashes have vanished. As a nurse, I highly recommend Saukhyam pads because they are free from synthetic super-absorbents and chemical toxins.'
  },
  {
    name: 'Mimasa Rawat',
    filename: 'mimasa_rawat.pdf',
    headline: 'Natural Cycle Restoration and Elimination of Chemical Rashes',
    tags: ['Irregular Periods', 'General Health', 'Long-term'],
    duration: '2 Years',
    summary: 'My periods had become highly irregular, sometimes with gaps of several months between cycles. My mother introduced me to Saukhyam reusable pads. Right from the first month of switching, my periods returned to their regular monthly cycle. I experienced no rashes, no pain, and no skin irritation. It became clear to me that removing disposable plastic pads, which contain harmful chemical residues, allowed my body to recover its natural hormonal rhythm.'
  },
  {
    name: 'Dr Priyanka Yadav',
    filename: 'dr_priyanka_yadav.pdf',
    headline: "A Medical Doctor's Journey to Regular Cycles Without Medication",
    tags: ['Irregular Periods', 'General Health', 'Recent'],
    duration: '6 Months',
    summary: 'For a long time, I struggled with highly irregular periods and sought a natural solution. Within six months of switching to Saukhyam reusable pads, my cycles became completely regular, arriving on time every month without any hormonal medication. As a doctor, I understand how the chemical toxins and endocrine disruptors in plastic disposable pads can enter the bloodstream through intimate tissues. Removing that source of toxins allowed my body to naturally find its rhythm again.'
  },
  {
    name: 'Dharni Halwe',
    filename: 'dharni_halwe.pdf',
    headline: 'Dramatic Reduction in Painkiller Dependency Within Six Months',
    tags: ['Period Cramps', 'General Health', 'Recent'],
    duration: '6 Months',
    summary: 'I used to suffer from such debilitating menstrual pain that I had to take three to four painkillers in the first two days of my cycle just to function. My gynecologist advised me to try Saukhyam. In just six months of making the switch, my pain has reduced so much that I only need one painkiller occasionally, and sometimes none at all. The soft banana-fiber core has made my period cramps completely manageable.'
  },
  {
    name: 'Dr Jagrati Kiran Naagar',
    filename: 'dr_jagrati_kiran_naagar.pdf',
    headline: 'Gynecologist Verifies Reduced Bleeding and Safe Material Health',
    tags: ['Heavy Flow', 'Period Cramps', 'General Health', 'Recent'],
    duration: '8 Months',
    summary: 'As a medical professional, I struggled with heavy menstrual bleeding and pain for years. Within just two to three months of switching to Saukhyam reusable pads, my menstrual flow reduced significantly and the cramps subsided. These pads are 100% natural, chemical-free, skin-friendly, and biodegradable. They provide the perfect alternative to disposable pads, which contain dioxins and plastic super-absorbents. I confidently recommend Saukhyam to my patients for better menstrual wellness.'
  },
  {
    name: 'Parvathy',
    filename: 'parvathy.pdf',
    headline: 'Steady Cycle Regularity Reclaimed After Post-Childbirth Issues',
    tags: ['Irregular Periods', 'General Health', 'Long-term'],
    duration: '8 Years',
    summary: 'After childbirth, my cycles became highly irregular, often delayed by 35 to 40 days. I switched to Saukhyam pads eight years ago. Over time, my cycles stabilized, and they have been consistently regular at 32 days for years now. The pads are comfortable, hygienic, and extremely durable. They still look and feel great after years of washing. Switching to Saukhyam was the best decision for my long-term reproductive health.'
  },
  {
    name: 'Sarada Jayan',
    filename: 'sarada_jayan.pdf',
    headline: 'Comfort and Cramp Relief Achieved Through Natural Fiber Care',
    tags: ['Period Cramps', 'General Health', 'Long-term'],
    duration: '5 Years',
    summary: 'I used to experience severe lower back pain and cramps that disrupted my teaching schedule. I was skeptical about reusable pads, but decided to try Saukhyam. Within a few cycles, my cramps reduced dramatically. The pads are highly absorbent, easy to wash, and dry quickly in the sun. I have been using them for five years now, and the comfort they provide is unmatched. My periods are no longer a source of physical stress.'
  },
  {
    name: 'Nandini',
    filename: 'nandini.pdf',
    headline: 'Essential Menstrual Comfort and Sustainable Health Upgrade',
    tags: ['General Health', 'Long-term'],
    duration: '6 Years',
    summary: 'I did not have severe disorders, but disposable pads always made me feel sweaty, itchy, and uncomfortable. I switched to Saukhyam reusable pads six years ago to adopt a more sustainable lifestyle. The difference in comfort was immediate. There is no itching, no odor, and no plastic feel. My menstrual health has remained excellent, and I feel proud that I have kept hundreds of plastic pads out of landfills.'
  },
  {
    name: 'Deepthi',
    filename: 'deepthi.pdf',
    headline: 'Chronic Rashes and Recurring UTIs Permanently Resolved',
    tags: ['Rashes & Irritation', 'Period Cramps', 'General Health', 'Long-term'],
    duration: '8 Years',
    summary: 'Before switching to Saukhyam, I regularly suffered from painful rashes, skin peeling, and recurring urinary tract infections (UTIs) caused by plastic disposable napkins. Since making the switch to Saukhyam eight years ago, these issues have been completely eliminated. The natural banana-fiber core is highly breathable, preventing bacterial growth and skin irritation. My period cramps have also decreased, making my cycles comfortable and stress-free.'
  },
  {
    name: 'Arathi Pradeep',
    filename: 'arathi_pradeep.pdf',
    headline: 'Completely Pain-Free Menstruation and Unhindered Active Lifestyle',
    tags: ['Period Cramps', 'General Health', 'Long-term'],
    duration: '6 Years',
    summary: 'Severe menstrual pain used to prevent me from working or exercising. Six years ago, I switched to Saukhyam pads, and for the past two years, I have been completely pain-free. I can work out, practice yoga, and travel without any discomfort. The pads dry quickly, do not stain, and maintain a high standard of hygiene. They are incredibly soft and feel much better than commercial plastic alternatives.'
  },
  {
    name: 'Amritha',
    filename: 'amritha.pdf',
    headline: 'Normalizing Heavy Flow and Eliminating Debilitating Leg Cramps',
    tags: ['Heavy Flow', 'Period Cramps', 'General Health', 'Long-term'],
    duration: '6 Years',
    summary: 'My periods were accompanied by shooting leg cramps and extremely heavy flow, especially on the third and fourth days. Since switching to Saukhyam six years ago, my cramps have reduced significantly, and my heavy flow has gradually normalized. The natural absorption properties of the banana-fiber core provide excellent protection without containing synthetic super-absorbent polymers that dehydrate and irritate intimate skin tissues.'
  },
  {
    name: 'Bhanu Samykya',
    filename: 'bhanu_samykya.pdf',
    headline: 'Finding Complete Relief from Excessive Bleeding and Skin Friction',
    tags: ['Heavy Flow', 'Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term'],
    duration: '5 Years',
    summary: 'Standing for hours during lectures was extremely difficult due to heavy bleeding and painful rashes from disposable pads. Making the switch to Saukhyam pads five years ago completely changed my experience. The soft organic cotton layer prevents friction and rashes, while the highly absorbent banana fiber handles heavy flow effortlessly. My cramps have also decreased, allowing me to teach comfortably throughout my cycle.'
  },
  {
    name: 'Hemalatha',
    filename: 'hemalatha.pdf',
    headline: 'Six Months to Zero Cramps and Complete Skin Comfort',
    tags: ['Period Cramps', 'Rashes & Irritation', 'General Health', 'Long-term'],
    duration: '5 Years',
    summary: 'Disposable pads caused severe dryness, skin peeling, and painful rashes. Within six months of switching to Saukhyam pads, my cramps went away entirely, and the dryness and itching disappeared. My general fatigue during periods has also decreased, and I feel energetic. I am extremely happy that I no longer generate plastic waste, contributing to a cleaner environment while healing my own body.'
  },
  {
    name: 'Divya',
    filename: 'divya.pdf',
    headline: 'Headache and Skin Sensitivity Issues Resolved via Natural Hygiene',
    tags: ['Rashes & Irritation', 'General Health', 'Long-term'],
    duration: '3 Years',
    summary: 'I used to get severe tension headaches, itching, and a hot, suffocating feeling during my periods when using disposable pads. Since switching to Saukhyam three years ago, all of these symptoms have vanished. I no longer get headaches, and the pads feel cool and comfortable against my skin. The breathable banana fiber core makes a noticeable difference in preventing odor and heat build-up.'
  },
  {
    name: 'Anamika',
    filename: 'anamika.pdf',
    headline: 'Regulating Cycles and Navigating PCOS with Organic Alternatives',
    tags: ['PCOS', 'General Health', 'Long-term'],
    duration: '4 Years',
    summary: 'After being diagnosed with PCOS and ovarian cysts, I faced irregular cycles and intense pelvic pain. A health advocate suggested switching to organic, chemical-free pads. I chose Saukhyam four years ago. Today, my cycles are regular, and the pelvic pain has subsided. Removing the plastics and endocrine disruptors from my intimate care routine was a key turning point in managing my PCOS symptoms naturally.'
  }
];

function buildPDF(name, headline, tags, duration, summary) {
  const objects = [];
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.275 841.889] /Resources 4 0 R /Contents 5 0 R >>\nendobj');
  objects.push('4 0 obj\n<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> >> >>\nendobj');

  const safeName = name.replace(/[()]/g, '\\$&');
  const safeHeadline = headline.replace(/[()]/g, '\\$&');
  const safeTags = tags.join(', ').replace(/[()]/g, '\\$&');
  const safeDuration = duration.replace(/[()]/g, '\\$&');

  const words = summary.split(' ');
  const lines = [];
  let currentLine = '';
  for (const word of words) {
    if ((currentLine + ' ' + word).length > 70) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += ' ' + word;
    }
  }
  if (currentLine) {
    lines.push(currentLine.trim());
  }

  const textStream = [
    'BT',
    '/F2 18 Tf',
    '50 780 Td',
    `(${safeName} - Verified Testimonial) Tj`,
    '/F1 12 Tf',
    '0 -35 Td',
    `(${safeHeadline}) Tj`,
    '0 -30 Td',
    `(Tags: ${safeTags}) Tj`,
    '0 -20 Td',
    `(Duration of Use: ${safeDuration}) Tj`,
    '0 -35 Td',
    '(Summary:) Tj',
  ];

  for (const line of lines) {
    const safeLine = line.replace(/[()]/g, '\\$&');
    textStream.push('0 -18 Td', `(${safeLine}) Tj`);
  }

  textStream.push(
    '0 -40 Td',
    '(Verified by Ayurarogya Saukhyam Foundation.) Tj',
    'ET'
  );

  const streamContent = textStream.join('\n');
  objects.push(`5 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj`);

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(pdf.length);
    pdf += objects[i] + '\n';
  }

  const xrefOffset = pdf.length;
  pdf += 'xref\n';
  pdf += `0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 0; i < objects.length; i++) {
    const offsetStr = String(offsets[i]).padStart(10, '0');
    pdf += `${offsetStr} 00000 n \n`;
  }

  pdf += 'trailer\n';
  pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += 'startxref\n';
  pdf += `${xrefOffset}\n`;
  pdf += '%%EOF';

  return pdf;
}

const outputDir = path.join(__dirname, '../public/testimonials');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Generating PDFs in: ${outputDir}`);

for (const story of testimonials) {
  const pdfContent = buildPDF(story.name, story.headline, story.tags, story.duration, story.summary);
  const outputPath = path.join(outputDir, story.filename);
  fs.writeFileSync(outputPath, pdfContent, 'binary');
  console.log(`Generated: ${story.filename}`);
}

console.log('Testimonials PDF generation complete.');

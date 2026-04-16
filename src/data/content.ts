export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  quoteHi: string;
  rating: number;
  avatar?: string;
  duration: string;
  mainProblem: string;
  cohort: 1 | 2;
  condition: 'pcos' | 'cramps' | 'irregular' | 'heavy-flow' | 'rashes' | 'uti' | 'endometriosis' | 'general';
}

export const testimonials: Testimonial[] = [
  // ── Cohort 1: Long-term users (2+ years) ──
  {
    id: 'c1-1',
    name: 'Parvathy',
    location: 'Kerala',
    quote: 'My periods were irregular for two years after childbirth — sometimes delayed by 35-40 days. After switching to Saukhyam 8 years ago, my cycles gradually became regular at 32 days. It took time, but now I have comfortable periods. I definitely prefer Saukhyam.',
    quoteHi: 'प्रसव के बाद दो साल तक मेरे पीरियड्स अनियमित थे। सौख्यम पर स्विच करने के 8 साल बाद, मेरा चक्र धीरे-धीरे 32 दिनों पर नियमित हो गया।',
    rating: 5,
    duration: '8 years',
    mainProblem: 'Irregular Periods',
    cohort: 1,
    condition: 'irregular',
  },
  {
    id: 'c1-4',
    name: 'Deepthi',
    location: 'Chennai',
    quote: 'My rashes, irritation and UTI have not occurred after I switched to Saukhyam. Before that, it was a frequent occurrence. Thanks to Saukhyam, the rashes, irritation and UTI have been completely eliminated.',
    quoteHi: 'सौख्यम पर स्विच करने के बाद मेरे रैशेज, जलन और UTI नहीं हुई। पहले यह बार-बार होता था।',
    rating: 5,
    duration: '8 years',
    mainProblem: 'UTI & Rashes',
    cohort: 1,
    condition: 'uti',
  },
  {
    id: 'c1-5',
    name: 'Arathi',
    location: 'Bengaluru',
    quote: 'I used to have a lot of pain during periods. For the past 2 years I am totally pain-free. I work out and do yoga too. Saukhyam pads dry fast, don\'t stain, and feel hygienic. I have used them for more than 6 years and I love them.',
    quoteHi: 'पीरियड्स के दौरान मुझे बहुत दर्द होता था। पिछले 2 सालों से मैं पूरी तरह दर्द-मुक्त हूं। सौख्यम पैड जल्दी सूखते हैं, दाग नहीं लगते।',
    rating: 5,
    duration: '6 years',
    mainProblem: 'Severe Period Pain',
    cohort: 1,
    condition: 'cramps',
  },
  {
    id: 'c1-6',
    name: 'Amritha',
    location: 'Kerala',
    quote: 'I used to have really painful periods, especially on the 3rd, 4th and 5th days. The cramps would shoot down into my thighs. After using Saukhyam consistently for two years, my cramps reduced significantly and my heavy flow gradually became normal.',
    quoteHi: 'पीरियड्स बहुत दर्दनाक होते थे, खासकर 3, 4 और 5वें दिन। सौख्यम का लगातार दो साल उपयोग करने के बाद, मेरे क्रैम्प्स काफी कम हो गए।',
    rating: 5,
    duration: '6 years',
    mainProblem: 'Heavy Flow & Cramps',
    cohort: 1,
    condition: 'heavy-flow',
  },
  {
    id: 'c1-8',
    name: 'Virginie',
    location: 'Kerala',
    quote: 'I was diagnosed with endometriosis — a 5 cm cyst on my ovary. My periods were very painful. I switched to Saukhyam 5 years ago along with yoga and dietary changes. The cyst has reduced from 5 cm to 2 cm. I am not on any medication. My periods are almost normal now.',
    quoteHi: 'एंडोमेट्रियोसिस का पता चला — अंडाशय पर 5 सेमी की सिस्ट। सौख्यम के 5 साल बाद, सिस्ट 5 सेमी से 2 सेमी हो गई। कोई दवाई नहीं ले रही।',
    rating: 5,
    duration: '5 years',
    mainProblem: 'Endometriosis',
    cohort: 1,
    condition: 'endometriosis',
  },
  {
    id: 'c1-9',
    name: 'Hemalatha',
    location: 'Kerala',
    quote: 'Within 6 months of switching, my cramps went away. Disposable pads caused dryness, skin peeling and painful rashes. With Saukhyam — no itching, no dryness. My tiredness during periods also reduced. Plus I feel happy not contributing to waste.',
    quoteHi: 'स्विच करने के 6 महीने में मेरे क्रैम्प्स दूर हो गए। डिस्पोजेबल से सूखापन और दर्दनाक रैशेज होते थे। सौख्यम से — कोई खुजली नहीं, कोई सूखापन नहीं।',
    rating: 5,
    duration: '5 years',
    mainProblem: 'Cramps & Rashes',
    cohort: 1,
    condition: 'cramps',
  },
  {
    id: 'c1-10',
    name: 'Sujata',
    location: 'Madhya Pradesh',
    quote: 'I suffered from PCOS for 12-15 years. 20 days of bleeding, blackouts from pain, rashes that formed blisters. After 3 years with Saukhyam, no rashes, no pain, blood color changed to healthy red, clots minimized. My ultrasound shows ovaries are cyst-free. The transformation is unbelievable.',
    quoteHi: '12-15 साल PCOS से पीड़ित थी। 20 दिन का रक्तस्राव, दर्द से बेहोशी। सौख्यम के 3 साल बाद, कोई रैशेज नहीं, कोई दर्द नहीं। अल्ट्रासाउंड में अंडाशय सिस्ट-मुक्त हैं।',
    rating: 5,
    duration: '4 years',
    mainProblem: 'PCOS',
    cohort: 1,
    condition: 'pcos',
  },
  {
    id: 'c1-11',
    name: 'Laxmi',
    location: 'Hyderabad',
    quote: 'I dreaded periods. Severe pain, stiffening of the body, acne and hairfall. Periods came only once every 2 months. After 4 years with Saukhyam, pain is minimal, cycles are more regular, and skin issues improved. Saukhyam pads are soft, softer than plastic pads.',
    quoteHi: 'मुझे पीरियड्स से डर लगता था। गंभीर दर्द, शरीर का अकड़ना, मुंहासे और बालों का झड़ना। सौख्यम के 4 साल बाद, दर्द न्यूनतम है, चक्र अधिक नियमित है।',
    rating: 5,
    duration: '4 years',
    mainProblem: 'PCOS',
    cohort: 1,
    condition: 'pcos',
  },
  {
    id: 'c1-12',
    name: 'Divya',
    location: 'Kerala',
    quote: 'Earlier I used to get headaches during periods. There was a lot of itching and hot feeling. Since using Saukhyam for 3 years, all these problems have gone away. I do not get headaches anymore and there is so much comfort.',
    quoteHi: 'पहले पीरियड्स के दौरान सिरदर्द होता था। बहुत खुजली और गर्मी महसूस होती थी। सौख्यम के 3 साल बाद, ये सब समस्याएं दूर हो गईं।',
    rating: 5,
    duration: '3 years',
    mainProblem: 'Headaches & Itching',
    cohort: 1,
    condition: 'general',
  },

  // ── Cohort 2: Newer users (<2 years) ──
  {
    id: 'c2-1',
    name: 'Sunumol',
    location: 'Kerala',
    quote: 'Before pregnancy, my periods were so painful I had to go to the hospital for pain relief injections. Since using Saukhyam for 2 years, I barely even notice when my period starts — completely pain-free, and the itching has disappeared entirely.',
    quoteHi: 'गर्भावस्था से पहले, दर्द इतना था कि अस्पताल जाना पड़ता था। सौख्यम के 2 साल बाद, मुझे पता भी नहीं चलता कि पीरियड्स कब शुरू होते हैं।',
    rating: 5,
    duration: '2 years',
    mainProblem: 'Severe Pain & Itching',
    cohort: 2,
    condition: 'cramps',
  },
  {
    id: 'c2-2',
    name: 'Mimasa',
    location: 'Gurgaon',
    quote: 'My periods had become irregular — sometimes months-long gaps. My mother gave me Saukhyam pads and right from the start, periods returned to becoming regular. No rashes, no pain. That problem is totally solved now.',
    quoteHi: 'मेरे पीरियड्स अनियमित हो गए थे — कभी-कभी महीनों का गैप। सौख्यम पैड से शुरू से ही पीरियड्स नियमित हो गए।',
    rating: 5,
    duration: '2 years',
    mainProblem: 'Irregular Periods',
    cohort: 2,
    condition: 'irregular',
  },
  {
    id: 'c2-3',
    name: 'Dr. Jagrati',
    location: 'Madhya Pradesh',
    quote: 'I used to struggle with heavy menstrual bleeding and pain. Within just 2-3 months of using Saukhyam, my bleeding reduced significantly. As a Doctor, these pads are 100% natural, chemical-free, skin friendly, and biodegradable.',
    quoteHi: 'भारी मासिक रक्तस्राव और दर्द से जूझती थी। सौख्यम के 2-3 महीनों में रक्तस्राव काफी कम हो गया। एक डॉक्टर के रूप में, ये पैड 100% प्राकृतिक हैं।',
    rating: 5,
    duration: '8 months',
    mainProblem: 'Heavy Bleeding',
    cohort: 2,
    condition: 'heavy-flow',
  },
  {
    id: 'c2-4',
    name: 'Dharni',
    location: 'Madhya Pradesh',
    quote: 'I used to need 3 to 4 painkillers in just two days. My gynaecologist recommended Saukhyam. In just 6 months, what once required 3-4 pain relievers per day is now down to just 1 or 2. The pain is far more bearable.',
    quoteHi: 'दो दिनों में 3-4 दर्दनिवारक लेनी पड़ती थीं। स्त्री रोग विशेषज्ञ ने सौख्यम की सिफारिश की। 6 महीनों में, दर्द बहुत कम हो गया।',
    rating: 5,
    duration: '6 months',
    mainProblem: 'Extreme Pain',
    cohort: 2,
    condition: 'cramps',
  },
  {
    id: 'c2-5',
    name: 'Dr. Priyanka',
    location: 'Uttar Pradesh',
    quote: 'For a long time I struggled with very irregular periods. Within six months of using Saukhyam, my periods became completely regular — coming on time every month, without any medication. It felt like my body was finding its natural rhythm again.',
    quoteHi: 'लंबे समय तक अनियमित पीरियड्स से जूझती रही। सौख्यम के छह महीनों में, पीरियड्स पूरी तरह नियमित हो गए — बिना किसी दवाई के।',
    rating: 5,
    duration: '6 months',
    mainProblem: 'Irregular Periods',
    cohort: 2,
    condition: 'irregular',
  },
];


export interface Award {
  id: string;
  year: string;
  title: string;
  titleHi: string;
  organization: string;
  description: string;
}

export const awards: Award[] = [
  { id: 'a1', year: '2016', title: 'Most Innovative Product Award', titleHi: 'सबसे नवीन उत्पाद पुरस्कार', organization: 'National Institute of Rural Development, India', description: 'Recognized for innovative banana fiber pad technology' },
  { id: 'a2', year: '2018', title: 'Lauded at UN Climate Change Conference', titleHi: 'संयुक्त राष्ट्र जलवायु परिवर्तन सम्मेलन', organization: 'UNFCCC, Poland', description: 'Recognized at the global stage for climate-positive menstrual hygiene' },
  { id: 'a3', year: '2020', title: 'Top 10 Finalist — Climate Launchpad', titleHi: 'क्लाइमेट लॉन्चपैड — टॉप 10 फाइनलिस्ट', organization: "World's Largest Green Business Competition", description: 'Among top 10 green businesses globally' },
  { id: 'a4', year: '2020', title: 'Social Enterprise of the Year', titleHi: 'वर्ष का सामाजिक उद्यम', organization: 'Women for India & Social Founder Network', description: 'Awarded for outstanding social impact' },
  { id: 'a5', year: '2021', title: 'Women Transforming India Awards', titleHi: 'भारत बदलती महिलाएं पुरस्कार', organization: 'NITI Aayog, Govt. of India', description: 'Anju Bist recognized among 75 transformative women' },
  { id: 'a6', year: '2022', title: 'Best Social Initiative on Menstrual Hygiene', titleHi: 'मासिक धर्म स्वच्छता पर सर्वश्रेष्ठ सामाजिक पहल', organization: 'Annual MHM Conference, New Delhi', description: 'Awarded for impactful menstrual hygiene programs' },
  { id: 'a7', year: '2023', title: 'Red Shakti Award', titleHi: 'रेड शक्ति पुरस्कार', organization: 'Radio FM 93.5 Malayalam', description: 'Recognized for women empowerment' },
  { id: 'a8', year: '2024', title: 'Sheroes Award', titleHi: 'शीरोज़ पुरस्कार', organization: "Kerala Women's Commission", description: 'Awarded by the Kerala state government' },
  { id: 'a9', year: '2025', title: 'Rural Healthcare Organization of the Year', titleHi: 'वर्ष का ग्रामीण स्वास्थ्य सेवा संगठन', organization: 'Uttarakhand Healthcare Innovation Summit', description: 'Top healthcare innovator in rural India' },
  { id: 'a10', year: '2025', title: 'Lokmata Ahilyabai Holkar Samman', titleHi: 'लोकमाता अहिल्याबाई होल्कर सम्मान', organization: 'Minister of State for Health, Govt. of India', description: 'National honor for menstrual health contribution' },
];

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  url: string;
  logo?: string;
}

export const pressItems: PressItem[] = [
  { id: 'p1', title: 'Meet Anju Bist Who Has Helped Over 5 Lakh Women Switch', publication: 'YourStory', url: '#' },
  { id: 'p2', title: 'NITI Aayog honour for Kerala\'s Anju Bist - pad-woman of India', publication: 'New Indian Express', url: '#' },
  { id: 'p3', title: 'Move over padman, this padwoman strives to make environment-friendly sanitary napkins', publication: 'India Today', url: '#' },
  { id: 'p4', title: 'केले के रेशे से बना सैनिटरी पैड', publication: 'BBC Hindi', url: '#' },
  { id: 'p5', title: "Don't Throw in the Towel: On Saukhyam Reusable Sanitary Pads", publication: 'The Hindu', url: '#' },
  { id: 'p6', title: 'Making Menstruation Eco-Friendly with Banana Fiber Pads', publication: 'NDTV', url: '#' },
  { id: 'p7', title: 'Sustainable Periods: The Woman Behind India\'s Banana Fiber Pads', publication: 'Times of India', url: '#' },
  { id: 'p8', title: 'Banana fiber pads: A greener period solution from Kerala', publication: 'Deccan Chronicle', url: '#' },
  { id: 'p9', title: 'Innovation in Menstrual Hygiene: Saukhyam\'s Banana Fiber Pads', publication: 'Moneycontrol', url: '#' },
  { id: 'p10', title: 'This Kerala startup is making periods eco-friendly', publication: 'Deccan Herald', url: '#' },
  { id: 'p11', title: 'Green Period Revolution: Saukhyam Reusable Pads', publication: 'Health Shots', url: '#' },
  { id: 'p12', title: 'Swachh Period, Swachh Bharat: The Saukhyam Story', publication: 'Swachh India NDTV', url: '#' },
  { id: 'p13', title: 'The Padwoman of India: Anju Bist\'s Mission', publication: 'Tribune India', url: '#' },
  { id: 'p14', title: 'From Banana Waste to Menstrual Pads: A Kerala Innovation', publication: 'Daily Pioneer', url: '#' },
  { id: 'p15', title: 'Saukhyam: Redefining Menstrual Hygiene in Rural India', publication: 'MSN', url: '#' },
];

export interface FAQItem {
  id: string;
  category: 'general' | 'using' | 'washing' | 'compare' | 'organization';
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'f1', category: 'general',
    question: 'Why are people switching to reusable pads?',
    questionHi: 'लोग रीयूजेबल पैड पर क्यों स्विच कर रहे हैं?',
    answer: 'Disposable pads contain harmful chemicals like dioxins, phthalates, and volatile organic compounds. These can cause skin irritation, allergies, hormonal disruption, and other health issues. Reusable pads are chemical-free, eco-friendly, and save money in the long run — one set lasts 2-3 years.',
    answerHi: 'डिस्पोजेबल पैड में डाइऑक्सिन, फ्थेलेट्स और वाष्पशील ऑर्गेनिक कंपाउंड जैसे हानिकारक रसायन होते हैं। रीयूजेबल पैड रसायन-मुक्त, इको-फ्रेंडली होते हैं और लंबे समय में पैसे बचाते हैं।',
  },
  {
    id: 'f2', category: 'general',
    question: 'Are reusable pads leak-proof?',
    questionHi: 'क्या रीयूजेबल पैड लीक-प्रूफ हैं?',
    answer: 'Yes! Saukhyam pads have a PU (polyurethane) leak-proof layer at the bottom that prevents any leakage. For best results, use well-fitting underwear to hold the pad securely in place.',
    answerHi: 'हां! सौख्यम पैड में तल पर PU (पॉलीयुरेथेन) लीक-प्रूफ परत होती है जो किसी भी रिसाव को रोकती है।',
  },
  {
    id: 'f3', category: 'general',
    question: 'Are reusable pads hygienic?',
    questionHi: 'क्या रीयूजेबल पैड हाइजीनिक हैं?',
    answer: 'Absolutely! India notified ISO standards for reusable pads in 2021. With proper washing (soak in cold water, wash with mild soap, dry in sunlight), reusable pads are 100% hygienic. Sunlight is a natural disinfectant.',
    answerHi: 'बिल्कुल! भारत ने 2021 में रीयूजेबल पैड के लिए ISO मानक अधिसूचित किए। सही तरीके से धोने से रीयूजेबल पैड 100% हाइजीनिक होते हैं।',
  },
  {
    id: 'f4', category: 'general',
    question: 'How long do Saukhyam pads last?',
    questionHi: 'सौख्यम पैड कितने समय तक चलते हैं?',
    answer: 'With proper care, Saukhyam pads last a minimum of 1-2 years, with many customers reporting use for 3-5 years. This makes them incredibly cost-effective compared to monthly purchases of disposables.',
    answerHi: 'उचित देखभाल के साथ, सौख्यम पैड कम से कम 1-2 साल तक चलते हैं, कई ग्राहक 3-5 साल तक उपयोग करती हैं।',
  },
  {
    id: 'f5', category: 'general',
    question: 'Will they work for heavy flow?',
    questionHi: 'क्या ये भारी प्रवाह के लिए काम करेंगे?',
    answer: 'Yes! Our night pads are 12 inches long with 9gm of banana fiber and a 4-inch wide absorbent area. For extra heavy flow, use a night pad with an additional insert or our 3-fold pads.',
    answerHi: 'हां! हमारे नाइट पैड 12 इंच लंबे हैं और 9 ग्राम केले के फाइबर के साथ हैं। अतिरिक्त भारी प्रवाह के लिए, एक इंसर्ट के साथ नाइट पैड का उपयोग करें।',
  },
  {
    id: 'f6', category: 'compare',
    question: "What's special about banana fiber?",
    questionHi: 'केले के फाइबर में क्या खास है?',
    answer: 'Banana fiber has natural antimicrobial properties (pathogenesis-related proteins). Unlike tree-based cellulose used in disposable pads, banana fiber comes from agricultural waste — banana trees fruit only once, then are cut. We use this waste sustainably. Research also suggests therapeutic qualities that may help reduce period cramps.',
    answerHi: 'केले के फाइबर में प्राकृतिक रोगाणुरोधी गुण होते हैं। डिस्पोजेबल पैड में उपयोग किए जाने वाले सेल्युलोज के विपरीत, केले का फाइबर कृषि अपशिष्ट से आता है।',
  },
  {
    id: 'f7', category: 'using',
    question: 'How do I use Saukhyam pads?',
    questionHi: 'मैं सौख्यम पैड का उपयोग कैसे करूं?',
    answer: 'Place the pad on your underwear with the absorbent side up. The wings fold around your underwear and are secured with a snap button. Change every 4-5 hours during the day. Night pads can be worn for longer.',
    answerHi: 'पैड को अवशोषक पक्ष ऊपर रखकर अपनी अंडरवियर पर रखें। पंख आपकी अंडरवियर के चारों ओर मुड़ते हैं और स्नैप बटन से सुरक्षित होते हैं।',
  },
  {
    id: 'f8', category: 'using',
    question: 'Can I use them while traveling?',
    questionHi: 'क्या मैं यात्रा करते हुए इनका उपयोग कर सकती हूं?',
    answer: 'Absolutely! Carry a wet bag to store used pads. You can simply hold the pad under a running tap, squeeze, and store in the wet bag to wash later at home. Our packs include wet bags for this purpose.',
    answerHi: 'बिल्कुल! उपयोग किए गए पैड रखने के लिए एक वेट बैग साथ रखें। बाद में घर पर धो सकती हैं।',
  },
  {
    id: 'f9', category: 'using',
    question: 'How many pads do I need?',
    questionHi: 'मुझे कितने पैड चाहिए?',
    answer: 'For a complete menstrual cycle, we recommend our Super Pack or Value Pack which includes day pads, night pads, and accessories. Typically, 4-6 day pads and 2-3 night pads provide full cycle coverage.',
    answerHi: 'पूर्ण मासिक चक्र के लिए, हम अपना सुपर पैक या वैल्यू पैक सुझाते हैं। आमतौर पर 4-6 डे पैड और 2-3 नाइट पैड पूर्ण कवरेज प्रदान करते हैं।',
  },
  {
    id: 'f10', category: 'washing',
    question: 'How do I wash the pads?',
    questionHi: 'मैं पैड कैसे धोऊं?',
    answer: 'Soak in cold water for 5 minutes, then hand wash or machine wash with mild soap. Avoid hot water as it can set stains. Dry in direct sunlight — it naturally disinfects the pads. You can also iron them for extra softness.',
    answerHi: '5 मिनट ठंडे पानी में भिगोएं, फिर हल्के साबुन से हाथ या मशीन से धोएं। सीधी धूप में सुखाएं — यह प्राकृतिक रूप से कीटाणुरहित करता है।',
  },
  {
    id: 'f11', category: 'washing',
    question: 'Do they become hard or rough after washing?',
    questionHi: 'क्या धोने के बाद वे सख्त हो जाते हैं?',
    answer: 'They may feel slightly stiff after air drying. Simply iron the pad or soak briefly in a solution with a little baking soda, lemon, or neem leaves — this restores softness. They become softer with each wash!',
    answerHi: 'हवा में सुखाने के बाद वे थोड़े सख्त महसूस हो सकते हैं। बस पैड को इस्त्री करें या बेकिंग सोडा के साथ थोड़ा भिगोएं — इससे मुलायमता वापस आती है।',
  },
  {
    id: 'f12', category: 'organization',
    question: 'Who runs Saukhyam?',
    questionHi: 'सौख्यम कौन चलाता है?',
    answer: 'Saukhyam is managed by the Mata Amritanandamayi Math and registered as Ayurarogya Saukhyam Foundation (Section 8 company). It is a social enterprise initiated as part of the Amrita SeRVe project covering 101 villages across 20+ states.',
    answerHi: 'सौख्यम का प्रबंधन माता अमृतानंदमयी मठ द्वारा किया जाता है और आयुरारोग्य सौख्यम फाउंडेशन (धारा 8 कंपनी) के रूप में पंजीकृत है।',
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleHi: string;
  image?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Anju Bist',
    role: 'Managing Director',
    roleHi: 'प्रबंध निदेशक',
    image: 'https://saukhyampads.org/cdn/shop/files/anju-bist.jpg',
    bio: 'Recognized by NITI Aayog among 75 Women Transforming India. Pad-woman of India, leading the mission to make reusable pads accessible to all.',
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  excerpt: string;
  excerptHi: string;
  image: string;
  date: string;
  readTime: string;
  category: 'community' | 'science' | 'sustainability' | 'stories';
  author: string;
  authorRole: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1', slug: 'breaking-taboos-sonbhadra',
    title: 'Breaking Taboos in Sonbhadra',
    titleHi: 'सोनभद्र में वर्जनाओं को तोड़ना',
    excerpt: 'How our team brought menstrual awareness to one of India\'s most remote tribal communities — and what they taught us in return.',
    excerptHi: 'कैसे हमारी टीम ने भारत के सबसे दूरदराज आदिवासी समुदायों में मासिक धर्म जागरूकता लाई।',
    image: '/Blog_Images/1.webp',
    date: '2024-08-15', readTime: '5 min read', category: 'community',
    author: 'Priya Sharma', authorRole: 'Community Lead',
    tags: ['Rural Outreach', 'Awareness', 'Tribal India'],
    featured: true,
  },
  {
    id: 'b2', slug: 'winds-of-change-kanyakumari',
    title: 'Winds of Change in Kanyakumari',
    titleHi: 'कन्याकुमारी में बदलाव की हवा',
    excerpt: 'A fishing village at the tip of India embraces sustainable menstrual practices — one pad at a time.',
    excerptHi: 'भारत के अंतिम छोर पर एक मछली पकड़ने वाला गांव टिकाऊ मासिक धर्म प्रथाओं को अपनाता है।',
    image: '/Blog_Images/IMG_8023_1024x1024.webp',
    date: '2024-07-20', readTime: '4 min read', category: 'community',
    author: 'Meena Pillai', authorRole: 'Program Coordinator',
    tags: ['REACH', 'Stories', 'Kanyakumari'],
  },
  {
    id: 'b3', slug: 'my-saukhyam-journey',
    title: 'My Saukhyam Journey',
    titleHi: 'मेरी सौख्यम यात्रा',
    excerpt: 'A personal story of switching from disposables and never looking back. The journey from skeptic to ambassador.',
    excerptHi: 'डिस्पोजेबल से स्विच करने और कभी पीछे न मुड़ने की एक व्यक्तिगत कहानी।',
    image: '/Blog_Images/IMG_1232_1_1024x1024.webp',
    date: '2024-06-10', readTime: '6 min read', category: 'stories',
    author: 'Anjali Rao', authorRole: 'Brand Ambassador',
    tags: ['Personal Story', 'HEAL', 'Switch'],
  },
];


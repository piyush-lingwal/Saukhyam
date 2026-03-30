export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  quoteHi: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Arunima Kundu',
    location: 'West Bengal',
    quote: 'Switching to Saukhyam pads was the best decision I made for my health. No more rashes, no more irritation. The banana fiber is incredibly soft and comfortable.',
    quoteHi: 'सौख्यम पैड पर स्विच करना मेरे स्वास्थ्य के लिए सबसे अच्छा निर्णय था। अब कोई रैशेज नहीं, कोई जलन नहीं।',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sheuli Shah',
    location: 'Karnataka',
    quote: 'I have been using Saukhyam pads for over 2 years now. They are soft, comfortable, and I love that they are eco-friendly. Highly recommend!',
    quoteHi: 'मैं 2 साल से अधिक समय से सौख्यम पैड का उपयोग कर रही हूं। वे मुलायम, आरामदायक और इको-फ्रेंडली हैं।',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Dr. Medhini',
    location: 'Kerala',
    quote: 'As a medical professional, I recommend Saukhyam to all my patients. The absence of chemicals makes them far safer than disposable alternatives.',
    quoteHi: 'एक चिकित्सा पेशेवर के रूप में, मैं अपने सभी रोगियों को सौख्यम रिकमेंड करती हूं। रसायनों की अनुपस्थिति उन्हें बहुत सुरक्षित बनाती है।',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Dr. Aarati Bhandare',
    location: 'Karnataka',
    quote: 'The banana fiber technology is revolutionary. I have seen a significant reduction in menstrual health complaints from patients who switched to reusable pads.',
    quoteHi: 'केले के फाइबर की तकनीक क्रांतिकारी है। रीयूजेबल पैड पर स्विच करने वाली मरीजों में मासिक धर्म संबंधी शिकायतों में उल्लेखनीय कमी देखी है।',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Jenny',
    location: 'Karnataka',
    quote: 'These pads made me forget I was on my period! So comfortable and absolutely no leakage even on heavy flow days. Worth every penny.',
    quoteHi: 'इन पैड्स ने मुझे भुला दिया कि मेरे पीरियड्स चल रहे हैं! बहुत आरामदायक और भारी प्रवाह वाले दिनों में भी बिल्कुल लीकेज नहीं।',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Pragati Parihar',
    location: 'Maharashtra',
    quote: 'Not only are these pads good for my body, but I also feel great knowing I am not contributing to environmental pollution. The wet bag is a game changer for travel!',
    quoteHi: 'ये पैड न केवल मेरे शरीर के लिए अच्छे हैं, बल्कि यह जानकर अच्छा लगता है कि मैं पर्यावरण प्रदूषण में योगदान नहीं दे रही हूं।',
    rating: 5,
  },
  {
    id: 't7',
    name: 'Aastha Aggarwal',
    location: 'Delhi',
    quote: 'I was skeptical at first but after 3 months of using Saukhyam, my period cramps reduced significantly. The healing challenge actually works!',
    quoteHi: 'मैं पहले संदेह में थी लेकिन सौख्यम का 3 महीने उपयोग करने के बाद, मेरे पीरियड क्रैम्प्स काफी कम हो गए।',
    rating: 5,
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
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1', slug: 'breaking-taboos-sonbhadra',
    title: 'Breaking Taboos in Sonbhadra',
    titleHi: 'सोनभद्र में वर्जनाओं को तोड़ना',
    excerpt: 'How our team brought menstrual awareness to one of India\'s most remote tribal communities.',
    excerptHi: 'कैसे हमारी टीम ने भारत के सबसे दूरदराज आदिवासी समुदायों में मासिक धर्म जागरूकता लाई।',
    image: 'https://saukhyampads.org/cdn/shop/articles/sonbhadra.jpg',
    date: '2024-08-15', readTime: '5 min', category: 'community',
  },
  {
    id: 'b2', slug: 'winds-of-change-kanyakumari',
    title: 'Winds of Change in Kanyakumari',
    titleHi: 'कन्याकुमारी में बदलाव की हवा',
    excerpt: 'A fishing village at the tip of India embraces sustainable menstrual practices.',
    excerptHi: 'भारत के अंतिम छोर पर एक मछली पकड़ने वाला गांव टिकाऊ मासिक धर्म प्रथाओं को अपनाता है।',
    image: 'https://saukhyampads.org/cdn/shop/articles/kanyakumari.jpg',
    date: '2024-07-20', readTime: '4 min', category: 'community',
  },
  {
    id: 'b3', slug: 'my-saukhyam-journey',
    title: 'My Saukhyam Journey',
    titleHi: 'मेरी सौख्यम यात्रा',
    excerpt: 'A personal story of switching from disposables and never looking back.',
    excerptHi: 'डिस्पोजेबल से स्विच करने और कभी पीछे न मुड़ने की एक व्यक्तिगत कहानी।',
    image: 'https://saukhyampads.org/cdn/shop/articles/journey.jpg',
    date: '2024-06-10', readTime: '6 min', category: 'stories',
  },
];

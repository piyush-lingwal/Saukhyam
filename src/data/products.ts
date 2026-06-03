export interface Product {
  id: string;
  slug: string;
  name: string;
  nameHi: string;
  price: number;
  comparePrice?: number;
  description: string;
  descriptionHi: string;
  category: 'starter' | 'daily' | 'heavy' | 'teen' | 'value';
  images: string[];
  features: string[];
  includes: string[];
  badge?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 'sampler-pack',
    slug: 'sampler-pack-of-reusable-sanitary-napkins',
    name: 'Sampler Pack',
    nameHi: 'सैम्पलर पैक',
    price: 450,
    description: 'Try different pad types to find your perfect fit. A great way to experience the Saukhyam difference.',
    descriptionHi: 'अपने लिए सबसे सही पैड खोजने के लिए विभिन्न प्रकार आज़माएं।',
    category: 'starter',
    images: [
      'https://saukhyampads.org/cdn/shop/files/sampler_pack_with_Reusable_sanitary_napkins_5_11zon.webp?v=1749644295&width=600'
    ],
    features: ['Banana Fiber Absorbent', 'Leak-Proof Layer', 'Chemical Free', 'Try All Types'],
    includes: ['1 Day Pad', '1 Night Pad', '1 Pantyliner'],
    badge: 'Best for Beginners',
  },
  {
    id: 'value-pack',
    slug: 'value-pack-with-wet-bag-and-pouch',
    name: 'Value Pack',
    nameHi: 'वैल्यू पैक',
    price: 690,
    description: 'Our most popular pack! Everything you need for a complete menstrual cycle. Includes wet bag and pouch for travel.',
    descriptionHi: 'हमारा सबसे लोकप्रिय पैक! पूरे मासिक चक्र के लिए आवश्यक सब कुछ।',
    category: 'value',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Saukhyam_Value_Pack_7_11zon_c7cbaec5-7fd8-4d07-a79e-61138389fb07.webp?v=1749644402&width=600'
    ],
    features: ['Complete Cycle Coverage', 'Wet Bag + Pouch', 'Travel Friendly', 'Best Value'],
    includes: ['3 Day Pads', '2 Night Pads', '1 Wet Bag', '1 Pouch'],
    badge: 'Best Value',
  },
  {
    id: 'super-pack',
    slug: 'super-pack-with-wet-bag-and-pouch',
    name: 'Super Pack',
    nameHi: 'सुपर पैक',
    price: 1100,
    description: 'The ultimate Saukhyam experience. Complete coverage for multiple cycles with all accessories included.',
    descriptionHi: 'अंतिम सौख्यम अनुभव। सभी सामान के साथ कई चक्रों के लिए पूर्ण कवरेज।',
    category: 'value',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Super_pack_with_wet_bag_Pouch_8_11zon.webp?v=1749644449&width=600'
    ],
    features: ['Maximum Coverage', 'All Pad Types', 'Wet Bag + Pouch', 'Premium Pack'],
    includes: ['4 Day Pads', '3 Night Pads', '2 Inserts', '1 Pantyliner', '1 Wet Bag', '1 Pouch'],
    isPopular: true,
    badge: 'Supports 100% Shift',
  },
  {
    id: 'heavy-flow',
    slug: 'heavy-flow-pack',
    name: 'Heavy Flow Pack',
    nameHi: 'हेवी फ्लो पैक',
    price: 699,
    description: 'Extra absorbent pads designed for heavy flow days. 12 inches long with maximum banana fiber absorption.',
    descriptionHi: 'भारी प्रवाह वाले दिनों के लिए डिज़ाइन किए गए अतिरिक्त अवशोषक पैड।',
    category: 'heavy',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Night_Pack_Heavy_flow_2_11zon.webp?v=1749644616&width=600'
    ],
    features: ['Extra Absorbent', '12 inch Length', '9gm Banana Fiber', 'Overnight Protection'],
    includes: ['4 Heavy Flow Pads', '2 Night Pads'],
    isPopular: true,
    badge: 'Most Popular',
  },
  {
    id: 'pantyliners',
    slug: 'saukhyam-pantyliners-set-of-4',
    name: 'Pantyliner Pack',
    nameHi: 'पैंटीलाइनर पैक',
    price: 480,
    description: 'Ultra-thin, breathable pantyliners for everyday freshness. Perfect for daily discharge and light spotting.',
    descriptionHi: 'रोज़मर्रा की ताज़गी के लिए अल्ट्रा-पतली, सांस लेने योग्य पैंटीलाइनर।',
    category: 'daily',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Pantyliners_3_11zon.webp?v=1749644352&width=600'
    ],
    features: ['Ultra Thin', 'Breathable Cotton', 'Daily Wear Comfort', 'Set of 4'],
    includes: ['4 Pantyliners'],
    badge: 'For Daily Use',
  },
  {
    id: 'first-period-kit',
    slug: 'first-period-kit',
    name: 'First Period Kit',
    nameHi: 'फर्स्ट पीरियड किट',
    price: 550,
    description: 'A gentle, confidence-building kit for girls experiencing their first period. Soft fabric, beginner-friendly design, and a reassuring guide booklet.',
    descriptionHi: 'पहले पीरियड्स के लिए डिज़ाइन की गई कोमल किट - मुलायम कपड़ा, शुरुआती-अनुकूल डिज़ाइन और एक आश्वस्त करने वाली गाइड।',
    category: 'teen',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Saukhyam_Starter_Pack_6_11zon.webp?v=1749644512&width=600'
    ],
    features: ['Extra Soft Fabric', 'Beginner Friendly', 'Discreet Wet Bag', 'Guide Booklet'],
    includes: ['2 Day Pads', '1 Night Pad', '1 Pantyliner', '1 Wet Bag', '1 Guide Booklet'],
    badge: 'For Teens',
    isNew: true,
  },
  {
    id: 'postpartum-recovery-kit',
    slug: 'postpartum-recovery-kit',
    name: 'Postpartum Recovery Kit',
    nameHi: 'पोस्टपार्टम रिकवरी किट',
    price: 1250,
    description: 'Designed for the heavy flow and sensitive recovery phase after childbirth. Maximum absorbency with ultra-gentle organic cotton for sensitive skin.',
    descriptionHi: 'प्रसव के बाद भारी प्रवाह और संवेदनशील रिकवरी चरण के लिए - अधिकतम अवशोषण और संवेदनशील त्वचा के लिए कोमल ऑर्गेनिक कपास।',
    category: 'heavy',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Night_Pack_Heavy_flow_2_11zon.webp?v=1749644616&width=600'
    ],
    features: ['Maximum Absorbency', 'Organic Cotton', 'Skin-Sensitive', 'Night + Heavy Flow'],
    includes: ['4 Heavy Flow Pads', '3 Night Pads', '2 Day Pads', '1 Wet Bag'],
    badge: 'For New Mothers',
    isNew: true,
  },
  {
    id: 'perimenopause-transition-kit',
    slug: 'perimenopause-transition-kit',
    name: 'Perimenopause Transition Kit',
    nameHi: 'पेरिमेनोपॉज़ ट्रांज़िशन किट',
    price: 950,
    description: 'Flexible protection for the unpredictable flow of perimenopause - from light spotting to heavy days. A complete range in one thoughtful kit.',
    descriptionHi: 'पेरिमेनोपॉज़ के अप्रत्याशित प्रवाह के लिए लचीली सुरक्षा - हल्के स्पॉटिंग से भारी दिनों तक।',
    category: 'value',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Super_pack_with_wet_bag_Pouch_8_11zon.webp?v=1749644449&width=600'
    ],
    features: ['All Flow Types', 'Unpredictable Cycle Ready', 'Comfortable Fit', 'Travel Wet Bag'],
    includes: ['2 Heavy Flow Pads', '2 Day Pads', '2 Night Pads', '3 Pantyliners', '1 Wet Bag'],
    badge: 'Midlife Care',
    isNew: true,
  },
  {
    id: 'starter-pack',
    slug: 'starter-pack-with-wet-bag',
    name: 'Starter Pack with Wet Bag',
    nameHi: 'स्टार्टर पैक वेट बैग के साथ',
    price: 430,
    description: 'Perfect for first-time users. Includes essential pads and a convenient wet bag for on-the-go hygiene.',
    descriptionHi: 'पहली बार उपयोग करने वालों के लिए बिल्कुल सही। आवश्यक पैड और एक सुविधाजनक वेट बैग शामिल है।',
    category: 'starter',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Saukhyam_Starter_Pack_6_11zon.webp?v=1749644512&width=600'
    ],
    features: ['Banana Fiber Absorbent', 'Leak-Proof Layer', 'Chemical Free', 'Wet Bag Included'],
    includes: ['2 Day Pads', '1 Night Pad', '1 Wet Bag'],
    badge: 'Best for Beginners',
  },
  {
    id: 'day-pads-6',
    slug: 'day-pads-pack-of-6',
    name: 'Day Pads - Pack of 6',
    nameHi: 'डे पैड्स - 6 का पैक',
    price: 560,
    description: 'Regular flow day pads for comfortable all-day protection. Banana fiber absorbent keeps you fresh and dry.',
    descriptionHi: 'आरामदायक पूरे दिन की सुरक्षा के लिए रेगुलर फ्लो डे पैड।',
    category: 'daily',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Day_pads_pack_of_-6_1_11zon.webp?v=1749644203&width=600'
    ],
    features: ['Regular Flow', 'Banana Fiber Core', 'Leak-Proof', 'Lasts 2-3 Years'],
    includes: ['6 Day Pads'],
    isPopular: true,
  },
  {
    id: 'sampler-pantyliner',
    slug: 'sampler-pack-with-pantyliner',
    name: 'Sampler Pack with Pantyliner',
    nameHi: 'सैम्पलर पैक पैंटीलाइनर के साथ',
    price: 560,
    description: 'Comprehensive sampler with pantyliner included. Experience the full Saukhyam range in one pack.',
    descriptionHi: 'पैंटीलाइनर सहित व्यापक सैम्पलर। एक पैक में पूरी सौख्यम रेंज का अनुभव करें।',
    category: 'starter',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Sampler_pack_with_Pantyliner_4_11zon.webp?v=1749644249&width=600'
    ],
    features: ['Mix of Pad Types', 'Pantyliner Included', 'Chemical Free', 'Great Value'],
    includes: ['1 Day Pad', '1 Night Pad', '1 Pantyliner', '1 Insert'],
  },
  {
    id: 'heal-with-saukhyam',
    slug: 'heal-with-saukhyam',
    name: 'Heal with Saukhyam',
    nameHi: 'सौख्यम के साथ उपचार',
    price: 690,
    description: 'Join our 3-month Period Healing Challenge. Experience improvement in period pain, skin issues, and overall menstrual health.',
    descriptionHi: 'हमारे 3 महीने के पीरियड हीलिंग चैलेंज में शामिल हों।',
    category: 'value',
    images: [
      'https://saukhyampads.org/cdn/shop/files/Saukhyam_Value_Pack_7_11zon_c7cbaec5-7fd8-4d07-a79e-61138389fb07.webp?v=1749644402&width=600'
    ],
    features: ['3-Month Challenge', 'Healing Protocol', 'Community Support', 'Health Tracking'],
    includes: ['3 Day Pads', '2 Night Pads', '1 Wet Bag', 'Healing Guide'],
    isNew: true,
    badge: 'New',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

/** Catalog order for prev/next navigation on product detail pages */
export function getAdjacentProducts(slug: string): {
  prev: Product | null;
  next: Product | null;
} {
  const index = products.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? products[index - 1]! : null,
    next: index < products.length - 1 ? products[index + 1]! : null,
  };
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}

export function getPopularProducts(): Product[] {
  return products.filter(p => p.isPopular);
}

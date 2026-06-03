import type { BlogPost } from '@/types/blog';
import { applyLinkedInPostMedia } from './linkedinPostMedia';

const LINKEDIN_COMPANY = 'https://www.linkedin.com/company/saukhyam-foundation/';
const LINKEDIN_ANJU = 'https://www.linkedin.com/in/anjubist/';

const linkedinCorePostsRaw: BlogPost[] = [
  {
    id: 'li-1',
    slug: 'heal-launch-bhubaneshwar-disposable-pads-health',
    title: 'HEAL Launch in Bhubaneshwar: Are Disposable Sanitary Pads Affecting Women\'s Health?',
    titleHi: 'भुवनेश्वर में HEAL लॉन्च: क्या Disposable Sanitary Pads महिलाओं के स्वास्थ्य को प्रभावित कर रहे हैं?',
    excerpt:
      'At the HEAL Launch at Nexus Esplanade Mall, Bhubaneshwar, data from over 10,000 girls revealed an alarming truth — 8 out of 10 reported period problems that may be linked to chemicals in disposable pads.',
    excerptHi:
      'भुवनेश्वर के Nexus Esplanade Mall में HEAL लॉन्च पर 10,000 से अधिक लड़कियों के data ने एक चौंकाने वाला सच उजागर किया।',
    image: '',
    coverAlt: '',
    date: '2026-05-28',
    readTime: '5 min read',
    category: 'heal',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['HEAL', 'Odisha', 'Bhubaneshwar', 'Disposable Pads', "Women's Health", 'Nexus Esplanade'],
    featured: true,
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: 'At the HEAL Launch held at Nexus Esplanade Mall, Bhubaneshwar, an important discussion took place around menstrual health and the hidden impact of disposable sanitary napkins on women\'s bodies.',
      },
      {
        type: 'paragraph',
        text: 'The HEAL (Health. Environment. Active Living.) programme, designed with gynecologists, has been working for nearly two years to help girls facing period-related problems. Recently, data from over 10,000 girls was analysed — and the results were alarming.',
      },
      { type: 'heading', level: 2, text: '8 Out of 10 Girls Are Reporting Period Problems' },
      {
        type: 'paragraph',
        text: 'Around 8 out of 10 girls in the HEAL cohort reported issues such as cramps, rashes, irregular periods, and heavy bleeding. The programme believes these problems may not only be caused by hormones or lifestyle — they could also be linked to chemicals and toxins present in disposable sanitary pads that are in direct contact with one of the most absorptive parts of the body.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          '80% of girls in the 10,000-strong HEAL cohort reported at least one menstrual health issue',
          'Chemicals in disposable pads — including dioxins, SAP, and synthetic fragrance — are under increasing scrutiny',
          'HEAL encourages a complete switch to reusable menstrual products for six months to observe health changes',
          'Over 5,000 young people shifted away from disposable products in just one year through HEAL',
        ],
      },
      {
        type: 'quote',
        text: 'We are not saying disposable pads are the only cause. We are saying we cannot rule them out — and every girl deserves to know that.',
        attribution: 'Saukhyam Foundation, HEAL programme',
      },
      {
        type: 'paragraph',
        text: 'At the launch, Bhubaneshwar Mayor Sulochana Das raised important questions about the hygiene and practicality of reusable pads. These concerns were addressed directly by CARE City Coordinator Madhusmita Mahapatra, who shared her own positive experience of using reusable pads for more than a year. The conversation between a public figure asking honest questions and a peer answering from lived experience — that is exactly the kind of dialogue HEAL is designed to start.',
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Mentors and ambassadors honoured',
        text: 'The event honoured mentors and ambassadors who helped more than 5,000 young people shift away from disposable menstrual products in just one year. HEAL is now active in Bhubaneshwar, with plans to expand across Odisha.',
      },
    ],
  },
  {
    id: 'li-2',
    slug: 'ganga-kumbh-upsrlm-partnership',
    title: 'From the Banks of the Ganga to 5 Crore Rural Menstruators',
    titleHi: 'गंगा के तट से 5 करोड़ ग्रामीण महिलाओं तक',
    excerpt:
      'At Kumbh Mela, rural women quietly switched to reusable pads. That ripple has grown into a five-year MoU with Uttar Pradesh State Rural Livelihood Mission.',
    excerptHi:
      'कुंभ मेले में शुरुआत हुई, अब UP SRLM के साथ 5 साल का समझौता।',
    image: '',
    coverAlt: '',
    date: '2026-04-14',
    readTime: '7 min read',
    category: 'reach',
    author: 'Anju Bist',
    authorRole: 'Managing Director, Saukhyam Foundation',
    authorBio: 'Leading Saukhyam\'s REACH and CARE programmes across India.',
    tags: ['UPSRLM Partnership', 'Uttar Pradesh', 'Kumbh Mela', 'Ganga'],
    sourceUrl: 'https://www.linkedin.com/posts/anjubist_menstrualhealth-socialimpact-ruralindia-activity-7444264714261577728--ViS',
    content: [
      {
        type: 'paragraph',
        text: 'At the banks of the Ganga, not all offerings are flowers. Some are decisions. More than a year ago at the Kumbh Mela, many women made one such decision quietly.',
      },
      {
        type: 'paragraph',
        text: 'A simple hoarding asked them to switch to reusable pads and keep our rivers clean. Scan a QR code, fill a form, receive a pad set. Many who came forward were Kalpavasis - rural women living near the Sangam, immersed in faith. They took pads for their daughters and daughters-in-law.',
      },
      { type: 'heading', level: 2, text: 'A Small Shift That Changes Everything' },
      {
        type: 'quote',
        text: 'Pehle discomfort hota tha … ab lagta hai normal dinon jaisa hi hai.',
      },
      {
        type: 'paragraph',
        text: 'We often hear this from women after they switch. A small shift in how periods feel. But one that changes everything about those days.',
      },
      { type: 'heading', level: 2, text: 'Scaling With UPSRLM' },
      {
        type: 'paragraph',
        text: 'Earlier this month, we signed an MoU with the Uttar Pradesh State Rural Livelihood Mission. Over the next five years: 7-10 Saukhyam production centres in rural Uttar Pradesh, serving roughly 5 crore rural menstruators under 30. Even a 10% shift means 50 lakh users. We begin with Barabanki and Lucknow.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Better health and less plastic',
          'Lower long-term costs for families',
          'Rural livelihoods through local production',
          'Dignity at scale',
        ],
      },

      {
        type: 'paragraph',
        text: 'It began quietly at the banks of the Ganga, with some women choosing differently. Now, it is ready to flow much further.',
      },
    ],
  },
  {
    id: 'li-14',
    slug: 'jyoti-rmm-mumbai-menstrual-awareness',
    title: "When a Women's Organisation Opens Its Doors to Period Health",
    titleHi: 'जब एक महिला संगठन ने मासिक स्वास्थ्य के लिए दरवाज़े खोले',
    excerpt:
      'At Jyoti Rajasthani Mahila Mandal in Mumbai, a room full of women heard about reusable pads for the first time — and asked all the right questions.',
    excerptHi:
      'मुंबई में ज्योति राजस्थानी महिला मंडल में महिलाओं ने पहली बार reusable pads के बारे में सुना — और सही सवाल पूछे।',
    image: '',
    coverAlt: '',
    date: '2026-04-29',
    readTime: '4 min read',
    category: 'reach',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['REACH', 'Maharashtra', 'Mumbai', 'Community Outreach', 'Rajasthani Mahila Mandal', 'Awareness'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Some of the most powerful menstrual health conversations happen not in clinics or classrooms, but in community halls — where women already trust each other, and where one honest question opens the door to twenty more.",
      },
      {
        type: 'paragraph',
        text: "Saukhyam was invited to conduct an awareness session at Jyoti Rajasthani Mahila Mandal, a well-established women's organisation in Mumbai. The session was built around demonstration — attendees saw, touched, and held the reusable pad sets. A quote from Sri Mata Amritanandamayi Devi — Amma — anchored the room: a reminder that every woman carries within her the power to choose differently.",
      },
      { type: 'heading', level: 2, text: "Questions That Deserve Honest Answers" },
      {
        type: 'paragraph',
        text: "Women who have used disposable pads for years approach reusable pads with healthy scepticism. Is it hygienic? How do I wash it? What if I am travelling? These are not objections — they are exactly the right questions, and they deserve clear, practical answers grounded in experience.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Reusable pads need only water and sunlight — no special detergent required',
          'Banana fiber naturally resists bacterial growth between washes',
          'Each set replaces over 100 disposable pads across its lifetime',
          'A compact travel pouch makes carrying clean and used pads easy',
        ],
      },
      {
        type: 'quote',
        text: "I have used disposables for thirty years. Nobody ever showed me what else was possible. Today someone finally did.",
        attribution: 'Session participant, Jyoti Rajasthani Mahila Mandal, Mumbai',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Invite Saukhyam to your community',
        text: "Saukhyam conducts awareness sessions with women's organisations, cultural associations, residential societies, and community groups across India. Write to info@saukhyampads.org to invite a session.",
      },
    ],
  },
  {
    id: 'li-15',
    slug: 'care-campus-students-map-period-problems',
    title: 'What Happens When Students Map Their Own Menstrual Health Goals',
    titleHi: 'जब छात्र अपने मासिक स्वास्थ्य लक्ष्यों को खुद तय करते हैं',
    excerpt:
      'In a CARE campus workshop, students spread a blank sheet of paper on a table, picked up markers, and began mapping out why periods are still a silent problem — and what they could do about it.',
    excerptHi:
      'CARE campus workshop में, छात्रों ने एक कागज़ पर markers से उन कारणों को map किया जो periods को एक silent समस्या बनाते हैं।',
    image: '',
    coverAlt: '',
    date: '2026-04-17',
    readTime: '4 min read',
    category: 'care',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['CARE', 'Pan-India', 'Campus', 'Youth Leadership', 'Brainstorming', 'Menstrual Health'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Project CARE does not begin with a lecture. It begins with a blank sheet of paper and a question: What do you already know? What are you not sure about? And what do you want to do about it?",
      },
      {
        type: 'paragraph',
        text: "In a recent campus workshop, a group of students spread a mind-map poster across a table and began filling it in together. Around the central question — why don't more people use reusable menstrual products? — branches grew: stigma, lack of awareness, fear of discomfort, cost assumptions, absence of peer role models. Each branch was followed by another question: what can we do?",
      },
      { type: 'heading', level: 2, text: "The Power of Student-Led Analysis" },
      {
        type: 'paragraph',
        text: "When students identify the problem themselves, something fundamentally different happens. They do not just absorb information — they take ownership of it. The transition from passive recipient to active advocate is the core goal of CARE, and it starts at exactly this kind of table.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Peer-led conversations convert more people than top-down awareness campaigns',
          'Students identify barriers that adult facilitators often overlook',
          'Brainstorming workshops surface local solutions tailored to the campus context',
          'CARE cohort members become the first visible reusable product users in their hostels',
        ],
      },
      {
        type: 'quote',
        text: "We thought we were doing a workshop. By the end, we had a plan. And four of us had already decided to switch.",
        attribution: 'CARE cohort participant',
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Bring CARE to your campus',
        text: "Project CARE is active on campuses across India. If your institution wants to build a student-led menstrual health movement, contact info@saukhyampads.org.",
      },
    ],
  },
  {
    id: 'li-16',
    slug: 'saukhyam-community-amritapuri-ammas-vision',
    title: "Rooted in Amma's Vision: Saukhyam's Community of Changemakers",
    titleHi: 'अम्मा की दृष्टि में निहित: Saukhyam के परिवर्तनकारियों का समुदाय',
    excerpt:
      "Saukhyam was born from Amma's vision of selfless service. Every time the community gathers — from volunteers to founders — that origin is renewed.",
    excerptHi:
      'Saukhyam का जन्म अम्मा की निःस्वार्थ सेवा की दृष्टि से हुआ। जब भी यह समुदाय एकत्रित होता है, वह उद्देश्य नए सिरे से जीवित हो जाता है।',
    image: '',
    coverAlt: '',
    date: '2026-04-01',
    readTime: '4 min read',
    category: 'reach',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['Amma', 'Kerala', 'Amritapuri', 'Community', 'Purpose', 'Saukhyam Mission'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Saukhyam was not built from a business plan. It was built from a principle: that the dignity and health of every woman matters, regardless of where she is born or what resources she has access to. That principle comes directly from Amma — Sri Mata Amritanandamayi Devi.",
      },
      {
        type: 'paragraph',
        text: "When the Saukhyam community gathers at Amritapuri, Amma's ashram in Kerala, it is more than a meeting. It is a renewal — of purpose, of relationships, and of the shared understanding of why this work exists. The women who fill this space come from different backgrounds, different roles, and different parts of India. What brings them together is a single shared commitment.",
      },
      { type: 'heading', level: 2, text: "Service as the Foundation" },
      {
        type: 'paragraph',
        text: "Amma's message has always been clear: the world's problems can be solved if enough people choose to serve. Saukhyam operationalises that message through menstrual health — a domain that sits at the intersection of dignity, environment, and public health. Every pad distributed is one act of service. Multiplied by thirty lakh, it becomes a movement.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          "Saukhyam's founding is rooted in Amrita SEEF — Amrita Social Entrepreneurship Foundation",
          'Volunteers, field workers, and community leaders gather to align on mission and progress',
          'Amritapuri serves as a spiritual anchor for Saukhyam teams across India',
          'The community of changemakers includes women from Kerala to Bihar to Uttarakhand',
        ],
      },
      {
        type: 'quote',
        text: "If we want a better world, we need to start with the most fundamental things — the health and dignity of every woman. That is not a side goal. It is the main one.",
        attribution: "Inspired by Amma's teachings, Saukhyam Foundation",
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'About the Saukhyam community',
        text: "Saukhyam Foundation is a social enterprise supported by Amrita SEEF and rooted in Amma's vision of service. To learn more or become part of the community, visit saukhyampads.org.",
      },
    ],
  },
  {
    id: 'li-17',
    slug: 'reach-packed-hall-200-attendees-period-awareness',
    title: 'A Hall Full of Change: 200+ Attendees, One Conversation About Periods',
    titleHi: 'बदलाव से भरा एक सभागार: 200+ उपस्थित, मासिक धर्म पर एक बातचीत',
    excerpt:
      'When over 200 students and staff fill an auditorium to learn about menstrual health, something has already shifted — the question is no longer whether this conversation is needed, but how far it can travel.',
    excerptHi:
      'जब 200 से अधिक छात्र और कर्मचारी menstrual health के बारे में जानने के लिए एकत्रित होते हैं, तो कुछ बदल चुका होता है।',
    image: '',
    coverAlt: '',
    date: '2026-03-10',
    readTime: '5 min read',
    category: 'reach',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['REACH', 'Pan-India', 'Awareness Session', 'Large Scale', 'Educational Institution', 'Period Health'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Scale in awareness work does not always come from technology or media. Sometimes it comes from walking into a hall, setting up a screen, and filling every seat.",
      },
      {
        type: 'paragraph',
        text: "At a recent large-scale REACH session, over 200 students and staff filled an institutional auditorium to attend a Saukhyam menstrual health awareness programme. The presentation covered the full picture: what reusable products are, why disposables carry hidden health costs, and what the switch looks like in practice. It is rare for a topic like this to fill a room of this size — but menstrual health, when framed as a health, environmental, and dignity issue together, draws exactly that response.",
      },
      { type: 'heading', level: 2, text: "What Large-Scale Sessions Accomplish" },
      {
        type: 'paragraph',
        text: "A session this size does something a small workshop cannot: it normalises the conversation publicly. When 200 people sit together and hear that painful periods are not inevitable, that disposables carry chemicals, and that reusables are a realistic option — the stigma around discussing menstruation starts to crack.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Large group sessions signal institutional commitment — not just individual curiosity',
          'Social proof accelerates behaviour change: if everyone is hearing this, it is safe to act on it',
          'Q&A at scale surfaces the most common fears and myths — allowing targeted follow-up',
          'Sessions like this are followed by small-group CARE cohort formations for deeper engagement',
        ],
      },
      {
        type: 'quote',
        text: "I came in assuming it was going to be a basic hygiene talk. I left knowing I had been making choices without information for years.",
        attribution: 'Attendee, large-scale REACH session',
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Large-scale institutional sessions',
        text: 'Saukhyam conducts full-institution awareness programmes for colleges, schools, and corporate campuses. Contact info@saukhyampads.org to plan a session for your institution.',
      },
    ],
  },
  {
    id: 'li-18',
    slug: 'iwd-2026-she-awards-women-social-impact',
    title: "International Women's Day 2026: Celebrating She Who Is Changing the World",
    titleHi: 'अंतर्राष्ट्रीय महिला दिवस 2026: उन महिलाओं का उत्सव जो दुनिया बदल रही हैं',
    excerpt:
      "On International Women's Day 2026, the SHE Awards brought together women-led social enterprises, changemakers, and community builders — a reminder of how much is being built quietly.",
    excerptHi:
      'अंतर्राष्ट्रीय महिला दिवस 2026 पर, SHE Awards ने महिलाओं के नेतृत्व वाले सामाजिक उद्यमों को एकजुट किया।',
    image: '',
    coverAlt: '',
    date: '2026-03-08',
    readTime: '4 min read',
    category: 'care',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ["International Women's Day", 'Maharashtra', 'SHE Awards', 'Women Empowerment', 'Social Impact', 'Recognition'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Women's empowerment is often discussed in terms of numbers — percentages in boardrooms, gap indices, policy targets. But the most vivid expression of it is simpler: women who are building something real, being recognised by other women who understand what that took.",
      },
      {
        type: 'paragraph',
        text: "On International Women's Day 2026, the SHE Awards celebrated exactly that. Women from across sectors — social enterprise, health, education, and community leadership — gathered to recognise one another's work. Saukhyam was among the organisations represented, acknowledged for its work in menstrual health, environmental sustainability, and rural women's empowerment across India.",
      },
      { type: 'heading', level: 2, text: "Why Recognition in Community Matters" },
      {
        type: 'paragraph',
        text: "Awards and platforms matter not just for the recipients, but for what they signal to everyone watching. When a room full of women sees menstrual health work being recognised alongside work in climate, education, and enterprise — it confirms that this work belongs at the same table. That confirmation travels.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          "Saukhyam has been recognised at state, national, and international platforms since 2017",
          "Recognition builds public trust — which in turn accelerates community adoption",
          "Women-led awards ecosystems create cross-sector collaborations that government programmes alone cannot",
          "IWD 2026 recognition marks eight years of Saukhyam's field presence and growth",
        ],
      },
      {
        type: 'quote',
        text: "When you are working in villages and communities, it is easy to feel invisible. These recognitions remind us — and the world — that the work is real.",
        attribution: 'Saukhyam Foundation team',
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Thank you',
        text: "Grateful to the SHE Awards organising team and to every woman in that room who is building change. You make the work easier for all of us.",
      },
    ],
  },
  {
    id: 'li-19',
    slug: 'saukhyam-sustainable-product-ecosystem-partnership',
    title: 'Building the Ecosystem: When Sustainable Living Becomes a Shared Vision',
    titleHi: 'पारिस्थितिकी तंत्र का निर्माण: जब टिकाऊ जीवन एक साझा दृष्टि बन जाती है',
    excerpt:
      "Menstrual health does not exist in isolation. When Saukhyam visits spaces where sustainable living is already practiced — something clicks into place.",
    excerptHi:
      'Menstrual health अकेला नहीं है। जब Saukhyam उन जगहों पर जाती है जहाँ sustainable living पहले से practiced है — कुछ जुड़ जाता है।',
    image: '',
    coverAlt: '',
    date: '2026-03-05',
    readTime: '4 min read',
    category: 'reach',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['Sustainability', 'Pan-India', 'Partnership', 'Eco Products', 'Banana Fiber', 'Collaboration'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Sustainable living is not a single product or a single habit. It is an ecosystem — of choices, suppliers, communities, and advocates who reinforce each other's work.",
      },
      {
        type: 'paragraph',
        text: "When Saukhyam visited a partner store showcasing natural and eco products — from banana fiber goods to natural baskets, herbal items, and sustainable homewares — it was a reminder of how menstrual health fits into something larger. Reusable pads are one part of a world that is already building alternatives to the disposable default. That world is growing.",
      },
      { type: 'heading', level: 2, text: "Banana Fiber: More Than a Pad" },
      {
        type: 'paragraph',
        text: "Saukhyam's banana fiber pads are made from the stem of the banana plant — a material that is agricultural waste until it becomes a resource. When people encounter banana fiber products in a broader sustainable living context, the connection makes immediate sense: this is not an isolated experiment, it is part of a materials revolution already underway.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Banana fiber is compostable, breathable, and naturally antibacterial',
          'Saukhyam sources banana fiber from agricultural communities — creating rural livelihoods',
          'Sustainable product stores create visibility for reusable menstrual products among eco-conscious consumers',
          'Cross-category partnerships expand Saukhyam\'s reach beyond dedicated menstrual health channels',
        ],
      },
      {
        type: 'quote',
        text: "Every store that carries reusable menstrual products alongside other sustainable goods normalises the choice. That normalisation is half the work.",
        attribution: 'Anju Bist, Managing Director, Saukhyam Foundation',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Stock or distribute Saukhyam products',
        text: 'Saukhyam partners with retail stores, eco boutiques, wellness centres, and institutional canteens to make reusable pads more visible and accessible. Write to info@saukhyampads.org to explore a distribution partnership.',
      },
    ],
  },
  {
    id: 'li-20',
    slug: 'anju-bist-national-panel-reusable-pads',
    title: 'From Villages to National Panels: Anju Bist Speaks on Reusable Menstrual Health',
    titleHi: 'गाँवों से राष्ट्रीय मंचों तक: Anju Bist reusable menstrual health पर बोलती हैं',
    excerpt:
      'When Anju Bist takes a seat on a national panel, she brings with her the voices of thirty lakh women who rarely get to speak for themselves.',
    excerptHi:
      'जब Anju Bist एक राष्ट्रीय panel में बैठती हैं, वे तीस लाख महिलाओं की आवाज़ लेकर आती हैं जो शायद ही कभी खुद बोल पाती हैं।',
    image: '',
    coverAlt: '',
    date: '2026-02-27',
    readTime: '5 min read',
    category: 'reach',
    author: 'Anju Bist',
    authorRole: 'Managing Director, Saukhyam Foundation',
    authorBio:
      "Pad-woman of India and co-creator of the world's first reusable menstrual pad made from banana fiber.",
    tags: ['Panel Discussion', 'Delhi', 'National Platform', 'Anju Bist', 'Menstrual Health Policy', 'NDTV'],
    sourceUrl: 'https://www.linkedin.com/in/anjubist/recent-activity/all/',
    content: [
      {
        type: 'paragraph',
        text: "A national conference on menstrual health is a different kind of conversation. It is not about convincing individuals to switch products. It is about shaping the conditions — policy, funding, narrative, infrastructure — that make the switch possible for everyone.",
      },
      {
        type: 'paragraph',
        text: "Anju Bist joined a panel of experts and policymakers to speak about reusable menstrual health — where India stands, what the barriers are, and what would need to shift for reusables to move from a niche choice to the mainstream. The session was moderated by an editorial head from NDTV, bringing national media visibility to a topic that is still too often absent from mainstream health coverage.",
      },
      { type: 'heading', level: 2, text: "What the Panel Heard" },
      {
        type: 'paragraph',
        text: "The argument for reusables is no longer just an environmental or economic one — it is a health argument. As evidence linking chemical exposure from disposable pads to hormonal disruption accumulates, the case for a policy-level shift becomes harder to dismiss. Anju made that case directly: the women Saukhyam works with did not switch because of a marketing campaign. They switched because someone explained the difference between what was available and what was possible.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'National panels create policy adjacency — conversations that can influence government procurement',
          'Media visibility normalises the topic and reduces the stigma of public discussion',
          "Anju's testimony represents 30 lakh women and girls reached through Saukhyam's REACH programme",
          'Menstrual health policy has been moving — Karnataka, Bihar, and UPSRLM are proof',
        ],
      },
      {
        type: 'quote',
        text: "Every time I speak on a national stage, I am speaking for women who will never have a seat at that table. That is not pressure. It is purpose.",
        attribution: 'Anju Bist, Managing Director, Saukhyam Foundation',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Invite Anju Bist to speak',
        text: 'Anju Bist is available to speak at conferences, policy forums, and academic institutions on menstrual health, sustainable entrepreneurship, and rural women\'s empowerment. Write to info@saukhyampads.org.',
      },
    ],
  },
  {
    id: 'li-21',
    slug: 'saukhyam-amma-malayalam-media-feature',
    title: "When the Media Tells the Story: Saukhyam and Amma in the Malayalam Press",
    titleHi: 'जब मीडिया कहानी सुनाता है: Malayalam Press में Saukhyam और अम्मा',
    excerpt:
      "A Malayalam magazine spread on Amma and the women gathered around Her speaks to a movement that media rarely captures — the quiet, continuous work of community and care.",
    excerptHi:
      'अम्मा और उनके आसपास महिलाओं पर एक Malayalam पत्रिका का spread एक ऐसे आंदोलन की बात करता है जिसे media कम ही capture करता है।',
    image: '',
    coverAlt: '',
    date: '2026-02-19',
    readTime: '4 min read',
    category: 'heal',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['Media Coverage', 'Kerala', 'Amma', 'Mathrubhumi', 'Community Recognition'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "There is a particular kind of visibility that matters in social work — not the viral post or the award ceremony, but the measured, thoughtful feature that tells a story in full. When a Malayalam publication devoted a double-page spread to Amma and the community of women gathered around Her, it captured something that numbers rarely can.",
      },
      {
        type: 'paragraph',
        text: "The feature — titled 'Children with Amma' — showed what decades of service and solidarity look like in a single photograph: a hall full of women from every age and background, gathered together with joy. Saukhyam is part of that gathering. Its roots in Amma's teaching of selfless service are not incidental to what the organisation does — they are the reason it exists.",
      },
      { type: 'heading', level: 2, text: "Why Media Coverage of This Kind Matters" },
      {
        type: 'paragraph',
        text: "Press coverage of community work in regional languages reaches audiences that national English-language coverage does not. A Malayalam feature about Amma and her community touches the families, women's groups, and local leaders who make up the grassroots network that sustains social enterprises like Saukhyam. It validates work that is often invisible to mainstream metrics.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Regional language media coverage builds local trust and community adoption',
          "Amma's story and Saukhyam's mission are part of the same continuum of service",
          'Feature coverage in Kerala connects to Saukhyam\'s satellite centres and production units in the state',
          'Community visibility accelerates volunteer recruitment and organisational partnerships',
        ],
      },
      {
        type: 'quote',
        text: "When the press tells your story, it reaches people you could never reach alone. And when it tells it with respect and depth, something permanent is created.",
        attribution: 'Saukhyam Foundation',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Media enquiries',
        text: "For media interviews, features, and coverage requests, write to info@saukhyampads.org. Saukhyam Foundation works with print, digital, and broadcast media across English, Hindi, and Indian regional languages.",
      },
    ],
  },
  {
    id: 'li-22',
    slug: 'saukhyam-deshbhakt-social-enterprise-interview',
    title: 'Social Enterprises That Scale: Saukhyam Foundation on The Deshbhakt',
    titleHi: 'जो Social Enterprises Scale होते हैं: The Deshbhakt पर Saukhyam Foundation',
    excerpt:
      "Being featured on The Deshbhakt — one of India's most-watched YouTube channels on social and political thought — marks a new chapter in Saukhyam's visibility as a social enterprise.",
    excerptHi:
      'The Deshbhakt — भारत के सबसे अधिक देखे जाने वाले YouTube channels में से एक — पर featured होना Saukhyam के लिए एक नया chapter है।',
    image: '',
    coverAlt: '',
    date: '2026-02-15',
    readTime: '5 min read',
    category: 'care',
    author: 'Anju Bist',
    authorRole: 'Managing Director, Saukhyam Foundation',
    authorBio:
      "Pad-woman of India and co-creator of the world's first reusable menstrual pad made from banana fiber.",
    tags: ['Social Enterprise', 'Delhi', 'The Deshbhakt', 'YouTube', 'Impact', 'Anju Bist'],
    sourceUrl: 'https://www.linkedin.com/in/anjubist/recent-activity/all/',
    content: [
      {
        type: 'paragraph',
        text: "Social enterprises are not just about the product. They are about the story — the problem being solved, the people whose lives are changing, and the system that needs to shift for the change to last. When that story reaches a national audience through a platform like The Deshbhakt, it travels further and faster than any field programme alone can.",
      },
      {
        type: 'paragraph',
        text: "The Deshbhakt is one of India's most influential YouTube channels on social, political, and entrepreneurial thought. Being invited to speak on the platform gave Saukhyam the opportunity to make the case for reusable menstrual health not just as a women's issue, but as an economic, environmental, and public health issue that concerns everyone.",
      },
      { type: 'heading', level: 2, text: "What Social Enterprise Really Means" },
      {
        type: 'paragraph',
        text: "The conversation on The Deshbhakt covered what it means to build a social enterprise that genuinely scales — not just grows in numbers, but deepens in impact. Saukhyam has reached thirty lakh women and girls. But scale is not just reach. It is adoption that sustains itself, communities that train other communities, and a narrative shift that outlasts any one campaign.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Saukhyam has reached 30+ lakh women and girls across rural and semi-urban India since 2017',
          'Sustainable enterprise must build local ownership — not dependence on a central organisation',
          'The Deshbhakt audience includes students, young professionals, and changemakers who are future advocates',
          'National media presence reduces the cost of trust-building in new geographies',
        ],
      },
      {
        type: 'quote',
        text: "If you want something to scale, you need the story to scale first. Products follow stories. Always.",
        attribution: 'Anju Bist, Managing Director, Saukhyam Foundation',
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Watch the interview',
        text: 'The Deshbhakt interview featuring Saukhyam Foundation is available on YouTube. Search "Saukhyam Deshbhakt" to watch the full conversation.',
      },
    ],
  },
  {
    id: 'li-23',
    slug: 'reach-distribution-hundred-women-one-session',
    title: 'When 100+ Women in One Room Say Yes to Reusable Periods',
    titleHi: 'जब एक कमरे में 100+ महिलाएं reusable periods के लिए हाँ कहती हैं',
    excerpt:
      'A large-scale REACH distribution session where over 100 women left with Saukhyam pad sets in hand — and the knowledge of why the switch matters.',
    excerptHi:
      'एक large-scale REACH distribution session जहाँ 100 से अधिक महिलाएं Saukhyam pad sets लेकर गईं — और यह जानकर कि switch क्यों ज़रूरी है।',
    image: '',
    coverAlt: '',
    date: '2026-02-10',
    readTime: '4 min read',
    category: 'reach',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['REACH', 'Pan-India', 'Distribution', 'Community', 'Period Products', 'Large Scale'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "Menstrual health work does not end with awareness. The moment that matters — the moment that creates real, lasting change — is when a woman walks out of a session with a reusable pad in her hands and the knowledge of how to use it.",
      },
      {
        type: 'paragraph',
        text: "At a recent large-scale REACH session, over a hundred women from diverse backgrounds — staff, workers, community members, and students — came together for an awareness programme that ended with distribution. Each woman received a Saukhyam pad set along with a care guide, a washing demonstration, and follow-up contact details. The room that had been full of questions was, by the end, full of choices.",
      },
      { type: 'heading', level: 2, text: "Distribution as the Beginning, Not the End" },
      {
        type: 'paragraph',
        text: "Saukhyam does not treat distribution as the conclusion of outreach. A pad set in someone's hands is the start of a relationship — with a product, with a new understanding of their own health, and with the Saukhyam community. Follow-up sessions, peer groups, and helpline support ensure that the distribution moment converts into sustained adoption.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Over 100 women received Saukhyam pad sets alongside full care and usage training',
          'Follow-up sessions scheduled within 30 days to track adoption and address concerns',
          'Women who attend in groups show higher continued adoption than individual recipients',
          'Institutional venue partnerships ensure reach into workplace and community networks simultaneously',
        ],
      },
      {
        type: 'quote',
        text: "We expected them to take the pads politely and leave. Instead, they stayed, asked questions, and took extra sets for daughters and friends.",
        attribution: 'Saukhyam REACH facilitator',
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Organise a REACH distribution session',
        text: 'Saukhyam can organise large-scale distribution sessions for corporates, government bodies, NGOs, and community organisations. Write to info@saukhyampads.org to plan an event.',
      },
    ],
  },
  {
    id: 'li-24',
    slug: 'telangana-government-saukhyam-collaboration',
    title: 'Government as Partner: Saukhyam and Telangana Join Hands on Menstrual Health',
    titleHi: 'सरकार एक भागीदार के रूप में: Saukhyam और तेलंगाना ने menstrual health पर हाथ मिलाया',
    excerpt:
      "A formal ceremony with Telangana district government officials marks a significant step — when the state becomes an active partner in scaling menstrual health, reach multiplies.",
    excerptHi:
      'तेलंगाना जिला सरकार के अधिकारियों के साथ एक औपचारिक समारोह एक महत्वपूर्ण कदम है — जब राज्य एक सक्रिय भागीदार बनता है।',
    image: '',
    coverAlt: '',
    date: '2025-11-01',
    readTime: '5 min read',
    category: 'reach',
    author: 'Saukhyam Foundation',
    authorRole: 'Official Update',
    authorBio:
      'Saukhyam Foundation works at the intersection of menstrual health, environmental sustainability, and ending period poverty.',
    tags: ['Government Partnership', 'Telangana', 'Policy', 'MoU', 'Public Health'],
    sourceUrl: 'https://www.linkedin.com/company/saukhyam-foundation/posts/?feedView=all',
    content: [
      {
        type: 'paragraph',
        text: "No social enterprise can scale to every village, every school, every government hospital on its own. The moment government steps in as a partner — not just as a funder but as an active implementer — the pace of change becomes structurally different.",
      },
      {
        type: 'paragraph',
        text: "At a formal ceremony in Hyderabad, Saukhyam joined Telangana district government officials to formalise a collaborative partnership on menstrual health. District administration, social welfare departments, and community health officers came together to sign and acknowledge a framework for taking Saukhyam's REACH programme into government-administered communities. This is how public health transformations begin.",
      },
      { type: 'heading', level: 2, text: "Why Government Partnership Changes the Numbers" },
      {
        type: 'paragraph',
        text: "When a district collector and the social welfare administration are aligned behind a menstrual health initiative, several things become possible immediately: access to government-run schools and anganwadis, integration with existing women's SHG networks, official endorsement that removes community-level resistance, and inclusion in government health records for tracking and accountability.",
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          "Telangana government partnership enables access to thousands of government-administered women's groups",
          'Integration with district health infrastructure multiplies REACH without multiplying cost',
          'Official government endorsement reduces community-level stigma around menstrual health conversations',
          'This model joins existing government partnerships in Bihar (UPSRLM) and Karnataka',
        ],
      },
      {
        type: 'quote',
        text: "We do not need the government to fund us. We need them to open doors. When they do, what was previously unreachable becomes reachable overnight.",
        attribution: 'Anju Bist, Managing Director, Saukhyam Foundation',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Government and CSR partnerships',
        text: "Saukhyam works with state governments, district administrations, and CSR partners to integrate menstrual health into existing public health frameworks. To explore a formal partnership, write to info@saukhyampads.org.",
      },
    ],
  },
  {
    id: 'li-25',
    slug: 'musahar-community-reusable-pads-bihar',
    title: 'Reusable Pads for Musahar Girls and Women in Bihar',
    titleHi: 'बिहार में मुसहर समुदाय के लिए पुन: प्रयोज्य पैड',
    excerpt:
      'When SBI Foundation reached out to distribute Saukhyam pads among Musahar girls and women in Bihar, the answer was immediate: yes. We had seen what one consistent intervention can do.',
    excerptHi:
      'जब SBI Foundation ने मुसहर समुदाय में पैड वितरण की पहल की, तो हमारा जवाब तुरंत हाँ था।',
    image: '',
    coverAlt: '',
    date: '2026-03-15',
    readTime: '6 min read',
    category: 'reach',
    author: 'Anju Bist',
    authorRole: 'Managing Director, Saukhyam Foundation',
    authorBio:
      "Pad-woman of India and co-creator of the world's first reusable menstrual pad made from banana fiber.",
    tags: ['Musahar Outreach', 'Bihar', 'SBI Foundation', 'Rural India', 'Period Poverty'],
    sourceUrl:
      'https://www.linkedin.com/posts/anjubist_socialimpact-ruralindia-poverty-activity-7447666149120532481-4D9c',
    content: [
      {
        type: 'paragraph',
        text: '"Musahar" literally means one who eats rats. Pause for a second. Why would anyone eat rats? Extreme poverty. There are an estimated 40 lakh people in Bihar from this Dalit community, and many more across Uttar Pradesh, Jharkhand, West Bengal, and Nepal.',
      },
      {
        type: 'paragraph',
        text: "I first came face-to-face with the Musahar community while travelling across some of India's most backward regions, identifying villages where teams from Amrita Vishwa Vidyapeetham would later work. Mud huts. Pigs roaming freely. Children out of school. Girls married early. This was not decades ago. This was in 2013–14.",
      },
      { type: 'heading', level: 2, text: 'One Intervention, One Chance' },
      {
        type: 'paragraph',
        text: 'We started small: a tuition teacher, a health worker, one basti. Over time, children who chose education became young adults building lives very different from the ones they were born into. Intervention does not need scale to start working. It just needs intent.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Musahar community faces extreme poverty — menstrual health is entirely inaccessible without outside intervention',
          'Girls in these communities are often married before adolescence, making early menstrual health education critical',
          'Reusable pads, once the knowledge of care is established, are the most sustainable option for communities far from supply chains',
          'Peer adoption within tight-knit Dalit communities accelerates behaviour change faster than external campaigns',
        ],
      },
      {
        type: 'quote',
        text: "That's often enough to change a life trajectory.",
        attribution: 'Anju Bist',
      },
      {
        type: 'paragraph',
        text: 'When Mansi Kumari from SBI Foundation reached out, wanting to distribute reusable pads among Musahar girls and women in Bihar, the answer was immediate: yes. Because we had seen this before — one product, one session, one conversation can shift the direction of a life that had no other direction to go.',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Menstrual health and dignity are inseparable',
        text: 'How long before all 40 lakh Musahars in Bihar get that one chance? That question keeps us moving. Menstrual health is not separate from poverty, education, or dignity. It is part of the same story.',
      },
    ],
  },
];

export const linkedinCorePosts = linkedinCorePostsRaw.map(applyLinkedInPostMedia);

export type PressRelease = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: 'milestone' | 'partnership' | 'product' | 'impact';
  featured?: boolean;
};

export const pressReleases: PressRelease[] = [
  {
    id: 'pr-1',
    date: '2025-11-12',
    title: 'Saukhyam REACH programme expands to 5,000 women in Maharashtra',
    excerpt:
      'Self-help group networks and peer leaders will deliver year-round menstrual health conversations alongside reusable pad adoption.',
    category: 'impact',
    featured: true,
  },
  {
    id: 'pr-2',
    date: '2025-09-08',
    title: 'Anju Bist receives Shreyas Award for social innovation',
    excerpt:
      'Founder recognition highlights grassroots leadership in chemical-free menstrual health and rural livelihoods.',
    category: 'milestone',
    featured: true,
  },
  {
    id: 'pr-3',
    date: '2025-06-21',
    title: 'CARE campus programme launches at Punjab University',
    excerpt:
      'Young menstruators gain access to sustainable products and open dialogue through the CARE initiative.',
    category: 'partnership',
  },
  {
    id: 'pr-4',
    date: '2025-04-22',
    title: 'Earth Day: Saukhyam and Azim Premji University deepen sustainability partnership',
    excerpt:
      'Campus adopters trial reusable pads while studying environmental impact of disposable alternatives.',
    category: 'partnership',
  },
  {
    id: 'pr-5',
    date: '2025-02-14',
    title: 'Ganga Kumbh outreach reaches Kalpavasis and rural women in Uttar Pradesh',
    excerpt:
      'Partnership with UPSRLM brings banana-fiber pad awareness to pilgrims and village communities along the Ganga.',
    category: 'impact',
  },
  {
    id: 'pr-6',
    date: '2024-12-03',
    title: 'Musahar community programme in Bihar marks 1,000+ first-time reusable users',
    excerpt:
      'SBI Foundation collaboration demonstrates how trust-led distribution changes adoption at scale.',
    category: 'impact',
  },
];

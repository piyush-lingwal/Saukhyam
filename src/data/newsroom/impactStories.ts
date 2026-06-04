export type ImpactStory = {
  id: string;
  title: string;
  region: string;
  excerpt: string;
  stat: string;
  statLabel: string;
};

export const impactStories: ImpactStory[] = [
  {
    id: 's1',
    title: 'Musahar women choose reusables in Bihar',
    region: 'Bihar',
    excerpt:
      'A trust-first partnership brought pads and open conversation to one of India\'s most marginalised communities.',
    stat: '1,000+',
    statLabel: 'first-time users',
  },
  {
    id: 's2',
    title: 'REACH scales peer leadership in Maharashtra',
    region: 'Maharashtra',
    excerpt:
      'SHG networks carry menstrual health dialogue year-round - not just during distribution drives.',
    stat: '5,000',
    statLabel: 'women in programme',
  },
  {
    id: 's3',
    title: 'Campus CARE changes dorm-room norms',
    region: 'North India',
    excerpt:
      'Students trial sustainable products where they live and study, with follow-up built in from day one.',
    stat: '12+',
    statLabel: 'campus partners',
  },
];

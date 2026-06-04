export type StateSlug =
  | 'maharashtra'
  | 'karnataka'
  | 'gujarat'
  | 'tamil-nadu'
  | 'kerala'
  | 'delhi'
  | 'rajasthan'
  | 'uttar-pradesh'
  | 'west-bengal'
  | 'andhra-pradesh'
  | 'national';

export type StateTheme = 'green' | 'teal' | 'purple' | 'amber';
export type ProgramFocus = 'reach' | 'care' | 'both';

export interface StateStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export interface StateCampaign {
  id: string;
  title: string;
  description: string;
  category: 'reach' | 'care' | 'health' | 'sustainability';
  status: 'active' | 'upcoming' | 'completed';
  image: string;
}

export interface StateActivity {
  title: string;
  description: string;
  location: string;
  date: string;
}

export interface StateTimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface StatePartner {
  name: string;
  type: string;
}

export interface StateTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface StateFAQ {
  question: string;
  answer: string;
}

export interface StateGalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'outreach' | 'health' | 'training' | 'campus';
}

export interface StatePageData {
  slug: StateSlug;
  name: string;
  shortName: string;
  tagline: string;
  heroSubtitle: string;
  theme: StateTheme;
  programFocus: ProgramFocus;
  heroImage: string;
  mapCoords: { lat: number; lng: number };
  mission: string;
  missionPoints: string[];
  stats: StateStat[];
  campaigns: StateCampaign[];
  outreach: StateActivity[];
  healthcare: { title: string; items: string[] };
  sustainability: { title: string; items: string[] };
  timeline: StateTimelineEvent[];
  partners: StatePartner[];
  testimonials: StateTestimonial[];
  volunteerRoles: string[];
  faqs: StateFAQ[];
  gallery: StateGalleryItem[];
  analytics: { label: string; value: string; change: string }[];
}

import type { StatePageData, StateSlug } from '@/types/statePage';
import { buildState } from './buildState';

const configs = [
  { slug: 'maharashtra' as const, name: 'Maharashtra', shortName: 'MH', tagline: 'Empowering villages from Konkan to Vidarbha', heroSubtitle: 'REACH satellite centres and CARE campus networks across India\'s most populous state.', theme: 'teal' as const, programFocus: 'both' as const, imageIndex: 0, womenReached: 42000, villages: 180, centres: 8, campuses: 22, capital: 'Mumbai', highlight: 'rural and urban communities' },
  { slug: 'karnataka' as const, name: 'Karnataka', shortName: 'KA', tagline: 'Innovation meets grassroots impact', heroSubtitle: 'From Bengaluru campuses to North Karnataka villages — reusables for every woman.', theme: 'green' as const, programFocus: 'both' as const, imageIndex: 1, womenReached: 35000, villages: 150, centres: 7, campuses: 18, capital: 'Bengaluru', highlight: 'tech corridors and tribal blocks' },
  { slug: 'gujarat' as const, name: 'Gujarat', shortName: 'GJ', tagline: 'Entrepreneurship and menstrual dignity', heroSubtitle: 'Self-help groups and satellite units powering the Saukhyam movement in Gujarat.', theme: 'teal' as const, programFocus: 'reach' as const, imageIndex: 2, womenReached: 28000, villages: 120, centres: 6, campuses: 10, capital: 'Ahmedabad', highlight: 'coastal and tribal districts' },
  { slug: 'tamil-nadu' as const, name: 'Tamil Nadu', shortName: 'TN', tagline: 'Coastal communities, lasting change', heroSubtitle: 'Deep REACH roots in Tamil Nadu — from Kanyakumari fisheries to delta villages.', theme: 'teal' as const, programFocus: 'both' as const, imageIndex: 3, womenReached: 38000, villages: 160, centres: 9, campuses: 15, capital: 'Chennai', highlight: 'coastal hamlets and university towns' },
  { slug: 'kerala' as const, name: 'Kerala', shortName: 'KL', tagline: 'Where Saukhyam began', heroSubtitle: 'Home to Amrita SeRVe — Kerala leads in satellite production and HEAL outcomes.', theme: 'green' as const, programFocus: 'both' as const, imageIndex: 4, womenReached: 52000, villages: 200, centres: 12, campuses: 14, capital: 'Thiruvananthapuram', highlight: 'panchayats and health literacy' },
  { slug: 'delhi' as const, name: 'Delhi NCR', shortName: 'DL', tagline: 'Urban reach, national voice', heroSubtitle: 'CARE dominates the capital — campus drives, policy dialogues, and urban slum outreach.', theme: 'purple' as const, programFocus: 'care' as const, imageIndex: 5, womenReached: 18000, villages: 45, centres: 3, campuses: 28, capital: 'New Delhi', highlight: 'universities and urban settlements' },
  { slug: 'rajasthan' as const, name: 'Rajasthan', shortName: 'RJ', tagline: 'Desert dignity, desert determination', heroSubtitle: 'REACH brings pads and livelihoods to Rajasthan\'s most water-scarce districts.', theme: 'amber' as const, programFocus: 'reach' as const, imageIndex: 0, womenReached: 22000, villages: 95, centres: 5, campuses: 8, capital: 'Jaipur', highlight: 'Thar desert villages' },
  { slug: 'uttar-pradesh' as const, name: 'Uttar Pradesh', shortName: 'UP', tagline: 'Scale with soul', heroSubtitle: 'Sonbhadra to Lucknow — UP is our largest rural expansion frontier.', theme: 'teal' as const, programFocus: 'reach' as const, imageIndex: 1, womenReached: 48000, villages: 220, centres: 10, campuses: 12, capital: 'Lucknow', highlight: 'tribal belts and Gangetic plains' },
  { slug: 'west-bengal' as const, name: 'West Bengal', shortName: 'WB', tagline: 'Culture of care, culture of change', heroSubtitle: 'Community theatre, SHG partnerships, and pad access across Bengal.', theme: 'green' as const, programFocus: 'both' as const, imageIndex: 2, womenReached: 31000, villages: 130, centres: 6, campuses: 11, capital: 'Kolkata', highlight: 'Sundarbans and rural blocks' },
  { slug: 'andhra-pradesh' as const, name: 'Andhra Pradesh', shortName: 'AP', tagline: 'Growing green, growing strong', heroSubtitle: 'Expanding REACH circles in Andhra — banana fiber from local farms to local hands.', theme: 'green' as const, programFocus: 'reach' as const, imageIndex: 3, womenReached: 26000, villages: 110, centres: 5, campuses: 9, capital: 'Amaravati', highlight: 'coastal and Rayalaseema districts' },
  { slug: 'national' as const, name: 'National Impact', shortName: 'India', tagline: 'Five lakh women. Thirty lakh users. One mission.', heroSubtitle: 'The combined REACH & CARE footprint — healing periods and the planet nationwide.', theme: 'green' as const, programFocus: 'both' as const, imageIndex: 4, womenReached: 500000, villages: 101, centres: 25, campuses: 50, capital: 'India', highlight: 'every state we serve' },
];

export const statePages: StatePageData[] = configs.map(buildState);

export function getStateBySlug(slug: string): StatePageData | undefined {
  return statePages.find(s => s.slug === slug);
}

export function getAllStateSlugs(): StateSlug[] {
  return statePages.map(s => s.slug);
}

export const stateListSummary = statePages.map(s => ({
  slug: s.slug,
  name: s.name,
  tagline: s.tagline,
  theme: s.theme,
  programFocus: s.programFocus,
  heroImage: s.heroImage,
  womenReached: s.stats[0]?.value ?? 0,
}));

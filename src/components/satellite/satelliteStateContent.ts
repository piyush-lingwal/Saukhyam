import type { IndiaStateId } from './indiaMapTypes';

export type FeaturedStateId = 'madhya-pradesh' | 'maharashtra' | 'odisha';

export const FEATURED_STATE_IDS = [
  'madhya-pradesh',
  'maharashtra',
  'odisha',
] as const satisfies readonly FeaturedStateId[];

export const STATE_COLORS: Record<FeaturedStateId, string> = {
  'madhya-pradesh': '#4CAF50',
  maharashtra: '#2196F3',
  odisha: '#FF9800',
};

export const DEFAULT_GREY = '#E0E0E0';

export type StateSection = {
  id: FeaturedStateId;
  name: string;
  description: string;
};

export const PANEL_INTRO = {
  heading: 'Saukhyam – Reusable Pads Satellite Production Centers',
  subtitle:
    'Providing rural women employment close to home through decentralized manufacturing units.',
};

export const STATE_SECTIONS: StateSection[] = [
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    description:
      'Two satellite centers operate in Burhanpur District. Women working here are part of self-help groups under Ajeevika, State Rural Livelihood Mission of MP.',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description:
      'In tribal Nandurbar district, training was provided to a group of 10 women, who continue producing Saukhyam pads under a Farmers Producer Company and NGO BAIF.',
  },
  {
    id: 'odisha',
    name: 'Odisha',
    description:
      'New satellite production centers are being set up in Kalahandi and Angul districts in partnership with Amrita Jan Shikshan Sansthan, Government of India.',
  },
];

export function isFeaturedState(id: IndiaStateId): id is FeaturedStateId {
  return (FEATURED_STATE_IDS as readonly string[]).includes(id);
}

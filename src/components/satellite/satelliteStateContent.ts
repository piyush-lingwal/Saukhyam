import type { IndiaStateId } from './indiaMapTypes';

export type FeaturedStateId = 'madhya-pradesh' | 'maharashtra' | 'odisha';

export const FEATURED_STATE_IDS = [
  'madhya-pradesh',
  'maharashtra',
  'odisha',
] as const satisfies readonly FeaturedStateId[];

export const HIGHLIGHT_GREEN = '#65A30D';
export const DEFAULT_GREY = '#E5E7EB';

export type StateSection = {
  id: FeaturedStateId;
  name: string;
  description: string;
  mapCaption: string;
};

export const SECTION_INTRO = {
  title: 'Satellite Production Centers',
  paragraphs: [
    'Satellite Production Centers provide rural women with a means of employment close to their homes.',
    'In India, the khadi industry provides income to about 5 lakh rural households. Similarly, the large-scale manufacturing of reusable menstrual pads has the potential to create lakhs of jobs.',
  ],
};

export const STATE_SECTIONS: StateSection[] = [
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    description:
      'Two satellite centers operate in Burhanpur District. The women working here are part of self-help groups constituted by Ajeevika, the State Rural Livelihood Mission of Madhya Pradesh.',
    mapCaption: 'Saukhyam satellite production centre in Madhya Pradesh',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description:
      'In the tribal district of Nandurbar, training was provided to a group of 10 women who have continuously produced Saukhyam pads under the aegis of a Farmers Producer Company and the NGO BAIF.',
    mapCaption: 'Saukhyam satellite production centre in Maharashtra',
  },
  {
    id: 'odisha',
    name: 'Odisha',
    description:
      'Our newest satellite production centers are being set up in Kalahandi and Angul districts of Odisha in partnership with Amrita Jan Shikshan Sansthan.',
    mapCaption: 'Saukhyam satellite production centre in Odisha',
  },
];

export function isFeaturedState(id: IndiaStateId): id is FeaturedStateId {
  return (FEATURED_STATE_IDS as readonly string[]).includes(id);
}

export function getStateCaption(id: FeaturedStateId): string {
  return STATE_SECTIONS.find((s) => s.id === id)?.mapCaption ?? '';
}

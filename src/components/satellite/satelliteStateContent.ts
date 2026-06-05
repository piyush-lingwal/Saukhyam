import type { IndiaStateId, SatelliteStateId } from './indiaMapTypes';

export type StateInfo = {
  state: string;
  district: string;
  description: string;
};

export const SATELLITE_STATE_CONTENT: Record<SatelliteStateId, StateInfo> = {
  'madhya-pradesh': {
    state: 'Madhya Pradesh',
    district: 'Burhanpur District',
    description:
      'Two satellite production centres operate in Burhanpur District through collaborations with local livelihood initiatives and community organizations.',
  },
  maharashtra: {
    state: 'Maharashtra',
    district: 'Nandurbar District',
    description:
      'Production teams in Nandurbar have been trained to manufacture reusable menstrual products through district-level partnerships and community-led initiatives.',
  },
  odisha: {
    state: 'Odisha',
    district: 'Kalahandi & Angul Districts',
    description:
      'New satellite production centres are being established to strengthen local manufacturing capacity and expand access to sustainable menstrual products.',
  },
  uttarakhand: {
    state: 'Uttarakhand',
    district: 'Expansion Region',
    description:
      'Collaborations are underway to develop district-level production systems capable of serving larger rural populations.',
  },
  telangana: {
    state: 'Telangana',
    district: 'Emerging Production Network',
    description:
      'Partnerships are supporting the development of new satellite production centres within the state.',
  },
  haryana: {
    state: 'Haryana',
    district: 'Future Expansion',
    description:
      'Regional collaborations are helping establish production ecosystems designed for scalable manufacturing and distribution.',
  },
};

export const KERALA_HUB_CONTENT: StateInfo = {
  state: 'Kerala',
  district: 'Manufacturing Hub · Kuzhithura, Kerala',
  description:
    'The central Saukhyam Factory processes banana fiber and prepares semi-finished materials, supplying satellite production centres across India through the hub-and-spoke model.',
};

export function isSatelliteState(id: IndiaStateId): id is SatelliteStateId {
  return id in SATELLITE_STATE_CONTENT;
}

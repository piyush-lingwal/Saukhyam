export type MapStateId =
  | 'kerala'
  | 'madhya-pradesh'
  | 'maharashtra'
  | 'odisha'
  | 'uttarakhand'
  | 'telangana'
  | 'haryana';

export type StateInfo = {
  id: MapStateId;
  state: string;
  district: string;
  description: string;
  centroid: { x: number; y: number };
};

export const HUB_POSITION = { x: 98, y: 318 };

export const stateInfoList: StateInfo[] = [
  {
    id: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    district: 'Burhanpur District',
    description:
      'Two satellite production centres operate in Burhanpur District through collaborations with local livelihood initiatives and community organizations.',
    centroid: { x: 158, y: 178 },
  },
  {
    id: 'maharashtra',
    state: 'Maharashtra',
    district: 'Nandurbar District',
    description:
      'Production teams in Nandurbar have been trained to manufacture reusable menstrual products through district-level partnerships and community-led initiatives.',
    centroid: { x: 118, y: 248 },
  },
  {
    id: 'odisha',
    state: 'Odisha',
    district: 'Kalahandi & Angul Districts',
    description:
      'New satellite production centres are being established to strengthen local manufacturing capacity and expand access to sustainable menstrual products.',
    centroid: { x: 228, y: 198 },
  },
  {
    id: 'uttarakhand',
    state: 'Uttarakhand',
    district: 'Expansion Region',
    description:
      'Collaborations are underway to develop district-level production systems capable of serving larger rural populations.',
    centroid: { x: 178, y: 92 },
  },
  {
    id: 'telangana',
    state: 'Telangana',
    district: 'Emerging Production Network',
    description:
      'Partnerships are supporting the development of new satellite production centres within the state.',
    centroid: { x: 168, y: 272 },
  },
  {
    id: 'haryana',
    state: 'Haryana',
    district: 'Future Expansion',
    description:
      'Regional collaborations are helping establish production ecosystems designed for scalable manufacturing and distribution.',
    centroid: { x: 138, y: 98 },
  },
];

export const hubInfo: StateInfo = {
  id: 'kerala',
  state: 'Manufacturing Hub',
  district: 'Kuzhithura, Kerala',
  description:
    'The central Saukhyam Factory processes banana fiber and supplies semi-finished materials to satellite centres across India through the hub-and-spoke production model.',
  centroid: HUB_POSITION,
};

export const satelliteStateIds = stateInfoList.map((s) => s.id);

/** Simplified SVG path data per region (viewBox 0 0 400 480) */
export const statePaths: Record<MapStateId, string> = {
  kerala:
    'M72 298 L88 288 L108 292 L118 308 L112 328 L92 334 L78 322 L70 308 Z',
  haryana:
    'M118 78 L152 74 L162 98 L148 114 L118 110 L108 92 Z',
  uttarakhand:
    'M158 72 L198 66 L208 92 L192 112 L168 108 L152 88 Z',
  'madhya-pradesh':
    'M132 138 L188 132 L202 168 L196 208 L162 222 L124 212 L114 172 Z',
  maharashtra:
    'M98 218 L142 208 L152 248 L136 288 L100 282 L84 248 Z',
  telangana:
    'M152 248 L198 238 L208 272 L192 298 L158 292 L144 268 Z',
  odisha:
    'M208 158 L252 148 L266 182 L256 218 L218 228 L200 198 Z',
};

/** India silhouette for grey background states */
export const indiaSilhouette =
  'M95 32 L148 26 L212 38 L262 58 L292 88 L306 128 L302 168 L288 208 L268 252 L238 292 L198 328 L152 348 L108 342 L78 312 L58 268 L48 218 L46 168 L52 122 L68 78 L82 48 Z';

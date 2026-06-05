/* AUTO-GENERATED — run: node scripts/generate-india-map-paths.mjs */
export type IndiaStateId =
  | 'andhra-pradesh'
  | 'arunachal-pradesh'
  | 'assam'
  | 'bihar'
  | 'chhattisgarh'
  | 'goa'
  | 'gujarat'
  | 'haryana'
  | 'himachal-pradesh'
  | 'jharkhand'
  | 'karnataka'
  | 'kerala'
  | 'madhya-pradesh'
  | 'maharashtra'
  | 'manipur'
  | 'meghalaya'
  | 'mizoram'
  | 'nagaland'
  | 'odisha'
  | 'punjab'
  | 'rajasthan'
  | 'sikkim'
  | 'tamil-nadu'
  | 'telangana'
  | 'tripura'
  | 'uttar-pradesh'
  | 'uttarakhand'
  | 'west-bengal'
  | 'andaman-nicobar'
  | 'chandigarh'
  | 'delhi'
  | 'jammu-kashmir'
  | 'ladakh'
  | 'lakshadweep'
  | 'puducherry';

export type IndiaMapState = {
  id: IndiaStateId;
  name: string;
  slug: string;
  d: string;
  cx: number;
  cy: number;
};

export const INDIA_MAP_DATA_URL = '/data/india-map-paths.json' as const;

export const SATELLITE_STATE_IDS = [
  'madhya-pradesh',
  'maharashtra',
  'odisha',
  'uttarakhand',
  'telangana',
  'haryana',
] as const satisfies readonly IndiaStateId[];

export type SatelliteStateId = (typeof SATELLITE_STATE_IDS)[number];

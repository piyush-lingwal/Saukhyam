import { geoMercator, geoPath, geoBounds } from 'd3-geo';
import simplify from '@turf/simplify';
import { writeFileSync, mkdirSync } from 'fs';

const STATE_SLUGS = [
  'andhra-pradesh',
  'arunachal-pradesh',
  'assam',
  'bihar',
  'chhattisgarh',
  'goa',
  'gujarat',
  'haryana',
  'himachal-pradesh',
  'jharkhand',
  'karnataka',
  'kerala',
  'madhya-pradesh',
  'maharashtra',
  'manipur',
  'meghalaya',
  'mizoram',
  'nagaland',
  'odisha',
  'punjab',
  'rajasthan',
  'sikkim',
  'tamil-nadu',
  'telangana',
  'tripura',
  'uttar-pradesh',
  'uttarakhand',
  'west-bengal',
  'andaman-and-nicobar-islands',
  'chandigarh',
  'dadra-and-nagar-haveli-and-daman-and-diu',
  'delhi',
  'jammu-and-kashmir',
  'ladakh',
  'lakshadweep',
  'puducherry',
];

const SLUG_TO_ID = {
  'andhra-pradesh': 'andhra-pradesh',
  'arunachal-pradesh': 'arunachal-pradesh',
  assam: 'assam',
  bihar: 'bihar',
  chhattisgarh: 'chhattisgarh',
  goa: 'goa',
  gujarat: 'gujarat',
  haryana: 'haryana',
  'himachal-pradesh': 'himachal-pradesh',
  jharkhand: 'jharkhand',
  karnataka: 'karnataka',
  kerala: 'kerala',
  'madhya-pradesh': 'madhya-pradesh',
  maharashtra: 'maharashtra',
  manipur: 'manipur',
  meghalaya: 'meghalaya',
  mizoram: 'mizoram',
  nagaland: 'nagaland',
  odisha: 'odisha',
  punjab: 'punjab',
  rajasthan: 'rajasthan',
  sikkim: 'sikkim',
  'tamil-nadu': 'tamil-nadu',
  telangana: 'telangana',
  tripura: 'tripura',
  'uttar-pradesh': 'uttar-pradesh',
  uttarakhand: 'uttarakhand',
  'west-bengal': 'west-bengal',
  'andaman-and-nicobar-islands': 'andaman-nicobar',
  chandigarh: 'chandigarh',
  'dadra-and-nagar-haveli-and-daman-and-diu': 'dadra-daman',
  delhi: 'delhi',
  'jammu-and-kashmir': 'jammu-kashmir',
  ladakh: 'ladakh',
  lakshadweep: 'lakshadweep',
  puducherry: 'puducherry',
};

function mergeStateFeatures(geojson) {
  const polygons = [];

  for (const feature of geojson.features) {
    const { geometry } = feature;
    if (!geometry) continue;
    if (geometry.type === 'Polygon') {
      polygons.push(geometry.coordinates);
    } else if (geometry.type === 'MultiPolygon') {
      polygons.push(...geometry.coordinates);
    }
  }

  const name = geojson.features[0]?.properties?.st_nm ?? 'Unknown';

  return {
    type: 'Feature',
    properties: { name },
    geometry: {
      type: 'MultiPolygon',
      coordinates: polygons,
    },
  };
}

async function fetchState(slug) {
  const url = `https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@ef25ebc/geojson/states/${slug}.geojson`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${slug}: ${res.status}`);
  return res.json();
}

async function main() {
  const features = [];

  for (const slug of STATE_SLUGS) {
    try {
      const geojson = await fetchState(slug);
      const merged = mergeStateFeatures(geojson);
      merged.properties.id = SLUG_TO_ID[slug] ?? slug;
      merged.properties.slug = slug;
      features.push(merged);
      console.log(`OK: ${slug}`);
    } catch (err) {
      console.warn(`Skip ${slug}:`, err.message);
    }
  }

  const simplifiedFeatures = features.map((feature) =>
    simplify(feature, { tolerance: 0.04, highQuality: true }),
  );

  const collection = { type: 'FeatureCollection', features: simplifiedFeatures };
  const width = 800;
  const height = 920;
  const padding = 24;

  const projection = geoMercator().fitExtent(
    [
      [padding, padding],
      [width - padding, height - padding],
    ],
    collection,
  );

  const pathGen = geoPath(projection);

  const states = simplifiedFeatures.map((feature) => {
    const d = pathGen(feature);
    const centroid = pathGen.centroid(feature);
    return {
      id: feature.properties.id,
      name: feature.properties.name,
      slug: feature.properties.slug,
      d,
      cx: centroid[0],
      cy: centroid[1],
    };
  });

  const kerala = states.find((s) => s.id === 'kerala');

  const payload = {
    viewBox: { width, height },
    keralaHub: { cx: Math.round((kerala?.cx ?? 0) * 10) / 10, cy: Math.round((kerala?.cy ?? 0) * 10) / 10 },
    states: states.map((s) => ({
      ...s,
      cx: Math.round(s.cx * 10) / 10,
      cy: Math.round(s.cy * 10) / 10,
    })),
  };

  mkdirSync('public/data', { recursive: true });
  writeFileSync('public/data/india-map-paths.json', JSON.stringify(payload));

  const typeIds = states.map((s) => `  | '${s.id}'`).join('\n');
  const output = `/* AUTO-GENERATED — run: node scripts/generate-india-map-paths.mjs */
export type IndiaStateId =
${typeIds};

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
`;

  writeFileSync('src/components/satellite/indiaMapTypes.ts', output);
  console.log(`Wrote ${states.length} states to public/data/india-map-paths.json`);
}

main().catch(console.error);

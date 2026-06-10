/**
 * Fetches LinkedIn galleries, downloads unique blog images, writes blogImagePool.ts
 * Run: node scripts/sync-blog-images.mjs
 */

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const UA = 'Mozilla/5.0 (compatible; SaukhyamBlog/1.0)';
const OUT_DIR = 'public/images/blog';
const POOL_OUT = 'src/data/blog/blogImagePool.ts';

const LINKEDIN_POSTS = [
  { id: 'li-1', url: 'https://www.linkedin.com/posts/anjubist_socialimpact-ruralindia-poverty-activity-7447666149120532481-4D9c' },
  { id: 'li-2', url: 'https://www.linkedin.com/posts/anjubist_menstrualhealth-socialimpact-ruralindia-activity-7444264714261577728--ViS' },
  { id: 'li-4', url: 'https://www.linkedin.com/posts/saukhyam-foundation_amma-menstrualhealth-socialimpact-activity-7437731614056615936-1uzY' },
  { id: 'li-6', url: 'https://www.linkedin.com/posts/anjubist_chandigarh-nexus-saukhyam-activity-7440290973173297153-I0kp' },
  { id: 'li-7', url: 'https://www.linkedin.com/posts/anjubist_rethinknormal-menstrualhealth-womenhealth-activity-7437759239705722880-fXaB' },
];

/** Extra Pexels only if LinkedIn pool is too small (known working IDs from newsroom) */
const PEXELS = [3825583, 6646918, 5223918, 2894574, 6646669, 3768131, 6646670, 6646668];

/** Fallback when HTML scrape returns empty (Rethink Normal post) */
const LI7_FALLBACK = [
  'https://media.licdn.com/dms/image/v2/D5622AQHYPferPtbXGA/feedshare-shrink_800/B56Zzg6ndrHoAc-/0/1773299988610?e=2147483647&v=beta&t=6i4bJ-fKIbnh0i4Wqf_6vvQQiZpNHatG3n074NCVodk',
  'https://media.licdn.com/dms/image/v2/D4D22AQEz6Ln27psMOg/feedshare-shrink_800/B4DZ0EW_4EJoAc-/0/1773894631151?e=2147483647&v=beta&t=coOfaw4SXs3q5xGTZOQw335BTCn5EFwiLBZIo-zcGPA',
  'https://media.licdn.com/dms/image/v2/D5622AQEoOcruO51xDQ/feedshare-image-high-res/B56Zzttgj0KAAU-/0/1773514656210?e=2147483647&v=beta&t=Zh7k0tzNvBqKExW6TA2ER03wqT2w6yzL_8JECGTTs5Y',
  'https://media.licdn.com/dms/image/v2/D5622AQF6zj6peDibBg/feedshare-image-high-res/B56Z1skeGwKEAY-/0/1775642994069?e=2147483647&v=beta&t=ITBBx-ozOec4srPbLZkecX5Q3IubxvQ3xmVAlEtlZkU',
  'https://media.licdn.com/dms/image/v2/D5622AQEQhRYHWT0HAA/feedshare-image-high-res/B56Z1tJHcJIcAU-/0/1775652599806?e=2147483647&v=beta&t=O-ZZesh62w7tm-UI_6sXJlrDsi5iPz-jE0zrjs7i0dA',
];

const TEMPLATE_SLUGS = [
  'banana-fiber-science', 'healing-periods-naturally', 'rural-women-empowerment',
  'zero-waste-menstruation', 'teen-first-period-guide', 'pcos-and-reusable-pads',
  'school-awareness-campaign', 'amrita-serve-villages', 'disposable-pad-environment-cost',
  'washing-care-guide', 'satellite-centre-kerala', 'heal-program-story',
  'sports-women-saukhyam', 'menstrual-equity-india', 'chemical-free-periods',
  'banana-plant-circular-economy', 'pad-woman-anju-bist', 'college-campus-switch',
  'postpartum-recovery-pads', 'climate-action-periods', 'five-lakh-women-milestone',
  'future-sustainable-hygiene',
];

/** post key -> preferred pool indices (filled after pool built) */
const LI_PREFERRED = {
  'li-1': 'li-1',
  'li-2': 'li-2',
  'li-3': 'li-1',
  'li-4': 'li-4',
  'li-5': 'li-6',
  'li-6': 'li-6',
  'li-7': 'li-7',
  'li-8': 'li-7',
  'li-9': 'li-1',
  'li-10': 'li-6',
  'li-11': 'li-2',
  'li-12': 'li-2',
};

function decode(u) {
  return u.replace(/\\u0026/g, '&').replace(/&amp;/g, '&');
}

function extractGallery(html) {
  const gallery = [];
  const jsonLdBlock = html.match(/"@type":"SocialMediaPosting"[\s\S]*?"image":\s*(\[[\s\S]*?\])\s*,\s*"articleBody"/);
  if (jsonLdBlock) {
    try {
      for (const img of JSON.parse(jsonLdBlock[1])) {
        if (img?.url && !gallery.includes(img.url)) gallery.push(img.url);
      }
    } catch { /* */ }
  }
  const re = /https:\\\/\\\/media\.licdn\.com\\\/dms\\\/image\\\/[^"\\]+feedshare[^"\\]+/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const u = decode(m[0].replace(/\\\//g, '/'));
    if (!gallery.includes(u)) gallery.push(u);
  }
  const re2 = /"(https:\/\/media\.licdn\.com\/dms\/image\/[^"]+feedshare[^"]+)"/g;
  while ((m = re2.exec(html)) !== null) {
    const u = decode(m[1]);
    if (!gallery.includes(u)) gallery.push(u);
  }
  return gallery;
}

// --- Build remote URL pool ---
const pool = [];
const bySource = {};

for (const p of LINKEDIN_POSTS) {
  const html = await (await fetch(p.url, { headers: { 'User-Agent': UA } })).text();
  const gallery = extractGallery(html);
  bySource[p.id] = [];
  for (const url of gallery) {
    if (!pool.includes(url)) {
      pool.push(url);
      bySource[p.id].push(pool.length - 1);
    } else {
      bySource[p.id].push(pool.indexOf(url));
    }
  }
  console.error(`${p.id}: ${gallery.length} images, pool size ${pool.length}`);
  await new Promise((r) => setTimeout(r, 400));
}

if (!bySource['li-7']?.length) {
  bySource['li-7'] = [];
  for (const url of LI7_FALLBACK) {
    if (!pool.includes(url)) {
      pool.push(url);
      bySource['li-7'].push(pool.length - 1);
    } else {
      bySource['li-7'].push(pool.indexOf(url));
    }
  }
  console.error(`li-7: using ${LI7_FALLBACK.length} fallback images`);
}

const pexelsSeen = new Set();
for (const id of PEXELS) {
  if (pexelsSeen.has(id)) continue;
  pexelsSeen.add(id);
  pool.push(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`);
}

console.error(`Total pool URLs: ${pool.length}`);

// --- Download ---
await mkdir(OUT_DIR, { recursive: true });
/** @type {Record<string, { id: string; path: string }>} */
const assetById = {};

for (let i = 0; i < pool.length; i++) {
  const id = `img-${String(i).padStart(3, '0')}`;
  const url = pool[i];
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = url.includes('pexels') ? 'jpg' : (res.headers.get('content-type') ?? '').includes('png') ? 'png' : 'jpg';
    const file = `${id}.${ext}`;
    const path = `/images/blog/${file}`;
    await writeFile(join(OUT_DIR, file), buf);
    assetById[id] = { id, path };
    console.error(`OK ${id}`);
  } catch (e) {
    console.error(`FAIL ${id}: ${e.message}`);
  }
}

const assets = Object.values(assetById);

// --- Assign unique cover + inline per post ---
const used = new Set();
function poolId(index) {
  return `img-${String(index).padStart(3, '0')}`;
}
function take(index) {
  if (index == null || used.has(index)) return null;
  const id = poolId(index);
  if (!assetById[id]) return null;
  used.add(index);
  return id;
}

function takeFromSource(sourceId, n = 2) {
  const prefs = bySource[sourceId] ?? [];
  const out = [];
  for (const idx of prefs) {
    if (out.length >= n) break;
    const t = take(idx);
    if (t != null) out.push(t);
  }
  return out;
}

function takeNext(n = 1) {
  const out = [];
  for (let i = 0; i < pool.length && out.length < n; i++) {
    const t = take(i);
    if (t != null) out.push(t);
  }
  return out;
}

const assignments = {};
const LI_KEYS = Object.keys(LI_PREFERRED);

// Phase 1: unique cover per post
for (const liId of LI_KEYS) {
  const prefs = bySource[LI_PREFERRED[liId]] ?? [];
  const cover = take(prefs[0]) ?? takeNext(1)[0];
  if (!cover) {
    console.error(`Not enough images for cover on ${liId}`);
    process.exit(1);
  }
  assignments[liId] = { cover, inline: '' };
}

for (const slug of TEMPLATE_SLUGS) {
  const cover = takeNext(1)[0];
  if (!cover) {
    console.error(`Not enough cover images for ${slug}`);
    process.exit(1);
  }
  assignments[slug] = { cover, inline: '' };
}

const usedAssetIds = new Set(Object.values(assignments).map((a) => a.cover));

function takeUnusedAsset(excludeId) {
  for (let i = 0; i < pool.length; i++) {
    const id = poolId(i);
    if (!assetById[id] || usedAssetIds.has(id) || id === excludeId) continue;
    usedAssetIds.add(id);
    return id;
  }
  return null;
}

// Phase 2: globally unique inline only; skip second image when pool is full
for (const key of [...LI_KEYS, ...TEMPLATE_SLUGS]) {
  assignments[key].inline = takeUnusedAsset(assignments[key].cover);
}

const covers = Object.values(assignments).map((a) => a.cover);
if (new Set(covers).size !== covers.length) {
  console.error('Duplicate covers detected');
  process.exit(1);
}

const inlines = Object.values(assignments).map((a) => a.inline).filter(Boolean);
console.error(
  `Covers: ${covers.length} unique. Inlines: ${inlines.length} unique (no repeats). Posts without inline: ${34 - inlines.length}`,
);

// --- Write TS ---
const poolEntries = assets
  .map(
    (a) =>
      `  '${a.id}': { path: '${a.path}', alt: 'Saukhyam Foundation outreach and community programme' },`,
  )
  .join('\n');

const assignEntries = Object.entries(assignments)
  .map(([k, v]) => {
    const inline = v.inline ? `inline: '${v.inline}'` : 'inline: null';
    return `  '${k}': { cover: '${v.cover}', ${inline} },`;
  })
  .join('\n');

const ts = `/** Auto-generated by scripts/sync-blog-images.mjs — do not hand-edit paths */

export type BlogImageAsset = { path: string; alt: string };

export const BLOG_IMAGE_POOL: Record<string, BlogImageAsset> = {
${poolEntries}
};

export const POST_BLOG_IMAGES: Record<string, { cover: string; inline: string | null }> = {
${assignEntries}
};

export function getPostImageKeys(key: string): { cover: string; inline: string | null } | undefined {
  return POST_BLOG_IMAGES[key];
}

export function getBlogImageAsset(id: string): BlogImageAsset | undefined {
  return BLOG_IMAGE_POOL[id];
}

export function resolvePostImages(key: string): { cover: BlogImageAsset; inline: BlogImageAsset | null } | undefined {
  const keys = POST_BLOG_IMAGES[key];
  if (!keys) return undefined;
  const cover = BLOG_IMAGE_POOL[keys.cover];
  if (!cover) return undefined;
  const inline = keys.inline ? BLOG_IMAGE_POOL[keys.inline] : null;
  return { cover, inline };
}
`;

await writeFile(POOL_OUT, ts);
console.error(`Wrote ${POOL_OUT}, ${assets.length} images, ${Object.keys(assignments).length} posts`);

/**
 * Downloads blog editorial images to public/images/blog for reliable loading.
 * Run: node scripts/download-blog-images.mjs
 */

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const UA = 'Mozilla/5.0 (compatible; SaukhyamBlog/1.0)';
const OUT_DIR = 'public/images/blog';

/** Keys must match linkedinPostMedia.ts — url is remote source */
const IMAGES = {
  musaharCover: 'https://media.licdn.com/dms/image/v2/D5622AQGODS95Ml_7Hw/feedshare-shrink_800/B56Z1ts4gwJgAc-/0/1775661976167?e=2147483647&v=beta&t=Rcf5HinLPfiLqJVTDGzyIJZ-D9ThEv60lA05wNs-WYw',
  musaharCommunity: 'https://media.licdn.com/dms/image/v2/D5622AQGpyG3QiZkBPQ/feedshare-shrink_800/B56Z1ts4x4I8Ag-/0/1775661977735?e=2147483647&v=beta&t=nbwX9bRTcavUhq9CSQ6ZY6gPROF4KpSERKY_8okwipI',
  kumbhCover: 'https://media.licdn.com/dms/image/v2/D4D22AQFYMI5HNJSCSw/feedshare-shrink_800/B4DZ09XUGSHIAg-/0/1774851015497?e=2147483647&v=beta&t=ug-UrvzW4K5ObBfQCFIB1nK1m2Nz3Um1YmO3-G6LgWs',
  kumbhWomen: 'https://media.licdn.com/dms/image/v2/D4D22AQFXFW2KCIyOmA/feedshare-shrink_800/B4DZ09XUGEGoAg-/0/1774851015362?e=2147483647&v=beta&t=90T4HgsnCONtELcyM6g4v6G7QazMUyYgTTOD2DRIeFE',
  kumbhMou: 'https://media.licdn.com/dms/image/v2/D4D22AQEW53KsFLxkDw/feedshare-shrink_800/B4DZ09XUGXKQAg-/0/1774851015569?e=2147483647&v=beta&t=mgJqbnPd3CaFUI_Or3JEl-_1WAyaR4dcq1PBf-CBXKo',
  kumbhGathering: 'https://media.licdn.com/dms/image/v2/D4D22AQGpSGEZZDQNOA/feedshare-shrink_800/B4DZ09XUGHIcAg-/0/1774851015325?e=2147483647&v=beta&t=XOyOAIGwd2d8LFz0BgkcUUjta9Va_JAoBxaaNGs_c_I',
  shreyasCover: 'https://media.licdn.com/dms/image/v2/D5622AQH7cDAEm6rMAg/feedshare-shrink_800/B56ZzY7CAeJkAc-/0/1773165879600?e=2147483647&v=beta&t=Ev0NuoD0aVA6ljQh2fZoRp_EPgy4EnKL1Kdikip8nUg',
  chandigarhCover: 'https://media.licdn.com/dms/image/v2/D5622AQGPrWaDK5o34Q/feedshare-shrink_800/B56Z0DeDCpHwAc-/0/1773879701934?e=2147483647&v=beta&t=_-Ry5L5w0la2Sa81AmTNsYhTBC7GwpcBRXT3Hl2x7j8',
  rethinkCover: 'https://media.licdn.com/dms/image/v2/D5622AQHYPferPtbXGA/feedshare-shrink_800/B56Zzg6ndrHoAc-/0/1773299988610?e=2147483647&v=beta&t=6i4bJ-fKIbnh0i4Wqf_6vvQQiZpNHatG3n074NCVodk',
};

/** Fallback when a dedicated second asset 403s — use another working key */
const ALIASES = {
  shreyasCeremony: 'shreyasCover',
  chandigarhEvent: 'chandigarhCover',
  rethinkVisual: 'rethinkCover',
};

async function download(key, url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = (res.headers.get('content-type') ?? '').includes('png') ? 'png' : 'jpg';
  const file = `${key}.${ext}`;
  await writeFile(join(OUT_DIR, file), buf);
  return `/images/blog/${file}`;
}

await mkdir(OUT_DIR, { recursive: true });

const paths = {};
for (const [key, url] of Object.entries(IMAGES)) {
  try {
    paths[key] = await download(key, url);
    console.error(`OK ${key} -> ${paths[key]}`);
  } catch (e) {
    console.error(`FAIL ${key}: ${e.message}`);
  }
}

for (const [alias, source] of Object.entries(ALIASES)) {
  if (paths[source]) {
    paths[alias] = paths[source];
    console.error(`ALIAS ${alias} -> ${paths[source]}`);
  }
}

console.log(JSON.stringify(paths, null, 2));

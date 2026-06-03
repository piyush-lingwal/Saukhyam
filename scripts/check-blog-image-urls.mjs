import { readFileSync } from 'fs';

const src = readFileSync('src/data/blog/linkedinPostMedia.ts', 'utf8');
const urls = [...new Set([...src.matchAll(/url: '([^']+)'/g)].map((m) => m[1]))];

for (const u of urls) {
  const res = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  const id = u.match(/\/(D[A-Z0-9]+)\//)?.[1] ?? '?';
  console.log(`${res.status} ${id}`);
}

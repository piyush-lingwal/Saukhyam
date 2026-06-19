import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const faqPath = path.join(__dirname, '../src/data/healFaq.ts');
let content = fs.readFileSync(faqPath, 'utf8');

const map = {
  'ab-1': 'about', 'ab-2': 'about', 'ab-3': 'about', 'hc-1b': 'about',
  'hc-0': 'heal-challenge', 'hc-1': 'heal-challenge', 'hc-1c': 'heal-challenge',
  'hc-1d': 'heal-challenge', 'hc-1e': 'heal-challenge', 'hc-1f': 'heal-challenge',
  'hc-1g': 'heal-challenge', 'hc-1h': 'heal-challenge', 'hc-1i': 'heal-challenge',
  'hc-1j': 'heal-challenge', 'hc-1k': 'heal-challenge',
  'hc-2': 'heal-challenge', 'hc-3': 'heal-challenge', 'hc-4': 'heal-challenge',
  'hc-5': 'heal-challenge', 'hc-6': 'heal-challenge', 'hc-7': 'heal-challenge',
  'hc-8': 'heal-challenge', 'hc-9': 'heal-challenge', 'hc-10': 'heal-challenge',
  'hc-11': 'heal-challenge', 'hc-12': 'heal-challenge', 'hc-13': 'heal-challenge',
  'hc-14': 'heal-challenge', 'pl-6': 'heal-challenge',
  'pl-1': 'heal-platform', 'pl-2': 'heal-platform', 'pl-3': 'heal-platform',
  'pl-4': 'heal-platform', 'pl-5': 'heal-platform',
  'dv-1': 'heal-platform', 'dv-2': 'heal-platform', 'dv-3': 'heal-platform',
  'dv-3b': 'heal-platform', 'dv-3c': 'heal-platform', 'dv-3d': 'heal-platform',
  'dv-3e': 'heal-platform', 'dv-4': 'heal-platform', 'dv-5': 'heal-platform', 'dv-6': 'heal-platform',
  'pr-1': 'products', 'pr-2': 'products', 'pr-3': 'products', 'pr-4': 'products',
  'pr-5': 'products', 'pr-6': 'products', 'cm-1': 'products', 'cm-4': 'products',
  'cm-5': 'products', 'cm-6': 'products', 'us-1': 'products', 'us-5': 'products',
  'cm-2': 'washing-care', 'cm-2b': 'washing-care', 'cm-3': 'washing-care', 'cm-4b': 'washing-care',
  'mh-1': 'usage-guide', 'mh-2': 'usage-guide', 'mh-3': 'usage-guide', 'mh-4': 'usage-guide',
  'mh-5': 'usage-guide', 'mh-6': 'usage-guide', 'mh-7': 'usage-guide', 'mh-9': 'usage-guide',
  'mh-10': 'usage-guide', 'cy-1': 'usage-guide', 'cy-1b': 'usage-guide', 'cy-2': 'usage-guide',
  'cy-3': 'usage-guide', 'cy-4': 'usage-guide', 'cy-5': 'usage-guide', 'cy-6': 'usage-guide',
  'cy-7': 'usage-guide', 'cy-8': 'usage-guide', 'cy-9': 'usage-guide',
  'mh-8': 'why-reusable', 'pp-1': 'why-reusable', 'pp-1b': 'why-reusable', 'pp-2': 'why-reusable',
  'pp-3': 'why-reusable', 'pp-3b': 'why-reusable', 'pp-4': 'why-reusable', 'pp-5': 'why-reusable',
  'pp-6': 'why-reusable', 'pp-7': 'why-reusable',
  'pc-1': 'why-reusable', 'pc-1b': 'why-reusable', 'pc-2': 'why-reusable', 'pc-3': 'why-reusable',
  'pc-4': 'why-reusable', 'pc-4b': 'why-reusable', 'pc-5': 'why-reusable', 'pc-6': 'why-reusable',
  'pc-7': 'why-reusable', 'pc-8': 'why-reusable',
  'us-2': 'why-reusable', 'us-3': 'why-reusable', 'us-4': 'why-reusable', 'us-6': 'why-reusable',
  'md-1': 'why-reusable', 'md-2': 'why-reusable', 'md-3': 'why-reusable', 'md-4': 'why-reusable',
  'md-4b': 'why-reusable',
  'en-1': 'why-reusable', 'en-2': 'why-reusable', 'en-3': 'why-reusable', 'en-4': 'why-reusable',
  'en-5b': 'why-reusable', 'en-5': 'why-reusable',
  'co-1': 'why-reusable', 'co-2': 'why-reusable', 'co-3': 'why-reusable', 'co-4': 'why-reusable',
  'ho-1': 'banana-fiber', 'ho-2': 'banana-fiber', 'ho-2b': 'banana-fiber', 'ho-2c': 'banana-fiber',
  'ho-3': 'banana-fiber', 'ho-4': 'banana-fiber', 'ho-5': 'banana-fiber', 'ho-6': 'banana-fiber',
  'rs-1': 'banana-fiber', 'rs-2': 'banana-fiber', 'rs-2b': 'banana-fiber', 'rs-2c': 'banana-fiber',
  'rs-6': 'banana-fiber', 'rs-3': 'banana-fiber', 'rs-4': 'banana-fiber', 'rs-5': 'banana-fiber',
};

for (const [id, category] of Object.entries(map)) {
  const re = new RegExp(
    `(id: '${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*\\n\\s*category: )'[^']+'`,
    'g',
  );
  content = content.replace(re, `$1'${category}'`);
}

fs.writeFileSync(faqPath, content);
console.log('Updated', Object.keys(map).length, 'FAQ categories');

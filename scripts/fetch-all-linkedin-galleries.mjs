/**
 * Fetch all unique feedshare images from LinkedIn post HTML (JSON-LD + escaped URLs).
 * Run: node scripts/fetch-all-linkedin-galleries.mjs
 */

const UA = 'Mozilla/5.0 (compatible; SaukhyamBlog/1.0)';

const posts = [
  { id: 'li-1', url: 'https://www.linkedin.com/posts/anjubist_socialimpact-ruralindia-poverty-activity-7447666149120532481-4D9c' },
  { id: 'li-2', url: 'https://www.linkedin.com/posts/anjubist_menstrualhealth-socialimpact-ruralindia-activity-7444264714261577728--ViS' },
  { id: 'li-4', url: 'https://www.linkedin.com/posts/saukhyam-foundation_amma-menstrualhealth-socialimpact-activity-7437731614056615936-1uzY' },
  { id: 'li-6', url: 'https://www.linkedin.com/posts/anjubist_chandigarh-nexus-saukhyam-activity-7440290973173297153-I0kp' },
  { id: 'li-7', url: 'https://www.linkedin.com/posts/anjubist_rethinknormal-menstrualhealth-womenhealth-activity-7437759239705722880-fXaB' },
];

function decode(u) {
  return u.replace(/\\u0026/g, '&').replace(/&amp;/g, '&');
}

function extractGallery(html) {
  const gallery = [];

  const jsonLdBlock = html.match(/"@type":"SocialMediaPosting"[\s\S]*?"image":\s*(\[[\s\S]*?\])\s*,\s*"articleBody"/);
  if (jsonLdBlock) {
    try {
      const images = JSON.parse(jsonLdBlock[1]);
      for (const img of images) {
        if (img?.url && !gallery.includes(img.url)) gallery.push(img.url);
      }
    } catch {
      /* fall through */
    }
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

const all = [];
for (const p of posts) {
  const res = await fetch(p.url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  const html = await res.text();
  const gallery = extractGallery(html);
  console.error(`${p.id}: ${gallery.length} images`);
  for (const url of gallery) {
    if (!all.some((x) => x.url === url)) {
      all.push({ postId: p.id, url });
    }
  }
  await new Promise((r) => setTimeout(r, 500));
}

console.log(JSON.stringify(all, null, 2));
console.error(`Total unique: ${all.length}`);

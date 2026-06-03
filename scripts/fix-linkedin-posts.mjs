import fs from 'fs';

let s = fs.readFileSync('src/data/blog/linkedinPosts.ts', 'utf8');

s = s.replace(
  /(excerptHi:\s*\n(?:\s*'[^']*'|[^,]+),)\n(\s*date:)/g,
  "$1\n    image: '',\n    coverAlt: '',\n$2"
);

fs.writeFileSync('src/data/blog/linkedinPosts.ts', s);
console.log('done');

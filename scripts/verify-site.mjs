import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const dist = path.resolve('dist');
const required = [
  '/', '/about/', '/publications/', '/teaching/', '/year-archive/', '/cv/',
  '/posts/2025/05/Start/', '/posts/2025/08/New-Life/',
  '/posts/2025/10/Some-Mind-Sparks/', '/posts/2025/12/Review-of-Modern-Semester/',
  '/teaching/NN1/', '/teaching/SC1/',
  '/publication/2025-05-31-Superconductivity-in-Twisted-Bilayer-WSe2/',
];
for (const url of required) assert(fs.existsSync(path.join(dist, url, 'index.html')), `Missing preserved route: ${url}`);
for (const file of ['UndergraduateThesis.pdf', 'Defense.pdf', 'Eliashberg_Theory.pdf', 'nn_for_physicists_slides.pdf']) {
  assert.equal(fs.readFileSync(path.join(dist, 'files', file)).subarray(0, 5).toString(), '%PDF-', `Invalid PDF: ${file}`);
}
const listing = fs.readFileSync(path.join(dist, 'publications/index.html'), 'utf8');
assert(listing.includes('/publication/2025-05-31-Superconductivity-in-Twisted-Bilayer-WSe2/'), 'Thesis missing from listing');
assert(listing.includes('/files/Defense.pdf') && listing.includes('/files/UndergraduateThesis.pdf'), 'Both publication PDFs must be linked');
const archive = fs.readFileSync(path.join(dist, 'year-archive/index.html'), 'utf8');
for (const url of required.filter(url => url.startsWith('/posts/'))) assert(archive.includes(url), `Blog missing from static archive: ${url}`);
assert(fs.statSync(path.join(dist, 'about.html')).isFile(), 'Legacy /about.html must be a file, not a directory');
assert(fs.existsSync(path.join(dist, 'pagefind/pagefind.js')), 'Search index missing');

const errors = [];
let checked = 0;
for (const file of fs.readdirSync(dist, { recursive: true }).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(dist, file), 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    if (href.startsWith('//')) continue;
    const target = path.join(dist, decodeURIComponent(href));
    checked++;
    if (!fs.existsSync(target) && !fs.existsSync(path.join(target, 'index.html'))) errors.push(`${file}: ${href}`);
  }
}
assert.deepEqual(errors, [], 'Broken internal links or assets');
console.log(`Verified ${required.length} preserved routes, 4 PDFs, thesis links, all blog entries, search index, and ${checked} internal references.`);

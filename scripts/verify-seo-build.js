#!/usr/bin/env node
/**
 * Fails the build if sitemap/feed are missing, contain localhost,
 * or point at a host other than https://sharpen.page.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const EXPECTED_ORIGIN = 'https://sharpen.page';
const FILES = ['sitemap.xml', 'feed.xml'];

let failed = false;

function fail(msg) {
  console.error(`[verify-seo-build] ${msg}`);
  failed = true;
}

for (const file of FILES) {
  const full = path.join(PUBLIC, file);
  if (!fs.existsSync(full)) {
    fail(`Missing ${file}`);
    continue;
  }
  const body = fs.readFileSync(full, 'utf8');
  if (/localhost/i.test(body)) {
    fail(`${file} contains localhost`);
  }
  if (file === 'sitemap.xml') {
    const locs = body.match(/<loc>([^<]+)<\/loc>/g) || [];
    if (locs.length === 0) {
      fail('sitemap.xml has no <loc> entries');
    }
    for (const locTag of locs) {
      const loc = locTag.replace(/<\/?loc>/g, '');
      if (!loc.startsWith(`${EXPECTED_ORIGIN}/`) && loc !== EXPECTED_ORIGIN && loc !== `${EXPECTED_ORIGIN}/`) {
        fail(`sitemap.xml unexpected loc host: ${loc}`);
        break;
      }
    }
  }
  if (file === 'feed.xml') {
    if (!body.includes(`href="${EXPECTED_ORIGIN}/feed.xml"`) && !body.includes(`href='${EXPECTED_ORIGIN}/feed.xml'`)) {
      // self link may use different quoting; require origin somewhere as absolute feed URL
      if (!body.includes(`${EXPECTED_ORIGIN}/feed.xml`)) {
        fail('feed.xml missing absolute self link to sharpen.page');
      }
    }
    if (/localhost/i.test(body)) {
      // already covered
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log('[verify-seo-build] OK — sitemap and feed use https://sharpen.page');

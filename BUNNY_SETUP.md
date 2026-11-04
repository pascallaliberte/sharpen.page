# Bunny setup for sharpen.page

Local build, immutable deploys via `bunny sites`. Each deploy lands in
`deploys/{id}/` on one storage zone. Publishing flips the edge router's
`CURRENT_DEPLOY` variable and purges the CDN. Rollback is the same flip,
no re-upload.

Netlify stays production until Stage 3. This trial is Stage 1 only until
the `b-cdn.net` host is proven.

## Account (dashboard)

1. Sign up at [bunny.net](https://bunny.net). Trial includes $20 credit,
   no card required. Confirm the email before creating resources.
2. Optional: claim the extra $30 trial credits by adding billing info.
3. Do **not** create a Storage Zone, Pull Zone, DNS zone, or redirect
   Edge Rules by hand. `bunny sites create` provisions the zones;
   `bunny-redirects apply` owns `redirects:` rules.
4. Do **not** touch sharpen.page DNS. MX, SPF, and DKIM stay on Netlify.

The account API key is unscoped. `bunny login` stores it locally. Do not
put it in CI until Bunny offers a narrower credential.

## CLI (your machine)

```bash
curl -fsSL https://cli.bunny.net/install.sh | sh
# or: npm install -g @bunny.net/cli

bunny login
bunny whoami
```

`bunny` and `bunny-redirects` must be on `PATH`. They are machine tools, like
`git`, not project dependencies. Install `bunny-redirects` from its own repo
with `rake install` (not RubyGems.org, not this Gemfile). Env override if you
skip browser login: `BUNNYNET_API_KEY`.

## Create the site

Bunny has no Canadian storage region. North American origins are all in
the United States (NY, LA). This trial keeps origin **out of the US**:

```bash
bunny storage regions    # confirm codes on your account
bunny sites create sharpen-page --region UK
```

London (`UK`) is the closest non-US origin to Ottawa. Use `DE` (Frankfurt)
instead if the constraint is EU residency rather than merely not-US.

Do not pass `--region NY` or `--region LA`, and do not add US replication
regions. Replicas cannot be removed later. If you want a second copy for
durability, pair Europe with Europe (UK + DE, or DE + SE).

Skip Edge/SSD unless you want Frankfurt-only SSD as the primary.

Say yes if the CLI offers to link this directory (writes `.bunny/`,
gitignored). Zone names will look like `sites-sharpen-page-<suffix>`.
The Stage 1 URL is `https://sites-sharpen-page-<suffix>.b-cdn.net`.

## Usage

```bash
yarn deploy              # plan redirects, build, upload, apply redirects
yarn redirects:plan      # pack _redirects and diff the pull zone (no writes)
yarn redirects:apply     # upsert/delete managed edge rules only
yarn deploy:status       # live / previous deploys
yarn deploy:rollback     # flip back, purge
```

`yarn deploy` runs `bunny-redirects plan`, then `bunny sites deploy --build`,
then `bunny-redirects apply` if the upload succeeded. A parse error in
`_redirects` stops the job before upload. A missing file warns and still
deploys.

`--build` uses `sites.build` and `sites.dir` from `bunny.jsonc`
(`npm run build:cdn` → `public/`, with `public/_redirects` removed so Bunny
does not serve the file). Ruby 2.7.5, Node 18.18.0. `JEKYLL_ENV` is set by
the npm script, not by Netlify. Origin for relative redirect dests is
`https://sharpen.page` (`BUNNY_REDIRECTS_ORIGIN` overrides).

## After the first deploy (still no DNS)

In the storage zone **Error handling**:

- Custom 404 path: `/404.html`
- Do **not** enable rewrite 404 to 200 / SPA fallback to `/index.html`.
  That would map missing URLs to the homepage. This is a multi-page
  Jekyll site, not an SPA.

Then verify on the `b-cdn.net` host:

- `/` and `/about/` (pretty URLs: Jekyll writes `/about/index.html`)
- A hashed `/assets/*.js`
- A path that should 404
- `yarn deploy` a second time, then `yarn deploy:rollback`

If `/about/` 404s, stop. Directory index is a real blocker, not something
to guess around.

CDN cache will still hit US (and Canadian) PoPs for visitors there. That
is ephemeral edge cache, not the stored origin. Do not disable North
American delivery unless you intentionally want to drop US readers.

## Staged DNS migration — do not skip stages

Your MX, SPF and DKIM records are on Netlify DNS. Those records are portable,
but the migration is where mistakes take down business email. So the site gets
proven on Bunny *before* nameservers move.

### Stage 1 — no DNS at all

Deploy and verify on the system hostname:
`sites-sharpen-page-<suffix>.b-cdn.net`. Test deploy, rollback, deploy
again. Check response headers for cache hits. Netlify still serves
production. Nothing to undo.

### Stage 2 — a subdomain, DNS unchanged

In **Netlify DNS**, add one record:

```
next.sharpen.page.   CNAME   sites-sharpen-page-<suffix>.b-cdn.net.
```

Use the real system hostname from `bunny sites show`. Then:

```bash
bunny sites domains add next.sharpen.page --wait
```

MX, SPF, DKIM are untouched — you added a record, you changed nothing.

Run both sites in parallel for a week. Compare load times from Ottawa.

### Stage 3 — the apex, and only now

Two paths:

**3a. Check whether Netlify DNS can ALIAS the apex to an external host.**
If yes, you point the apex at Bunny and never move nameservers. Email records
never move. This is the low-risk path — check it before assuming 3b.

**3b. Move DNS to Bunny DNS.** Apex works because Bunny DNS does ALIAS
flattening. Procedure:

1. **72h before**: drop TTLs on every record in Netlify DNS to 300s.
2. Export the full zone. Screenshot it. You want a record of what existed.
3. Recreate **every** record in Bunny DNS — MX, all SPF/DKIM/DMARC TXT,
   any verification TXT records, every subdomain.
4. Verify against Bunny's nameservers directly *before* switching:
   ```bash
   dig @<bunny-ns> sharpen.page MX
   dig @<bunny-ns> sharpen.page TXT
   dig @<bunny-ns> <selector>._domainkey.sharpen.page TXT
   ```
   Diff that output against the Netlify zone. Every record accounted for.
5. Switch nameservers at the registrar.
6. Send yourself mail from an external account. Send one out. Check the
   headers for SPF/DKIM pass.
7. Leave the Netlify zone in place for two weeks as a reference.

Do stage 3 on a weekday morning, not a Friday afternoon.

## Edge Rules (`_redirects` via bunny-redirects)

Do not click redirect rules in the pull zone dashboard. `yarn deploy` syncs
repo-root [`_redirects`](_redirects) to rules whose description starts with
`redirects:`. Adding, changing, or removing a line updates or retires those
rules on the next successful apply. Rules named `bunny sites:` (deploy
router, cache) are never touched.

`bunny-redirects` packs same-destination paths (5 patterns per rule),
collapses `/your-purchase-story` through to the Tally 302, and treats an
empty file as “delete every managed rule.” A missing file skips sync.

Jekyll still `include`s `_redirects` for Netlify. `build:cdn` deletes
`public/_redirects` before upload so Bunny does not serve it as a URL.
After Stage 3, drop the Jekyll include.

Honeybadger: set `HONEYBADGER_API_KEY` on Hatchbox if you want parse/API
failures posted. Warnings stay on stderr.

## Caching

There is no `_headers` file. Set cache on the pull zone / Edge Rules,
not in the Jekyll build.

- Fingerprinted JS (`[name]-[hash].bundle.js`): long `max-age`,
  `immutable`. New builds write new filenames, so they never need purging.
- HTML: long edge TTL plus the purge `yarn deploy` already performs.

Get this backwards and you either serve stale pages or destroy your hit
ratio.

## What Netlify still does

- Production for sharpen.page until Stage 3.
- Daily CircleCI job that pings a Netlify build hook. Leave it until
  cutover.
- No Netlify Forms, Functions, or `_headers` to replace.

## Worth raising with the Bunny rep

- Scoped API keys — is there a purge-only or storage-only credential, or
  is the account key the only option? This is the blocker for CI deploys.
- Edge Rule count limits per pull zone, if you carry legacy redirects.
- Storage geo-replication cost if you later add a second European replica
  (not a US replica) for a Canadian audience.
- Whether `bunny sites` directory index serves `/about/` from
  `/about/index.html` without an extra rule.

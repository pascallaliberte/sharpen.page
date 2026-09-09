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
3. Do **not** create a Storage Zone, Pull Zone, DNS zone, or Edge Rules
   by hand. `bunny sites create` provisions those.
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

`bunny` must be on `PATH`. It is a machine tool, like `git`, not a project
dependency. Env override if you skip browser login: `BUNNYNET_API_KEY`.

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
yarn deploy              # npm run build, upload, publish
yarn deploy:status       # live / previous deploys
yarn deploy:rollback     # flip back, purge
```

`--build` uses `sites.build` and `sites.dir` from `bunny.jsonc`
(`npm run build` → `public/`). Ruby 2.7.5, Node 18.18.0. `JEKYLL_ENV` is
set by the npm script, not by Netlify.

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

## Edge Rules (do not create until Stage 1 is proven)

Default cap is 50 rules per pull zone. This list fits, with room for
cache rules. Action is **Redirect to URL** unless noted.

Enter these in the pull zone Edge Rules tab. Prefer one generic
trailing-slash rule (extensionless path → add `/`) if the console can
express it; otherwise enter the slash-only rows individually.

### 301 to `/`

| From | To |
| --- | --- |
| `/understand` | `/` |
| `/diy` | `/` |
| `/review` | `/` |
| `/subscribed` | `/` |
| `/value-ladders` | `/` |
| `/visualize` | `/` |
| `/hangout` | `/` |
| `/stream` | `/` |
| `/prioritize` | `/` |
| `/stepitup` | `/` |
| `/stepitup/guide` | `/` |
| `/dyi` | `/` |
| `/review/standard/` | `/` |
| `/hello-indiehackers/` | `/` |

### 301 to another path

| From | To |
| --- | --- |
| `/offerings` | `/customer-research/` |
| `/services` | `/customer-research/` |
| `/interviews` | `/research/` |
| `/struggle-first/vs-features-benefits` | `/struggle-first/` |

### Trailing-slash canonicalization (301)

| From | To |
| --- | --- |
| `/articles` | `/articles/` |
| `/struggle-first` | `/struggle-first/` |
| `/jtbd` | `/jtbd/` |
| `/copywriting` | `/copywriting/` |
| `/consulting` | `/consulting/` |
| `/optimize` | `/optimize/` |
| `/research` | `/research/` |
| `/about` | `/about/` |

### External

| From | To | Status | Notes |
| --- | --- | --- | --- |
| `/your-purchase-story` | `https://tally.so/r/xX8Vyo` | 302 | Skip chaining through `/purchase-interview` |
| `/purchase-interview` | `https://tally.so/r/xX8Vyo` | **302** | Netlify `!` force. A real page exists; the rule must always win |
| `/purchase-interview/` | `https://tally.so/r/xX8Vyo` | **302** | same |
| `/forces-widget` | `https://tools.sharpen.page/forces/` | 301 | |
| `/forces-widget/` | `https://tools.sharpen.page/forces/` | 301 | |

Edge Rules cannot express Netlify 200 rewrites, splats, or proxy-to-origin.
This site's `_redirects` has none of those.

`_redirects` is copied into `public/` by Jekyll (`include`). Netlify
consumes it; Bunny would serve it as a file at `/_redirects`. Harmless.

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

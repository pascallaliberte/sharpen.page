# sharpen.page Bunny cutover

Cutover: **Monday 9 Nov 2026**. Nameservers are Bunny. Next: Phase D on **Wed 11 Nov**.

**You** = Pascal (registrar, Netlify UI, Fastmail). **Me** = agent (Bunny CLI/API, repo cleanup, verification).

## Calendar

Netlify DNS does not let you edit TTL on existing records; their floor is **3600s (one hour)**. Skip any TTL change. One hour is the cache we wait out on Monday after nameservers move, not a reason to touch DNS on Friday.

| When | Who | Do |
| --- | --- | --- |
| **Wed 4 Nov** | Both | **Done.** A1–A7: hostnames added, DNS-01 certs issued (`HasCertificate: true` on apex, `www`, `tools`), preview checked, TXT pasted, DNS exported, tools repo committed. |
| **Thu 5 Nov** | Both | Nothing required. Certs are already on the pull zones. |
| **Fri 6 Nov** | Me | Optional: re-diff Bunny zone vs live `dig` (MX, SPF, DKIM, Google TXT, tools, apex/www PullZone). No Netlify DNS edits. |
| **Sat 7 – Sun 8 Nov** | Both | Hands off. No nameserver change. Netlify stays production. Bunny zone stays inert. |
| **Mon 9 Nov** | Both | **Phase C done.** NS is Bunny, HTTPS + certs live, mail works, Netlify GitHub deploys disconnected, `.circleci/` removed. `netlify.toml` stays until Phase E. |
| **Wed 11 Nov** | Both | Phase D: confirm public NS is still Bunny; watch mail/HTTPS. Rollback is still Name.com → Netlify’s four NS1 names. |
| Mon 23 Nov | Both | Phase E: retire Netlify domains, then sites, then the DNS zone last. Repo cleanup. |

## Current state (9 Nov 2026)

| Piece | Live |
| --- | --- |
| Public NS | Bunny (`kiki.bunny.net` / `coco.bunny.net`) |
| `sharpen.page` / `www` | PullZone **6524702** |
| `tools.sharpen.page` | PullZone **6928393** |
| Mail | Fastmail on Bunny DNS (confirmed 9 Nov) |
| SSL | Let’s Encrypt on apex, `www`, `tools` |
| Production deploys | Local: `yarn deploy` (blog), `bash scripts/bunny-deploy.sh` (tools). Netlify GitHub connection removed. |

Netlify sites and DNS zone stay as rollback until Phase E (23 Nov). `.circleci/` is gone; `netlify.toml` stays until then.

`availability.sharpen.page` and `add-review-standard-page.sharpen.page` stay on Netlify only. They are not copied to Bunny and will stop resolving when nameservers move. Do not invent DMARC or Fastmail SRV.

Leave the `_acme-challenge` TXT records in Netlify DNS until after cutover. They are harmless. Do not enable Force SSL in the Bunny dashboard before Monday.

---

## Phase A — this week, no public DNS change

Goal: certificates in Bunny *before* nameservers move. Netlify still production.

| # | Who | What |
| --- | --- | --- |
| A1 | Me | Add hostnames `sharpen.page` and `www.sharpen.page` to pull zone 6524702 **without** `--ssl` / `--wait`. (`tools.sharpen.page` is already on 6928393.) |
| A2 | Me | Start Bunny seamless SSL (DNS-01): `POST /pullzone/requestExternalDnsCertificate` for `sharpen.page`, `www.sharpen.page`, `tools.sharpen.page`. Hand you the `_acme-challenge` TXT values. |
| A3 | You | In **Netlify DNS**, add those TXT records. Do not request “Enable SSL” in Bunny yet. |
| A4 | Me | Wait until `dig TXT _acme-challenge.…` is public, then `completeExternalDnsCertificate`. Confirm `HasCertificate: true` on all three hostnames. |
| A5 | You | Screenshot the Netlify DNS table (backup). |
| A6 | You | In the tools repo, commit `bunny.jsonc`, `_redirects`, `.gitignore`, `scripts/bunny-deploy.sh` (uncommitted from the site create). |
| A7 | Me | Confirm storage 404 = `/404.html` and SPA fallback is off on the blog site. Spot-check preview: `/`, `/about/`, `/understand/`, a 404, `/forces/`. |

Do **not** run `bunny sites domains ssl …` until A4 has succeeded. HTTP-01 against names that still resolve to Netlify fails and can Let’s-Encrypt-rate-limit the domain for a week.

## Phase B — Friday 6 Nov (no DNS edits)

Netlify will not change TTL on existing records. Leave them at 3600s.

| # | Who | What |
| --- | --- | --- |
| B1 | — | Skip. Do not try to lower TTLs. |
| B2 | Me | Optional re-diff of Bunny zone vs live `dig` (MX, SPF, DKIM, Google TXT, tools, apex/www PullZone). |

## Phase C — Monday 9 Nov morning

Order matters. SSL first if A4 is done; nameservers second; stop Netlify auto-deploys only after HTTPS is proven on the public names.

| # | Who | What |
| --- | --- | --- |
| C1 | Me | `dig @kiki.bunny.net` for NS, MX, TXT, DKIM, apex A, `www`, `tools`. Must match the intended Bunny zone, not old Netlify A IPs for apex/`www`/`tools`. |
| C2 | You | At **Name.com**, set nameservers to `kiki.bunny.net` and `coco.bunny.net`. Leave the Netlify zone in place. |
| C3 | Me | Watch public NS. When it is Bunny, confirm `https://sharpen.page/`, `https://www.sharpen.page/`, `https://tools.sharpen.page/forces/` (cert + `cdn-pullzone` header). Certs are already issued; do not request new ones. Some resolvers may still hit Netlify for **up to one hour** (3600s). |
| C4 | You | After that hour: send yourself mail from an outside account; send one out. SPF/DKIM pass in headers. |
| C5 | Me | Recheck `/understand/`, `/about/`, `/forces/`, a 404, Fastmail CNAMEs. |
| C6 | You | In Netlify: **stop auto publishing / stop builds** on `sharpen-page` (`e145313b-…`) and `soft-twilight-f1a18f` (`802dc0fa-…`) only after C3 shows Bunny headers and the hour has passed. Do not delete the sites or the DNS zone. |
| C7 | Me | Remove `.circleci/` from the blog repo (dead hook). Leave `netlify.toml` until Phase E so a Netlify rollback still builds. |

Until C6, a push to `main` still ships to Netlify (good while some resolvers are on NS1). After C6, a push to `main` does **not** ship to Bunny. Bunny is `yarn deploy` / `bash scripts/bunny-deploy.sh` on a machine with `bunny` + `bunny-redirects`.

## Phase D — Wednesday 11 Nov

| # | Who | What |
| --- | --- | --- |
| D1 | Me | Confirm public NS is only Bunny worldwide enough for comfort; no leftover Netlify A for apex/`www`/`tools`. |
| D2 | You | Keep using the sites as normal. Flag mail or HTTPS issues immediately — rollback is still “put Name.com NS back to Netlify’s four NS1 names.” |

## Phase E — Monday 23 Nov, retire Netlify

Only if mail, HTTPS, and deploys have been clean.

| # | Who | What |
| --- | --- | --- |
| E1 | You | In Netlify, remove custom domains `sharpen.page`, `www.sharpen.page`, `tools.sharpen.page`. Sites can keep their `*.netlify.app` URLs as fossils. |
| E2 | You | Delete Netlify sites `sharpen-page` and `soft-twilight-f1a18f` **or** leave them stopped. Deleting is fine once domains are gone. |
| E3 | You | Delete Netlify DNS zone `sharpen.page` (`5be2184882d3f177e28ba09e`). Do this last. Deleting it while Name.com still pointed at NS1 would take the domain down. |
| E4 | Me | Repo cleanup on the blog: drop `_redirects` from `_config.yml` `include`; delete `netlify.toml`; keep `_redirects` at repo root (Bunny source of truth). On tools: delete `netlify.toml`. |
| E5 | Me | Optional: Hatchbox/CI later, once Bunny has a scoped key. Until then, deploys stay local. Account API key stays off GitHub. |

`*.netlify.app` URLs can die at E2. Bookmarks should already be on `sharpen.page` / `tools.sharpen.page`.

---

## Rollback

1. Name.com nameservers → `dns1.p07.nsone.net` … `dns4.p07.nsone.net`.
2. Re-enable Netlify builds on both sites (undo C6).
3. Do not delete the Bunny DNS zone or sites; they stay a preview.

Record caches last **up to one hour** (Netlify’s 3600s). Bunny publishes NS at 172800s (48h), so after the switch a rollback can take up to two days for resolvers that already cached `kiki`/`coco`. Keep the Netlify zone until Phase E.

## What stays yours vs mine at a glance

**You always:** Name.com NS, Netlify DNS screenshots, Fastmail send/receive test, stop/delete Netlify sites and zone. No TTL edits.

**Me always:** Bunny hostnames, seamless cert API, preview/prod verification, CircleCI file removal, post-retirement `_config.yml` / `netlify.toml` cleanup. No registrar NS change unless you explicitly ask.

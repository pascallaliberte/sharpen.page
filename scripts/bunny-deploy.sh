#!/usr/bin/env bash
# Build, keep _redirects off the CDN, then sync edge rules after a successful publish.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REDIRECTS=(bash "$ROOT/scripts/with-bunny-redirects.sh")
ORIGIN="${BUNNY_REDIRECTS_ORIGIN:-https://sharpen.page}"

echo "==> planning redirects from _redirects"
"${REDIRECTS[@]}" plan --file "$ROOT/_redirects" --origin "$ORIGIN"

echo "==> building and deploying (public/_redirects stripped)"
bunny sites deploy --build

echo "==> applying redirects"
"${REDIRECTS[@]}" apply --file "$ROOT/_redirects" --origin "$ORIGIN"

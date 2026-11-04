#!/usr/bin/env bash
# Run the global bunny-redirects gem. This site's .ruby-version (2.7.5) may
# not have it installed; rbenv shims then fail even when another MRI does.
set -euo pipefail

if [[ -n "${BUNNY_REDIRECTS_RUBY:-}" ]]; then
  exec env RBENV_VERSION="$BUNNY_REDIRECTS_RUBY" bunny-redirects "$@"
fi

if command -v rbenv >/dev/null 2>&1 && ! rbenv which bunny-redirects >/dev/null 2>&1; then
  found=""
  while IFS= read -r version; do
    if RBENV_VERSION="$version" rbenv which bunny-redirects >/dev/null 2>&1; then
      found="$version"
      break
    fi
  done < <(rbenv versions --bare)
  if [[ -z "$found" ]]; then
    echo "bunny-redirects is not installed. In the bunny-redirects repo run: rake install" >&2
    exit 1
  fi
  echo "warning: bunny-redirects is not installed for Ruby $(rbenv version-name); using $found" >&2
  exec env RBENV_VERSION="$found" bunny-redirects "$@"
fi

if ! command -v bunny-redirects >/dev/null 2>&1; then
  echo "bunny-redirects is not on PATH. In the bunny-redirects repo run: rake install" >&2
  exit 1
fi

exec bunny-redirects "$@"

#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

# ── Usage ──────────────────────────────────────────────────────────
usage() {
  echo "Usage: $0 [-h|--help]"
  echo ""
  echo "  Builds the Followbirds marketing site and uploads it to the"
  echo "  production server (FTP) at the domain root."
  exit 1
}

for arg in "$@"; do
  case "$arg" in
    -h|--help) usage ;;
    *) usage ;;
  esac
done

# ── Check prerequisites ────────────────────────────────────────────
if [ ! -f .env ]; then
  echo "Error: .env not found. Run 'cp .env.example .env' and fill in your keys."
  exit 1
fi

# Read .env as literal key/value data. Sourcing it would interpret shell
# syntax inside passwords (for example `$`), which breaks strict mode and can
# unintentionally expand values.
load_env() {
  local env_line env_key env_value

  while IFS= read -r env_line || [ -n "$env_line" ]; do
    [[ -z "$env_line" || "$env_line" =~ ^[[:space:]]*# ]] && continue

    if [[ "$env_line" =~ ^([A-Za-z_][A-Za-z0-9_]*)=(.*)$ ]]; then
      env_key="${BASH_REMATCH[1]}"
      env_value="${BASH_REMATCH[2]}"
      if [ "${#env_value}" -ge 2 ]; then
        case "$env_value" in
          \"*\") env_value="${env_value#?}"; env_value="${env_value%?}" ;;
          \'*\') env_value="${env_value#?}"; env_value="${env_value%?}" ;;
        esac
      fi
      export "${env_key}=${env_value}"
    else
      echo "Error: invalid .env entry. Use KEY=value format." >&2
      exit 1
    fi
  done < .env
}

load_env

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "Error: not on 'main' branch (on '$BRANCH'). Switch to main first."
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Error: working tree is dirty. Commit or stash changes first."
  exit 1
fi

# ── Build ──────────────────────────────────────────────────────────
echo "═══ Building site ═══"
npm run build

# ── Upload ─────────────────────────────────────────────────────────
: "${FTP_HOST:?Error: FTP_HOST is required in .env}"
: "${FTP_USER:?Error: FTP_USER is required in .env}"
: "${FTP_PASSWORD:?Error: FTP_PASSWORD is required in .env}"
FTP_PORT="${FTP_PORT:-21}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-/}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "Error: lftp is required for incremental FTP uploads. Install it with: brew install lftp" >&2
  exit 1
fi

FTP_TLS="${FTP_TLS:-false}"
if [ "$FTP_TLS" = "true" ]; then
  FTP_TLS_SETTINGS='set ftp:ssl-force true; set ftp:ssl-protect-data true;'
else
  FTP_TLS_SETTINGS='set ftp:ssl-force false; set ftp:ssl-allow false;'
  echo "Warning: FTP_TLS is disabled; credentials travel over plain FTP." >&2
fi

echo "→ Incrementally uploading to FTP ${FTP_HOST}:${FTP_REMOTE_DIR}/..."
lftp -u "$FTP_USER","$FTP_PASSWORD" -p "$FTP_PORT" "$FTP_HOST" <<EOF
set cmd:fail-exit true
set net:max-retries 2
set net:timeout 30
$FTP_TLS_SETTINGS
mirror --reverse --only-newer --no-perms --verbose=1 dist "$FTP_REMOTE_DIR"
bye
EOF

echo "✓ Upload complete."

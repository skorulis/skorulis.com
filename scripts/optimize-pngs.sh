#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

LOSSY_THRESHOLD=102400 # 100 KB

total_bytes() {
  find . -name '*.png' -not -path './_site/*' -print0 |
    xargs -0 stat -f%z 2>/dev/null |
    awk '{sum += $1} END {print sum + 0}'
}

format_bytes() {
  local bytes=$1
  if ((bytes >= 1048576)); then
    printf '%.2f MB' "$(echo "scale=2; $bytes / 1048576" | bc)"
  elif ((bytes >= 1024)); then
    printf '%.1f KB' "$(echo "scale=1; $bytes / 1024" | bc)"
  else
    printf '%d B' "$bytes"
  fi
}

is_lossless_only() {
  local file=$1
  case "$file" in
    */assets/favicon/* | */favicon-16x16.png | */favicon-32x32.png | */apple-touch-icon.png)
      return 0
      ;;
  esac
  return 1
}

is_lossy_candidate() {
  local file=$1
  local size=$2

  if is_lossless_only "$file"; then
    return 1
  fi

  case "$file" in
    */screenshots/* | */landing/* | */assets/apps/*)
      return 0
      ;;
  esac

  case "$(basename "$file")" in
    og-image.png | logo.png)
      return 0
      ;;
  esac

  if ((size > LOSSY_THRESHOLD)); then
    return 0
  fi

  return 1
}

before=$(total_bytes)
lossy_count=0
lossy_saved=0

echo "PNG optimization starting in $ROOT"
echo "Before: $(format_bytes "$before")"
echo

echo "Phase 1: lossy compression (pngquant)"
while IFS= read -r -d '' file; do
  size=$(stat -f%z "$file")
  if is_lossy_candidate "$file" "$size"; then
    before_size=$size
    if pngquant --quality=80-95 --force --ext .png --skip-if-larger "$file"; then
      after_size=$(stat -f%z "$file")
      saved=$((before_size - after_size))
      if ((saved > 0)); then
        lossy_count=$((lossy_count + 1))
        lossy_saved=$((lossy_saved + saved))
        printf '  %-60s %s -> %s\n' "$file" "$(format_bytes "$before_size")" "$(format_bytes "$after_size")"
      fi
    fi
  fi
done < <(find . -name '*.png' -not -path './_site/*' -print0)

mid=$(total_bytes)
echo
echo "After phase 1: $(format_bytes "$mid") (saved $(format_bytes "$lossy_saved") across $lossy_count files)"
echo

echo "Phase 2: lossless compression (oxipng)"
oxipng_count=0
oxipng_saved=0
while IFS= read -r -d '' file; do
  before_size=$(stat -f%z "$file")
  if oxipng -o max --strip safe -q "$file"; then
    after_size=$(stat -f%z "$file")
    saved=$((before_size - after_size))
    if ((saved > 0)); then
      oxipng_count=$((oxipng_count + 1))
      oxipng_saved=$((oxipng_saved + saved))
      printf '  %-60s %s -> %s\n' "$file" "$(format_bytes "$before_size")" "$(format_bytes "$after_size")"
    fi
  fi
done < <(find . -name '*.png' -not -path './_site/*' -print0)

after=$(total_bytes)
total_saved=$((before - after))

echo
echo "After phase 2: $(format_bytes "$after") (saved $(format_bytes "$oxipng_saved") across $oxipng_count files)"
echo
echo "Total: $(format_bytes "$before") -> $(format_bytes "$after") (saved $(format_bytes "$total_saved"))"

#!/usr/bin/env bash
# Fondré Studio — local live server
cd "$(dirname "$0")"
PORT="${1:-8123}"
lsof -ti:"$PORT" | xargs kill -9 2>/dev/null
echo "Fondré Studio running at  http://localhost:$PORT"
python3 -m http.server "$PORT" --bind 127.0.0.1

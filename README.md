# Fondré Studio

Pixel-perfect implementation of the **Fondré Studio** web app, built 1:1 from the Figma design — static HTML / CSS / vanilla JS, no build step.

## Pages
- `index.html` — Hlavný page (home)
- `projekty.html` — Moje projekty
- `o-nas.html` — O nás
- `ochrana-sukromia.html` — Ochrana súkromia
- `pravidla-pouzivania.html` — Pravidlá používania

## Features
- Fixed 1754px design canvas, scaled to fit any viewport width (Figma "fit to width").
- **Interactive hero particles** — subtle dots that drift and fly away from the cursor.
- **Liquid-glass floating menu** — translucent blur, specular sheen, gloss highlight.
- **Project carousel** — timing ported from the Figma motion data.
- **Seamless logo marquee**, scroll-reveal animations, hover states.
- All image / SVG assets bundled locally in `assets/`.

## Run locally
```bash
./start-server.sh          # serves at http://localhost:8123
# or
python3 -m http.server 8123
```

## Fonts
Tenor Sans · Instrument Serif · DM Sans · Inter (loaded from Google Fonts).

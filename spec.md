# SPEC.md — Lucas Moraca Portfolio Site

## Overview

Single-page portfolio site for Lucas Moraca, a product builder based in Boulder, CO. The site's job is to convince potential clients (small business owners, startup founders, anyone who needs a website or app built) that Lucas is the person to hire. The site itself should demonstrate the quality of work he delivers.

**Design reference:** [seanhalpin.xyz](https://www.seanhalpin.xyz/) — study this site closely for layout, spacing, card style, typography scale, and overall feel. Adapt, don't clone.

**Positioning:** Lucas is a builder, not an agency and not a template flipper. He founded two businesses and built their entire tech stacks. He ships real products.

---

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion (animations)
- Deploy to Vercel
- TypeScript

---

## Design System

### Color Palette — Light Mode (default)

- `--bg-hero`: Dark green gradient (`#1a2e1a` → `#0a1a0f`) — hero section only
- `--text-hero`: Mint/seafoam (`#7dd3b5`) — large hero heading text
- `--text-hero-sub`: Off-white (`#e8e0d4`) — hero subtitle/tagline
- `--bg-body`: Warm cream (`#f2ede4`)
- `--text-primary`: Dark forest green (`#1a3a2a`)
- `--text-secondary`: Muted sage (`#5a6b5e`)
- `--accent`: Dark teal/green (`#1a5c42`) — links, footer headings, interactive elements
- `--card-radius`: `20px` — all project cards use large rounded corners

### Color Palette — Dark Mode

- `--bg-hero`: Deeper gradient (`#0a1a0f` → `#050d08`)
- `--text-hero`: Brighter mint (`#8eecc5`)
- `--bg-body`: Near-black (`#0e1210`)
- `--text-primary`: Off-white (`#e8e0d4`)
- `--text-secondary`: Muted gray-green (`#8a9b8e`)
- `--accent`: Bright teal (`#4dd8a4`)
- Card backgrounds shift to darker variants of their respective colors

### Typography

- **Headings / Display:** A bold, rounded geometric sans-serif. Try: `Cabinet Grotesk`, `Satoshi`, `General Sans`, or `Plus Jakarta Sans`. Must feel modern and confident — NOT generic. Do not use Inter, Space Grotesk, or Roboto.
- **Body:** `Geist` or `DM Sans` — clean, readable.
- **Hero heading size:** Massive. ~80-120px on desktop, scaling down responsively. Reference Seán Halpin's type scale.
- **Weight:** Headings at 700-800. Body at 400.

### Spacing

- Generous whitespace everywhere. Sections should breathe.
- Max content width: ~1200px centered
- Card grid gap: ~24-32px

---

## Site Structure

### 1. Navigation — Floating Pill Nav (sticky)

- Floats at the top, centered, with a frosted glass / subtle background blur
- Links: `Work` · `About` · `Contact`
- Active state: pill-shaped highlight (like Seán's `/` indicator on Work)
- Smooth scroll to sections on click
- Hides on scroll down, reappears on scroll up
- Dark/light mode toggle button visible in nav OR footer (see Section 6)

### 2. Hero Section

**Background:** Dark green gradient (full viewport height)

**Content (centered):**
```
Hi. I'm Lucas.
A Builder.
```
- "Hi. I'm Lucas." and "A Builder." in massive mint-colored type
- Below: "Your brand deserves better than a template." in smaller off-white text, centered
- Decorative four-point star/sparkle elements floating around the text (like Seán's) — 2-3 of them, slightly animated (gentle rotation or pulse)
- Subtle scroll indicator at bottom (thin line or chevron)

**Animations:**
- Staggered entrance: heading fades/slides up first, tagline follows 200ms later, sparkles fade in last
- Sparkles have a slow continuous gentle rotation

### 3. Project Grid — "Selected Work"

**Background:** Switches to warm cream (`--bg-body`)

**Layout:** 2-column grid on desktop (asymmetric sizing is fine — one card can be larger). Single column on mobile.

Each card is a large, rounded-corner container with a distinct background color, containing:
- Small label at top (company/category in uppercase tracking-wide)
- Project name in large bold type
- Screenshot/mockup of the actual product sitting inside the card
- Entire card is clickable → opens live URL in new tab

---

#### Card 1 — REDLINE (large card, spans left column or takes more visual weight)

- **Card background:** Dark/black with subtle green tint (`#0a0f0a` → `#1a2a1a` gradient) — matches Redline's brand
- **Label:** `FOUNDED & BUILT`
- **Project name:** `Redline` (in mint or the Redline green `#00ff88`)
- **Subtitle:** `AI Training Advisor`
- **Screenshot:** The Redline app phone mockup (the readiness scoring UI with the green circle, HRV bars, and training options). Pull this asset from the current site's repo or screenshot from `https://redline-website-vercel.vercel.app/`
- **Link:** `https://redline-website-vercel.vercel.app/`

#### Card 2 — CHAPTERMADE (right column, top)

- **Card background:** Warm earth/sand (`#d4c5a9` or muted gold `#c9b97a`)
- **Label:** `FOUNDED & BUILT`
- **Project name:** `ChapterMade`
- **Subtitle:** `Composite Platform · 22 Chapters · 2,200+ Members`
- **Screenshot:** Browser mockup of ChapterMade site showing the Flatirons hero. Screenshot from `https://chaptermadecomposites.vercel.app/`
- **Link:** `https://chaptermadecomposites.vercel.app/`

#### Card 3 — LILO CURATED (left or right column)

- **Card background:** Soft rose/mauve (`#e8c4c4` or dusty pink `#d4a0a0`) — matches the feminine fitness brand
- **Label:** `CLIENT WORK`
- **Project name:** `LiLO Curated`
- **Subtitle:** `Wholesale Fitness Attire`
- **Screenshot:** Browser mockup of LiLO site showing the product hero with the scrolling attire images. Screenshot from `https://lilocurated.com`
- **Link:** `https://lilocurated.com`

#### Card 4 — YOUR PROJECT (neutral/cream card)

- **Card background:** Light warm white (`#faf7f2`) with subtle border
- **Label:** `WHAT'S NEXT?`
- **Project name:** `Your Project`
- **Subtitle:** `Have an idea? Let's build it.`
- **No screenshot** — instead, a subtle illustration element or just clean type
- **Click action:** Smooth scroll to Contact section

---

**Card animations:**
- Fade up + slight scale (0.97 → 1.0) as each card enters viewport (Framer Motion, `whileInView`)
- On hover: subtle lift (translateY -4px) + shadow increase
- Screenshots inside cards can have a very subtle parallax shift on scroll

### 4. About Section

**Background:** Continues on cream

**Layout:** Two-column on desktop. Photo left, text right. Single column stacked on mobile.

**Photo:** Placeholder for now (`/public/assets/lucas-photo.jpg`). Lucas will drop in his Chautauqua outdoor photo later. Use a gray placeholder div with text "Photo" for now.

**Text:**
```
Lucas Moraca
Boulder, CO

CS student at CU Boulder. CrossFit coach. Founded two businesses.
I design, build, and ship products that make brands stand out.
I take on 2–3 projects at a time.
```

- Name in large bold type
- Location in muted secondary text
- Bio in body text, 3 lines max
- Below the bio: small row of links → Email · LinkedIn · GitHub (icons or text links)

### 5. Contact Section

**Background:** Continues on cream, or shifts to a slightly different warm tone for visual separation

**Heading:** "Let's work together." in large type

**Subtext:** "Tell me about your project. I respond within 24 hours."

**Form fields:**
- Name (text input)
- Email (text input)
- Project Details (textarea)
- Submit button: "Send it →"

**Form backend:** Resend + Next.js API route. Sends submissions to `lucasmoraca@gmail.com`.

**Styling:** Inputs with rounded corners, subtle border, generous padding. Button matches accent color.

### 6. Footer

**Background:** Same as body (cream in light mode, dark in dark mode)

**Layout:** Reference Seán Halpin's footer — minimal, two-column:

Left side:
```
© 2026 Lucas Moraca
```

Right side — two small columns:
```
Elsewhere          Contact
GitHub              Message (scrolls to contact form)
LinkedIn
```

**Dark/Light Mode Toggle:**
- Circular button with sun/moon icon
- Positioned in the footer area (like Seán's) OR in the nav
- Toggles between light and dark color schemes
- Persists preference in localStorage
- Smooth transition between modes (CSS transition on background-color, color)

**Decorative bottom element (optional):**
- A row of vertical lines/bars at the very bottom (like Seán's waveform visualization)
- Purely decorative, adds personality
- Varies in height, uses accent color, spaced evenly across the viewport width

---

## Animations Summary

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero heading | Fade up + slide up (staggered) | Page load |
| Hero tagline | Fade up, 200ms delay after heading | Page load |
| Sparkle stars | Fade in + slow continuous rotation | Page load |
| Nav | Hide on scroll down, show on scroll up | Scroll direction |
| Project cards | Fade up + subtle scale (0.97→1) | Scroll into viewport |
| Project cards hover | translateY(-4px) + shadow lift | Hover |
| Card screenshots | Very subtle parallax (optional) | Scroll |
| About photo | Fade in from left | Scroll into viewport |
| About text | Fade in from right | Scroll into viewport |
| Contact form | Fade up | Scroll into viewport |
| Dark/light toggle | Smooth color transition (300ms) | Click |

Use Framer Motion `whileInView` with `once: true` for scroll-triggered animations. Keep animations subtle and quick (300-500ms). No gratuitous effects.

---

## Assets Needed

Screenshots need to be captured or pulled from live URLs:

1. **Redline phone mockup** — The app UI showing readiness scoring (green circle, HRV bars, training options A/B/C). Check existing repo at `lucas-moraca-freelance.vercel.app` for this asset, or screenshot from `https://redline-website-vercel.vercel.app/`
2. **ChapterMade browser screenshot** — The Flatirons hero section from `https://chaptermadecomposites.vercel.app/`
3. **LiLO Curated browser screenshot** — The product hero from `https://lilocurated.com`
4. **Lucas photo** — Outdoor/Chautauqua photo (will be added later, use placeholder for now)

For browser/phone mockup frames: create them with CSS (rounded corners, mock browser chrome with dots) rather than using image-based device frames.

---

## Pages

Single page only. No routing needed beyond the index page. All sections are scroll targets.

Anchor IDs:
- `#work` — Project grid
- `#about` — About section
- `#contact` — Contact section

---

## Responsive Breakpoints

- Desktop: 1200px+ (2-column project grid, side-by-side about)
- Tablet: 768-1199px (2-column grid with smaller cards, stacked about)
- Mobile: <768px (single column everything, smaller hero type ~40-48px)

---

## What NOT to Build

- No blog / notes section
- No testimonials
- No pricing page
- No services page
- No capabilities grid with placeholder thumbnails
- No "How I Work" process steps (cut for this version — the work speaks)
- No custom cursor
- No page transition overlays
- No WebGL or canvas backgrounds

---

## File Structure

```
/app
  /layout.tsx          — Root layout with fonts, metadata, theme provider
  /page.tsx            — Single page composing all sections
  /api/contact/route.ts — Contact form API endpoint (Resend)
/components
  /Nav.tsx             — Floating pill navigation
  /Hero.tsx            — Hero section
  /ProjectGrid.tsx     — Project cards grid
  /ProjectCard.tsx     — Individual project card
  /About.tsx           — About section
  /Contact.tsx         — Contact form
  /Footer.tsx          — Footer with toggle
  /ThemeToggle.tsx     — Dark/light mode toggle
  /Sparkle.tsx         — Decorative sparkle/star component
/public
  /assets
    /redline-mockup.png
    /chaptermade-screenshot.png
    /lilo-screenshot.png
    /lucas-photo.jpg   (placeholder until real photo is added)
```

---

## Live URLs for Project Links

- Redline: `https://redline-website-vercel.vercel.app/`
- ChapterMade: `https://chaptermadecomposites.vercel.app/`
- LiLO Curated: `https://lilocurated.com`

## Social Links

- Email: `lucasmoraca@gmail.com`
- GitHub: (Lucas to provide)
- LinkedIn: (Lucas to provide)

---

## Summary

The site should feel like you landed on something a professional built for themselves — because you did. Every pixel is a proof point. The dark hero grabs attention, the project cards show range and depth, and the overall craft level makes the case before anyone reads a word.
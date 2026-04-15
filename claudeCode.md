# CLAUDE-CODE-PROMPT.md

## Context

You are building a portfolio website for Lucas Moraca, a product builder based in Boulder, CO. The full design spec is in `SPEC.md` in this repo — read it thoroughly before starting. The design is inspired by [seanhalpin.xyz](https://www.seanhalpin.xyz/) — visit that site and study its layout, typography scale, card design, spacing, and overall feel before writing any code.

**Design reference screenshots** (in `/reference/` if provided, otherwise visit the live URL):
- Seán Halpin's site: dark green gradient hero with massive mint-colored type, floating sparkle stars, warm cream body background, large rounded project cards with distinct pastel colors per project, floating pill nav, dark/light mode toggle in footer, decorative waveform bar at bottom.

**Live project URLs to screenshot for card assets:**
- Redline: `https://redline-website-vercel.vercel.app/`
- ChapterMade: `https://chaptermadecomposites.vercel.app/`
- LiLO Curated: `https://lilocurated.com`

---

## Build Instructions — Execute in Order

### Step 1: Project Scaffolding

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

Install dependencies:
```bash
npm install framer-motion resend
```

Set up the file structure as defined in SPEC.md. Create all component files as empty stubs first:
- `/app/layout.tsx`
- `/app/page.tsx`
- `/app/api/contact/route.ts`
- `/components/Nav.tsx`
- `/components/Hero.tsx`
- `/components/ProjectGrid.tsx`
- `/components/ProjectCard.tsx`
- `/components/About.tsx`
- `/components/Contact.tsx`
- `/components/Footer.tsx`
- `/components/ThemeToggle.tsx`
- `/components/Sparkle.tsx`

Create `/public/assets/` directory for images.

Set up fonts: Import a bold geometric sans-serif for headings (try Cabinet Grotesk, Satoshi, General Sans, or Plus Jakarta Sans via Google Fonts or next/font) and Geist or DM Sans for body. Do NOT use Inter, Space Grotesk, or Roboto. These fonts must feel premium and modern.

Set up Tailwind config with the color tokens from SPEC.md (both light and dark mode). Use CSS variables approach for theming so dark/light mode toggle works with smooth transitions.

**Checkpoint:** `npm run dev` works, blank page loads, fonts are configured, Tailwind theme has all color tokens.

---

### Step 2: Theme System + Layout + Nav

Build the theme provider (dark/light mode):
- Default to light mode
- Store preference in localStorage
- Apply theme class to `<html>` element
- All color changes use CSS variables so transitions are smooth (300ms)

Build `layout.tsx`:
- Root layout with fonts applied
- Metadata: title "Lucas Moraca — Builder", description "I build products that make brands stand out."
- Theme provider wrapping children
- Smooth scroll behavior on html

Build `Nav.tsx`:
- Floating pill-shaped nav bar, centered at top
- Frosted glass background (backdrop-blur + semi-transparent bg)
- Links: Work · About · Contact
- Active link has pill-shaped highlight
- Hides on scroll down, reappears on scroll up (use scroll direction detection)
- Fully responsive — collapses gracefully on mobile

**Checkpoint:** Nav renders, floats, hides/shows on scroll, dark/light mode toggles and persists.

---

### Step 3: Hero Section

Build `Hero.tsx`:
- Full viewport height
- Dark green gradient background (see SPEC.md for exact colors, different values for light vs dark mode)
- Centered content:
  - Line 1: "Hi. I'm Lucas." — massive type (~80-120px desktop), mint colored
  - Line 2: "A Builder." — same massive type, mint colored
  - Line 3: "Your brand deserves better than a template." — smaller, off-white, below the heading
- Decorative sparkle/star elements (build `Sparkle.tsx` — four-point star SVG shape, 2-3 placed around the heading)

**Animations (Framer Motion):**
- Heading lines: staggered fade-up (line 1 first, line 2 200ms later)
- Tagline: fade-up 400ms after heading
- Sparkles: fade-in last, then slow continuous rotation (CSS animation, infinite)
- Subtle scroll indicator at bottom (thin animated line or chevron)

**Checkpoint:** Hero looks stunning, animations fire on load, sparkles rotate, responsive type scaling works (40-48px on mobile).

---

### Step 4: Project Cards + Grid

Build `ProjectCard.tsx`:
- Large rounded container (20-24px border-radius)
- Takes props: `label`, `title`, `subtitle`, `bgColor`, `textColor`, `screenshot`, `href`, `isPlaceholder`
- Screenshot renders inside the card with a CSS browser/phone mockup frame (rounded corners, fake browser chrome with 3 dots — built in CSS, not an image)
- Entire card is clickable (wraps in `<a>` with `target="_blank"` for external, or scroll for "Your Project")
- Hover: translateY(-4px) + increased shadow (Framer Motion `whileHover`)

Build `ProjectGrid.tsx`:
- Section heading: none needed — cards speak for themselves. Or a small "Selected Work" label above.
- 2-column grid on desktop (use CSS grid, allow asymmetric sizing — card 1 can be taller)
- 1-column on mobile
- Background: warm cream (`--bg-body`)

**Four cards with these specs:**

1. **Redline** — dark card (`#0a0f0a` → `#1a2a1a`), label "FOUNDED & BUILT", title "Redline" in green (`#00ff88`), subtitle "AI Training Advisor", screenshot of Redline app UI, links to `https://redline-website-vercel.vercel.app/`

2. **ChapterMade** — warm earth card (`#d4c5a9`), label "FOUNDED & BUILT", title "ChapterMade" in dark text, subtitle "Composite Platform · 22 Chapters · 2,200+ Members", screenshot of ChapterMade site, links to `https://chaptermadecomposites.vercel.app/`

3. **LiLO Curated** — soft rose/mauve card (`#e8c4c4`), label "CLIENT WORK", title "LiLO Curated" in dark text, subtitle "Wholesale Fitness Attire", screenshot of LiLO site, links to `https://lilocurated.com`

4. **Your Project** — light warm white card (`#faf7f2`) with subtle border, label "WHAT'S NEXT?", title "Your Project", subtitle "Have an idea? Let's build it.", no screenshot, scrolls to `#contact` on click

**Screenshots:** For now, use placeholder colored divs with the project name inside them (same aspect ratio as a browser/phone frame). Lucas will swap in real screenshots later. Structure the component so swapping an image path is trivial.

**Animations:**
- Each card: fade-up + scale(0.97→1) on scroll into viewport (`whileInView`, `once: true`)
- Stagger cards so they don't all animate simultaneously

**Checkpoint:** Grid renders all 4 cards, responsive layout works, hover effects work, dark mode card colors adapt, click targets work.

---

### Step 5: About Section

Build `About.tsx`:
- Two-column layout on desktop (photo left, text right). Stacked on mobile.
- Photo: gray placeholder div (200x280px or similar aspect ratio) with subtle rounded corners. File path points to `/assets/lucas-photo.jpg` — Lucas will add this later.
- Text content:
  ```
  Lucas Moraca
  Boulder, CO

  CS student at CU Boulder. CrossFit coach. Founded two businesses.
  I design, build, and ship products that make brands stand out.
  I take on 2–3 projects at a time.
  ```
- Name in large bold heading type
- "Boulder, CO" in muted secondary color
- Bio in body text
- Below bio: row of links — Email · LinkedIn · GitHub (use text links or minimal icons). Email: `lucasmoraca@gmail.com`. LinkedIn and GitHub: use `#` placeholder hrefs for now.

**Animations:**
- Photo fades in from left on scroll
- Text fades in from right on scroll

**Checkpoint:** About section renders, responsive layout works, placeholder photo is swappable.

---

### Step 6: Contact Form

Build `Contact.tsx`:
- Heading: "Let's work together." in large type
- Subtext: "Tell me about your project. I respond within 24 hours."
- Form fields:
  - Name (text input)
  - Email (email input)
  - Project Details (textarea, ~4 rows)
  - Submit button: "Send it →"
- Input styling: rounded corners (12px), subtle border, generous padding, clean focus states with accent color outline
- Button: accent colored background, white text, rounded, hover state

Build `/app/api/contact/route.ts`:
- POST endpoint that receives { name, email, message }
- Uses Resend to send email to `lucasmoraca@gmail.com`
- Returns success/error JSON
- Note: Resend API key will need to be added to `.env.local` as `RESEND_API_KEY`

Create `.env.example`:
```
RESEND_API_KEY=your_resend_api_key_here
```

Form should show loading state on submit, success message on completion, error handling if it fails. Don't redirect — show inline feedback.

**Animations:**
- Section fades up on scroll into viewport

**Checkpoint:** Form renders, validates required fields, API route is wired up (will work once Resend key is added), success/error states display.

---

### Step 7: Footer + Dark/Light Toggle + Decorative Elements

Build `ThemeToggle.tsx`:
- Circular button with sun icon (light mode) / moon icon (dark mode)
- Toggles the theme class on `<html>`
- Smooth icon transition (rotate + fade)

Build `Footer.tsx`:
- Clean minimal footer on cream/dark background
- Left: `© 2026 Lucas Moraca`
- Right: two small columns:
  ```
  Elsewhere          Contact
  GitHub              Message (scrolls to #contact)
  LinkedIn
  ```
- Links in accent color
- Dark/light mode toggle button positioned here (like Seán Halpin's)
- **Decorative bottom bar:** A row of vertical lines spanning the viewport width at the very bottom. Varying heights (like an audio waveform), using accent color with varying opacity. Purely decorative. Build with a simple div + CSS (repeating elements or SVG).

**Checkpoint:** Footer renders, toggle works, mode persists on refresh, decorative bar looks good in both themes.

---

### Step 8: Polish Pass

Go through the entire site and refine:

1. **Typography audit** — ensure heading sizes, weights, and spacing feel like Seán Halpin's scale. Hero text should be MASSIVE. Body text should be comfortable to read.
2. **Color audit in both modes** — every section, card, and text element should look intentional in both light and dark mode. No contrast issues.
3. **Animation timing** — all animations should feel snappy (300-500ms), not sluggish. Stagger feels natural, not mechanical.
4. **Responsive audit** — test at 375px (mobile), 768px (tablet), 1440px (desktop). Hero text scales down. Grid collapses. Nav stays usable. Cards stack cleanly.
5. **Hover states** — every interactive element (links, cards, button, nav items) has a clear hover state.
6. **Focus states** — form inputs and nav links have visible focus outlines for accessibility.
7. **Scroll behavior** — smooth scrolling works for all anchor links. Nav offset accounts for the floating nav height.
8. **Performance** — images use `next/image` with proper sizing. No layout shift on load. Fonts don't flash.

**Checkpoint:** Site feels polished, professional, and ready to deploy. Someone landing on this site should think "this person clearly knows what they're doing."

---

## Important Notes

- **Do NOT use Inter, Roboto, Arial, or Space Grotesk.** The font choice is critical to not looking like every other AI-generated site.
- **Do NOT add features not in this spec.** No blog, no testimonials, no pricing, no services page, no capabilities grid.
- **Screenshots are placeholders for now.** Build the card component so that swapping a placeholder div for an `<Image>` is a one-line change.
- **The site IS the portfolio.** Every interaction, animation, and design detail is being evaluated by potential clients. Ship quality.
- **Reference seanhalpin.xyz constantly.** When in doubt about spacing, type scale, card sizing, or overall feel — check his site and match that level of craft.
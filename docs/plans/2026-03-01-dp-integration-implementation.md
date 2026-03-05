# Doctor Project Palette Integration — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Merge the Doctor Project design system (NEW_doctor-project-design-system.html) into the existing DoctorProject Design System, adopting DP's color palette as primary, adding all new components, keeping the `drp-` class prefix.

**Architecture:** Incremental update of existing CSS files (tokens, typography, buttons, forms, tags, modals, utilities) + 3 new CSS files (media, composites, animations) + updated index.css imports. Dark mode tokens merged into tokens.css. Showcase HTML pages added/updated.

**Tech Stack:** Pure CSS (custom properties), vanilla HTML for showcases

**Design doc:** `docs/plans/2026-03-01-doctor-project-palette-integration-design.md`

---

### Task 1: Update Design Tokens (`css/tokens.css`)

**Files:**
- Modify: `css/tokens.css`

**Step 1: Update color palette**

Replace lines 13-53 of `css/tokens.css` with updated palette:

```css
  /* Primary — Doctor Project Purple */
  --drp-purple:          #631DED;
  --drp-purple-20:       rgba(99, 29, 237, 0.20);
  --drp-purple-hover:    #4A14B8;
  --drp-purple-active:   #8B4FF5;

  /* Dark */
  --drp-black:           #121212;
  --drp-black-75:        rgba(18, 18, 18, 0.75);

  /* Secondary — Doctor Project Orange */
  --drp-orange:          #FF6C01;
  --drp-orange-dark:     #CC5500;
  --drp-orange-light:    #FF9A4D;

  /* Accent Colors (kept from original) */
  --drp-yellow:          #FAE8A4;
  --drp-yellow-80:       rgba(250, 232, 164, 0.80);
  --drp-pink:            #E99898;
  --drp-pink-80:         rgba(233, 152, 152, 0.80);
  --drp-mint:            #98E9AB;
  --drp-mint-80:         rgba(152, 233, 171, 0.80);

  /* Grey */
  --drp-grey:            #666666;
  --drp-grey-85:         rgba(102, 102, 102, 0.85);
  --drp-grey-light:      #E0E0E0;
  --drp-charcoal:        #282828;

  /* Backgrounds */
  --drp-cream:           #F2F2F2;
  --drp-white:           #FFFFFF;
  --drp-surface:         #F2F2F2;

  /* Outline colors */
  --drp-outline-mint:    #98E9AB;
  --drp-outline-purple:  #631DED;
  --drp-outline-pink:    #E99898;

  /* Semantic — Status */
  --drp-success:         #00AA00;
  --drp-success-dark:    #166534;
  --drp-error:           #FF4444;
  --drp-error-dark:      #991B1B;
  --drp-warning:         #FFAA00;
  --drp-warning-dark:    #92400E;
  --drp-info:            #0066FF;
  --drp-info-dark:       #5B21B6;

  /* Text Colors */
  --drp-text-primary:    #121212;
  --drp-text-secondary:  #444444;
  --drp-text-muted:      #888888;
  --drp-text-inverse:    #FFFFFF;
```

**Step 2: Add new token categories**

After the z-index section, before closing `}`:

```css
  --drp-border-chunk:    3px solid var(--drp-black);
  --drp-border-thick:    4px solid var(--drp-black);
  --drp-shadow-hover:    6px 6px 0 0 var(--drp-purple);
  --drp-shadow-pressed:  0 0 0 0 var(--drp-black);
  --drp-opacity-disabled: 0.4;
  --drp-opacity-hover:    0.8;
  --drp-opacity-overlay:  0.5;
```

**Step 3: Update dark mode overrides**

Replace the dark mode block with expanded version including new DP dark tokens (dark-bg: #121212, surface: #1E1E1E, elevated: #2A2A2A, text tokens, border-chunk/thick, shadow-hover/pressed).

**Step 4: Commit** — `feat: update design tokens to Doctor Project palette`

---

### Task 2: Update Typography (`css/typography.css`)

**Files:** Modify: `css/typography.css`

**Step 1:** Add Visby Heavy (800) @font-face after Visby Bold
**Step 2:** Add `.drp-display-xl` (4.5rem), `.drp-display-lg` (3.5rem), `.drp-display-md` (2.5rem) — weight 800, uppercase
**Step 3:** Add `.drp-body-lg`, `.drp-body-md`, `.drp-body-sm` explicit size classes
**Step 4:** Add `.drp-caption` (monospace, uppercase, 0.1em tracking)
**Step 5:** Check/copy `fonts/VisbyHeavy.otf`
**Step 6: Commit** — `feat: add display headings, body sizes, caption, Visby Heavy font`

---

### Task 3: Update Buttons (`css/buttons.css`)

**Files:** Modify: `css/buttons.css`

**Step 1:** Add `.drp-btn--secondary` (orange fill, white text, hover: orange-dark)
**Step 2:** Add `.drp-btn--ghost-bordered` (transparent bg, purple border, fills purple on hover with translate and shadow)
**Step 3: Commit** — `feat: add secondary (orange) and ghost-bordered button variants`

---

### Task 4: Update Forms (`css/forms.css`)

**Files:** Modify: `css/forms.css`

**Step 1:** Update `.drp-input:focus` background to `#F5F0FF`
**Step 2:** Add background colors to error (`#FFF0F0`) and success (`#F0FFF0`) states
**Step 3:** Update `.drp-select` SVG arrow fill from `%23AE7AFF` to `%23631DED`
**Step 4: Commit** — `feat: update form focus/validation backgrounds and select arrow`

---

### Task 5: Update Tags/Badges (`css/tags.css`)

**Files:** Modify: `css/tags.css`

**Step 1:** Add `.drp-badge--primary` (purple fill), `.drp-badge--secondary` (orange fill), `.drp-badge--outline` (transparent, black border)
**Step 2: Commit** — `feat: add primary/secondary/outline badge variants`

---

### Task 6: Add Tooltip (`css/modals.css`)

**Files:** Modify: `css/modals.css`

**Step 1:** Add `.drp-tooltip` (relative, inline-block) + `.drp-tooltip-text` (absolute, bottom: 100%, centered, hidden, shows on parent hover) with arrow pseudo-element
**Step 2: Commit** — `feat: add tooltip component`

---

### Task 7: Add Alerts, Spinner, Skeleton (`css/utilities.css`)

**Files:** Modify: `css/utilities.css`

**Step 1:** Add `.drp-alert` (flex, bordered) + `__icon`, `__content`, `__title`, `__text` + `--success/warning/error/info` variants with semantic background colors
**Step 2:** Add `.drp-spinner` (40px circle, 3px border, rotating top-color: purple)
**Step 3:** Add `.drp-skeleton` (shimmer gradient animation, bordered)
**Step 4:** Add `.drp-progress-bar` (24px height, bordered) + `__fill` (purple, width transition)
**Step 5: Commit** — `feat: add alerts, spinner, skeleton, progress bar`

---

### Task 8: Create Media Components (`css/media.css`)

**Files:** Create: `css/media.css`

**Step 1:** Create file with `.drp-avatar` (64px default, `--sm` 40px, `--lg` 96px, `--round` border-radius) + `.drp-carousel` (overflow hidden, bordered) + `__track` (flex, transition), `__slide` (min-width 100%, 16:9), `__nav` (absolute bottom center), `__dot` (12px, bordered, active: purple)
**Step 2: Commit** — `feat: add avatar and carousel media components`

---

### Task 9: Create Composites (`css/composites.css`)

**Files:** Create: `css/composites.css`

Components to include (all prefixed `drp-`):
- **Navbar:** `.drp-navbar`, `.drp-nav-brand`, `.drp-nav-links`, `.drp-nav-link` (hover: orange, active: purple)
- **Breadcrumbs:** `.drp-breadcrumbs`, `.drp-breadcrumb-item`, `.drp-breadcrumb-separator`, `.drp-breadcrumb-current`
- **Hero:** `.drp-hero` (2-col grid), `__content`, `__title` (span = purple), `__text`, `__image` + mobile responsive
- **Features:** `.drp-features` (3-col grid), `.drp-feature` + `__icon` (purple bg), `__title`, `__text` + mobile responsive
- **Pricing:** `.drp-pricing-card` + `.featured` (purple bg), `__title`, `__price`, `__period`, `__features`, `__feature` (checkmark before)
- **Testimonial:** `.drp-testimonial`, `__quote` (left border: orange), `__author`, `__avatar`, `__name`, `__role`
- **CTA:** `.drp-cta` (purple bg), `__title`, `__text`
- **Marquee:** `.drp-marquee` (black bg, white border), `__track` (20s linear infinite), `__item` (orange text)

**Step 1: Commit** — `feat: add composite components`

---

### Task 10: Create Animations (`css/animations.css`)

**Files:** Create: `css/animations.css`

**Step 1:** 7 keyframes: `drp-slide-up`, `drp-slide-down`, `drp-scale-in`, `drp-glitch`, `drp-bounce`, `drp-pulse`, `drp-shake`
**Step 2:** 7 utility classes: `.drp-anim-slide-up`, `.drp-anim-slide-down`, `.drp-anim-scale-in`, `.drp-anim-glitch`, `.drp-anim-bounce`, `.drp-anim-pulse`, `.drp-anim-shake`
**Step 3: Commit** — `feat: add animation keyframes and utility classes`

---

### Task 11: Update Index CSS (`css/index.css`)

**Files:** Modify: `css/index.css`

**Step 1:** Add after `responsive.css` import: `@import url('media.css');`, `@import url('composites.css');`, `@import url('animations.css');`
**Step 2: Commit** — `chore: add media, composites, animations imports`

---

### Task 12: Create Showcase HTML Pages

**Files:**
- Create: `docs/media.html`, `docs/composites.html`, `docs/animations.html`
- Modify: `docs/index.html` (add navigation links), `docs/colors.html` (update swatches)

**Step 1:** Create showcase pages following existing HTML pattern (link to `../css/index.css`, include examples of all new components)
**Step 2:** Update color showcase with new palette values
**Step 3:** Update index with links to new pages
**Step 4: Commit** — `docs: add showcase pages for new components`

---

## Verification

1. Open `docs/index.html` — all components render
2. Toggle dark mode — new components adapt
3. `grep -r "AE7AFF" css/` returns 0 results
4. Resize browser through 1200/1024/768/600/390px breakpoints
5. All 16 CSS files load (check network tab)

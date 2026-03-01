# Bruddle Design System v2 — Doctor Project Palette Integration

**Date:** 2026-03-01
**Status:** Approved

## Context

A new design system HTML (`NEW_doctor-project-design-system.html`) introduces the "Doctor Project" brand palette and several new components. This design merges it into the existing Bruddle Design System.

## Decisions

- **Color palette**: Replace existing pastel purple (#AE7AFF) with Doctor Project purple (#631DED). Add orange (#FF6C01) as secondary. Keep yellow/pink/mint as accent colors.
- **New components**: Add all — avatars, carousel, hero, pricing, testimonial, CTA, marquee, animations, tooltip, breadcrumbs, navbar, feature grid.
- **Class prefix**: Keep `bru-` for everything (zero breaking changes in class naming).
- **Dark mode**: Merge new dark mode tokens from DP system into existing `.dark-mode` approach.

## Phase 1: Token Update (`tokens.css`)

### Color Palette Migration

| Token | Old | New |
|-------|-----|-----|
| `--bru-purple` | #AE7AFF | #631DED |
| `--bru-purple-hover` | derived | #4A14B8 |
| `--bru-purple-active` | derived | #8B4FF5 |
| NEW `--bru-orange` | — | #FF6C01 |
| NEW `--bru-orange-dark` | — | #CC5500 |
| NEW `--bru-orange-light` | — | #FF9A4D |
| `--bru-cream` | #FAF4F0 | #F2F2F2 |

### New Token Categories

- Text colors: `--bru-text-primary`, `--bru-text-secondary`, `--bru-text-muted`, `--bru-text-inverse`
- Background colors: `--bru-bg-canvas`, `--bru-bg-surface`, `--bru-bg-inverse`
- Dark mode tokens: `--bru-dark-bg-canvas`, `--bru-dark-bg-surface`, `--bru-dark-bg-elevated`, `--bru-dark-border`, etc.
- Info semantic color: `--bru-info` (#0066FF)
- Shadow additions: `--bru-shadow-hover`, `--bru-shadow-pressed`
- Border additions: `--bru-border-chunk` (3px), `--bru-border-thick` (4px)
- Opacity tokens: `--bru-opacity-disabled`, `--bru-opacity-hover`, `--bru-opacity-overlay`

## Phase 2: Typography Update (`typography.css`)

- Add Visby Heavy (800) font face
- Add `.bru-display-xl` (4.5rem), `.bru-display-lg` (3.5rem), `.bru-display-md` (2.5rem)
- Add `.bru-body-lg`, `.bru-body-md`, `.bru-body-sm`
- Add `.bru-caption` (monospace, uppercase, tracking)

## Phase 3: Update Existing Components

### buttons.css
- Add `.bru-btn--ghost` (transparent bg, primary border, fills on hover)
- Add `.bru-btn--danger` (error color fill)

### forms.css
- Add `.bru-toggle` switch (48x24, sliding knob)
- Add focus background (#F5F0FF), error/success validation backgrounds

### tags.css
- Add `.bru-badge-primary`, `.bru-badge-secondary`, `.bru-badge-outline`

### modals.css
- Add `.bru-tooltip` + `.bru-tooltip-text` (hover-reveal)

### utilities.css
- Add `.bru-alert` + `.bru-alert-success/warning/error/info`
- Add `.bru-spinner` (rotating border)
- Add `.bru-skeleton` (shimmer animation)

## Phase 4: New CSS Files

### `media.css`
- `.bru-avatar` (default 64px, `--sm` 40px, `--lg` 96px)
- `.bru-carousel`, `.bru-carousel-track`, `.bru-carousel-slide`, `.bru-carousel-nav`, `.bru-carousel-dot`

### `composites.css`
- `.bru-hero` (2-column grid, content + image)
- `.bru-features` / `.bru-feature` (3-column grid with icons)
- `.bru-pricing-card` (with `.featured` variant)
- `.bru-testimonial` (quote + author)
- `.bru-cta` (full-width banner)
- `.bru-marquee-container` / `.bru-marquee-track` / `.bru-marquee-item`
- `.bru-breadcrumbs` / `.bru-breadcrumb-item`
- `.bru-navbar` / `.bru-nav-brand` / `.bru-nav-links` / `.bru-nav-link`

### `animations.css`
- Keyframes: slideUp, slideDown, scaleIn, glitch, bounce, pulse, shake
- Utilities: `.bru-anim-slide-up`, `.bru-anim-slide-down`, `.bru-anim-scale-in`, `.bru-anim-glitch`, `.bru-anim-bounce`, `.bru-anim-pulse`, `.bru-anim-shake`

## Phase 5: Update `index.css`
Add imports for: `media.css`, `composites.css`, `animations.css`

## Phase 6: Dark Mode
Merge DP dark mode tokens into `tokens.css` `.dark-mode` block. Add per-component dark mode rules.

## Phase 7: Showcase HTML
- Update `docs/colors.html` with new palette
- Create `docs/media.html`, `docs/composites.html`, `docs/animations.html`
- Update `docs/index.html` gallery

## Files Summary

**Modified (10):** tokens.css, typography.css, buttons.css, forms.css, tags.css, modals.css, utilities.css, index.css, responsive.css, docs/index.html
**Created (6):** media.css, composites.css, animations.css, docs/media.html, docs/composites.html, docs/animations.html

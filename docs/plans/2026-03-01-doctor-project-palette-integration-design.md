# DoctorProject Design System v2 — Doctor Project Palette Integration

**Date:** 2026-03-01
**Status:** Approved

## Context

A new design system HTML (`NEW_doctor-project-design-system.html`) introduces the "Doctor Project" brand palette and several new components. This design merges it into the existing DoctorProject Design System.

## Decisions

- **Color palette**: Replace existing pastel purple (#AE7AFF) with Doctor Project purple (#631DED). Add orange (#FF6C01) as secondary. Keep yellow/pink/mint as accent colors.
- **New components**: Add all — avatars, carousel, hero, pricing, testimonial, CTA, marquee, animations, tooltip, breadcrumbs, navbar, feature grid.
- **Class prefix**: Keep `drp-` for everything (zero breaking changes in class naming).
- **Dark mode**: Merge new dark mode tokens from DP system into existing `.dark-mode` approach.

## Phase 1: Token Update (`tokens.css`)

### Color Palette Migration

| Token | Old | New |
|-------|-----|-----|
| `--drp-purple` | #AE7AFF | #631DED |
| `--drp-purple-hover` | derived | #4A14B8 |
| `--drp-purple-active` | derived | #8B4FF5 |
| NEW `--drp-orange` | — | #FF6C01 |
| NEW `--drp-orange-dark` | — | #CC5500 |
| NEW `--drp-orange-light` | — | #FF9A4D |
| `--drp-cream` | #FAF4F0 | #F2F2F2 |

### New Token Categories

- Text colors: `--drp-text-primary`, `--drp-text-secondary`, `--drp-text-muted`, `--drp-text-inverse`
- Background colors: `--drp-bg-canvas`, `--drp-bg-surface`, `--drp-bg-inverse`
- Dark mode tokens: `--drp-dark-bg-canvas`, `--drp-dark-bg-surface`, `--drp-dark-bg-elevated`, `--drp-dark-border`, etc.
- Info semantic color: `--drp-info` (#0066FF)
- Shadow additions: `--drp-shadow-hover`, `--drp-shadow-pressed`
- Border additions: `--drp-border-chunk` (3px), `--drp-border-thick` (4px)
- Opacity tokens: `--drp-opacity-disabled`, `--drp-opacity-hover`, `--drp-opacity-overlay`

## Phase 2: Typography Update (`typography.css`)

- Add Visby Heavy (800) font face
- Add `.drp-display-xl` (4.5rem), `.drp-display-lg` (3.5rem), `.drp-display-md` (2.5rem)
- Add `.drp-body-lg`, `.drp-body-md`, `.drp-body-sm`
- Add `.drp-caption` (monospace, uppercase, tracking)

## Phase 3: Update Existing Components

### buttons.css
- Add `.drp-btn--ghost` (transparent bg, primary border, fills on hover)
- Add `.drp-btn--danger` (error color fill)

### forms.css
- Add `.drp-toggle` switch (48x24, sliding knob)
- Add focus background (#F5F0FF), error/success validation backgrounds

### tags.css
- Add `.drp-badge-primary`, `.drp-badge-secondary`, `.drp-badge-outline`

### modals.css
- Add `.drp-tooltip` + `.drp-tooltip-text` (hover-reveal)

### utilities.css
- Add `.drp-alert` + `.drp-alert-success/warning/error/info`
- Add `.drp-spinner` (rotating border)
- Add `.drp-skeleton` (shimmer animation)

## Phase 4: New CSS Files

### `media.css`
- `.drp-avatar` (default 64px, `--sm` 40px, `--lg` 96px)
- `.drp-carousel`, `.drp-carousel-track`, `.drp-carousel-slide`, `.drp-carousel-nav`, `.drp-carousel-dot`

### `composites.css`
- `.drp-hero` (2-column grid, content + image)
- `.drp-features` / `.drp-feature` (3-column grid with icons)
- `.drp-pricing-card` (with `.featured` variant)
- `.drp-testimonial` (quote + author)
- `.drp-cta` (full-width banner)
- `.drp-marquee-container` / `.drp-marquee-track` / `.drp-marquee-item`
- `.drp-breadcrumbs` / `.drp-breadcrumb-item`
- `.drp-navbar` / `.drp-nav-brand` / `.drp-nav-links` / `.drp-nav-link`

### `animations.css`
- Keyframes: slideUp, slideDown, scaleIn, glitch, bounce, pulse, shake
- Utilities: `.drp-anim-slide-up`, `.drp-anim-slide-down`, `.drp-anim-scale-in`, `.drp-anim-glitch`, `.drp-anim-bounce`, `.drp-anim-pulse`, `.drp-anim-shake`

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

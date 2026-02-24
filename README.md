# Bruddle Design System

A brutalist, framework-agnostic design system with offset shadows, high contrast, and a 4px grid.

## Quick Start

```html
<link rel="stylesheet" href="css/index.css">
<script src="js/dark-mode.js"></script>
```

## File Reference

| File | Contents |
|------|----------|
| `tokens.css` | CSS custom properties (colors, spacing, shadows, motion, z-index) |
| `typography.css` | @font-face declarations, heading/text/label classes |
| `buttons.css` | Button variants (primary, outline, ghost, danger, dark), sizes, groups |
| `forms.css` | Input, select, checkbox, radio, switch, counter, form layouts |
| `tags.css` | Tabs, tags, badges, progress bars, status dots |
| `cards.css` | Card variants (raised, flat, interactive), color accents |
| `tables.css` | Table styling with header, rows, hover |
| `modals.css` | Overlay backdrop, modal with header/body/footer |
| `pagination.css` | Pagination variants (default, dark, transparent) |
| `layout.css` | App shell (sidebar, topbar, main content, footer, mobile) |
| `utilities.css` | Flex, grid, spacing, text, backgrounds, dividers, empty states |
| `responsive.css` | Breakpoints (1200/1024/768/600/390px), print styles |

## Selective Import

You don't need the entire system. Import only what you use:

```css
@import 'css/tokens.css';
@import 'css/typography.css';
@import 'css/buttons.css';
```

## Dark Mode

The design system includes a standalone dark mode manager with system preference detection:

```html
<script src="js/dark-mode.js"></script>
<button id="darkModeToggle">Toggle Dark Mode</button>
<script>
  darkModeManager.setupToggleButton('darkModeToggle');
</script>
```

## Documentation

Open `docs/index.html` in your browser to see the full component showcase.

## Design Principles

- **Brutalist aesthetics**: sharp corners, thick 2px borders, no gradients
- **Offset shadows**: black, no blur (signature look)
- **High contrast**: black on white, white on black
- **4px grid** spacing system
- **Dark mode** built in via CSS custom properties
- **Framework-agnostic**: works with React, Vue, vanilla, anything

## Color Palette

Primary purple (`#AE7AFF`), plus secondary pastels (yellow, pink, mint).

## Fonts

Visby (primary brand font) + Roboto Flex (fallback).

## License

MIT

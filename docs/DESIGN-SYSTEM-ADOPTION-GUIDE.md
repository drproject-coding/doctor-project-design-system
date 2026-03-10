# Design System Adoption Guide

**Doctor Project Design System — `@doctorproject/react`**

> This document is the single reference for every developer working on any Doctor Project app.
> Read it fully before touching any UI code. No exceptions.

---

## Table of Contents

1. [The Rule](#1-the-rule)
2. [Setup](#2-setup)
3. [What Exists in the Design System](#3-what-exists-in-the-design-system)
4. [How to Build a Screen](#4-how-to-build-a-screen)
5. [Tokens — Never Use Raw Values](#5-tokens--never-use-raw-values)
6. [The Decision Tree — When Something Doesn't Exist](#6-the-decision-tree--when-something-doesnt-exist)
7. [Migrating Existing Apps](#7-migrating-existing-apps)
8. [What to Check Before Every PR](#8-what-to-check-before-every-pr)
9. [Hard Rules — Never Do This](#9-hard-rules--never-do-this)

---

## 1. The Rule

> **If it exists in the design system, you must use it. You may not create an alternative.**

This is not a suggestion. The entire point of a design system is consistency across apps.
Every time a developer creates a custom button, a custom card, or hardcodes a color,
the design system breaks down and we accumulate UI debt.

**Reference always:**

- Components & props → https://storybook-static-two-delta.vercel.app
- Install → `npm install @doctorproject/react`

---

## 2. Setup

### Install the package

```bash
npm install @doctorproject/react
```

### Import the styles (required — do this once at the app root)

```tsx
// In your root file (e.g. main.tsx, _app.tsx, layout.tsx)
import "@doctorproject/react/styles";
```

### Import components

```tsx
import { Button, Card, Input, Badge, Alert } from "@doctorproject/react";
```

### If your app uses a CSS framework (Tailwind, etc.)

The DS ships its own CSS tokens and utility classes via `@doctorproject/react/styles`.
Do not override them. Do not write Tailwind classes on DS components.
Only use Tailwind/your framework for layout glue between DS components.

---

## 3. What Exists in the Design System

### Components (use these — do not recreate them)

| Category       | Components                                                                  |
| -------------- | --------------------------------------------------------------------------- |
| **Actions**    | `Button`, `Switch`, `Checkbox`, `Radio`                                     |
| **Forms**      | `Input`, `Textarea`, `Select`, `Dropzone`                                   |
| **Display**    | `Badge`, `Tag`, `StatusDot`, `Avatar`, `Spinner`, `Loader`, `Skeleton`      |
| **Feedback**   | `Alert`, `Toast`, `Modal`, `Tooltip`                                        |
| **Layout**     | `Card`, `Container`, `Stack`, `ResponsiveGrid`, `Divider`                   |
| **Navigation** | `Sidebar`, `TopBar`, `Navbar`, `Tabs`, `Breadcrumbs`, `Pagination`          |
| **Typography** | `Heading`, `Text`                                                           |
| **Data**       | `Table`, `StatCard`, `Chart`, `ProgressBar`                                 |
| **Marketing**  | `Hero`, `FeatureList`, `PricingCard`, `CtaBanner`, `Testimonial`, `Marquee` |
| **Media**      | `Icon`, `Pictogram`                                                         |
| **Misc**       | `EmptyState`, `Footer`, `CaseCard`, `Counter`                               |

### Screen layouts (use as reference or directly)

Pre-built, complete screen compositions available in Storybook under **Screens**:

| Category                 | Screens                                  |
| ------------------------ | ---------------------------------------- |
| **Shell**                | `AppSidebar`, `AppTopBar`, `AppFooter`   |
| **Dashboard**            | `Dashboard`                              |
| **Auth**                 | Login, Register, Forgot Password         |
| **Products**             | List, Details                            |
| **Transactions**         | List, Details                            |
| **Contacts / Customers** | List, Details                            |
| **Inbox**                | List, Chat, Detail                       |
| **Calendar**             | Event views                              |
| **Reports / Analytics**  | Charts, tables                           |
| **Payments**             | List, Send Money, Pay Utilities          |
| **Profile Settings**     | Account, Security, Notifications, Social |
| **Support**              | Home, Ticket                             |
| **Education**            | Courses                                  |
| **Accounts**             | List                                     |
| **Sales**                | List                                     |

If you are building a screen that matches one of these categories,
**start from the existing screen in Storybook**, not from scratch.

### Design tokens

All visual values (colors, spacing, typography, shadows, borders) are available as CSS variables.
See Section 5 for full reference.

---

## 4. How to Build a Screen

### Step 1 — Check Storybook first

Go to https://storybook-static-two-delta.vercel.app

- Look for a screen that matches what you're building
- If it exists: copy the structure, swap the data
- If it partially exists: use the closest screen as your base, extend with DS components only

### Step 2 — Use the app shell

Every app screen must use the shared layout shell:

```tsx
import { AppSidebar, AppTopBar, AppFooter } from "@doctorproject/react";

export function MyScreen() {
  return (
    <div className="app-layout">
      <AppSidebar activeId="my-section" />
      <div className="main-content">
        <AppTopBar title="My Screen" />
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {/* your content here */}
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
```

**Never** build a custom sidebar, topbar, or footer. These are the AppShell —
they must be identical across every app.

### Step 3 — Build content with DS components only

```tsx
// CORRECT
import { Card, Button, Badge, Input, Table } from '@doctorproject/react';

// WRONG — do not do this
<div className="my-custom-card"> ... </div>
<button className="btn-custom"> ... </button>
```

### Step 4 — Use ResponsiveGrid for layout

```tsx
import { ResponsiveGrid } from '@doctorproject/react';

<ResponsiveGrid cols={3} colsSm={1} gap="16px">
  <StatCard ... />
  <StatCard ... />
  <StatCard ... />
</ResponsiveGrid>
```

### Step 5 — Check Storybook for every component's props

Every component is documented with all its variants in Storybook.
Before using a component, open Storybook and read the Controls panel.
Do not guess prop names.

---

## 5. Tokens — Never Use Raw Values

Never hardcode colors, spacing, font sizes, shadows, or borders.
Always use CSS custom properties from the DS token system.

### Colors

```css
/* WRONG */
color: #631ded;
background: #f2f2f2;

/* CORRECT */
color: var(--drp-purple);
background: var(--drp-surface);
```

| Token                  | Value     | Use for                 |
| ---------------------- | --------- | ----------------------- |
| `--drp-purple`         | `#631DED` | Primary brand, CTAs     |
| `--drp-orange`         | `#FF6C01` | Secondary brand         |
| `--drp-black`          | `#121212` | Text, borders           |
| `--drp-surface`        | `#F2F2F2` | Page backgrounds        |
| `--drp-white`          | `#FFFFFF` | Card backgrounds        |
| `--drp-text-primary`   | `#121212` | Body text               |
| `--drp-text-secondary` | `#444444` | Secondary text          |
| `--drp-text-muted`     | `#888888` | Captions, metadata      |
| `--drp-success`        | `#00AA00` | Success states          |
| `--drp-error`          | `#FF4444` | Error states            |
| `--drp-warning`        | `#FFAA00` | Warning states          |
| `--drp-mint`           | `#98E9AB` | Activated/active status |
| `--drp-pink`           | `#E99898` | Refunded/danger accent  |
| `--drp-yellow`         | `#FAE8A4` | Highlighted/pending     |

### Spacing (4px grid)

```css
/* WRONG */
padding: 14px;
margin: 22px;

/* CORRECT */
padding: var(--drp-space-4); /* 16px */
margin: var(--drp-space-6); /* 24px */
```

| Token            | Value |
| ---------------- | ----- |
| `--drp-space-1`  | 4px   |
| `--drp-space-2`  | 8px   |
| `--drp-space-3`  | 12px  |
| `--drp-space-4`  | 16px  |
| `--drp-space-5`  | 20px  |
| `--drp-space-6`  | 24px  |
| `--drp-space-8`  | 32px  |
| `--drp-space-10` | 40px  |
| `--drp-space-12` | 48px  |
| `--drp-space-16` | 64px  |

### Shadows (brutalist offset style)

```css
/* WRONG */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

/* CORRECT */
box-shadow: var(--drp-shadow-md); /* 4px 4px 0 0 black */
```

| Token                | Value            |
| -------------------- | ---------------- |
| `--drp-shadow-xs`    | 2px 2px 0 black  |
| `--drp-shadow-sm`    | 3px 3px 0 black  |
| `--drp-shadow-md`    | 4px 4px 0 black  |
| `--drp-shadow-lg`    | 6px 6px 0 black  |
| `--drp-shadow-xl`    | 8px 8px 0 black  |
| `--drp-shadow-hover` | 6px 6px 0 purple |

### Borders

```css
/* WRONG */
border: 1px solid #ccc;

/* CORRECT */
border: var(--drp-border); /* 2px solid black */
border: var(--drp-border-thin); /* 1px solid black */
```

---

## 6. The Decision Tree — When Something Doesn't Exist

When you need UI that isn't in the DS, follow this process in order.
**Do not skip steps.**

```
Does the component exist in @doctorproject/react?
│
├── YES → Use it. Read Storybook for props. Done.
│
└── NO → Can an existing component be composed to achieve it?
         (e.g. Card + Stack + Button + Badge)
         │
         ├── YES → Compose existing components. Do not create new ones. Done.
         │
         └── NO → Is this a one-off, app-specific element?
                  │
                  ├── YES → Build it locally in the app using DS tokens only.
                  │         Use --drp-* variables. No hardcoded values.
                  │         Label it clearly (e.g. /components/local/MyWidget.tsx)
                  │         Open a GitHub issue: "Candidate for DS: MyWidget"
                  │
                  └── NO → Is this needed across 2+ apps?
                           │
                           └── YES → Do NOT build it locally.
                                     Open a GitHub issue: "New DS component: X"
                                     Describe: purpose, props, variants, usage.
                                     Wait for it to be added to @doctorproject/react
                                     before using it.
```

### The GitHub issue format for new components

```
Title: New DS component: [ComponentName]

## Why is this needed?
[What problem does it solve]

## Which apps need it?
[List apps]

## Proposed props
- variant: 'default' | 'compact'
- label: string
- onClick: () => void

## Visual reference
[Screenshot or Figma link]
```

---

## 7. Migrating Existing Apps

For apps with inconsistent UI built before the DS, follow this migration process.

### Phase 1 — Audit (before writing any code)

Go through every screen of the app and categorize each UI element:

| Element             | Exists in DS?           | Action                   |
| ------------------- | ----------------------- | ------------------------ |
| Buttons             | Yes → `Button`          | Replace                  |
| Cards               | Yes → `Card`            | Replace                  |
| Custom sidebar      | Yes → `AppSidebar`      | Replace                  |
| Custom inputs       | Yes → `Input`, `Select` | Replace                  |
| Custom modals       | Yes → `Modal`           | Replace                  |
| Status pills        | Yes → `Badge`           | Replace                  |
| Hardcoded colors    | Yes → tokens            | Replace                  |
| Custom shadows      | Yes → tokens            | Replace                  |
| App-specific widget | No                      | Keep locally, use tokens |

### Phase 2 — Prioritize by impact

Migrate in this order:

1. **App shell first** — Sidebar, TopBar, Footer. This gives instant visual consistency.
2. **Repeated elements** — Buttons, Inputs, Badges. They appear everywhere.
3. **Cards and layout** — Card, Stack, ResponsiveGrid.
4. **Screen-level** — Replace full custom screens with DS screen patterns.
5. **Remaining one-offs** — Refactor to use tokens even if component stays local.

### Phase 3 — Replace, don't layer

When replacing a component, **delete the old one entirely**.
Do not keep the old custom component and add DS component on top.
Do not add a className to a DS component to override its styles.

```tsx
// WRONG — layering old styles on top of DS
<Button className="my-old-btn-style">Click</Button>

// CORRECT — use DS component as-is, adjust via props
<Button variant="outline" size="sm">Click</Button>
```

### Phase 4 — Verify before merging

See Section 8.

---

## 8. What to Check Before Every PR

Run through this checklist before requesting a review on any UI PR.

### Component check

- [ ] Every interactive element uses a DS component (`Button`, `Input`, `Select`, `Checkbox`, `Switch`, `Radio`)
- [ ] Every status indicator uses `Badge`, `Tag`, or `StatusDot`
- [ ] Every data display uses `Card`, `Table`, or `StatCard`
- [ ] No custom `<button>`, `<input>`, `<select>` raw HTML elements in JSX
- [ ] No custom modal — using `Modal` from DS
- [ ] No custom loader/spinner — using `Spinner` or `Skeleton` from DS

### Layout check

- [ ] Screen uses `app-layout` + `AppSidebar` + `AppTopBar` + `AppFooter` shell
- [ ] `AppFooter` is inside `.main-content`, not a sibling of it
- [ ] Grid/spacing uses `ResponsiveGrid`, `Stack`, or `Container` — not custom flex hacks

### Token check

- [ ] No hardcoded hex colors anywhere in JSX `style={}` or CSS files
- [ ] No hardcoded pixel values for spacing outside of the token scale (4px grid)
- [ ] No `box-shadow` with soft blur (e.g. `0 4px 12px rgba(...)`) — use `--drp-shadow-*`
- [ ] No `border-radius` values — the DS uses flat/sharp corners by design

### Typography check

- [ ] Headings use `Heading` component or `--drp-text-h*` tokens
- [ ] Body text uses `Text` component or `--drp-text-*` size tokens
- [ ] No custom font-family declarations — font is set globally by DS

### New component check

- [ ] If a new local component was created, it is inside `/components/local/`
- [ ] It uses only `--drp-*` CSS variables, no hardcoded values
- [ ] A GitHub issue has been opened if it's a candidate for the DS

---

## 9. Hard Rules — Never Do This

These are non-negotiable. A PR with any of these will be rejected.

| Rule                                                      | Why                                                                             |
| --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Never create a custom button                              | `Button` has all variants: primary, outline, ghost, destructive, sizes sm/md/lg |
| Never create a custom sidebar or topbar                   | `AppSidebar` + `AppTopBar` must be identical across all apps                    |
| Never use raw `<button>`, `<input>`, `<select>`           | Unstyled HTML breaks consistency and accessibility                              |
| Never hardcode `#631DED` or any DS color                  | Use `var(--drp-purple)` — if the color changes, it updates everywhere           |
| Never add `className` overrides to DS components          | Style DS components via their props only                                        |
| Never copy-paste a component from one app to another      | Install `@doctorproject/react` — same source, always in sync                    |
| Never build a shared component locally if 2+ apps need it | Add it to the DS so everyone benefits                                           |
| Never use soft drop shadows                               | DS uses brutalist offset shadows (`--drp-shadow-*`)                             |
| Never add `border-radius`                                 | DS is intentionally sharp/flat — no rounded corners                             |
| Never install a UI library alongside the DS               | No Shadcn, MUI, Radix, Ant Design, etc. in DS-based apps                        |

---

## Quick Reference Card

```
STORYBOOK:  https://storybook-static-two-delta.vercel.app
PACKAGE:    npm install @doctorproject/react
IMPORT:     import { Button, Card, ... } from '@doctorproject/react'
STYLES:     import '@doctorproject/react/styles'

NEED SOMETHING? → Check Storybook → Compose → Build local → Open DS issue
MIGRATING?      → Shell first → Repeated elements → Cards → Screens → One-offs
BEFORE PR?      → Run the checklist in Section 8
```

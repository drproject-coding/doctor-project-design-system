# Design System: Accessibility & Responsiveness Fix Plan

**Session:** plan-2026-03-06-a11y-responsive
**Date:** 2026-03-06
**Approach:** Priority-Batched (A)

---

## 1. Problem Statement

The Bruddle design system (`packages/react/`) has been audited against Web Interface Guidelines and responsiveness standards. The audit revealed:

- **130 accessibility violations** across 38 files — including unlabeled form controls, inaccessible keyboard navigation, missing ARIA roles, broken focus management, and icon buttons without labels
- **91 responsiveness issues** across 12 components and 8 screens — including a broken Storybook layout (now fixed), hardcoded pixel dimensions throughout screen files, missing table overflow wrappers, and no mobile sidebar behaviour
- **6 CSS-level gaps** — sub-minimum touch targets (<44px), no `prefers-reduced-motion` guards on animations, fixed-px typography with no fluid scaling, and inconsistent grid collapse breakpoints
- **0 responsive utility components** — no `Stack`, `ResponsiveGrid`, or `Container` exported from the system; screen authors hand-roll every layout, perpetuating the same problems

**Already fixed:** `AppShell`/`Sidebar`/`Topbar` CSS class name mismatch that caused all Pages stories to render as unstyled block elements.

---

## 2. Scope & Boundaries

### In Scope
- All component TSX files in `packages/react/src/components/`
- All screen TSX files in `packages/react/src/screens/`
- CSS files in `css/` (layout.css, buttons.css, forms.css, tables.css, modals.css, pagination.css, responsive.css, animations.css, tokens.css)
- New components: `Stack`, `ResponsiveGrid`, `Container`
- Export barrel (`packages/react/src/components/index.ts`)

### Out of Scope
- New features or design changes unrelated to a11y/responsiveness
- Storybook story rewrites (fixed only where causing broken layout)
- Backend/API changes
- New screen designs
- Test files
- `packages/react/src/screens/Showcase/`

---

## 3. Success Criteria

1. **Storybook layout** — All Pages stories render correctly ✅ *(done)*
2. **Form label association** — Every Input/Textarea/Select has a linked label via `htmlFor`/`id`
3. **Icon button labels** — Every icon-only button has `aria-label`
4. **Keyboard completeness** — Dropzone reachable via Tab+Enter/Space; Modal traps focus + Escape; Tabs ArrowLeft/ArrowRight
5. **ARIA roles** — Modal has `role="dialog"`; Alert has `role="alert"`; ProgressBar has `role="progressbar"`; Table `<th>` has `scope="col"`
6. **Touch targets** — All interactive elements ≥44×44px
7. **Mobile sidebar** — Sidebar has `onToggle`/`mobileOpen`; DashboardLayout wires hamburger
8. **Table overflow** — Table wraps in `overflow-x: auto` by default
9. **Responsive primitives** — Stack, ResponsiveGrid, Container exported
10. **`prefers-reduced-motion`** — All CSS animations guarded
11. **Form attributes** — Input/Textarea/Select forward `name`, `autocomplete`, `spellCheck`
12. **Auth screen forms** — All credential inputs have `htmlFor`/`id`, `name`, `autocomplete`, `type`

---

## 4. Tasks

<!-- EXECUTION_TASKS_START -->

### Batch 1 — Critical Blockers

| #  | Task | Files | Deps | Batch |
|----|------|-------|------|-------|
| 1  | Input/Textarea: link label via htmlFor/id; inline error text prop; forward name, autocomplete, spellCheck | components/Input/Input.tsx, components/Textarea/Textarea.tsx | — | 1 |
| 2  | Select: link label via htmlFor/id; inline error text prop; forward name, autocomplete | components/Select/Select.tsx | — | 1 |
| 3  | Button: require aria-label (TypeScript) when icon={true}; add touch-action: manipulation | components/Button/Button.tsx, css/buttons.css | — | 1 |
| 4  | Dropzone: add role="button", tabIndex={0}, onKeyDown (Enter/Space), aria-label | components/Dropzone/Dropzone.tsx | — | 1 |
| 5  | Modal: add role="dialog", aria-modal, aria-labelledby; focus trap; Escape key; aria-label on close | components/Modal/Modal.tsx | — | 1 |
| 6  | Alert: add role="alert"; aria-hidden on icon; aria-label on close button | components/Alert/Alert.tsx | — | 1 |
| 7  | Table: wrap in overflow-x: auto by default; scope="col" on all th; aria-label prop | components/Table/Table.tsx | — | 1 |

### Batch 2 — Systematic Component & CSS Fixes

| #  | Task | Files | Deps | Batch |
|----|------|-------|------|-------|
| 8  | Breadcrumbs: aria-label on nav; aria-current="page" on last crumb; aria-hidden on separator | components/Breadcrumbs/Breadcrumbs.tsx | — | 2 |
| 9  | Tabs: role="tablist", role="tab", aria-selected; ArrowLeft/ArrowRight keyboard nav | components/Tabs/Tabs.tsx | — | 2 |
| 10 | Pagination: aria-label on prev/next; aria-current="page" on active page | components/Pagination/Pagination.tsx | — | 2 |
| 11 | TopBar: aria-label + aria-hidden on hamburger SVG | components/TopBar/TopBar.tsx | — | 2 |
| 12 | Sidebar: aria-label on nav; aria-label on collapsed icons; add onToggle/mobileOpen props | components/Sidebar/Sidebar.tsx | — | 2 |
| 13 | Tooltip: role="tooltip", id, aria-describedby on trigger; show on focus/blur | components/Tooltip/Tooltip.tsx | — | 2 |
| 14 | Switch: enforce aria-label when label prop omitted | components/Switch/Switch.tsx | — | 2 |
| 15 | ProgressBar: role="progressbar", aria-valuenow/min/max; tabular-nums on value | components/ProgressBar/ProgressBar.tsx | — | 2 |
| 16 | StatusDot: require aria-label prop; aria-hidden on color dot | components/StatusDot/StatusDot.tsx | — | 2 |
| 17 | Skeleton: aria-hidden="true"; prefers-reduced-motion guard; fix circular borderRadius bug | components/Skeleton/Skeleton.tsx | — | 2 |
| 18 | Avatar: width/height on img; require meaningful alt; aria-label on initials fallback | components/Avatar/Avatar.tsx | — | 2 |
| 19 | Toast: conditional role ("alert" for error/warning, "status" for info/success); aria-hidden on icon | components/Toast/Toast.tsx | — | 2 |
| 20 | Tag: aria-label="Remove tag" on close button; aria-hidden on icon | components/Tag/Tag.tsx | — | 2 |
| 21 | StatCard: font-variant-numeric: tabular-nums; wrap in dl/dt/dd | components/StatCard/StatCard.tsx | — | 2 |
| 22 | EmptyState: aria-hidden on icon symbol; replace hardcoded color: #666 with CSS token | components/EmptyState/EmptyState.tsx | — | 2 |
| 23 | CSS: increase touch targets to >=44x44px (padding-based) for all icon/close/pagination/toggle buttons | css/layout.css, css/modals.css, css/pagination.css, css/buttons.css | — | 2 |
| 24 | CSS: add prefers-reduced-motion: reduce guards to all keyframe animations | css/animations.css, css/layout.css, css/responsive.css | — | 2 |
| 25 | CSS: document responsive-table-wrapper in tables.css; used by Table.tsx | css/tables.css | 7 | 2 |
| 26 | DashboardLayout: wire TopBar onMenuClick to sidebar mobileOpen state; mobile sidebar overlay | components/Layout/DashboardLayout.tsx | 12 | 2 |

### Batch 3 — Screens + New Responsive Primitives

| #  | Task | Files | Deps | Batch |
|----|------|-------|------|-------|
| 27 | New Stack component: vertical/horizontal stack with gap and responsive direction | components/Stack/Stack.tsx, components/Stack/index.ts | — | 3 |
| 28 | New ResponsiveGrid component: CSS Grid with configurable cols per breakpoint | components/ResponsiveGrid/ResponsiveGrid.tsx, components/ResponsiveGrid/index.ts | — | 3 |
| 29 | New Container component: max-width + responsive horizontal padding | components/Container/Container.tsx, components/Container/index.ts | — | 3 |
| 30 | Export new components from barrel | components/index.ts | 27,28,29 | 3 |
| 31 | Auth screens: htmlFor/id, name, autocomplete, spellCheck={false} on all credential inputs; fix heading class mismatch; aria-label on show/hide; remove demo defaults | screens/Auth/SignIn.tsx, screens/Auth/SignUp.tsx, screens/Auth/PasswordReset.tsx, screens/Auth/SignInWithQR.tsx | 1,2 | 3 |
| 32 | ProfileSettings: extract shared layout into ProfileShell; fix a without href; fix footer span links; fix ... button label; fix Toggle onChange no-op | screens/ProfileSettings/ProfileAccount.tsx, screens/ProfileSettings/ProfileSecurity.tsx, screens/ProfileSettings/ProfileNotifications.tsx, screens/ProfileSettings/ProfileSocial.tsx | 12,26 | 3 |
| 33 | Dashboard: replace hardcoded sidebar/flex with DashboardLayout; replace 1fr 1fr grids with ResponsiveGrid; fix empty search state; fix span menu button | screens/Dashboard/Dashboard.tsx | 26,28 | 3 |

<!-- EXECUTION_TASKS_END -->

---

## 5. Dependencies

```
Batch 1 → Batch 2 → Batch 3

Task 25 depends on Task 7
Task 26 depends on Task 12
Task 30 depends on Tasks 27, 28, 29
Task 31 depends on Tasks 1, 2
Task 32 depends on Tasks 12, 26
Task 33 depends on Tasks 26, 28
```

---

## 6. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Input/Select label changes break consumer DOM | Medium | Medium | Auto-generate id via useId; make prop optional |
| Modal focus trap conflicts with portal consumers | Medium | High | Expose disableFocusTrap escape hatch |
| Tabs ArrowKey nav conflicts with controlled consumers | Low | Medium | Keep keyboard nav internal; don't change onChange API |
| New components duplicate Tailwind in screens | Low | Low | Document clearly; don't force migration |
| CSS touch target increases break visual designs | Medium | Low | Use padding expansion, not width/height changes |
| DashboardLayout sidebar wiring adds React state | Low | Low | Use useEffect + window.matchMedia |
| Auth form changes touch demo-value defaults | Low | Low | Replace with empty string |

---

## 7. Verification Checklist

### Batch 1
- [ ] Input/Textarea/Select — clicking label focuses the control
- [ ] Button icon={true} — TypeScript error if aria-label missing
- [ ] Dropzone — Tab to focus; Enter/Space opens file picker
- [ ] Modal — Tab cycles inside only; Escape closes; focus returns to trigger
- [ ] Alert — role="alert" in DOM; announced by screen reader on mount
- [ ] Table — horizontal scroll on <600px viewport; scope="col" on all th

### Batch 2
- [ ] Breadcrumbs — last crumb has aria-current="page"; separator silent in AT
- [ ] Tabs — ArrowLeft/ArrowRight moves focus; aria-selected="true" on active
- [ ] Pagination — prev/next have descriptive aria-label; active page has aria-current
- [ ] Modal close — aria-label present; touch target >=44x44px
- [ ] Sidebar — collapses on mobile; hamburger opens/closes overlay
- [ ] All CSS animations — prefers-reduced-motion: reduce disables them
- [ ] Touch targets — all icon/close buttons >=44x44px in DevTools

### Batch 3
- [ ] Stack/ResponsiveGrid/Container — exported; Storybook stories visible
- [ ] Auth forms — all inputs have htmlFor+id, name, autocomplete; no demo defaults
- [ ] Dashboard — no horizontal scroll on 375px; sidebar hides on mobile
- [ ] ProfileSettings — shared layout extracted; Toggle responds to Space key

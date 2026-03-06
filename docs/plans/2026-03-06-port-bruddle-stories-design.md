# Design: Port Bruddle Stories to DoctorProject

**Date:** 2026-03-06
**Status:** Approved

---

## Problem

`bruddle-react` has ~170 Storybook stories across 44 files. `doctor-project-design-system` has 186 stories but is missing 3 full components (Heading, Text, Icon) and ~30 story variants across 5 components, plus 7 layout/page stories.

## Approach

Copy & adapt: copy files from bruddle, fix relative import paths. No CSS class changes needed (both use `drp-*` naming).

---

## Scope

### Section 1 — New Components (3 folders to create)

| Component | Files                                            | Notes                             |
| --------- | ------------------------------------------------ | --------------------------------- |
| `Heading` | `Heading.tsx`, `Heading.stories.tsx`, `index.ts` | Copy from bruddle, update imports |
| `Text`    | `Text.tsx`, `Text.stories.tsx`, `index.ts`       | Copy from bruddle, update imports |
| `Icon`    | `Icon.tsx`, `Icon.stories.tsx`, `index.ts`       | Copy from bruddle, update imports |

All three must be added to `packages/react/src/components/index.ts` exports.

### Section 2 — Augment 5 Existing Story Files

| File                            | Stories to add                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `Button/Button.stories.tsx`     | `IconLeft`, `IconRight`, `IconOnly`, `FigmaVariants`                                                                           |
| `Tag/Tag.stories.tsx`           | `Orange`, `Teal`, `Light`, `Black`, `WithLegend`, `WithIcon`, `AllColors`, `AllColorsFilled`, `IconVariants`, `LegendVariants` |
| `Select/Select.stories.tsx`     | `Error`, `Success`, `ValidationStates`                                                                                         |
| `Radio/Radio.stories.tsx`       | `Error`, `GroupWithError`                                                                                                      |
| `Checkbox/Checkbox.stories.tsx` | `GroupWithError`                                                                                                               |

### Section 3 — Port 7 Layout Stories

Copy from `bruddle-react/src/components/Layout/` to `doctor-project/.../components/Layout/`:

- `Accounts.stories.tsx`
- `Payments.stories.tsx`
- `Reports.stories.tsx`
- `Transactions.stories.tsx`
- `ProfileSettings.stories.tsx`
- `Education.stories.tsx`
- `Support.stories.tsx`

These co-exist alongside the Screens folder — different level of detail (quick compositions vs full screen components).

---

## Out of Scope

- Adding new component features/props
- Changing any CSS or design tokens
- Modifying existing stories (only adding to them)
- The bruddle `Dashboard.stories.tsx` — already exists in doctor-project

---

## Success Criteria

- [ ] `Heading`, `Text`, `Icon` components render in Storybook
- [ ] All 7 layout stories load without errors
- [ ] No TypeScript errors
- [ ] Story count in doctor-project reaches ~170+ component stories

# UI System Global Report

**Doctor Project Design System** — Comparison vs Bruddle-React · Updated 2026-03-05

---

## Overview

|                   | bruddle-react     | doctor-project-design-system    |
| ----------------- | ----------------- | ------------------------------- |
| CSS prefix        | `bru-`            | `drp-`                          |
| React components  | 40                | 38                              |
| Dedicated screens | 0 (stories only)  | 80+ story variants              |
| CSS files         | 17                | 17 (identical structure)        |
| Design tokens     | `bru-*` variables | `drp-*` variables (same values) |
| Dark mode         | ✅                | ✅                              |
| Brutalist style   | ✅                | ✅                              |

The two systems share the **exact same CSS architecture**, color palette, and design language. `drp-` is the evolution of `bru-` with a renamed prefix, a dedicated React package structure (`@doctorproject/react`), and a full screens layer with 80+ story variants.

---

## Components

### ✅ Present in both systems (34)

Alert · Avatar · Badge · Breadcrumbs · Button · Card + CardHeader · CaseCard · ChartCard · Checkbox · Counter · Divider · EmptyState · Footer · Hero · Input · Layout (AppShell + Topbar) · Loader · Marquee · Modal · Navbar · Pagination · PricingCard · ProgressBar · Radio · Select · Skeleton · StatCard · StatusDot · Switch · Table · Tabs · Tag · Textarea · Tooltip

### ❌ Missing from doctor-project (in bruddle-react only)

| Component   | Notes                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------- |
| **Heading** | `<h1>`–`<h6>` semantic wrapper. Low priority — `drp-h1`…`drp-h6` utilities cover use cases. |
| **Text**    | `<p>` wrapper with variants. Low priority — `drp-text--*` utilities cover use cases.        |
| **Icon**    | SVG wrapper. Low priority — SVGs used inline everywhere.                                    |

### ✅ New in doctor-project only

| Component           | Notes                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Sidebar**         | Standalone with `SidebarNavSection[]`, badges, team members, collapsed state. In `bru-` it only existed inside `Layout`. |
| **TopBar**          | Standalone with `title`, `actions`, `menuButton`. In `bru-` it only existed inside `Layout`.                             |
| **DashboardLayout** | Convenience wrapper combining Sidebar + TopBar.                                                                          |

---

## Screens — Complete Status

### Registration / Auth

| Screen          | Stories                     | Exported                                  |
| --------------- | --------------------------- | ----------------------------------------- |
| Sign In         | `Default`                   | ✅                                        |
| Sign Up         | `Default`                   | ✅                                        |
| Password Reset  | `RequestReset`, `ResetForm` | ✅                                        |
| Sign In with QR | `Default`                   | ⚠️ Auth/index.ts ✅ · screens/index.ts ❌ |

**Fix needed:** Add `SignInWithQR` to `packages/react/src/screens/index.ts` and `components/index.ts`.

---

### Accounts

| Figma reference        | Story     | Status |
| ---------------------- | --------- | ------ |
| List v.1 - Light Theme | `V1Light` | ✅     |
| List v.1 - Dark Theme  | `V1Dark`  | ✅     |
| List v.2 - Light Theme | `V2Light` | ✅     |
| List v.2 - Dark Theme  | `V2Dark`  | ✅     |

---

### Transactions

| Figma reference        | Story          | Status |
| ---------------------- | -------------- | ------ |
| List v.1 - Light Theme | `ListV1Light`  | ✅     |
| List v.1 - Dark Theme  | `ListV1Dark`   | ✅     |
| List v.2 - Light Theme | `ListV2Light`  | ✅     |
| List v.2 - Dark Theme  | `ListV2Dark`   | ✅     |
| Invoice - Light Theme  | `InvoiceLight` | ✅     |
| Invoice - Dark Theme   | `InvoiceDark`  | ✅     |
| Empty - Light Theme    | `EmptyLight`   | ✅     |
| Empty - Dark Theme     | `EmptyDark`    | ✅     |

---

### Contacts

| Figma reference           | Story        | Status |
| ------------------------- | ------------ | ------ |
| List V.1 - Light Theme    | `ListV1`     | ✅     |
| List V.2 - Light Theme    | `ListV2`     | ✅     |
| New Contact - Light Theme | `NewContact` | ✅     |
| Empty - Light Theme       | `Empty`      | ✅     |

---

### Customers

| Figma reference        | Story         | Status |
| ---------------------- | ------------- | ------ |
| List v.1 - Light Theme | `ListV1`      | ✅     |
| List v.2 - Light Theme | `ListV2`      | ✅     |
| List v.3 - Light Theme | `ListV3`      | ✅     |
| Details - Light Theme  | `Details`     | ✅     |
| List v.1 - Dark Theme  | `ListV1Dark`  | ✅     |
| List v.2 - Dark Theme  | `ListV2Dark`  | ✅     |
| List v.3 - Dark Theme  | `ListV3Dark`  | ✅     |
| Details - Dark Theme   | `DetailsDark` | ✅     |

---

### Products

| Figma reference        | Story     | Status |
| ---------------------- | --------- | ------ |
| List v.1 - Light Theme | `ListV1`  | ✅     |
| List v.2 - Light Theme | `ListV2`  | ✅     |
| List v.3 - Light Theme | `ListV3`  | ✅     |
| Details - Light Theme  | `Details` | ✅     |

---

### Sales

| Figma reference        | Story    | Status |
| ---------------------- | -------- | ------ |
| List v.1 - Light Theme | `ListV1` | ✅     |
| List v.2 - Light Theme | `ListV2` | ✅     |

---

### Inbox

| Figma reference            | Story         | Status |
| -------------------------- | ------------- | ------ |
| Chat - Light Theme         | `Chat`        | ✅     |
| Mail List - Light Theme    | `MailList`    | ✅     |
| Mail Compose - Light Theme | `MailCompose` | ✅     |
| Empty - Light Theme        | `Empty`       | ✅     |

---

### Payments

| Figma reference          | Story               | Status |
| ------------------------ | ------------------- | ------ |
| List - Light Theme       | `ListLight`         | ✅     |
| List - Dark Theme        | `ListDark`          | ✅     |
| Details - Light Theme    | `DetailsLight`      | ✅     |
| Details - Dark Theme     | `DetailsDark`       | ✅     |
| Send Money - Light Theme | `SendMoneyLight`    | ✅     |
| Send Money - Dark Theme  | `SendMoneyDark`     | ✅     |
| Payments - Light Theme   | `PayUtilitiesLight` | ✅     |
| Payments - Dark Theme    | `PayUtilitiesDark`  | ✅     |

---

### Education

| Figma reference                | Story                   | Status |
| ------------------------------ | ----------------------- | ------ |
| Courses - Light Theme          | `LightTheme`            | ✅     |
| Courses - Dark Theme           | `DarkTheme`             | ✅     |
| Courses Category - Light Theme | `CoursesCategory_Light` | ✅     |
| Courses Category - Dark Theme  | `CoursesCategory_Dark`  | ✅     |

---

### Calendar

| Figma reference     | Story            | Status |
| ------------------- | ---------------- | ------ |
| Event - Light Theme | `MonthWithEvent` | ✅     |
| Day - Light Theme   | `DayView`        | ✅     |
| Week - Light Theme  | `WeekView`       | ✅     |

---

### Support

| Figma reference              | Story                 | Status |
| ---------------------------- | --------------------- | ------ |
| Home - Light Theme           | `Home_Light`          | ✅     |
| Categories - Light Theme     | `Categories_Light`    | ✅     |
| Article - Light Theme        | `Article_Light`       | ✅     |
| Search Results - Light Theme | `SearchResults_Light` | ✅     |

---

### Profile Settings (v1)

| Figma reference             | Story           | Status |
| --------------------------- | --------------- | ------ |
| Account - Light Theme       | `Account`       | ✅     |
| Notifications - Light Theme | `Notifications` | ✅     |
| Security - Light Theme      | `Security`      | ✅     |
| Social - Light Theme        | `Social`        | ✅     |

---

### Profile Settings 2 (newer layout)

| Figma reference     | Story | Status             |
| ------------------- | ----- | ------------------ |
| Sidebar layout      | —     | ❌ Not implemented |
| Web layout          | —     | ❌ Not implemented |
| Actions views (1–3) | —     | ❌ Not implemented |
| Content views (1–3) | —     | ❌ Not implemented |

Reference files in `to_implement/Profile Settings 2/`. This is a full layout redesign (not just tabs) — requires planning before implementation.

---

### Reports / Charts

| Figma reference               | Story / Component            | Status |
| ----------------------------- | ---------------------------- | ------ |
| Bars - Light Theme            | `ChartBarVariant`            | ✅     |
| Bars Horizontal - Light Theme | `ChartHorizontalBarsVariant` | ✅     |
| Polar Chart - Light Theme     | `ChartPolarVariant`          | ✅     |
| Chart Wave - Light Theme      | `ChartWaveVariant`           | ✅     |
| Chart Geometric - Light Theme | `ChartGeometricVariant`      | ✅     |
| Double Bars - Light Theme     | `ChartDoubleBarsVariant`     | ✅     |
| Misc - Light Theme            | `ChartMiscVariant`           | ✅     |

---

## Actual Gap Summary

The system is **~97% complete** against the Figma references.

### What remains

| Item                                           | Type             | Effort               |
| ---------------------------------------------- | ---------------- | -------------------- |
| `SignInWithQR` missing from `screens/index.ts` | Bug / export fix | Trivial (1 line)     |
| **Profile Settings 2** — new layout system     | New feature      | High — full redesign |
| `Heading` component                            | Component parity | Trivial              |
| `Text` component                               | Component parity | Trivial              |
| `Icon` component                               | Component parity | Low                  |

### What's fully done ✅

All other domains are complete against their Figma references:
Accounts · Transactions · Contacts · Customers · Products · Sales · Inbox · Payments · Education · Calendar · Support · Profile Settings (v1) · Reports (all 7 charts)

---

## CSS / Token Parity

Both systems identical in values — only the prefix differs.

| Token         | bru-                    | drp-                    |
| ------------- | ----------------------- | ----------------------- |
| Purple        | `--bru-purple: #631DED` | `--drp-purple: #631DED` |
| Orange        | `--bru-orange: #FF6C01` | `--drp-orange: #FF6C01` |
| Black         | `--bru-black: #121212`  | `--drp-black: #121212`  |
| Cream         | `--bru-cream: #F2F2F2`  | `--drp-cream: #F2F2F2`  |
| Sidebar bg    | `#1A1A1A` dark          | `#1A1A1A` dark          |
| Topbar bg     | cream                   | cream                   |
| Shadows       | offset black, 0 blur    | offset black, 0 blur    |
| Border radius | 0 (brutalist)           | 0 (brutalist)           |
| Spacing       | 4px grid                | 4px grid                |
| Sidebar width | 280px                   | 280px                   |
| Topbar height | 68px                    | 68px                    |

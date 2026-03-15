# CLAUDE.md — Doctor Project Design System

> **Read this entire file before generating ANY code.**
> This is the instruction set for AI code agents working with the Doctor Project Design System.

## WHAT THIS PROJECT IS

This is a **brutalist React design system** called `@doctorproject/react`.
It is a **UI component library** — NOT an API, NOT a backend, NOT a data layer.

Visual identity: **sharp corners (border-radius: 0 everywhere), hard-edged offset-black shadows (no blur), thick 2px+ borders, high contrast, 4px spacing grid, Visby typography.**

If you are asked to build a UI using this design system, the output must be a **React application with visual components** — buttons, cards, tables, sidebars, forms. Never produce API explorers, endpoint lists, or non-visual output.

---

## MANDATORY SETUP — DO THIS FIRST IN EVERY PROJECT

```bash
npm install @doctorproject/react
```

```tsx
// In your app entry point (main.tsx, index.tsx, app/layout.tsx) — ONCE
import "@doctorproject/react/styles";
```

**⚠️ If this import is missing, EVERY component renders unstyled. This is the #1 cause of broken output.**

### Framework-specific notes

- **Next.js App Router**: Add `'use client'` to any page/component using DS components. Add `transpilePackages: ['@doctorproject/react']` to `next.config.js`.
- **Next.js Pages Router**: Import styles in `pages/_app.tsx`.
- **Vite / CRA**: Import styles in `main.tsx`.
- **Remix**: Use `?url` suffix: `import styles from "@doctorproject/react/styles?url"`.

### TypeScript config requirement

```json
{ "compilerOptions": { "moduleResolution": "bundler" } }
```

---

## THE 3-LEVEL HIERARCHY — PICK THE RIGHT LEVEL

### Level 1: Use a Screen (fastest — full page, ready to render)

Screens are complete page compositions with sidebar, topbar, and content.

```tsx
import { SignIn } from "@doctorproject/react";
import "@doctorproject/react/styles";

export default function LoginPage() {
  return <SignIn />;
}
```

**Available screens:**

| Domain | Screens |
|---|---|
| Auth | `SignIn`, `SignUp`, `PasswordReset`, `SignInWithQR` |
| Dashboard | `Dashboard` |
| Lists | `ProductsList`, `CustomersList`, `AccountsList`, `TransactionsList`, `ContactsList`, `SalesList`, `InboxList`, `PaymentsList` |
| Education | `EducationCourses` |
| Calendar | `CalendarEvent` |
| Support | `SupportHome` |
| Profile | `ProfileAccount`, `ProfileNotifications`, `ProfileSecurity`, `ProfileSocial` |
| Reports | `ChartContainer`, `ChartBarVariant`, `ChartPolarVariant`, `ChartWaveVariant`, `ChartGeometricVariant`, `ChartHorizontalBarsVariant`, `ChartDoubleBarsVariant`, `ChartMiscVariant` |
| ToolsTracker | `ToolsTrackerDashboard`, `ToolsTrackerAnalytics`, `ToolsTrackerReports`, `ToolsTrackerTransactions`, `ToolsTrackerProducts`, `ToolsTrackerCatalog`, `ToolsTrackerAdminPanel`, `ToolsTrackerImport`, `ToolsTrackerLogs`, `ToolsTrackerSyncJobs`, `ToolsTrackerSettings` |
| Template | `ListScreen` — reusable base for any list/table screen |

Many screens accept a `variant` prop for different views (e.g. `<PaymentsList variant="send-money" />`). Check the Storybook for available variants.

### Level 2: Compose with Layout + Components (most common)

Use the app shell wrappers + individual components to build custom screens.

```tsx
import {
  AppSidebar, AppTopBar, AppFooter,
  Card, CardHeader, Button, Badge, Table, StatCard,
  ResponsiveGrid, Input, Select
} from "@doctorproject/react";

export function MyScreen() {
  return (
    <div className="app-layout">
      <AppSidebar activeId="my-section" />
      <div className="main-content">
        <AppTopBar title="My Screen" />
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          <ResponsiveGrid cols={3} colsSm={1} gap="16px">
            <StatCard value="$44,228" label="Revenue" />
            <StatCard value="$2,828" label="Refunds" />
            <StatCard value="$34,177" label="Net Spent" />
          </ResponsiveGrid>
          <Card variant="raised" accent="purple">
            <CardHeader title="Recent Activity" action={<Button variant="ghost" size="sm">View all</Button>} />
            <Table columns={columns} data={data} />
          </Card>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
```

**⚠️ `AppFooter` MUST be inside `.main-content`, not a sibling of it.**

### Level 3: Use Tokens Directly (rare — only for local one-offs)

When building something that doesn't exist as a component, use CSS custom properties.

```tsx
import { colorTokens, spaceTokens, shadowTokens } from "@doctorproject/react/tokens";

<div style={{
  color: colorTokens.textPrimary,
  padding: spaceTokens[4],
  boxShadow: shadowTokens.md,
  border: "var(--drp-border)",
}}>
  Custom content
</div>
```

---

## COMPLETE COMPONENT INVENTORY

All imports from `@doctorproject/react`:

| Category | Components |
|---|---|
| **Actions** | `Button` (primary/outline/ghost/ghost-bordered/danger/secondary/dark, sm/lg), `Switch`, `Checkbox`, `Radio` |
| **Forms** | `Input` (label, error, success), `Textarea`, `Select`, `Dropzone`, `Counter` |
| **Display** | `Badge` (filled/primary/secondary/outline/mint/pink), `Tag` (9 colors, filled, dot, closeable), `StatusDot`, `Avatar`, `Spinner`, `Loader`, `Skeleton` |
| **Feedback** | `Alert` (info/success/warning/error), `Toast` (info/success/warning/error), `Modal` (focus-trapped, accessible), `Tooltip` |
| **Layout** | `Card` (raised/flat/interactive/sm, accent: purple/mint/pink/yellow), `CardHeader`, `Container`, `Stack`, `ResponsiveGrid`, `Divider` |
| **Navigation** | `Sidebar` (sections, badges, team members, collapsible), `TopBar`, `Navbar`, `Tabs`, `Breadcrumbs`, `Pagination` |
| **Typography** | `Heading` (h1-h6), `Text` (sizes, weights, colors) |
| **Data** | `Table` (typed columns, custom cell rendering), `StatCard`, `ChartCard`, `ProgressBar` |
| **Marketing** | `Hero`, `FeatureList`, `PricingCard`, `CtaBanner`, `Testimonial`, `Marquee` |
| **Media** | `Icon` (24 built-in icons), `Pictogram` (65 neo-brutalist illustrations) |
| **App Shell** | `AppShell`, `Topbar`, `DashboardLayout`, `AppSidebar`, `AppTopBar`, `AppFooter` |
| **Misc** | `EmptyState`, `Footer`, `CaseCard` |

---

## DECISION TREE — WHAT TO USE WHEN

```
Need a complete page?
├── YES → Check if a Screen exists (Level 1) → Use it
└── NO → Need a layout with multiple components?
    ├── YES → Use AppShell/DashboardLayout + compose with components (Level 2)
    └── NO → Need a single UI element?
        ├── Component exists? → Import and use it
        └── Doesn't exist? → Compose existing components
            └── Can't compose? → Build locally with --drp-* tokens ONLY
                └── Open GitHub issue: "DS candidate: [ComponentName]"
```

---

## HARD RULES — VIOLATIONS PRODUCE BROKEN UI

| NEVER | INSTEAD |
|---|---|
| Use raw `<button>`, `<input>`, `<select>` | Use `<Button>`, `<Input>`, `<Select>` |
| Add `border-radius` to anything | DS is intentionally flat — 0 radius everywhere |
| Use soft shadows (`box-shadow: 0 4px 12px rgba(...)`) | Use `var(--drp-shadow-md)` — hard offset shadows only |
| Hardcode hex colors (`color: #631ded`) | Use `var(--drp-purple)` or `colorTokens.purple` |
| Use off-grid spacing (`padding: 14px`) | Use `var(--drp-space-4)` (16px) — 4px grid only |
| Import `* as DS from '@doctorproject/react'` | Use named imports: `import { Button, Card } from '@doctorproject/react'` |
| Install MUI, Ant Design, Shadcn, or Chakra alongside | One design language. Headless-only a11y primitives are OK. |
| Build a custom sidebar or topbar | Use `AppSidebar`, `AppTopBar`, `AppFooter` |
| Add `className` overrides to DS components | Use the component's own props |
| Use `text-transform: uppercase` globally | Only `StatCard` and labels use uppercase — it's handled internally |
| Use Tailwind utility classes on DS components | Tailwind allowed ONLY for layout glue between DS components |

---

## DESIGN TOKENS QUICK REFERENCE

### Colors

| Token | Value | Usage |
|---|---|---|
| `--drp-purple` | `#631DED` | Primary brand, CTAs |
| `--drp-orange` | `#FF6C01` | Secondary brand |
| `--drp-black` | `#121212` | Text, borders |
| `--drp-charcoal` | `#282828` | Dark surfaces |
| `--drp-surface` | `#F2F2F2` | Page backgrounds |
| `--drp-white` | `#FFFFFF` | Card backgrounds |
| `--drp-mint` | `#98E9AB` | Success/active accent |
| `--drp-pink` | `#E99898` | Danger/refund accent |
| `--drp-yellow` | `#FAE8A4` | Warning/pending accent |
| `--drp-text-primary` | `#121212` | Body text |
| `--drp-text-secondary` | `#444444` | Labels, metadata |
| `--drp-text-muted` | `#888888` | Captions |
| `--drp-success` | `#00AA00` | Success states |
| `--drp-error` | `#FF4444` | Error states |
| `--drp-warning` | `#FFAA00` | Warning states |
| `--drp-info` | `#0066FF` | Info states |

### Spacing (4px grid — never use off-grid values)

`--drp-space-1` (4px), `--drp-space-2` (8px), `--drp-space-3` (12px), `--drp-space-4` (16px), `--drp-space-5` (20px), `--drp-space-6` (24px), `--drp-space-8` (32px), `--drp-space-10` (40px), `--drp-space-12` (48px), `--drp-space-16` (64px), `--drp-space-20` (80px), `--drp-space-24` (96px), `--drp-space-32` (128px)

### Shadows (brutalist offset — no blur)

`--drp-shadow-xs` (2px), `--drp-shadow-sm` (3px), `--drp-shadow-md` (4px), `--drp-shadow-lg` (6px), `--drp-shadow-xl` (8px), `--drp-shadow-hover` (6px purple), `--drp-shadow-pressed` (0px)

### Borders

`--drp-border` (2px solid), `--drp-border-thin` (1px), `--drp-border-chunk` (3px), `--drp-border-thick` (4px), `--drp-border-dashed` (2px dashed)

### Typography

- Font: `--drp-font-primary` (Visby, system fallback) | `--drp-font-mono` (Space Mono)
- Sizes: `--drp-text-h1` (48px) through `--drp-text-h6` (18px), `--drp-text-lg` (16px), `--drp-text-md` (14px), `--drp-text-sm` (12px), `--drp-text-xs` (11px)
- Weights: `--drp-weight-regular` (400), `--drp-weight-medium` (500), `--drp-weight-semibold` (600), `--drp-weight-bold` (700), `--drp-weight-heavy` (800)

---

## DARK MODE

```tsx
// Toggle
document.body.classList.toggle("dark-mode");

// React hook
const [dark, setDark] = useState(false);
useEffect(() => {
  document.body.classList.toggle("dark-mode", dark);
}, [dark]);
```

All tokens auto-switch. Never hardcode dark/light colors — use tokens.

---

## RESPONSIVE BREAKPOINTS

The DS handles responsiveness via `css/responsive.css`. Key breakpoints:
- Desktop: 1200px+
- Tablet: 768px–1199px (sidebar collapses to icons)
- Mobile: <768px (sidebar hidden, content stacks, no horizontal scroll)

Use `<ResponsiveGrid cols={3} colsSm={1} gap="16px">` for multi-column layouts.

---

## WORKFLOW: NEW APP FROM SCRATCH

1. `npm install @doctorproject/react`
2. Import styles at app root: `import "@doctorproject/react/styles"`
3. Set up app shell: `AppSidebar` + `AppTopBar` + `AppFooter` inside `app-layout`
4. Check if a Screen exists for each page → use it
5. For custom pages, compose with DS components (Level 2)
6. For one-off elements, use tokens (Level 3)
7. Run the PR checklist (see `/docs/DESIGN-SYSTEM-ADOPTION-GUIDE.md` Section 9)

## WORKFLOW: REVAMP EXISTING APP

1. `npm install @doctorproject/react`
2. Import styles at app root — audit for CSS conflicts with existing globals first
3. **Phase 1**: Replace app shell first (sidebar, topbar, footer) → instant consistency
4. **Phase 2**: Replace repeated atoms (Button, Input, Badge, Tag) screen by screen
5. **Phase 3**: Replace feedback components (Alert, Toast, Modal)
6. **Phase 4**: Replace cards and layout (Card, Stack, ResponsiveGrid)
7. **Phase 5**: Swap full screens where DS Screen templates match
8. **Phase 6**: Apply tokens to remaining local components
9. Delete all replaced custom CSS/components — do not layer DS on top of legacy

---

## STORYBOOK — VISUAL REFERENCE

**URL**: https://storybook-static-git-fix-desi-59494d-drproject-codings-projects.vercel.app

Open Storybook BEFORE building any component. Every component's variants, props, and visual output is documented there.

---

## WHAT NOT TO DO — COMMON AGENT MISTAKES

These are real failures observed when code agents use this design system:

1. **Producing an API endpoint explorer** instead of UI components — this DS is a UI library, not an API
2. **Missing the styles import** → everything renders as unstyled HTML
3. **Adding `border-radius`** → the DS is brutalist, all corners are sharp
4. **Using soft drop shadows** → only hard-edge offset shadows are allowed
5. **Rebuilding components from scratch** instead of importing from `@doctorproject/react`
6. **Using ALL CAPS text via `text-transform: uppercase`** — only internal DS labels do this
7. **Using colored square `<div>`s as icon placeholders** — use `<Icon>` or `<Pictogram>`
8. **Mixing Tailwind/MUI classes with DS components** — one design language only

---

## FILE STRUCTURE REFERENCE

```
packages/react/
├── src/
│   ├── components/     # 45+ individual components
│   ├── screens/        # 40+ full-page compositions
│   ├── styles/         # global.css (all tokens + component styles)
│   ├── data/           # Fake data generators for prototyping
│   ├── tokens.ts       # TypeScript token constants
│   └── index.ts        # Main barrel export
├── dist/               # Built output (CJS + ESM + types)
├── storybook-static/   # Built Storybook
└── package.json        # @doctorproject/react
```

---

*Doctor Project Design System — "Your Systems Speak Chaos. We Speak Clarity."*

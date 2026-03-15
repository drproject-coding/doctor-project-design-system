# Doctor Project — Design System & Brand Skill

> For AI assistants: apply these guidelines when creating any UI code, branded content,
> presentations, documents, or visual artifacts for Doctor Project.

## Identity

**Company:** Doctor Project (founded by Yassine Fatihi)
**Tagline:** "Your Systems Speak Chaos. We Speak Clarity."
**Positioning:** Strategic council for emerging technologies — NOT a startup, agency, or Big Five consultancy
**Values:** CLARIFY · LEAD · THRIVE

---

## Design System — `@doctorproject/react`

### Visual Identity: Neo-Brutalist

- **Sharp corners**: `border-radius: 0` on everything — no exceptions
- **Offset shadows**: Hard-edged, bottom-right, black, no blur (`4px 4px 0 #121212`)
- **Thick borders**: 2px solid black minimum
- **High contrast**: Black on white, white on black
- **4px spacing grid**: All spacing values are multiples of 4px
- **Font**: Visby (geometric sans-serif) — NEVER use Poppins or any substitute

### Package

```bash
npm install @doctorproject/react
```

**Mandatory styles import at app root:**
```tsx
import "@doctorproject/react/styles";
```

### Component Inventory (import from `@doctorproject/react`)

**Actions**: `Button` (primary/outline/ghost/ghost-bordered/danger/secondary/dark, sm/lg), `Switch`, `Checkbox`, `Radio`
**Forms**: `Input`, `Textarea`, `Select`, `Dropzone`, `Counter`
**Display**: `Badge` (filled/primary/secondary/outline/mint/pink), `Tag` (9 colors, closeable), `StatusDot`, `Avatar`, `Spinner`, `Loader`, `Skeleton`
**Feedback**: `Alert`, `Toast`, `Modal`, `Tooltip`
**Layout**: `Card` (raised/flat/interactive/sm, accent: purple/mint/pink/yellow), `CardHeader`, `Container`, `Stack`, `ResponsiveGrid`, `Divider`
**Navigation**: `Sidebar`, `TopBar`, `Navbar`, `Tabs`, `Breadcrumbs`, `Pagination`
**Typography**: `Heading` (h1-h6), `Text`
**Data**: `Table`, `StatCard`, `ChartCard`, `ProgressBar`
**Marketing**: `Hero`, `FeatureList`, `PricingCard`, `CtaBanner`, `Testimonial`, `Marquee`
**Media**: `Icon` (24 icons), `Pictogram` (65 neo-brutalist illustrations)
**App Shell**: `AppShell`, `AppSidebar`, `AppTopBar`, `AppFooter`, `DashboardLayout`

### Screens (full pages, ready to render)

Auth: `SignIn`, `SignUp`, `PasswordReset`, `SignInWithQR`
Lists: `ProductsList`, `CustomersList`, `AccountsList`, `TransactionsList`, `ContactsList`, `SalesList`, `InboxList`, `PaymentsList`
Other: `Dashboard`, `EducationCourses`, `CalendarEvent`, `SupportHome`, `ProfileAccount`, `ProfileNotifications`, `ProfileSecurity`, `ProfileSocial`
Reports: `ChartContainer`, `ChartBarVariant`, `ChartPolarVariant`, `ChartWaveVariant`, `ChartGeometricVariant`, `ChartHorizontalBarsVariant`, `ChartDoubleBarsVariant`, `ChartMiscVariant`

### Hard Rules

1. Never use raw `<button>`, `<input>`, `<select>` — use DS components
2. Never add `border-radius` — the DS is intentionally flat
3. Never use soft shadows — only `var(--drp-shadow-*)` hard offset shadows
4. Never hardcode hex colors — use `var(--drp-purple)`, `var(--drp-surface)`, etc.
5. Never use off-grid spacing — 4px multiples only via `var(--drp-space-*)`
6. Never install MUI/Ant/Shadcn/Chakra alongside the DS
7. Never build a custom sidebar or topbar — use `AppSidebar`, `AppTopBar`
8. Dark mode: `document.body.classList.toggle("dark-mode")` — tokens auto-switch

---

## Color Palette

| Color | Hex | CSS Token | Usage |
|---|---|---|---|
| Purple | `#631DED` | `--drp-purple` | Primary brand, CTAs, highlights |
| Orange | `#FF6C01` | `--drp-orange` | Secondary accent, energy, urgency |
| Black | `#121212` | `--drp-black` | Text, borders |
| Charcoal | `#282828` | `--drp-charcoal` | Dark backgrounds, brand identity |
| Surface | `#F2F2F2` | `--drp-surface` | Light backgrounds |
| White | `#FFFFFF` | `--drp-white` | Card backgrounds |
| Mint | `#98E9AB` | `--drp-mint` | Success, active status |
| Pink | `#E99898` | `--drp-pink` | Danger, refund accent |
| Yellow | `#FAE8A4` | `--drp-yellow` | Warning, pending |

**Approved combinations:**
- Black/charcoal background + Purple/Orange accents
- White/surface background + Black text + Purple/Orange accents
- Purple background + White text + Orange accents

---

## Typography

**Primary font:** Visby (geometric sans-serif) — NEVER substitute with Poppins or other fonts
**Mono font:** Space Mono

| Weight | Token | Value | Usage |
|---|---|---|---|
| Regular | `--drp-weight-regular` | 400 | Body text |
| Medium | `--drp-weight-medium` | 500 | Subheadings |
| Semibold | `--drp-weight-semibold` | 600 | Emphasis |
| Bold | `--drp-weight-bold` | 700 | Headlines, CTAs |
| Heavy | `--drp-weight-heavy` | 800 | Display numbers |

---

## Voice & Tone

**Core voice:** Bold, confident, technical but accessible. Evidence-based, never fluffy.

**Avoid:** "Synergy", "Leverage", "Disrupt", "Game-changer", startup narrative, Big Five corporate speak
**Use:** Clarity, Precision, Systems, Frameworks, Pragmatic, Analytical, Research-backed, Strategic

---

## Visual Elements

- **Directional arrows (↗)** — progress, forward momentum
- **Dot grid patterns** — backgrounds and textures
- **Barcode elements** — technical, systematic aesthetic
- **Geometric forms** — squares, circles, semi-circles
- **No gradients** — flat color fills only

---

## Logo

- **Placement:** Bottom-left (slides/documents), small and discreet
- **Versions:** Horizontal (primary), Vertical (square spaces), IconMark (favicons)
- **Clear space:** Equal to height of icon's inner square
- **Never** distort, rotate, or add effects

---

## Iconography

**24 custom pictogram categories** in the DS:
- Problem: Chaos, Blur, Maze, Warning, Question, Money Loss, Delay
- Solution: Brain/AI, Lightbulb, Evolution, Target, Puzzle, Structure, Safety Net
- Service: Consulting, E-commerce, Leadership, Books, Magnifier, Directions
- Collaboration: Collaboration, Mentoring, Team, Agility

Use `<Icon name="..." />` for functional icons, `<Pictogram name="..." />` for branded illustrations.

---

## Storybook

Live reference: https://storybook-static-git-fix-desi-59494d-drproject-codings-projects.vercel.app

Always check Storybook before building any component — it shows every variant, prop, and visual state.

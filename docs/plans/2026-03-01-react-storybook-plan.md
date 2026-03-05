# Plan: DoctorProject React Component Library + Storybook

## Context

The doctorproject-design-system repo has a complete, production-ready pure-CSS design system (18 CSS modules, design tokens, fonts, dark mode) but no framework components or interactive documentation. We're wrapping every CSS component into typed React components with Storybook for visual testing, using faker.js for realistic dashboard data.

## Approach

**pnpm monorepo** — CSS stays at root, React components live in `packages/react/`. Storybook 8 + React 19 + Vite 6 + TypeScript. Components are thin wrappers that apply `drp-*` CSS classes via `className` props. No CSS Modules needed.

## Folder Structure

```
doctorproject-design-system/          (existing root)
├── css/                        (existing — untouched)
├── fonts/                      (existing — served via staticDirs)
├── packages/
│   └── react/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button/       Button.tsx, Button.stories.tsx, index.ts
│       │   │   ├── Input/        ...
│       │   │   ├── Select/       ...
│       │   │   ├── Card/         ...
│       │   │   ├── Table/        ...
│       │   │   ├── Modal/        ...
│       │   │   ├── Tabs/         ...
│       │   │   ├── Tag/          ...
│       │   │   ├── Badge/        ...
│       │   │   ├── Pagination/   ...
│       │   │   ├── Avatar/       ...
│       │   │   ├── Layout/       Sidebar, Topbar, AppShell
│       │   │   ├── Chart/        ChartCard wrapper
│       │   │   ├── Navbar/       ...
│       │   │   ├── Breadcrumbs/  ...
│       │   │   └── index.ts      barrel export
│       │   ├── data/
│       │   │   └── fake.ts       faker.js seed data
│       │   ├── styles/
│       │   │   └── global.css    @import '../../../css/index.css'
│       │   └── index.ts
│       ├── .storybook/
│       │   ├── main.ts
│       │   ├── preview.ts
│       │   └── preview-head.html
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json                 (updated)
```

## Key Decisions

| Decision        | Choice                           | Why                                      |
| --------------- | -------------------------------- | ---------------------------------------- |
| Package manager | pnpm workspaces                  | Disk-efficient, native workspace support |
| Framework       | React 19 + TS                    | Industry standard for Storybook          |
| Bundler         | Vite 6 (dev) + tsup (lib)        | Fast dev, clean library output           |
| Storybook       | v8 + react-vite                  | Latest stable, native Vite support       |
| Dark mode       | storybook-dark-mode              | Maps to existing `body.dark-mode` class  |
| CSS approach    | Direct `drp-*` className strings | Existing CSS IS the module system        |
| Fake data       | @faker-js/faker v9               | Dashboard: users, stats, charts          |
| Fonts           | staticDirs from root /fonts      | No duplication                           |

## Components (22 total)

### Batch 1 — Foundation (no deps)

1. Button — primary/outline/ghost/ghost-bordered/danger/secondary/dark, sm/md/lg
2. Input — text/email/password/search, validation states
3. Select — native select, validation
4. Checkbox — label, checked, disabled
5. Radio — name group, checked
6. Switch — toggle
7. Counter — increment/decrement
8. Tag — filled/outlined, removable
9. Badge — status colors
10. StatusDot — online/offline/away/busy
11. ProgressBar — determinate percentage
12. Avatar — sm/md/lg, image or initials
13. Tooltip — hover wrapper

### Batch 2 — Compound

14. Card — raised/flat/interactive, color accents
15. Table — header, rows, hover, responsive
16. Modal — overlay, header/body/footer, close
17. Tabs — tab group, active state
18. Pagination — default/dark/transparent

### Batch 3 — Layout & Composite

19. Layout — AppShell (Sidebar + Topbar + Main + Footer)
20. Navbar — top navigation
21. Breadcrumbs — nav breadcrumbs
22. ChartCard — Chart.js container

### Batch 4 — Dashboard Stories

- Dashboard page — full app shell, stats cards, charts, user table
- Settings page — forms, switches, buttons
- User list — table, avatars, badges, pagination

## Fake Data (src/data/fake.ts)

```ts
// Users: { id, name, email, role, status, avatar, joinDate }
// Stats: { label, value, change, trend }
// Charts: { labels: months[], datasets: { revenue, users } }
// Nav: { menuItems: [{ icon, label, href, badge? }] }
```

<!-- EXECUTION_TASKS_START -->

| #   | Task                                                                              | Files                                                                                                         | Deps    | Batch |
| --- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------- | ----- |
| 1   | Set up monorepo: pnpm-workspace.yaml, root package.json, tsconfig.base.json       | pnpm-workspace.yaml, package.json, tsconfig.base.json                                                         | -       | 1     |
| 2   | Create packages/react scaffold: package.json, tsconfig.json, tsup.config.ts       | packages/react/package.json, packages/react/tsconfig.json, packages/react/tsup.config.ts                      | 1       | 1     |
| 3   | Configure Storybook: main.ts, preview.ts, preview-head.html, global.css           | packages/react/.storybook/main.ts, .storybook/preview.ts, .storybook/preview-head.html, src/styles/global.css | 2       | 1     |
| 4   | Create fake data module with faker.js                                             | packages/react/src/data/fake.ts                                                                               | 2       | 1     |
| 5   | Build Batch 1 components: Button, Input, Select, Checkbox, Radio, Switch, Counter | packages/react/src/components/{Button,Input,Select,Checkbox,Radio,Switch,Counter}/                            | 3       | 2     |
| 6   | Build Batch 1 components: Tag, Badge, StatusDot, ProgressBar, Avatar, Tooltip     | packages/react/src/components/{Tag,Badge,StatusDot,ProgressBar,Avatar,Tooltip}/                               | 3       | 2     |
| 7   | Build Batch 2 components: Card, Table, Modal, Tabs, Pagination                    | packages/react/src/components/{Card,Table,Modal,Tabs,Pagination}/                                             | 5,6     | 3     |
| 8   | Build Batch 3 components: Layout, Navbar, Breadcrumbs, ChartCard                  | packages/react/src/components/{Layout,Navbar,Breadcrumbs,Chart}/                                              | 7       | 3     |
| 9   | Create barrel exports (all index.ts files)                                        | packages/react/src/components/index.ts, packages/react/src/index.ts                                           | 5,6,7,8 | 4     |
| 10  | Write Dashboard page story with full fake data                                    | packages/react/src/components/Layout/Dashboard.stories.tsx                                                    | 4,8,9   | 4     |
| 11  | Install deps and verify Storybook launches                                        | -                                                                                                             | 9,10    | 5     |

<!-- EXECUTION_TASKS_END -->

## Verification

- [ ] `pnpm install` succeeds from root
- [ ] `pnpm storybook` launches at localhost:6006
- [ ] Visby fonts render correctly
- [ ] Dark mode toggle works (body.dark-mode)
- [ ] All 22 components render with correct drp-\* classes
- [ ] Dashboard story shows full layout with fake data
- [ ] Controls panel allows interactive prop changes
- [ ] Autodocs generates documentation pages
- [ ] `pnpm build` produces dist/ with CJS + ESM + types
- [ ] No TypeScript errors

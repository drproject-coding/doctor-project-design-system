# Port Bruddle Stories — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Port all ~170 Storybook stories from bruddle-react into doctor-project-design-system, closing story count gaps identified in the design doc.

**Architecture:** Copy & adapt strategy — copy source files from `/Users/y/Desktop/bruddle-react/`, replace every `bru-` CSS class prefix with `drp-` and every `--bru-` CSS variable prefix with `--drp-`. Add missing CSS classes to the design system's CSS files. No new component features beyond what bruddle already has.

**Tech Stack:** TypeScript, React, Storybook 8, drp- CSS design tokens.

---

## Task 1: Create Heading component

**Files:**

- Create: `packages/react/src/components/Heading/Heading.tsx`
- Create: `packages/react/src/components/Heading/Heading.stories.tsx`
- Create: `packages/react/src/components/Heading/index.ts`

**Step 1: Create Heading.tsx**

```tsx
// packages/react/src/components/Heading/Heading.tsx
import type { ReactNode } from "react";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  uppercase?: boolean;
  className?: string;
}

export function Heading({
  level = 1,
  children,
  uppercase,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const classes = [`drp-h${level}`, className].filter(Boolean).join(" ");

  const style: React.CSSProperties = uppercase
    ? {
        textTransform: "uppercase",
        letterSpacing: "var(--drp-tracking-caps)",
        fontWeight: "var(--drp-weight-heavy)" as unknown as number,
      }
    : {};

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  );
}
```

**Step 2: Create Heading.stories.tsx**

```tsx
// packages/react/src/components/Heading/Heading.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    uppercase: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = { args: { level: 1, children: "Heading 1 — 48px" } };
export const H2: Story = { args: { level: 2, children: "Heading 2 — 36px" } };
export const H3: Story = { args: { level: 3, children: "Heading 3 — 28px" } };
export const H4: Story = { args: { level: 4, children: "Heading 4 — 24px" } };
export const H5: Story = { args: { level: 5, children: "Heading 5 — 20px" } };
export const H6: Story = { args: { level: 6, children: "Heading 6 — 18px" } };

export const Uppercase: Story = {
  args: { level: 1, uppercase: true, children: "Uppercase Heading" },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading level={1}>H1 — Dashboard Overview</Heading>
      <Heading level={2}>H2 — Analytics Report</Heading>
      <Heading level={3}>H3 — User Management</Heading>
      <Heading level={4}>H4 — Order Details</Heading>
      <Heading level={5}>H5 — Product Filters</Heading>
      <Heading level={6}>H6 — Metadata Section</Heading>
    </div>
  ),
};

export const AllLevelsUppercase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading level={1} uppercase>
        H1 — Dashboard Overview
      </Heading>
      <Heading level={2} uppercase>
        H2 — Analytics Report
      </Heading>
      <Heading level={3} uppercase>
        H3 — User Management
      </Heading>
      <Heading level={4} uppercase>
        H4 — Order Details
      </Heading>
      <Heading level={5} uppercase>
        H5 — Product Filters
      </Heading>
      <Heading level={6} uppercase>
        H6 — Metadata Section
      </Heading>
    </div>
  ),
};
```

**Step 3: Create index.ts**

```ts
// packages/react/src/components/Heading/index.ts
export { Heading } from "./Heading";
export type { HeadingProps } from "./Heading";
```

**Step 4: Commit**

```bash
git add packages/react/src/components/Heading/
git commit -m "feat: add Heading component with stories"
```

---

## Task 2: Create Text component + drp-text--xs CSS

**Files:**

- Create: `packages/react/src/components/Text/Text.tsx`
- Create: `packages/react/src/components/Text/Text.stories.tsx`
- Create: `packages/react/src/components/Text/index.ts`
- Modify: `css/typography.css`

**Step 1: Add missing drp-text--xs to typography.css**

Find the section with `.drp-text--sm` and add `.drp-text--xs` nearby.

Look for this pattern in `css/typography.css`:

```css
.drp-text--sm {
```

Add after it (or before — wherever `sm` and `lg` variants are defined):

```css
.drp-text--xs {
  font-size: var(--drp-text-xs, 11px);
}
```

Note: check if `--drp-text-xs` token exists first with:

```bash
grep "drp-text-xs" /Users/y/Desktop/doctor-project-design-system/css/tokens.css
```

If missing, also add to tokens.css: `--drp-text-xs: 11px;`

**Step 2: Create Text.tsx**

```tsx
// packages/react/src/components/Text/Text.tsx
import type { ReactNode } from "react";

type TextSize = "xs" | "sm" | "md" | "lg";
type TextWeight = "regular" | "medium" | "semibold" | "bold";

export interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  muted?: boolean;
  secondary?: boolean;
  as?: "p" | "span" | "div" | "label";
  children: ReactNode;
  className?: string;
}

export function Text({
  size,
  weight,
  muted,
  secondary,
  as: Tag = "p",
  children,
  className = "",
}: TextProps) {
  const classes = [
    "drp-text",
    size && size !== "md" && `drp-text--${size}`,
    weight && weight !== "regular" && `drp-text--${weight}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: React.CSSProperties = {};
  if (muted) {
    style.color = "var(--drp-text-muted)";
  } else if (secondary) {
    style.color = "var(--drp-text-secondary)";
  }

  return (
    <Tag
      className={classes}
      style={Object.keys(style).length ? style : undefined}
    >
      {children}
    </Tag>
  );
}
```

**Step 3: Create Text.stories.tsx**

```tsx
// packages/react/src/components/Text/Text.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [undefined, "xs", "sm", "md", "lg"],
    },
    weight: {
      control: "select",
      options: [undefined, "regular", "medium", "semibold", "bold"],
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "label"],
    },
    muted: { control: "boolean" },
    secondary: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "Default body text at 14px regular weight." },
};
export const ExtraSmall: Story = {
  args: { size: "xs", children: "Extra small text — 11px" },
};
export const Small: Story = {
  args: { size: "sm", children: "Small text — 12px" },
};
export const Medium: Story = {
  args: { size: "md", children: "Medium text — 14px (default)" },
};
export const Large: Story = {
  args: { size: "lg", children: "Large text — 16px" },
};
export const Bold: Story = {
  args: { weight: "bold", children: "Bold weight text" },
};
export const Semibold: Story = {
  args: { weight: "semibold", children: "Semibold weight text" },
};
export const Muted: Story = {
  args: { muted: true, children: "Muted text for secondary information" },
};
export const Secondary: Story = {
  args: { secondary: true, children: "Secondary text for supporting content" },
};
export const AsSpan: Story = {
  args: { as: "span", children: "Rendered as a <span>" },
};
export const AsLabel: Story = {
  args: { as: "label", weight: "semibold", children: "Rendered as a <label>" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text size="xs">Extra Small (11px) — Caption text and metadata</Text>
      <Text size="sm">Small (12px) — Helper text and labels</Text>
      <Text size="md">Medium (14px) — Default body text</Text>
      <Text size="lg">Large (16px) — Emphasized body text</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text weight="regular">Regular (400) — Standard body copy</Text>
      <Text weight="medium">Medium (500) — Slightly emphasized</Text>
      <Text weight="semibold">Semibold (600) — Labels and buttons</Text>
      <Text weight="bold">Bold (700) — Strong emphasis</Text>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text>Primary text — default color</Text>
      <Text secondary>Secondary text — supporting content</Text>
      <Text muted>Muted text — de-emphasized content</Text>
    </div>
  ),
};
```

**Step 4: Create index.ts**

```ts
// packages/react/src/components/Text/index.ts
export { Text } from "./Text";
export type { TextProps } from "./Text";
```

**Step 5: Commit**

```bash
git add packages/react/src/components/Text/ css/typography.css css/tokens.css
git commit -m "feat: add Text component, stories, and drp-text--xs CSS"
```

---

## Task 3: Create Icon component

**Files:**

- Create: `packages/react/src/components/Icon/Icon.tsx`
- Create: `packages/react/src/components/Icon/Icon.stories.tsx`
- Create: `packages/react/src/components/Icon/index.ts`

**Step 1: Create Icon.tsx**

Pure SVG, no bru-/drp- classes, copy as-is except rename `BruddleColors` story → `DoctorProjectColors`.

```tsx
// packages/react/src/components/Icon/Icon.tsx
type IconName =
  | "dashboard"
  | "analytics"
  | "users"
  | "orders"
  | "products"
  | "settings"
  | "search"
  | "bell"
  | "mail"
  | "calendar"
  | "check"
  | "close"
  | "plus"
  | "minus"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "arrow-down"
  | "edit"
  | "trash"
  | "eye"
  | "eye-off"
  | "filter"
  | "download";

type IconSize = "sm" | "md" | "lg";

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
}

const sizeMap: Record<IconSize, number> = { sm: 16, md: 20, lg: 24 };

const iconPaths: Record<IconName, string> = {
  dashboard:
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
  analytics:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  users:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  orders:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  products: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  settings:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  calendar:
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  check: "M5 13l4 4L19 7",
  close: "M6 18L18 6M6 6l12 12",
  plus: "M12 4v16m8-8H4",
  minus: "M20 12H4",
  "arrow-left": "M19 12H5m7-7l-7 7 7 7",
  "arrow-right": "M5 12h14m-7-7l7 7-7 7",
  "arrow-up": "M12 19V5m-7 7l7-7 7 7",
  "arrow-down": "M12 5v14m-7-7l7 7 7-7",
  edit: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  trash:
    "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
  eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  "eye-off":
    "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-4.132 5.411m0 0L21 21",
  filter:
    "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
  download: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
};

export function Icon({
  name,
  size = "md",
  color = "currentColor",
  className = "",
}: IconProps) {
  const px = sizeMap[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || undefined}
      aria-hidden="true"
    >
      {iconPaths[name].split(" M").map((segment, i) => (
        <path key={i} d={i === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  );
}
```

**Step 2: Create Icon.stories.tsx**

```tsx
// packages/react/src/components/Icon/Icon.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const allIconNames = [
  "dashboard",
  "analytics",
  "users",
  "orders",
  "products",
  "settings",
  "search",
  "bell",
  "mail",
  "calendar",
  "check",
  "close",
  "plus",
  "minus",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrow-down",
  "edit",
  "trash",
  "eye",
  "eye-off",
  "filter",
  "download",
] as const;

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: allIconNames },
    size: { control: "select", options: [undefined, "sm", "md", "lg"] },
    color: { control: "color" },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: { name: "dashboard" } };
export const Small: Story = { args: { name: "search", size: "sm" } };
export const Medium: Story = { args: { name: "search", size: "md" } };
export const Large: Story = { args: { name: "search", size: "lg" } };
export const Purple: Story = {
  args: { name: "bell", size: "lg", color: "#631DED" },
};
export const Orange: Story = {
  args: { name: "mail", size: "lg", color: "#FF6C01" },
};

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "16px",
      }}
    >
      {allIconNames.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "12px",
            border: "2px solid var(--drp-black, #121212)",
          }}
        >
          <Icon name={name} size="lg" />
          <span
            style={{
              fontFamily: "var(--drp-font-mono, monospace)",
              fontSize: "10px",
              textAlign: "center",
              color: "var(--drp-text-muted, #888)",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <div
          key={size}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Icon name="settings" size={size} />
          <span style={{ fontFamily: "monospace", fontSize: "10px" }}>
            {size} ({size === "sm" ? 16 : size === "md" ? 20 : 24}px)
          </span>
        </div>
      ))}
    </div>
  ),
};

export const DoctorProjectColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon name="dashboard" size="lg" color="#631DED" />
      <Icon name="analytics" size="lg" color="#FF6C01" />
      <Icon name="users" size="lg" color="#121212" />
      <Icon name="orders" size="lg" color="#98E9AB" />
      <Icon name="products" size="lg" color="#E99898" />
      <Icon name="settings" size="lg" color="#FAE8A4" />
      <Icon name="search" size="lg" color="#666666" />
    </div>
  ),
};
```

**Step 3: Create index.ts**

```ts
// packages/react/src/components/Icon/index.ts
export { Icon } from "./Icon";
export type { IconProps } from "./Icon";
```

**Step 4: Commit**

```bash
git add packages/react/src/components/Icon/
git commit -m "feat: add Icon component with 24 icons and stories"
```

---

## Task 4: Export Heading, Text, Icon from components/index.ts

**Files:**

- Modify: `packages/react/src/components/index.ts`

**Step 1: Add exports**

Add these three export blocks at the top of the exports section (before `Button`):

```ts
export { Heading } from "./Heading";
export type { HeadingProps } from "./Heading";

export { Text } from "./Text";
export type { TextProps } from "./Text";

export { Icon } from "./Icon";
export type { IconProps } from "./Icon";
```

**Step 2: Verify TypeScript**

```bash
cd packages/react && npx tsc --noEmit
```

Expected: no errors.

**Step 3: Commit**

```bash
git add packages/react/src/components/index.ts
git commit -m "feat: export Heading, Text, Icon from components index"
```

---

## Task 5: Augment Button — add iconLeft/iconRight props and 4 new stories

**Files:**

- Modify: `packages/react/src/components/Button/Button.tsx`
- Modify: `packages/react/src/components/Button/Button.stories.tsx`

**Step 1: Update Button.tsx**

Current Button.tsx has `icon?: boolean` but is missing `iconLeft` and `iconRight`. Add them:

Replace the interface:

```ts
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  icon?: boolean;
  children: ReactNode;
}
```

With:

```ts
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  /** Render as a square icon-only button */
  icon?: boolean;
  /** Icon element placed before the label */
  iconLeft?: ReactNode;
  /** Icon element placed after the label */
  iconRight?: ReactNode;
  children: ReactNode;
}
```

Replace the destructure:

```ts
export function Button({
  variant,
  size,
  block,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
```

With:

```ts
export function Button({
  variant,
  size,
  block,
  icon,
  iconLeft,
  iconRight,
  className = "",
  children,
  ...props
}: ButtonProps) {
```

Replace the return statement:

```tsx
return (
  <button className={classes} {...props}>
    {children}
  </button>
);
```

With:

```tsx
return (
  <button className={classes} {...props}>
    {iconLeft && <span className="drp-btn__icon">{iconLeft}</span>}
    {children}
    {iconRight && <span className="drp-btn__icon">{iconRight}</span>}
  </button>
);
```

**Step 2: Add 4 new stories to Button.stories.tsx**

First add inline icon components at the top of the file (after imports):

```tsx
const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3V13M3 8H13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1L10 6H15L11 9L12.5 14L8 11L3.5 14L5 9L1 6H6L8 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
    />
  </svg>
);
```

Then also update `argTypes` to include `icon: { control: "boolean" }`:

```ts
argTypes: {
  variant: { control: "select", options: [undefined, "primary", "outline", "ghost", "ghost-bordered", "danger", "secondary", "dark"] },
  size: { control: "select", options: [undefined, "sm", "lg"] },
  block: { control: "boolean" },
  icon: { control: "boolean" },
  disabled: { control: "boolean" },
},
```

Then append these 4 stories at the end of the file:

```tsx
/** Icon placed before label */
export const IconLeft: Story = {
  args: {
    variant: "primary",
    iconLeft: <PlusIcon />,
    children: "Create",
  },
};

/** Icon placed after label */
export const IconRight: Story = {
  args: {
    variant: "primary",
    iconRight: <ArrowRight />,
    children: "Next",
  },
};

/** Icon-only square button */
export const IconOnly: Story = {
  args: {
    variant: "outline",
    icon: true,
    children: <StarIcon />,
  },
};

/** Figma variants: Filled, Outline, Transparent */
export const FigmaVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <strong style={{ width: 100, fontSize: 12 }}>Filled:</strong>
        <Button variant="primary">Label</Button>
        <Button variant="primary" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="primary" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="primary" icon>
          <StarIcon />
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <strong style={{ width: 100, fontSize: 12 }}>Outline:</strong>
        <Button variant="outline">Label</Button>
        <Button variant="outline" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="outline" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="outline" icon>
          <StarIcon />
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <strong style={{ width: 100, fontSize: 12 }}>Transparent:</strong>
        <Button variant="ghost">Label</Button>
        <Button variant="ghost" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="ghost" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="ghost" icon>
          <StarIcon />
        </Button>
      </div>
    </div>
  ),
};
```

**Step 3: Commit**

```bash
git add packages/react/src/components/Button/
git commit -m "feat: add iconLeft/iconRight to Button and 4 new stories"
```

---

## Task 6: Augment Tag — add colors + legend/icon props + CSS + 10 new stories

**Files:**

- Modify: `packages/react/src/components/Tag/Tag.tsx`
- Modify: `packages/react/src/components/Tag/Tag.stories.tsx`
- Modify: `css/tags.css`

**Step 1: Update Tag.tsx**

Replace `TagColor` type:

```ts
type TagColor = "purple" | "mint" | "pink" | "yellow" | "grey";
```

With:

```ts
type TagColor =
  | "purple"
  | "mint"
  | "pink"
  | "yellow"
  | "grey"
  | "orange"
  | "light"
  | "teal"
  | "black";
```

Add `legend` and `icon` props to `TagProps` interface after `dot`:

```ts
  /** Alias for `dot` — show a leading legend dot */
  legend?: boolean;
  /** Icon element placed before the label */
  icon?: ReactNode;
```

Update the destructure:

```ts
export function Tag({
  children,
  color,
  filled,
  dark,
  dot,
  legend,
  icon,
  closeable,
  onClose,
  className = "",
}: TagProps) {
```

Add `showDot` and update classes:

```ts
const showDot = dot || legend;
const classes = [
  "drp-tag",
  color && `drp-tag--${color}`,
  filled && "drp-tag--filled",
  dark && "drp-tag--dark",
  showDot && "drp-tag--dot",
  closeable && "drp-tag--closeable",
  className,
]
  .filter(Boolean)
  .join(" ");
```

Update the return to render icon:

```tsx
return (
  <span className={classes}>
    {icon && <span className="drp-tag__icon">{icon}</span>}
    {children}
    {closeable && (
      <button className="drp-tag__close" onClick={onClose}>
        ×
      </button>
    )}
  </span>
);
```

**Step 2: Add CSS to css/tags.css**

Find the last color variant (e.g. `.drp-tag--grey`) and append after it:

```css
.drp-tag--orange {
  border-color: var(--drp-orange);
  color: var(--drp-orange-dark);
}

.drp-tag--light {
  border-color: #e8e8f0;
  color: var(--drp-grey);
  background: #f5f5fa;
}

.drp-tag--teal {
  border-color: #5fdcb3;
  color: #1a7a5a;
}

.drp-tag--black {
  border-color: var(--drp-black);
  color: var(--drp-black);
}
```

Find the filled variants section (`.drp-tag--filled.drp-tag--yellow`) and add after it:

```css
.drp-tag--filled.drp-tag--orange {
  background: var(--drp-orange);
  color: #ffffff;
  border-color: var(--drp-orange);
}

.drp-tag--filled.drp-tag--teal {
  background: #5fdcb3;
  color: #1a7a5a;
  border-color: #5fdcb3;
}

.drp-tag--filled.drp-tag--black {
  background: #000000;
  color: #ffffff;
  border-color: #000000;
}
```

Find the dot color variants section (`.drp-tag--dot.drp-tag--yellow::before`) and add after it:

```css
.drp-tag--dot.drp-tag--orange::before {
  background: var(--drp-orange);
}

.drp-tag--dot.drp-tag--teal::before {
  background: #5fdcb3;
}

.drp-tag--dot.drp-tag--black::before {
  background: var(--drp-black);
}
```

**Step 3: Add 10 new stories to Tag.stories.tsx**

First add inline icon components at the top (after imports):

```tsx
const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 7L6 10L11 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1L8.7 5.2H13L9.5 7.8L10.8 12L7 9.4L3.2 12L4.5 7.8L1 5.2H5.3L7 1Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
    />
  </svg>
);
```

Update `argTypes.color` options to include new colors:

```ts
color: {
  control: "select",
  options: [undefined, "purple", "mint", "pink", "yellow", "grey", "orange", "light", "teal", "black"],
},
```

Add these stories after the existing ones (before `AllVariants`):

```tsx
export const Orange: Story = { args: { children: "Warning", color: "orange" } };
export const Teal: Story = { args: { children: "Teal", color: "teal" } };
export const Light: Story = { args: { children: "Light", color: "light" } };
export const Black: Story = { args: { children: "Black", color: "black" } };

export const WithLegend: Story = {
  args: { children: "Legend", color: "orange", legend: true },
};
export const WithIcon: Story = {
  args: { children: "Verified", color: "mint", icon: <CheckIcon /> },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag>Default</Tag>
      <Tag color="black">Black</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="mint">Mint</Tag>
      <Tag color="teal">Teal</Tag>
      <Tag color="pink">Pink</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="orange">Orange</Tag>
      <Tag color="grey">Grey</Tag>
      <Tag color="light">Light</Tag>
    </div>
  ),
};

export const AllColorsFilled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag filled>Default</Tag>
      <Tag color="black" filled>
        Black
      </Tag>
      <Tag color="purple" filled>
        Purple
      </Tag>
      <Tag color="mint" filled>
        Mint
      </Tag>
      <Tag color="teal" filled>
        Teal
      </Tag>
      <Tag color="pink" filled>
        Pink
      </Tag>
      <Tag color="yellow" filled>
        Yellow
      </Tag>
      <Tag color="orange" filled>
        Orange
      </Tag>
    </div>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag icon={<CheckIcon />} color="mint">
        Verified
      </Tag>
      <Tag icon={<StarIcon />} color="yellow">
        Featured
      </Tag>
      <Tag icon={<CheckIcon />} color="purple" filled>
        Approved
      </Tag>
      <Tag icon={<StarIcon />} color="orange">
        Popular
      </Tag>
    </div>
  ),
};

export const LegendVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag legend color="mint">
        Active
      </Tag>
      <Tag legend color="pink">
        Error
      </Tag>
      <Tag legend color="yellow">
        Pending
      </Tag>
      <Tag legend color="orange">
        Warning
      </Tag>
      <Tag legend color="purple">
        Info
      </Tag>
      <Tag legend color="teal">
        Processing
      </Tag>
    </div>
  ),
};
```

**Step 4: Commit**

```bash
git add packages/react/src/components/Tag/ css/tags.css
git commit -m "feat: add orange/teal/light/black Tag colors, legend/icon props, and stories"
```

---

## Task 7: Augment Select — add error/success props + CSS + 3 new stories

**Files:**

- Modify: `packages/react/src/components/Select/Select.tsx`
- Modify: `packages/react/src/components/Select/Select.stories.tsx`
- Modify: `css/forms.css`

**Step 1: Update Select.tsx**

Add `error` and `success` to `SelectProps`:

```ts
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  children: ReactNode;
}
```

Update destructure and class generation:

```ts
export function Select({
  label,
  error,
  success,
  className = "",
  children,
  ...props
}: SelectProps) {
  const selectEl = (
    <select
      className={[
        "drp-select",
        error && "drp-select--error",
        success && "drp-select--success",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </select>
  );
```

**Step 2: Add CSS to css/forms.css**

Find `.drp-select:disabled` and add after the select section:

```css
/* Select — Error state */
.drp-select--error {
  border-color: var(--drp-pink);
  background-color: #fff0f0;
}

.drp-select--error:focus {
  box-shadow: 3px 3px 0 0 var(--drp-pink);
}

/* Select — Success state */
.drp-select--success {
  border-color: var(--drp-mint);
  background-color: #f0fff0;
}

.drp-select--success:focus {
  box-shadow: 3px 3px 0 0 var(--drp-mint);
}
```

**Step 3: Add 3 new stories to Select.stories.tsx**

Add at the end of the file:

```tsx
/** Error state with red border */
export const Error: Story = {
  args: { label: "Role", error: true, children: roleOptions },
};

/** Success state with green border */
export const Success: Story = {
  args: { label: "Role", success: true, children: roleOptions },
};

/** All validation states side by side */
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Select label="Default">{roleOptions}</Select>
      <Select label="Error" error>
        {roleOptions}
      </Select>
      <Select label="Success" success>
        {roleOptions}
      </Select>
      <Select label="Disabled" disabled>
        <option>Cannot change</option>
      </Select>
    </div>
  ),
};
```

Note: The `roleOptions` variable already exists in the current stories file — reference it, don't redeclare.

**Step 4: Commit**

```bash
git add packages/react/src/components/Select/ css/forms.css
git commit -m "feat: add error/success states to Select and stories"
```

---

## Task 8: Augment Radio — add error prop + CSS + 2 new stories

**Files:**

- Modify: `packages/react/src/components/Radio/Radio.tsx`
- Modify: `packages/react/src/components/Radio/Radio.stories.tsx`
- Modify: `css/forms.css`

**Step 1: Update Radio.tsx**

Add `error` to `RadioProps`:

```ts
export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  color?: "pink" | "purple";
  dark?: boolean;
  error?: boolean;
}
```

Add to destructure and class generation:

```ts
export function Radio({
  label,
  color,
  dark,
  error,
  className = "",
  ...props
}: RadioProps) {
  const classes = [
    "drp-radio",
    color && `drp-radio--${color}`,
    dark && "drp-radio--dark",
    error && "drp-radio--error",
    className,
  ]
    .filter(Boolean)
    .join(" ");
```

**Step 2: Add CSS to css/forms.css**

Find the end of the `.drp-radio` section and add:

```css
/* Error variant */
.drp-radio--error input[type="radio"] {
  border-color: var(--drp-pink);
}

.drp-radio--error {
  color: var(--drp-error-dark);
}
```

**Step 3: Add 2 new stories to Radio.stories.tsx**

Add at the end of the file:

```tsx
export const Error: Story = {
  args: { label: "Invalid selection", name: "error", error: true },
};

/** Error state within a group */
export const GroupWithError: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Radio name="plan-err" label="Free" error />
      <Radio name="plan-err" label="Pro" error />
      <Radio name="plan-err" label="Enterprise" error />
      <span style={{ fontSize: 12, color: "var(--drp-error-dark)" }}>
        Please select a plan
      </span>
    </div>
  ),
};
```

**Step 4: Commit**

```bash
git add packages/react/src/components/Radio/ css/forms.css
git commit -m "feat: add error state to Radio and stories"
```

---

## Task 9: Copy banking.ts data file

**Files:**

- Create: `packages/react/src/data/banking.ts` (copy from bruddle)

**Step 1: Check if src/data/ directory exists**

```bash
ls packages/react/src/data/ 2>/dev/null || echo "missing"
```

If missing, the directory needs to be created as part of copying the file.

**Step 2: Copy banking.ts**

```bash
cp /Users/y/Desktop/bruddle-react/src/data/banking.ts \
   /Users/y/Desktop/doctor-project-design-system/packages/react/src/data/banking.ts
```

**Step 3: Verify no bru- references**

```bash
grep "bru-\|--bru-" packages/react/src/data/banking.ts
```

The banking.ts file uses `@faker-js/faker` — verify faker is in package.json:

```bash
grep "faker" packages/react/package.json
```

If missing, install it:

```bash
cd packages/react && npm install @faker-js/faker
```

**Step 4: Commit**

```bash
git add packages/react/src/data/banking.ts packages/react/package.json
git commit -m "feat: add banking.ts data file for layout stories"
```

---

## Task 10: Port 7 layout stories

**Files:**

- Create: `packages/react/src/components/Layout/Accounts.stories.tsx`
- Create: `packages/react/src/components/Layout/Payments.stories.tsx`
- Create: `packages/react/src/components/Layout/Reports.stories.tsx`
- Create: `packages/react/src/components/Layout/Transactions.stories.tsx`
- Create: `packages/react/src/components/Layout/ProfileSettings.stories.tsx`
- Create: `packages/react/src/components/Layout/Education.stories.tsx`
- Create: `packages/react/src/components/Layout/Support.stories.tsx`

**Step 1: Copy all 7 files**

```bash
for f in Accounts Payments Reports Transactions ProfileSettings Education Support; do
  cp /Users/y/Desktop/bruddle-react/src/components/Layout/${f}.stories.tsx \
     /Users/y/Desktop/doctor-project-design-system/packages/react/src/components/Layout/${f}.stories.tsx
done
```

**Step 2: Fix bru- → drp- in all 7 files**

```bash
cd /Users/y/Desktop/doctor-project-design-system
for f in Accounts Payments Reports Transactions ProfileSettings Education Support; do
  sed -i '' 's/bru-/drp-/g; s/--bru-/--drp-/g' \
    packages/react/src/components/Layout/${f}.stories.tsx
done
```

**Step 3: Fix import paths**

All 7 files import from `../../data/banking` — that path is correct for files in `Layout/` (goes up to `src/`, then into `data/`). ✓

All 7 files import `{ AppShell, Sidebar, Topbar }` from `./Layout`.

In doctor-project's `Layout/Layout.tsx`, all three are exported: `AppShell`, `Sidebar`, `Topbar`. ✓

Check for any other bruddle-specific imports:

```bash
grep "from \"\.\." packages/react/src/components/Layout/Accounts.stories.tsx | head -20
```

Typical imports are from `../Card/Card`, `../Table/Table`, `../Badge/Badge` etc. — all exist in doctor-project. No fixes needed.

**Step 4: Verify no remaining bru- references**

```bash
grep -rn "bru-\|--bru-\|from.*bruddle" packages/react/src/components/Layout/*.stories.tsx | grep -v Dashboard
```

Expected: no output.

**Step 5: TypeScript check**

```bash
cd packages/react && npx tsc --noEmit
```

Expected: no errors.

**Step 6: Commit**

```bash
git add packages/react/src/components/Layout/
git commit -m "feat: port 7 layout stories from bruddle (Accounts, Payments, Reports, Transactions, ProfileSettings, Education, Support)"
```

---

## Final Verification

**Run Storybook and check story count:**

```bash
cd packages/react && npm run storybook -- --port 3020
```

Open http://localhost:3020 and verify:

- `Components/Heading` appears with 8 stories
- `Components/Text` appears with 12 stories
- `Components/Icon` appears with 8 stories
- `Components/Button` has `IconLeft`, `IconRight`, `IconOnly`, `FigmaVariants`
- `Components/Tag` has `Orange`, `Teal`, `Light`, `Black`, `WithLegend`, `WithIcon`, `AllColors`, `AllColorsFilled`, `IconVariants`, `LegendVariants`
- `Components/Select` has `Error`, `Success`, `ValidationStates`
- `Components/Radio` has `Error`, `GroupWithError`
- `Pages/Accounts`, `Pages/Payments`, `Pages/Reports`, `Pages/Transactions`, `Pages/ProfileSettings`, `Pages/Education`, `Pages/Support` all load

**TypeScript clean build:**

```bash
cd packages/react && npm run build
```

Expected: zero TypeScript errors.

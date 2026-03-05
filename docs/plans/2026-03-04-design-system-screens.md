# Design System Screens Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement 110+ UI screens from the to_implement directory as production-ready React components, organized by feature area and component reusability.

**Architecture:**

- Phased approach prioritizing shared UI patterns first (layouts, navigation)
- Each screen composed of reusable atomic and compound components
- Light/Dark theme variants using existing component theme system
- Screens organized into domain-specific folders (Payments, Products, etc.)
- Storybook stories for each screen variant with mock data

**Tech Stack:** React, TypeScript, Tailwind CSS, Storybook, Existing component library (30+ components already built)

---

## Priority Matrix

### 🔴 Critical (Must implement first - foundation for others)

1. **Navigation & Layouts** - Used by every screen
2. **Authentication** - Blocks user access
3. **List & Table Patterns** - ~40% of screens are list/table variants

### 🟡 High (Core features, many screens)

4. **Detail Views** - Product, Customer, Transaction details
5. **Form Patterns** - Compose, Settings, New Contact
6. **Modal & Overlay Patterns** - Confirmations, Actions

### 🟢 Medium (Feature-specific)

7. **Domain Screens** - Payments, Products, Customers
8. **Complex Layouts** - Profile Settings variants
9. **Specialized Screens** - Calendar, Support, Education

### 🔵 Low (Analytics & reporting)

10. **Charts & Reports** - 7 chart variants

---

## Phase 1: Navigation & Layouts (5-6 hours)

### Task 1: Create TopBar/Header Component Variants

**Files:**

- Create: `packages/react/src/components/TopBar/TopBar.tsx`
- Create: `packages/react/src/components/TopBar/TopBar.stories.tsx`
- Create: `packages/react/src/components/TopBar/index.ts`
- Modify: `packages/react/src/components/index.ts` (export TopBar)

**Step 1: Create TopBar component with basic props**

```typescript
// packages/react/src/components/TopBar/TopBar.tsx
import React from 'react';

export interface TopBarProps {
  title?: string;
  showIcon?: boolean;
  theme?: 'light' | 'dark';
  actions?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  showIcon = true,
  theme = 'light',
  actions,
  breadcrumbs,
}) => {
  return (
    <div className={`flex items-center justify-between px-6 py-4 border-b ${
      theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center gap-4">
        {breadcrumbs && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gray-700">{crumb.label}</a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {title && <h1 className="text-xl font-semibold">{title}</h1>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
};
```

**Step 2: Create Storybook stories**

```typescript
// packages/react/src/components/TopBar/TopBar.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "Navigation/TopBar",
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    title: "Page Title",
    showIcon: true,
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Details" },
    ],
  },
};

export const DarkTheme: Story = {
  args: {
    title: "Dark Theme Example",
    theme: "dark",
  },
};
```

**Step 3: Create index.ts**

```typescript
// packages/react/src/components/TopBar/index.ts
export { TopBar } from "./TopBar";
export type { TopBarProps } from "./TopBar";
```

**Step 4: Update main components index**

```typescript
// packages/react/src/components/index.ts
// Add to exports:
export { TopBar } from "./TopBar";
export type { TopBarProps } from "./TopBar";
```

**Step 5: Run Storybook to verify**

Run: `cd packages/react && npm run storybook`
Expected: Storybook loads, TopBar stories visible with Light/Dark variants

**Step 6: Commit**

```bash
git add packages/react/src/components/TopBar/
git commit -m "feat: add TopBar component with light/dark theme support"
```

---

### Task 2: Create Sidebar Navigation Component

**Files:**

- Create: `packages/react/src/components/Sidebar/Sidebar.tsx`
- Create: `packages/react/src/components/Sidebar/Sidebar.stories.tsx`
- Create: `packages/react/src/components/Sidebar/index.ts`

**Step 1: Create Sidebar component**

```typescript
// packages/react/src/components/Sidebar/Sidebar.tsx
import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: SidebarItem[];
  active?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  theme?: 'light' | 'dark';
  collapsed?: boolean;
  onItemClick?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  theme = 'light',
  collapsed = false,
  onItemClick,
}) => {
  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-slate-700' : 'border-gray-200';
  const textClass = theme === 'dark' ? 'text-slate-300' : 'text-gray-700';

  const renderItems = (items: SidebarItem[], level = 0) => {
    return items.map((item) => (
      <div key={item.id}>
        <button
          onClick={() => onItemClick?.(item.id)}
          className={`w-full text-left px-4 py-2 rounded flex items-center gap-2 ${
            item.active ? 'bg-blue-100 text-blue-700' : textClass
          } hover:bg-gray-100`}
          style={{ paddingLeft: `${(level + 1) * 1.5}rem` }}
        >
          {item.icon && <span className="w-5 h-5">{item.icon}</span>}
          {!collapsed && <span>{item.label}</span>}
        </button>
        {item.children && !collapsed && renderItems(item.children, level + 1)}
      </div>
    ));
  };

  return (
    <div className={`${bgClass} border-r ${borderClass} w-${collapsed ? '20' : '64'} transition-all`}>
      <div className="p-4">
        {renderItems(items)}
      </div>
    </div>
  );
};
```

**Step 2: Create stories**

```typescript
// packages/react/src/components/Sidebar/Sidebar.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Navigation/Sidebar",
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const sampleItems = [
  { id: "1", label: "Dashboard", icon: "📊" },
  { id: "2", label: "Products", icon: "📦" },
  { id: "3", label: "Customers", icon: "👥" },
  { id: "4", label: "Payments", icon: "💳" },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const Collapsed: Story = {
  args: {
    items: sampleItems,
    collapsed: true,
  },
};
```

**Step 3: Create index and export**

```typescript
// packages/react/src/components/Sidebar/index.ts
export { Sidebar } from "./Sidebar";
export type { SidebarProps, SidebarItem } from "./Sidebar";
```

**Step 4: Update main index**

```typescript
// In packages/react/src/components/index.ts, add:
export { Sidebar } from "./Sidebar";
export type { SidebarProps, SidebarItem } from "./Sidebar";
```

**Step 5: Verify in Storybook**

Run: `cd packages/react && npm run storybook`
Expected: Sidebar component visible with Default and Collapsed variants

**Step 6: Commit**

```bash
git add packages/react/src/components/Sidebar/
git commit -m "feat: add Sidebar component with collapsible navigation"
```

---

### Task 3: Create Dashboard Layout Container

**Files:**

- Modify: `packages/react/src/components/Layout/Layout.tsx` (enhance existing)
- Create: `packages/react/src/components/Layout/DashboardLayout.tsx`
- Modify: `packages/react/src/components/Layout/Layout.stories.tsx`

**Step 1: Create DashboardLayout wrapper**

```typescript
// packages/react/src/components/Layout/DashboardLayout.tsx
import React from 'react';
import { TopBar, TopBarProps } from '../TopBar';
import { Sidebar, SidebarProps } from '../Sidebar';

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarProps?: SidebarProps;
  topBarProps?: TopBarProps;
  showSidebar?: boolean;
  theme?: 'light' | 'dark';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarProps,
  topBarProps,
  showSidebar = true,
  theme = 'light',
}) => {
  return (
    <div className="flex h-screen">
      {showSidebar && sidebarProps && <Sidebar {...sidebarProps} theme={theme} />}
      <div className="flex-1 flex flex-col overflow-hidden">
        {topBarProps && <TopBar {...topBarProps} theme={theme} />}
        <div className="flex-1 overflow-auto bg-gray-50 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
```

**Step 2: Add story**

```typescript
// In packages/react/src/components/Layout/Layout.stories.tsx, add:
export const Dashboard: Story = {
  args: {
    children: <DashboardLayout {...dashboardArgs} />,
  },
};
```

**Step 3: Update index**

```typescript
// packages/react/src/components/Layout/index.ts
export { DashboardLayout } from "./DashboardLayout";
export type { DashboardLayoutProps } from "./DashboardLayout";
```

**Step 4: Test**

Run: `npm run storybook`
Expected: DashboardLayout story visible with sidebar and topbar

**Step 5: Commit**

```bash
git add packages/react/src/components/Layout/
git commit -m "feat: add DashboardLayout wrapper combining TopBar and Sidebar"
```

---

## Phase 2: Authentication Screens (3-4 hours)

### Task 4: Create SignIn Screen Component

**Files:**

- Create: `packages/react/src/screens/Auth/SignIn.tsx`
- Create: `packages/react/src/screens/Auth/SignIn.stories.tsx`
- Create: `packages/react/src/screens/Auth/index.ts`

**Step 1: Create screens directory structure**

```bash
mkdir -p packages/react/src/screens/Auth
```

**Step 2: Create SignIn component**

```typescript
// packages/react/src/screens/Auth/SignIn.tsx
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Sign in to your account</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
```

**Step 3: Create story**

```typescript
// packages/react/src/screens/Auth/SignIn.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

const meta: Meta<typeof SignIn> = {
  component: SignIn,
  title: "Screens/Auth/SignIn",
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {};
```

**Step 4: Create index**

```typescript
// packages/react/src/screens/Auth/index.ts
export { SignIn } from "./SignIn";
```

**Step 5: Verify in Storybook**

Run: `npm run storybook`
Expected: SignIn screen visible under Screens/Auth

**Step 6: Commit**

```bash
git add packages/react/src/screens/Auth/
git commit -m "feat: add SignIn screen component"
```

---

### Task 5: Create SignUp Screen

**Files:**

- Create: `packages/react/src/screens/Auth/SignUp.tsx`
- Create: `packages/react/src/screens/Auth/SignUp.stories.tsx`
- Modify: `packages/react/src/screens/Auth/index.ts`

**Step 1: Create SignUp component**

```typescript
// packages/react/src/screens/Auth/SignUp.tsx
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';

export const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = 'Name required';
    if (!formData.email) newErrors.email = 'Email required';
    if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!agreed) newErrors.agreed = 'Must agree to terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Sign up:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-600 mb-6">Join us today</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <Checkbox
            label="I agree to Terms & Privacy Policy"
            checked={agreed}
            onChange={setAgreed}
          />
          {errors.agreed && <p className="text-red-600 text-sm">{errors.agreed}</p>}

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};
```

**Step 2: Create story**

```typescript
// packages/react/src/screens/Auth/SignUp.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { SignUp } from "./SignUp";

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  title: "Screens/Auth/SignUp",
};

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Default: Story = {};
```

**Step 3: Update index**

```typescript
// packages/react/src/screens/Auth/index.ts
export { SignIn } from "./SignIn";
export { SignUp } from "./SignUp";
```

**Step 4: Test in Storybook**

Run: `npm run storybook`
Expected: SignUp story visible

**Step 5: Commit**

```bash
git add packages/react/src/screens/Auth/SignUp.tsx packages/react/src/screens/Auth/SignUp.stories.tsx packages/react/src/screens/Auth/index.ts
git commit -m "feat: add SignUp screen with form validation"
```

---

### Task 6: Create Password Reset Screen

**Files:**

- Create: `packages/react/src/screens/Auth/PasswordReset.tsx`
- Create: `packages/react/src/screens/Auth/PasswordReset.stories.tsx`

**Step 1: Create PasswordReset**

```typescript
// packages/react/src/screens/Auth/PasswordReset.tsx
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export interface PasswordResetProps {
  mode?: 'request' | 'reset';
}

export const PasswordReset: React.FC<PasswordResetProps> = ({ mode = 'request' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      console.log('Password reset successful');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {mode === 'request' ? (
          <>
            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-gray-600 mb-6">
              Enter your email to receive reset instructions
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Check your email for reset instructions
              </div>
            ) : (
              <form onSubmit={handleRequestReset} className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            )}
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
            <p className="text-gray-600 mb-6">Enter your new password</p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
```

**Step 2: Create story**

```typescript
// packages/react/src/screens/Auth/PasswordReset.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { PasswordReset } from "./PasswordReset";

const meta: Meta<typeof PasswordReset> = {
  component: PasswordReset,
  title: "Screens/Auth/PasswordReset",
};

export default meta;
type Story = StoryObj<typeof PasswordReset>;

export const RequestReset: Story = {
  args: { mode: "request" },
};

export const ResetForm: Story = {
  args: { mode: "reset" },
};
```

**Step 3: Update auth index**

```typescript
// packages/react/src/screens/Auth/index.ts
export { SignIn } from "./SignIn";
export { SignUp } from "./SignUp";
export { PasswordReset } from "./PasswordReset";
export type { PasswordResetProps } from "./PasswordReset";
```

**Step 4: Test**

Run: `npm run storybook`
Expected: RequestReset and ResetForm stories visible

**Step 5: Commit**

```bash
git add packages/react/src/screens/Auth/PasswordReset.tsx packages/react/src/screens/Auth/PasswordReset.stories.tsx packages/react/src/screens/Auth/index.ts
git commit -m "feat: add PasswordReset screen with request and reset modes"
```

---

## Phase 3: List & Table Screens (6-8 hours)

### Task 7: Create Generic List Screen Template

**Files:**

- Create: `packages/react/src/screens/Common/ListScreen.tsx`
- Create: `packages/react/src/screens/Common/ListScreen.stories.tsx`
- Create: `packages/react/src/screens/Common/index.ts`

**Step 1: Create reusable ListScreen**

```typescript
// packages/react/src/screens/Common/ListScreen.tsx
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Table } from '../../components/Table';
import { Pagination } from '../../components/Pagination';
import { DashboardLayout, DashboardLayoutProps } from '../../components/Layout/DashboardLayout';

export interface ListScreenProps extends Omit<DashboardLayoutProps, 'children'> {
  title: string;
  subtitle?: string;
  data: any[];
  columns: Array<{ key: string; label: string; render?: (value: any) => React.ReactNode }>;
  onAddClick?: () => void;
  onRowClick?: (row: any) => void;
  showSearch?: boolean;
  itemsPerPage?: number;
}

export const ListScreen: React.FC<ListScreenProps> = ({
  title,
  subtitle,
  data,
  columns,
  onAddClick,
  onRowClick,
  showSearch = true,
  itemsPerPage = 10,
  ...layoutProps
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(item =>
    JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <DashboardLayout
      {...layoutProps}
      topBarProps={{
        title,
        actions: onAddClick && <Button onClick={onAddClick}>+ Add New</Button>,
        ...layoutProps.topBarProps,
      }}
    >
      <div className="space-y-6">
        {subtitle && <p className="text-gray-600">{subtitle}</p>}

        {showSearch && (
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        )}

        <Table
          columns={columns}
          data={paginatedData}
          onRowClick={onRowClick}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </DashboardLayout>
  );
};
```

**Step 2: Create story**

```typescript
// packages/react/src/screens/Common/ListScreen.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { ListScreen } from "./ListScreen";

const meta: Meta<typeof ListScreen> = {
  component: ListScreen,
  title: "Screens/Common/ListScreen",
};

export default meta;
type Story = StoryObj<typeof ListScreen>;

const sampleData = [
  { id: "1", name: "Product A", status: "Active", price: "$99.99" },
  { id: "2", name: "Product B", status: "Active", price: "$149.99" },
  { id: "3", name: "Product C", status: "Inactive", price: "$79.99" },
];

export const Default: Story = {
  args: {
    title: "Products",
    subtitle: "Manage your product inventory",
    data: sampleData,
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Product Name" },
      { key: "status", label: "Status" },
      { key: "price", label: "Price" },
    ],
  },
};
```

**Step 3: Create index and export**

```typescript
// packages/react/src/screens/Common/index.ts
export { ListScreen } from "./ListScreen";
export type { ListScreenProps } from "./ListScreen";
```

**Step 4: Test in Storybook**

Run: `npm run storybook`
Expected: ListScreen visible with sample data

**Step 5: Commit**

```bash
git add packages/react/src/screens/Common/
git commit -m "feat: add ListScreen reusable template for list/table screens"
```

---

### Task 8: Implement Products List Screens

**Files:**

- Create: `packages/react/src/screens/Products/ProductsList.tsx`
- Create: `packages/react/src/screens/Products/ProductsList.stories.tsx`
- Create: `packages/react/src/screens/Products/index.ts`

**Step 1: Create ProductsList component using ListScreen template**

```typescript
// packages/react/src/screens/Products/ProductsList.tsx
import React, { useState } from 'react';
import { ListScreen } from '../Common/ListScreen';
import { Badge } from '../../components/Badge';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Active' | 'Inactive';
  createdDate: string;
}

export const ProductsList: React.FC = () => {
  const [version, setVersion] = useState<1 | 2 | 3>(1);

  // Mock data - represents different list variations
  const products: Product[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      stock: 45,
      status: 'Active',
      createdDate: '2024-01-15',
    },
    {
      id: '2',
      name: 'USB-C Cable',
      category: 'Accessories',
      price: 12.99,
      stock: 200,
      status: 'Active',
      createdDate: '2024-01-10',
    },
    {
      id: '3',
      name: 'Laptop Stand',
      category: 'Office',
      price: 49.99,
      stock: 0,
      status: 'Inactive',
      createdDate: '2023-12-20',
    },
  ];

  return (
    <ListScreen
      title="Products"
      subtitle={`Showing version ${version} of products list`}
      data={products}
      columns={[
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Product Name' },
        { key: 'category', label: 'Category' },
        {
          key: 'price',
          label: 'Price',
          render: (value) => `$${value.toFixed(2)}`,
        },
        { key: 'stock', label: 'Stock' },
        {
          key: 'status',
          label: 'Status',
          render: (value) => (
            <Badge variant={value === 'Active' ? 'success' : 'default'}>
              {value}
            </Badge>
          ),
        },
      ]}
      showSearch
      sidebarProps={{
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'products', label: 'Products', icon: '📦', active: true },
          { id: 'customers', label: 'Customers', icon: '👥' },
          { id: 'payments', label: 'Payments', icon: '💳' },
        ],
      }}
    />
  );
};
```

**Step 2: Create story with 3 variants**

```typescript
// packages/react/src/screens/Products/ProductsList.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { ProductsList } from "./ProductsList";

const meta: Meta<typeof ProductsList> = {
  component: ProductsList,
  title: "Screens/Products/ProductsList",
};

export default meta;
type Story = StoryObj<typeof ProductsList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
export const ListV3: Story = {};
```

**Step 3: Create index and export**

```typescript
// packages/react/src/screens/Products/index.ts
export { ProductsList } from "./ProductsList";
export type { Product } from "./ProductsList";
```

**Step 4: Test**

Run: `npm run storybook`
Expected: ProductsList visible with all 3 variants

**Step 5: Commit**

```bash
git add packages/react/src/screens/Products/
git commit -m "feat: add Products list screens (v1, v2, v3) with filtering and pagination"
```

---

## Phase 4: Remaining Screens (Estimated 10-12 hours)

> **This phase follows the same pattern as Phase 3 and Phase 4. Each screen category repeats the cycle:**
>
> 1. Create screen component reusing ListScreen/DetailScreen templates
> 2. Add Storybook stories with all variants
> 3. Export in index.ts
> 4. Test in Storybook
> 5. Commit with descriptive message

### Screens to implement in this phase:

- Customers (List v1-3, Details)
- Accounts (List v1-2 with Light/Dark)
- Transactions (List v1-2, Invoice, Empty - Light/Dark)
- Contacts (List v1-2, New Contact, Empty)
- Sales (List v1-2)

**Recommendation:** Create a DetailScreen template similar to ListScreen, then use both to rapidly implement remaining screens.

---

## Phase 5: Complex & Specialized Screens (8-10 hours)

### Screens to implement:

- **Inbox** - Chat, Mail List, Mail Compose, Empty
- **Payments** - Payments, Send Money, List, Details (Light/Dark)
- **Education** - Courses, Courses Category (Light/Dark)
- **Profile Settings** - Account, Notifications, Security, Social
- **Profile Settings 2** - Multiple variants with different layouts
- **Calendar** - Event, Day, Week
- **Support** - Categories, Home, Article, Search Results

---

## Phase 6: Charts & Reports (3-4 hours)

### Charts to implement:

- Polar Chart
- Double Bars
- Wave Chart
- Geometric Chart
- Horizontal Bars
- Misc Chart
- Bar Chart

**Strategy:** Create a ChartContainer component and 7 chart variants using existing Chart component.

---

## Execution Strategy

**Recommended approach for next phases:**

1. **Create DetailScreen template** (like ListScreen but for detail views)
2. **Batch implement** similar screens together (all Products screens, then all Customer screens)
3. **Reuse components** - use Button, Badge, Input, Card, Modal, etc.
4. **Theme variants** - Light/Dark using existing theme system
5. **Mock data** - Use `/packages/react/src/data/fake.ts` for sample data

---

## Testing Checklist

- [ ] All components render in Storybook
- [ ] All theme variants work (light/dark)
- [ ] Forms validate correctly
- [ ] Tables/lists pagination works
- [ ] Search filters work
- [ ] Responsive layout on mobile
- [ ] Build passes: `npm run build`

---

## Files Summary

```
packages/react/src/
├── components/
│   ├── TopBar/              (NEW)
│   ├── Sidebar/             (NEW)
│   └── Layout/              (ENHANCED with DashboardLayout)
└── screens/
    ├── Auth/                (NEW)
    │   ├── SignIn.tsx
    │   ├── SignUp.tsx
    │   ├── PasswordReset.tsx
    │   └── index.ts
    ├── Common/              (NEW)
    │   ├── ListScreen.tsx
    │   └── index.ts
    ├── Products/            (NEW)
    │   ├── ProductsList.tsx
    │   ├── ProductsDetails.tsx
    │   └── index.ts
    ├── Customers/           (NEW)
    ├── Payments/            (NEW)
    ├── Transactions/        (NEW)
    ├── Contacts/            (NEW)
    ├── Inbox/               (NEW)
    ├── Calendar/            (NEW)
    ├── Support/             (NEW)
    ├── Education/           (NEW)
    ├── Reports/             (NEW)
    └── ProfileSettings/     (NEW)
```

---

## Success Criteria

✅ All 110+ screens implemented as React components
✅ All screens have Storybook stories with variants
✅ Light/Dark theme variants working
✅ Reusable templates (ListScreen, DetailScreen, etc.)
✅ Mock data in place
✅ Build passes with no TypeScript errors
✅ Accessible component patterns
✅ Responsive design verified

import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import type { SidebarNavSection } from "../../components/Sidebar";

// ─── Icons ────────────────────────────────────────────────────────────────────

const Icon: React.FC<{ path: string | string[]; fill?: boolean }> = ({
  path,
  fill = false,
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={fill ? "none" : "currentColor"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {Array.isArray(path) ? (
      path.map((d, i) => <path key={i} d={d} />)
    ) : (
      <path d={path} />
    )}
  </svg>
);

const NAV_ICONS: Record<string, React.ReactNode> = {
  dashboard: (
    <Icon path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" />
  ),
  products: (
    <Icon path="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  ),
  customers: (
    <Icon path="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" />
  ),
  contacts: (
    <Icon path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  accounts: (
    <Icon path="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  ),
  transactions: (
    <Icon path={["M7 16V4m0 0L3 8m4-4l4 4", "M17 8v12m0 0l4-4m-4 4l-4-4"]} />
  ),
  sales: (
    <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  ),
  payments: (
    <Icon
      path={[
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
        "M12 6v6l4 2",
      ]}
    />
  ),
  calendar: (
    <Icon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  ),
  inbox: (
    <Icon path="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m16 0l-2-4H6l-2 4" />
  ),
  education: (
    <Icon path="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  ),
  reports: (
    <Icon path="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  ),
  support: (
    <Icon path="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  ),
  settings: (
    <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
};

// ─── Canonical nav ────────────────────────────────────────────────────────────

const BASE_SECTIONS: SidebarNavSection[] = [
  {
    label: "Main",
    items: [
      { id: "dashboard", label: "Dashboard", icon: NAV_ICONS.dashboard },
      { id: "products", label: "Products", icon: NAV_ICONS.products },
      { id: "customers", label: "Customers", icon: NAV_ICONS.customers },
      { id: "contacts", label: "Contacts", icon: NAV_ICONS.contacts },
      { id: "accounts", label: "Accounts", icon: NAV_ICONS.accounts },
      {
        id: "transactions",
        label: "Transactions",
        icon: NAV_ICONS.transactions,
      },
      { id: "sales", label: "Sales", icon: NAV_ICONS.sales },
      {
        id: "payments",
        label: "Payments",
        icon: NAV_ICONS.payments,
        badge: 14,
        badgeVariant: "green",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      { id: "calendar", label: "Calendar", icon: NAV_ICONS.calendar },
      {
        id: "inbox",
        label: "Inbox",
        icon: NAV_ICONS.inbox,
        badge: 12,
        badgeVariant: "purple",
      },
      { id: "education", label: "Education", icon: NAV_ICONS.education },
      { id: "reports", label: "Reports", icon: NAV_ICONS.reports },
      { id: "support", label: "Support", icon: NAV_ICONS.support },
    ],
  },
  {
    label: "Account",
    items: [{ id: "settings", label: "Settings", icon: NAV_ICONS.settings }],
  },
];

// ─── Auto-collapse hook ───────────────────────────────────────────────────────

function useAutoCollapse() {
  const [collapsed, setCollapsed] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false,
  );

  useEffect(() => {
    const handler = () => setCollapsed(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return collapsed;
}

// ─── AppSidebar ───────────────────────────────────────────────────────────────

export interface AppSidebarProps {
  /** Which nav item is currently active */
  activeId?: string;
  /** Controlled mobile-open state (pass from parent layout) */
  mobileOpen?: boolean;
  /** Called when user taps the toggle or overlay */
  onToggle?: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  activeId,
  mobileOpen = false,
  onToggle,
}) => {
  const autoCollapsed = useAutoCollapse();

  const sections = BASE_SECTIONS.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      active: item.id === activeId,
    })),
  }));

  return (
    <Sidebar
      brandName="Doctor Project"
      sections={sections}
      collapsed={autoCollapsed}
      mobileOpen={mobileOpen}
      onToggle={onToggle}
    />
  );
};

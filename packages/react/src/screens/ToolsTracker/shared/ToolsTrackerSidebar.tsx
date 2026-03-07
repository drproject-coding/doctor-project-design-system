import React from "react";
import { Icon } from "../../../components/Icon/Icon";

export type TTNavId =
  | "dashboard"
  | "analytics"
  | "reports"
  | "transactions"
  | "products"
  | "appsumo-catalog"
  | "admin-panel"
  | "import"
  | "logs"
  | "sync-jobs"
  | "settings";

export interface TTDataStatus {
  invoiceCount: number;
  productCount: number;
  isOutdated?: boolean;
}

export interface TTUser {
  initials: string;
  name: string;
  role: string;
  avatarBg?: string;
}

export interface ToolsTrackerSidebarProps {
  activeId?: TTNavId;
  dataStatus?: TTDataStatus;
  user?: TTUser;
  onNavClick?: (id: TTNavId) => void;
  onRunSync?: () => void;
  onClearCache?: () => void;
}

const NAV_ITEMS: { id: TTNavId; label: string; icon: React.ReactNode }[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Icon name="dashboard" size="md" />,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <Icon name="analytics" size="md" />,
  },
  { id: "reports", label: "Reports", icon: <Icon name="filter" size="md" /> },
  {
    id: "transactions",
    label: "Transactions",
    icon: <Icon name="orders" size="md" />,
  },
  {
    id: "products",
    label: "Products",
    icon: <Icon name="products" size="md" />,
  },
  {
    id: "appsumo-catalog",
    label: "AppSumo Catalog",
    icon: <Icon name="download" size="md" />,
  },
  {
    id: "admin-panel",
    label: "Admin Panel",
    icon: <Icon name="users" size="md" />,
  },
  { id: "import", label: "Import", icon: <Icon name="plus" size="md" /> },
  { id: "logs", label: "Logs", icon: <Icon name="eye" size="md" /> },
  {
    id: "sync-jobs",
    label: "Sync Jobs",
    icon: <Icon name="calendar" size="md" />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Icon name="settings" size="md" />,
  },
];

export const ToolsTrackerSidebar: React.FC<ToolsTrackerSidebarProps> = ({
  activeId = "dashboard",
  dataStatus = { invoiceCount: 73, productCount: 334, isOutdated: true },
  user = {
    initials: "YF",
    name: "yfatihi.pro",
    role: "Admin",
    avatarBg: "var(--drp-warning)",
  },
  onNavClick,
  onRunSync,
  onClearCache,
}) => (
  <aside
    className="sidebar"
    style={{ display: "flex", flexDirection: "column" }}
  >
    {/* Brand */}
    <div className="sidebar-brand">
      <span className="sidebar-brand-name">Tools Tracker</span>
      <span className="sidebar-brand-dot" />
    </div>

    {/* Navigation */}
    <nav className="sidebar-nav" style={{ flex: 1, overflowY: "auto" }}>
      <div className="sidebar-nav-section">
        <div className="sidebar-nav-label">Navigation</div>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`sidebar-nav-item${activeId === item.id ? " active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onNavClick?.(item.id);
            }}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span className="sidebar-nav-text">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>

    {/* Data Status */}
    <div
      style={{
        padding: "var(--drp-space-4)",
        borderTop: "var(--drp-border-thin)",
        flexShrink: 0,
      }}
    >
      <div className="sidebar-nav-label">Data Status</div>

      <div
        className="drp-flex drp-gap-4"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        <span
          className="drp-text drp-text--bold"
          style={{ color: "var(--drp-white)" }}
        >
          {dataStatus.invoiceCount} invoices
        </span>
        <span
          className="drp-text drp-text--bold"
          style={{ color: "var(--drp-white)" }}
        >
          {dataStatus.productCount} products
        </span>
      </div>

      {dataStatus.isOutdated && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--drp-space-1)",
            background: "var(--drp-error)",
            borderRadius: "var(--drp-radius)",
            padding: "var(--drp-space-1) var(--drp-space-2)",
            marginBottom: "var(--drp-space-3)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "white", flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="drp-text drp-text--xs" style={{ color: "white" }}>
            Data may be outdated
          </span>
        </div>
      )}

      <div className="drp-flex drp-gap-2">
        <button
          className="drp-btn drp-btn--primary drp-btn--sm"
          onClick={onRunSync}
          style={{ flex: 1 }}
        >
          Run Sync
        </button>
        <button
          className="drp-btn drp-btn--outline drp-btn--sm"
          onClick={onClearCache}
          style={{ flex: 1, borderColor: "var(--drp-grey)" }}
        >
          Clear Cache
        </button>
      </div>
    </div>

    {/* User profile */}
    <div
      className="drp-flex drp-items-center drp-gap-3"
      style={{
        padding: "var(--drp-space-3) var(--drp-space-4)",
        borderTop: "var(--drp-border-thin)",
        flexShrink: 0,
      }}
    >
      <div
        className="sidebar-avatar"
        style={{
          background: user.avatarBg ?? "var(--drp-warning)",
          width: 32,
          height: 32,
          fontSize: 12,
          flexShrink: 0,
        }}
      >
        {user.initials}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          className="drp-text drp-text--sm drp-text--bold"
          style={{
            color: "var(--drp-white)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {user.name}
        </p>
        <p className="drp-text drp-text--xs drp-text--muted">{user.role}</p>
      </div>
      <button
        className="drp-btn drp-btn--ghost drp-btn--sm"
        aria-label="More options"
      >
        ···
      </button>
    </div>
  </aside>
);

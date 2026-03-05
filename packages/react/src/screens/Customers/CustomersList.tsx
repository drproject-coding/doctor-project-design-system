import React from "react";

export interface Customer {
  id: string;
  name: string;
  email: string;
  status: "Tag" | "Pending" | "center";
}

export interface CustomersListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2" | "v3" | "details";
}

// ─── Sidebar ────────────────────────────────────────────────────────────────

const DoctorProjectSidebar: React.FC = () => (
  <aside className="sidebar" style={{ width: 160 }}>
    <div className="sidebar-brand" style={{ padding: "20px 16px" }}>
      <span className="sidebar-brand-name" style={{ fontSize: 18 }}>
        Doctor Project
      </span>
      <span className="sidebar-brand-dot" />
    </div>

    <nav className="sidebar-nav">
      <div className="sidebar-nav-section">
        <div className="sidebar-nav-label">Navigation</div>
        {[
          { label: "Dashboard" },
          { label: "Products" },
          { label: "Contacts" },
          {
            label: "Customers",
            active: true,
            badge: 15,
            badgeVariant: "sidebar-badge--purple",
          },
          { label: "Sales", badge: 14, badgeVariant: "sidebar-badge--green" },
          { label: "Analytics" },
        ].map((item) => (
          <button
            key={item.label}
            className={`sidebar-nav-item ${item.active ? "active" : ""}`}
            style={{ fontSize: 12, padding: "8px 10px" }}
          >
            <span className="sidebar-nav-text">{item.label}</span>
            {item.badge && (
              <span className={`sidebar-badge ${item.badgeVariant}`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="sidebar-team">
        <div className="sidebar-team-label">Team Members</div>
        {[
          { name: "Alexandre Paiva", bg: "var(--drp-grey)" },
          { name: "Thanawan Chadee", bg: "var(--drp-orange)" },
          { name: "Justine Robinson", bg: "var(--drp-pink)" },
        ].map((m) => (
          <div
            key={m.name}
            className="sidebar-team-member"
            style={{ padding: "6px 10px" }}
          >
            <div
              className="sidebar-avatar"
              style={{ background: m.bg, width: 24, height: 24, fontSize: 10 }}
            >
              {m.name[0]}
            </div>
            <span className="sidebar-team-name" style={{ fontSize: 12 }}>
              {m.name}
            </span>
          </div>
        ))}
        <div
          className="sidebar-see-more"
          style={{ fontSize: 11, padding: "6px 10px" }}
        >
          <svg
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>See More</span>
        </div>
      </div>
    </nav>

    <div className="sidebar-user" style={{ padding: "12px 12px" }}>
      <div
        className="sidebar-avatar"
        style={{
          background:
            "linear-gradient(135deg, var(--drp-orange), var(--drp-pink))",
          width: 28,
          height: 28,
        }}
      />
      <div className="sidebar-user-info">
        <div className="sidebar-user-name" style={{ fontSize: 12 }}>
          Henry Richardson
        </div>
      </div>
      <button className="sidebar-user-menu-btn">...</button>
    </div>
  </aside>
);

const TopBar: React.FC = () => (
  <div className="topbar">
    <div className="topbar-left">
      <h1 className="topbar-title">Customers</h1>
    </div>
    <div className="topbar-right">
      <button className="topbar-icon-btn">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button className="topbar-icon-btn">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      <button className="topbar-apps-btn">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
          />
        </svg>
        <span>Apps</span>
      </button>
      <button className="topbar-create-btn">
        <span>+</span>
        <span>Create new</span>
      </button>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className="footer-bar">
    <div className="footer-links">
      <span className="footer-link">English</span>
      <span className="footer-link">Privacy Policy</span>
      <span className="footer-link">License</span>
      <span className="footer-link">API</span>
    </div>
    <div className="footer-right">
      <button className="footer-icon-btn">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
      <button className="footer-icon-btn">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </div>
);

const SortIcon: React.FC = () => (
  <svg
    style={{
      width: 12,
      height: 12,
      display: "inline-block",
      marginLeft: 4,
      color: "var(--drp-grey)",
    }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

const TablePagination: React.FC = () => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-3) var(--drp-space-4)",
      borderTop: "var(--drp-border-thin)",
    }}
  >
    <button className="drp-btn drp-btn--outline drp-btn--sm">Prev</button>
    <span className="drp-text drp-text--sm drp-text--muted">Page 1 of 10</span>
    <button className="drp-btn drp-btn--outline drp-btn--sm">Next</button>
  </div>
);

const customers = [
  {
    name: "Darius Cummings",
    email: "balchen@msn.com",
    service: "Development",
    status: "Tag" as const,
    bg: "var(--drp-orange)",
  },
  {
    name: "Sampson Totton",
    email: "claypool@comcast.net",
    service: "Design",
    status: "Tag" as const,
    bg: "var(--drp-info)",
  },
  {
    name: "Jaroslav Brabec",
    email: "ehood@comcast.net",
    service: "Marketing",
    status: "Pending" as const,
    bg: "var(--drp-pink)",
  },
  {
    name: "Olivia Eklund",
    email: "hoyer@icloud.com",
    service: "Development",
    status: "Tag" as const,
    bg: "var(--drp-mint)",
  },
  {
    name: "Leo Knight",
    email: "mpiotr@me.com",
    service: "Management",
    status: "Tag" as const,
    bg: "var(--drp-purple)",
  },
  {
    name: "Siri Jakobsson",
    email: "marnanel@outlook.com",
    service: "Promotion",
    status: "Pending" as const,
    bg: "var(--drp-success)",
  },
  {
    name: "Mariano Rasgado",
    email: "fraterk@me.com",
    service: "Marketing",
    status: "Tag" as const,
    bg: "var(--drp-error)",
  },
  {
    name: "Hugo Assuncao",
    email: "jugalator@me.com",
    service: "Development",
    status: "Pending" as const,
    bg: "var(--drp-info-dark)",
  },
  {
    name: "Olivia Arribas",
    email: "glenz@outlook.com",
    service: "Marketing",
    status: "Tag" as const,
    bg: "var(--drp-warning)",
  },
];

const TabBar: React.FC<{ active: string }> = ({ active }) => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-3) var(--drp-space-4)",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <div className="drp-tabs">
      {["All Contacts", "Teammates", "Customers"].map((tab) => (
        <button
          key={tab}
          className={`drp-tab ${tab === active ? "drp-tab--active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="drp-flex drp-items-center drp-gap-2">
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        Sort: A-Z
      </button>
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        Bulk Actions
      </button>
    </div>
  </div>
);

const V1Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Service <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.name}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <div
                    className="sidebar-avatar"
                    style={{
                      background: c.bg,
                      width: 32,
                      height: 32,
                      fontSize: 12,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="drp-text drp-text--bold">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {c.email}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{c.service}</span>
              </td>
              <td>
                <span
                  className={`drp-tag drp-tag--dot ${c.status === "Tag" ? "drp-tag--mint" : "drp-tag--grey"}`}
                >
                  {c.status === "Tag" ? "Online" : "Away"}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

const V2Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Access <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={c.name}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <div
                    className="sidebar-avatar"
                    style={{
                      background: c.bg,
                      width: 32,
                      height: 32,
                      fontSize: 12,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="drp-text drp-text--bold">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {c.email}
                </span>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <button className="drp-btn drp-btn--outline drp-btn--sm">
                    View and edit
                  </button>
                  <label className="drp-switch">
                    <input type="checkbox" defaultChecked={i < 6} />
                    <span className="drp-switch__track">
                      <span className="drp-switch__knob" />
                    </span>
                  </label>
                </div>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

const V3Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <TabBar active="All Contacts" />
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Email <SortIcon />
            </th>
            <th>
              Service <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.name}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <div
                    className="sidebar-avatar"
                    style={{
                      background: c.bg,
                      width: 32,
                      height: 32,
                      fontSize: 12,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="drp-text drp-text--bold">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {c.email}
                </span>
              </td>
              <td>
                <span className="drp-tag">{c.service}</span>
              </td>
              <td>
                <span className="drp-tag drp-tag--filled drp-tag--mint">
                  {c.status}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

const DetailsContent: React.FC = () => (
  <div className="content">
    <div className="drp-flex drp-gap-6">
      <div style={{ flex: 1 }}>
        <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
          <div
            className="drp-flex drp-items-center drp-gap-4"
            style={{
              padding: "var(--drp-space-5)",
              borderBottom: "var(--drp-border-thin)",
            }}
          >
            <div
              className="sidebar-avatar"
              style={{
                background: "var(--drp-orange)",
                width: 48,
                height: 48,
                fontSize: 18,
              }}
            >
              D
            </div>
            <div>
              <h2 className="drp-h5">Darius Cummings</h2>
              <span className="drp-text drp-text--sm drp-text--muted">
                balchen@msn.com
              </span>
            </div>
          </div>
          <div style={{ padding: "var(--drp-space-5)" }}>
            <div className="drp-flex drp-gap-6 drp-mb-4">
              <div>
                <span className="drp-label">Service</span>
                <p className="drp-text drp-mt-2">Development</p>
              </div>
              <div>
                <span className="drp-label">Status</span>
                <p className="drp-mt-2">
                  <span className="drp-tag drp-tag--dot drp-tag--mint">
                    Online
                  </span>
                </p>
              </div>
              <div>
                <span className="drp-label">Joined</span>
                <p className="drp-text drp-mt-2">Jan 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CustomersList: React.FC<CustomersListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const renderContent = () => {
    switch (variant) {
      case "v2":
        return <V2Content />;
      case "v3":
        return <V3Content />;
      case "details":
        return <DetailsContent />;
      default:
        return <V1Content />;
    }
  };

  return (
    <div className="app-layout">
      <DoctorProjectSidebar />
      <div className="main-content" style={{ marginLeft: 160 }}>
        <TopBar />
        {renderContent()}
        <Footer />
      </div>
    </div>
  );
};

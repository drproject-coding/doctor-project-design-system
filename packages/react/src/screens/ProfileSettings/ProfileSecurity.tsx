import React, { useState } from "react";
import { ProfileSidePanel } from "./ProfileAccount";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";

/* ─────────────────────────────────────────
   Inline shared layout pieces
───────────────────────────────────────── */
const DoctorProjectSidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="sidebar-brand">
      <span className="sidebar-brand-name">Doctor Project</span>
      <span className="sidebar-brand-dot"></span>
    </div>
    <nav className="sidebar-nav">
      <div className="sidebar-nav-section">
        <div className="sidebar-nav-label">Navigation</div>
        {[
          { label: "Dashboard", badge: 15, badgeType: "purple" as const },
          { label: "Projects" },
          { label: "Tasks" },
          { label: "Kanban Desk", badge: 28, badgeType: "purple" as const },
          { label: "File Manager", badge: 14, badgeType: "green" as const },
          { label: "Calendar" },
          { label: "Inbox" },
        ].map((item) => (
          <a key={item.label} className="sidebar-nav-item">
            <span className="sidebar-nav-text">{item.label}</span>
            {item.badge && (
              <span
                className={`sidebar-badge sidebar-badge--${item.badgeType}`}
              >
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </div>
      <div className="sidebar-team">
        <div className="sidebar-team-label">Team Members</div>
        {[
          { name: "Alexandre Paiva", bg: "var(--drp-info)" },
          { name: "Thanawan Chadee", bg: "var(--drp-orange)" },
          { name: "Justine Robinson", bg: "var(--drp-success)" },
        ].map((m) => (
          <div key={m.name} className="sidebar-team-member">
            <div className="sidebar-avatar" style={{ background: m.bg }}>
              {m.name[0]}
            </div>
            <span className="sidebar-team-name">{m.name}</span>
          </div>
        ))}
        <div className="sidebar-see-more">See More</div>
      </div>
    </nav>
    <div className="sidebar-user">
      <div
        className="sidebar-avatar"
        style={{ background: "var(--drp-orange)" }}
      >
        H
      </div>
      <div className="sidebar-user-info">
        <div className="sidebar-user-name">Henry Richardson</div>
      </div>
      <button className="sidebar-user-menu-btn">...</button>
    </div>
  </aside>
);

const TopBar: React.FC = () => (
  <header className="topbar">
    <div className="topbar-left">
      <h1 className="topbar-title">Profile Settings</h1>
    </div>
    <div className="topbar-right">
      <button className="topbar-icon-btn">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      <button className="topbar-apps-btn">
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
          />
        </svg>
        <span>Apps</span>
      </button>
      <button className="topbar-create-btn">
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>Create new</span>
      </button>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="footer-bar">
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
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </footer>
);

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "account", label: "Account" },
  { key: "security", label: "Security" },
  { key: "social", label: "Social Networks" },
  { key: "apis", label: "APIs" },
  { key: "notifications", label: "Notifications" },
];

/* ─────────────────────────────────────────
   Field row helper
───────────────────────────────────────── */
const FieldRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div>
    <p className="drp-label" style={{ marginBottom: "var(--drp-space-1)" }}>
      {label}
    </p>
    <p
      className="drp-text drp-text--bold drp-text--sm"
      style={{
        paddingBottom: "var(--drp-space-2)",
        borderBottom: "var(--drp-border-thin)",
      }}
    >
      {value}
    </p>
  </div>
);

/* ─────────────────────────────────────────
   Session row
───────────────────────────────────────── */
const SessionRow: React.FC<{
  date: string;
  device: string;
  isCurrent?: boolean;
  icon: "laptop" | "phone";
}> = ({ date, device, isCurrent, icon }) => (
  <div
    className="drp-flex drp-items-center drp-gap-4"
    style={{
      padding: "var(--drp-space-3) 0",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--drp-grey)",
        flexShrink: 0,
      }}
    >
      {icon === "laptop" ? (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="4" width="20" height="14" rx="0" />
          <path d="M0 20h24" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          width="20"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="5" y="2" width="14" height="20" rx="0" />
        </svg>
      )}
    </div>
    <div style={{ flex: 1 }}>
      <p className="drp-text drp-text--sm drp-text--muted">{date}</p>
      <p className="drp-text drp-text--bold drp-text--sm">{device}</p>
    </div>
    {isCurrent && (
      <button className="drp-btn drp-btn--sm drp-btn--primary">
        Current session
      </button>
    )}
  </div>
);

/* ─────────────────────────────────────────
   ProfileSecurity
───────────────────────────────────────── */
export const ProfileSecurity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("security");

  return (
    <div className="app-layout" style={{ height: "100vh", overflow: "hidden" }}>
      <DoctorProjectSidebar />
      <div className="main-content" style={{ overflow: "hidden" }}>
        <TopBar />
        <div
          className="drp-flex"
          style={{
            flex: 1,
            overflow: "hidden",
            padding: "var(--drp-space-6) var(--drp-space-8)",
            gap: "var(--drp-space-6)",
          }}
        >
          <ProfileSidePanel />
          <div className="drp-flex-col" style={{ flex: 1, overflow: "hidden" }}>
            {/* Tab bar */}
            <div
              className="drp-flex drp-items-center drp-gap-1"
              style={{ marginBottom: "var(--drp-space-4)", flexShrink: 0 }}
            >
              <div className="drp-tabs">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`drp-tab${activeTab === tab.key ? " drp-tab--active" : ""}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={{ marginLeft: "auto" }}>
                <button className="drp-btn drp-btn--outline drp-btn--sm">
                  Actions
                </button>
              </div>
            </div>

            {/* Content card */}
            <div
              className="drp-card"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                padding: 0,
              }}
            >
              <div
                style={{
                  padding: "var(--drp-space-4) var(--drp-space-6)",
                  borderBottom: "var(--drp-border-thin)",
                }}
              >
                <h2 className="drp-h5">Login details</h2>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "var(--drp-space-4) var(--drp-space-6)",
                  overflowY: "auto",
                }}
              >
                <div className="drp-flex-col drp-gap-4">
                  <FieldRow label="Current password" value="••••••" />
                  <div className="drp-form-row">
                    <FieldRow
                      label="Security questions"
                      value="Your fathers name"
                    />
                    <FieldRow label="2-Step verification" value="Enabled" />
                  </div>
                </div>

                <div style={{ paddingTop: "var(--drp-space-4)" }}>
                  <h3
                    className="drp-h6"
                    style={{ marginBottom: "var(--drp-space-3)" }}
                  >
                    Security credentials
                  </h3>
                  <SessionRow
                    icon="laptop"
                    date="01 Apr 2021 at 06:25PM"
                    device="Mac OS Safari 15.1"
                    isCurrent
                  />
                  <SessionRow
                    icon="phone"
                    date="19 Oct 2021 at 06:30AM"
                    device="iOS Safari 15.1"
                  />
                </div>
              </div>
              <div
                className="drp-flex drp-items-center drp-justify-between"
                style={{
                  padding: "var(--drp-space-4) var(--drp-space-6)",
                  borderTop: "var(--drp-border-thin)",
                }}
              >
                <button className="drp-btn drp-btn--outline">
                  Reset Changes
                </button>
                <button className="drp-btn drp-btn--primary">
                  Update Settings
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

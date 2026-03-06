import React, { useState } from "react";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";

interface ProfileLayoutProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  children: React.ReactNode;
}

/* ─────────────────────────────────────────
   Shared: dark sidebar (left navigation)
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
          <a key={item.label} href="#" className="sidebar-nav-item">
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
        ].map((member) => (
          <div key={member.name} className="sidebar-team-member">
            <div className="sidebar-avatar" style={{ background: member.bg }}>
              {member.name[0]}
            </div>
            <span className="sidebar-team-name">{member.name}</span>
          </div>
        ))}
        <div className="sidebar-see-more">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          See More
        </div>
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
      <button className="sidebar-user-menu-btn" aria-label="User menu">
        ...
      </button>
    </div>
  </aside>
);

/* ─────────────────────────────────────────
   Shared: top bar
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   Shared: footer
───────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer className="footer-bar">
    <div className="footer-links">
      <button className="footer-link">English</button>
      <button className="footer-link">Privacy Policy</button>
      <button className="footer-link">License</button>
      <button className="footer-link">API</button>
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

/* ─────────────────────────────────────────
   Shared: profile sidebar (left panel)
───────────────────────────────────────── */
export const ProfileSidePanel: React.FC = () => (
  <div style={{ width: 280, flexShrink: 0, padding: "var(--drp-space-6)" }}>
    {/* Avatar */}
    <div
      style={{
        width: 80,
        height: 80,
        overflow: "hidden",
        background: "var(--drp-grey-light)",
        marginBottom: "var(--drp-space-4)",
      }}
    >
      <img
        src="https://i.pravatar.cc/80?img=47"
        alt="Laquita Elliott"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "var(--drp-info)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "var(--drp-text-h4)",
          fontWeight: "var(--drp-weight-bold)" as any,
        }}
      >
        LE
      </div>
    </div>

    <h2 className="drp-h5" style={{ marginBottom: 2 }}>
      Laquita Elliott
    </h2>
    <p
      className="drp-text drp-text--sm drp-text--muted"
      style={{ marginBottom: "var(--drp-space-3)" }}
    >
      elliott.laquita@gmail.com
    </p>

    <p
      className="drp-text drp-text--sm"
      style={{
        marginBottom: "var(--drp-space-4)",
        color: "var(--drp-text-secondary)",
      }}
    >
      Happiness is not something readymade.
      <br />
      It comes from your own actions.
    </p>

    <span
      className="drp-tag"
      style={{ marginBottom: "var(--drp-space-6)", display: "inline-block" }}
    >
      Designer
    </span>

    {/* Stats */}
    <div>
      <div
        style={{
          paddingBottom: "var(--drp-space-3)",
          borderBottom: "var(--drp-border-dashed)",
        }}
      >
        <div className="drp-flex drp-items-center drp-justify-between">
          <div className="drp-flex drp-items-center drp-gap-2">
            <span className="drp-h5">296</span>
            <span className="drp-badge drp-badge--pink">-8</span>
          </div>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--drp-grey)"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          New tasks
        </p>
      </div>

      <div
        style={{
          padding: "var(--drp-space-3) 0",
          borderBottom: "var(--drp-border-dashed)",
        }}
      >
        <div className="drp-flex drp-items-center drp-justify-between">
          <div className="drp-flex drp-items-center drp-gap-2">
            <span className="drp-h5">18</span>
            <span className="drp-badge drp-badge--mint">5</span>
          </div>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--drp-grey)"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          Followers
        </p>
      </div>

      <div style={{ paddingTop: "var(--drp-space-3)" }}>
        <span className="drp-h5">$36</span>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginTop: 2 }}
        >
          Hourly rate
        </p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: tab bar + actions button
───────────────────────────────────────── */
const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "account", label: "Account" },
  { key: "security", label: "Security" },
  { key: "social", label: "Social Networks" },
  { key: "apis", label: "APIs" },
  { key: "notifications", label: "Notifications" },
];

export const ProfileTabBar: React.FC<{
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}> = ({ activeTab, onTabChange }) => (
  <div
    className="drp-flex drp-items-center drp-gap-1"
    style={{ marginBottom: "var(--drp-space-4)", flexShrink: 0 }}
  >
    <div className="drp-tabs">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`drp-tab${activeTab === tab.key ? " drp-tab--active" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div style={{ marginLeft: "auto" }}>
      <button className="drp-btn drp-btn--outline drp-btn--sm">Actions</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: content card with footer buttons
───────────────────────────────────────── */
const ContentCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
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
      <h2 className="drp-h5">{title}</h2>
    </div>
    <div
      style={{
        flex: 1,
        padding: "var(--drp-space-4) var(--drp-space-6)",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
    <div
      className="drp-flex drp-items-center drp-justify-between"
      style={{
        padding: "var(--drp-space-4) var(--drp-space-6)",
        borderTop: "var(--drp-border-thin)",
      }}
    >
      <button className="drp-btn drp-btn--outline">Reset Changes</button>
      <button className="drp-btn drp-btn--primary">Update Settings</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: field row
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
   Full layout wrapper
───────────────────────────────────────── */
const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  activeTab,
  onTabChange,
  children,
}) => (
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
          <ProfileTabBar activeTab={activeTab} onTabChange={onTabChange} />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Account tab content
───────────────────────────────────────── */
export const ProfileAccount: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("account");

  return (
    <ProfileLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <ContentCard title="Public account details">
        <div className="drp-flex-col drp-gap-4">
          <FieldRow label="Full name" value="Henry Richardson" />
          <FieldRow label="Country" value="United States" />
          <FieldRow label="City" value="New Castle" />
          <div className="drp-form-row">
            <FieldRow label="Date of birth" value="January 24, 1983" />
            <FieldRow label="Gender" value="Male" />
          </div>
          <div className="drp-form-row">
            <FieldRow label="Email address" value="seb.bennett@gmail.com" />
            <FieldRow label="Phone number" value="+995 590 558 124" />
          </div>
          <FieldRow
            label="Address"
            value="83222 Dicki View, South Pasqualeview, RI 79216-3100"
          />
        </div>
      </ContentCard>
    </ProfileLayout>
  );
};

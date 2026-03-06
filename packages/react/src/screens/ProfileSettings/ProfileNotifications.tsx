import React, { useState } from "react";
import { ProfileSidePanel } from "./ProfileAccount";
import { AppSidebar } from "../shared/AppSidebar";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";

/* ─────────────────────────────────────────
   Toggle switch component (drp-switch)
───────────────────────────────────────── */
const Toggle: React.FC<{
  enabled: boolean;
  onChange: (v: boolean) => void;
}> = ({ enabled, onChange }) => (
  <label className="drp-switch">
    <input
      type="checkbox"
      checked={enabled}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="drp-switch__track">
      <span className="drp-switch__knob" />
    </span>
  </label>
);

/* ─────────────────────────────────────────
   Notification row
───────────────────────────────────────── */
const NotifRow: React.FC<{
  label: string;
  description: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
}> = ({ label, description, enabled, onChange }) => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-4) 0",
      borderBottom: "var(--drp-border-thin)",
    }}
  >
    <div>
      <p className="drp-label" style={{ marginBottom: 2 }}>
        {label}
      </p>
      <p className="drp-text drp-text--bold drp-text--sm">{description}</p>
    </div>
    <Toggle enabled={enabled} onChange={onChange} />
  </div>
);

/* ─────────────────────────────────────────
   Dark sidebar
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
          <circle cx="12" cy="12" r="3" />
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
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
   ProfileNotifications component
───────────────────────────────────────── */
export const ProfileNotifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("notifications");
  const [settings, setSettings] = useState({
    productUpdates: true,
    reminders: false,
    promotions: true,
    policy: true,
    accountSupport: false,
  });

  const TABS: Array<{ key: TabKey; label: string }> = [
    { key: "account", label: "Account" },
    { key: "security", label: "Security" },
    { key: "social", label: "Social Networks" },
    { key: "apis", label: "APIs" },
    { key: "notifications", label: "Notifications" },
  ];

  return (
    <div className="app-layout" style={{ height: "100vh", overflow: "hidden" }}>
      <AppSidebar activeId="settings" />
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
                <h2 className="drp-h5">Notifications</h2>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "var(--drp-space-2) var(--drp-space-6)",
                  overflowY: "auto",
                }}
              >
                <NotifRow
                  label="Product updates"
                  description="Receive messages from our platform"
                  enabled={settings.productUpdates}
                  onChange={(v) =>
                    setSettings({ ...settings, productUpdates: v })
                  }
                />
                <NotifRow
                  label="Reminders"
                  description="Receive booking reminders, pricing notices"
                  enabled={settings.reminders}
                  onChange={(v) => setSettings({ ...settings, reminders: v })}
                />
                <NotifRow
                  label="Promotions and tips"
                  description="Receive coupons, promotions, surveys"
                  enabled={settings.promotions}
                  onChange={(v) => setSettings({ ...settings, promotions: v })}
                />
                <NotifRow
                  label="Policy and community"
                  description="Receive updates on job regulations"
                  enabled={settings.policy}
                  onChange={(v) => setSettings({ ...settings, policy: v })}
                />
                <NotifRow
                  label="Account support"
                  description="Receive messages about your account, your trips, legal alerts"
                  enabled={settings.accountSupport}
                  onChange={(v) =>
                    setSettings({ ...settings, accountSupport: v })
                  }
                />
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

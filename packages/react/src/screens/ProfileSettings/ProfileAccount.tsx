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
  <div className="w-[280px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    {/* Logo */}
    <div className="px-6 py-5 border-b border-white/10">
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-white">Doctor Project</span>
        <span className="w-2 h-2 rounded-full bg-purple-500 mb-3"></span>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
      {/* Navigation */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        <nav className="space-y-1">
          {[
            {
              label: "Dashboard",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ),
              badge: 15,
              badgeColor: "bg-purple-600",
            },
            {
              label: "Projects",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              ),
            },
            {
              label: "Tasks",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ),
            },
            {
              label: "Kanban Desk",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              ),
              badge: 28,
              badgeColor: "bg-purple-600",
            },
            {
              label: "File Manager",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              ),
              badge: 14,
              badgeColor: "bg-green-500",
            },
            {
              label: "Calendar",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              ),
            },
            {
              label: "Inbox",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
                </svg>
              ),
            },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-xs text-white px-1.5 py-0.5 rounded ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Team Members */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Team Members
        </p>
        <div className="space-y-1">
          {[
            { name: "Alexandre Paiva", color: "from-blue-500 to-cyan-400" },
            { name: "Thanawan Chadee", color: "from-orange-400 to-pink-500" },
            { name: "Justine Robinson", color: "from-green-400 to-teal-500" },
          ].map((member) => (
            <button
              key={member.name}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${member.color} flex-shrink-0`}
              />
              <span>{member.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <span>See More</span>
          </button>
        </div>
      </div>
    </div>

    {/* User profile at bottom */}
    <div className="px-4 py-4 border-t border-white/10">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
          <span className="text-sm text-gray-200">Henry Richardson</span>
        </div>
        <button className="text-gray-500 hover:text-white text-lg">···</button>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: top bar
───────────────────────────────────────── */
const TopBar: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-4 border-b bg-[#f5efe6] border-black/10 flex-shrink-0">
    <h1 className="text-3xl font-bold text-black">Profile Settings</h1>
    <div className="flex items-center gap-4">
      <button className="p-2 rounded-lg text-gray-500 hover:bg-black/5">
        <svg
          className="w-5 h-5"
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
      <button className="p-2 rounded-lg text-gray-500 hover:bg-black/5">
        <svg
          className="w-5 h-5"
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
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-black/5">
        <svg
          className="w-4 h-4"
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
        Apps
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Create new
      </button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: footer
───────────────────────────────────────── */
const Footer: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-3 border-t bg-[#f5efe6] border-black/10 text-sm text-gray-500 flex-shrink-0">
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-1.5 hover:opacity-80">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeWidth={2}
            d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
          />
        </svg>
        English
      </button>
      <button className="hover:opacity-80">Privacy Policy</button>
      <button className="hover:opacity-80">License</button>
      <button className="hover:opacity-80">API</button>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-1.5 rounded bg-black/10">
        <svg
          className="w-4 h-4"
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
      <button className="p-1.5 rounded bg-black/10">
        <svg
          className="w-4 h-4"
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

/* ─────────────────────────────────────────
   Shared: profile sidebar (left panel)
───────────────────────────────────────── */
export const ProfileSidePanel: React.FC = () => (
  <div className="w-[280px] flex-shrink-0 px-6 py-6">
    {/* Avatar */}
    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-4">
      <img
        src="https://i.pravatar.cc/80?img=47"
        alt="Laquita Elliott"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="w-full h-full bg-gradient-to-br from-blue-300 to-indigo-400 flex items-center justify-center text-white text-2xl font-bold">
        LE
      </div>
    </div>

    <h2 className="text-xl font-bold text-black mb-0.5">Laquita Elliott</h2>
    <p className="text-sm text-gray-500 mb-3">elliott.laquita@gmail.com</p>

    <p className="text-sm text-gray-600 mb-4">
      Happiness is not something readymade.
      <br />
      It comes from your own actions.
    </p>

    <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 mb-6">
      Designer
    </button>

    {/* Stats */}
    <div className="space-y-3">
      <div className="pb-3 border-b border-dashed border-gray-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">296</span>
            <span className="text-xs font-semibold text-white bg-red-400 px-1.5 py-0.5 rounded">
              -8
            </span>
          </div>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500 mt-0.5">New tasks</p>
      </div>

      <div className="pb-3 border-b border-dashed border-gray-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">18</span>
            <span className="text-xs font-semibold text-white bg-green-500 px-1.5 py-0.5 rounded">
              5
            </span>
          </div>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500 mt-0.5">Followers</p>
      </div>

      <div className="pb-3">
        <span className="text-xl font-bold text-black">$36</span>
        <p className="text-sm text-gray-500 mt-0.5">Hourly rate</p>
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
  <div className="flex items-center gap-1 mb-4 flex-shrink-0">
    {TABS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => onTabChange(tab.key)}
        className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
          activeTab === tab.key
            ? "bg-black text-white"
            : "text-gray-600 hover:text-black hover:bg-black/5"
        }`}
      >
        {tab.label}
      </button>
    ))}
    <div className="ml-auto">
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
        <span className="text-gray-400">···</span>
        Actions
      </button>
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
  <div className="flex-1 border border-gray-200 rounded-lg bg-white flex flex-col overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="text-lg font-bold text-black">{title}</h2>
    </div>
    <div className="flex-1 px-6 py-4 overflow-y-auto">{children}</div>
    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
      <button className="px-6 py-2.5 border border-gray-300 rounded text-sm font-bold text-black hover:bg-gray-50">
        Reset Changes
      </button>
      <button className="px-8 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded transition-colors">
        Update Settings
      </button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Shared: field row
───────────────────────────────────────── */
const FieldRow: React.FC<{
  label: string;
  value: string;
  half?: boolean;
}> = ({ label, value, half }) => (
  <div className={half ? "w-1/2 pr-4" : "w-full"}>
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className="text-sm font-bold text-black pb-2 border-b border-gray-200">
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
  <div className="flex h-screen overflow-hidden">
    <DoctorProjectSidebar />
    <div className="flex-1 flex flex-col overflow-hidden bg-[#f5efe6]">
      <TopBar />
      <div className="flex-1 flex overflow-hidden px-8 py-6 gap-6">
        <ProfileSidePanel />
        <div className="flex-1 flex flex-col overflow-hidden">
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
        <div className="space-y-4">
          <div className="flex flex-wrap">
            <FieldRow label="Full name" value="Henry Richardson" />
          </div>
          <div className="flex flex-wrap">
            <FieldRow label="Country" value="United States" />
          </div>
          <div className="flex flex-wrap">
            <FieldRow label="City" value="New Castle" />
          </div>
          <div className="flex gap-6">
            <div className="flex-1">
              <FieldRow label="Date of birth" value="January 24, 1983" />
            </div>
            <div className="flex-1">
              <FieldRow label="Gender" value="Male" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1">
              <FieldRow label="Email address" value="seb.bennett@gmail.com" />
            </div>
            <div className="flex-1">
              <FieldRow label="Phone number" value="+995 590 558 124" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <FieldRow
              label="Address"
              value="83222 Dicki View, South Pasqualeview, RI 79216-3100"
            />
          </div>
        </div>
      </ContentCard>
    </ProfileLayout>
  );
};

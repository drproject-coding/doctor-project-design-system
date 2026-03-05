import React, { useState } from "react";
import { ProfileSidePanel } from "./ProfileAccount";

type TabKey = "account" | "security" | "social" | "apis" | "notifications";

/* ─────────────────────────────────────────
   Inline shared layout pieces
───────────────────────────────────────── */
const BruddleSidebar: React.FC = () => (
  <div className="w-[280px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    <div className="px-6 py-5 border-b border-white/10">
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-white">Bruddle</span>
        <span className="w-2 h-2 rounded-full bg-purple-500 mb-3"></span>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        <nav className="space-y-1">
          {[
            { label: "Dashboard", badge: 15, badgeColor: "bg-purple-600" },
            { label: "Projects" },
            { label: "Tasks" },
            { label: "Kanban Desk", badge: 28, badgeColor: "bg-purple-600" },
            { label: "File Manager", badge: 14, badgeColor: "bg-green-500" },
            { label: "Calendar" },
            { label: "Inbox" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>{item.label}</span>
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
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Team Members
        </p>
        <div className="space-y-1">
          {[
            { name: "Alexandre Paiva", color: "from-blue-500 to-cyan-400" },
            { name: "Thanawan Chadee", color: "from-orange-400 to-pink-500" },
            { name: "Justine Robinson", color: "from-green-400 to-teal-500" },
          ].map((m) => (
            <button
              key={m.name}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${m.color} flex-shrink-0`}
              />
              <span>{m.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <span>See More</span>
          </button>
        </div>
      </div>
    </div>
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

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "account", label: "Account" },
  { key: "security", label: "Security" },
  { key: "social", label: "Social Networks" },
  { key: "apis", label: "APIs" },
  { key: "notifications", label: "Notifications" },
];

/* ─────────────────────────────────────────
   Social network row
───────────────────────────────────────── */
interface SocialAccount {
  name: string;
  value: string | null;
  icon: React.ReactNode;
}

const SocialRow: React.FC<{ account: SocialAccount }> = ({ account }) => (
  <div className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-b-0">
    <div className="w-9 h-9 flex items-center justify-center text-black flex-shrink-0 text-xl font-bold">
      {account.icon}
    </div>
    <div className="flex-1">
      <p className="text-xs text-gray-500 mb-0.5">{account.name}</p>
      <p className="text-sm font-bold text-black">
        {account.value ?? "Not connected"}
      </p>
    </div>
    {!account.value && (
      <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black font-medium">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        Connect
      </button>
    )}
  </div>
);

/* ─────────────────────────────────────────
   ProfileSocial
───────────────────────────────────────── */
export const ProfileSocial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("social");

  const socialAccounts: SocialAccount[] = [
    {
      name: "Facebook",
      value: "https://www.facebook.com/whiteui.store",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      value: null,
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      name: "Dropbox",
      value: "@whiteui.store",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L6 7l6 5-6 5 6 5 6-5-6-5 6-5-6-5zm-6 17l6-5 6 5-6 5-6-5z" />
        </svg>
      ),
    },
    {
      name: "Google",
      value: null,
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <BruddleSidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-[#f5efe6]">
        <TopBar />
        <div className="flex-1 flex overflow-hidden px-8 py-6 gap-6">
          <ProfileSidePanel />
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tab bar */}
            <div className="flex items-center gap-1 mb-4 flex-shrink-0">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
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

            {/* Content card */}
            <div className="flex-1 border border-gray-200 rounded-lg bg-white flex flex-col overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-black">
                  Social profiles
                </h2>
              </div>
              <div className="flex-1 px-6 py-2 overflow-y-auto">
                {socialAccounts.map((account) => (
                  <SocialRow key={account.name} account={account} />
                ))}
                <button className="flex items-center gap-2 mt-4 text-sm font-bold text-black hover:opacity-70 transition-opacity">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                  Add More
                </button>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <button className="px-6 py-2.5 border border-gray-300 rounded text-sm font-bold text-black hover:bg-gray-50">
                  Reset Changes
                </button>
                <button className="px-8 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded transition-colors">
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

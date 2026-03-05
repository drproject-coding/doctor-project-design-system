import React, { useState } from "react";

export type PaymentsTheme = "light" | "dark";

// Legacy type – kept for backwards-compatible barrel exports
export interface Payment {
  id: string;
  method: string;
  amount: number;
  date: string;
  recipient: string;
  status: "Completed" | "Pending" | "Failed";
}
export type PaymentsVariant =
  | "list"
  | "details"
  | "send-money"
  | "pay-utilities";

export interface PaymentsListProps {
  theme?: PaymentsTheme;
  variant?: PaymentsVariant;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar
// ─────────────────────────────────────────────────────────────────────────────

interface SidebarProps {
  variant: PaymentsVariant;
}

const BruddleSidebar: React.FC<SidebarProps> = ({ variant }) => {
  const showTeamMembers = variant === "details";

  return (
    <div className="w-[280px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-white">Bruddle</span>
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
              { label: "Dashboard", icon: "dashboard" },
              { label: "Accounts", icon: "accounts" },
              { label: "Transactions", icon: "transactions" },
              {
                label: "Crypto Assets",
                icon: "crypto",
                badge: 28,
                badgeColor: "bg-purple-600",
              },
              {
                label: "Payments",
                icon: "payments",
                badge: 14,
                badgeColor: "bg-green-500",
                active: true,
              },
              { label: "Reports", icon: "reports" },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  item.active
                    ? "bg-white/10 text-white font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <NavIcon icon={item.icon} />
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

        {showTeamMembers ? (
          /* Team Members section – shown in Details variant */
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
              Team Members
            </p>
            <div className="space-y-1">
              {[
                { name: "Alexandre Paiva", color: "bg-orange-500" },
                { name: "Thanawan Chadee", color: "bg-purple-500" },
                { name: "Justine Robinson", color: "bg-gray-500" },
              ].map((member) => (
                <button
                  key={member.name}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                >
                  <div
                    className={`w-7 h-7 rounded-full ${member.color} flex-shrink-0`}
                  ></div>
                  <span>{member.name}</span>
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <span className="text-gray-500 text-sm">⌄ See More</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Cards */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
                Cards
              </p>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5">
                  <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    V
                  </span>
                  <span>Debit Card **** 7890</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-xs flex-shrink-0">
                    ●
                  </span>
                  <span>Credit Card **** 4340</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
                  <span className="w-7 h-7 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-lg flex-shrink-0">
                    +
                  </span>
                  <span>Open a card</span>
                </button>
              </div>
            </div>

            {/* Balances */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
                Balances
              </p>
              <div className="space-y-1">
                {[
                  { flag: "🇺🇸", amount: "100,050.75 USD" },
                  { flag: "🇪🇺", amount: "10.40 EUR" },
                  { flag: "🇬🇧", amount: "95.50 GBP" },
                ].map((bal) => (
                  <button
                    key={bal.amount}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    <span className="text-lg">{bal.flag}</span>
                    <span>{bal.amount}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
                  <span className="w-7 h-7 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-lg">
                    +
                  </span>
                  <span>Open a balance</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* User profile */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
            <span className="text-sm text-gray-200">Henry Richardson</span>
          </div>
          <button className="text-gray-500 hover:text-white">···</button>
        </div>
      </div>
    </div>
  );
};

// Small nav icon components using inline SVG
const NavIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const cls = "w-4 h-4 flex-shrink-0";
  switch (icon) {
    case "dashboard":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <circle cx="12" cy="12" r="3" strokeWidth={2} />
        </svg>
      );
    case "accounts":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth={2} />
          <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth={2} />
          <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth={2} />
          <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth={2} />
        </svg>
      );
    case "transactions":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4M4 17h12m0 0l-4-4m4 4l-4 4"
          />
        </svg>
      );
    case "crypto":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <circle cx="12" cy="12" r="4" strokeWidth={2} />
        </svg>
      );
    case "payments":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={2} />
          <path strokeLinecap="round" strokeWidth={2} d="M2 10h20" />
        </svg>
      );
    case "reports":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    default:
      return <span className={cls}>•</span>;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Top Bar
// ─────────────────────────────────────────────────────────────────────────────

interface TopBarProps {
  theme: PaymentsTheme;
  title: string;
  showBack?: boolean;
  showSearch?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  theme,
  title,
  showBack = false,
  showSearch = false,
}) => (
  <div
    className={`flex items-center justify-between px-8 py-4 border-b flex-shrink-0 ${
      theme === "dark"
        ? "bg-[#111111] border-white/10"
        : "bg-[#f5efe6] border-black/10"
    }`}
  >
    <div className="flex items-center gap-3">
      {showBack && (
        <button
          className={`w-9 h-9 flex items-center justify-center border rounded-lg ${
            theme === "dark"
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-black/20 text-black hover:bg-black/5"
          }`}
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      <h1
        className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {title}
      </h1>
    </div>
    <div className="flex items-center gap-4">
      {showSearch && (
        <button
          className={`p-2 rounded-lg ${theme === "dark" ? "text-gray-400 hover:bg-white/10" : "text-gray-500 hover:bg-black/5"}`}
        >
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
      )}
      <button
        className={`p-2 rounded-lg ${theme === "dark" ? "text-gray-400 hover:bg-white/10" : "text-gray-500 hover:bg-black/5"}`}
      >
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
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${theme === "dark" ? "text-gray-200 hover:bg-white/10" : "text-gray-700 hover:bg-black/5"}`}
      >
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
        <span className="text-lg leading-none">+</span>
        Create new
      </button>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

const Footer: React.FC<{ theme: PaymentsTheme }> = ({ theme }) => (
  <div
    className={`flex items-center justify-between px-8 py-3 border-t text-sm flex-shrink-0 ${
      theme === "dark"
        ? "bg-[#111111] border-white/10 text-gray-500"
        : "bg-[#f5efe6] border-black/10 text-gray-500"
    }`}
  >
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
      <button
        className={`p-1.5 rounded ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
      >
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
      <button
        className={`p-1.5 rounded ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
      >
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

// ─────────────────────────────────────────────────────────────────────────────
// Currency flag helper
// ─────────────────────────────────────────────────────────────────────────────

const CurrencyFlag: React.FC<{ currency: "USD" | "EUR" | "GBP" }> = ({
  currency,
}) => {
  const flags: Record<string, string> = { USD: "🇺🇸", EUR: "🇪🇺", GBP: "🇬🇧" };
  return (
    <span className="flex items-center gap-1 text-sm">
      <span>{flags[currency]}</span>
      <span className="text-gray-400 font-medium">{currency}</span>
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// List variant content (main Payments page)
// ─────────────────────────────────────────────────────────────────────────────

const recentTransfers = [
  {
    name: "Harrison Phillips",
    account: "Account ending in 1435",
    currency: "USD" as const,
    avatarColor: "bg-gray-400",
    initials: "HP",
  },
  {
    name: "Rustem Tolstobrov",
    account: "Account ending in 3456",
    currency: "USD" as const,
    avatarColor: "bg-orange-400",
    initials: "RT",
  },
  {
    name: "Alicia Puma",
    account: "Account ending in 1223",
    currency: "USD" as const,
    avatarColor: "bg-purple-400",
    initials: "AP",
  },
  {
    name: "Nonkosi Joyi",
    account: "Account ending in 1156",
    currency: "EUR" as const,
    avatarColor: "bg-blue-500",
    initials: "NJ",
  },
  {
    name: "Evelyn Allen",
    account: "Account ending in 1439",
    currency: "EUR" as const,
    avatarColor: "bg-pink-400",
    initials: "EA",
  },
  {
    name: "Justine Marshall",
    account: "Account ending in 1567",
    currency: "USD" as const,
    avatarColor: "bg-green-500",
    initials: "JM",
  },
  {
    name: "Yi Chun-Hwa",
    account: "Account ending in 1890",
    currency: "GBP" as const,
    avatarColor: "bg-yellow-500",
    initials: "YC",
  },
  {
    name: "Emmy Elsner",
    account: "Account ending in 1546",
    currency: "EUR" as const,
    avatarColor: "bg-indigo-400",
    initials: "EE",
  },
  {
    name: "Xian Zhou",
    account: "Account ending in 1498",
    currency: "USD" as const,
    avatarColor: "bg-red-400",
    initials: "XZ",
  },
];

const ListContent: React.FC<{ theme: PaymentsTheme }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const textPrimary = theme === "dark" ? "text-white" : "text-black";
  const textSecondary = "text-gray-500";
  const divider = theme === "dark" ? "border-white/5" : "border-black/5";
  const inputBg =
    theme === "dark"
      ? "bg-[#2a2a2a] border-white/10 text-white placeholder-gray-500"
      : "bg-white border-black/15 text-black placeholder-gray-400";

  return (
    <div className="flex-1 overflow-auto p-6 flex gap-4">
      {/* Left: Make a payment */}
      <div
        className={`flex-1 rounded-xl border ${cardBg} overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-inherit">
          <h2 className={`text-xl font-bold ${textPrimary}`}>Make a payment</h2>
          <div
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg ${inputBg}`}
          >
            <svg
              className="w-4 h-4 text-gray-400"
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
            <span className="text-sm text-gray-400">Search</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto px-6 py-5 space-y-5">
          {/* Payment categories */}
          <div>
            <p className={`text-sm mb-3 ${textSecondary}`}>
              Payment categories
            </p>
            <div className="grid grid-cols-2 gap-3">
              {/* Transfer to someone */}
              <button
                className={`flex items-center gap-4 p-4 border border-dashed rounded-xl hover:bg-white/5 transition-colors ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4M4 17h12m0 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${textPrimary}`}>
                    Transfer to someone
                  </div>
                  <div className={`text-xs ${textSecondary}`}>156 contacts</div>
                </div>
              </button>

              {/* Pay for utilities */}
              <button
                className={`flex items-center gap-4 p-4 border border-dashed rounded-xl hover:bg-white/5 transition-colors ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${textPrimary}`}>
                    Pay for utilities
                  </div>
                  <div className={`text-xs ${textSecondary}`}>
                    98 service providers
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Service providers */}
          <div>
            <p className={`text-sm mb-3 ${textSecondary}`}>Service providers</p>
            <div className="grid grid-cols-2 gap-3">
              {/* Mobile Networks */}
              <button
                className={`flex items-center gap-4 p-4 border border-dashed rounded-xl hover:bg-white/5 transition-colors ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M12 18h.01"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${textPrimary}`}>
                    Mobile Networks
                  </div>
                  <div className={`text-xs ${textSecondary}`}>
                    Top up your balance instantly
                  </div>
                </div>
              </button>

              {/* Utilities */}
              <button
                className={`flex items-center gap-4 p-4 border border-dashed rounded-xl hover:bg-white/5 transition-colors ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${textPrimary}`}>
                    Utilities
                  </div>
                  <div className={`text-xs ${textSecondary}`}>
                    Check your home utility bills
                  </div>
                </div>
              </button>

              {/* Government */}
              <button
                className={`flex items-center gap-4 p-4 border border-dashed rounded-xl hover:bg-white/5 transition-colors ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${textPrimary}`}>
                    Government
                  </div>
                  <div className={`text-xs ${textSecondary}`}>
                    Pay car fines, taxes, and service
                  </div>
                </div>
              </button>

              {/* Internet Providers */}
              <button
                className={`flex items-center gap-4 p-4 border border-dashed rounded-xl hover:bg-white/5 transition-colors ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${textPrimary}`}>
                    Internet Providers
                  </div>
                  <div className={`text-xs ${textSecondary}`}>
                    Find Internet provider in your area
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Latest transfers */}
          <div>
            <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>
              Latest transfers
            </h3>
            <div>
              {[
                {
                  initials: "I",
                  iconBg: "bg-gradient-to-br from-gray-700 to-gray-900",
                  label: "Income payment for provided services",
                  sub: "Bank transfer",
                  amount: "+ $11,400.00",
                  time: "10 Aug 4:50 PM",
                  positive: true,
                },
                {
                  initials: "P",
                  iconBg: "bg-blue-500",
                  label: "Online purchase at Ebay.com",
                  sub: "Online payment",
                  amount: "- $396.00",
                  time: "12 Aug 3:10 PM",
                  positive: false,
                },
                {
                  initials: "S",
                  iconBg: "bg-blue-400",
                  label: "IOfinance UI kit purchase",
                  sub: "Online payment",
                  amount: "- $28.00",
                  time: "14 Aug 4:20 AM",
                  positive: false,
                },
              ].map((tx, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 py-3.5 border-b last:border-b-0 ${divider}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${tx.iconBg}`}
                  >
                    {tx.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-semibold ${textPrimary}`}>
                      {tx.label}
                    </div>
                    <div className={`text-xs ${textSecondary}`}>{tx.sub}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div
                      className={`text-sm font-semibold ${tx.positive ? "text-green-500" : textPrimary}`}
                    >
                      {tx.amount}
                    </div>
                    <div className={`text-xs ${textSecondary}`}>{tx.time}</div>
                  </div>
                  <button
                    className={`${textSecondary} hover:opacity-70 flex-shrink-0`}
                  >
                    ···
                  </button>
                </div>
              ))}
            </div>
            <button
              className={`w-full mt-3 py-3 border rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                theme === "dark"
                  ? "border-white/10 text-gray-400 hover:bg-white/5"
                  : "border-black/15 text-gray-600 hover:bg-black/5"
              }`}
            >
              ··· See all transactions
            </button>
          </div>
        </div>
      </div>

      {/* Right: Recent transfers */}
      <div
        className={`w-[300px] flex-shrink-0 rounded-xl border ${cardBg} overflow-hidden flex flex-col`}
      >
        <div className="px-5 py-5 border-b border-inherit">
          <h2 className={`text-lg font-bold ${textPrimary}`}>
            Recent transfers
          </h2>
        </div>
        <div className="flex-1 overflow-auto">
          {recentTransfers.map((contact, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-5 py-3.5 border-b last:border-b-0 ${divider}`}
            >
              <div
                className={`w-9 h-9 rounded-full ${contact.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
              >
                {contact.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-sm font-semibold truncate ${textPrimary}`}
                >
                  {contact.name}
                </div>
                <div className={`text-xs truncate ${textSecondary}`}>
                  {contact.account}
                </div>
              </div>
              <CurrencyFlag currency={contact.currency} />
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-inherit">
          <button
            className={`w-full py-3 border rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              theme === "dark"
                ? "border-white/10 text-gray-400 hover:bg-white/5"
                : "border-black/15 text-gray-600 hover:bg-black/5"
            }`}
          >
            ··· See all contacts
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Details Modal overlay variant
// ─────────────────────────────────────────────────────────────────────────────

const DetailsContent: React.FC<{ theme: PaymentsTheme }> = ({ theme }) => {
  const overlayBg = theme === "dark" ? "bg-black/70" : "bg-black/40";
  const modalBg = theme === "dark" ? "bg-[#1a1a1a]" : "bg-white";
  const textPrimary = theme === "dark" ? "text-white" : "text-black";
  const textSecondary = "text-gray-500";
  const divider = theme === "dark" ? "border-white/10" : "border-black/10";
  const rowHover = theme === "dark" ? "hover:bg-white/5" : "hover:bg-black/5";

  return (
    <>
      {/* Background – blurred list */}
      <div className="flex-1 relative overflow-hidden">
        <div className="opacity-30 pointer-events-none">
          <ListContent theme={theme} />
        </div>

        {/* Modal overlay */}
        <div
          className={`absolute inset-0 ${overlayBg} flex items-center justify-center`}
        >
          <div
            className={`w-[460px] rounded-2xl shadow-2xl overflow-hidden ${modalBg}`}
          >
            {/* Modal header – purple */}
            <div className="bg-purple-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white font-bold text-lg">
                Recipient details
              </h2>
              <button className="text-white/80 hover:text-white">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div
              className={`h-px ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
            ></div>

            {/* Avatar area – still purple bg */}
            <div className="bg-purple-600 flex justify-center pb-8 pt-2">
              <div className="w-16 h-16 rounded-full bg-gray-300 border-4 border-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-amber-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className={`px-8 py-6 ${modalBg}`}>
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold ${textPrimary}`}>
                  Rustem Tolstobrov
                </h3>
                <p className={`text-sm ${textSecondary}`}>
                  Account ending in 3456
                </p>
              </div>

              {/* Detail rows */}
              {[
                {
                  icon: "person",
                  label: "Account holder name",
                  value: "Rustem Tolstobrov",
                },
                {
                  icon: "routing",
                  label: "Routing number",
                  value: "017062169",
                },
                {
                  icon: "account",
                  label: "Account number",
                  value: "8910242076",
                },
                {
                  icon: "currency",
                  label: "Currency",
                  value: "🇺🇸 USD",
                },
                {
                  icon: "type",
                  label: "Account type",
                  value: "Checking",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-3.5 border-b border-dashed ${rowHover} transition-colors ${divider}`}
                >
                  <div className="flex items-center gap-3">
                    <DetailIcon icon={row.icon} theme={theme} />
                    <span className={`text-sm ${textSecondary}`}>
                      {row.label}
                    </span>
                  </div>
                  <span className={`text-sm font-bold ${textPrimary}`}>
                    {row.value}
                  </span>
                </div>
              ))}

              {/* Action buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  className={`flex-1 py-3 border rounded-xl text-sm font-bold transition-colors ${
                    theme === "dark"
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-black/20 text-black hover:bg-black/5"
                  }`}
                >
                  Send Funds
                </button>
                <button
                  className={`flex-1 py-3 border rounded-xl text-sm font-bold transition-colors ${
                    theme === "dark"
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-black/20 text-black hover:bg-black/5"
                  }`}
                >
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DetailIcon: React.FC<{ icon: string; theme: PaymentsTheme }> = ({
  icon,
}) => {
  const cls = "w-4 h-4 text-gray-400 flex-shrink-0";
  switch (icon) {
    case "person":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "routing":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "account":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      );
    case "currency":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      );
    case "type":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    default:
      return <span className="w-4 h-4">•</span>;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Send Money variant
// ─────────────────────────────────────────────────────────────────────────────

const SendMoneyContent: React.FC<{ theme: PaymentsTheme }> = ({ theme }) => {
  const textPrimary = theme === "dark" ? "text-white" : "text-black";
  const textSecondary = "text-gray-500";
  const inputBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10 text-white"
      : "bg-white border-black/15 text-black";
  const selectBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10 text-white"
      : "bg-white border-black/15 text-black";
  const placeholderColor = theme === "dark" ? "text-gray-600" : "text-gray-400";

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-lg mx-auto py-10 px-4 space-y-6">
        {/* Select recipient */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            Select recipient
          </label>
          <div
            className={`flex items-center justify-between px-4 py-3.5 border rounded-xl ${selectBg}`}
          >
            <span className={`text-sm font-medium ${textPrimary}`}>
              Rustem Tolstobrov
            </span>
            <svg
              className="w-5 h-5 text-gray-400"
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
          </div>
        </div>

        {/* Select payment account */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            Select payment account
          </label>
          <div
            className={`flex items-center justify-between px-4 py-3.5 border rounded-xl ${selectBg}`}
          >
            <span className={`text-sm font-medium ${textPrimary}`}>
              Debit Card **** 7890
            </span>
            {/* Toggle switch – off state */}
            <div
              className={`w-10 h-5 rounded-full relative ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
            >
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
            </div>
          </div>
        </div>

        {/* You will send */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            You will send
          </label>
          <div
            className={`flex items-center justify-between px-4 py-3.5 border rounded-xl ${inputBg}`}
          >
            <span className={`text-sm ${placeholderColor}`}>1,290.00</span>
            <span className={`text-sm font-medium ${textSecondary}`}>USD</span>
          </div>
        </div>

        {/* Fee breakdown */}
        <div className="space-y-2 pl-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${theme === "dark" ? "bg-white" : "bg-black"}`}
            ></div>
            <span className={`text-sm ${textSecondary}`}>Conversion fee</span>
            <span className={`text-sm font-semibold ml-1 ${textPrimary}`}>
              9.50 USD
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${theme === "dark" ? "bg-white" : "bg-black"}`}
            ></div>
            <span className={`text-sm ${textSecondary}`}>Transfer fee</span>
            <span className={`text-sm font-semibold ml-1 ${textPrimary}`}>
              5.50 USD
            </span>
          </div>
        </div>

        {/* Delivery time */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            Delivery time
          </label>
          <div className={`px-4 py-3.5 border rounded-xl ${selectBg}`}>
            <span className={`text-sm ${placeholderColor}`}>
              Standard Transfer 1-3 days
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className={`text-xs leading-relaxed ${textSecondary}`}>
          Transfers made on weekends or holidays take longer. All transfers are
          subject to review and could be delayed or stopped if we identify an
          issue.
        </p>

        {/* Action buttons */}
        <div className="flex gap-4 pt-4">
          <button
            className={`flex-1 py-4 border rounded-xl text-sm font-bold transition-colors ${
              theme === "dark"
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-black/20 text-black hover:bg-black/5"
            }`}
          >
            Cancel
          </button>
          <button className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-xl transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Pay for Utilities variant
// ─────────────────────────────────────────────────────────────────────────────

const PayUtilitiesContent: React.FC<{ theme: PaymentsTheme }> = ({ theme }) => {
  const textPrimary = theme === "dark" ? "text-white" : "text-black";
  const textSecondary = "text-gray-500";
  const inputBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10 text-white"
      : "bg-white border-black/15 text-black";
  const selectBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10 text-white"
      : "bg-white border-black/15 text-black";
  const placeholderColor = theme === "dark" ? "text-gray-600" : "text-gray-400";

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-lg mx-auto py-10 px-4 space-y-6">
        {/* Utilities */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            Utilities
          </label>
          <div
            className={`flex items-center justify-between px-4 py-3.5 border rounded-xl ${selectBg}`}
          >
            <span className={`text-sm font-medium ${textPrimary}`}>
              Mobile Networks
            </span>
            <svg
              className="w-5 h-5 text-gray-400"
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
          </div>
        </div>

        {/* Service provider */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            Service provider
          </label>
          <div
            className={`flex items-center justify-between px-4 py-3.5 border rounded-xl ${selectBg}`}
          >
            <span className={`text-sm font-medium ${textPrimary}`}>
              Vodafone
            </span>
            {/* Vodafone logo approximation */}
            <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* You will send */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            You will send
          </label>
          <div
            className={`flex items-center justify-between px-4 py-3.5 border rounded-xl ${inputBg}`}
          >
            <span className={`text-sm ${placeholderColor}`}>15.50</span>
            <span className={`text-sm font-medium ${textSecondary}`}>USD</span>
          </div>
        </div>

        {/* Fee breakdown */}
        <div className="space-y-2 pl-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${theme === "dark" ? "bg-white" : "bg-black"}`}
            ></div>
            <span className={`text-sm ${textSecondary}`}>Conversion fee</span>
            <span className={`text-sm font-semibold ml-1 ${textPrimary}`}>
              9.50 USD
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${theme === "dark" ? "bg-white" : "bg-black"}`}
            ></div>
            <span className={`text-sm ${textSecondary}`}>Transfer fee</span>
            <span className={`text-sm font-semibold ml-1 ${textPrimary}`}>
              5.50 USD
            </span>
          </div>
        </div>

        {/* Delivery time */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textPrimary}`}>
            Delivery time
          </label>
          <div className={`px-4 py-3.5 border rounded-xl ${selectBg}`}>
            <span className={`text-sm ${placeholderColor}`}>Instant</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className={`text-xs leading-relaxed ${textSecondary}`}>
          Transfers made on weekends or holidays take longer. All transfers are
          subject to review and could be delayed or stopped if we identify an
          issue.
        </p>

        {/* Action buttons */}
        <div className="flex gap-4 pt-4">
          <button
            className={`flex-1 py-4 border rounded-xl text-sm font-bold transition-colors ${
              theme === "dark"
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-black/20 text-black hover:bg-black/5"
            }`}
          >
            Cancel
          </button>
          <button className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-xl transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main exported component
// ─────────────────────────────────────────────────────────────────────────────

export const PaymentsList: React.FC<PaymentsListProps> = ({
  theme = "light",
  variant = "list",
}) => {
  const bg = theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f5efe6]";

  const titleMap: Record<PaymentsVariant, string> = {
    list: "Payments",
    details: "Payments",
    "send-money": "Send Money",
    "pay-utilities": "Pay for utilities",
  };

  const showBack = variant === "send-money" || variant === "pay-utilities";
  const showSearchIcon =
    variant === "send-money" || variant === "pay-utilities";

  return (
    <div className={`flex h-screen ${bg} overflow-hidden`}>
      <BruddleSidebar variant={variant} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar
          theme={theme}
          title={titleMap[variant]}
          showBack={showBack}
          showSearch={showSearchIcon}
        />

        {variant === "list" && <ListContent theme={theme} />}
        {variant === "details" && <DetailsContent theme={theme} />}
        {variant === "send-money" && <SendMoneyContent theme={theme} />}
        {variant === "pay-utilities" && <PayUtilitiesContent theme={theme} />}

        <Footer theme={theme} />
      </div>
    </div>
  );
};

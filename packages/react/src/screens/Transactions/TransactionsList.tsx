import React, { useState } from "react";

export type TransactionVariant = "listV1" | "listV2" | "invoice" | "empty";

/** @deprecated Legacy interface kept for backwards-compatible re-exports */
export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  type: "Income" | "Expense";
}

export interface TransactionsListProps {
  theme?: "light" | "dark";
  variant?: TransactionVariant;
}

// ─── Shared sidebar ───────────────────────────────────────────────────────────

const BruddleSidebar: React.FC<{ variant: TransactionVariant }> = ({
  variant,
}) => {
  const showTeamMembers = variant === "invoice";

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
              { label: "Dashboard", icon: "◎" },
              { label: "Accounts", icon: "▣" },
              { label: "Transactions", icon: "⇄", active: true },
              {
                label: "Crypto Assets",
                icon: "◎",
                badge: 28,
                badgeColor: "bg-purple-600",
              },
              {
                label: "Payments",
                icon: "▦",
                badge: 14,
                badgeColor: "bg-green-500",
              },
              { label: "Reports", icon: "▤" },
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
                  <span className="text-base">{item.icon}</span>
                  <span
                    className={item.active ? "text-purple-400 font-medium" : ""}
                  >
                    {item.label}
                  </span>
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
          /* Team Members section (Invoice variant) */
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
              Team Members
            </p>
            <div className="space-y-1">
              {[
                {
                  name: "Alexandre Paiva",
                  initials: "AP",
                  color: "bg-orange-500",
                },
                {
                  name: "Thanawan Chadee",
                  initials: "TC",
                  color: "bg-teal-500",
                },
                {
                  name: "Justine Robinson",
                  initials: "JR",
                  color: "bg-gray-500",
                },
              ].map((member) => (
                <button
                  key={member.name}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                >
                  <span
                    className={`w-7 h-7 rounded-full ${member.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                  >
                    {member.initials.charAt(0)}
                  </span>
                  <span>{member.name}</span>
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <span className="text-xs text-gray-500">↓</span>
                <span>See More</span>
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
                  <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                    V
                  </span>
                  <span>Debit Card **** 7890</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-xs">
                    ●
                  </span>
                  <span>Credit Card **** 4340</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
                  <span className="w-7 h-7 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-lg">
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
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500" />
            </div>
            <span className="text-sm text-gray-200">Henry Richardson</span>
          </div>
          <button className="text-gray-500 hover:text-white">···</button>
        </div>
      </div>
    </div>
  );
};

// ─── Top bar ──────────────────────────────────────────────────────────────────

const TopBar: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div
    className={`flex items-center justify-between px-8 py-4 border-b flex-shrink-0 ${
      theme === "dark"
        ? "bg-[#111111] border-white/10"
        : "bg-[#f5efe6] border-black/10"
    }`}
  >
    <h1
      className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      Transactions
    </h1>
    <div className="flex items-center gap-4">
      {/* Search icon */}
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
      {/* Bell icon */}
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
      {/* Apps button */}
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
      {/* Create new button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
        <span className="text-lg leading-none">+</span>
        Create new
      </button>
    </div>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
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

// ─── Transaction data ─────────────────────────────────────────────────────────

interface TxRow {
  icon: string;
  iconBg: string;
  iconType: "letter" | "image";
  name: string;
  sub: string;
  date: string;
  fee?: string;
  amount: string;
  isPositive: boolean;
}

const TRANSACTIONS: TxRow[] = [
  {
    icon: "V",
    iconBg: "bg-red-600",
    iconType: "letter",
    name: "Vodafone account top up  ****04",
    sub: "Phone payment",
    date: "4 Aug 1:00 PM",
    fee: "$2,90",
    amount: "- $4.20",
    isPositive: false,
  },
  {
    icon: "C",
    iconBg: "bg-blue-500",
    iconType: "letter",
    name: "Money transfer to John Doe",
    sub: "Bank transfer",
    date: "5 Aug 3:00 PM",
    fee: "$6,40",
    amount: "- $10,480.00",
    isPositive: false,
  },
  {
    icon: "A",
    iconBg: "bg-red-500",
    iconType: "letter",
    name: "ATM Cash withdrawal",
    sub: "Cash",
    date: "6 Aug 2:15 AM",
    fee: "$6,30",
    amount: "- $201.50",
    isPositive: false,
  },
  {
    icon: "a",
    iconBg: "bg-orange-400",
    iconType: "letter",
    name: "Online purchase on Amazon.com",
    sub: "Online payment",
    date: "7 Aug 5:40 PM",
    fee: "$8,85",
    amount: "- $184.00",
    isPositive: false,
  },
  {
    icon: "I",
    iconBg: "bg-gradient-to-br from-gray-800 to-gray-600",
    iconType: "letter",
    name: "Income payment for projects",
    sub: "Bank transfer",
    date: "7 Aug 6:20 PM",
    fee: "$4,60",
    amount: "+ $3.000.00",
    isPositive: true,
  },
  {
    icon: "A",
    iconBg: "bg-pink-400",
    iconType: "letter",
    name: "Monthly home rent",
    sub: "Bank transfer",
    date: "8 Aug 1:00 AM",
    fee: "$6,60",
    amount: "- $400.00",
    isPositive: false,
  },
  {
    icon: "I",
    iconBg: "bg-gradient-to-br from-gray-800 to-gray-600",
    iconType: "letter",
    name: "Income payment for provided services",
    sub: "Bank transfer",
    date: "10 Aug 4:50 PM",
    fee: "$6,50",
    amount: "+ $11.400.00",
    isPositive: true,
  },
  {
    icon: "P",
    iconBg: "bg-blue-600",
    iconType: "letter",
    name: "Online purchase at Ebay.com",
    sub: "Online payment",
    date: "12 Aug 3:10 PM",
    fee: "$8,80",
    amount: "- $396.00",
    isPositive: false,
  },
  {
    icon: "S",
    iconBg: "bg-purple-500",
    iconType: "letter",
    name: "IOfinance UI kit purchase",
    sub: "Online payment",
    date: "14 Aug 4:20 AM",
    fee: "$3,75",
    amount: "- $28.00",
    isPositive: false,
  },
  {
    icon: "W",
    iconBg: "bg-cyan-500",
    iconType: "letter",
    name: "Intenet payment",
    sub: "Utility payment",
    date: "14 Aug 7:00 AM",
    fee: "$4,20",
    amount: "- $4.20",
    isPositive: false,
  },
];

// ─── Account tabs + filter bar ────────────────────────────────────────────────

const AccountTabBar: React.FC<{
  theme: "light" | "dark";
  filterLabel?: string;
}> = ({ theme, filterLabel = "Apply Filter" }) => {
  const [activeTab, setActiveTab] = useState("All Accounts");
  const tabs = ["All Accounts", "USD Account", "EUR Account", "GBP Account"];

  const btnBase =
    "px-4 py-2 rounded-lg text-sm font-medium transition-colors border";

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-1">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          if (isActive) {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                {tab}
              </button>
            );
          }
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`flex items-center gap-2 ${btnBase} ${
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          {filterLabel}
        </button>
        <button
          className={`flex items-center gap-2 ${btnBase} ${
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
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Export to CSV
        </button>
      </div>
    </div>
  );
};

// ─── Transaction icon ─────────────────────────────────────────────────────────

const TxIcon: React.FC<{ tx: TxRow }> = ({ tx }) => (
  <div
    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${tx.iconBg}`}
  >
    {tx.icon}
  </div>
);

// ─── List V1 content ──────────────────────────────────────────────────────────

const ListV1Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const rowBorder = theme === "dark" ? "border-white/5" : "border-black/5";

  return (
    <div className="flex-1 overflow-auto p-6">
      <AccountTabBar theme={theme} />
      <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
        {TRANSACTIONS.map((tx, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-5 py-4 border-b last:border-b-0 ${rowBorder}`}
          >
            <TxIcon tx={tx} />
            <div className="flex-1 min-w-0">
              <div
                className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                {tx.name}
              </div>
              <div className="text-xs text-gray-500">{tx.sub}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div
                className={`text-sm font-semibold ${tx.isPositive ? "text-green-500" : theme === "dark" ? "text-white" : "text-black"}`}
              >
                {tx.amount}
              </div>
              <div className="text-xs text-gray-500">{tx.date}</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2">
              ···
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── List V2 content ──────────────────────────────────────────────────────────

const SortIcon: React.FC = () => (
  <svg
    className="w-3 h-3 inline ml-1"
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
);

const ListV2Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const headerBg =
    theme === "dark" ? "bg-[#222] text-gray-400" : "bg-gray-50 text-gray-500";
  const rowBorder = theme === "dark" ? "border-white/5" : "border-black/5";
  const cellText = theme === "dark" ? "text-white" : "text-black";

  const rows = TRANSACTIONS.slice(0, 9);

  return (
    <div className="flex-1 overflow-auto p-6 flex flex-col">
      <AccountTabBar theme={theme} />
      <div className={`rounded-xl border ${cardBg} overflow-hidden flex-1`}>
        {/* Table header */}
        <div
          className={`grid grid-cols-[1fr_2fr_1fr_0.7fr_0.9fr_auto] gap-4 px-5 py-3 text-xs font-medium ${headerBg} border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
        >
          <div>
            Date &amp; Time <SortIcon />
          </div>
          <div>
            Payment <SortIcon />
          </div>
          <div>
            Service <SortIcon />
          </div>
          <div>
            Fee <SortIcon />
          </div>
          <div className="text-right">
            Price <SortIcon />
          </div>
          <div className="w-6"></div>
        </div>
        {/* Rows */}
        {rows.map((tx, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr_1fr_0.7fr_0.9fr_auto] gap-4 px-5 py-4 items-center border-b last:border-b-0 ${rowBorder}`}
          >
            <div
              className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              {tx.date}
            </div>
            <div className="flex items-center gap-3 min-w-0">
              <TxIcon tx={tx} />
              <span className={`text-sm font-semibold truncate ${cellText}`}>
                {tx.name}
              </span>
            </div>
            <div
              className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
            >
              {tx.sub}
            </div>
            <div className={`text-sm ${cellText}`}>{tx.fee}</div>
            <div
              className={`text-sm font-semibold text-right ${tx.isPositive ? "text-green-500" : cellText}`}
            >
              {tx.amount}
            </div>
            <button className="text-gray-400 hover:text-gray-600 w-6">
              ···
            </button>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
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
          Prev
        </button>
        <span
          className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          Page 1 of 10
        </span>
        <button
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
            theme === "dark"
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-black/20 text-black hover:bg-black/5"
          }`}
        >
          Next
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ─── Invoice modal ────────────────────────────────────────────────────────────

const InvoiceModal: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const modalBg = theme === "dark" ? "bg-[#111111]" : "bg-white";
  const textPrimary = theme === "dark" ? "text-white" : "text-black";
  const textMuted = "text-gray-500";
  const divider = theme === "dark" ? "border-white/10" : "border-black/10";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div
        className={`w-[480px] rounded-2xl overflow-hidden shadow-2xl ${modalBg}`}
      >
        {/* Purple header */}
        <div className="bg-[#6B47DC] px-6 py-5 flex items-center justify-between relative">
          <span className="text-white font-semibold text-base">
            Transaction details
          </span>
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

        {/* Avatar overlapping header/body */}
        <div className="flex flex-col items-center -mt-6 px-8 pt-2 pb-6">
          <div className="w-14 h-14 rounded-full bg-white border-4 border-white shadow flex items-center justify-center text-xl font-bold text-gray-800 mb-4">
            S
          </div>
          <h2 className={`text-2xl font-bold text-center mb-1 ${textPrimary}`}>
            2,702.12 USD to James Dean
          </h2>
          <p className={`text-sm ${textMuted} mb-3`}>
            Completed Thursday 29 April
          </p>
          {/* Paid badge */}
          <span className="px-5 py-1.5 bg-green-400 text-white text-sm font-semibold rounded-full">
            Paid
          </span>
        </div>

        {/* Details */}
        <div className={`px-8 pb-6 border-t ${divider}`}>
          {/* Send To / Amount */}
          <div className="grid grid-cols-2 gap-4 pt-5 pb-4">
            <div>
              <p className={`text-xs ${textMuted} mb-1`}>Send To</p>
              <p className={`text-sm font-semibold ${textPrimary}`}>
                James Dean
              </p>
              <p className={`text-sm ${textMuted}`}>james.dea89@gmail.com</p>
            </div>
            <div className="text-right">
              <p className={`text-xs ${textMuted} mb-1`}>Amount</p>
              <p className={`text-sm font-semibold ${textPrimary}`}>
                2,702.12 USD
              </p>
            </div>
          </div>

          {/* Dotted divider */}
          <div className={`border-t border-dashed ${divider} my-2`} />

          {/* Bank Details / Exchange Rate */}
          <div className="grid grid-cols-2 gap-4 pt-4 pb-6">
            <div>
              <p className={`text-xs ${textMuted} mb-1`}>Bank Details</p>
              <p className={`text-sm ${textPrimary}`}>
                GE91TB77521450317885​98
              </p>
              <p className={`text-sm ${textPrimary}`}>TBCBGE22</p>
              <p className={`text-sm ${textPrimary}`}>Transfer #241894617</p>
            </div>
            <div className="text-right">
              <p className={`text-xs ${textMuted} mb-1`}>Exchange Rate</p>
              <p className={`text-sm ${textPrimary}`}>1.00000</p>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                theme === "dark"
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-black/20 text-black hover:bg-black/5"
              }`}
            >
              Print
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
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
            <button
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                theme === "dark"
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-black/20 text-black hover:bg-black/5"
              }`}
            >
              Issue Refund
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Invoice variant: list v2 + modal ─────────────────────────────────────────

const InvoiceContent: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const headerBg =
    theme === "dark" ? "bg-[#222] text-gray-400" : "bg-gray-50 text-gray-500";
  const rowBorder = theme === "dark" ? "border-white/5" : "border-black/5";
  const cellText = theme === "dark" ? "text-white" : "text-black";

  const rows = TRANSACTIONS.slice(0, 9);

  return (
    <>
      <div className="flex-1 overflow-auto p-6 flex flex-col">
        {/* Filter bar shows August 2023 label */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {["All Accounts", "USD Account", "EUR Account", "GBP Account"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    tab === "All Accounts"
                      ? theme === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border ${
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              August 2023
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border ${
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
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Export to CSV
            </button>
          </div>
        </div>

        <div className={`rounded-xl border ${cardBg} overflow-hidden flex-1`}>
          {/* Table header */}
          <div
            className={`grid grid-cols-[1fr_2fr_1fr_0.7fr_0.9fr_auto] gap-4 px-5 py-3 text-xs font-medium ${headerBg} border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
          >
            <div>
              Date &amp; Time <SortIcon />
            </div>
            <div>
              Payment <SortIcon />
            </div>
            <div>
              Service <SortIcon />
            </div>
            <div>
              Fee <SortIcon />
            </div>
            <div className="text-right">
              Price <SortIcon />
            </div>
            <div className="w-6"></div>
          </div>
          {rows.map((tx, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_2fr_1fr_0.7fr_0.9fr_auto] gap-4 px-5 py-4 items-center border-b last:border-b-0 ${rowBorder}`}
            >
              <div
                className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                {tx.date}
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <TxIcon tx={tx} />
                <span className={`text-sm font-semibold truncate ${cellText}`}>
                  {tx.name}
                </span>
              </div>
              <div
                className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
              >
                {tx.sub}
              </div>
              <div className={`text-sm ${cellText}`}>{tx.fee}</div>
              <div
                className={`text-sm font-semibold text-right ${tx.isPositive ? "text-green-500" : cellText}`}
              >
                {tx.amount}
              </div>
              <button className="text-gray-400 hover:text-gray-600 w-6">
                ···
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <button
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
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
            Prev
          </button>
          <span
            className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            Page 1 of 10
          </span>
          <button
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
              theme === "dark"
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-black/20 text-black hover:bg-black/5"
            }`}
          >
            Prev
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal overlay */}
      <InvoiceModal theme={theme} />
    </>
  );
};

// ─── Empty state content ──────────────────────────────────────────────────────

const EmptyContent: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div className="flex-1 overflow-hidden relative flex items-center justify-center">
    {/* Decorative blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large yellow/green blob top-right */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, #f0e040 0%, #b8e040 40%, transparent 70%)",
        }}
      />
      {/* Purple blob left-center */}
      <div
        className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, #7c3aed 0%, #a855f7 40%, transparent 70%)",
        }}
      />
      {/* Pink/orange blob bottom-right */}
      <div
        className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, #ec4899 50%, transparent 70%)",
        }}
      />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-8">
      {/* Bar chart icon */}
      <div className="mb-6">
        <svg
          className={`w-16 h-16 ${theme === "dark" ? "text-white" : "text-black"}`}
          fill="none"
          viewBox="0 0 64 64"
          stroke="currentColor"
        >
          <rect x="8" y="32" width="12" height="24" rx="2" strokeWidth={3} />
          <rect x="26" y="20" width="12" height="36" rx="2" strokeWidth={3} />
          <rect x="44" y="8" width="12" height="48" rx="2" strokeWidth={3} />
        </svg>
      </div>
      <h2
        className={`text-4xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        No transactions found?
      </h2>
      <p
        className={`text-sm mb-8 max-w-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        Try to make payments for your bills and products or create a new
        currency account from scratch.
      </p>
      <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition-colors">
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
            d="M12 4v16m8-8H4"
          />
        </svg>
        Create a new account
      </button>
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export const TransactionsList: React.FC<TransactionsListProps> = ({
  theme = "light",
  variant = "listV1",
}) => {
  const bg = theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f5efe6]";

  const renderContent = () => {
    switch (variant) {
      case "listV1":
        return <ListV1Content theme={theme} />;
      case "listV2":
        return <ListV2Content theme={theme} />;
      case "invoice":
        return <InvoiceContent theme={theme} />;
      case "empty":
        return <EmptyContent theme={theme} />;
      default:
        return <ListV1Content theme={theme} />;
    }
  };

  return (
    <div className={`flex h-screen ${bg}`}>
      <BruddleSidebar variant={variant} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar theme={theme} />
        {renderContent()}
        <Footer theme={theme} />
      </div>
    </div>
  );
};

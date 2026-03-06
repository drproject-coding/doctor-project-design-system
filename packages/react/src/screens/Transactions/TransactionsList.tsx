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

const DoctorProjectSidebar: React.FC<{ variant: TransactionVariant }> = ({
  variant,
}) => {
  const showTeamMembers = variant === "invoice";

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "accounts", label: "Accounts" },
    { id: "transactions", label: "Transactions", active: true },
    {
      id: "crypto",
      label: "Crypto Assets",
      badge: 28,
      badgeVariant: "sidebar-badge--purple",
    },
    {
      id: "payments",
      label: "Payments",
      badge: 14,
      badgeVariant: "sidebar-badge--green",
    },
    { id: "reports", label: "Reports" },
  ];

  const teamMembers = [
    { name: "Alexandre Paiva", initials: "AP", bg: "var(--drp-orange)" },
    { name: "Thanawan Chadee", initials: "TC", bg: "var(--drp-mint)" },
    { name: "Justine Robinson", initials: "JR", bg: "var(--drp-grey)" },
  ];

  return (
    <aside className="sidebar" style={{ width: 280 }}>
      <div className="sidebar-brand">
        <span className="sidebar-brand-name" style={{ fontSize: 20 }}>
          Doctor Project
        </span>
        <span className="sidebar-brand-dot" />
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-nav-section">
          <div className="sidebar-nav-label">Navigation</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-nav-item ${item.active ? "active" : ""}`}
            >
              <span className="sidebar-nav-icon">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <span className="sidebar-nav-text">{item.label}</span>
              {item.badge && (
                <span className={`sidebar-badge ${item.badgeVariant}`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {showTeamMembers ? (
          <div className="sidebar-team">
            <div className="sidebar-team-label">Team Members</div>
            {teamMembers.map((m) => (
              <div key={m.name} className="sidebar-team-member">
                <div
                  className="sidebar-avatar"
                  style={{
                    background: m.bg,
                    width: 28,
                    height: 28,
                    fontSize: 11,
                  }}
                >
                  {m.initials[0]}
                </div>
                <span className="sidebar-team-name">{m.name}</span>
              </div>
            ))}
            <div className="sidebar-see-more">
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
        ) : (
          <>
            {/* Cards */}
            <div className="sidebar-nav-section">
              <div className="sidebar-nav-label">Cards</div>
              <button className="sidebar-nav-item">
                <div
                  className="sidebar-avatar"
                  style={{
                    background: "var(--drp-blue)",
                    width: 28,
                    height: 28,
                    fontSize: 11,
                  }}
                >
                  V
                </div>
                <span className="sidebar-nav-text">Debit Card **** 7890</span>
              </button>
              <button className="sidebar-nav-item">
                <div
                  className="sidebar-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--drp-pink), var(--drp-orange))",
                    width: 28,
                    height: 28,
                    fontSize: 11,
                  }}
                >
                  ●
                </div>
                <span className="sidebar-nav-text">Credit Card **** 4340</span>
              </button>
              <button className="sidebar-nav-item">
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: "1px dashed var(--drp-grey)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: "var(--drp-grey)",
                    flexShrink: 0,
                  }}
                >
                  +
                </div>
                <span className="sidebar-nav-text">Open a card</span>
              </button>
            </div>

            {/* Balances */}
            <div className="sidebar-nav-section">
              <div className="sidebar-nav-label">Balances</div>
              {[
                { flag: "\u{1F1FA}\u{1F1F8}", amount: "100,050.75 USD" },
                { flag: "\u{1F1EA}\u{1F1FA}", amount: "10.40 EUR" },
                { flag: "\u{1F1EC}\u{1F1E7}", amount: "95.50 GBP" },
              ].map((bal) => (
                <button key={bal.amount} className="sidebar-nav-item">
                  <span style={{ fontSize: 16 }}>{bal.flag}</span>
                  <span className="sidebar-nav-text">{bal.amount}</span>
                </button>
              ))}
              <button className="sidebar-nav-item">
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: "1px dashed var(--drp-grey)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: "var(--drp-grey)",
                    flexShrink: 0,
                  }}
                >
                  +
                </div>
                <span className="sidebar-nav-text">Open a balance</span>
              </button>
            </div>
          </>
        )}
      </nav>

      <div className="sidebar-user">
        <div
          className="sidebar-avatar"
          style={{
            background:
              "linear-gradient(135deg, var(--drp-orange), var(--drp-pink))",
            width: 32,
            height: 32,
          }}
        />
        <div className="sidebar-user-info">
          <div className="sidebar-user-name">Henry Richardson</div>
        </div>
        <button className="sidebar-user-menu-btn">...</button>
      </div>
    </aside>
  );
};

// ─── Top bar ──────────────────────────────────────────────────────────────────

const TopBar: React.FC = () => (
  <div className="topbar">
    <div className="topbar-left">
      <h1 className="topbar-title">Transactions</h1>
    </div>
    <div className="topbar-right">
      <button className="topbar-icon-btn">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button className="topbar-icon-btn">
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

// ─── Footer ───────────────────────────────────────────────────────────────────

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

// ─── Transaction data ─────────────────────────────────────────────────────────

interface TxRow {
  icon: string;
  iconBg: string;
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
    iconBg: "var(--drp-pink)",
    name: "Vodafone account top up  ****04",
    sub: "Phone payment",
    date: "4 Aug 1:00 PM",
    fee: "$2,90",
    amount: "- $4.20",
    isPositive: false,
  },
  {
    icon: "C",
    iconBg: "var(--drp-blue)",
    name: "Money transfer to John Doe",
    sub: "Bank transfer",
    date: "5 Aug 3:00 PM",
    fee: "$6,40",
    amount: "- $10,480.00",
    isPositive: false,
  },
  {
    icon: "A",
    iconBg: "var(--drp-pink)",
    name: "ATM Cash withdrawal",
    sub: "Cash",
    date: "6 Aug 2:15 AM",
    fee: "$6,30",
    amount: "- $201.50",
    isPositive: false,
  },
  {
    icon: "a",
    iconBg: "var(--drp-orange)",
    name: "Online purchase on Amazon.com",
    sub: "Online payment",
    date: "7 Aug 5:40 PM",
    fee: "$8,85",
    amount: "- $184.00",
    isPositive: false,
  },
  {
    icon: "I",
    iconBg: "var(--drp-black)",
    name: "Income payment for projects",
    sub: "Bank transfer",
    date: "7 Aug 6:20 PM",
    fee: "$4,60",
    amount: "+ $3.000.00",
    isPositive: true,
  },
  {
    icon: "A",
    iconBg: "var(--drp-pink)",
    name: "Monthly home rent",
    sub: "Bank transfer",
    date: "8 Aug 1:00 AM",
    fee: "$6,60",
    amount: "- $400.00",
    isPositive: false,
  },
  {
    icon: "I",
    iconBg: "var(--drp-black)",
    name: "Income payment for provided services",
    sub: "Bank transfer",
    date: "10 Aug 4:50 PM",
    fee: "$6,50",
    amount: "+ $11.400.00",
    isPositive: true,
  },
  {
    icon: "P",
    iconBg: "var(--drp-blue)",
    name: "Online purchase at Ebay.com",
    sub: "Online payment",
    date: "12 Aug 3:10 PM",
    fee: "$8,80",
    amount: "- $396.00",
    isPositive: false,
  },
  {
    icon: "S",
    iconBg: "var(--drp-purple)",
    name: "IOfinance UI kit purchase",
    sub: "Online payment",
    date: "14 Aug 4:20 AM",
    fee: "$3,75",
    amount: "- $28.00",
    isPositive: false,
  },
  {
    icon: "W",
    iconBg: "var(--drp-mint)",
    name: "Intenet payment",
    sub: "Utility payment",
    date: "14 Aug 7:00 AM",
    fee: "$4,20",
    amount: "- $4.20",
    isPositive: false,
  },
];

// ─── Transaction icon ─────────────────────────────────────────────────────────

const TxIcon: React.FC<{ tx: TxRow }> = ({ tx }) => (
  <div
    className="sidebar-avatar"
    style={{
      background: tx.iconBg,
      width: 40,
      height: 40,
      fontSize: 14,
      flexShrink: 0,
    }}
  >
    {tx.icon}
  </div>
);

// ─── Sort icon ────────────────────────────────────────────────────────────────

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

// ─── Pagination ───────────────────────────────────────────────────────────────

const TablePagination: React.FC = () => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{
      padding: "var(--drp-space-3) var(--drp-space-4)",
      borderTop: "var(--drp-border-thin)",
    }}
  >
    <button className="drp-btn drp-btn--outline drp-btn--sm">
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Prev
    </button>
    <span className="drp-text drp-text--sm drp-text--muted">Page 1 of 10</span>
    <button className="drp-btn drp-btn--outline drp-btn--sm">
      Next
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
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
);

// ─── Account tabs + filter bar ────────────────────────────────────────────────

const AccountTabBar: React.FC<{ filterLabel?: string }> = ({
  filterLabel = "Apply Filter",
}) => {
  const [activeTab, setActiveTab] = useState("All Accounts");
  const tabs = ["All Accounts", "USD Account", "EUR Account", "GBP Account"];

  return (
    <div className="drp-flex drp-items-center drp-justify-between drp-mb-4">
      <div className="drp-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`drp-tab ${tab === activeTab ? "drp-tab--active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="drp-flex drp-items-center drp-gap-2">
        <button className="drp-btn drp-btn--outline drp-btn--sm">
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          {filterLabel}
        </button>
        <button className="drp-btn drp-btn--outline drp-btn--sm">
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
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Export to CSV
        </button>
      </div>
    </div>
  );
};

// ─── List V1 content ──────────────────────────────────────────────────────────

const ListV1Content: React.FC = () => (
  <div className="content">
    <AccountTabBar />
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      {TRANSACTIONS.map((tx, i) => (
        <div
          key={i}
          className="drp-flex drp-items-center drp-gap-4"
          style={{
            padding: "var(--drp-space-4) var(--drp-space-5)",
            borderBottom:
              i < TRANSACTIONS.length - 1 ? "var(--drp-border-thin)" : "none",
          }}
        >
          <TxIcon tx={tx} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="drp-text drp-text--bold">{tx.name}</div>
            <div className="drp-caption">{tx.sub}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div
              className="drp-text drp-text--bold"
              style={{
                color: tx.isPositive ? "var(--drp-mint)" : "var(--drp-black)",
              }}
            >
              {tx.amount}
            </div>
            <div className="drp-caption">{tx.date}</div>
          </div>
          <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
            ...
          </button>
        </div>
      ))}
    </div>
  </div>
);

// ─── List V2 content ──────────────────────────────────────────────────────────

const ListV2Content: React.FC = () => {
  const rows = TRANSACTIONS.slice(0, 9);

  return (
    <div className="content">
      <AccountTabBar />
      <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="drp-table">
          <thead>
            <tr>
              <th>
                Date &amp; Time <SortIcon />
              </th>
              <th>
                Payment <SortIcon />
              </th>
              <th>
                Service <SortIcon />
              </th>
              <th>
                Fee <SortIcon />
              </th>
              <th style={{ textAlign: "right" }}>
                Price <SortIcon />
              </th>
              <th style={{ width: 40 }}></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((tx, i) => (
              <tr key={i}>
                <td>
                  <span className="drp-text drp-text--sm drp-text--muted">
                    {tx.date}
                  </span>
                </td>
                <td>
                  <div className="drp-flex drp-items-center drp-gap-3">
                    <TxIcon tx={tx} />
                    <span className="drp-text drp-text--bold">{tx.name}</span>
                  </div>
                </td>
                <td>
                  <span className="drp-text drp-text--sm drp-text--muted">
                    {tx.sub}
                  </span>
                </td>
                <td>
                  <span className="drp-text drp-text--sm">{tx.fee}</span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span
                    className="drp-text drp-text--bold"
                    style={{
                      color: tx.isPositive
                        ? "var(--drp-mint)"
                        : "var(--drp-black)",
                    }}
                  >
                    {tx.amount}
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
};

// ─── Invoice modal ────────────────────────────────────────────────────────────

const InvoiceModal: React.FC = () => (
  <div className="drp-overlay">
    <div
      className="drp-modal"
      style={{ width: 480, overflow: "hidden", padding: 0 }}
    >
      {/* Purple header */}
      <div
        style={{
          background: "var(--drp-purple)",
          padding: "var(--drp-space-5) var(--drp-space-6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
        }}
      >
        <span
          className="drp-text drp-text--bold"
          style={{ color: "var(--drp-white)", flex: 1 }}
        >
          Transaction details
        </span>
        <button
          className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm"
          style={{ color: "var(--drp-white)" }}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Avatar + details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: -24,
          padding: "var(--drp-space-2) var(--drp-space-8) var(--drp-space-6)",
        }}
      >
        <div
          className="sidebar-avatar"
          style={{
            width: 56,
            height: 56,
            background: "var(--drp-cream)",
            border: "4px solid var(--drp-white)",
            fontSize: 20,
            color: "var(--drp-black)",
            marginBottom: "var(--drp-space-4)",
          }}
        >
          S
        </div>
        <h2 className="drp-h5" style={{ marginBottom: 4 }}>
          2,702.12 USD to James Dean
        </h2>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginBottom: "var(--drp-space-3)" }}
        >
          Completed Thursday 29 April
        </p>
        <span className="drp-tag drp-tag--mint drp-tag--filled">Paid</span>
      </div>

      {/* Details */}
      <div
        style={{
          padding: "0 var(--drp-space-8) var(--drp-space-6)",
          borderTop: "var(--drp-border-thin)",
        }}
      >
        {/* Send To / Amount */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--drp-space-4)",
            paddingTop: "var(--drp-space-5)",
            paddingBottom: "var(--drp-space-4)",
          }}
        >
          <div>
            <p className="drp-caption" style={{ marginBottom: 4 }}>
              Send To
            </p>
            <p className="drp-text drp-text--bold">James Dean</p>
            <p className="drp-text drp-text--sm drp-text--muted">
              james.dea89@gmail.com
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p className="drp-caption" style={{ marginBottom: 4 }}>
              Amount
            </p>
            <p className="drp-text drp-text--bold">2,702.12 USD</p>
          </div>
        </div>

        <div
          style={{
            borderTop: "var(--drp-border-dashed)",
            margin: "var(--drp-space-2) 0",
          }}
        />

        {/* Bank Details / Exchange Rate */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--drp-space-4)",
            paddingTop: "var(--drp-space-4)",
            paddingBottom: "var(--drp-space-6)",
          }}
        >
          <div>
            <p className="drp-caption" style={{ marginBottom: 4 }}>
              Bank Details
            </p>
            <p className="drp-text drp-text--sm">GE91TB7752145031788598</p>
            <p className="drp-text drp-text--sm">TBCBGE22</p>
            <p className="drp-text drp-text--sm">Transfer #241894617</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p className="drp-caption" style={{ marginBottom: 4 }}>
              Exchange Rate
            </p>
            <p className="drp-text drp-text--sm">1.00000</p>
          </div>
        </div>

        {/* Actions */}
        <div className="drp-flex drp-gap-4">
          <button className="drp-btn drp-btn--outline" style={{ flex: 1 }}>
            Print
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
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
          </button>
          <button className="drp-btn drp-btn--outline" style={{ flex: 1 }}>
            Issue Refund
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ─── Invoice variant: list v2 + modal ─────────────────────────────────────────

const InvoiceContent: React.FC = () => {
  const rows = TRANSACTIONS.slice(0, 9);

  return (
    <>
      <div className="content">
        {/* Filter bar with August 2023 label */}
        <div className="drp-flex drp-items-center drp-justify-between drp-mb-4">
          <div className="drp-tabs">
            {["All Accounts", "USD Account", "EUR Account", "GBP Account"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`drp-tab ${tab === "All Accounts" ? "drp-tab--active" : ""}`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
          <div className="drp-flex drp-items-center drp-gap-2">
            <button className="drp-btn drp-btn--outline drp-btn--sm">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              August 2023
            </button>
            <button className="drp-btn drp-btn--outline drp-btn--sm">
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
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Export to CSV
            </button>
          </div>
        </div>

        <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
          <table className="drp-table">
            <thead>
              <tr>
                <th>
                  Date &amp; Time <SortIcon />
                </th>
                <th>
                  Payment <SortIcon />
                </th>
                <th>
                  Service <SortIcon />
                </th>
                <th>
                  Fee <SortIcon />
                </th>
                <th style={{ textAlign: "right" }}>
                  Price <SortIcon />
                </th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((tx, i) => (
                <tr key={i}>
                  <td>
                    <span className="drp-text drp-text--sm drp-text--muted">
                      {tx.date}
                    </span>
                  </td>
                  <td>
                    <div className="drp-flex drp-items-center drp-gap-3">
                      <TxIcon tx={tx} />
                      <span className="drp-text drp-text--bold">{tx.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="drp-text drp-text--sm drp-text--muted">
                      {tx.sub}
                    </span>
                  </td>
                  <td>
                    <span className="drp-text drp-text--sm">{tx.fee}</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span
                      className="drp-text drp-text--bold"
                      style={{
                        color: tx.isPositive
                          ? "var(--drp-mint)"
                          : "var(--drp-black)",
                      }}
                    >
                      {tx.amount}
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

      {/* Modal overlay */}
      <InvoiceModal />
    </>
  );
};

// ─── Empty state content ──────────────────────────────────────────────────────

const EmptyContent: React.FC = () => (
  <div
    className="content"
    style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      overflow: "hidden",
    }}
  >
    {/* Decorative blobs */}
    <div
      style={{
        position: "absolute",
        top: -80,
        right: 0,
        width: 500,
        height: 500,
        borderRadius: "50%",
        opacity: 0.7,
        background:
          "radial-gradient(circle, var(--drp-yellow) 0%, var(--drp-mint) 40%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "25%",
        left: 0,
        width: 300,
        height: 300,
        borderRadius: "50%",
        opacity: 0.6,
        background:
          "radial-gradient(circle, var(--drp-purple) 0%, var(--drp-purple) 40%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: "25%",
        width: 250,
        height: 250,
        borderRadius: "50%",
        opacity: 0.5,
        background:
          "radial-gradient(circle, var(--drp-orange) 0%, var(--drp-pink) 50%, transparent 70%)",
        pointerEvents: "none",
      }}
    />

    {/* Content */}
    <div className="drp-empty" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: "var(--drp-space-6)" }}>
        <svg
          width="64"
          height="64"
          style={{ color: "var(--drp-black)" }}
          fill="none"
          viewBox="0 0 64 64"
          stroke="currentColor"
        >
          <rect x="8" y="32" width="12" height="24" rx="2" strokeWidth={3} />
          <rect x="26" y="20" width="12" height="36" rx="2" strokeWidth={3} />
          <rect x="44" y="8" width="12" height="48" rx="2" strokeWidth={3} />
        </svg>
      </div>
      <h2 className="drp-h2" style={{ marginBottom: "var(--drp-space-3)" }}>
        No transactions found?
      </h2>
      <p
        className="drp-text drp-text--sm drp-text--muted"
        style={{
          marginBottom: "var(--drp-space-8)",
          maxWidth: 320,
          textAlign: "center",
        }}
      >
        Try to make payments for your bills and products or create a new
        currency account from scratch.
      </p>
      <button className="drp-btn drp-btn--primary">
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
  const renderContent = () => {
    switch (variant) {
      case "listV1":
        return <ListV1Content />;
      case "listV2":
        return <ListV2Content />;
      case "invoice":
        return <InvoiceContent />;
      case "empty":
        return <EmptyContent />;
      default:
        return <ListV1Content />;
    }
  };

  return (
    <div className="app-layout">
      <DoctorProjectSidebar variant={variant} />
      <div className="main-content" style={{ marginLeft: 280 }}>
        <TopBar />
        {renderContent()}
        <Footer />
      </div>
    </div>
  );
};

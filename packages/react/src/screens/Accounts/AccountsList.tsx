import React from "react";

interface AccountsListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2";
}

const BruddleSidebar: React.FC = () => (
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
            { label: "Accounts", icon: "▣", active: true },
            { label: "Transactions", icon: "⇄" },
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
    </div>

    {/* User profile */}
    <div className="px-4 py-4 border-t border-white/10">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
          <span className="text-sm text-gray-200">Henry Richardson</span>
        </div>
        <button className="text-gray-500 hover:text-white">···</button>
      </div>
    </div>
  </div>
);

const TopBar: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div
    className={`flex items-center justify-between px-8 py-4 border-b ${
      theme === "dark"
        ? "bg-[#111111] border-white/10"
        : "bg-[#f5efe6] border-black/10"
    }`}
  >
    <h1
      className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      Accounts
    </h1>
    <div className="flex items-center gap-4">
      <button
        className={`p-2 rounded-lg hover:bg-white/10 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
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
      <button
        className={`p-2 rounded-lg hover:bg-white/10 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
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

const Footer: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div
    className={`flex items-center justify-between px-8 py-3 border-t text-sm ${
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

// Simple SVG line chart
const LineChart: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const points = [
    30, 45, 35, 55, 40, 60, 50, 70, 55, 80, 65, 90, 75, 85, 95, 80, 100, 85,
    110, 90, 120,
  ];
  const max = Math.max(...points);
  const width = 900;
  const height = 160;
  const padX = 20;
  const padY = 10;
  const chartW = width - padX * 2;
  const chartH = height - padY * 2;

  const pathD = points
    .map((p, i) => {
      const x = padX + (i / (points.length - 1)) * chartW;
      const y = padY + chartH - (p / max) * chartH;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaD = `${pathD} L ${padX + chartW} ${padY + chartH} L ${padX} ${padY + chartH} Z`;

  const lastX = padX + chartW;
  const lastY = padY + chartH - (points[points.length - 1] / max) * chartH;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-32"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#areaGrad)" />
        <path d={pathD} fill="none" stroke="#4ade80" strokeWidth="2.5" />
        <circle cx={lastX} cy={lastY} r="6" fill="#4ade80" />
      </svg>
      {/* Tooltip */}
      <div
        className={`absolute top-4 right-20 px-3 py-2 rounded-lg shadow-lg text-sm ${theme === "dark" ? "bg-[#1e1e1e] text-white border border-white/10" : "bg-white text-black border border-black/10"}`}
      >
        <div className="text-xs text-gray-500 mb-0.5">June 16</div>
        <div className="font-bold">$14.800</div>
      </div>
    </div>
  );
};

const CardRow: React.FC<{
  icon: React.ReactNode;
  cardNumber: string;
  balance: string;
  blocked: string;
  valid: string;
  status: "Active" | "Closed";
  theme: "light" | "dark";
}> = ({ icon, cardNumber, balance, blocked, valid, status, theme }) => (
  <div
    className={`flex items-center gap-4 px-4 py-3 border-b last:border-b-0 ${theme === "dark" ? "border-white/5" : "border-black/5"}`}
  >
    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div
        className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {cardNumber}
      </div>
      <div className="text-xs text-gray-500">Card number</div>
    </div>
    <div className="text-right">
      <div
        className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {balance}
      </div>
      <div className="text-xs text-gray-500">Balance</div>
    </div>
    <div className="text-right">
      <div
        className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {blocked}
      </div>
      <div className="text-xs text-gray-500">Blocked amount</div>
    </div>
    <div className="text-right">
      <div
        className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {valid}
      </div>
      <div className="text-xs text-gray-500">Valid</div>
    </div>
    <div className="flex items-center gap-1.5">
      <span
        className={`w-2 h-2 rounded-full ${status === "Active" ? "bg-green-400" : "bg-red-400"}`}
      ></span>
      <span
        className={`text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
      >
        {status}
      </span>
    </div>
    <button className="text-gray-400 hover:text-gray-600">···</button>
  </div>
);

const V1Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const sectionTitle = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="flex-1 overflow-auto p-6 space-y-4">
      {/* Your cards */}
      <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-inherit">
          <h2 className={`text-base font-semibold ${sectionTitle}`}>
            Your cards
          </h2>
          <button className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
            Open new deposit
          </button>
        </div>
        <div className="px-4 py-2">
          <LineChart theme={theme} />
        </div>
        <div>
          <CardRow
            theme={theme}
            icon={<span className="text-blue-600 font-black text-lg">V</span>}
            cardNumber="3210 **** **** 7890"
            balance="$88,200.00"
            blocked="$1,200.00"
            valid="06/22"
            status="Active"
          />
          <CardRow
            theme={theme}
            icon={
              <div className="w-7 h-5 rounded bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
                <span className="text-[10px] text-white">◑</span>
              </div>
            }
            cardNumber="8210 **** **** 4340"
            balance="$64,120.50"
            blocked="$1,960.00"
            valid="06/23"
            status="Active"
          />
          <CardRow
            theme={theme}
            icon={
              <div className="w-7 h-5 rounded bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
                <span className="text-[10px] text-white">◑</span>
              </div>
            }
            cardNumber="8210 **** **** 4990"
            balance="$0.50"
            blocked="$60.00"
            valid="06/23"
            status="Active"
          />
        </div>
      </div>

      {/* Your deposits */}
      <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-inherit">
          <h2 className={`text-base font-semibold ${sectionTitle}`}>
            Your deposits
          </h2>
          <button className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
            Open new deposit
          </button>
        </div>
        <div>
          {[
            {
              name: "Cumulative deposit",
              balance: "$94,800.50",
              accrued: "$2,530.00",
              valid: "04/23",
              status: "Active" as const,
              initials: "U",
            },
            {
              name: "Cumulative deposit",
              balance: "$55,400.00",
              accrued: "$1,500.00",
              valid: "04/20",
              status: "Closed" as const,
              initials: "A",
            },
          ].map((dep, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-4 py-3 border-b last:border-b-0 ${theme === "dark" ? "border-white/5" : "border-black/5"}`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold ${i === 0 ? "bg-gray-700" : "bg-gray-500"}`}
              >
                {dep.initials}
              </div>
              <div className="flex-1">
                <div
                  className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {dep.name}
                </div>
                <div className="text-xs text-gray-500">Name</div>
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {dep.balance}
                </div>
                <div className="text-xs text-gray-500">Balance</div>
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {dep.accrued}
                </div>
                <div className="text-xs text-gray-500">Accured</div>
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {dep.valid}
                </div>
                <div className="text-xs text-gray-500">Valid</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${dep.status === "Active" ? "bg-green-400" : "bg-red-400"}`}
                ></span>
                <span
                  className={`text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                >
                  {dep.status}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">···</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LimitBar: React.FC<{
  label: string;
  spent: string;
  left: string;
  color: string;
  pct: number;
  theme: "light" | "dark";
}> = ({ label, spent, left, color, pct, theme }) => (
  <div
    className={`py-4 border-b last:border-b-0 ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
  >
    <h3
      className={`text-sm font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      {label}
    </h3>
    <div
      className={`w-full h-1.5 rounded-full mb-2 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
    >
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${pct}%` }}
      ></div>
    </div>
    <div className="flex justify-between text-xs text-gray-500">
      <span>
        <span
          className={`font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
        >
          {spent}
        </span>{" "}
        Spent
      </span>
      <span>
        <span
          className={`font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
        >
          {left}
        </span>{" "}
        Left
      </span>
    </div>
  </div>
);

const V2Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";

  const transfers = [
    {
      icon: "A",
      iconBg: "bg-orange-500",
      label: "Monthly home rent",
      sub: "Bank transfer",
      amount: "- $400.00",
      time: "8 Aug 1:00 AM",
      neg: true,
    },
    {
      icon: "I",
      iconBg: "bg-gradient-to-br from-gray-800 to-gray-600",
      label: "Income payment for provided services",
      sub: "Bank transfer",
      amount: "+ $11,400.00",
      time: "10 Aug 4:50 PM",
      neg: false,
    },
    {
      icon: "E",
      iconBg: "bg-blue-600",
      label: "Online purchase at Ebay.com",
      sub: "Online payment",
      amount: "- $396.00",
      time: "12 Aug 3:10 PM",
      neg: true,
    },
    {
      icon: "S",
      iconBg: "bg-blue-500",
      label: "IOfinance UI kit purchase",
      sub: "Online payment",
      amount: "- $28.00",
      time: "14 Aug 4:20 AM",
      neg: true,
    },
    {
      icon: "W",
      iconBg: "bg-cyan-500",
      label: "Intenet payment",
      sub: "Utility payment",
      amount: "- $4.20",
      time: "14 Aug 7:00 AM",
      neg: true,
    },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 flex gap-4">
      {/* Left: Your cards */}
      <div
        className={`flex-1 rounded-xl border ${cardBg} overflow-hidden flex flex-col`}
      >
        {/* Tabs */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-inherit">
          <h2
            className={`text-base font-semibold mr-4 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Your cards
          </h2>
          <button
            className={`px-4 py-1.5 rounded-lg text-sm font-medium ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}
          >
            Overview
          </button>
          <button className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700">
            Currency
          </button>
          <button className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700">
            Statement
          </button>
        </div>

        {/* Card visualization */}
        <div className="px-6 py-5 flex gap-6 items-start border-b border-inherit">
          {/* Card */}
          <div className="w-[260px] h-[160px] rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-5 flex-shrink-0 relative shadow-lg">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gray-600 -ml-1"></div>
                <div className="w-4 h-4 rounded-full bg-gray-400 -ml-2"></div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-white font-bold text-lg tracking-widest">
                3400 5678 9804 3002
              </div>
              <div className="text-purple-200 text-xs mt-1">Card number</div>
            </div>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-white font-semibold text-sm">
                  Barry Armstrong
                </div>
                <div className="text-purple-200 text-xs">Cardholder</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">06 / 26</div>
                <div className="text-purple-200 text-xs">Valid</div>
              </div>
            </div>
          </div>

          {/* Card details */}
          <div>
            <div
              className={`text-3xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              42.800 USD
            </div>
            <div className="text-sm text-gray-500 mb-4">Available amount</div>
            <div
              className={`text-base font-semibold mb-0.5 ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              UK64CT00000010034567
            </div>
            <div className="text-sm text-gray-500 mb-4">Account number</div>
            <button
              className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${theme === "dark" ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/5"}`}
            >
              Get card details
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 py-3 border-b border-inherit">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <span
            className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}
          ></span>
          <span
            className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}
          ></span>
        </div>

        {/* Latest transfers */}
        <div className="px-5 py-4">
          <h3
            className={`text-sm font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Latest transfers
          </h3>
          <div>
            {transfers.map((t, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 py-3 border-b last:border-b-0 ${theme === "dark" ? "border-white/5" : "border-black/5"}`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${t.iconBg}`}
                >
                  {t.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm font-medium truncate ${theme === "dark" ? "text-white" : "text-black"}`}
                  >
                    {t.label}
                  </div>
                  <div className="text-xs text-gray-500">{t.sub}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div
                    className={`text-sm font-semibold ${t.neg ? "text-red-500" : "text-green-500"}`}
                  >
                    {t.amount}
                  </div>
                  <div className="text-xs text-gray-500">{t.time}</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                  ···
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Your limits */}
      <div
        className={`w-[280px] flex-shrink-0 rounded-xl border ${cardBg} overflow-hidden flex flex-col`}
      >
        <div className="px-5 py-4 border-b border-inherit">
          <h2
            className={`text-base font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Your limits
          </h2>
        </div>
        <div className="px-5 flex-1">
          <LimitBar
            theme={theme}
            label="ATM Withdrawals"
            spent="$5,100.00"
            left="$1,800.00"
            color="bg-green-400"
            pct={75}
          />
          <LimitBar
            theme={theme}
            label="Daily ATM Withdrawals"
            spent="$600.00"
            left="$400.00"
            color="bg-red-400"
            pct={60}
          />
          <LimitBar
            theme={theme}
            label="Cash In in ATMs"
            spent="$1,500.00"
            left="$8,500.00"
            color="bg-yellow-500"
            pct={15}
          />
          <LimitBar
            theme={theme}
            label="Online Purchase"
            spent="$1,500.00"
            left="$8,500.00"
            color="bg-green-400"
            pct={15}
          />
        </div>
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Setup limits
          </button>
        </div>
      </div>
    </div>
  );
};

export const AccountsList: React.FC<AccountsListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const bg = theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f5efe6]";

  return (
    <div className={`flex h-screen ${bg}`}>
      <BruddleSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar theme={theme} />
        {variant === "v1" ? (
          <V1Content theme={theme} />
        ) : (
          <V2Content theme={theme} />
        )}
        <Footer theme={theme} />
      </div>
    </div>
  );
};

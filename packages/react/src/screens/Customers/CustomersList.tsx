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

const BruddleSidebar: React.FC = () => (
  <div className="w-[160px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    {/* Logo */}
    <div className="px-5 py-5">
      <div className="flex items-center gap-1">
        <span className="text-lg font-bold text-white">Bruddle</span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mb-3"></span>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-5">
      {/* Navigation */}
      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        <nav className="space-y-0.5">
          {[
            { label: "Dashboard", icon: "dashboard" },
            { label: "Products", icon: "products" },
            { label: "Contacts", icon: "contacts" },
            {
              label: "Customers",
              icon: "customers",
              active: true,
              badge: 15,
              badgeColor: "bg-purple-600",
            },
            {
              label: "Sales",
              icon: "sales",
              badge: 14,
              badgeColor: "bg-green-500",
            },
            { label: "Analytics", icon: "analytics" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between px-2 py-2 rounded-lg text-xs transition-colors ${
                item.active
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <NavIcon name={item.icon} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] text-white px-1.5 py-0.5 rounded ${item.badgeColor}`}
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
        <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
          Team Members
        </p>
        <div className="space-y-0.5">
          {[
            { name: "Alexandre Paiva", color: "bg-orange-400" },
            { name: "Thanawan Chadee", color: "bg-blue-400" },
            { name: "Justine Robinson", color: "bg-pink-400" },
          ].map((member) => (
            <button
              key={member.name}
              className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5"
            >
              <div
                className={`w-5 h-5 rounded-full ${member.color} flex-shrink-0`}
              ></div>
              <span className="truncate">{member.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-gray-500 hover:text-gray-300">
            <svg
              className="w-3 h-3"
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
          </button>
        </div>
      </div>
    </div>

    {/* User profile */}
    <div className="px-3 py-4 border-t border-white/10">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
          <span className="text-xs text-gray-200 truncate">
            Henry Richardson
          </span>
        </div>
        <button className="text-gray-500 hover:text-white text-xs">···</button>
      </div>
    </div>
  </div>
);

const NavIcon: React.FC<{ name: string }> = ({ name }) => {
  const cls = "w-3.5 h-3.5 flex-shrink-0";
  switch (name) {
    case "dashboard":
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "products":
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
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );
    case "contacts":
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "customers":
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "sales":
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
  }
};

// ─── Top Bar ─────────────────────────────────────────────────────────────────

const TopBar: React.FC<{
  title?: string;
  theme: "light" | "dark";
  showBack?: boolean;
}> = ({ title = "Customers", theme, showBack = false }) => (
  <div
    className={`flex items-center justify-between px-6 py-4 ${
      theme === "dark" ? "bg-[#111111]" : "bg-[#f5efe6]"
    }`}
  >
    <div className="flex items-center gap-3">
      {showBack && (
        <button
          className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
            theme === "dark"
              ? "border-white/20 text-white"
              : "border-black/20 text-black"
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
        className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {title}
      </h1>
    </div>
    <div className="flex items-center gap-2">
      <button className="text-gray-400 hover:text-gray-600">···</button>
      <button className="text-gray-400 hover:text-gray-600">···</button>
      <button
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
          theme === "dark"
            ? "text-gray-200 hover:bg-white/10"
            : "text-gray-700 hover:bg-black/5"
        }`}
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        Apps
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-colors">
        <span className="text-base leading-none">+</span>
        Create new
      </button>
    </div>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div
    className={`flex items-center justify-between px-6 py-2.5 border-t text-xs ${
      theme === "dark"
        ? "bg-[#111111] border-white/10 text-gray-500"
        : "bg-[#f5efe6] border-black/10 text-gray-500"
    }`}
  >
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-1.5 hover:opacity-80">
        <svg
          className="w-3.5 h-3.5"
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
    <div className="flex items-center gap-1.5">
      <button
        className={`p-1.5 rounded ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
      >
        <svg
          className="w-3 h-3"
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
          className="w-3 h-3"
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

// ─── Pagination ───────────────────────────────────────────────────────────────

const Pagination: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => (
  <div
    className={`flex items-center justify-between px-4 py-3 border-t ${
      theme === "dark" ? "border-white/10" : "border-black/10"
    }`}
  >
    <button
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
        theme === "dark"
          ? "border-white/20 text-gray-300 hover:bg-white/5"
          : "border-black/20 text-gray-600 hover:bg-black/5"
      }`}
    >
      <svg
        className="w-3.5 h-3.5"
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
      className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
    >
      Page 1 of 10
    </span>
    <button
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
        theme === "dark"
          ? "border-white/20 text-gray-300 hover:bg-white/5"
          : "border-black/20 text-gray-600 hover:bg-black/5"
      }`}
    >
      Next
      <svg
        className="w-3.5 h-3.5"
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

// ─── Avatar placeholder ───────────────────────────────────────────────────────

const CustomerAvatar: React.FC<{ initials: string; color: string }> = ({
  initials,
  color,
}) => (
  <div
    className={`w-7 h-7 rounded-full ${color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}
  >
    {initials}
  </div>
);

// ─── Tag / Status Badge ───────────────────────────────────────────────────────

const StatusBadge: React.FC<{ status: "Tag" | "Pending" | "center" }> = ({
  status,
}) => {
  if (status === "Tag") {
    return (
      <span className="px-3 py-1 bg-green-400 text-black text-xs font-medium rounded-md">
        Tag
      </span>
    );
  }
  if (status === "Pending") {
    return (
      <span className="px-3 py-1 bg-yellow-300 text-black text-xs font-medium rounded-md">
        Pending
      </span>
    );
  }
  return (
    <span className="px-3 py-1 bg-green-400 text-black text-xs font-medium rounded-md">
      center
    </span>
  );
};

// ─── Customer data ─────────────────────────────────────────────────────────────

const customersV1 = [
  {
    id: "1",
    initials: "DT",
    color: "bg-gray-500",
    name: "Donat Twerski",
    date: "08 Nov 2021",
    email: "pdbaby@verizon.net",
    product: "IOTask Web UI Kit",
    price: "$39.00",
  },
  {
    id: "2",
    initials: "SA",
    color: "bg-blue-500",
    name: "Slawa Antokolskiy",
    date: "19 Jun 2021",
    email: "jshirley@yahoo.ca",
    product: "BetaCRM Web UI Kit",
    price: "$34.50",
  },
  {
    id: "3",
    initials: "SM",
    color: "bg-orange-500",
    name: "Suhalb Al Minhas",
    date: "25 Jan 2021",
    email: "markjug@optonl.net",
    product: "IOTask Web UI Kit",
    price: "$28.00",
  },
  {
    id: "4",
    initials: "FC",
    color: "bg-pink-500",
    name: "Fabiana Capmany",
    date: "17 Dec 2021",
    email: "tangsh@outlook.com",
    product: "BetaCRM Web UI Kit",
    price: "$36.00",
  },
  {
    id: "5",
    initials: "SV",
    color: "bg-purple-500",
    name: "Sanne Viscaal",
    date: "10 Feb 2021",
    email: "krueger@yahoo.com",
    product: "BetaCRM Web UI Kit",
    price: "$24.40",
  },
  {
    id: "6",
    initials: "NM",
    color: "bg-teal-500",
    name: "Naseema Al Morad",
    date: "03 Jun 2021",
    email: "flavell@aol.com",
    product: "Cardify Landing Pages",
    price: "$39.00",
  },
  {
    id: "7",
    initials: "IP",
    color: "bg-red-500",
    name: "Iraj Pirdoost",
    date: "07 Nov 2021",
    email: "hwestli@yahoo.ca",
    product: "IOFinance Web UI Kit",
    price: "$44.90",
  },
  {
    id: "8",
    initials: "SV",
    color: "bg-purple-500",
    name: "Sanne Viscaal",
    date: "01 Nov 2021",
    email: "krueger@yahoo.com",
    product: "IOWallet Mobile App",
    price: "$24.40",
  },
  {
    id: "9",
    initials: "LN",
    color: "bg-green-600",
    name: "Lungelo Ngcaba",
    date: "16 Mar 2021",
    email: "jbryan@icloud.com",
    product: "IOTask Mobile UI Kit",
    price: "$39.00",
  },
];

const customersV2 = [
  {
    id: "1",
    initials: "DT",
    color: "bg-gray-500",
    name: "Donat Twerski",
    product: "IOTask Web UI Kit",
    date: "08 Nov 2023",
    rate: "$25,00",
    status: "Tag" as const,
  },
  {
    id: "2",
    initials: "SA",
    color: "bg-blue-500",
    name: "Slawa Antokolskiy",
    product: "BetaCRM Web UI Kit",
    date: "19 Jun 2023",
    rate: "$34.50",
    status: "Tag" as const,
  },
  {
    id: "3",
    initials: "SM",
    color: "bg-orange-500",
    name: "Suhalb Al Minhas",
    product: "IOTask Web UI Kit",
    date: "25 Jan 2023",
    rate: "$28.00",
    status: "center" as const,
  },
  {
    id: "4",
    initials: "FC",
    color: "bg-pink-500",
    name: "Fabiana Capmany",
    product: "BetaCRM Web UI Kit",
    date: "17 Dec 2023",
    rate: "$36.00",
    status: "Pending" as const,
  },
  {
    id: "5",
    initials: "SV",
    color: "bg-purple-500",
    name: "Sanne Viscaal",
    product: "BetaCRM Web UI Kit",
    date: "10 Feb 2023",
    rate: "$24.40",
    status: "Tag" as const,
  },
  {
    id: "6",
    initials: "NM",
    color: "bg-teal-500",
    name: "Naseema Al Morad",
    product: "Cardify Landing Pages",
    date: "03 Jun 2023",
    rate: "$25,00",
    status: "Pending" as const,
  },
  {
    id: "7",
    initials: "IP",
    color: "bg-red-500",
    name: "Iraj Pirdoost",
    product: "IOFinance Web UI Kit",
    date: "07 Nov 2023",
    rate: "$44.90",
    status: "Tag" as const,
  },
  {
    id: "8",
    initials: "SV",
    color: "bg-purple-500",
    name: "Sanne Viscaal",
    product: "IOWallet Mobile App",
    date: "01 Nov 2023",
    rate: "$24.40",
    status: "Tag" as const,
  },
  {
    id: "9",
    initials: "LN",
    color: "bg-green-600",
    name: "Lungelo Ngcaba",
    product: "IOTask Mobile UI Kit",
    date: "16 Mar 2023",
    rate: "$25,00",
    status: "Tag" as const,
  },
];

const customersV3 = [
  {
    id: "1",
    initials: "GS",
    color: "bg-orange-400",
    name: "Gatsharan Sangrota",
    email: "mahbub@yahoo.ca",
    status: "Tag" as const,
    sales: "$125,00",
    count: 18,
  },
  {
    id: "2",
    initials: "ZN",
    color: "bg-purple-500",
    name: "Zikoranaudo Nkechi",
    email: "donev@att.net",
    status: "Tag" as const,
    sales: "$98,00",
    count: 3,
  },
  {
    id: "3",
    initials: "FR",
    color: "bg-teal-500",
    name: "Faadi Al Rahman",
    email: "daveewart@comcast.net",
    status: "Pending" as const,
    sales: "$350,00",
    count: 7,
  },
  {
    id: "4",
    initials: "OS",
    color: "bg-blue-500",
    name: "Okazaki Suzuko",
    email: "lcheng@att.net",
    status: "Tag" as const,
    sales: "$259,50",
    count: 14,
  },
  {
    id: "5",
    initials: "AO",
    color: "bg-gray-600",
    name: "Afamefuna Okparo",
    email: "staikos@sbcglobal.net",
    status: "Tag" as const,
    sales: "$578,00",
    count: 24,
  },
  {
    id: "6",
    initials: "CM",
    color: "bg-brown-500",
    name: "Conan Matusov",
    email: "jemarch@gmail.com",
    status: "Pending" as const,
    sales: "$625,00",
    count: 15,
  },
  {
    id: "7",
    initials: "TH",
    color: "bg-red-400",
    name: "Trashae Hubbard",
    email: "joehall@arr.net",
    status: "Tag" as const,
    sales: "$49,00",
    count: 2,
  },
  {
    id: "8",
    initials: "TB",
    color: "bg-green-500",
    name: "Tamas Bunce",
    email: "uncled@optonline.net",
    status: "Tag" as const,
    sales: "$280,00",
    count: 5,
  },
];

// ─── V1: Table with Name/Date/Email/Product/Price ─────────────────────────────

const V1Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const headerText = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const rowText = theme === "dark" ? "text-white" : "text-black";
  const rowBorder = theme === "dark" ? "border-white/5" : "border-black/5";

  return (
    <div className="flex-1 overflow-auto px-6 py-4">
      <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
        {/* Tabs + Actions */}
        <div
          className={`flex items-center justify-between px-4 py-3 border-b ${
            theme === "dark" ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg">
              All Customers
            </button>
            <button
              className={`px-3 py-1.5 text-xs font-medium rounded-lg ${theme === "dark" ? "text-gray-400 hover:bg-white/5" : "text-gray-600 hover:bg-black/5"}`}
            >
              Payment Pending
            </button>
            <button
              className={`px-3 py-1.5 text-xs font-medium rounded-lg ${theme === "dark" ? "text-gray-400 hover:bg-white/5" : "text-gray-600 hover:bg-black/5"}`}
            >
              Paid
            </button>
            <button
              className={`px-3 py-1.5 text-xs font-medium rounded-lg ${theme === "dark" ? "text-gray-400 hover:bg-white/5" : "text-gray-600 hover:bg-black/5"}`}
            >
              Invoice Sent
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                theme === "dark"
                  ? "border-white/20 text-gray-300"
                  : "border-black/20 text-gray-600"
              }`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
              Sort: A-Z
            </button>
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                theme === "dark"
                  ? "border-white/20 text-gray-300"
                  : "border-black/20 text-gray-600"
              }`}
            >
              ··· Bulk Actions
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead>
            <tr
              className={`border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
            >
              <th className="w-8 px-4 py-3">
                <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              </th>
              {["Name", "Date", "Email", "Product", "Price"].map((col) => (
                <th
                  key={col}
                  className={`text-left text-xs font-medium px-3 py-3 ${headerText}`}
                >
                  <span className="flex items-center gap-1">
                    {col}
                    <svg
                      className="w-3 h-3 opacity-50"
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
                  </span>
                </th>
              ))}
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {customersV1.map((customer) => (
              <tr
                key={customer.id}
                className={`border-b last:border-b-0 ${rowBorder} hover:${theme === "dark" ? "bg-white/5" : "bg-black/2"}`}
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <CustomerAvatar
                      initials={customer.initials}
                      color={customer.color}
                    />
                    <span className={`text-xs font-medium ${rowText}`}>
                      {customer.name}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-gray-400"
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
                    <span
                      className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {customer.date}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span
                      className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {customer.email}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span
                      className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {customer.product}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className={`text-xs font-semibold ${rowText}`}>
                    {customer.price}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <button className="text-gray-400 hover:text-gray-600 text-xs">
                    ···
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination theme={theme} />
      </div>
    </div>
  );
};

// ─── V2: Table with Name/Product/Date/Rate/Status ────────────────────────────

const V2Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const headerText = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const rowText = theme === "dark" ? "text-white" : "text-black";
  const rowBorder = theme === "dark" ? "border-white/5" : "border-black/5";
  const btnBorder =
    theme === "dark"
      ? "border-white/20 text-gray-300"
      : "border-black/20 text-gray-600";

  return (
    <div className="flex-1 overflow-auto px-6 py-4">
      <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
        {/* Filters bar */}
        <div
          className={`flex items-center justify-between px-4 py-3 border-b ${
            theme === "dark" ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              All Filters
            </button>
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              Group
            </button>
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
              Sort
            </button>
            <button
              className={`px-2 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              ···
            </button>
          </div>
          <button className={`p-2 rounded-lg border ${btnBorder}`}>
            <svg
              className="w-3.5 h-3.5"
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
        </div>

        {/* Table */}
        <table className="w-full">
          <thead>
            <tr
              className={`border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
            >
              <th className="w-8 px-4 py-3">
                <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              </th>
              {["Name", "Product", "Date", "Rate", "Status"].map((col) => (
                <th
                  key={col}
                  className={`text-left text-xs font-medium px-3 py-3 ${headerText}`}
                >
                  <span className="flex items-center gap-1">
                    {col}
                    <svg
                      className="w-3 h-3 opacity-50"
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
                  </span>
                </th>
              ))}
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {customersV2.map((customer) => (
              <tr
                key={customer.id}
                className={`border-b last:border-b-0 ${rowBorder}`}
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <CustomerAvatar
                      initials={customer.initials}
                      color={customer.color}
                    />
                    <span className={`text-xs font-medium ${rowText}`}>
                      {customer.name}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span
                      className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {customer.product}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span
                    className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {customer.date}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <span className={`text-xs font-semibold ${rowText}`}>
                    {customer.rate}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <StatusBadge status={customer.status} />
                </td>
                <td className="px-3 py-3">
                  <button className="text-gray-400 hover:text-gray-600 text-xs">
                    ···
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination theme={theme} />
      </div>
    </div>
  );
};

// ─── V3: Card grid view ────────────────────────────────────────────────────────

const V3Content: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const outerBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const btnBorder =
    theme === "dark"
      ? "border-white/20 text-gray-300"
      : "border-black/20 text-gray-600";
  const rowText = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="flex-1 overflow-auto px-6 py-4">
      <div className={`rounded-xl border ${outerBg} overflow-hidden`}>
        {/* Filters bar */}
        <div
          className={`flex items-center justify-between px-4 py-3 border-b ${
            theme === "dark" ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              All Filters
            </button>
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              Group
            </button>
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
              Sort
            </button>
            <button
              className={`px-2 py-1.5 rounded-lg text-xs border ${btnBorder}`}
            >
              ···
            </button>
          </div>
          <button className={`p-2 rounded-lg border ${btnBorder}`}>
            <svg
              className="w-3.5 h-3.5"
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
        </div>

        {/* Card Grid */}
        <div className="p-4 grid grid-cols-4 gap-3">
          {customersV3.map((customer) => (
            <div
              key={customer.id}
              className={`rounded-xl border ${cardBg} overflow-hidden`}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-3 pt-3 pb-1">
                <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                <button className="text-gray-400 hover:text-gray-600 text-xs">
                  ···
                </button>
              </div>
              {/* Avatar + info */}
              <div className="flex flex-col items-center px-3 pb-3 text-center">
                <div
                  className={`w-14 h-14 rounded-full ${customer.color} flex items-center justify-center text-white text-lg font-bold mb-2`}
                >
                  {customer.initials}
                </div>
                <div className={`text-xs font-semibold ${rowText} mb-0.5`}>
                  {customer.name}
                </div>
                <div className="text-[10px] text-gray-500 mb-2">
                  {customer.email}
                </div>
                <StatusBadge status={customer.status} />
              </div>
              {/* Stats */}
              <div
                className={`flex border-t ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
              >
                <div
                  className={`flex-1 px-3 py-2 border-r ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
                >
                  <div className={`text-xs font-semibold ${rowText}`}>
                    {customer.sales}
                  </div>
                  <div className="text-[10px] text-gray-500">Sales</div>
                </div>
                <div className="flex-1 px-3 py-2">
                  <div className={`text-xs font-semibold ${rowText}`}>
                    {customer.count}
                  </div>
                  <div className="text-[10px] text-gray-500">Count</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination theme={theme} />
      </div>
    </div>
  );
};

// ─── Details view ──────────────────────────────────────────────────────────────

const DetailsContent: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const rowText = theme === "dark" ? "text-white" : "text-black";
  const labelText = "text-gray-500";
  const rowBorder = theme === "dark" ? "border-white/5" : "border-black/5";

  const orders = [
    {
      id: "1",
      initials: "C",
      color: "bg-gray-400",
      name: "Camera",
      date: "03 Oct 2023",
      amount: "$25,00",
      status: "Tag" as const,
    },
    {
      id: "2",
      initials: "P",
      color: "bg-pink-400",
      name: "Package",
      date: "05 Oct 2023",
      amount: "$137,50",
      status: "Tag" as const,
    },
    {
      id: "3",
      initials: "A",
      color: "bg-teal-500",
      name: "Architecture",
      date: "16 Nov 2023",
      amount: "$245,80",
      status: "Tag" as const,
    },
    {
      id: "4",
      initials: "S",
      color: "bg-orange-400",
      name: "Sneakers",
      date: "28 Nov 2023",
      amount: "$105,50",
      status: "Pending" as const,
    },
  ];

  return (
    <div className="flex-1 overflow-auto px-6 py-4 flex gap-4">
      {/* Left: Customer info */}
      <div className="w-[200px] flex-shrink-0">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center text-white text-xl font-bold mb-3">
          GS
        </div>
        <div className={`text-base font-bold ${rowText} mb-0.5`}>
          Gabriel Soares
        </div>
        <div className={`text-xs ${labelText} mb-4`}>London, UK</div>

        <div
          className={`border-b ${theme === "dark" ? "border-white/10" : "border-black/10"} mb-3`}
        ></div>

        <div className="space-y-3">
          <div>
            <div className={`text-[10px] ${labelText} mb-0.5`}>Email</div>
            <div className={`text-xs ${rowText}`}>gab****@gmail.com</div>
          </div>
          <div>
            <div className={`text-[10px] ${labelText} mb-0.5`}>
              Payment option
            </div>
            <div className={`text-xs ${rowText}`}>PayPal</div>
          </div>
          <div>
            <div className={`text-[10px] ${labelText} mb-0.5`}>Address</div>
            <div className={`text-xs ${rowText}`}>
              Ridge Suite 862, St. Rudy, WA 2317
            </div>
          </div>
          <div>
            <div className={`text-[10px] ${labelText} mb-0.5`}>Phone</div>
            <div className={`text-xs ${rowText}`}>+64 456 869 393</div>
          </div>
          <div>
            <div className={`text-[10px] ${labelText} mb-0.5`}>Public link</div>
            <div className="text-xs text-blue-500 break-all">
              http://whiteul.store/l.saunders
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg">
            <svg
              className="w-3 h-3"
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
            Add new invoice
          </button>
          <button
            className={`p-2 rounded-lg border ${theme === "dark" ? "border-white/20 text-gray-300" : "border-black/20 text-gray-600"}`}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button
            className={`p-2 rounded-lg border ${theme === "dark" ? "border-white/20 text-gray-300" : "border-black/20 text-gray-600"}`}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right: Orders + Delivery */}
      <div className="flex-1 space-y-3 min-w-0">
        {/* Orders history */}
        <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
          <div
            className={`px-4 py-3 border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
          >
            <h3 className={`text-sm font-semibold ${rowText}`}>
              Orders history
            </h3>
          </div>
          <div>
            {orders.map((order) => (
              <div
                key={order.id}
                className={`flex items-center gap-3 px-4 py-3 border-b last:border-b-0 ${rowBorder}`}
              >
                <CustomerAvatar initials={order.initials} color={order.color} />
                <div className={`flex-1 text-xs font-medium ${rowText}`}>
                  {order.name}
                </div>
                <div
                  className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  {order.date}
                </div>
                <div className={`text-xs font-semibold ${rowText}`}>
                  {order.amount}
                </div>
                <StatusBadge status={order.status} />
                <button className="text-gray-400 hover:text-gray-600 text-xs">
                  ···
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery and payments */}
        <div className={`rounded-xl border ${cardBg} overflow-hidden`}>
          <div
            className={`px-4 py-3 border-b ${theme === "dark" ? "border-white/10" : "border-black/10"}`}
          >
            <h3 className={`text-sm font-semibold ${rowText}`}>
              Delivery and payments
            </h3>
          </div>
          <div className="p-4 space-y-4">
            {/* Address */}
            <div>
              <div className={`text-xs font-medium ${rowText} mb-2`}>
                Address
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`rounded-lg border border-dashed p-3 ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
                >
                  <div className={`text-[10px] ${labelText} mb-1`}>
                    Billing address
                  </div>
                  <div
                    className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
                  >
                    Studio 103
                    <br />
                    The Business Centre
                    <br />
                    61 Wellfield Road
                    <br />
                    Cardiff
                    <br />
                    England
                    <br />
                    CF24 3DG
                  </div>
                </div>
                <div
                  className={`rounded-lg border border-dashed p-3 ${theme === "dark" ? "border-white/20" : "border-black/20"}`}
                >
                  <div className={`text-[10px] ${labelText} mb-1`}>
                    Delivery address
                  </div>
                  <div
                    className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
                  >
                    Box 785
                    <br />
                    91 Western Road
                    <br />
                    Brighton
                    <br />
                    England
                    <br />
                    BN1 2NW
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <div className={`text-xs font-medium ${rowText} mb-2`}>
                Payment
              </div>
              <div
                className={`flex items-center gap-3 py-2 border-b ${rowBorder}`}
              >
                <div
                  className={`w-8 h-5 rounded flex items-center justify-center ${theme === "dark" ? "bg-blue-900" : "bg-blue-100"}`}
                >
                  <span className="text-blue-600 text-[10px] font-bold">P</span>
                </div>
                <span className={`text-xs font-medium ${rowText}`}>PayPal</span>
                <span className="px-2 py-0.5 bg-green-400 text-black text-[10px] rounded-md">
                  center
                </span>
                <span className={`text-xs ${labelText}`}>28 Nov 2023</span>
                <span
                  className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  gab****@gmail.com
                </span>
                <button className="ml-auto text-gray-400 hover:text-gray-600 text-xs">
                  ···
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────

export const CustomersList: React.FC<CustomersListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const bg = theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f5efe6]";
  const isDetails = variant === "details";

  return (
    <div className={`flex h-screen ${bg}`}>
      <BruddleSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          title={isDetails ? "All Customers" : "Customers"}
          theme={theme}
          showBack={isDetails}
        />
        {variant === "v1" && <V1Content theme={theme} />}
        {variant === "v2" && <V2Content theme={theme} />}
        {variant === "v3" && <V3Content theme={theme} />}
        {variant === "details" && <DetailsContent theme={theme} />}
        <Footer theme={theme} />
      </div>
    </div>
  );
};

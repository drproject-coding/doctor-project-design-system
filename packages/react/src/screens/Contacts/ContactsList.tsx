import React from "react";

export interface Contact {
  id: string;
  name: string;
  email: string;
  service: string;
  status: "Online" | "Away" | "Offline";
  color: string;
}

export interface ContactsListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2" | "new-contact" | "empty";
}

// Avatar placeholder with initials or colored circle
const Avatar: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 ${color}`}
    >
      {initials}
    </div>
  );
};

const ContactsSidebar: React.FC = () => (
  <div className="w-[155px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    {/* Logo */}
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center gap-0.5">
        <span className="text-lg font-bold text-white tracking-tight">
          Bruddle
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mb-3 ml-0.5"></span>
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
            {
              label: "Dashboard",
              icon: (
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              ),
            },
            {
              label: "Products",
              icon: (
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              ),
            },
            {
              label: "Contacts",
              active: true,
              icon: (
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              label: "Customers",
              badge: 15,
              badgeColor: "bg-purple-600",
              icon: (
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              ),
            },
            {
              label: "Sales",
              badge: 14,
              badgeColor: "bg-green-500",
              icon: (
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              label: "Analytics",
              icon: (
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
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
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
                {item.icon}
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
            { name: "Alexandre Paiva", color: "bg-gray-600" },
            { name: "Thanawan Chadee", color: "bg-orange-500" },
            { name: "Justine Robinson", color: "bg-pink-500" },
          ].map((member) => (
            <button
              key={member.name}
              className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-white/5"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-semibold flex-shrink-0 ${member.color}`}
              >
                {member.name[0]}
              </div>
              <span className="truncate">{member.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-gray-500 hover:text-gray-300">
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span>See More</span>
          </button>
        </div>
      </div>
    </div>

    {/* User profile */}
    <div className="px-3 py-3 border-t border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
          <span className="text-xs text-gray-200 truncate">
            Henry Richardson
          </span>
        </div>
        <button className="text-gray-500 hover:text-white text-xs">···</button>
      </div>
    </div>
  </div>
);

const TopBar: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-4 bg-[#f5efe6]">
    <h1 className="text-3xl font-bold text-black">Contacts</h1>
    <div className="flex items-center gap-3">
      <button className="p-2 rounded-lg hover:bg-black/5 text-gray-500">
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
      <button className="p-2 rounded-lg hover:bg-black/5 text-gray-500">
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
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-black/5">
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
        ··· Apps
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
        <span className="text-base leading-none">+</span>
        Create new
      </button>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-3 border-t border-black/10 bg-[#f5efe6] text-sm text-gray-500">
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

// Sort icon
const SortIcon: React.FC = () => (
  <svg
    className="w-3.5 h-3.5 inline ml-1"
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

// V1 contacts with Name, Email, Service, Status
const v1Contacts = [
  {
    name: "Darius Cummings",
    email: "balchen@msn.com",
    service: "Development",
    status: "Online" as const,
    color: "bg-orange-500",
  },
  {
    name: "Sampson Totton",
    email: "claypool@comcast.net",
    service: "Design",
    status: "Away" as const,
    color: "bg-blue-600",
  },
  {
    name: "Jaroslav Brabec",
    email: "ehood@comcast.net",
    service: "Marketing",
    status: "Away" as const,
    color: "bg-pink-500",
  },
  {
    name: "Olivia Eklund",
    email: "hoyer@icloud.com",
    service: "Development",
    status: "Online" as const,
    color: "bg-teal-500",
  },
  {
    name: "Leo Knight",
    email: "mpiotr@me.com",
    service: "Management",
    status: "Offline" as const,
    color: "bg-purple-600",
  },
  {
    name: "Siri Jakobsson",
    email: "marnanel@outlook.com",
    service: "Promotion",
    status: "Online" as const,
    color: "bg-green-600",
  },
  {
    name: "Mariano Rasgado",
    email: "fraterk@me.com",
    service: "Marketing",
    status: "Offline" as const,
    color: "bg-red-500",
  },
  {
    name: "Hugo Assunção",
    email: "jugalator@me.com",
    service: "Development",
    status: "Away" as const,
    color: "bg-indigo-500",
  },
  {
    name: "Olivia Arribas",
    email: "glenz@outlook.com",
    service: "Marketing",
    status: "Online" as const,
    color: "bg-yellow-600",
  },
];

// V2 contacts with Name, Email, Access (toggle)
const v2Contacts = [
  {
    name: "Nadine Petrolli",
    email: "balchen@msn.com",
    accessOn: true,
    color: "bg-orange-500",
  },
  {
    name: "Njimoluh Ebua",
    email: "claypool@comcast.net",
    accessOn: true,
    color: "bg-blue-600",
  },
  {
    name: "Laura Sofia Ureña",
    email: "ehood@comcast.net",
    accessOn: true,
    color: "bg-pink-500",
  },
  {
    name: "Boniface Esanji",
    email: "hoyer@icloud.com",
    accessOn: true,
    color: "bg-teal-500",
  },
  {
    name: "Phạm Quốc Hùng",
    email: "mpiotr@me.com",
    accessOn: true,
    color: "bg-purple-600",
  },
  {
    name: "Anje Keizer",
    email: "marnanel@outlook.com",
    accessOn: true,
    color: "bg-green-600",
  },
  {
    name: "Igor Antonovich",
    email: "fraterk@me.com",
    accessOn: false,
    color: "bg-red-500",
  },
  {
    name: "Pavith Nadal",
    email: "jugalator@me.com",
    accessOn: false,
    color: "bg-indigo-500",
  },
  {
    name: "Gaspar Antunes",
    email: "glenz@outlook.com",
    accessOn: false,
    color: "bg-yellow-600",
  },
];

const StatusDot: React.FC<{ status: "Online" | "Away" | "Offline" }> = ({
  status,
}) => {
  if (status === "Online") {
    return (
      <span className="flex items-center gap-1.5 text-sm text-gray-700">
        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
        Online
      </span>
    );
  }
  if (status === "Offline") {
    return (
      <span className="flex items-center gap-1.5 text-sm text-gray-700">
        <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>
        Offline
      </span>
    );
  }
  // Away - no dot
  return <span className="text-sm text-gray-500">Away</span>;
};

const Toggle: React.FC<{ on: boolean }> = ({ on }) => (
  <div
    className={`relative w-10 h-6 rounded-full transition-colors flex-shrink-0 ${
      on ? "bg-purple-600" : "bg-gray-300"
    }`}
  >
    <div
      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
        on ? "translate-x-5" : "translate-x-1"
      }`}
    ></div>
  </div>
);

const TabBar: React.FC<{ active: string }> = ({ active }) => (
  <div className="flex items-center justify-between px-6 py-3 border-b border-black/10">
    <div className="flex items-center gap-1">
      {["All Contacts", "Teammates", "Customers"].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === active
              ? "bg-black text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1.5 px-3 py-2 border border-black/15 rounded-lg text-sm text-gray-600 hover:bg-black/5">
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
        Sort: A-Z
      </button>
      <button className="flex items-center gap-1.5 px-3 py-2 border border-black/15 rounded-lg text-sm text-gray-600 hover:bg-black/5">
        ··· Bulk Actions
      </button>
    </div>
  </div>
);

const Pagination: React.FC = () => (
  <div className="flex items-center justify-between px-6 py-4 border-t border-black/10">
    <button className="flex items-center gap-1.5 px-4 py-2 border border-black/15 rounded-lg text-sm text-gray-600 hover:bg-black/5">
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
    <span className="text-sm text-gray-500">Page 1 of 10</span>
    <button className="flex items-center gap-1.5 px-4 py-2 border border-black/15 rounded-lg text-sm text-gray-600 hover:bg-black/5">
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
);

// V1: Name, Email, Service, Status table
const V1Content: React.FC = () => (
  <div className="flex-1 overflow-auto px-6 py-4">
    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      <TabBar active="All Contacts" />

      {/* Table header */}
      <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/10 bg-white">
        <div className="w-8"></div>
        <div className="text-xs font-medium text-gray-500">
          Name <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Email <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Service <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Status <SortIcon />
        </div>
        <div></div>
      </div>

      {/* Table rows */}
      {v1Contacts.map((contact, i) => (
        <div
          key={contact.name}
          className={`grid grid-cols-[auto_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors`}
        >
          <div className="w-8">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center gap-3 min-w-0">
            <Avatar name={contact.name} color={contact.color} />
            <span className="text-sm font-medium text-gray-900 truncate">
              {contact.name}
            </span>
          </div>
          <div className="text-sm text-gray-500 truncate pr-4">
            {contact.email}
          </div>
          <div className="text-sm text-gray-700">{contact.service}</div>
          <div>
            <StatusDot status={contact.status} />
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
            ···
          </button>
        </div>
      ))}

      <Pagination />
    </div>
  </div>
);

// V2: Name, Email, Access (dropdown + toggle) table
const V2Content: React.FC = () => (
  <div className="flex-1 overflow-auto px-6 py-4">
    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      <TabBar active="All Contacts" />

      {/* Table header */}
      <div className="grid grid-cols-[auto_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/10 bg-white">
        <div className="w-8"></div>
        <div className="text-xs font-medium text-gray-500">
          Name <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Email <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Access <SortIcon />
        </div>
        <div></div>
      </div>

      {/* Table rows */}
      {v2Contacts.map((contact) => (
        <div
          key={contact.name}
          className="grid grid-cols-[auto_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors"
        >
          <div className="w-8">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center gap-3 min-w-0">
            <Avatar name={contact.name} color={contact.color} />
            <span className="text-sm font-medium text-gray-900 truncate">
              {contact.name}
            </span>
          </div>
          <div className="text-sm text-gray-500 truncate pr-4">
            {contact.email}
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-black/15 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              View and edit
            </button>
            <Toggle on={contact.accessOn} />
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
            ···
          </button>
        </div>
      ))}

      <Pagination />
    </div>
  </div>
);

// New Contact modal overlay on top of V1
const NewContactModal: React.FC = () => (
  <div className="flex-1 overflow-auto px-6 py-4 relative">
    {/* Background: V1 table blurred/dimmed */}
    <div className="bg-white rounded-xl border border-black/10 overflow-hidden opacity-40 pointer-events-none">
      <TabBar active="All Contacts" />
      <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/10">
        <div className="w-8"></div>
        <div className="text-xs font-medium text-gray-500">
          Name <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Email <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Service <SortIcon />
        </div>
        <div className="text-xs font-medium text-gray-500">
          Status <SortIcon />
        </div>
        <div></div>
      </div>
      {v1Contacts.slice(0, 6).map((contact) => (
        <div
          key={contact.name}
          className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/5"
        >
          <div className="w-8">
            <div className="w-4 h-4 rounded border border-gray-300"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full ${contact.color}`}></div>
            <span className="text-sm font-medium text-gray-900">
              {contact.name}
            </span>
          </div>
          <div className="text-sm text-gray-500">{contact.email}</div>
          <div className="text-sm text-gray-700">{contact.service}</div>
          <StatusDot status={contact.status} />
          <span className="text-gray-400">···</span>
        </div>
      ))}
    </div>

    {/* Modal */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-2xl shadow-2xl w-[480px] max-w-full mx-4 overflow-hidden">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Latest transactions
          </h2>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
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

        <div className="px-6 pb-6 space-y-4">
          {/* Photo upload area */}
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-purple-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Start typing ..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Position
            </label>
            <input
              type="text"
              placeholder="Start typing ..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="Start typing ..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="Start typing ..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Submit button */}
          <button className="w-full py-3.5 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl transition-colors text-sm">
            Create contact
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Empty state
const EmptyContent: React.FC = () => (
  <div className="flex-1 relative overflow-hidden flex items-center justify-center">
    {/* Colorful gradient blobs background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Yellow/orange blob top-right */}
      <div className="absolute -top-20 right-0 w-80 h-80 bg-gradient-to-bl from-yellow-300 via-orange-300 to-transparent rounded-full opacity-60 blur-2xl"></div>
      {/* Purple blob bottom-left */}
      <div className="absolute bottom-0 -left-10 w-72 h-72 bg-gradient-to-tr from-purple-500 via-purple-400 to-transparent rounded-full opacity-50 blur-2xl"></div>
      {/* Green blob center-right */}
      <div className="absolute top-1/2 right-20 w-40 h-40 bg-gradient-to-l from-green-400 to-transparent rounded-full opacity-40 blur-2xl"></div>
    </div>

    {/* Empty state card */}
    <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
      {/* Icon */}
      <div className="mb-6">
        <svg
          className="w-20 h-20 text-gray-400"
          fill="none"
          viewBox="0 0 80 80"
          stroke="currentColor"
          strokeWidth={2}
        >
          {/* Person silhouette with question/no mark */}
          <circle cx="40" cy="28" r="14" strokeLinecap="round" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 68c0-14.36 11.64-26 26-26s26 11.64 26 26"
          />
          {/* Diagonal slash */}
          <line
            x1="58"
            y1="8"
            x2="22"
            y2="72"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        No contacts found?
      </h2>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed">
        Try to add more contacts from your personal
        <br />
        account or invite your friends.
      </p>

      <button className="flex items-center gap-2 px-6 py-3 bg-purple-600/10 hover:bg-purple-600/20 text-purple-700 text-sm font-medium rounded-xl border border-purple-200 transition-colors">
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
        Create new contact
      </button>
    </div>
  </div>
);

export const ContactsList: React.FC<ContactsListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const bg = theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f5efe6]";

  const renderContent = () => {
    switch (variant) {
      case "v2":
        return <V2Content />;
      case "new-contact":
        return <NewContactModal />;
      case "empty":
        return <EmptyContent />;
      default:
        return <V1Content />;
    }
  };

  return (
    <div className={`flex h-screen ${bg}`}>
      <ContactsSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        {renderContent()}
        <Footer />
      </div>
    </div>
  );
};
